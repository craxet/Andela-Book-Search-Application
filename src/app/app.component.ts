import { FormControl, FormGroup, FormControlName, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { BookSearchService } from './services/book-search.service';
import { Subscription, Subscriber } from 'rxjs';
import { TenWordsPipe } from './pipes/ten-words.pipe';
// import { setTimeout } from 'timers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'andelaBookSearchApp';

  public searching = false;
  public bookNotFound = false;
  public offline = false;
  public bulkbooks: any;
  public currentBook: any;

  bookSearchFormGroup: FormGroup;

  constructor(private fb: FormBuilder, private bookservice: BookSearchService) { }

  ngOnInit(): void {
    this.bookSearchFormGroup = this.fb.group({
      isbnToSearch: ['', [Validators.required, Validators.maxLength(13), Validators.minLength(13)]],
    })

    // get bulk books if any
    this.getLocalBulkBooks();
  }

  public onSubmit() {
    if (this.bookSearchFormGroup.invalid) {
      return console.log('ISBN not provided')
    }

    // reset previous Error Message shown
    this.bookNotFound = false;
    // Clear offline Err
    this.offline = false;
    // Start Loading
    this.searching = true;

    // Delay API call for 2 min to show loading buffer 
    setTimeout(() => {

      console.log('Submitted...');
      console.log(this.bookSearchFormGroup.get('isbnToSearch').value);

      this.searchBook();

    }, 2000);
  }

  // Get book Method to call GEtbook service
  private searchBook() {

    const isbn = this.bookSearchFormGroup.get('isbnToSearch').value;

    // Filter Existing Books
    // console.log(typeof this.bulkbooks);
    // console.log(this.bulkbooks.length);

    if (this.bulkbooks.length >= 1) {

      console.log('We have saved books ');
      const lookingFor = this.bulkbooks.filter(function (data: any) { return data.isbn === isbn; })
      console.log(lookingFor);

      // If not found
      if (lookingFor.length < 1) {
        console.log('But not this Book ');

      } else {
        console.log('We have this particular book in local DB ');
        // console.log(lookingFor);
        return this.reShuffle(lookingFor[0]);
      }
    } else {
      console.log('Nothing for now');
    }


    // Check if there is internet nefore making online calls  
    if (!navigator.onLine) {
      //IF not onine
      // Stop loading
      this.searching = false;
      return this.offline = true;
    } else {
      this.offline = false;
      this.searcOnline(isbn);
    }

  }

  private getLocalBulkBooks() {
    // console.log(res);
    this.bulkbooks = this.bookservice.getLocalBulkBooks();
    if (this.bulkbooks.length) {
      this.currentBook = this.bulkbooks[0];
    }
  }

  private setLocalBulkBooks(payload) {
    // console.log(res);
    this.bookservice.setLocalBulkBooks(payload);
    // this.currentBook = this.bulkbooks[0];
  }


  public addNewBook(book: any) {
    console.log(book);

    const payload = {
      "title": book.title,
      "authors": book.authors,
      "isbn": book.isbn13,
      "image": book.image,
      "desc": book.desc,
    }
    this.bulkbooks.unshift(payload);

    // Save the new Value of Books into local storage
    this.setLocalBulkBooks(this.bulkbooks)
  }

  public reShuffle(payload) {

    for (var i = 0; i < this.bulkbooks.length; i++) {
      if (this.bulkbooks[i] === payload) {
        console.log('Found it there');
        // console.log(this.bulkbooks[i]); 
        this.bulkbooks.splice(i, 1);
      }
    }

    // console.log(payload); 
    this.bulkbooks.unshift(payload);
    // Save the new Value of Books into local storage
    this.setLocalBulkBooks(this.bulkbooks)

    // Clear Form Input
    this.bookSearchFormGroup.get('isbnToSearch').reset();
    // Now stop loading
    this.searching = false;
  }

  public clearLib() {
    // clear Book
    this.bulkbooks.splice(0);
    // save cleared books
    this.setLocalBulkBooks(this.bulkbooks)
  }

  public searcOnline(isbn) {
    this.bookservice.searchBook(isbn).subscribe(res => {
      console.log(res);
      console.log('Back from the server');
      if (res['error'] === '[books] Not found') {
        console.log('Book not found')
        this.bookNotFound = true;
      }

      if (res['error'] === '0') {
        console.log('Book   found 00000')
        this.bookNotFound = false;
        this.addNewBook(res);
        // Clear Form Input
        this.bookSearchFormGroup.get('isbnToSearch').reset();
      }
      // Stop loading
      this.searching = false;
    });
  }
}
