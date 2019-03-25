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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_home_desc_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home-desc.component */ "./src/app/home/home-desc.component.ts");





var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'home-more', component: _home_home_desc_component__WEBPACK_IMPORTED_MODULE_4__["HomeDescComponent"] },
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = ".navbar-fixed-top {\r\n    padding-top: 0px;\r\n    padding-bottom: 0px;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 300;\r\n    box-shadow: 0 6px 12px rgba(0, 0, 0, .175);\r\n    -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, .175);\r\n    background-color: rgba(34, 61, 97, 0.64);\r\n    transition: all .3s;\r\n    height: 75px;\r\n}\r\n\r\n\r\n.footer {\r\n    background: transparent;\r\n}\r\n\r\n\r\n.footer .flowus a i {\r\n    color: #fff;\r\n    font-size: 1rem;\r\n    padding: 5px;\r\n    border: 1px solid #fff;\r\n    border-radius: 0;\r\n    width: 30px;\r\n    height: 30px;\r\n    text-align: center;\r\n    line-height: 18px;\r\n    margin-right: 5px;\r\n    margin-top: 10px;\r\n    float: left;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixZQUFZO0lBQ1osMENBQTBDO0lBQzFDLGtEQUFrRDtJQUNsRCx3Q0FBd0M7SUFHeEMsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7OztBQUdBO0lBQ0ksdUJBQXVCO0FBQzNCOzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLWZpeGVkLXRvcCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHotaW5kZXg6IDMwMDtcclxuICAgIGJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSgwLCAwLCAwLCAuMTc1KTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsIDAsIDAsIC4xNzUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNCwgNjEsIDk3LCAwLjY0KTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcbn1cclxuXHJcblxyXG4uZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uZm9vdGVyIC5mbG93dXMgYSBpIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"culmn\">\n    <header id=\"main_menu\" class=\"header navbar-fixed-top\">            \n        <div class=\"main_menu_bg\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"nave_menu\">\n                        <nav class=\"navbar navbar-default\">\n                            <div class=\"container-fluid\">\n                                <!-- Brand and toggle get grouped for better mobile display -->\n                                <div class=\"navbar-header\">\n                                    <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n                                        <span class=\"sr-only\">Toggle navigation</span>\n                                        <span class=\"icon-bar\"></span>\n                                        <span class=\"icon-bar\"></span>\n                                        <span class=\"icon-bar\"></span>\n                                    </button>\n                                    <a class=\"navbar-brand\" href=\"#home\">\n                                        <img src=\"assets/images/logo.png\"/>\n                                    </a>\n                                </div>\n\n                                <!-- Collect the nav links, forms, and other content for toggling -->\n\n\n\n                                <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n\n                                    <ul class=\"nav navbar-nav navbar-right\">\n                                        <li><a href=\"#home\">HOME</a></li>\n                                        <li><a href=\"#service\">Service</a></li>\n                                        <li><a href=\"#team\">TEAMS</a></li>\n                                        <li><a href=\"#portfolio\">WORKS</a></li>\n                                        <li><a href=\"#testimonial\">Testimonial</a></li>\n                                        <li><a href=\"#contact\">CONTACT</a></li>                                        \n                                    </ul>\n                                </div>\n\n                            </div>\n                        </nav>\n                    </div>\t\n                </div>\n            </div>\n\n        </div>\n    </header> <!--End of header -->\n    \n    <router-outlet></router-outlet>\n\n    <!--footer section -->\n    <section id=\"footer\" class=\"footer_widget\">\n                \n\t\t\t\t<div class=\"video_overlay\">\n                    <div class=\"container\">\n                        <div class=\"row\">\n                            <div class=\"col-sm-12\">\n                                <div class=\"row\">\n                                    <div class=\"main_widget\">\n                                        <div class=\"col-sm-3 col-xs-12\">\n                                            <div class=\"single_widget wow fadeIn\" data-wow-duration=\"800ms\">\n                                                <div class=\"footer_logo\">\n                                                    <img src=\"assets/images/logo.png\" alt=\"\" />\n                                                </div>\n                                                <p class=\" wow fadeInRight\" data-wow-duration=\"1s\">Copyright 2019. All Rights Reserved to Trinet Software</p>\n\n                                            </div>\n                                        </div>\n\n                                        <div class=\"col-sm-3  col-xs-12\">\n                                            <div class=\"single_widget wow fadeIn\" data-wow-duration=\"800ms\">\n\n                                                <div class=\"footer_title\">\n                                                    <h4>SITEMAP</h4>\n                                                    <div class=\"separator\"></div>\n                                                </div>\n                                                <ul>\n                                                    <li><a href=\"\">Services</a></li>\n                                                    <li><a href=\"\">About Us</a></li>\n                                                    <li><a href=\"\">Our Team</a></li>\n                                                    <li><a href=\"\">Portfolio</a></li>\n                                                </ul> \n                                            </div>\n                                        </div>\n\n                                        <div class=\"footer col-sm-6  col-xs-12\">\n                                            <div class=\"single_widget wow fadeIn\" data-wow-duration=\"800ms\">\n\n                                                <div class=\"footer_title\">\n                                                    <h4>SOCIAL MEDIA</h4>\n                                                    <div class=\"separator\"></div>\n                                                </div>\n                                                <div class=\"flowus\">\n                                                        <a href=\"\"><i class=\"fa fa-facebook\"></i></a>\n                                                        <a href=\"\"><i class=\"fa fa-twitter\"></i></a>\n                                                        <a href=\"\"><i class=\"fa fa-google-plus\"></i></a>\n                                                        <a href=\"\"><i class=\"fa fa-instagram\"></i></a>\n                                                        <a href=\"\"><i class=\"fa fa-youtube\"></i></a>\n                                                        <a href=\"\"><i class=\"fa fa-dribbble\"></i></a>\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                       \n                                    </div>\n                                </div>\n\n                            </div>\n                        </div>\n                    </div>\n        </div>\n    </section>\n    \n</div>\n\n\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Trinet-Software';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_services_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/services.component */ "./src/app/home/services.component.ts");
/* harmony import */ var _home_team_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/team.component */ "./src/app/home/team.component.ts");
/* harmony import */ var _home_portfolio_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/portfolio.component */ "./src/app/home/portfolio.component.ts");
/* harmony import */ var _home_testimonial_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/testimonial.component */ "./src/app/home/testimonial.component.ts");
/* harmony import */ var _home_contact_us_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/contact-us.component */ "./src/app/home/contact-us.component.ts");
/* harmony import */ var _home_home_desc_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home-desc.component */ "./src/app/home/home-desc.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _home_services_component__WEBPACK_IMPORTED_MODULE_7__["ServicesComponent"],
                _home_team_component__WEBPACK_IMPORTED_MODULE_8__["TeamComponent"],
                _home_portfolio_component__WEBPACK_IMPORTED_MODULE_9__["PortfolioComponent"],
                _home_testimonial_component__WEBPACK_IMPORTED_MODULE_10__["TestimonialComponent"],
                _home_contact_us_component__WEBPACK_IMPORTED_MODULE_11__["ContactUsComponent"],
                _home_home_desc_component__WEBPACK_IMPORTED_MODULE_12__["HomeDescComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/api-data-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/home/api-data-service.service.ts ***!
  \**************************************************/
/*! exports provided: ApiDataServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiDataServiceService", function() { return ApiDataServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");


;

var ApiDataServiceService = /** @class */ (function () {
    function ApiDataServiceService(http) {
        this.http = http;
        this.apiURL = "http://localhost:50088/api/";
    }
    ApiDataServiceService.prototype.SaveContactUs = function (myContact) {
        return this.http.post(this.apiURL + 'ContactUs', myContact, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        });
    };
    ApiDataServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiDataServiceService);
    return ApiDataServiceService;
}());



/***/ }),

/***/ "./src/app/home/contact-us.component.css":
/*!***********************************************!*\
  !*** ./src/app/home/contact-us.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map_canvas {\r\n    height: 550px;\r\n    width: 100%;\r\n}\r\n\r\n\r\n.loader {\r\n    border: 16px solid #f3f3f3;\r\n    border-radius: 50%;\r\n    border-top: 16px solid #3498db;\r\n    width: 60px;\r\n    height: 60px;\r\n    -webkit-animation: spin 2s linear infinite; /* Safari */\r\n    animation: spin 2s linear infinite;\r\n    display: inline-block;\r\n    float: right;\r\n  }\r\n\r\n\r\n/* Safari */\r\n\r\n\r\n@-webkit-keyframes spin {\r\n    0% { -webkit-transform: rotate(0deg); }\r\n    100% { -webkit-transform: rotate(360deg); }\r\n  }\r\n\r\n\r\n@keyframes spin {\r\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb250YWN0LXVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztBQUNmOzs7QUFHQTtJQUNJLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLFdBQVc7SUFDWCxZQUFZO0lBQ1osMENBQTBDLEVBQUUsV0FBVztJQUN2RCxrQ0FBa0M7SUFDbEMscUJBQXFCO0lBQ3JCLFlBQVk7RUFDZDs7O0FBRUEsV0FBVzs7O0FBQ1g7SUFDRSxLQUFLLCtCQUErQixFQUFFO0lBQ3RDLE9BQU8saUNBQWlDLEVBQUU7RUFDNUM7OztBQUVBO0lBQ0UsS0FBSywrQkFBdUIsRUFBdkIsdUJBQXVCLEVBQUU7SUFDOUIsT0FBTyxpQ0FBeUIsRUFBekIseUJBQXlCLEVBQUU7RUFDcEMiLCJmaWxlIjoic3JjL2FwcC9ob21lL2NvbnRhY3QtdXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXBfY2FudmFzIHtcclxuICAgIGhlaWdodDogNTUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi5sb2FkZXIge1xyXG4gICAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXItdG9wOiAxNnB4IHNvbGlkICMzNDk4ZGI7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTsgLyogU2FmYXJpICovXHJcbiAgICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuICBcclxuICAvKiBTYWZhcmkgKi9cclxuICBALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XHJcbiAgICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBzcGluIHtcclxuICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/home/contact-us.component.html":
/*!************************************************!*\
  !*** ./src/app/home/contact-us.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"maps\" class=\"maps\">\n    <div class=\"map-overlay\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"main_maps text-center\">\n                    <div class=\"col-sm-12 no-padding\">\n                        \n                        <div id=\"map_canvas\">\n                            \n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"row\">\n                <div class=\"contact_contant sections\">\n                    <div class=\"col-sm-6\">\n\n                        <div class=\"main_contact_info\">\n                            <div class=\"head_title\">\n                                <h3>CONTACT INFO</h3>\n                                <div class=\"separator\"></div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"contact_info_content\">\n                                    <div class=\"col-sm-12\">\n                                        <div class=\"single_contact_info\">\n                                            <div class=\"single_info_icon\">\n                                                <i class=\"fa fa-home\"></i>\n                                            </div>\n                                            <div class=\"single_info_text\">\n                                                <h3>VISIT US</h3>\n                                                <p>Surat, Gujarat, India.</p>\n                                                <p>Toronto, Ontario, Canada.</p>\n                                                <p>Bakersfield, California, USA.</p>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-12\">\n                                        <div class=\"single_contact_info\">\n                                            <div class=\"single_info_icon\">\n                                                <i class=\"fa fa-envelope-o\"></i>\n                                            </div>\n                                            <div class=\"single_info_text\">\n                                                <h3>MAIL US</h3>\n                                                <p>support@trinetsoftware.com</p>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-12\">\n                                        <div class=\"single_contact_info\">\n                                            <div class=\"single_info_icon\">\n                                                <i class=\"fa fa-mobile\"></i>\n                                            </div>\n                                            <div class=\"single_info_text\">\n                                                <h3>CALL US</h3>\n                                                <p>+1 (647) 764 4631</p>\n                                                <p>+1 (647) 764 4631</p>\n                                                <p>+91 (991) 378 0009</p>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-12\">\n                                        <div class=\"single_contact_info\">\n                                            <div class=\"single_info_icon\">\n                                                <i class=\"fa fa-clock-o\"></i>\n                                            </div>\n                                            <div class=\"single_info_text\">\n                                                <h3>WORK HOUR</h3>\n                                                <p>Mon - Sat: 08:00 am - 19:00 pm</p>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div> \n\n                    <div class=\"col-sm-6\">\n                        <div class=\"head_title\">\n                            <h3>LEAVE MESSAGE</h3>\n                            <div class=\"separator\"></div>\n                        </div>\n                        <div class=\"single_contant_left\">\n                            <form  [formGroup]=\"contactForm\" id=\"formid\" novalidate>\n                                <!--<div class=\"col-lg-8 col-md-8 col-sm-10 col-lg-offset-2 col-md-offset-2 col-sm-offset-1\">-->\n                                <div class=\"row\">\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\" [class.has-error]=\"firstname.invalid && firstname.touched\">\n                                            <input type=\"text\" class=\"form-control\" name=\"name\" formControlName=\"firstname\" placeholder=\"First Name\" >\n                                            <div class=\"help-block alert alert-danger\" *ngIf=\"firstname.invalid && firstname.touched\">\n                                                    <small class=\"text-danger\" *ngIf=\"firstname.errors.required\">first name is required</small>\n                                                    <small class=\"text-danger\" *ngIf=\"firstname.errors.maxlength\">first name is not more than 10</small>\n                                                    <small class=\"text-danger\" *ngIf=\"firstname.errors.minlength\">first name is not less than 3</small>\n                                            </div> \n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\"  [class.has-error]=\"lastname.invalid && lastname.touched\">\n                                            <input type=\"text\" class=\"form-control\" name=\"name\" formControlName=\"lastname\" placeholder=\"Last Name\" >\n                                            <div class=\"alert alert-danger\" *ngIf=\"lastname.invalid && lastname.touched\">\n                                                    <small class=\"text-danger\" *ngIf=\"lastname.errors.required\">last name is required</small>\n                                                    <small class=\"text-danger\" *ngIf=\"lastname.errors.maxlength\">last name is not more than 10</small>\n                                                    <small class=\"text-danger\" *ngIf=\"lastname.errors.minlength\">last name is not less than 3</small>\n                                            </div> \n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\" [class.has-error]=\"email.invalid && email.touched\">\n                                            <input type=\"email\" class=\"form-control\" name=\"email\" formControlName=\"email\" placeholder=\"Email\" >\n                                            <div class=\"alert alert-danger\" *ngIf=\"email.invalid && email.touched\">\n                                                <small class=\"text-danger\" *ngIf=\"email.errors.required\">email is required</small>\n                                                <small class=\"text-danger\" *ngIf=\"email.errors.email\">email is invalid</small>\n                                            </div>                                            \n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\"  [class.has-error]=\"subject.invalid && subject.touched\">\n                                            <input type=\"text\" class=\"form-control\" name=\"subject\" formControlName=\"subject\" placeholder=\"enter subject here\">\n                                            <div class=\"alert alert-danger\" *ngIf=\"subject.invalid && subject.touched\">\n                                                    <small class=\"text-danger\" *ngIf=\"subject.errors.required\">subject is required</small>\n                                                    <small class=\"text-danger\" *ngIf=\"subject.errors.maxlength\">subject is not more than 50</small>                                                    \n                                            </div> \n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\"  [class.has-error]=\"notes.invalid && notes.touched\">\n                                    <textarea class=\"form-control\" name=\"notes\" id=\"notes\" formControlName=\"notes\" rows=\"6\" \n                                        placeholder=\"Add additional notes here.\"></textarea>\n                                        <div class=\"alert alert-danger\" *ngIf=\"notes.invalid && notes.touched\">\n                                                <small class=\"text-danger\" *ngIf=\"notes.errors.required\">notes is required</small>\n                                                <small class=\"text-danger\" *ngIf=\"notes.errors.maxlength\">notes is not more than 100</small>                                                    \n                                        </div> \n                                </div>\n                                <div>\n                                    <input type=\"button\" [disabled]=\"contactForm.invalid\" (click)=\"onSubmit()\" value=\"Submit\" class=\"btn btn-primary\">\n                                    <div class=\"loader\" *ngIf=\"Loading\"></div>  \n                                </div>\n                                <!--</div>--> \n                            </form>\n                            <br>\n                                                         \n                            <div class=\"alert alert-success\" *ngIf=\"successMsg !== ''\">\n                              <span class=\"text-success\">\n                                    <h2>Thank you for your request.</h2>\n                                    {{ successMsg }} <br>\n                              </span>  \n                            </div>\n                            <div class=\"alert alert-danger\" *ngIf=\"errorMsg !== ''\">\n                                    <span class=\"text-success\">\n                                          <h2>Sorry!! Error happend.</h2>\n                                          {{ errorMsg }} <br>\n                                    </span>  \n                                  </div>\n                            \n                            \n\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/home/contact-us.component.ts":
/*!**********************************************!*\
  !*** ./src/app/home/contact-us.component.ts ***!
  \**********************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _api_data_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api-data-service.service */ "./src/app/home/api-data-service.service.ts");




var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent(fb, _ApiDataServiceService) {
        this.fb = fb;
        this._ApiDataServiceService = _ApiDataServiceService;
        this.successMsg = "";
        this.errorMsg = "";
        this.Loading = false;
    }
    Object.defineProperty(ContactUsComponent.prototype, "firstname", {
        get: function () {
            return this.contactForm.get('firstname');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactUsComponent.prototype, "lastname", {
        get: function () {
            return this.contactForm.get('lastname');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactUsComponent.prototype, "email", {
        get: function () {
            return this.contactForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactUsComponent.prototype, "subject", {
        get: function () {
            return this.contactForm.get('subject');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactUsComponent.prototype, "notes", {
        get: function () {
            return this.contactForm.get('notes');
        },
        enumerable: true,
        configurable: true
    });
    ContactUsComponent.prototype.ngOnInit = function () {
        this.contactForm = this.fb.group({
            firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]],
            lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]],
            subject: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]],
            notes: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)]]
        });
        this.contactForm.valueChanges.subscribe(function (value) {
            // console.log(this.contactForm);
        });
    };
    ContactUsComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.contactForm.valid) {
            this.Loading = true;
            this.mycontact = this.contactForm.value;
            console.log(this.mycontact);
            this._ApiDataServiceService.SaveContactUs(this.mycontact).subscribe(function (res) {
                _this.successMsg = "Successfully submit your request. Somebody from Trinet Software will soon contact you via email.";
                _this.Loading = false;
            }, function (err) {
                _this.errorMsg = "There is some internal error. Still, somebody will contact you soon.";
                _this.Loading = false;
            });
            this.contactForm.reset();
        }
    };
    ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/home/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/home/contact-us.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _api_data_service_service__WEBPACK_IMPORTED_MODULE_3__["ApiDataServiceService"]])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/home/home-desc.component.css":
/*!**********************************************!*\
  !*** ./src/app/home/home-desc.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS1kZXNjLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/home/home-desc.component.html":
/*!***********************************************!*\
  !*** ./src/app/home/home-desc.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid container-atheight\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\" style=\"padding-bottom: 100px;\">\r\n            &nbsp;\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-2\"></div>\r\n        <div class=\"col-md-7\">\r\n            <div class=\"head_title\">\r\n                <h3>What is Trinet Software?</h3>\r\n                <div class=\"separator\"></div>\r\n\r\n                <div>\r\n                    <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\r\n                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\r\n                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\r\n                        lorem ipsum lorem ipsum\r\n                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\r\n                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\r\n                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\r\n                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-3\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\" style=\"padding-bottom: 100px;\">\r\n            &nbsp;\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/home-desc.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-desc.component.ts ***!
  \*********************************************/
/*! exports provided: HomeDescComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeDescComponent", function() { return HomeDescComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeDescComponent = /** @class */ (function () {
    function HomeDescComponent() {
    }
    HomeDescComponent.prototype.ngOnInit = function () {
    };
    HomeDescComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-desc',
            template: __webpack_require__(/*! ./home-desc.component.html */ "./src/app/home/home-desc.component.html"),
            styles: [__webpack_require__(/*! ./home-desc.component.css */ "./src/app/home/home-desc.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeDescComponent);
    return HomeDescComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Home section -->\n<section id=\"home\" class=\"home\">\n    <div class=\"overlay\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 \">\n                    <div class=\"main_home_slider text-center\">\n                        <div class=\"single_home_slider\">\n                            <div class=\"main_home wow fadeInUp\" data-wow-duration=\"700ms\">\n                                <h1>Welcome To Trinet Software</h1>\n                                <p>We make awesome web application for your business</p>\n                                <div class=\"home_btn\">\n                                    <a routerLink=\"/home-more\" class=\"btn btn-primary\">LEARN MORE</a>\n                                </div>\n    \n                            </div>\n                        </div>\n                        <div class=\"single_home_slider\">\n                            <div class=\"main_home wow fadeInUp\" data-wow-duration=\"700ms\">\n                                <h1>Welcome To Trinet Software</h1>\n                                <p>We make awesome web application for your business</p>\n                                <div class=\"home_btn\">\n                                        <a routerLink=\"/home-more\" class=\"btn btn-primary\">LEARN MORE</a>\n                                </div>\n    \n                            </div>\n                        </div>\n                        <div class=\"single_home_slider\">\n                            <div class=\"main_home wow fadeInUp\" data-wow-duration=\"700ms\">\n                                <h1>Welcome To Trinet Software</h1>\n                                <p>We make awesome web application for your business</p>\n                                <div class=\"home_btn\">\n                                        <a routerLink=\"/home-more\" class=\"btn btn-primary\">LEARN MORE</a>\n                                </div>\n    \n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<!--Services section -->\n<section id=\"service\" class=\"service\">\n  <app-services></app-services>\n</section>\n\n<!--our team section -->\n<section id=\"team\" class=\"team\">\n    <app-team></app-team>\n</section>\n\n<!--Portfolio section -->\n<section id=\"portfolio\" class=\"portfolio lightbg\">\n    <app-portfolio></app-portfolio>\n</section> \n\n\n<!--testimonial section -->\n<section id=\"testimonial\" class=\"testimonial\">\n   <app-testimonial></app-testimonial>\n</section>\n\n\n<!--contact us section -->\n<section id=\"contact\" class=\"contact\">\n  <app-contact-us></app-contact-us>\n</section>  \n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/portfolio.component.css":
/*!**********************************************!*\
  !*** ./src/app/home/portfolio.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcG9ydGZvbGlvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/home/portfolio.component.html":
/*!***********************************************!*\
  !*** ./src/app/home/portfolio.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"main_portfolio sections\">\n            <div class=\"col-sm-4\">\n                <div class=\"head_title\">\n                    <h3>LATEST PROJECT</h3>\n                    <div class=\"separator\"></div>\n                </div>\n            </div>\n            <div class=\"col-sm-6 col-sm-offset-2\">\n                <div id=\"filters\" class=\"toolbar mb2 mt2\">\n                    <button class=\"btn-md fil-cat filter active\" href=\"\"  data-filter=\"all\">SHOW ALL</button>\n                    <button class=\"btn-md fil-cat filter\" data-rel=\"web\" data-filter=\".web\">PHOTOGRAPHY</button>\n                    <button class=\"btn-md fil-cat filter\" data-rel=\"flyers\" data-filter=\".flyers\">BRANDING</button> \n                    <button class=\"btn-md fil-cat filter\" data-rel=\"bcards\" data-filter=\".bcards\">GRAPHIC DESIGN</button>\n                    <div class=\"separator2\"></div>\n                </div> \n\n            </div>\n\n            <div style=\"clear:both;\"></div>     \n            <div id=\"portfoliowork\"> \n                <div class=\"single_portfolio tile scale-anm web grid-item-width2\" >\n                    <img src=\"assets/images/pf1.jpg\" alt=\"\" />\n                    <div class=\"grid_item_overlay g_overlay_1\">\n                        <a href=\"assets/images/pf1.jpg\" class=\"portfolio-img\"> <i class=\"fa fa-link\"></i></a>\n                        <a href=\"#\"> <i class=\"fa fa-search\"></i></a>\n                    </div>\n                </div>\n                <div class=\"single_portfolio tile scale-anm bcards\" >\n                    <img src=\"assets/images/pf2.jpg\" alt=\"\" />\n                    <div class=\"grid_item_overlay\">\n                        <a href=\"assets/images/pf2.jpg\" class=\"portfolio-img\"> <i class=\"fa fa-link\"></i></a>\n                        <a href=\"#\"> <i class=\"fa fa-search\"></i></a>\n                    </div>\n                </div>\n                <div class=\"single_portfolio tile scale-anm web \">\n                    <img src=\"assets/images/pf3.jpg\" alt=\"\" />\n                    <div class=\"grid_item_overlay\">\n                        <a href=\"assets/images/pf3.jpg\" class=\"portfolio-img\"> <i class=\"fa fa-link\"></i></a>\n                        <a href=\"#\"> <i class=\"fa fa-search\"></i></a>\n                    </div>\n                </div>\n                <div class=\"single_portfolio tile scale-anm web\" >\n                    <img src=\"assets/images/pf4.jpg\" alt=\"\" />\n                    <div class=\"grid_item_overlay\">\n                        <a href=\"assets/images/pf4.jpg\" class=\"portfolio-img\"> <i class=\"fa fa-link\"></i></a>\n                        <a href=\"#\"> <i class=\"fa fa-search\"></i></a>\n                    </div>\n                </div>\n                <div class=\"single_portfolio tile scale-anm bcards\" >\n                    <img src=\"assets/images/pf8.jpg\" alt=\"\" />  \n                    <div class=\"grid_item_overlay\">\n                        <a href=\"assets/images/pf8.jpg\" class=\"portfolio-img\"> <i class=\"fa fa-link\"></i></a>\n                        <a href=\"#\"> <i class=\"fa fa-search\"></i></a>\n                    </div>\n                </div>\n                <div class=\"single_portfolio tile scale-anm web\" >\n                    <img src=\"assets/images/pf9.jpg\" alt=\"\" />\n                    <div class=\"grid_item_overlay\">\n                        <a href=\"assets/images/pf9.jpg\" class=\"portfolio-img\"> \n                            <i class=\"fa fa-link\"></i>\n                        </a>\n                        <a href=\"#\"> \n                            <i class=\"fa fa-search\"></i>\n                        </a>\n                    </div>\n                </div> \n                <div class=\"single_portfolio tile scale-anm flyers\">\n                    <img src=\"assets/images/pf5.jpg\" alt=\"\" />\n                    <div class=\"grid_item_overlay g_overlay_2\">\n                        <a href=\"assets/images/pf5.jpg\" class=\"portfolio-img\"> <i class=\"fa fa-link\"></i></a>\n                        <a href=\"#\"> <i class=\"fa fa-search\"></i></a>\n                    </div>\n                </div>\n                <div class=\"single_portfolio tile scale-anm flyers\">\n                    <img src=\"assets/images/pf6.jpg\" alt=\"\" />\n                    <div class=\"grid_item_overlay g_overlay_1\">\n                        <a href=\"assets/images/pf6.jpg\" class=\"portfolio-img\"> <i class=\"fa fa-link\"></i></a>\n                        <a href=\"#\"> <i class=\"fa fa-search\"></i></a>\n                    </div>\n                </div>\n\n                <div class=\"single_portfolio tile scale-anm bcards\" >\n                    <img src=\"assets/images/pf7.jpg\" alt=\"\" />\n                    <div class=\"grid_item_overlay\">\n                        <a href=\"assets/images/pf7.jpg\" class=\"portfolio-img\"> <i class=\"fa fa-link\"></i></a>\n                        <a href=\"#\"> <i class=\"fa fa-search\"></i></a>\n                    </div>\n                </div>\n                <div class=\"single_portfolio tile scale-anm flyers\">\n                    <img src=\"assets/images/pf6.jpg\" alt=\"\" />\n                    <div class=\"grid_item_overlay g_overlay_1\">\n                        <a href=\"assets/images/pf6.jpg\" class=\"portfolio-img\"> <i class=\"fa fa-link\"></i></a>\n                        <a href=\"#\"> <i class=\"fa fa-search\"></i></a>\n                    </div>\n                </div>\n\n                <div class=\"single_portfolio tile scale-anm bcards\" >\n                    <img src=\"assets/images/pf7.jpg\" alt=\"\" />\n                    <div class=\"grid_item_overlay\">\n                        <a href=\"assets/images/pf7.jpg\" class=\"portfolio-img\"> <i class=\"fa fa-link\"></i></a>\n                        <a href=\"#\"> <i class=\"fa fa-search\"></i></a>\n                    </div>\n                </div>\n\n\n\n            </div>\n\n            <div style=\"clear:both;\"></div>  \n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/home/portfolio.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/portfolio.component.ts ***!
  \*********************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/home/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.css */ "./src/app/home/portfolio.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/home/services.component.css":
/*!*********************************************!*\
  !*** ./src/app/home/services.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".service .nav-tabs>li>a {\r\n    text-align: center;\r\n    color: #444444;\r\n    width: 120px;\r\n    height: 180px;\r\n    margin-left: 20px;\r\n    background: url(/images/stabmenubg.png) no-repeat top center;\r\n    border: 0px;\r\n    transition: all 0.6s;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9zZXJ2aWNlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtJQUNqQiw0REFBNEQ7SUFDNUQsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9ob21lL3NlcnZpY2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VydmljZSAubmF2LXRhYnM+bGk+YSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzQ0NDQ0NDtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIGJhY2tncm91bmQ6IHVybCgvaW1hZ2VzL3N0YWJtZW51YmcucG5nKSBuby1yZXBlYXQgdG9wIGNlbnRlcjtcclxuICAgIGJvcmRlcjogMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNnM7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/services.component.html":
/*!**********************************************!*\
  !*** ./src/app/home/services.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"main_service_area\">\n                <div class=\"main_service_content\">                    \n                    <div class=\"service_tabe\">\n                        <!-- Nav tabs -->\n                        <ul class=\"service_tabe_menu nav nav-tabs\" role=\"tablist\">\n                            <li role=\"presentation\" class=\"active\"><a href=\"#webdesign\" aria-controls=\"webdesign\" role=\"tab\" data-toggle=\"tab\"><i class=\"fa fa-map-marker\"></i> <br />WEB APPLICATION DEVELOPMENT</a></li>\n                            <li role=\"presentation\"><a href=\"#appdesign\" aria-controls=\"appdesign\" role=\"tab\" data-toggle=\"tab\"><i class=\"fa fa-map-marker\"></i> <br />ERP SOLUTION</a></li>\n                            <li role=\"presentation\"><a href=\"#graphicdesign\" aria-controls=\"graphicdesign\" role=\"tab\" data-toggle=\"tab\"><i class=\"fa fa-map-marker\"></i> <br />ECOMMERCE WEB TOOLS</a></li>\n                            <li role=\"presentation\"><a href=\"#gamedesign\" aria-controls=\"gamedesign\" role=\"tab\" data-toggle=\"tab\"><i class=\"fa fa-map-marker\"></i> <br />HOSTING SERVER SETUP</a></li>\n                            <li role=\"presentation\"><a href=\"#GRAPHICphotos\" aria-controls=\"GRAPHICphotos\" role=\"tab\" data-toggle=\"tab\"><i class=\"fa fa-map-marker\"></i> <br />GRAPHIC DESIGN</a></li>\n                            <li role=\"presentation\"><a href=\"#webmarketing\" aria-controls=\"webmarketing\" role=\"tab\" data-toggle=\"tab\"><i class=\"fa fa-map-marker\"></i> <br />DIGITAL MARKETING</a></li>\n                            <li role=\"presentation\"><a href=\"#customDevelopment\" aria-controls=\"customDevelopment\" role=\"tab\" data-toggle=\"tab\"><i class=\"fa fa-map-marker\"></i> <br />CUSTOM SOLUTIONS</a></li>\n                            <li role=\"presentation\"><a href=\"#socialmedia\" aria-controls=\"socialmedia\" role=\"tab\" data-toggle=\"tab\"><i class=\"fa fa-map-marker\"></i> <br />SOCIAL MEDIA MARKETING</a></li>\n                        </ul>\n\n                        <!-- Tab panes -->\n                        <div class=\"tab-content\">\n                            <div role=\"tabpanel\" class=\"tab-pane active\" id=\"webdesign\">\n                                <div class=\"single_service_tab\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-6\">\n                                            <div class=\"single_tab_content\">\n                                                <div class=\"head_title\">\n                                                    <h3>WEB APPLICATION DEVELOPMENT</h3>\n                                                    <div class=\"separator\"></div>\n                                                </div>\n                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page \n                                                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal \n                                                    distribution of letters, as opposed to using 'Content here, content here', making it \n                                                    look like readable English. Many desktop publishing packages and web page editors now use \n                                                    Lorem Ipsum as their default model text, and a search for 'lorem ipsum' </p>\n\n                                                <a href=\"\" class=\"btn btn-primary\">LEARN MORE</a>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"col-sm-6\">\n                                            <div class=\"single_tab_img\">\n                                                <img src=\"assets/images/stab1.png\" alt=\"\" />\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div role=\"tabpanel\" class=\"tab-pane\" id=\"appdesign\">\n                                <div class=\"single_service_tab\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-6\">\n                                            <div class=\"single_tab_content\">\n                                                <div class=\"head_title\">\n                                                    <h3>ERP SOLUTION</h3>\n                                                    <div class=\"separator\"></div>\n                                                </div>\n                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page \n                                                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal \n                                                    distribution of letters, as opposed to using 'Content here, content here', making it \n                                                    look like readable English. Many desktop publishing packages and web page editors now use \n                                                    Lorem Ipsum as their default model text, and a search for 'lorem ipsum' </p>\n\n                                                <a href=\"\" class=\"btn btn-primary\">LEARN MORE</a>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"col-sm-6\">\n                                            <div class=\"single_tab_img\">\n                                                <img src=\"assets/images/featureslid1.jpg\" alt=\"\" />\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div role=\"tabpanel\" class=\"tab-pane\" id=\"graphicdesign\">\n                                <div class=\"single_service_tab\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-6\">\n                                            <div class=\"single_tab_content\">\n                                                <div class=\"head_title\">\n                                                    <h3>ECOMMERCE WEB TOOLS</h3>\n                                                    <div class=\"separator\"></div>\n                                                </div>\n                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page \n                                                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal \n                                                    distribution of letters, as opposed to using 'Content here, content here', making it \n                                                    look like readable English. Many desktop publishing packages and web page editors now use \n                                                    Lorem Ipsum as their default model text, and a search for 'lorem ipsum' </p>\n\n                                                <a href=\"\" class=\"btn btn-primary\">LEARN MORE</a>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"col-sm-6\">\n                                            <div class=\"single_tab_img\">\n                                                <img src=\"assets/images/stab1.png\" alt=\"\" />\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div role=\"tabpanel\" class=\"tab-pane\" id=\"gamedesign\">\n                                <div class=\"single_service_tab\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-6\">\n                                            <div class=\"single_tab_content\">\n                                                <div class=\"head_title\">\n                                                    <h3>HOSTING SERVER SETUP</h3>\n                                                    <div class=\"separator\"></div>\n                                                </div>\n                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page \n                                                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal \n                                                    distribution of letters, as opposed to using 'Content here, content here', making it \n                                                    look like readable English. Many desktop publishing packages and web page editors now use \n                                                    Lorem Ipsum as their default model text, and a search for 'lorem ipsum' </p>\n\n                                                <a href=\"\" class=\"btn btn-primary\">LEARN MORE</a>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"col-sm-6\">\n                                            <div class=\"single_tab_img\">\n                                                <img src=\"assets/images/featureslid1.jpg\" alt=\"\" />\n                                            </div>\n                                        </div>\n                                        <!--                                                        <div id=\"pentagon\"></div>-->\n                                    </div>\n                                </div>\n                            </div>\n                            <div role=\"tabpanel\" class=\"tab-pane\" id=\"GRAPHICphotos\">\n                                <div class=\"single_service_tab\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-6\">\n                                            <div class=\"single_tab_content\">\n                                                <div class=\"head_title\">\n                                                    <h3>GRAPHIC DESIGN</h3>\n                                                    <div class=\"separator\"></div>\n                                                </div>\n                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page \n                                                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal \n                                                    distribution of letters, as opposed to using 'Content here, content here', making it \n                                                    look like readable English. Many desktop publishing packages and web page editors now use \n                                                    Lorem Ipsum as their default model text, and a search for 'lorem ipsum' </p>\n\n                                                <a href=\"\" class=\"btn btn-primary\">LEARN MORE</a>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"col-sm-6\">\n                                            <div class=\"single_tab_img\">\n                                                <img src=\"assets/images/featureslid1.jpg\" alt=\"\" />\n                                            </div>\n                                        </div>\n                                        <!--                                                        <div id=\"pentagon\"></div>-->\n                                    </div>\n                                </div>\n                            </div>\n                            <div role=\"tabpanel\" class=\"tab-pane\" id=\"webmarketing\">\n                                <div class=\"single_service_tab\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-6\">\n                                            <div class=\"single_tab_content\">\n                                                <div class=\"head_title\">\n                                                    <h3>DIGITAL MARKETING</h3>\n                                                    <div class=\"separator\"></div>\n                                                </div>\n                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page \n                                                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal \n                                                    distribution of letters, as opposed to using 'Content here, content here', making it \n                                                    look like readable English. Many desktop publishing packages and web page editors now use \n                                                    Lorem Ipsum as their default model text, and a search for 'lorem ipsum' </p>\n\n                                                <a href=\"\" class=\"btn btn-primary\">LEARN MORE</a>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"col-sm-6\">\n                                            <div class=\"single_tab_img\">\n                                                <img src=\"assets/images/featureslid1.jpg\" alt=\"\" />\n                                            </div>\n                                        </div>\n                                        <!--                                                        <div id=\"pentagon\"></div>-->\n                                    </div>\n                                </div>\n                            </div>\n                            <div role=\"tabpanel\" class=\"tab-pane\" id=\"customDevelopment\">\n                                <div class=\"single_service_tab\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-6\">\n                                            <div class=\"single_tab_content\">\n                                                <div class=\"head_title\">\n                                                    <h3>CUSTOM SOLUTIONS</h3>\n                                                    <div class=\"separator\"></div>\n                                                </div>\n                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page \n                                                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal \n                                                    distribution of letters, as opposed to using 'Content here, content here', making it \n                                                    look like readable English. Many desktop publishing packages and web page editors now use \n                                                    Lorem Ipsum as their default model text, and a search for 'lorem ipsum' </p>\n\n                                                <a href=\"\" class=\"btn btn-primary\">LEARN MORE</a>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"col-sm-6\">\n                                            <div class=\"single_tab_img\">\n                                                <img src=\"assets/images/featureslid1.jpg\" alt=\"\" />\n                                            </div>\n                                        </div>\n                                        <!--                                                        <div id=\"pentagon\"></div>-->\n                                    </div>\n                                </div>\n                            </div>\n                            <div role=\"tabpanel\" class=\"tab-pane\" id=\"socialmedia\">\n                                    <div class=\"single_service_tab\">\n                                        <div class=\"row\">\n                                            <div class=\"col-sm-6\">\n                                                <div class=\"single_tab_content\">\n                                                    <div class=\"head_title\">\n                                                        <h3>SOCIAL MEDIA MARKETING</h3>\n                                                        <div class=\"separator\"></div>\n                                                    </div>\n                                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page \n                                                        when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal \n                                                        distribution of letters, as opposed to using 'Content here, content here', making it \n                                                        look like readable English. Many desktop publishing packages and web page editors now use \n                                                        Lorem Ipsum as their default model text, and a search for 'lorem ipsum' </p>\n    \n                                                    <a href=\"\" class=\"btn btn-primary\">LEARN MORE</a>\n                                                </div>\n                                            </div>\n    \n                                            <div class=\"col-sm-6\">\n                                                <div class=\"single_tab_img\">\n                                                    <img src=\"assets/images/featureslid1.jpg\" alt=\"\" />\n                                                </div>\n                                            </div>\n                                            <!--                                                        <div id=\"pentagon\"></div>-->\n                                        </div>\n                                    </div>\n                                </div>\n                        </div>\n                    </div>                \n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<section id=\"features\" class=\"features\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"main_features_area sections\">\n                    <div class=\"head_title\">\n                        <h3>FEATURED WORK</h3>\n                        <div class=\"separator\"></div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"main_features_content\">\n\n                            <div class=\"col-sm-6\">\n\n                                <div class=\"single_features_slide\">\n                                    <div class=\"single_ft_s_item\">\n                                        <img src=\"assets/images/featureslid1.jpg\" alt=\"\" />\n                                    </div>\n                                    <div class=\"single_ft_s_item\">\n                                        <img src=\"assets/images/featureslid1.jpg\" alt=\"\" />\n                                    </div>\n                                    <div class=\"single_ft_s_item\">\n                                        <img src=\"assets/images/featureslid1.jpg\" alt=\"\" />\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <div class=\"single_features_text\">\n                                    <h4>HAND WITH A WATCH</h4>\n                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, \n                                        when an unknown printer took a galley of type and scrambled </p>\n\n                                    <ul>\n                                        <li><span>Client:</span> Dadit Lorm</li>\n                                        <li><span>Deivered:</span> Sunday, 15 August, 2015</li>\n                                        <li><span>Tags:</span> Hand, Watch, Black, Tree</li>\n                                    </ul>\n\n                                    <a href=\"\" class=\"btn\">LAUNCH NOW</a>\n                                </div>\n                            </div>\n                        </div>\n                    </div> \n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n\n<section id=\"video\" class=\"video text-center wow fadeIn\"  data-wow-duration=\"2s\" data-wow-dealy=\"1.5s\">\n    <div class=\"video_overlay\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"main_video\">\n                    <div class=\"col-sm-12\">\n                        <div class=\"icon\">\n                            <a href=\"https://www.youtube.com/embed/_l6CQRHIGyg\" class=\"youtube-media\"><img src=\"assets/images/play.png\" alt=\"play-icon\" /></a>\n                            <h3>WATCH OUR INTRO</h3>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n\n<section id=\"about\" class=\"about\">\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"main_about_area sections\">\n                <div class=\"col-sm-12\">\n\n                    <div class=\"main_about_content\">\n                        <div class=\"row\">\n\n                            <div class=\"col-sm-7 wow fadeInRight\" data-wow-duration=\"700ms\">\n                                <div class=\"single_about_right_content\">\n                                    <div class=\"head_title\">\n                                        <h3>ABOUT LOGIC</h3>\n                                        <div class=\"separator\"></div>\n                                    </div>\n\n                                    <div class=\"single_about\">\n                                        <div class=\"single_ab_icon\">\n                                            <div class=\"ab_border_right\"></div>\n                                            <i class=\"fa fa-coffee\"></i>\n                                        </div>\n                                        <div class=\"single_ab_text\">\n                                            <h3>RESPONSIVE DESIGN</h3>\n                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n                                                Lorem Ipsum has been the industry's standard dummy text</p>\n                                        </div>\n                                    </div>\n                                    <div class=\"single_about\">\n                                        <div class=\"single_ab_icon\">\n\n                                            <i class=\"fa fa-paint-brush\"></i>\n                                        </div>\n                                        <div class=\"single_ab_text\">\n                                            <h3>EASY TO CUSTOMIZE</h3>\n                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n                                                Lorem Ipsum has been the industry's standard dummy text</p>\n                                        </div>\n                                    </div>\n                                    <div class=\"single_about\">\n                                        <div class=\"single_ab_icon\">\n                                            <i class=\"fa fa-headphones\"></i>\n                                        </div>\n                                        <div class=\"single_ab_text\">\n                                            <h3>LIFE TIME SUPPORT</h3>\n                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n                                                Lorem Ipsum has been the industry's standard dummy text</p>\n                                        </div>\n                                    </div>\n\n                                </div>\n                            </div>\n\n                            <div class=\"col-sm-5\">\n                                <div class=\"single_about_left_img margin-top-40 text-center wow fadeInLeft\" data-wow-duration=\".6s\">\n                                    <img src=\"assets/images/abright.png\" alt=\"\" />\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"about_skill_area\">\n                                <div class=\"col-sm-6\">\n                                    <div class=\"about_tabe\">\n                                        <!-- Nav tabs -->\n                                        <ul class=\"about_tabe_menu\" role=\"tablist\">\n                                            <li role=\"presentation\" class=\"active\"><a href=\"#mission\" aria-controls=\"mission\" role=\"tab\" data-toggle=\"tab\">OUR MISSION</a></li>\n                                            <li role=\"presentation\"><a href=\"#goal\" aria-controls=\"goal\" role=\"tab\" data-toggle=\"tab\">OUR GOAL</a></li>\n                                            <li role=\"presentation\"><a href=\"#achivements\" aria-controls=\"achivements\" role=\"tab\" data-toggle=\"tab\">ACHIVEMENTS</a></li>\n                                        </ul>\n\n                                        <!-- Tab panes -->\n                                        <div class=\"tab-content\">\n                                            <div role=\"tabpanel\" class=\"tab-pane active\" id=\"mission\">\n                                                <div class=\"single_about_tab\">\n                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n                                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, \n                                                        when an unknown printer took a galley type a scrambled it to make a type specimen book. \n                                                        It has survived not only five centuries,</p>\n\n                                                    <div class=\"row\">\n                                                        <div class=\"col-sm-6\">\n                                                            <ul class=\"single_ab_mision\">\n                                                                <li><i class=\"fa fa-check-square\"></i> We just want to love our client</li>\n                                                                <li><i class=\"fa fa-check-square\"></i> We just want to love our client</li>\n                                                            </ul>\n                                                        </div>\n                                                        <div class=\"col-sm-6\">\n                                                            <ul class=\"single_ab_mision\">\n                                                                <li><i class=\"fa fa-check-square\"></i> We just want to love our client</li>\n                                                                <li><i class=\"fa fa-check-square\"></i> We just want to love our client</li>\n                                                            </ul>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div role=\"tabpanel\" class=\"tab-pane\" id=\"goal\">\n                                                <div class=\"single_about_tab\">\n                                                    <p>222Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n                                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, \n                                                        when an unknown printer took a galley type a scrambled it to make a type specimen book. \n                                                        It has survived not only five centuries,</p>\n\n                                                    <div class=\"row\">\n                                                        <div class=\"col-sm-6\">\n                                                            <ul class=\"single_ab_mision\">\n                                                                <li><i class=\"fa fa-check-square\"></i> We just want to love our client</li>\n                                                                <li><i class=\"fa fa-check-square\"></i> We just want to love our client</li>\n                                                            </ul>\n                                                        </div>\n                                                        <div class=\"col-sm-6\">\n                                                            <ul class=\"single_ab_mision\">\n                                                                <li><i class=\"fa fa-check-square\"></i> We just want to love our client</li>\n                                                                <li><i class=\"fa fa-check-square\"></i> We just want to love our client</li>\n                                                            </ul>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div role=\"tabpanel\" class=\"tab-pane\" id=\"achivements\">\n                                                <div class=\"single_about_tab\">\n                                                    <p>333Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n                                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, \n                                                        when an unknown printer took a galley type a scrambled it to make a type specimen book. \n                                                        It has survived not only five centuries,</p>\n\n                                                    <div class=\"row\">\n                                                        <div class=\"col-sm-6\">\n                                                            <ul class=\"single_ab_mision\">\n                                                                <li><i class=\"fa fa-check-square\"></i> We just want to love our client</li>\n                                                                <li><i class=\"fa fa-check-square\"></i> We just want to love our client</li>\n                                                            </ul>\n                                                        </div>\n                                                        <div class=\"col-sm-6\">\n                                                            <ul class=\"single_ab_mision\">\n                                                                <li><i class=\"fa fa-check-square\"></i> We just want to love our client</li>\n                                                                <li><i class=\"fa fa-check-square\"></i> We just want to love our client</li>\n                                                            </ul>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-6\">\n                                    <div class=\"about_skill\">\n                                        <div class=\"skillbar\" data-percent=\"95%\">\n                                            <div class=\"skillbar-title\"><h3 class=\"blue\">ASP.NET CORE</h3><span class=\"sm-text\">95%</span></div>\n                                            <div class=\"skillbar-bar blue\"></div>\n                                        </div>\n                                        <div class=\"skillbar\" data-percent=\"87%\">\n                                                <div class=\"skillbar-title\"><h3 class=\"blue\">WEB SERVICES</h3><span class=\"sm-text\">87%</span></div>\n                                                <div class=\"skillbar-bar blue\"></div>\n                                        </div>\n                                        <div class=\"skillbar\" data-percent=\"90%\">\n                                            <div class=\"skillbar-title\"><h3 class=\"blue\">HTML5/CSS3</h3><span class=\"sm-text\">90%</span></div>\n                                            <div class=\"skillbar-bar blue\"></div>\n                                        </div>\n                                        <div class=\"skillbar\" data-percent=\"85%\">\n                                            <div class=\"skillbar-title\"><h3 class=\"blue\">JAVASCRIPT</h3><span class=\"sm-text\">85%</span></div>\n                                            <div class=\"skillbar-bar blue\"></div>\n                                        </div>\n                                        <div class=\"skillbar\" data-percent=\"92%\">\n                                            <div class=\"skillbar-title\"><h3 class=\"blue\">SQL DATABASE</h3><span class=\"sm-text\">92%</span></div>\n                                            <div class=\"skillbar-bar blue\"></div>\n                                        </div>\n                                        <div class=\"skillbar\" data-percent=\"75%\">\n                                                <div class=\"skillbar-title\"><h3 class=\"blue\">VIRTUAL SERVER</h3><span class=\"sm-text\">75%</span></div>\n                                                <div class=\"skillbar-bar blue\"></div>\n                                            </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</section>\n\n\n<section id=\"counter\" class=\"counter\">\n    <div class=\"video_overlay\">\n        <div class=\"container\">\n            <div class=\"row\">  \n                <div class=\"col-sm-12\">               \n                    <div class=\"main_counter_area text-center\">\n\n                        <div class=\"row\">\n                            <div class=\"single_counter border_right\">\n                                <div class=\"col-sm-3 col-xs-12\">\n                                    <div class=\"single_counter_item\">\n                                        <h2 class=\"statistic-counter\">28</h2>\n                                        <i class=\"icon icon-thumbs-up\"></i>\n                                        <p class=\"margin-top-20\">CREATIVE DESIGN</p>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"single_counter\">\n                                <div class=\"col-sm-3 col-xs-12\">\n                                    <div class=\"single_counter_item\">\n                                        <h2 class=\"statistic-counter\">3</h2>\n                                        <i class=\"icon icon-business-3\"></i>\n                                        <p class=\"margin-top-20\">AWARDS WON</p>  \n                                    </div>\n\n                                </div>\n                            </div> \n\n                            <div class=\"single_counter\">\n                                <div class=\"col-sm-3 col-xs-12\">\n                                    <div class=\"single_counter_item\">\n                                        <h2 class=\"statistic-counter\">13</h2>\n                                        <i class=\"icon icon-people-32\"></i>\n                                        <p class=\"margin-top-20\">HAPPY CLIENTS</p>  \n                                    </div>\n\n                                </div>\n                            </div>\n\n                            <div class=\"single_counter\">\n                                <div class=\"col-sm-3 col-xs-12\">\n                                    <div class=\"single_counter_item\">\n                                        <h2 class=\"statistic-counter\">365</h2>\n                                        <i class=\"icon icon-cup\"></i>\n                                        <p class=\"margin-top-20\">CUP OF COFFEE</p> \n                                    </div>\n\n                                </div>\n                            </div> \n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>  <!-- End of counter section -->\n\n\n<section id=\"othersservice\" class=\"othersservice\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"main_othersservice_area sections\">\n                    <div class=\"row\">\n                        <div class=\"head_title\">\n                            <h3>OTHER SERVICES</h3>\n                            <div class=\"separator\"></div>\n                        </div>\n\n                        <div class=\"main_othersservice_content\">\n                            <div class=\"col-sm-4\">\n                                <div class=\"single_othersservice\">\n                                    <div class=\"single_othersservice_icon\">\n                                        <h4><span><i class=\"fa fa-clock-o\"></i></span> CREATIVE DESIGN</h4>\n                                    </div>\n                                    <div class=\"single_othersservice_content\">\n                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-4\">\n                                <div class=\"single_othersservice\">\n                                    <div class=\"single_othersservice_icon\">\n                                        <h4> <span><i class=\"fa fa-picture-o\"></i></span> WEB DEVELOPMENT</h4>\n                                    </div>\n                                    <div class=\"single_othersservice_content\">\n                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-4\">\n                                <div class=\"single_othersservice\">\n                                    <div class=\"single_othersservice_icon\">\n                                        <h4> <span><i class=\"fa fa-television\"></i></span> VIDEO EDITING</h4>\n                                    </div>\n                                    <div class=\"single_othersservice_content\">\n                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>\n                                    </div>\n                                </div>\n                            </div>\n\n\n                            <div class=\"col-sm-4\">\n                                <div class=\"single_othersservice\">\n                                    <div class=\"single_othersservice_icon\">\n                                        <h4> <span><i class=\"fa fa-object-group\"></i></span> MARKETING</h4>\n                                    </div>\n                                    <div class=\"single_othersservice_content\">\n                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"col-sm-4\">\n                                <div class=\"single_othersservice\">\n                                    <div class=\"single_othersservice_icon\">\n                                        <h4> <span><i class=\"fa fa-object-group\"></i></span> PHOTOGRAPHY</h4>\n                                    </div>\n                                    <div class=\"single_othersservice_content\">\n\n                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"col-sm-4\">\n                                <div class=\"single_othersservice\">\n                                    <div class=\"s_ot_i_area\">\n                                        <div class=\"single_othersservice_icon\">\n                                            <h4><span><i class=\"fa fa-object-group\"></i></span> LOGO DESIGN</h4>\n                                        </div>\n                                    </div>\n                                    <div class=\"single_othersservice_content\">\n\n                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>\n                                    </div>\n                                </div>\n                            </div>\n\n                        </div>\n                    </div> \n                </div>\n            </div>\n        </div>\n    </div>\n</section>  "

/***/ }),

/***/ "./src/app/home/services.component.ts":
/*!********************************************!*\
  !*** ./src/app/home/services.component.ts ***!
  \********************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/home/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/home/services.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/home/team.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/team.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel-default>.panel-heading+.panel-collapse>.panel-body {\r\n    border-top-color: #ddd;\r\n    color: #000000;\r\n}\r\n\r\n\r\nh4 {\r\n    font-size: 1.2rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS90ZWFtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsY0FBYztBQUNsQjs7O0FBR0E7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9ob21lL3RlYW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYW5lbC1kZWZhdWx0Pi5wYW5lbC1oZWFkaW5nKy5wYW5lbC1jb2xsYXBzZT4ucGFuZWwtYm9keSB7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjZGRkO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcblxyXG5oNCB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/team.component.html":
/*!******************************************!*\
  !*** ./src/app/home/team.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"main_team sections\">\n                <div class=\"row\">\n                    <div class=\"head_title\">\n                        <h3>OTHER SERVICES</h3>\n                        <div class=\"separator\"></div>\n                    </div>\n                    <div class=\"col-sm-3 col-xs-12\">\n                        <div class=\"single_team_content\">\n                            <div class=\"single_team_img\">\n                                <img src=\"assets/images/team1.jpg\" alt=\"\" />\n                            </div>\n                            <div class=\"single_team_text_overlay\">\n                                <h4>PRASHANT PATEL</h4>\n                                <p>Founder, Team Lead</p>\n                                <div class=\"team_overlay_socail\">\n                                    <a href=\"\"><i class=\"fa fa-facebook\"></i></a>\n                                    <a href=\"\"><i class=\"fa fa-twitter\"></i></a>\n                                    <a href=\"\"><i class=\"fa fa-google-plus\"></i></a>\n                                    <a href=\"\"><i class=\"fa fa-pinterest-p\"></i></a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-sm-3 col-xs-12\">\n                        <div class=\"single_team_content\">\n                            <div class=\"single_team_img\">\n                                <img src=\"assets/images/team1.jpg\" alt=\"\" />\n                            </div>\n                            <div class=\"single_team_text_overlay\">\n                                <h4>NIKHIL PATEL</h4>\n                                <p>Server Admin, Manager</p>\n                                <div class=\"team_overlay_socail\">\n                                    <a href=\"\"><i class=\"fa fa-facebook\"></i></a>\n                                    <a href=\"\"><i class=\"fa fa-twitter\"></i></a>\n                                    <a href=\"\"><i class=\"fa fa-google-plus\"></i></a>\n                                    <a href=\"\"><i class=\"fa fa-pinterest-p\"></i></a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-sm-3 col-xs-12\">\n                        <div class=\"single_team_content\">\n                            <div class=\"single_team_img\">\n                                <img src=\"assets/images/team1.jpg\" alt=\"\" />\n                            </div>\n                            <div class=\"single_team_text_overlay\">\n                                <h4>RUSHABH PATEL</h4>\n                                <p>Senior Software Engineer, Web Developer</p>\n                                <div class=\"team_overlay_socail\">\n                                    <a href=\"\"><i class=\"fa fa-facebook\"></i></a>\n                                    <a href=\"\"><i class=\"fa fa-twitter\"></i></a>\n                                    <a href=\"\"><i class=\"fa fa-google-plus\"></i></a>\n                                    <a href=\"\"><i class=\"fa fa-pinterest-p\"></i></a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-sm-3 col-xs-12\">\n                        <div class=\"single_team_content\">\n                            <div class=\"single_team_img\">\n                                <img src=\"assets/images/team1.jpg\" alt=\"\" />\n                            </div>\n                            <div class=\"single_team_text_overlay\">\n                                <h4>PINAL PATEL</h4>\n                                <p>Graphic Designer, Technical Writer</p>\n                                <div class=\"team_overlay_socail\">\n                                    <a href=\"\"><i class=\"fa fa-facebook\"></i></a>\n                                    <a href=\"\"><i class=\"fa fa-twitter\"></i></a>\n                                    <a href=\"\"><i class=\"fa fa-google-plus\"></i></a>\n                                    <a href=\"\"><i class=\"fa fa-pinterest-p\"></i></a>\n                                </div>\n                            </div>\n                        </div>\n                    </div> <!-- End of col-sm-4 -->\n                </div>\n\n            </div><!-- End of main team contant -->\n        </div>\n    </div><!-- End of row -->\n</div>\n\n<section id=\"choose\" class=\"choose\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"main_choose sections\">\n                <div class=\"col-sm-6\">\n                    <div class=\"head_title\">\n                        <h3>WHY CHOOSE US</h3>\n                        <div class=\"separator\"></div>\n                    </div>\n                    <div class=\"single_choose\">\n                        <div class=\"single_choose_acording\">\n                            <div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n                                <div class=\"panel panel-default\">\n                                    <div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">\n                                        <h4 class=\"panel-title\">\n                                            <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"false\" aria-controls=\"collapseOne\" class=\"collapsed\">\n                                                <i class=\"fa fa-picture-o\"></i> GREAT DESIGN \n                                            </a>\n                                        </h4>\n                                    </div>\n                                    <div id=\"collapseOne\" class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"headingOne\" aria-expanded=\"false\" style=\"height: auto;\">\n                                        <div class=\"panel-body\">\n                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n                                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"panel panel-default\">\n                                    <div class=\"panel-heading\" role=\"tab\" id=\"headingTwo\">\n                                        <h4 class=\"panel-title\">\n                                            <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n                                                <i class=\"fa fa-map-signs\"></i> RESPONSIVE DESIGN \n                                            </a>\n                                        </h4>\n                                    </div>\n                                    <div id=\"collapseTwo\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\" aria-expanded=\"false\">\n                                        <div class=\"panel-body\">\n                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et \n                                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex \n                                            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat \n                                            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"panel panel-default\">\n                                    <div class=\"panel-heading\" role=\"tab\" id=\"headingThree\">\n                                        <h4 class=\"panel-title\">\n                                            <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n                                                <i class=\"fa fa-bullseye\"></i> RATINA READY \n                                            </a>\n                                        </h4>\n                                    </div>\n                                    <div id=\"collapseThree\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingThree\" aria-expanded=\"false\">\n                                        <div class=\"panel-body\">\n                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et \n                                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex \n                                            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat \n                                            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in \n                                            culpa qui officia deserunt mollit anim id est laborum.\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"panel panel-default\">\n                                    <div class=\"panel-heading\" role=\"tab\" id=\"headingThree\">\n                                        <h4 class=\"panel-title\">\n                                            <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsefour\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n                                                <i class=\"fa fa-umbrella\"></i>FREE GOOGLE FONT \n                                            </a>\n                                        </h4>\n                                    </div>\n                                    <div id=\"collapsefour\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingThree\" aria-expanded=\"false\">\n                                        <div class=\"panel-body\">\n                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et \n                                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex \n                                            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat \n                                            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in \n                                            culpa qui officia deserunt mollit anim id est laborum.\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"panel panel-default\">\n                                    <div class=\"panel-heading\" role=\"tab\" id=\"headingThree\">\n                                        <h4 class=\"panel-title\">\n                                            <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsefive\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n                                                <i class=\"fa fa-subway\"></i>1170 PX GRID BASE \n                                            </a>\n                                        </h4>\n                                    </div>\n                                    <div id=\"collapsefive\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingfive\" aria-expanded=\"false\">\n                                        <div class=\"panel-body\">\n                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et \n                                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex \n                                            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat \n                                            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in \n                                            culpa qui officia deserunt mollit anim id est laborum.\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-sm-6\">\n                    <div class=\"single_choose\">\n                        <div class=\"single_choose_img\">\n                            <img src=\"assets/images/choose.png\" alt=\"\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/home/team.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/team.component.ts ***!
  \****************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TeamComponent = /** @class */ (function () {
    function TeamComponent() {
    }
    TeamComponent.prototype.ngOnInit = function () {
    };
    TeamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-team',
            template: __webpack_require__(/*! ./team.component.html */ "./src/app/home/team.component.html"),
            styles: [__webpack_require__(/*! ./team.component.css */ "./src/app/home/team.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "./src/app/home/testimonial.component.css":
/*!************************************************!*\
  !*** ./src/app/home/testimonial.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdGVzdGltb25pYWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/home/testimonial.component.html":
/*!*************************************************!*\
  !*** ./src/app/home/testimonial.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"video_overlay\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"main_testimonial sections text-center\">\n                <div class=\"col-md-12\" data-wow-delay=\"0.2s\">\n                    <div class=\"main_teastimonial_slider text-center\">\n\n                        <div class=\"single_testimonial\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-8 col-sm-offset-2\">\n                                    <i class=\"fa fa-quote-left\"></i>\n                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration \n                                        in some form, by injected humour, or randomised words which don't look even slightly believable. \n                                        If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing \n                                        hidden in the middle of text. All the Lorem  ww</p>\n                                    <div class=\"single_test_author\">\n                                        <h4>JANE GALADRIEL <span> -- CEO TENGKUREP</span></h4>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"single_testimonial\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-8 col-sm-offset-2\">\n                                    <i class=\"fa fa-quote-left\"></i>\n                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered \n                                        alteration in some form, by injected humour, or randomised words which don't look even slightly believable.\n                                        If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing \n                                        hidden in the middle of text. All the Lorem</p>\n                                    <div class=\"single_test_author\">\n                                        <h4>JANE GALADRIEL <span> -- CEO TENGKUREP</span></h4>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"single_testimonial\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-8 col-sm-offset-2\">\n                                    <i class=\"fa fa-quote-left\"></i>\n                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have \n                                        suffered alteration in some form, by injected humour, or randomised words which don't look even \n                                        slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there \n                                        isn't anything embarrassing hidden in the middle of text. All the Lorem</p>\n                                    <div class=\"single_test_author\">\n                                        <h4>JANE GALADRIEL <span> -- CEO TENGKUREP</span></h4>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n<section id=\"clogo\" class=\"clogo\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"main_clogo sections text-center\">\n                <div class=\"col-sm-2 col-xs-6\"> \n                    <a href=\"\"><img src=\"assets/images/clogo1.png\" alt=\"\" /></a>\n                </div>\n                <div class=\"col-sm-2 col-xs-6\"> \n                    <a href=\"\"><img src=\"assets/images/clogo2.png\" alt=\"\" /></a>\n                </div>\n                <div class=\"col-sm-2 col-xs-6\"> \n                    <a href=\"\"><img src=\"assets/images/clogo3.png\" alt=\"\" /></a>\n                </div>\n                <div class=\"col-sm-2 col-xs-6\">\n                    <a href=\"\"><img src=\"assets/images/clogo4.png\" alt=\"\" /></a>\n                </div>\n                <div class=\"col-sm-2 col-xs-6\"> \n                    <a href=\"\"><img src=\"assets/images/clogo5.png\" alt=\"\" /></a>\n                </div>\n                <div class=\"col-sm-2 col-xs-6\">\n                    <a href=\"\"><img src=\"assets/images/clogo9.png\" alt=\"\" /></a>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/home/testimonial.component.ts":
/*!***********************************************!*\
  !*** ./src/app/home/testimonial.component.ts ***!
  \***********************************************/
/*! exports provided: TestimonialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialComponent", function() { return TestimonialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TestimonialComponent = /** @class */ (function () {
    function TestimonialComponent() {
    }
    TestimonialComponent.prototype.ngOnInit = function () {
    };
    TestimonialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-testimonial',
            template: __webpack_require__(/*! ./testimonial.component.html */ "./src/app/home/testimonial.component.html"),
            styles: [__webpack_require__(/*! ./testimonial.component.css */ "./src/app/home/testimonial.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TestimonialComponent);
    return TestimonialComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Keny-PC\Documents\Visual Studio 2017\TrinetSoftware\Trinet-Software\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map