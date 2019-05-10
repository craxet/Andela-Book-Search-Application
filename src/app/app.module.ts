import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule } from 'ngx-mask'
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BookSearchService } from './services/book-search.service';
import { TenWordsPipe } from './pipes/ten-words.pipe';
import { BookPreviewComponent } from './diaoags/book-preview/book-preview.component';
@NgModule({
  declarations: [
    AppComponent,
    TenWordsPipe,
    BookPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    NgxMaskModule.forRoot(),
    FormsModule, ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BookSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
