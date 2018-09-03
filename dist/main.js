(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./examples/examples.module": [
		"./src/app/examples/examples.module.ts",
		"examples-examples-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\n  <div class=\"gradient\">\n    <div class=\"container\">\n      <h1 class=\"blank\">d </h1>\n\n      <div class=\"get-started\">\n        <h1 class=\"hi\">Hi, I'm Justin</h1>\n        <h1 class=\"message\">Check out my resume or some of my example projects. I'd love to hear what you think</h1>\n        <div class=\"actions\">\n          <a mat-raised-button class=\"actions-main\" color=\"accent\" routerLink=\"../Resume\" [ngClass]=\"routeAnimationsElements\">\n            My Resume\n          </a>\n          <a mat-raised-button class=\"actions-main\" color=\"warn\" routerLink=\"../Examples\" [ngClass]=\"routeAnimationsElements\">\n            Some Angular Applets\n          </a>\n          <h2></h2>\n          <h2>Try the website out for yourself:</h2>\n          <code>git clone\n            https://github.com/JustinOkeefe/personal-website.git  \n          </code>\n          <br>\n          <code>cd new-project</code>\n          <br>\n          <code>npm install</code>\n          <br>\n          <code>npm start</code>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (max-width: 480px) {\n  h1 {\n    font-size: 26px !important; }\n  h2 {\n    font-size: 14px !important; } }\n\n.hi {\n  text-align: center;\n  font-size: 2.1em;\n  font-family: roboto;\n  line-height: 20px;\n  color: #b3e5fc;\n  text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000; }\n\n.message {\n  text-align: center;\n  font-size: 2.5em;\n  font-family: roboto;\n  line-height: 40px;\n  font-family: roboto Condensed;\n  color: #141026; }\n\n.blank {\n  opacity: 0.0; }\n\nh2 {\n  font-size: 1.7em;\n  line-height: 40px;\n  font-family: roboto Condensed;\n  color: #141026; }\n\n.background {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: url('background.jpg') no-repeat center top;\n  background-size: cover;\n  min-height: 100%;\n  content: '';\n  z-index: 0; }\n\n.background .actions {\n    text-align: center;\n    margin: 50px;\n    z-index: 1; }\n\n.background .actions span {\n      display: inline-block;\n      font-weight: bold;\n      padding: 20px 10px 30px 10px; }\n\n.background .actions a {\n      margin: 0 5px 10px 0; }\n\n.background .actions a.actions-main {\n        text-transform: uppercase;\n        padding: 3px 24px; }\n\n.background .actions a mat-icon {\n        position: relative;\n        top: 4px; }\n\n.background .get-started {\n    max-width: 700px;\n    margin: 50px auto;\n    letter-spacing: 0.01px;\n    overflow-wrap: break-word;\n    z-index: 1;\n    overflow: hidden; }\n\n.background .get-started code {\n      font-size: 1.0em;\n      display: inline-block;\n      word-wrap: break-word;\n      white-space: normal;\n      margin: 0 0 10px 0;\n      background-color: #b3e5fc;\n      border-radius: 10px;\n      padding: 0 8px 1px; }\n\n.background .container {\n    position: relative; }\n\n.follow-releases {\n  max-width: 700px;\n  margin: 0 auto 60px auto; }\n\n.follow-releases p {\n    line-height: 40px; }\n\n.follow-releases p a {\n      border-bottom: 3px solid; }\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/animations.ts":
/*!*******************************!*\
  !*** ./src/app/animations.ts ***!
  \*******************************/
/*! exports provided: fadeAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeAnimation", function() { return fadeAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var fadeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))], { optional: true })
    ])
]);


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
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
    { path: 'Resume', component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_3__["ResumeComponent"] },
    { path: 'About', component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"], pathMatch: 'full' },
    {
        path: 'Examples',
        loadChildren: './examples/examples.module#ExamplesModule'
    },
];
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\n  <mat-sidenav-container>\n    <mat-sidenav #sidenav mode=\"push\">\n      <mat-nav-list>\n        <a mat-list-item routerLink=\"/About\">\n          <mat-icon class=\"icon\">home</mat-icon>\n          <span class=\"label\"></span>\n        </a>\n        <a mat-list-item routerLink=\"/Resume\">\n          <mat-icon class=\"icon\">work_outline</mat-icon>\n          <span class=\"label\"></span>\n        </a>\n        <a mat-list-item routerLink=\"/Examples\">\n          <mat-icon class=\"icon\">dashboard</mat-icon>\n          <span class=\"label\"></span>\n        </a>\n      </mat-nav-list>\n    </mat-sidenav>\n    <mat-sidenav-content>\n      <mat-toolbar color=\"primary\">\n        <div fxHide.gt-xs>\n          <button mat-icon-button class=\"d-md-none\" (click)=\"sidenav.open()\">\n            <mat-icon>menu</mat-icon>\n          </button>\n        </div>\n        <div>\n          <a routerLink=\"/About\">\n            <span class=\"name\">Justin O'Keefe</span>\n          </a>\n        </div>\n        <div fxFlex fxLayout fxLayoutAlign=\"flex-end\" fxHide.xs>\n          <ul fxLayout fxLayoutGap=\"20px\" class=\"navigation-items\">\n            <li>\n              <a routerLink=\"/About\">\n                <mat-icon class=\"icon\">home</mat-icon>\n                <span class=\"label\">Home</span>\n              </a>\n            </li>\n            <li>\n              <a routerLink=\"/Resume\">\n                <mat-icon class=\"icon\">work_outline</mat-icon>\n                <span class=\"label\">Resume</span>\n              </a>\n            </li>\n            <li>\n              <a routerLink=\"/Examples\">\n                <mat-icon class=\"icon\">dashboard</mat-icon>\n                <span class=\"label\">Examples</span>\n              </a>\n            </li>\n\n          </ul>\n        </div>\n      </mat-toolbar>\n      <div class=\"site\">\n        <div class=\"content\" [@fadeAnimation]=\"o.isActivated ? o.activatedRoute : ''\">\n          <router-outlet #o=\"outlet\"></router-outlet>\n        </div>\n      </div>\n      <app-speed-dial-fab></app-speed-dial-fab>\n\n\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-sidenav-container, mat-sidenav-content, mat-sidenav {\n  height: 100%; }\n\n.example-container {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n\nmat-sidenav {\n  width: 250px; }\n\n.name {\n  font-size: 1.5em; }\n\na {\n  text-decoration: none;\n  color: white; }\n\na:hover,\na:active {\n  color: lightgray; }\n\n.navigation-items {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  cursor: pointer; }\n\n.icon {\n  display: inline-block;\n  height: 30px;\n  margin: 0 auto;\n  padding-right: 15px;\n  text-align: center;\n  vertical-align: middle;\n  width: 15%; }\n\n.maindiv {\n  min-height: 100vh; }\n\n.toolbar {\n  position: fixed;\n  width: 100%;\n  display: flex; }\n\n.site {\n  display: flex;\n  flex-direction: column;\n  min-height: 94vh; }\n\n.content {\n  flex: 1; }\n\n.sidenav-container {\n  flex: 1; }\n\n.wrapper {\n  position: absolute;\n  top: 64px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden; }\n\n.wrapper .content {\n    position: relative;\n    flex: 1 0 auto; }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animations */ "./src/app/animations.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(matIconRegistry, domSanitizer) {
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.matIconRegistry.addSvgIcon("github", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/github-logo.svg"));
        this.matIconRegistry.addSvgIcon("instagram", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/instagram-logo.svg"));
        this.matIconRegistry.addSvgIcon("linkedin", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/linkedin-logo.svg"));
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
            animations: [_animations__WEBPACK_IMPORTED_MODULE_1__["fadeAnimation"]]
        }),
        __metadata("design:paramtypes", [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _speed_dial_fab_speed_dial_fab_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./speed-dial-fab/speed-dial-fab.component */ "./src/app/speed-dial-fab/speed-dial-fab.component.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//import {AppRouters} from './app.routes';




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                _resume_resume_component__WEBPACK_IMPORTED_MODULE_8__["ResumeComponent"],
                _speed_dial_fab_speed_dial_fab_component__WEBPACK_IMPORTED_MODULE_10__["SpeedDialFabComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_11__["AngularFontAwesomeModule"]
                //AppRouters,
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTreeModule"],
            ],
            exports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTreeModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/resume/resume.component.html":
/*!**********************************************!*\
  !*** ./src/app/resume/resume.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <h1></h1>\n  </div>\n</div>\n<div class=\"container\">\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"content\">\n    <mat-card class=\"card\">\n      <mat-vertical-stepper #stepper>\n        <ng-template matStepperIcon=\"edit\">\n          <mat-icon>work_outline</mat-icon>\n        </ng-template>\n        <mat-step label=\"Business Intelligence and Data Services\">\n          <p class=\"title\">Associate Engineer</p>\n          <p class=\"company\">Bristol-Myers Squibb. Devens, Massachusetts</p>\n          <i class=\"dates\">Current Role</i>\n          <ul class=\"duties\">\n            <li>\n              Drive performance and value through the creation of custom analytics and the configuration of reports and visualizations\n              at highly integrated biologics manufacturing site.\n            </li>\n            <li>\n              Develop full stack, RESTful web applications (mostly with\n              <b>Angular</b> and\n              <b>Node</b>, though I've worked with <b>C#/WebAPI</b>) to enhance and streamline business processes under the auspices of cGMP requirements.\n            </li>\n            <li>\n              Compose ad-hoc queries, stored procedures, etc... in dense production databases using MS SQL Server Management studio.\n            </li>\n            <li>\n              Perform maintenance, upgrades, and database migrations as required on analytics platforms (e.g.\n              <b>OSIsoft PI</b> and\n              <b>SIMCA</b>) and production MES software.\n            </li>\n            <li>\n                Deliver complex, custom <b>Spotfire</b> visualizations from heterogeneous data sources used for reporting site data across multiple tiers.\n            </li>\n            <li>\n                Develop custom DeltaV and Syncade database reports for multiple business units, either written in <b>SQL/XML/XSLT/HTML</b> using InfoBatch reporting engine, or via Crystal Reports.\n            </li>\n            <li>\n                Regularly use <b>Python</b> for a variety of scripting and analytics purposes (e.g. LDA for topic analysis of electronic batch record exception data).\n              </li>\n          </ul>\n          <div>\n            <button mat-button matStepperNext color=\"primary\">Next</button>\n          </div>\n        </mat-step>\n        <mat-step label=\"Quality Assurance, Clinical Operations\">\n          <p class=\"title\">Quality Assurance Lead</p>\n          <p class=\"company\"> Bristol-Myers Squibb. Devens, Massachusetts</p>\n          <i class=\"dates\">From October 2016 to April 2018</i>\n          <ul class=\"duties\">\n            <li>\n              Field quality floor support lead during start-up and operational phases of single-use biologics clinical manufacturing facility.\n            </li>\n            <li>\n              Enacted\n              <b>risk-based</b> approach to batch record review process which directly contributed to a 63% reduction in overall\n              executed batch record review cycle time between manufacturing and QA teams.\n            </li>\n            <li>\n              Administrated site QA walkthrough program for weekly and quarterly inspections of manufacturing, utilities, cryo-storage,\n              and warehouse facilities. Scheduled inspections and created KPI dashboard for monitoring program health.\n            </li>\n            <li>\n              Built metrics and custom <b>Spotfire</b> visualizations for KPI reporting across multiple tiers of QA and manufacturing business units\n              </li>\n            <li>\n              Provided review and approval of investigations and task records via Trackwise as Quality Lead Coordinator. Occasionally acted\n              as lead investigator; performed root cause analysis and drove excellence through\n              <b>CAPA</b>.\n            </li>\n            <li>\n              Reviewed and approved executed paper batch records utilizing variety of systems including\n              <b>DeltaV, Syncade, SAP, Trackewise</b>.\n            </li>\n          </ul>\n          <div>\n            <button mat-button matStepperPrevious color=\"accent\">Back</button>\n            <button mat-button matStepperNext color=\"primary\">Next</button>\n          </div>\n        </mat-step>\n        <mat-step label=\"Quality Assurance, Commercial Operations\">\n          <p class=\"title\">Quality Assurance Lead</p>\n          <p class=\"company\"> Bristol-Myers Squibb. Devens, Massachusetts</p>\n          <i class=\"dates\">From October 2014 to April 2016</i>\n          <ul class=\"duties\">\n            <li>\n              2nd shift field quality floor support lead for highly automated, large scale bulk biologics manufacturing facility.\n            </li>\n            <li>\n              Performed complex elecronic manufacturing batch record and exception report reviews in support of product release.\n            </li>\n            <li>\n              Oversaw labeling, packaging, and shipping of final bulk drug substance material; utilized\n              <b>SAP</b> to execute disposition transactions.\n            </li>\n            <li>\n              Provided direct floor coverage in GMP manufacturing areas, yielded collaborative resolutions to complex situations.\n            </li>\n          </ul>\n          <div>\n            <button mat-button matStepperPrevious color=\"accent\">Back</button>\n            <button mat-button matStepperNext color=\"primary\">Next</button>\n          </div>\n        </mat-step>\n        <mat-step label=\"Commercial Drug Manufacturing\">\n          <p class=\"title\">Sr. Bioprocess Associate</p>\n          <p class=\"company\"> Bristol-Myers Squibb. Devens, Massachusetts</p>\n          <i class=\"dates\">From October 2012 to April 2014</i>\n          <ul class=\"duties\">\n            <li>\n              Provided careful oversight of downstream processes including buffer preparation, chromatography, column packing, UFDF, and\n              final fill operations in large scale biologics manufacturing facility in accordance with key performance metrics\n              and cGMP standards.\n            </li>\n            <li>\n              Authored, revised, and reviewed SOPs applicable to purification and process support areas. </li>\n            <li>\n              Routinely executed electronic work instructions and SOPs as well as real-time process monitoring to ensure right first time\n              adherence.\n            </li>\n          </ul>\n          <div>\n            <button mat-button matStepperPrevious color=\"accent\">Back</button>\n            <button mat-button matStepperNext color=\"primary\">Next</button>\n          </div>\n        </mat-step>\n        <mat-step label=\"Manufacturing Sciences and Technology\">\n          <p class=\"title\">Co-op</p>\n          <p class=\"company\"> Bristol-Myers Squibb. Devens, Massachusetts</p>\n          <i class=\"dates\">From January 2010 to August 2010</i>\n          <ul class=\"duties\">\n            <li>\n              Worked within a highly cross functional group responsible for upstream and downstream manufacturing support.\n            </li>\n            <li>\n              Operated small scale bioreactors in parallel with initial runs of production scale reactors for the purposes of troubleshooting\n              potential full scale out-of-trend performances during development campaign in facility start-up stage.\n            </li>\n            <li>\n              Authored a wide range of technical documentation to support both manufacturing and PV requirements.\n            </li>\n          </ul>\n          <div>\n            <button mat-button matStepperPrevious color=\"accent\">Back</button>\n            <button mat-button matStepperNext color=\"primary\">Next</button>\n          </div>\n        </mat-step>\n        <mat-step label=\"Education\">\n          <p class=\"college\">University of Massachusetts, Amherst</p>\n          <p class=\"degree\"> B.S. Chemical Engineering</p>\n          <div>\n            <button mat-button matStepperPrevious color=\"accent\">Back</button>\n            <button mat-button color=\"primary\" (click)=\"stepper.reset()\">Reset</button>\n          </div>\n        </mat-step>\n      </mat-vertical-stepper>\n    </mat-card>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/resume/resume.component.scss":
/*!**********************************************!*\
  !*** ./src/app/resume/resume.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  min-width: 80%;\n  padding: 10px; }\n\n.example-container {\n  display: flex;\n  flex-direction: column;\n  max-height: 500px;\n  min-width: 100%; }\n\na {\n  cursor: pointer; }\n\n.padding {\n  size: 10px; }\n\nli {\n  line-height: 1.5; }\n\np {\n  line-height: 1.0; }\n\n.title, .college {\n  font-weight: bold;\n  font-size: 1.3em; }\n\n.company, .degree {\n  font-size: 1.0em; }\n\n.dates {\n  font-size: 0.8em; }\n\n/*\n.duties {\n\n}\n\n*/\n"

/***/ }),

/***/ "./src/app/resume/resume.component.ts":
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
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

var ResumeComponent = /** @class */ (function () {
    function ResumeComponent() {
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume',
            template: __webpack_require__(/*! ./resume.component.html */ "./src/app/resume/resume.component.html"),
            styles: [__webpack_require__(/*! ./resume.component.scss */ "./src/app/resume/resume.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ResumeComponent);
    return ResumeComponent;
}());



/***/ }),

/***/ "./src/app/speed-dial-fab/speed-dial-fab.animations.ts":
/*!*************************************************************!*\
  !*** ./src/app/speed-dial-fab/speed-dial-fab.animations.ts ***!
  \*************************************************************/
/*! exports provided: speedDialFabAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "speedDialFabAnimations", function() { return speedDialFabAnimations; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var speedDialFabAnimations = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fabToggler', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'rotate(0deg)'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'rotate(225deg)'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('speedDialStagger', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }), { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])('40ms', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms cubic-bezier(0.4, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(10px)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateY(0)' }),
                ]))
            ]), { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms cubic-bezier(0.4, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
            ])), { optional: true })
        ])
    ])
];


/***/ }),

/***/ "./src/app/speed-dial-fab/speed-dial-fab.component.html":
/*!**************************************************************!*\
  !*** ./src/app/speed-dial-fab/speed-dial-fab.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"fab-dismiss\" *ngIf=\"fabTogglerState==='active'\" (click)=\"onToggleFab()\">\n</div>\n<div class=\"fab-container\">\n  <button mat-fab class=\"fab-toggler\" color=\"primary\" (click)=\"onToggleFab()\">\n    <i class=\"material-icons\" [@fabToggler]=\"{value: fabTogglerState}\">add</i>\n    <!-- Animation here -->\n  </button>\n  <div [@speedDialStagger]=\"buttons.length\">\n    <a *ngFor=\"let btn of buttons\" mat-fab class=\"fab-secondary\" color=\"primary\" href='{{btn.url}}'>\n\n      <mat-icon class=\"mat-icon\" svgIcon=\"{{btn.icon}}\">\n\n      </mat-icon>\n\n    </a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/speed-dial-fab/speed-dial-fab.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/speed-dial-fab/speed-dial-fab.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fab-container {\n  position: fixed;\n  bottom: 15px;\n  right: 15px;\n  z-index: 100;\n  display: flex;\n  flex-direction: column-reverse;\n  align-items: center; }\n  .fab-container > div {\n    display: flex;\n    flex-direction: column-reverse;\n    align-items: center;\n    margin-bottom: 5px; }\n  .fab-container > div a {\n      margin-bottom: 17px; }\n  .mat-icon {\n  -webkit-transform: scale(2.5);\n          transform: scale(2.5);\n  padding: 0px 0px 3px 0px; }\n  .fab-toggler {\n  float: right;\n  z-index: 100; }\n  #fab-dismiss {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 99; }\n"

/***/ }),

/***/ "./src/app/speed-dial-fab/speed-dial-fab.component.ts":
/*!************************************************************!*\
  !*** ./src/app/speed-dial-fab/speed-dial-fab.component.ts ***!
  \************************************************************/
/*! exports provided: SpeedDialFabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeedDialFabComponent", function() { return SpeedDialFabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _speed_dial_fab_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./speed-dial-fab.animations */ "./src/app/speed-dial-fab/speed-dial-fab.animations.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SpeedDialFabComponent = /** @class */ (function () {
    function SpeedDialFabComponent(matIconRegistry, domSanitizer) {
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.fabButtons = [
            {
                icon: 'github',
                url: 'https://github.com/justinokeefe'
            },
            {
                icon: 'instagram',
                url: 'https://www.instagram.com/just_okeefe/'
            },
            {
                icon: 'linkedin',
                url: 'https://www.linkedin.com/in/justin-o-keefe-10455416b/'
            },
            {
                icon: 'email',
                url: 'mailto:just.okeefe@gmail.com'
            }
        ];
        this.buttons = [];
        this.fabTogglerState = 'inactive';
        this.matIconRegistry.addSvgIcon("github", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/github-logo.svg"));
        this.matIconRegistry.addSvgIcon("instagram", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/instagram-logo.svg"));
        this.matIconRegistry.addSvgIcon("linkedin", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/linkedin-logo.svg"));
        this.matIconRegistry.addSvgIcon("email", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/email.svg"));
    }
    SpeedDialFabComponent.prototype.showItems = function () {
        this.fabTogglerState = 'active';
        this.buttons = this.fabButtons;
    };
    SpeedDialFabComponent.prototype.hideItems = function () {
        this.fabTogglerState = 'inactive';
        this.buttons = [];
    };
    SpeedDialFabComponent.prototype.onToggleFab = function () {
        this.buttons.length ? this.hideItems() : this.showItems();
    };
    SpeedDialFabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-speed-dial-fab',
            template: __webpack_require__(/*! ./speed-dial-fab.component.html */ "./src/app/speed-dial-fab/speed-dial-fab.component.html"),
            styles: [__webpack_require__(/*! ./speed-dial-fab.component.scss */ "./src/app/speed-dial-fab/speed-dial-fab.component.scss")],
            animations: _speed_dial_fab_animations__WEBPACK_IMPORTED_MODULE_1__["speedDialFabAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], SpeedDialFabComponent);
    return SpeedDialFabComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/justinokeefe/repos/website-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map