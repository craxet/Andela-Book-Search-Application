(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-input{\r\n    width: 100%;\r\n}\r\n.book-img {\r\n  height: 300px;\r\n  width: auto;\r\n  clear: both;\r\n}\r\n.past-book-img {\r\n  height: 200px;\r\n  width: auto;\r\n  clear: both;\r\n}\r\nbody {\r\n  background-image: url('bgr1.png');\r\n  background-repeat: repeat !important;\r\n}\r\n.bulkbooks {\r\n  background-image: url('bgr1.png');\r\n  background-repeat: repeat !important;\r\n\r\n}\r\n.each-card {\r\n  border-radius: 0;\r\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.70);\r\n  transition: all .7s ease 0s;\r\n}\r\n.each-card:hover { \r\n  box-shadow: 0 0  15px rgba(0, 0, 0, 1); \r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0NBQ2Y7QUFDRDtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osWUFBWTtDQUNiO0FBRUQ7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLFlBQVk7Q0FDYjtBQUVEO0VBQ0Usa0NBQWdEO0VBQ2hELHFDQUFxQztDQUN0QztBQUVEO0VBQ0Usa0NBQWdEO0VBQ2hELHFDQUFxQzs7Q0FFdEM7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQix3Q0FBd0M7RUFDeEMsNEJBQTRCO0NBQzdCO0FBRUQ7RUFDRSx1Q0FBdUM7Q0FDeEMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLWlucHV0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmJvb2staW1nIHtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4ucGFzdC1ib29rLWltZyB7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICB3aWR0aDogYXV0bztcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvaW1nL2JncjEucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnVsa2Jvb2tzIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2Fzc2V0cy9pbWcvYmdyMS5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0ICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4uZWFjaC1jYXJkIHtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjcwKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjdzIGVhc2UgMHM7XHJcbn1cclxuXHJcbi5lYWNoLWNhcmQ6aG92ZXIgeyBcclxuICBib3gtc2hhZG93OiAwIDAgIDE1cHggcmdiYSgwLCAwLCAwLCAxKTsgXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\"\n    integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n  <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.8.1/css/all.css\"\n    integrity=\"sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf\" crossorigin=\"anonymous\">\n  <title>Document</title>\n</head>\n\n<body>\n\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" href=\"#\">Andela Book Search</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n      aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  </nav>\n\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6  ml-auto mr-auto pt-5 mt-4 \">\n        <form [formGroup]=\"bookSearchFormGroup\" (ngSubmit)=\"onSubmit()\">\n\n          <h4 class=\"text-primary\">Search for a Book</h4>\n\n          <div class=\"form-group pt-4\">\n            <mat-form-field class=\"full-input\">\n              <input formControlName=\"isbnToSearch\" matInput placeholder=\"Enter ISBN to search for a book\" type=\"text\"\n                value=\"\" prefix=\"ISBN \" mask=\"000-0-000-00000-0\" [readonly]=\"searching\">\n            </mat-form-field>\n\n            <small *ngIf=\"bookNotFound\" class=\"form-text text-danger\">\n              <i class=\"far fa-sad-cry\"></i>\n              Sorry! Rats ate this book and we are still looking for a replacement.\n            </small>\n          </div>\n\n          <button class=\"btn btn-primary rounded-0 btn-block \" type=\"submit\"\n            [disabled]=\"searching || this.bookSearchFormGroup.invalid\">\n\n            <span *ngIf=\"!searching\"> <i class=\"fas fa-search\"></i> Search</span>\n\n            <i *ngIf=\"searching\">\n              <span class=\"spinner-grow spinner-grow-sm\" role=\"status\" aria-hidden=\"true\"></span>\n              Searching...\n            </i>\n          </button>\n\n          <small *ngIf=\"offline\" class=\"form-text text-danger\">\n            <i class=\"far fa-sad-cry\"></i>\n            Sorry! You have no Internet Connection.\n          </small>\n\n        </form>\n\n      </div>\n    </div>\n  </div>\n\n  <section *ngIf=\"bulkbooks && bulkbooks.length > 0\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6 ml-auto mr-auto pt-2 each-card  text-center mt-5\">\n\n          <img class=\"book-img\" [src]=\"bulkbooks[0].image\" alt=\" Book Name\">\n\n          <h5> <strong> Title: </strong> {{bulkbooks[0].title}}</h5>\n          <h6> <strong> Author(s): </strong> {{bulkbooks[0].authors}}</h6>\n          <p> <strong> Description: </strong> {{bulkbooks[0].desc  | tenWords }} </p>\n\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section *ngIf=\"bulkbooks && bulkbooks.length > 1\" class=\"bulkbooks\">\n    <div class=\"container\">\n      <div class=\"row  \">\n\n        <div class=\"col-md-12 text-muted mt-4\">\n          <h4> Book History </h4>\n        </div>\n\n        <div *ngFor=\"let bulkbook of bulkbooks | slice:1\" class=\"col-md-3 mt-1 text-center each-card mb-1\"\n          (click)=\"reShuffle(bulkbook)\">\n          <img class=\"past-book-img\" [src]=\"bulkbook.image\" alt=\" Book Name\">\n          <!-- <h5>{{bulkbook.title}}</h5> -->\n          <h6> <strong> Title:</strong> {{bulkbook.title}}</h6>\n          <p> <strong> Author(s): </strong> {{bulkbook.authors}} </p>\n          <p><strong> Description: </strong> {{bulkbook.desc | tenWords }}</p>\n        </div>\n\n      </div>\n    </div>\n  </section>\n\n  <section>\n    <div class=\"container\" *ngIf=\"bulkbooks && bulkbooks.length > 0\">\n      <div class=\"row\">\n        <div class=\"col-md-12 text-right\">\n          <button (click)=\"clearLib()\" class=\"btn btn-primary rounded-0 \" type=\"button\">\n            <i class=\"fas fa-trash-alt\" aria-hidden=\"true\"></i>\n            Clear Library...\n          </button>\n        </div>\n      </div>\n    </div>\n  </section>\n\n\n  <Section>\n    <div class=\"container pt-5\">\n      <div class=\"row\">\n        <div class=\"footer\">\n\n        </div>\n      </div>\n    </div>\n  </Section>\n</body>\n\n</html>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_book_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/book-search.service */ "./src/app/services/book-search.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { setTimeout } from 'timers';
var AppComponent = /** @class */ (function () {
    function AppComponent(fb, bookservice) {
        this.fb = fb;
        this.bookservice = bookservice;
        this.title = 'andelaBookSearchApp';
        this.searching = false;
        this.bookNotFound = false;
        this.offline = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.bookSearchFormGroup = this.fb.group({
            isbnToSearch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(13), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(13)]],
        });
        // get bulk books if any
        this.getLocalBulkBooks();
    };
    AppComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.bookSearchFormGroup.invalid) {
            return console.log('ISBN not provided');
        }
        // reset previous Error Message shown
        this.bookNotFound = false;
        // Clear offline Err
        this.offline = false;
        // Start Loading
        this.searching = true;
        // Delay API call for 2 min to show loading buffer 
        setTimeout(function () {
            console.log('Submitted...');
            console.log(_this.bookSearchFormGroup.get('isbnToSearch').value);
            _this.searchBook();
        }, 2000);
    };
    // Get book Method to call GEtbook service
    AppComponent.prototype.searchBook = function () {
        var isbn = this.bookSearchFormGroup.get('isbnToSearch').value;
        // Filter Existing Books
        // console.log(typeof this.bulkbooks);
        // console.log(this.bulkbooks.length);
        if (this.bulkbooks.length >= 1) {
            console.log('We have saved books ');
            var lookingFor = this.bulkbooks.filter(function (data) { return data.isbn === isbn; });
            console.log(lookingFor);
            // If not found
            if (lookingFor.length < 1) {
                console.log('But not this Book ');
            }
            else {
                console.log('We have this particular book in local DB ');
                // console.log(lookingFor);
                return this.reShuffle(lookingFor[0]);
            }
        }
        else {
            console.log('Nothing for now');
        }
        // Check if there is internet nefore making online calls  
        if (!navigator.onLine) {
            //IF not onine
            // Stop loading
            this.searching = false;
            return this.offline = true;
        }
        else {
            this.offline = false;
            this.searcOnline(isbn);
        }
    };
    AppComponent.prototype.getLocalBulkBooks = function () {
        // console.log(res);
        this.bulkbooks = this.bookservice.getLocalBulkBooks();
        if (this.bulkbooks.length) {
            this.currentBook = this.bulkbooks[0];
        }
    };
    AppComponent.prototype.setLocalBulkBooks = function (payload) {
        // console.log(res);
        this.bookservice.setLocalBulkBooks(payload);
        // this.currentBook = this.bulkbooks[0];
    };
    AppComponent.prototype.addNewBook = function (book) {
        console.log(book);
        var payload = {
            "title": book.title,
            "authors": book.authors,
            "isbn": book.isbn13,
            "image": book.image,
            "desc": book.desc,
        };
        this.bulkbooks.unshift(payload);
        // Save the new Value of Books into local storage
        this.setLocalBulkBooks(this.bulkbooks);
    };
    AppComponent.prototype.reShuffle = function (payload) {
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
        this.setLocalBulkBooks(this.bulkbooks);
        // Clear Form Input
        this.bookSearchFormGroup.get('isbnToSearch').reset();
        // Now stop loading
        this.searching = false;
    };
    AppComponent.prototype.clearLib = function () {
        // clear Book
        this.bulkbooks.splice(0);
        // save cleared books
        this.setLocalBulkBooks(this.bulkbooks);
    };
    AppComponent.prototype.searcOnline = function (isbn) {
        var _this = this;
        this.bookservice.searchBook(isbn).subscribe(function (res) {
            console.log(res);
            console.log('Back from the server');
            if (res['error'] === '[books] Not found') {
                console.log('Book not found');
                _this.bookNotFound = true;
            }
            if (res['error'] === '0') {
                console.log('Book   found 00000');
                _this.bookNotFound = false;
                _this.addNewBook(res);
                // Clear Form Input
                _this.bookSearchFormGroup.get('isbnToSearch').reset();
            }
            // Stop loading
            _this.searching = false;
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"], _services_book_search_service__WEBPACK_IMPORTED_MODULE_2__["BookSearchService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_book_search_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/book-search.service */ "./src/app/services/book-search.service.ts");
/* harmony import */ var _pipes_ten_words_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/ten-words.pipe */ "./src/app/pipes/ten-words.pipe.ts");
/* harmony import */ var _diaoags_book_preview_book_preview_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./diaoags/book-preview/book-preview.component */ "./src/app/diaoags/book-preview/book-preview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _pipes_ten_words_pipe__WEBPACK_IMPORTED_MODULE_11__["TenWordsPipe"],
                _diaoags_book_preview_book_preview_component__WEBPACK_IMPORTED_MODULE_12__["BookPreviewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_7__["NgxMaskModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]
            ],
            providers: [_services_book_search_service__WEBPACK_IMPORTED_MODULE_10__["BookSearchService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/diaoags/book-preview/book-preview.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/diaoags/book-preview/book-preview.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYW9hZ3MvYm9vay1wcmV2aWV3L2Jvb2stcHJldmlldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/diaoags/book-preview/book-preview.component.html":
/*!******************************************************************!*\
  !*** ./src/app/diaoags/book-preview/book-preview.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  book-preview works!\n</p>\n"

/***/ }),

/***/ "./src/app/diaoags/book-preview/book-preview.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/diaoags/book-preview/book-preview.component.ts ***!
  \****************************************************************/
/*! exports provided: BookPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookPreviewComponent", function() { return BookPreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BookPreviewComponent = /** @class */ (function () {
    function BookPreviewComponent() {
    }
    BookPreviewComponent.prototype.ngOnInit = function () {
    };
    BookPreviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-preview',
            template: __webpack_require__(/*! ./book-preview.component.html */ "./src/app/diaoags/book-preview/book-preview.component.html"),
            styles: [__webpack_require__(/*! ./book-preview.component.css */ "./src/app/diaoags/book-preview/book-preview.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BookPreviewComponent);
    return BookPreviewComponent;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/pipes/ten-words.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/ten-words.pipe.ts ***!
  \*****************************************/
/*! exports provided: TenWordsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenWordsPipe", function() { return TenWordsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TenWordsPipe = /** @class */ (function () {
    function TenWordsPipe() {
    }
    TenWordsPipe.prototype.transform = function (value, args) {
        if (value == null) {
            return value;
        }
        var totalString = '';
        var words = value.split(/\s+\b/);
        for (var index = 0; index <= 9; index++) {
            totalString += words[index] + ' ';
        }
        return totalString.trim() + '...';
    };
    TenWordsPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'tenWords'
        })
    ], TenWordsPipe);
    return TenWordsPipe;
}());



/***/ }),

/***/ "./src/app/services/book-search.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/book-search.service.ts ***!
  \*************************************************/
/*! exports provided: BookSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookSearchService", function() { return BookSearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookSearchService = /** @class */ (function () {
    function BookSearchService(http) {
        this.http = http;
        // private bookUrl = 'https://openlibrary.org/api/books?bibkeys=ISBN:9780980200447&jscmd=details&format=json'
        // private bookUrl = 'https://openlibrary.org/dev/docs/api/books'
        this.corsCheck = 'https://cors-anywhere.herokuapp.com/';
        this.bookUrl = 'https://api.itbook.store/1.0/books/';
        this.bookHistoryUrl = '../../../assets/books.json';
    }
    BookSearchService.prototype.searchBook = function (isbn) {
        console.log(isbn);
        return this.http.get(this.corsCheck + this.bookUrl + isbn);
    };
    BookSearchService.prototype.getBulkBook = function () {
        return this.http.get(this.bookHistoryUrl, this.httpClientHeaders());
    };
    BookSearchService.prototype.getLocalBulkBooks = function () {
        if (JSON.parse(localStorage.getItem('andelaBulkBooks')) === null) {
            // console.log('Not Set yet');
            localStorage.setItem('andelaBulkBooks', JSON.stringify([]));
        }
        console.log(JSON.parse(localStorage.getItem('andelaBulkBooks')));
        return JSON.parse(localStorage.getItem('andelaBulkBooks'));
    };
    BookSearchService.prototype.setLocalBulkBooks = function (payload) {
        // console.log('Not Set yet');
        localStorage.setItem('andelaBulkBooks', JSON.stringify(payload));
        console.log(JSON.parse(localStorage.getItem('andelaBulkBooks')));
        return JSON.parse(localStorage.getItem('andelaBulkBooks'));
    };
    BookSearchService.prototype.httpClientHeaders = function () {
        return {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    };
    BookSearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BookSearchService);
    return BookSearchService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\princ\OneDrive\Desktop\WebMobileProjects\Angular\Others\andelaBookSearchApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map