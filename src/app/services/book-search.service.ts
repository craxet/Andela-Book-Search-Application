import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookSearchService {

  // private bookUrl = 'https://openlibrary.org/api/books?bibkeys=ISBN:9780980200447&jscmd=details&format=json'
  // private bookUrl = 'https://openlibrary.org/dev/docs/api/books'
  private corsCheck = 'https://cors-anywhere.herokuapp.com/'
  private bookUrl = 'https://api.itbook.store/1.0/books/'
  private bookHistoryUrl = '../../../assets/books.json';

  constructor(private http: HttpClient) { }


  public searchBook(isbn: {}) {
    console.log(isbn);
    return this.http.get(this.corsCheck + this.bookUrl + isbn);
  }

  public getBulkBook() {
    return this.http.get(this.bookHistoryUrl, this.httpClientHeaders());
  }

  public getLocalBulkBooks() {

    if (JSON.parse(localStorage.getItem('andelaBulkBooks')) === null) {
      // console.log('Not Set yet');
      localStorage.setItem('andelaBulkBooks', JSON.stringify([]));
    }

    console.log(JSON.parse(localStorage.getItem('andelaBulkBooks')));

    return JSON.parse(localStorage.getItem('andelaBulkBooks'));
  }

  public setLocalBulkBooks(payload) {

    // console.log('Not Set yet');
    localStorage.setItem('andelaBulkBooks', JSON.stringify(payload));
    console.log(JSON.parse(localStorage.getItem('andelaBulkBooks')));

    return JSON.parse(localStorage.getItem('andelaBulkBooks'));
  }

  private httpClientHeaders() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

}
