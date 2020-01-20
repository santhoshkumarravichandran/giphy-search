(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

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

/***/ "./src/lib/components/search-box/search-box.component.html":
/*!*****************************************************************!*\
  !*** ./src/lib/components/search-box/search-box.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<span [ngClass]=\" allGiphies.length>0 ? 'small_logo' : 'main_logo'\">\n <img src=\"assets/giphy-white.png\" alt=\"\">\n</span> \n<div class=\"searchBox\" [ngClass]=\" allGiphies.length>0 ? 'onResult' : ''\">\n  <input class=\"searchInput\" type=\"text\" [(ngModel)]=\"searchKeyword\" placeholder=\"Search your GIPHY\">\n  <button class=\"searchButton\" (click)=\"onSearch(searchKeyword)\">\n    <i class=\"material-icons\">\n      search\n    </i>\n  </button>\n</div>\n\n<app-search-result [giphies]=\"allGiphies\" [totalSearchResult]=\"totalSearchResult\" [searchKeyword]=\"searchKeyword\">\n</app-search-result>"

/***/ }),

/***/ "./src/lib/components/search-box/search-box.component.scss":
/*!*****************************************************************!*\
  !*** ./src/lib/components/search-box/search-box.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main_logo img {\n  width: 300px;\n  height: auto;\n  position: absolute;\n  top: 15%;\n  left: 40%; }\n\n.small_logo img {\n  width: 200px;\n  position: absolute;\n  left: 10%;\n  top: 20px; }\n\n.searchBox {\n  position: absolute;\n  top: 30%;\n  left: 50%;\n  -webkit-transform: translate(-50%, 50%);\n          transform: translate(-50%, 50%);\n  background: #ffffff;\n  height: 50px;\n  border-radius: 40px;\n  padding: 5px; }\n\n.searchBox.onResult {\n    top: 20px;\n    width: 50%;\n    color: black;\n    padding: 10px; }\n\n.banner {\n  background-image: \"../assets/mobile_poc.jpg\"; }\n\n.searchBox:hover > .searchInput {\n  width: 340px;\n  padding: 0 6px; }\n\n.searchBox > .searchInput {\n  top: 0;\n  position: none; }\n\n.searchBox input {\n  border: none;\n  box-shadow: none;\n  outline: none; }\n\n.searchBox:hover > .searchButton {\n  background: white;\n  color: #2f3640;\n  border: none;\n  outline: none; }\n\n.searchButton {\n  color: white;\n  float: right;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #2f3640;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n  outline: none; }\n\n.searchInput {\n  border: none;\n  background: none;\n  outline: none;\n  float: left;\n  padding: 0;\n  font-size: 16px;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n  line-height: 40px;\n  width: 0px; }\n\n.resultBox {\n  position: absolute;\n  top: 50%;\n  left: 40%;\n  height: 40px;\n  padding: 10px; }\n\nimg {\n  margin-left: 8px;\n  margin-bottom: 8px; }\n\n@media screen and (max-width: 620px) {\n  .searchBox.onResult {\n    top: 20px;\n    width: 80%;\n    color: black;\n    -webkit-transform: translate(-50%, 50%);\n            transform: translate(-50%, 50%); }\n  .searchBox.onResult > .searchInput {\n    width: 550px;\n    padding: 10px; }\n  .searchBox:hover > .searchInput {\n    width: 110px;\n    padding: 0 6px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW50aG9zaGt1bWFyL0RvY3VtZW50cy9zZWFyY2gvZ2lwaHlzZWFyY2gvc3JjL2xpYi9jb21wb25lbnRzL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFlBQVk7RUFDWixZQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFFBQU87RUFDUCxTQUFRLEVBQUE7O0FBR1o7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFRLEVBQUE7O0FBRVY7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCx1Q0FBK0I7VUFBL0IsK0JBQStCO0VBQy9CLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVksRUFBQTs7QUFSZDtJQVVJLFNBQVM7SUFDVCxVQUFTO0lBQ1QsWUFBVztJQUNWLGFBQWEsRUFBQTs7QUFJbEI7RUFDRSw0Q0FDRixFQUFBOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxNQUFNO0VBQ04sY0FBYSxFQUFBOztBQUVmO0VBQ0MsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixhQUFhLEVBQUE7O0FBR2Q7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLFlBQVk7RUFDWixhQUFhLEVBQUE7O0FBR2Y7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixvQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixhQUFZLEVBQUE7O0FBR2Q7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixXQUFXO0VBQ1gsVUFBVTtFQUNWLGVBQWU7RUFDZix3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixVQUFVLEVBQUE7O0FBR1o7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxZQUFZO0VBQ1osYUFBYSxFQUFBOztBQUdmO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFO0lBRUksU0FBUztJQUNULFVBQVM7SUFDVCxZQUFZO0lBQ1osdUNBQStCO1lBQS9CLCtCQUErQixFQUFBO0VBTG5DO0lBU0ksWUFBWTtJQUNaLGFBQWEsRUFBQTtFQUdqQjtJQUNFLFlBQVk7SUFDWixjQUFjLEVBQUEsRUFDZiIsImZpbGUiOiJjb21wb25lbnRzL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLm1haW5fbG9nbyBpbWcge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6YXV0bztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOjE1JTtcbiAgICBsZWZ0OjQwJTtcbn1cblxuLnNtYWxsX2xvZ28gaW1nIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEwJTtcbiAgdG9wOjIwcHg7XG59XG4uc2VhcmNoQm94IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA1MCUpO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgJi5vblJlc3VsdCB7XG4gICAgdG9wOiAyMHB4O1xuICAgIHdpZHRoOjUwJTtcbiAgICBjb2xvcjpibGFjaztcbiAgICAgcGFkZGluZzogMTBweDtcbiAgfVxufVxuXG4uYmFubmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogXCIuLi9hc3NldHMvbW9iaWxlX3BvYy5qcGdcIlxufVxuXG4uc2VhcmNoQm94OmhvdmVyPi5zZWFyY2hJbnB1dCB7XG4gIHdpZHRoOiAzNDBweDtcbiAgcGFkZGluZzogMCA2cHg7XG59XG5cbi5zZWFyY2hCb3g+LnNlYXJjaElucHV0IHtcbiAgdG9wOiAwOyAgIFxuICBwb3NpdGlvbjpub25lO1xufVxuLnNlYXJjaEJveCBpbnB1dHtcbiBib3JkZXI6IG5vbmU7XG4gYm94LXNoYWRvdzogbm9uZTtcbiBvdXRsaW5lOiBub25lO1xufVxuXG4uc2VhcmNoQm94OmhvdmVyPi5zZWFyY2hCdXR0b24ge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6ICMyZjM2NDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnNlYXJjaEJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICMyZjM2NDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xuICBvdXRsaW5lOm5vbmU7XG59XG5cbi5zZWFyY2hJbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAwcHg7XG5cbn1cbi5yZXN1bHRCb3gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA0MCU7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuaW1nIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MjBweCkge1xuICAuc2VhcmNoQm94IHtcbiAgICAmLm9uUmVzdWx0IHtcbiAgICAgIHRvcDogMjBweDtcbiAgICAgIHdpZHRoOjgwJTtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUwJSk7XG4gICAgfVxuXG4gICAgJi5vblJlc3VsdD4uc2VhcmNoSW5wdXQge1xuICAgICAgd2lkdGg6IDU1MHB4O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG4gIH1cbiAgLnNlYXJjaEJveDpob3Zlcj4uc2VhcmNoSW5wdXQge1xuICAgIHdpZHRoOiAxMTBweDtcbiAgICBwYWRkaW5nOiAwIDZweDtcbiAgfVxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/lib/components/search-box/search-box.component.ts":
/*!***************************************************************!*\
  !*** ./src/lib/components/search-box/search-box.component.ts ***!
  \***************************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_giphy_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/giphy-search.service */ "./src/lib/services/giphy-search.service.ts");
/* harmony import */ var _services_utility_bad_word_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/utility/bad-word.filter */ "./src/lib/services/utility/bad-word.filter.ts");




var SearchBarComponent = /** @class */ (function () {
    function SearchBarComponent(gifSearchService, badWordFilter) {
        this.gifSearchService = gifSearchService;
        this.badWordFilter = badWordFilter;
        this.allGiphies = [];
        this.searchKeyword = "";
        this.totalSearchResult = 0;
    }
    SearchBarComponent.prototype.ngOnInit = function () { };
    SearchBarComponent.prototype.onSearch = function (keyword) {
        var _this = this;
        if (keyword !== "") {
            var cleanSearchWord = this.badWordFilter.clean(keyword);
            this.gifSearchService.getGIFs(cleanSearchWord).subscribe(function (res) {
                _this.allGiphies = res.data;
                _this.totalSearchResult = res.pagination.total_count;
            });
        }
    };
    SearchBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-search-box",
            template: __webpack_require__(/*! ./search-box.component.html */ "./src/lib/components/search-box/search-box.component.html"),
            styles: [__webpack_require__(/*! ./search-box.component.scss */ "./src/lib/components/search-box/search-box.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_giphy_search_service__WEBPACK_IMPORTED_MODULE_2__["GiphySearchService"],
            _services_utility_bad_word_filter__WEBPACK_IMPORTED_MODULE_3__["BadWordFilter"]])
    ], SearchBarComponent);
    return SearchBarComponent;
}());



/***/ }),

/***/ "./src/lib/components/search-paginator/search-paginator.component.html":
/*!*****************************************************************************!*\
  !*** ./src/lib/components/search-paginator/search-paginator.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  search-paginator works!\n</p>\n"

/***/ }),

/***/ "./src/lib/components/search-paginator/search-paginator.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/lib/components/search-paginator/search-paginator.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wb25lbnRzL3NlYXJjaC1wYWdpbmF0b3Ivc2VhcmNoLXBhZ2luYXRvci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/lib/components/search-paginator/search-paginator.component.ts":
/*!***************************************************************************!*\
  !*** ./src/lib/components/search-paginator/search-paginator.component.ts ***!
  \***************************************************************************/
/*! exports provided: SearchPaginatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPaginatorComponent", function() { return SearchPaginatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchPaginatorComponent = /** @class */ (function () {
    function SearchPaginatorComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchPaginatorComponent.prototype, "totalItem", void 0);
    SearchPaginatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-paginator',
            template: __webpack_require__(/*! ./search-paginator.component.html */ "./src/lib/components/search-paginator/search-paginator.component.html"),
            styles: [__webpack_require__(/*! ./search-paginator.component.scss */ "./src/lib/components/search-paginator/search-paginator.component.scss")]
        })
    ], SearchPaginatorComponent);
    return SearchPaginatorComponent;
}());



/***/ }),

/***/ "./src/lib/components/search-result/search-result.component.html":
/*!***********************************************************************!*\
  !*** ./src/lib/components/search-result/search-result.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n<ul style=\"background-color: none\" *ngIf=\"giphies.length>0\" class=\"gallery_latest\">\n   <p class=\"search_result\">\n     <span class=\"keyword\">{{searchKeyword}}</span>\n    <span class=\"result_count\">{{totalSearchResult}} GIFs</span>\n  </p>\n   \n   <li *ngFor=\"let image of giphies\" >\n     <img [src]=\"image.images.fixed_height_small.url\" class=\"\">\n   </li>\n </ul>"

/***/ }),

/***/ "./src/lib/components/search-result/search-result.component.scss":
/*!***********************************************************************!*\
  !*** ./src/lib/components/search-result/search-result.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  max-height: 200px;\n  max-width: 200px;\n  margin-left: 8px;\n  margin-bottom: 8px; }\n\n.gallery_view {\n  position: absolute;\n  top: 50%;\n  left: 30%; }\n\n.gallery_latest {\n  display: -webkit-box;\n  display: flex;\n  width: 80%;\n  margin: 32px auto;\n  flex-wrap: wrap;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: absolute;\n  top: 90px;\n  left: 10%; }\n\n.gallery_latest .search_result {\n    width: 100%;\n    height: 15%;\n    color: #ffffff;\n    padding: 10px; }\n\n.gallery_latest .search_result .keyword {\n      font-weight: bold;\n      font-size: xx-large;\n      padding-right: 20px; }\n\n.gallery_latest .search_result .result_count {\n      font-size: medium; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW50aG9zaGt1bWFyL0RvY3VtZW50cy9zZWFyY2gvZ2lwaHlzZWFyY2gvc3JjL2xpYi9jb21wb25lbnRzL3NlYXJjaC1yZXN1bHQvc2VhcmNoLXJlc3VsdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FDRixFQUFBOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUyxFQUFBOztBQVRYO0lBV0ksV0FBVztJQUNYLFdBQVU7SUFDVixjQUFjO0lBQ2QsYUFBWSxFQUFBOztBQWRoQjtNQWdCTSxpQkFBaUI7TUFDakIsbUJBQW1CO01BQ25CLG1CQUFtQixFQUFBOztBQWxCekI7TUFxQk0saUJBQWlCLEVBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9zZWFyY2gtcmVzdWx0L3NlYXJjaC1yZXN1bHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4uZ2FsbGVyeV92aWV3IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMzAlXG59XG5cbi5nYWxsZXJ5X2xhdGVzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMzJweCBhdXRvO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDkwcHg7XG4gIGxlZnQ6IDEwJTtcbiAgJiAuc2VhcmNoX3Jlc3VsdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OjE1JTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBwYWRkaW5nOjEwcHg7XG4gICAgJiAua2V5d29yZHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgfVxuICAgICYgLnJlc3VsdF9jb3VudCB7XG4gICAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/lib/components/search-result/search-result.component.ts":
/*!*********************************************************************!*\
  !*** ./src/lib/components/search-result/search-result.component.ts ***!
  \*********************************************************************/
/*! exports provided: SearchResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultComponent", function() { return SearchResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchResultComponent = /** @class */ (function () {
    function SearchResultComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchResultComponent.prototype, "giphies", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchResultComponent.prototype, "totalSearchResult", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchResultComponent.prototype, "searchKeyword", void 0);
    SearchResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-search-result",
            template: __webpack_require__(/*! ./search-result.component.html */ "./src/lib/components/search-result/search-result.component.html"),
            styles: [__webpack_require__(/*! ./search-result.component.scss */ "./src/lib/components/search-result/search-result.component.scss")]
        })
    ], SearchResultComponent);
    return SearchResultComponent;
}());



/***/ }),

/***/ "./src/lib/constant.ts":
/*!*****************************!*\
  !*** ./src/lib/constant.ts ***!
  \*****************************/
/*! exports provided: GIF_API_ENDPOINT, API_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GIF_API_ENDPOINT", function() { return GIF_API_ENDPOINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_KEY", function() { return API_KEY; });
var GIF_API_ENDPOINT = 'https://api.giphy.com/v1/gifs/search';
var API_KEY = 'CdRKiCMbTnt9CkZTZ0lGukSczk6iT4Z6';


/***/ }),

/***/ "./src/lib/search.component.html":
/*!***************************************!*\
  !*** ./src/lib/search.component.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-search-box></app-search-box>"

/***/ }),

/***/ "./src/lib/search.component.scss":
/*!***************************************!*\
  !*** ./src/lib/search.component.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background: #121212; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW50aG9zaGt1bWFyL0RvY3VtZW50cy9zZWFyY2gvZ2lwaHlzZWFyY2gvc3JjL2xpYi9zZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSxtQkFBMkIsRUFBQSIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbmJhY2tncm91bmQ6IHJnYigxOCwgMTgsIDE4KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/lib/search.component.ts":
/*!*************************************!*\
  !*** ./src/lib/search.component.ts ***!
  \*************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'search-box';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./search.component.html */ "./src/lib/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/lib/search.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/lib/search.module.ts":
/*!**********************************!*\
  !*** ./src/lib/search.module.ts ***!
  \**********************************/
/*! exports provided: DemoMaterialModule, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function() { return DemoMaterialModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search.component */ "./src/lib/search.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/search-box/search-box.component */ "./src/lib/components/search-box/search-box.component.ts");
/* harmony import */ var _components_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/search-result/search-result.component */ "./src/lib/components/search-result/search-result.component.ts");
/* harmony import */ var _components_search_paginator_search_paginator_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/search-paginator/search-paginator.component */ "./src/lib/components/search-paginator/search-paginator.component.ts");











var DemoMaterialModule = /** @class */ (function () {
    function DemoMaterialModule() {
    }
    return DemoMaterialModule;
}());

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_search_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _components_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_8__["SearchBarComponent"], _components_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_9__["SearchResultComponent"], _components_search_paginator_search_paginator_component__WEBPACK_IMPORTED_MODULE_10__["SearchPaginatorComponent"]],
            exports: [_components_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_9__["SearchResultComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"]
            ],
            providers: [],
            bootstrap: [_search_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/lib/services/giphy-search.service.ts":
/*!**************************************************!*\
  !*** ./src/lib/services/giphy-search.service.ts ***!
  \**************************************************/
/*! exports provided: GiphySearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiphySearchService", function() { return GiphySearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constant */ "./src/lib/constant.ts");






var GiphySearchService = /** @class */ (function () {
    function GiphySearchService(http) {
        this.http = http;
    }
    GiphySearchService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    GiphySearchService.prototype.getGIFs = function (keyword) {
        var apiUrl = _constant__WEBPACK_IMPORTED_MODULE_5__["GIF_API_ENDPOINT"] + "?apiKey=" + _constant__WEBPACK_IMPORTED_MODULE_5__["API_KEY"] + "&q=" + keyword + "&limit=50";
        return this.http
            .get(apiUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError()));
    };
    GiphySearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GiphySearchService);
    return GiphySearchService;
}());



/***/ }),

/***/ "./src/lib/services/utility/bad-word.filter.ts":
/*!*****************************************************!*\
  !*** ./src/lib/services/utility/bad-word.filter.ts ***!
  \*****************************************************/
/*! exports provided: BadWordFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadWordFilter", function() { return BadWordFilter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var badwords_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! badwords-list */ "./node_modules/badwords-list/lib/index.js");
/* harmony import */ var badwords_list__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(badwords_list__WEBPACK_IMPORTED_MODULE_2__);



var BadWordFilter = /** @class */ (function () {
    function BadWordFilter() {
        this.list = badwords_list__WEBPACK_IMPORTED_MODULE_2___default.a.array;
        this.splitRegex = /\b/;
        this.regex = /[^a-zA-Z0-9|\$|\@]|\^/g;
        this.replaceRegex = /\w/g;
    }
    /**
     * Determine if a string contains profane language.
     */
    BadWordFilter.prototype.isProfane = function (sentence) {
        return (this.list.filter(function (word) {
            var wordExp = new RegExp("\\b" + word.replace(/(\W)/g, '\\$1') + "\\b", 'gi');
            return wordExp.test(sentence);
        }).length > 0 || false);
    };
    /**
     * Replace a word with placeHolder characters;
     */
    BadWordFilter.prototype.replaceWord = function (sentence, placeHolder) {
        return sentence
            .replace(this.regex, '')
            .replace(this.replaceRegex, placeHolder);
    };
    /**
     * Clean bad words if exists in sentence.
     */
    BadWordFilter.prototype.clean = function (sentence, placeHolder) {
        var _this = this;
        if (placeHolder === void 0) { placeHolder = ''; }
        return sentence
            .split(this.splitRegex)
            .map(function (word) {
            return _this.isProfane(word)
                ? _this.replaceWord(word, placeHolder)
                : word;
        })
            .join(this.splitRegex.exec(sentence)[0]);
    };
    BadWordFilter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BadWordFilter);
    return BadWordFilter;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _lib_search_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/search.module */ "./src/lib/search.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_lib_search_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!************************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0/sockjs-node ./src/main.ts ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/santhoshkumar/Documents/search/giphysearch/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node");
module.exports = __webpack_require__(/*! /Users/santhoshkumar/Documents/search/giphysearch/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map