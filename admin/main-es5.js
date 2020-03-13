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

/***/ "./src/app/@theme/components/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/@theme/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/@theme/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(sidebarService, menuService, themeService, breakpointService) {
        this.sidebarService = sidebarService;
        this.menuService = menuService;
        this.themeService = themeService;
        this.breakpointService = breakpointService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.userPictureOnly = false;
        this.themes = [
            {
                value: 'default',
                name: 'Light',
            },
            {
                value: 'dark',
                name: 'Dark',
            },
            {
                value: 'cosmic',
                name: 'Cosmic',
            },
            {
                value: 'corporate',
                name: 'Corporate',
            },
        ];
        this.currentTheme = 'default';
        this.userMenu = [{ title: 'Profile' }, { title: 'Log out' }];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentTheme = this.themeService.currentTheme;
        var xl = this.breakpointService.getBreakpointsMap().xl;
        this.themeService.onMediaQueryChange()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
            var currentBreakpoint = _a[1];
            return currentBreakpoint.width < xl;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$))
            .subscribe(function (isLessThanXl) { return _this.userPictureOnly = isLessThanXl; });
        this.themeService.onThemeChange()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
            var name = _a.name;
            return name;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$))
            .subscribe(function (themeName) { return _this.currentTheme = themeName; });
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    HeaderComponent.prototype.changeTheme = function (themeName) {
        this.themeService.changeTheme(themeName);
    };
    HeaderComponent.prototype.toggleSidebar = function () {
        this.sidebarService.toggle(true, 'menu-sidebar');
        return false;
    };
    HeaderComponent.prototype.navigateHome = function () {
        this.menuService.navigateHome();
        return false;
    };
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/index.ts":
/*!********************************************!*\
  !*** ./src/app/@theme/components/index.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent, FooterComponent, SearchInputComponent, TinyMCEComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ "./src/app/@theme/components/header/header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return _header_header_component__WEBPACK_IMPORTED_MODULE_0__["HeaderComponent"]; });

/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/@theme/components/footer/footer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"]; });

/* harmony import */ var _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-input/search-input.component */ "./src/app/@theme/components/search-input/search-input.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchInputComponent", function() { return _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_2__["SearchInputComponent"]; });

/* harmony import */ var _tiny_mce_tiny_mce_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tiny-mce/tiny-mce.component */ "./src/app/@theme/components/tiny-mce/tiny-mce.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TinyMCEComponent", function() { return _tiny_mce_tiny_mce_component__WEBPACK_IMPORTED_MODULE_3__["TinyMCEComponent"]; });







/***/ }),

/***/ "./src/app/@theme/components/search-input/search-input.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/@theme/components/search-input/search-input.component.ts ***!
  \**************************************************************************/
/*! exports provided: SearchInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchInputComponent", function() { return SearchInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var SearchInputComponent = /** @class */ (function () {
    function SearchInputComponent() {
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isInputShown = false;
    }
    SearchInputComponent.prototype.showInput = function () {
        this.isInputShown = true;
        this.input.nativeElement.focus();
    };
    SearchInputComponent.prototype.hideInput = function () {
        this.isInputShown = false;
    };
    SearchInputComponent.prototype.onInput = function (val) {
        this.search.emit(val);
    };
    return SearchInputComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/tiny-mce/tiny-mce.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/@theme/components/tiny-mce/tiny-mce.component.ts ***!
  \******************************************************************/
/*! exports provided: TinyMCEComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TinyMCEComponent", function() { return TinyMCEComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");


var TinyMCEComponent = /** @class */ (function () {
    function TinyMCEComponent(host, locationStrategy) {
        this.host = host;
        this.locationStrategy = locationStrategy;
        this.editorKeyup = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TinyMCEComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        tinymce.init({
            target: this.host.nativeElement,
            plugins: ['link', 'paste', 'table'],
            skin_url: this.locationStrategy.getBaseHref() + "assets/skins/lightgray",
            setup: function (editor) {
                _this.editor = editor;
                editor.on('keyup', function () {
                    _this.editorKeyup.emit(editor.getContent());
                });
            },
            height: '320',
        });
    };
    TinyMCEComponent.prototype.ngOnDestroy = function () {
        tinymce.remove(this.editor);
    };
    return TinyMCEComponent;
}());



/***/ }),

/***/ "./src/app/@theme/layouts/index.ts":
/*!*****************************************!*\
  !*** ./src/app/@theme/layouts/index.ts ***!
  \*****************************************/
/*! exports provided: OneColumnLayoutComponent, TwoColumnsLayoutComponent, ThreeColumnsLayoutComponent, RegisterLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _one_column_one_column_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./one-column/one-column.layout */ "./src/app/@theme/layouts/one-column/one-column.layout.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OneColumnLayoutComponent", function() { return _one_column_one_column_layout__WEBPACK_IMPORTED_MODULE_0__["OneColumnLayoutComponent"]; });

/* harmony import */ var _two_columns_two_columns_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./two-columns/two-columns.layout */ "./src/app/@theme/layouts/two-columns/two-columns.layout.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TwoColumnsLayoutComponent", function() { return _two_columns_two_columns_layout__WEBPACK_IMPORTED_MODULE_1__["TwoColumnsLayoutComponent"]; });

/* harmony import */ var _three_columns_three_columns_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./three-columns/three-columns.layout */ "./src/app/@theme/layouts/three-columns/three-columns.layout.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThreeColumnsLayoutComponent", function() { return _three_columns_three_columns_layout__WEBPACK_IMPORTED_MODULE_2__["ThreeColumnsLayoutComponent"]; });

/* harmony import */ var _register_layout_register_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register-layout/register-layout.component */ "./src/app/@theme/layouts/register-layout/register-layout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterLayoutComponent", function() { return _register_layout_register_layout_component__WEBPACK_IMPORTED_MODULE_3__["RegisterLayoutComponent"]; });







/***/ }),

/***/ "./src/app/@theme/layouts/one-column/one-column.layout.ts":
/*!****************************************************************!*\
  !*** ./src/app/@theme/layouts/one-column/one-column.layout.ts ***!
  \****************************************************************/
/*! exports provided: OneColumnLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneColumnLayoutComponent", function() { return OneColumnLayoutComponent; });
var OneColumnLayoutComponent = /** @class */ (function () {
    function OneColumnLayoutComponent() {
    }
    return OneColumnLayoutComponent;
}());



/***/ }),

/***/ "./src/app/@theme/layouts/register-layout/register-layout.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/@theme/layouts/register-layout/register-layout.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RegisterLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterLayoutComponent", function() { return RegisterLayoutComponent; });
var RegisterLayoutComponent = /** @class */ (function () {
    function RegisterLayoutComponent() {
    }
    return RegisterLayoutComponent;
}());



/***/ }),

/***/ "./src/app/@theme/layouts/three-columns/three-columns.layout.ts":
/*!**********************************************************************!*\
  !*** ./src/app/@theme/layouts/three-columns/three-columns.layout.ts ***!
  \**********************************************************************/
/*! exports provided: ThreeColumnsLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreeColumnsLayoutComponent", function() { return ThreeColumnsLayoutComponent; });
var ThreeColumnsLayoutComponent = /** @class */ (function () {
    function ThreeColumnsLayoutComponent() {
    }
    return ThreeColumnsLayoutComponent;
}());



/***/ }),

/***/ "./src/app/@theme/layouts/two-columns/two-columns.layout.ts":
/*!******************************************************************!*\
  !*** ./src/app/@theme/layouts/two-columns/two-columns.layout.ts ***!
  \******************************************************************/
/*! exports provided: TwoColumnsLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwoColumnsLayoutComponent", function() { return TwoColumnsLayoutComponent; });
var TwoColumnsLayoutComponent = /** @class */ (function () {
    function TwoColumnsLayoutComponent() {
    }
    return TwoColumnsLayoutComponent;
}());



/***/ }),

/***/ "./src/app/@theme/pipes/capitalize.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/@theme/pipes/capitalize.pipe.ts ***!
  \*************************************************/
/*! exports provided: CapitalizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalizePipe", function() { return CapitalizePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var CapitalizePipe = /** @class */ (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (input) {
        return input && input.length
            ? (input.charAt(0).toUpperCase() + input.slice(1).toLowerCase())
            : input;
    };
    return CapitalizePipe;
}());



/***/ }),

/***/ "./src/app/@theme/pipes/index.ts":
/*!***************************************!*\
  !*** ./src/app/@theme/pipes/index.ts ***!
  \***************************************/
/*! exports provided: CapitalizePipe, PluralPipe, RoundPipe, TimingPipe, NumberWithCommasPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _capitalize_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capitalize.pipe */ "./src/app/@theme/pipes/capitalize.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CapitalizePipe", function() { return _capitalize_pipe__WEBPACK_IMPORTED_MODULE_0__["CapitalizePipe"]; });

/* harmony import */ var _plural_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plural.pipe */ "./src/app/@theme/pipes/plural.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PluralPipe", function() { return _plural_pipe__WEBPACK_IMPORTED_MODULE_1__["PluralPipe"]; });

/* harmony import */ var _round_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./round.pipe */ "./src/app/@theme/pipes/round.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RoundPipe", function() { return _round_pipe__WEBPACK_IMPORTED_MODULE_2__["RoundPipe"]; });

/* harmony import */ var _timing_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timing.pipe */ "./src/app/@theme/pipes/timing.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimingPipe", function() { return _timing_pipe__WEBPACK_IMPORTED_MODULE_3__["TimingPipe"]; });

/* harmony import */ var _number_with_commas_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./number-with-commas.pipe */ "./src/app/@theme/pipes/number-with-commas.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumberWithCommasPipe", function() { return _number_with_commas_pipe__WEBPACK_IMPORTED_MODULE_4__["NumberWithCommasPipe"]; });








/***/ }),

/***/ "./src/app/@theme/pipes/number-with-commas.pipe.ts":
/*!*********************************************************!*\
  !*** ./src/app/@theme/pipes/number-with-commas.pipe.ts ***!
  \*********************************************************/
/*! exports provided: NumberWithCommasPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberWithCommasPipe", function() { return NumberWithCommasPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var NumberWithCommasPipe = /** @class */ (function () {
    function NumberWithCommasPipe() {
    }
    NumberWithCommasPipe.prototype.transform = function (input) {
        return new Intl.NumberFormat().format(input);
    };
    return NumberWithCommasPipe;
}());



/***/ }),

/***/ "./src/app/@theme/pipes/plural.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/@theme/pipes/plural.pipe.ts ***!
  \*********************************************/
/*! exports provided: PluralPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluralPipe", function() { return PluralPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var PluralPipe = /** @class */ (function () {
    function PluralPipe() {
    }
    PluralPipe.prototype.transform = function (input, label, pluralLabel) {
        if (pluralLabel === void 0) { pluralLabel = ''; }
        input = input || 0;
        return input === 1
            ? input + " " + label
            : pluralLabel
                ? input + " " + pluralLabel
                : input + " " + label + "s";
    };
    return PluralPipe;
}());



/***/ }),

/***/ "./src/app/@theme/pipes/round.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/@theme/pipes/round.pipe.ts ***!
  \********************************************/
/*! exports provided: RoundPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundPipe", function() { return RoundPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var RoundPipe = /** @class */ (function () {
    function RoundPipe() {
    }
    RoundPipe.prototype.transform = function (input) {
        return Math.round(input);
    };
    return RoundPipe;
}());



/***/ }),

/***/ "./src/app/@theme/pipes/timing.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/@theme/pipes/timing.pipe.ts ***!
  \*********************************************/
/*! exports provided: TimingPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimingPipe", function() { return TimingPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var TimingPipe = /** @class */ (function () {
    function TimingPipe() {
    }
    TimingPipe.prototype.transform = function (time) {
        if (time) {
            var minutes = Math.floor(time / 60);
            var seconds = Math.floor(time % 60);
            return "" + this.initZero(minutes) + minutes + ":" + this.initZero(seconds) + seconds;
        }
        return '00:00';
    };
    TimingPipe.prototype.initZero = function (time) {
        return time < 10 ? '0' : '';
    };
    return TimingPipe;
}());



/***/ }),

/***/ "./src/app/@theme/styles/theme.corporate.ts":
/*!**************************************************!*\
  !*** ./src/app/@theme/styles/theme.corporate.ts ***!
  \**************************************************/
/*! exports provided: CORPORATE_THEME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CORPORATE_THEME", function() { return CORPORATE_THEME; });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm5/index.js");

var baseThemeVariables = _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["CORPORATE_THEME"].variables;
var CORPORATE_THEME = {
    name: 'corporate',
    base: 'corporate',
    variables: {
        temperature: {
            arcFill: ['#ffa36b', '#ffa36b', '#ff9e7a', '#ff9888', '#ff8ea0'],
            arcEmpty: baseThemeVariables.bg2,
            thumbBg: baseThemeVariables.bg2,
            thumbBorder: '#ffa36b',
        },
        solar: {
            gradientLeft: baseThemeVariables.primary,
            gradientRight: baseThemeVariables.primary,
            shadowColor: 'rgba(0, 0, 0, 0)',
            secondSeriesFill: baseThemeVariables.bg2,
            radius: ['80%', '90%'],
        },
        traffic: {
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            yAxisSplitLine: 'rgba(0, 0, 0, 0)',
            lineBg: baseThemeVariables.primary,
            lineShadowBlur: '0',
            itemColor: baseThemeVariables.border4,
            itemBorderColor: baseThemeVariables.border4,
            itemEmphasisBorderColor: baseThemeVariables.primaryLight,
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            shadowLineShadow: 'rgba(0, 0, 0, 0)',
            gradFrom: baseThemeVariables.bg,
            gradTo: baseThemeVariables.bg,
        },
        electricity: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: baseThemeVariables.fgText,
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            axisLineColor: baseThemeVariables.border3,
            xAxisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            lineGradFrom: baseThemeVariables.primary,
            lineGradTo: baseThemeVariables.primary,
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: 'rgba(0, 0, 0, 0)',
            areaGradTo: 'rgba(0, 0, 0, 0)',
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
        },
        bubbleMap: {
            titleColor: baseThemeVariables.fgText,
            areaColor: baseThemeVariables.bg4,
            areaHoverColor: baseThemeVariables.fgHighlight,
            areaBorderColor: baseThemeVariables.border5,
        },
        profitBarAnimationEchart: {
            textColor: baseThemeVariables.fgText,
            firstAnimationBarColor: baseThemeVariables.primary,
            secondAnimationBarColor: baseThemeVariables.success,
            splitLineStyleOpacity: '1',
            splitLineStyleWidth: '1',
            splitLineStyleColor: baseThemeVariables.separator,
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        },
        trafficBarEchart: {
            gradientFrom: baseThemeVariables.warningLight,
            gradientTo: baseThemeVariables.warning,
            shadow: baseThemeVariables.warningLight,
            shadowBlur: '0',
            axisTextColor: baseThemeVariables.fgText,
            axisFontSize: '12',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
        },
        countryOrders: {
            countryBorderColor: baseThemeVariables.border4,
            countryFillColor: baseThemeVariables.bg4,
            countryBorderWidth: '1',
            hoveredCountryBorderColor: baseThemeVariables.primary,
            hoveredCountryFillColor: baseThemeVariables.primaryLight,
            hoveredCountryBorderWidth: '1',
            chartAxisLineColor: baseThemeVariables.border4,
            chartAxisTextColor: baseThemeVariables.fg,
            chartAxisFontSize: '16',
            chartGradientTo: baseThemeVariables.primary,
            chartGradientFrom: baseThemeVariables.primaryLight,
            chartAxisSplitLine: baseThemeVariables.separator,
            chartShadowLineColor: baseThemeVariables.primaryLight,
            chartLineBottomShadowColor: baseThemeVariables.primary,
            chartInnerLineColor: baseThemeVariables.bg2,
        },
        echarts: {
            bg: baseThemeVariables.bg,
            textColor: baseThemeVariables.fgText,
            axisLineColor: baseThemeVariables.fgText,
            splitLineColor: baseThemeVariables.separator,
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: baseThemeVariables.primary,
            areaOpacity: '0.7',
        },
        chartjs: {
            axisLineColor: baseThemeVariables.separator,
            textColor: baseThemeVariables.fgText,
        },
        orders: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            // first line
            firstAreaGradFrom: baseThemeVariables.bg3,
            firstAreaGradTo: baseThemeVariables.bg3,
            firstShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            // second line
            secondLineGradFrom: baseThemeVariables.primary,
            secondLineGradTo: baseThemeVariables.primary,
            secondAreaGradFrom: 'rgba(0, 0, 0, 0)',
            secondAreaGradTo: 'rgba(0, 0, 0, 0)',
            secondShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            // third line
            thirdLineGradFrom: baseThemeVariables.success,
            thirdLineGradTo: baseThemeVariables.successLight,
            thirdAreaGradFrom: 'rgba(0, 0, 0, 0)',
            thirdAreaGradTo: 'rgba(0, 0, 0, 0)',
            thirdShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
        },
        profit: {
            bg: baseThemeVariables.bg,
            textColor: baseThemeVariables.fgText,
            axisLineColor: baseThemeVariables.border4,
            splitLineColor: baseThemeVariables.separator,
            areaOpacity: '1',
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            // first bar
            firstLineGradFrom: baseThemeVariables.bg3,
            firstLineGradTo: baseThemeVariables.bg3,
            firstLineShadow: 'rgba(0, 0, 0, 0)',
            // second bar
            secondLineGradFrom: baseThemeVariables.primary,
            secondLineGradTo: baseThemeVariables.primary,
            secondLineShadow: 'rgba(0, 0, 0, 0)',
            // third bar
            thirdLineGradFrom: baseThemeVariables.success,
            thirdLineGradTo: baseThemeVariables.success,
            thirdLineShadow: 'rgba(0, 0, 0, 0)',
        },
        orderProfitLegend: {
            firstItem: baseThemeVariables.success,
            secondItem: baseThemeVariables.primary,
            thirdItem: baseThemeVariables.bg3,
        },
        visitors: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '1',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.primary,
            lineStyle: 'dotted',
            lineWidth: '6',
            lineGradFrom: '#ffffff',
            lineGradTo: '#ffffff',
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: baseThemeVariables.primary,
            areaGradTo: baseThemeVariables.primaryLight,
            innerLineStyle: 'solid',
            innerLineWidth: '1',
            innerAreaGradFrom: baseThemeVariables.success,
            innerAreaGradTo: baseThemeVariables.success,
        },
        visitorsLegend: {
            firstIcon: baseThemeVariables.success,
            secondIcon: baseThemeVariables.primary,
        },
        visitorsPie: {
            firstPieGradientLeft: baseThemeVariables.success,
            firstPieGradientRight: baseThemeVariables.success,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            firstPieRadius: ['65%', '90%'],
            secondPieGradientLeft: baseThemeVariables.warning,
            secondPieGradientRight: baseThemeVariables.warningLight,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieRadius: ['63%', '92%'],
            shadowOffsetX: '-4',
            shadowOffsetY: '-4',
        },
        visitorsPieLegend: {
            firstSection: baseThemeVariables.warning,
            secondSection: baseThemeVariables.success,
        },
        earningPie: {
            radius: ['65%', '100%'],
            center: ['50%', '50%'],
            fontSize: '22',
            firstPieGradientLeft: baseThemeVariables.success,
            firstPieGradientRight: baseThemeVariables.success,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieGradientLeft: baseThemeVariables.primary,
            secondPieGradientRight: baseThemeVariables.primary,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            thirdPieGradientLeft: baseThemeVariables.warning,
            thirdPieGradientRight: baseThemeVariables.warning,
            thirdPieShadowColor: 'rgba(0, 0, 0, 0)',
        },
        earningLine: {
            gradFrom: baseThemeVariables.primary,
            gradTo: baseThemeVariables.primary,
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        },
    },
};


/***/ }),

/***/ "./src/app/@theme/styles/theme.cosmic.ts":
/*!***********************************************!*\
  !*** ./src/app/@theme/styles/theme.cosmic.ts ***!
  \***********************************************/
/*! exports provided: COSMIC_THEME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COSMIC_THEME", function() { return COSMIC_THEME; });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm5/index.js");

var baseThemeVariables = _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["COSMIC_THEME"].variables;
var COSMIC_THEME = {
    name: 'cosmic',
    base: 'cosmic',
    variables: {
        temperature: {
            arcFill: ['#2ec7fe', '#31ffad', '#7bff24', '#fff024', '#f7bd59'],
            arcEmpty: baseThemeVariables.bg2,
            thumbBg: '#ffffff',
            thumbBorder: '#ffffff',
        },
        solar: {
            gradientLeft: baseThemeVariables.primary,
            gradientRight: baseThemeVariables.primary,
            shadowColor: 'rgba(0, 0, 0, 0)',
            secondSeriesFill: baseThemeVariables.bg2,
            radius: ['70%', '90%'],
        },
        traffic: {
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(50, 50, 89); border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            yAxisSplitLine: baseThemeVariables.separator,
            lineBg: baseThemeVariables.border2,
            lineShadowBlur: '14',
            itemColor: baseThemeVariables.border2,
            itemBorderColor: baseThemeVariables.border2,
            itemEmphasisBorderColor: baseThemeVariables.primary,
            shadowLineDarkBg: baseThemeVariables.border3,
            shadowLineShadow: baseThemeVariables.border3,
            gradFrom: baseThemeVariables.bg,
            gradTo: baseThemeVariables.bg2,
        },
        electricity: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: baseThemeVariables.fgText,
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            axisLineColor: baseThemeVariables.border3,
            xAxisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.border2,
            lineStyle: 'dotted',
            lineWidth: '6',
            lineGradFrom: baseThemeVariables.success,
            lineGradTo: baseThemeVariables.warning,
            lineShadow: baseThemeVariables.bg4,
            areaGradFrom: baseThemeVariables.bg2,
            areaGradTo: baseThemeVariables.bg3,
            shadowLineDarkBg: baseThemeVariables.bg3,
        },
        bubbleMap: {
            titleColor: baseThemeVariables.fgText,
            areaColor: baseThemeVariables.bg4,
            areaHoverColor: baseThemeVariables.fgHighlight,
            areaBorderColor: baseThemeVariables.border5,
        },
        profitBarAnimationEchart: {
            textColor: baseThemeVariables.fgText,
            firstAnimationBarColor: baseThemeVariables.primary,
            secondAnimationBarColor: baseThemeVariables.success,
            splitLineStyleOpacity: '1',
            splitLineStyleWidth: '1',
            splitLineStyleColor: baseThemeVariables.border2,
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        },
        trafficBarEchart: {
            gradientFrom: baseThemeVariables.warningLight,
            gradientTo: baseThemeVariables.warning,
            shadow: baseThemeVariables.warningLight,
            shadowBlur: '5',
            axisTextColor: baseThemeVariables.fgText,
            axisFontSize: '12',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
        },
        countryOrders: {
            countryBorderColor: baseThemeVariables.border4,
            countryFillColor: baseThemeVariables.bg3,
            countryBorderWidth: '1',
            hoveredCountryBorderColor: baseThemeVariables.primary,
            hoveredCountryFillColor: baseThemeVariables.primaryLight,
            hoveredCountryBorderWidth: '1',
            chartAxisLineColor: baseThemeVariables.border4,
            chartAxisTextColor: baseThemeVariables.fg,
            chartAxisFontSize: '16',
            chartGradientTo: baseThemeVariables.primary,
            chartGradientFrom: baseThemeVariables.primaryLight,
            chartAxisSplitLine: baseThemeVariables.separator,
            chartShadowLineColor: baseThemeVariables.primaryLight,
            chartLineBottomShadowColor: baseThemeVariables.primary,
            chartInnerLineColor: baseThemeVariables.bg2,
        },
        echarts: {
            bg: baseThemeVariables.bg,
            textColor: baseThemeVariables.fgText,
            axisLineColor: baseThemeVariables.fgText,
            splitLineColor: baseThemeVariables.separator,
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: baseThemeVariables.primary,
            areaOpacity: '1',
        },
        chartjs: {
            axisLineColor: baseThemeVariables.separator,
            textColor: baseThemeVariables.fgText,
        },
        orders: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            // first line
            firstAreaGradFrom: baseThemeVariables.bg2,
            firstAreaGradTo: baseThemeVariables.bg2,
            firstShadowLineDarkBg: baseThemeVariables.bg2,
            // second line
            secondLineGradFrom: baseThemeVariables.primary,
            secondLineGradTo: baseThemeVariables.primary,
            secondAreaGradFrom: 'rgba(161, 110, 255, 0.8)',
            secondAreaGradTo: 'rgba(161, 110, 255, 0.5)',
            secondShadowLineDarkBg: baseThemeVariables.primary,
            // third line
            thirdLineGradFrom: baseThemeVariables.success,
            thirdLineGradTo: baseThemeVariables.successLight,
            thirdAreaGradFrom: 'rgba(0, 214, 143, 0.7)',
            thirdAreaGradTo: 'rgba(0, 214, 143, 0.4)',
            thirdShadowLineDarkBg: baseThemeVariables.success,
        },
        profit: {
            bg: baseThemeVariables.bg,
            textColor: baseThemeVariables.fgText,
            axisLineColor: baseThemeVariables.border4,
            splitLineColor: baseThemeVariables.separator,
            areaOpacity: '1',
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            // first bar
            firstLineGradFrom: baseThemeVariables.bg2,
            firstLineGradTo: baseThemeVariables.bg2,
            firstLineShadow: 'rgba(0, 0, 0, 0)',
            // second bar
            secondLineGradFrom: baseThemeVariables.primary,
            secondLineGradTo: baseThemeVariables.primary,
            secondLineShadow: 'rgba(0, 0, 0, 0)',
            // third bar
            thirdLineGradFrom: baseThemeVariables.success,
            thirdLineGradTo: baseThemeVariables.successLight,
            thirdLineShadow: 'rgba(0, 0, 0, 0)',
        },
        orderProfitLegend: {
            firstItem: baseThemeVariables.success,
            secondItem: baseThemeVariables.primary,
            thirdItem: baseThemeVariables.bg2,
        },
        visitors: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '1',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.primary,
            lineStyle: 'dotted',
            lineWidth: '6',
            lineGradFrom: '#ffffff',
            lineGradTo: '#ffffff',
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: baseThemeVariables.primary,
            areaGradTo: baseThemeVariables.primaryLight,
            innerLineStyle: 'solid',
            innerLineWidth: '1',
            innerAreaGradFrom: baseThemeVariables.success,
            innerAreaGradTo: baseThemeVariables.success,
        },
        visitorsLegend: {
            firstIcon: baseThemeVariables.success,
            secondIcon: baseThemeVariables.primary,
        },
        visitorsPie: {
            firstPieGradientLeft: baseThemeVariables.success,
            firstPieGradientRight: baseThemeVariables.successLight,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            firstPieRadius: ['70%', '90%'],
            secondPieGradientLeft: baseThemeVariables.warning,
            secondPieGradientRight: baseThemeVariables.warningLight,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieRadius: ['60%', '95%'],
            shadowOffsetX: '0',
            shadowOffsetY: '3',
        },
        visitorsPieLegend: {
            firstSection: baseThemeVariables.warning,
            secondSection: baseThemeVariables.success,
        },
        earningPie: {
            radius: ['65%', '100%'],
            center: ['50%', '50%'],
            fontSize: '22',
            firstPieGradientLeft: baseThemeVariables.success,
            firstPieGradientRight: baseThemeVariables.success,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieGradientLeft: baseThemeVariables.primary,
            secondPieGradientRight: baseThemeVariables.primary,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            thirdPieGradientLeft: baseThemeVariables.warning,
            thirdPieGradientRight: baseThemeVariables.warning,
            thirdPieShadowColor: 'rgba(0, 0, 0, 0)',
        },
        earningLine: {
            gradFrom: baseThemeVariables.primary,
            gradTo: baseThemeVariables.primary,
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        },
    },
};


/***/ }),

/***/ "./src/app/@theme/styles/theme.dark.ts":
/*!*********************************************!*\
  !*** ./src/app/@theme/styles/theme.dark.ts ***!
  \*********************************************/
/*! exports provided: DARK_THEME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DARK_THEME", function() { return DARK_THEME; });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm5/index.js");

var baseThemeVariables = _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["DARK_THEME"].variables;
var DARK_THEME = {
    name: 'dark',
    base: 'dark',
    variables: {
        temperature: {
            arcFill: [
                baseThemeVariables.primary,
                baseThemeVariables.primary,
                baseThemeVariables.primary,
                baseThemeVariables.primary,
                baseThemeVariables.primary,
            ],
            arcEmpty: baseThemeVariables.bg2,
            thumbBg: baseThemeVariables.bg2,
            thumbBorder: baseThemeVariables.primary,
        },
        solar: {
            gradientLeft: baseThemeVariables.primary,
            gradientRight: baseThemeVariables.primary,
            shadowColor: 'rgba(0, 0, 0, 0)',
            secondSeriesFill: baseThemeVariables.bg2,
            radius: ['80%', '90%'],
        },
        traffic: {
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            yAxisSplitLine: baseThemeVariables.separator,
            lineBg: baseThemeVariables.border4,
            lineShadowBlur: '1',
            itemColor: baseThemeVariables.border4,
            itemBorderColor: baseThemeVariables.border4,
            itemEmphasisBorderColor: baseThemeVariables.primary,
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            shadowLineShadow: 'rgba(0, 0, 0, 0)',
            gradFrom: baseThemeVariables.bg2,
            gradTo: baseThemeVariables.bg2,
        },
        electricity: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: baseThemeVariables.fgText,
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            axisLineColor: baseThemeVariables.border3,
            xAxisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            lineGradFrom: baseThemeVariables.primary,
            lineGradTo: baseThemeVariables.primary,
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: baseThemeVariables.bg2,
            areaGradTo: baseThemeVariables.bg2,
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
        },
        bubbleMap: {
            titleColor: baseThemeVariables.fgText,
            areaColor: baseThemeVariables.bg4,
            areaHoverColor: baseThemeVariables.fgHighlight,
            areaBorderColor: baseThemeVariables.border5,
        },
        profitBarAnimationEchart: {
            textColor: baseThemeVariables.fgText,
            firstAnimationBarColor: baseThemeVariables.primary,
            secondAnimationBarColor: baseThemeVariables.success,
            splitLineStyleOpacity: '1',
            splitLineStyleWidth: '1',
            splitLineStyleColor: baseThemeVariables.separator,
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        },
        trafficBarEchart: {
            gradientFrom: baseThemeVariables.warningLight,
            gradientTo: baseThemeVariables.warning,
            shadow: baseThemeVariables.warningLight,
            shadowBlur: '0',
            axisTextColor: baseThemeVariables.fgText,
            axisFontSize: '12',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
        },
        countryOrders: {
            countryBorderColor: baseThemeVariables.border4,
            countryFillColor: baseThemeVariables.bg3,
            countryBorderWidth: '1',
            hoveredCountryBorderColor: baseThemeVariables.primary,
            hoveredCountryFillColor: baseThemeVariables.primaryLight,
            hoveredCountryBorderWidth: '1',
            chartAxisLineColor: baseThemeVariables.border4,
            chartAxisTextColor: baseThemeVariables.fg,
            chartAxisFontSize: '16',
            chartGradientTo: baseThemeVariables.primary,
            chartGradientFrom: baseThemeVariables.primaryLight,
            chartAxisSplitLine: baseThemeVariables.separator,
            chartShadowLineColor: baseThemeVariables.primaryLight,
            chartLineBottomShadowColor: baseThemeVariables.primary,
            chartInnerLineColor: baseThemeVariables.bg2,
        },
        echarts: {
            bg: baseThemeVariables.bg,
            textColor: baseThemeVariables.fgText,
            axisLineColor: baseThemeVariables.fgText,
            splitLineColor: baseThemeVariables.separator,
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: baseThemeVariables.primary,
            areaOpacity: '0.7',
        },
        chartjs: {
            axisLineColor: baseThemeVariables.separator,
            textColor: baseThemeVariables.fgText,
        },
        orders: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            // first line
            firstAreaGradFrom: baseThemeVariables.bg3,
            firstAreaGradTo: baseThemeVariables.bg3,
            firstShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            // second line
            secondLineGradFrom: baseThemeVariables.primary,
            secondLineGradTo: baseThemeVariables.primary,
            secondAreaGradFrom: 'rgba(51, 102, 255, 0.2)',
            secondAreaGradTo: 'rgba(51, 102, 255, 0)',
            secondShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            // third line
            thirdLineGradFrom: baseThemeVariables.success,
            thirdLineGradTo: baseThemeVariables.successLight,
            thirdAreaGradFrom: 'rgba(0, 214, 143, 0.2)',
            thirdAreaGradTo: 'rgba(0, 214, 143, 0)',
            thirdShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
        },
        profit: {
            bg: baseThemeVariables.bg,
            textColor: baseThemeVariables.fgText,
            axisLineColor: baseThemeVariables.border4,
            splitLineColor: baseThemeVariables.separator,
            areaOpacity: '1',
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            // first bar
            firstLineGradFrom: baseThemeVariables.bg3,
            firstLineGradTo: baseThemeVariables.bg3,
            firstLineShadow: 'rgba(0, 0, 0, 0)',
            // second bar
            secondLineGradFrom: baseThemeVariables.primary,
            secondLineGradTo: baseThemeVariables.primary,
            secondLineShadow: 'rgba(0, 0, 0, 0)',
            // third bar
            thirdLineGradFrom: baseThemeVariables.success,
            thirdLineGradTo: baseThemeVariables.successLight,
            thirdLineShadow: 'rgba(0, 0, 0, 0)',
        },
        orderProfitLegend: {
            firstItem: baseThemeVariables.success,
            secondItem: baseThemeVariables.primary,
            thirdItem: baseThemeVariables.bg3,
        },
        visitors: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.primary,
            lineStyle: 'dotted',
            lineWidth: '6',
            lineGradFrom: '#ffffff',
            lineGradTo: '#ffffff',
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: baseThemeVariables.primary,
            areaGradTo: baseThemeVariables.primaryLight,
            innerLineStyle: 'solid',
            innerLineWidth: '1',
            innerAreaGradFrom: baseThemeVariables.success,
            innerAreaGradTo: baseThemeVariables.success,
        },
        visitorsLegend: {
            firstIcon: baseThemeVariables.success,
            secondIcon: baseThemeVariables.primary,
        },
        visitorsPie: {
            firstPieGradientLeft: baseThemeVariables.success,
            firstPieGradientRight: baseThemeVariables.success,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            firstPieRadius: ['70%', '90%'],
            secondPieGradientLeft: baseThemeVariables.warning,
            secondPieGradientRight: baseThemeVariables.warningLight,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieRadius: ['60%', '97%'],
            shadowOffsetX: '0',
            shadowOffsetY: '0',
        },
        visitorsPieLegend: {
            firstSection: baseThemeVariables.warning,
            secondSection: baseThemeVariables.success,
        },
        earningPie: {
            radius: ['65%', '100%'],
            center: ['50%', '50%'],
            fontSize: '22',
            firstPieGradientLeft: baseThemeVariables.success,
            firstPieGradientRight: baseThemeVariables.success,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieGradientLeft: baseThemeVariables.primary,
            secondPieGradientRight: baseThemeVariables.primary,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            thirdPieGradientLeft: baseThemeVariables.warning,
            thirdPieGradientRight: baseThemeVariables.warning,
            thirdPieShadowColor: 'rgba(0, 0, 0, 0)',
        },
        earningLine: {
            gradFrom: baseThemeVariables.primary,
            gradTo: baseThemeVariables.primary,
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        },
    },
};


/***/ }),

/***/ "./src/app/@theme/styles/theme.default.ts":
/*!************************************************!*\
  !*** ./src/app/@theme/styles/theme.default.ts ***!
  \************************************************/
/*! exports provided: DEFAULT_THEME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_THEME", function() { return DEFAULT_THEME; });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm5/index.js");

var baseThemeVariables = _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_THEME"].variables;
var DEFAULT_THEME = {
    name: 'default',
    base: 'default',
    variables: {
        temperature: {
            arcFill: [
                baseThemeVariables.primary,
                baseThemeVariables.primary,
                baseThemeVariables.primary,
                baseThemeVariables.primary,
                baseThemeVariables.primary,
            ],
            arcEmpty: baseThemeVariables.bg2,
            thumbBg: baseThemeVariables.bg2,
            thumbBorder: baseThemeVariables.primary,
        },
        solar: {
            gradientLeft: baseThemeVariables.primary,
            gradientRight: baseThemeVariables.primary,
            shadowColor: 'rgba(0, 0, 0, 0)',
            secondSeriesFill: baseThemeVariables.bg2,
            radius: ['80%', '90%'],
        },
        traffic: {
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            yAxisSplitLine: baseThemeVariables.separator,
            lineBg: baseThemeVariables.border4,
            lineShadowBlur: '1',
            itemColor: baseThemeVariables.border4,
            itemBorderColor: baseThemeVariables.border4,
            itemEmphasisBorderColor: baseThemeVariables.primary,
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            shadowLineShadow: 'rgba(0, 0, 0, 0)',
            gradFrom: baseThemeVariables.bg2,
            gradTo: baseThemeVariables.bg2,
        },
        electricity: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: baseThemeVariables.fgText,
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            axisLineColor: baseThemeVariables.border3,
            xAxisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            lineGradFrom: baseThemeVariables.primary,
            lineGradTo: baseThemeVariables.primary,
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: baseThemeVariables.bg2,
            areaGradTo: baseThemeVariables.bg2,
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
        },
        bubbleMap: {
            titleColor: baseThemeVariables.fgText,
            areaColor: baseThemeVariables.bg4,
            areaHoverColor: baseThemeVariables.fgHighlight,
            areaBorderColor: baseThemeVariables.border5,
        },
        profitBarAnimationEchart: {
            textColor: baseThemeVariables.fgText,
            firstAnimationBarColor: baseThemeVariables.primary,
            secondAnimationBarColor: baseThemeVariables.success,
            splitLineStyleOpacity: '1',
            splitLineStyleWidth: '1',
            splitLineStyleColor: baseThemeVariables.separator,
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        },
        trafficBarEchart: {
            gradientFrom: baseThemeVariables.warningLight,
            gradientTo: baseThemeVariables.warning,
            shadow: baseThemeVariables.warningLight,
            shadowBlur: '0',
            axisTextColor: baseThemeVariables.fgText,
            axisFontSize: '12',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
        },
        countryOrders: {
            countryBorderColor: baseThemeVariables.border4,
            countryFillColor: baseThemeVariables.bg3,
            countryBorderWidth: '1',
            hoveredCountryBorderColor: baseThemeVariables.primary,
            hoveredCountryFillColor: baseThemeVariables.primaryLight,
            hoveredCountryBorderWidth: '1',
            chartAxisLineColor: baseThemeVariables.border4,
            chartAxisTextColor: baseThemeVariables.fg,
            chartAxisFontSize: '16',
            chartGradientTo: baseThemeVariables.primary,
            chartGradientFrom: baseThemeVariables.primaryLight,
            chartAxisSplitLine: baseThemeVariables.separator,
            chartShadowLineColor: baseThemeVariables.primaryLight,
            chartLineBottomShadowColor: baseThemeVariables.primary,
            chartInnerLineColor: baseThemeVariables.bg2,
        },
        echarts: {
            bg: baseThemeVariables.bg,
            textColor: baseThemeVariables.fgText,
            axisLineColor: baseThemeVariables.fgText,
            splitLineColor: baseThemeVariables.separator,
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: baseThemeVariables.primary,
            areaOpacity: '0.7',
        },
        chartjs: {
            axisLineColor: baseThemeVariables.separator,
            textColor: baseThemeVariables.fgText,
        },
        orders: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            // first line
            firstAreaGradFrom: baseThemeVariables.bg3,
            firstAreaGradTo: baseThemeVariables.bg3,
            firstShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            // second line
            secondLineGradFrom: baseThemeVariables.primary,
            secondLineGradTo: baseThemeVariables.primary,
            secondAreaGradFrom: 'rgba(51, 102, 255, 0.2)',
            secondAreaGradTo: 'rgba(51, 102, 255, 0)',
            secondShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            // third line
            thirdLineGradFrom: baseThemeVariables.success,
            thirdLineGradTo: baseThemeVariables.successLight,
            thirdAreaGradFrom: 'rgba(0, 214, 143, 0.2)',
            thirdAreaGradTo: 'rgba(0, 214, 143, 0)',
            thirdShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
        },
        profit: {
            bg: baseThemeVariables.bg,
            textColor: baseThemeVariables.fgText,
            axisLineColor: baseThemeVariables.border4,
            splitLineColor: baseThemeVariables.separator,
            areaOpacity: '1',
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            // first bar
            firstLineGradFrom: baseThemeVariables.bg3,
            firstLineGradTo: baseThemeVariables.bg3,
            firstLineShadow: 'rgba(0, 0, 0, 0)',
            // second bar
            secondLineGradFrom: baseThemeVariables.primary,
            secondLineGradTo: baseThemeVariables.primary,
            secondLineShadow: 'rgba(0, 0, 0, 0)',
            // third bar
            thirdLineGradFrom: baseThemeVariables.success,
            thirdLineGradTo: baseThemeVariables.successLight,
            thirdLineShadow: 'rgba(0, 0, 0, 0)',
        },
        orderProfitLegend: {
            firstItem: baseThemeVariables.success,
            secondItem: baseThemeVariables.primary,
            thirdItem: baseThemeVariables.bg3,
        },
        visitors: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '1',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.primary,
            lineStyle: 'dotted',
            lineWidth: '6',
            lineGradFrom: '#ffffff',
            lineGradTo: '#ffffff',
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: baseThemeVariables.primary,
            areaGradTo: baseThemeVariables.primaryLight,
            innerLineStyle: 'solid',
            innerLineWidth: '1',
            innerAreaGradFrom: baseThemeVariables.success,
            innerAreaGradTo: baseThemeVariables.success,
        },
        visitorsLegend: {
            firstIcon: baseThemeVariables.success,
            secondIcon: baseThemeVariables.primary,
        },
        visitorsPie: {
            firstPieGradientLeft: baseThemeVariables.success,
            firstPieGradientRight: baseThemeVariables.success,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            firstPieRadius: ['70%', '90%'],
            secondPieGradientLeft: baseThemeVariables.warning,
            secondPieGradientRight: baseThemeVariables.warningLight,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieRadius: ['60%', '97%'],
            shadowOffsetX: '0',
            shadowOffsetY: '0',
        },
        visitorsPieLegend: {
            firstSection: baseThemeVariables.warning,
            secondSection: baseThemeVariables.success,
        },
        earningPie: {
            radius: ['65%', '100%'],
            center: ['50%', '50%'],
            fontSize: '22',
            firstPieGradientLeft: baseThemeVariables.success,
            firstPieGradientRight: baseThemeVariables.success,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieGradientLeft: baseThemeVariables.primary,
            secondPieGradientRight: baseThemeVariables.primary,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            thirdPieGradientLeft: baseThemeVariables.warning,
            thirdPieGradientRight: baseThemeVariables.warning,
            thirdPieShadowColor: 'rgba(0, 0, 0, 0)',
        },
        earningLine: {
            gradFrom: baseThemeVariables.primary,
            gradTo: baseThemeVariables.primary,
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        },
    },
};


/***/ }),

/***/ "./src/app/@theme/theme.module.ts":
/*!****************************************!*\
  !*** ./src/app/@theme/theme.module.ts ***!
  \****************************************/
/*! exports provided: ThemeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeModule", function() { return ThemeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm5/index.js");
/* harmony import */ var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/eva-icons */ "./node_modules/@nebular/eva-icons/fesm5/index.js");
/* harmony import */ var _nebular_security__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/security */ "./node_modules/@nebular/security/fesm5/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components */ "./src/app/@theme/components/index.ts");
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes */ "./src/app/@theme/pipes/index.ts");
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts */ "./src/app/@theme/layouts/index.ts");
/* harmony import */ var _styles_theme_default__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/theme.default */ "./src/app/@theme/styles/theme.default.ts");
/* harmony import */ var _styles_theme_cosmic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/theme.cosmic */ "./src/app/@theme/styles/theme.cosmic.ts");
/* harmony import */ var _styles_theme_corporate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/theme.corporate */ "./src/app/@theme/styles/theme.corporate.ts");
/* harmony import */ var _styles_theme_dark__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/theme.dark */ "./src/app/@theme/styles/theme.dark.ts");











var NB_MODULES = [
    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbMenuModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbUserModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbActionsModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSearchModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSidebarModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbContextMenuModule"],
    _nebular_security__WEBPACK_IMPORTED_MODULE_3__["NbSecurityModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSelectModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconModule"],
    _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_2__["NbEvaIconsModule"],
];
var COMPONENTS = [
    _components__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
    _components__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
    _components__WEBPACK_IMPORTED_MODULE_4__["SearchInputComponent"],
    _components__WEBPACK_IMPORTED_MODULE_4__["TinyMCEComponent"],
    _layouts__WEBPACK_IMPORTED_MODULE_6__["OneColumnLayoutComponent"],
    _layouts__WEBPACK_IMPORTED_MODULE_6__["ThreeColumnsLayoutComponent"],
    _layouts__WEBPACK_IMPORTED_MODULE_6__["TwoColumnsLayoutComponent"],
    _layouts__WEBPACK_IMPORTED_MODULE_6__["RegisterLayoutComponent"],
];
var PIPES = [
    _pipes__WEBPACK_IMPORTED_MODULE_5__["CapitalizePipe"],
    _pipes__WEBPACK_IMPORTED_MODULE_5__["PluralPipe"],
    _pipes__WEBPACK_IMPORTED_MODULE_5__["RoundPipe"],
    _pipes__WEBPACK_IMPORTED_MODULE_5__["TimingPipe"],
    _pipes__WEBPACK_IMPORTED_MODULE_5__["NumberWithCommasPipe"],
];
var ThemeModule = /** @class */ (function () {
    function ThemeModule() {
    }
    ThemeModule.forRoot = function () {
        return {
            ngModule: ThemeModule,
            providers: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeModule"].forRoot({
                name: 'default',
            }, [_styles_theme_default__WEBPACK_IMPORTED_MODULE_7__["DEFAULT_THEME"], _styles_theme_cosmic__WEBPACK_IMPORTED_MODULE_8__["COSMIC_THEME"], _styles_theme_corporate__WEBPACK_IMPORTED_MODULE_9__["CORPORATE_THEME"], _styles_theme_dark__WEBPACK_IMPORTED_MODULE_10__["DARK_THEME"]], null, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutDirection"].RTL).providers.slice(),
        };
    };
    return ThemeModule;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, ɵ0, ɵ1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ1", function() { return ɵ1; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

var ɵ0 = function () { return Promise.all(/*! import() | pages-pages-module-ngfactory */[__webpack_require__.e("common"), __webpack_require__.e("pages-pages-module-ngfactory")]).then(__webpack_require__.bind(null, /*! ./pages/pages.module.ngfactory */ "./src/app/pages/pages.module.ngfactory.js"))
    .then(function (m) { return m.PagesModuleNgFactory; }); }, ɵ1 = function () { return Promise.all(/*! import() | register-register-module-ngfactory */[__webpack_require__.e("common"), __webpack_require__.e("register-register-module-ngfactory")]).then(__webpack_require__.bind(null, /*! ./register/register.module.ngfactory */ "./src/app/register/register.module.ngfactory.js"))
    .then(function (m) { return m.RegisterModuleNgFactory; }); };
var routes = [
    {
        path: 'pages',
        loadChildren: ɵ0,
    },
    {
        path: 'register',
        loadChildren: ɵ1,
    },
    { path: '', redirectTo: 'register', pathMatch: 'full' },
];
var config = {
    useHash: false,
};
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());




/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function() { return RenderType_AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function() { return View_AppComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function() { return View_AppComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function() { return AppComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_AppComponent = [];
var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_AppComponent, data: {} });

function View_AppComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_AppComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ngx-app", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ngx-app", _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);



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
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ngfactory.js":
/*!*****************************************!*\
  !*** ./src/app/app.module.ngfactory.js ***!
  \*****************************************/
/*! exports provided: AppModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function() { return AppModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/@nebular/theme/index.ngfactory */ "./node_modules/@nebular/theme/index.ngfactory.js");
/* harmony import */ var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations/browser */ "./node_modules/@angular/animations/fesm5/browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm5/index.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _nebular_security__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @nebular/security */ "./node_modules/@nebular/security/fesm5/index.js");
/* harmony import */ var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @nebular/eva-icons */ "./node_modules/@nebular/eva-icons/fesm5/index.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 

























var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_lNgFactory"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["NbSearchFieldComponentNgFactory"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["NbContextMenuComponentNgFactory"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["NbCalendarDayCellComponentNgFactory"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["NbCalendarMonthCellComponentNgFactory"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["NbCalendarYearCellComponentNgFactory"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["NbCalendarRangeDayCellComponentNgFactory"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["NbCalendarRangeYearCellComponentNgFactory"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["NbCalendarComponentNgFactory"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["NbCalendarRangeComponentNgFactory"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["NbDatepickerContainerComponentNgFactory"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["NbDialogContainerComponentNgFactory"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["NbWindowsContainerComponentNgFactory"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["NbWindowComponentNgFactory"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["NbToastrContainerComponentNgFactory"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["NbToastComponentNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_p"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_ba"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_f"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) { return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_8__["AnimationDriver"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_platform_browser_animations_animations_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_8__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_8__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ɵInjectableAnimationEngine"], [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_8__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_8__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_platform_browser_animations_animations_c"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_8__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_10__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"], function (p0_0) { return [p0_0]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_12__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_12__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_12__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_12__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_o"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0) { return [p0_0]; }, [_angular_router__WEBPACK_IMPORTED_MODULE_12__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbRestoreScrollTopHelper"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbRestoreScrollTopHelper"], [_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbLayoutScrollService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbLayoutScrollService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbPlatform"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbPlatform"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__["ScrollDispatcher"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbScrollDispatcherAdapter"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbPlatform"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbLayoutScrollService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbLayoutRulerService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbLayoutRulerService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbViewportRulerAdapter"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbViewportRulerAdapter"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbPlatform"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbLayoutRulerService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbLayoutScrollService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NB_DOCUMENT"], null, [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__["ScrollStrategyOptions"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["ɵb"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbLayoutScrollService"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__["ScrollDispatcher"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbViewportRulerAdapter"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NB_DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbOverlayContainerAdapter"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbOverlayContainerAdapter"], [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__["OverlayContainer"], null, [_nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbOverlayContainerAdapter"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__["ɵc"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__["ɵd"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbSearchService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbSearchService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbDateService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbNativeDateService"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbCalendarMonthModelService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbCalendarMonthModelService"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbDateService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NB_WINDOW"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["nbWindowFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbJSThemesRegistry"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbJSThemesRegistry"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NB_BUILT_IN_JS_THEMES"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NB_JS_THEMES"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbMediaBreakpointsService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbMediaBreakpointsService"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NB_MEDIA_BREAKPOINTS"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbThemeService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbThemeService"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NB_THEME_OPTIONS"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbMediaBreakpointsService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbJSThemesRegistry"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbSpinnerService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbSpinnerService"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NB_DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbLayoutDirectionService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbLayoutDirectionService"], [[2, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NB_LAYOUT_DIRECTION"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbOverlayPositionBuilder"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbOverlayPositionBuilder"], [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__["ViewportRuler"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_18__["Platform"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbPositionBuilderService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbPositionBuilderService"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NB_DOCUMENT"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbViewportRulerAdapter"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbPlatform"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbOverlayPositionBuilder"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbOverlayContainerAdapter"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbTriggerStrategyBuilderService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbTriggerStrategyBuilderService"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NB_DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbOverlay"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbOverlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbOverlayService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbOverlayService"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbOverlay"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbLayoutDirectionService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbPositionHelper"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbPositionHelper"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbLayoutDirectionService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbBlockScrollStrategyAdapter"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbBlockScrollStrategyAdapter"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NB_DOCUMENT"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbViewportRulerAdapter"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbLayoutScrollService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbOverlayContainer"], null, [_nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbOverlayContainerAdapter"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbFocusTrapFactoryService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbFocusTrapFactoryService"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_19__["InteractivityChecker"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NB_DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["ɵd"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["ɵd"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbSidebarService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbSidebarService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbMenuService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbMenuService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["ɵa"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["ɵa"], [_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NB_DATE_ADAPTER"], function (p0_0, p1_0) { return [new _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbDateAdapterService"](p0_0), new _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbRangeAdapterService"](p1_0)]; }, [_nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbDateService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbDateService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbDialogService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbDialogService"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NB_DOCUMENT"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NB_DIALOG_CONFIG"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbPositionBuilderService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbOverlayService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbWindowService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbWindowService"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbOverlayService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbOverlayPositionBuilder"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbBlockScrollStrategyAdapter"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NB_WINDOW_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NB_DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbToastrContainerRegistry"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbToastrContainerRegistry"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbOverlayService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbPositionBuilderService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbPositionHelper"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NB_DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbToastrService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbToastrService"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NB_TOASTR_CONFIG"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbToastrContainerRegistry"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () { return [_angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_b"]()]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0) { return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_platform_browser_platform_browser_j"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_i"](p1_0)]; }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_12__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ROUTER_CONFIGURATION"], { useHash: false }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_6__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_6__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["PlatformLocation"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ROUTES"], function () { return [[{ path: "pages", loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_20__["ɵ0"] }, { path: "register", loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_20__["ɵ1"] }, { path: "", redirectTo: "register", pathMatch: "full" }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_f"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_12__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_20__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_20__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["ɵc"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["ɵc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbLayoutModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbLayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbIconModule"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbIconLibraries"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbMenuModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbMenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbBadgeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbBadgeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbUserModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbUserModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbActionsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbActionsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_21__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_21__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_18__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_18__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbCdkMappingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbCdkMappingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbCdkAdapterModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbCdkAdapterModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbOverlayModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbOverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbSearchModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbSearchModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbSidebarModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbSidebarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbContextMenuModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbContextMenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_security__WEBPACK_IMPORTED_MODULE_22__["NbSecurityModule"], _nebular_security__WEBPACK_IMPORTED_MODULE_22__["NbSecurityModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbCheckboxModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_23__["NbEvaIconsModule"], _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_23__["NbEvaIconsModule"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbIconLibraries"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _theme_theme_module__WEBPACK_IMPORTED_MODULE_24__["ThemeModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_24__["ThemeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbCalendarKitModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbCalendarKitModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbBaseCalendarModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbBaseCalendarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbCalendarModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbCalendarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbCalendarRangeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbCalendarRangeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbDatepickerModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbDialogModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbWindowModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbWindowModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbToastrModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbToastrModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbChatModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbChatModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵAPP_ROOT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"], "BrowserAnimations", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NB_THEME_OPTIONS"], { name: "default" }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NB_BUILT_IN_JS_THEMES"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["BUILT_IN_THEMES"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NB_JS_THEMES"], [{ name: "default", base: "default", variables: { temperature: { arcFill: ["#3366ff", "#3366ff", "#3366ff", "#3366ff", "#3366ff"], arcEmpty: "#f7f9fc", thumbBg: "#f7f9fc", thumbBorder: "#3366ff" }, solar: { gradientLeft: "#3366ff", gradientRight: "#3366ff", shadowColor: "rgba(0, 0, 0, 0)", secondSeriesFill: "#f7f9fc", radius: ["80%", "90%"] }, traffic: { tooltipBg: "#ffffff", tooltipBorderColor: "#f7f9fc", tooltipExtraCss: "border-radius: 10px; padding: 4px 16px;", tooltipTextColor: "#1a2138", tooltipFontWeight: "normal", yAxisSplitLine: "#edf1f7", lineBg: "#e4e9f2", lineShadowBlur: "1", itemColor: "#e4e9f2", itemBorderColor: "#e4e9f2", itemEmphasisBorderColor: "#3366ff", shadowLineDarkBg: "rgba(0, 0, 0, 0)", shadowLineShadow: "rgba(0, 0, 0, 0)", gradFrom: "#f7f9fc", gradTo: "#f7f9fc" }, electricity: { tooltipBg: "#ffffff", tooltipLineColor: "#1a2138", tooltipLineWidth: "0", tooltipBorderColor: "#f7f9fc", tooltipExtraCss: "border-radius: 10px; padding: 8px 24px;", tooltipTextColor: "#1a2138", tooltipFontWeight: "normal", axisLineColor: "#edf1f7", xAxisTextColor: "#8f9bb3", yAxisSplitLine: "#edf1f7", itemBorderColor: "#3366ff", lineStyle: "solid", lineWidth: "4", lineGradFrom: "#3366ff", lineGradTo: "#3366ff", lineShadow: "rgba(0, 0, 0, 0)", areaGradFrom: "#f7f9fc", areaGradTo: "#f7f9fc", shadowLineDarkBg: "rgba(0, 0, 0, 0)" }, bubbleMap: { titleColor: "#1a2138", areaColor: "#e4e9f2", areaHoverColor: "#3366ff", areaBorderColor: "#c5cee0" }, profitBarAnimationEchart: { textColor: "#1a2138", firstAnimationBarColor: "#3366ff", secondAnimationBarColor: "#00d68f", splitLineStyleOpacity: "1", splitLineStyleWidth: "1", splitLineStyleColor: "#edf1f7", tooltipTextColor: "#1a2138", tooltipFontWeight: "normal", tooltipFontSize: "16", tooltipBg: "#ffffff", tooltipBorderColor: "#f7f9fc", tooltipBorderWidth: "1", tooltipExtraCss: "border-radius: 10px; padding: 4px 16px;" }, trafficBarEchart: { gradientFrom: "#ffc94d", gradientTo: "#ffaa00", shadow: "#ffc94d", shadowBlur: "0", axisTextColor: "#1a2138", axisFontSize: "12", tooltipBg: "#ffffff", tooltipBorderColor: "#f7f9fc", tooltipExtraCss: "border-radius: 10px; padding: 4px 16px;", tooltipTextColor: "#1a2138", tooltipFontWeight: "normal" }, countryOrders: { countryBorderColor: "#e4e9f2", countryFillColor: "#edf1f7", countryBorderWidth: "1", hoveredCountryBorderColor: "#3366ff", hoveredCountryFillColor: "#598bff", hoveredCountryBorderWidth: "1", chartAxisLineColor: "#e4e9f2", chartAxisTextColor: "#8f9bb3", chartAxisFontSize: "16", chartGradientTo: "#3366ff", chartGradientFrom: "#598bff", chartAxisSplitLine: "#edf1f7", chartShadowLineColor: "#598bff", chartLineBottomShadowColor: "#3366ff", chartInnerLineColor: "#f7f9fc" }, echarts: { bg: "#ffffff", textColor: "#1a2138", axisLineColor: "#1a2138", splitLineColor: "#edf1f7", itemHoverShadowColor: "rgba(0, 0, 0, 0.5)", tooltipBackgroundColor: "#3366ff", areaOpacity: "0.7" }, chartjs: { axisLineColor: "#edf1f7", textColor: "#1a2138" }, orders: { tooltipBg: "#ffffff", tooltipLineColor: "rgba(0, 0, 0, 0)", tooltipLineWidth: "0", tooltipBorderColor: "#f7f9fc", tooltipExtraCss: "border-radius: 10px; padding: 8px 24px;", tooltipTextColor: "#1a2138", tooltipFontWeight: "normal", tooltipFontSize: "20", axisLineColor: "#e4e9f2", axisFontSize: "16", axisTextColor: "#8f9bb3", yAxisSplitLine: "#edf1f7", itemBorderColor: "#3366ff", lineStyle: "solid", lineWidth: "4", firstAreaGradFrom: "#edf1f7", firstAreaGradTo: "#edf1f7", firstShadowLineDarkBg: "rgba(0, 0, 0, 0)", secondLineGradFrom: "#3366ff", secondLineGradTo: "#3366ff", secondAreaGradFrom: "rgba(51, 102, 255, 0.2)", secondAreaGradTo: "rgba(51, 102, 255, 0)", secondShadowLineDarkBg: "rgba(0, 0, 0, 0)", thirdLineGradFrom: "#00d68f", thirdLineGradTo: "#2ce69b", thirdAreaGradFrom: "rgba(0, 214, 143, 0.2)", thirdAreaGradTo: "rgba(0, 214, 143, 0)", thirdShadowLineDarkBg: "rgba(0, 0, 0, 0)" }, profit: { bg: "#ffffff", textColor: "#1a2138", axisLineColor: "#e4e9f2", splitLineColor: "#edf1f7", areaOpacity: "1", axisFontSize: "16", axisTextColor: "#8f9bb3", firstLineGradFrom: "#edf1f7", firstLineGradTo: "#edf1f7", firstLineShadow: "rgba(0, 0, 0, 0)", secondLineGradFrom: "#3366ff", secondLineGradTo: "#3366ff", secondLineShadow: "rgba(0, 0, 0, 0)", thirdLineGradFrom: "#00d68f", thirdLineGradTo: "#2ce69b", thirdLineShadow: "rgba(0, 0, 0, 0)" }, orderProfitLegend: { firstItem: "#00d68f", secondItem: "#3366ff", thirdItem: "#edf1f7" }, visitors: { tooltipBg: "#ffffff", tooltipLineColor: "rgba(0, 0, 0, 0)", tooltipLineWidth: "1", tooltipBorderColor: "#f7f9fc", tooltipExtraCss: "border-radius: 10px; padding: 8px 24px;", tooltipTextColor: "#1a2138", tooltipFontWeight: "normal", tooltipFontSize: "20", axisLineColor: "#e4e9f2", axisFontSize: "16", axisTextColor: "#8f9bb3", yAxisSplitLine: "#edf1f7", itemBorderColor: "#3366ff", lineStyle: "dotted", lineWidth: "6", lineGradFrom: "#ffffff", lineGradTo: "#ffffff", lineShadow: "rgba(0, 0, 0, 0)", areaGradFrom: "#3366ff", areaGradTo: "#598bff", innerLineStyle: "solid", innerLineWidth: "1", innerAreaGradFrom: "#00d68f", innerAreaGradTo: "#00d68f" }, visitorsLegend: { firstIcon: "#00d68f", secondIcon: "#3366ff" }, visitorsPie: { firstPieGradientLeft: "#00d68f", firstPieGradientRight: "#00d68f", firstPieShadowColor: "rgba(0, 0, 0, 0)", firstPieRadius: ["70%", "90%"], secondPieGradientLeft: "#ffaa00", secondPieGradientRight: "#ffc94d", secondPieShadowColor: "rgba(0, 0, 0, 0)", secondPieRadius: ["60%", "97%"], shadowOffsetX: "0", shadowOffsetY: "0" }, visitorsPieLegend: { firstSection: "#ffaa00", secondSection: "#00d68f" }, earningPie: { radius: ["65%", "100%"], center: ["50%", "50%"], fontSize: "22", firstPieGradientLeft: "#00d68f", firstPieGradientRight: "#00d68f", firstPieShadowColor: "rgba(0, 0, 0, 0)", secondPieGradientLeft: "#3366ff", secondPieGradientRight: "#3366ff", secondPieShadowColor: "rgba(0, 0, 0, 0)", thirdPieGradientLeft: "#ffaa00", thirdPieGradientRight: "#ffaa00", thirdPieShadowColor: "rgba(0, 0, 0, 0)" }, earningLine: { gradFrom: "#3366ff", gradTo: "#3366ff", tooltipTextColor: "#1a2138", tooltipFontWeight: "normal", tooltipFontSize: "16", tooltipBg: "#ffffff", tooltipBorderColor: "#f7f9fc", tooltipBorderWidth: "1", tooltipExtraCss: "border-radius: 10px; padding: 4px 16px;" } } }, { name: "cosmic", base: "cosmic", variables: { temperature: { arcFill: ["#2ec7fe", "#31ffad", "#7bff24", "#fff024", "#f7bd59"], arcEmpty: "#252547", thumbBg: "#ffffff", thumbBorder: "#ffffff" }, solar: { gradientLeft: "#a16eff", gradientRight: "#a16eff", shadowColor: "rgba(0, 0, 0, 0)", secondSeriesFill: "#252547", radius: ["70%", "90%"] }, traffic: { tooltipBg: "#323259", tooltipBorderColor: "#252547", tooltipExtraCss: "box-shadow: 0px 2px 46px 0 rgba(50, 50, 89); border-radius: 10px; padding: 4px 16px;", tooltipTextColor: "#ffffff", tooltipFontWeight: "normal", yAxisSplitLine: "#151a30", lineBg: "#252547", lineShadowBlur: "14", itemColor: "#252547", itemBorderColor: "#252547", itemEmphasisBorderColor: "#a16eff", shadowLineDarkBg: "#1b1b38", shadowLineShadow: "#1b1b38", gradFrom: "#323259", gradTo: "#252547" }, electricity: { tooltipBg: "#323259", tooltipLineColor: "#ffffff", tooltipLineWidth: "0", tooltipBorderColor: "#252547", tooltipExtraCss: "box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 8px 24px;", tooltipTextColor: "#ffffff", tooltipFontWeight: "normal", axisLineColor: "#1b1b38", xAxisTextColor: "#b4b4db", yAxisSplitLine: "#151a30", itemBorderColor: "#252547", lineStyle: "dotted", lineWidth: "6", lineGradFrom: "#00d68f", lineGradTo: "#ffaa00", lineShadow: "#13132b", areaGradFrom: "#252547", areaGradTo: "#1b1b38", shadowLineDarkBg: "#1b1b38" }, bubbleMap: { titleColor: "#ffffff", areaColor: "#13132b", areaHoverColor: "#a16eff", areaBorderColor: "#13132b" }, profitBarAnimationEchart: { textColor: "#ffffff", firstAnimationBarColor: "#a16eff", secondAnimationBarColor: "#00d68f", splitLineStyleOpacity: "1", splitLineStyleWidth: "1", splitLineStyleColor: "#252547", tooltipTextColor: "#ffffff", tooltipFontWeight: "normal", tooltipFontSize: "16", tooltipBg: "#323259", tooltipBorderColor: "#252547", tooltipBorderWidth: "1", tooltipExtraCss: "border-radius: 10px; padding: 4px 16px;" }, trafficBarEchart: { gradientFrom: "#ffc94d", gradientTo: "#ffaa00", shadow: "#ffc94d", shadowBlur: "5", axisTextColor: "#ffffff", axisFontSize: "12", tooltipBg: "#323259", tooltipBorderColor: "#252547", tooltipExtraCss: "border-radius: 10px; padding: 4px 16px;", tooltipTextColor: "#ffffff", tooltipFontWeight: "normal" }, countryOrders: { countryBorderColor: "#13132b", countryFillColor: "#1b1b38", countryBorderWidth: "1", hoveredCountryBorderColor: "#a16eff", hoveredCountryFillColor: "#b18aff", hoveredCountryBorderWidth: "1", chartAxisLineColor: "#13132b", chartAxisTextColor: "#b4b4db", chartAxisFontSize: "16", chartGradientTo: "#a16eff", chartGradientFrom: "#b18aff", chartAxisSplitLine: "#151a30", chartShadowLineColor: "#b18aff", chartLineBottomShadowColor: "#a16eff", chartInnerLineColor: "#252547" }, echarts: { bg: "#323259", textColor: "#ffffff", axisLineColor: "#ffffff", splitLineColor: "#151a30", itemHoverShadowColor: "rgba(0, 0, 0, 0.5)", tooltipBackgroundColor: "#a16eff", areaOpacity: "1" }, chartjs: { axisLineColor: "#151a30", textColor: "#ffffff" }, orders: { tooltipBg: "#323259", tooltipLineColor: "rgba(0, 0, 0, 0)", tooltipLineWidth: "0", tooltipBorderColor: "#252547", tooltipExtraCss: "border-radius: 10px; padding: 8px 24px;", tooltipTextColor: "#ffffff", tooltipFontWeight: "normal", tooltipFontSize: "20", axisLineColor: "#13132b", axisFontSize: "16", axisTextColor: "#b4b4db", yAxisSplitLine: "#151a30", itemBorderColor: "#a16eff", lineStyle: "solid", lineWidth: "4", firstAreaGradFrom: "#252547", firstAreaGradTo: "#252547", firstShadowLineDarkBg: "#252547", secondLineGradFrom: "#a16eff", secondLineGradTo: "#a16eff", secondAreaGradFrom: "rgba(161, 110, 255, 0.8)", secondAreaGradTo: "rgba(161, 110, 255, 0.5)", secondShadowLineDarkBg: "#a16eff", thirdLineGradFrom: "#00d68f", thirdLineGradTo: "#2ce69b", thirdAreaGradFrom: "rgba(0, 214, 143, 0.7)", thirdAreaGradTo: "rgba(0, 214, 143, 0.4)", thirdShadowLineDarkBg: "#00d68f" }, profit: { bg: "#323259", textColor: "#ffffff", axisLineColor: "#13132b", splitLineColor: "#151a30", areaOpacity: "1", axisFontSize: "16", axisTextColor: "#b4b4db", firstLineGradFrom: "#252547", firstLineGradTo: "#252547", firstLineShadow: "rgba(0, 0, 0, 0)", secondLineGradFrom: "#a16eff", secondLineGradTo: "#a16eff", secondLineShadow: "rgba(0, 0, 0, 0)", thirdLineGradFrom: "#00d68f", thirdLineGradTo: "#2ce69b", thirdLineShadow: "rgba(0, 0, 0, 0)" }, orderProfitLegend: { firstItem: "#00d68f", secondItem: "#a16eff", thirdItem: "#252547" }, visitors: { tooltipBg: "#323259", tooltipLineColor: "rgba(0, 0, 0, 0)", tooltipLineWidth: "1", tooltipBorderColor: "#252547", tooltipExtraCss: "border-radius: 10px; padding: 8px 24px;", tooltipTextColor: "#ffffff", tooltipFontWeight: "normal", tooltipFontSize: "20", axisLineColor: "#13132b", axisFontSize: "16", axisTextColor: "#b4b4db", yAxisSplitLine: "#151a30", itemBorderColor: "#a16eff", lineStyle: "dotted", lineWidth: "6", lineGradFrom: "#ffffff", lineGradTo: "#ffffff", lineShadow: "rgba(0, 0, 0, 0)", areaGradFrom: "#a16eff", areaGradTo: "#b18aff", innerLineStyle: "solid", innerLineWidth: "1", innerAreaGradFrom: "#00d68f", innerAreaGradTo: "#00d68f" }, visitorsLegend: { firstIcon: "#00d68f", secondIcon: "#a16eff" }, visitorsPie: { firstPieGradientLeft: "#00d68f", firstPieGradientRight: "#2ce69b", firstPieShadowColor: "rgba(0, 0, 0, 0)", firstPieRadius: ["70%", "90%"], secondPieGradientLeft: "#ffaa00", secondPieGradientRight: "#ffc94d", secondPieShadowColor: "rgba(0, 0, 0, 0)", secondPieRadius: ["60%", "95%"], shadowOffsetX: "0", shadowOffsetY: "3" }, visitorsPieLegend: { firstSection: "#ffaa00", secondSection: "#00d68f" }, earningPie: { radius: ["65%", "100%"], center: ["50%", "50%"], fontSize: "22", firstPieGradientLeft: "#00d68f", firstPieGradientRight: "#00d68f", firstPieShadowColor: "rgba(0, 0, 0, 0)", secondPieGradientLeft: "#a16eff", secondPieGradientRight: "#a16eff", secondPieShadowColor: "rgba(0, 0, 0, 0)", thirdPieGradientLeft: "#ffaa00", thirdPieGradientRight: "#ffaa00", thirdPieShadowColor: "rgba(0, 0, 0, 0)" }, earningLine: { gradFrom: "#a16eff", gradTo: "#a16eff", tooltipTextColor: "#ffffff", tooltipFontWeight: "normal", tooltipFontSize: "16", tooltipBg: "#323259", tooltipBorderColor: "#252547", tooltipBorderWidth: "1", tooltipExtraCss: "border-radius: 10px; padding: 4px 16px;" } } }, { name: "corporate", base: "corporate", variables: { temperature: { arcFill: ["#ffa36b", "#ffa36b", "#ff9e7a", "#ff9888", "#ff8ea0"], arcEmpty: "#f7f9fc", thumbBg: "#f7f9fc", thumbBorder: "#ffa36b" }, solar: { gradientLeft: "#73a1ff", gradientRight: "#73a1ff", shadowColor: "rgba(0, 0, 0, 0)", secondSeriesFill: "#f7f9fc", radius: ["80%", "90%"] }, traffic: { tooltipBg: "#ffffff", tooltipBorderColor: "#f7f9fc", tooltipExtraCss: "border-radius: 10px; padding: 4px 16px;", tooltipTextColor: "#1a2138", tooltipFontWeight: "normal", yAxisSplitLine: "rgba(0, 0, 0, 0)", lineBg: "#73a1ff", lineShadowBlur: "0", itemColor: "#e4e9f2", itemBorderColor: "#e4e9f2", itemEmphasisBorderColor: "#598bff", shadowLineDarkBg: "rgba(0, 0, 0, 0)", shadowLineShadow: "rgba(0, 0, 0, 0)", gradFrom: "#ffffff", gradTo: "#ffffff" }, electricity: { tooltipBg: "#ffffff", tooltipLineColor: "#1a2138", tooltipLineWidth: "0", tooltipBorderColor: "#f7f9fc", tooltipExtraCss: "border-radius: 10px; padding: 8px 24px;", tooltipTextColor: "#1a2138", tooltipFontWeight: "normal", axisLineColor: "#edf1f7", xAxisTextColor: "#8f9bb3", yAxisSplitLine: "#edf1f7", itemBorderColor: "#73a1ff", lineStyle: "solid", lineWidth: "4", lineGradFrom: "#73a1ff", lineGradTo: "#73a1ff", lineShadow: "rgba(0, 0, 0, 0)", areaGradFrom: "rgba(0, 0, 0, 0)", areaGradTo: "rgba(0, 0, 0, 0)", shadowLineDarkBg: "rgba(0, 0, 0, 0)" }, bubbleMap: { titleColor: "#1a2138", areaColor: "#e4e9f2", areaHoverColor: "#73a1ff", areaBorderColor: "#c5cee0" }, profitBarAnimationEchart: { textColor: "#1a2138", firstAnimationBarColor: "#73a1ff", secondAnimationBarColor: "#5dcfe3", splitLineStyleOpacity: "1", splitLineStyleWidth: "1", splitLineStyleColor: "#edf1f7", tooltipTextColor: "#1a2138", tooltipFontWeight: "normal", tooltipFontSize: "16", tooltipBg: "#ffffff", tooltipBorderColor: "#f7f9fc", tooltipBorderWidth: "1", tooltipExtraCss: "border-radius: 10px; padding: 4px 16px;" }, trafficBarEchart: { gradientFrom: "#ffc94d", gradientTo: "#ffa36b", shadow: "#ffc94d", shadowBlur: "0", axisTextColor: "#1a2138", axisFontSize: "12", tooltipBg: "#ffffff", tooltipBorderColor: "#f7f9fc", tooltipExtraCss: "border-radius: 10px; padding: 8px 24px;", tooltipTextColor: "#1a2138", tooltipFontWeight: "normal" }, countryOrders: { countryBorderColor: "#e4e9f2", countryFillColor: "#e4e9f2", countryBorderWidth: "1", hoveredCountryBorderColor: "#73a1ff", hoveredCountryFillColor: "#598bff", hoveredCountryBorderWidth: "1", chartAxisLineColor: "#e4e9f2", chartAxisTextColor: "#8f9bb3", chartAxisFontSize: "16", chartGradientTo: "#73a1ff", chartGradientFrom: "#598bff", chartAxisSplitLine: "#edf1f7", chartShadowLineColor: "#598bff", chartLineBottomShadowColor: "#73a1ff", chartInnerLineColor: "#f7f9fc" }, echarts: { bg: "#ffffff", textColor: "#1a2138", axisLineColor: "#1a2138", splitLineColor: "#edf1f7", itemHoverShadowColor: "rgba(0, 0, 0, 0.5)", tooltipBackgroundColor: "#73a1ff", areaOpacity: "0.7" }, chartjs: { axisLineColor: "#edf1f7", textColor: "#1a2138" }, orders: { tooltipBg: "#ffffff", tooltipLineColor: "rgba(0, 0, 0, 0)", tooltipLineWidth: "0", tooltipBorderColor: "#f7f9fc", tooltipExtraCss: "border-radius: 10px; padding: 8px 24px;", tooltipTextColor: "#1a2138", tooltipFontWeight: "normal", tooltipFontSize: "20", axisLineColor: "#e4e9f2", axisFontSize: "16", axisTextColor: "#8f9bb3", yAxisSplitLine: "#edf1f7", itemBorderColor: "#73a1ff", lineStyle: "solid", lineWidth: "4", firstAreaGradFrom: "#edf1f7", firstAreaGradTo: "#edf1f7", firstShadowLineDarkBg: "rgba(0, 0, 0, 0)", secondLineGradFrom: "#73a1ff", secondLineGradTo: "#73a1ff", secondAreaGradFrom: "rgba(0, 0, 0, 0)", secondAreaGradTo: "rgba(0, 0, 0, 0)", secondShadowLineDarkBg: "rgba(0, 0, 0, 0)", thirdLineGradFrom: "#5dcfe3", thirdLineGradTo: "#2ce69b", thirdAreaGradFrom: "rgba(0, 0, 0, 0)", thirdAreaGradTo: "rgba(0, 0, 0, 0)", thirdShadowLineDarkBg: "rgba(0, 0, 0, 0)" }, profit: { bg: "#ffffff", textColor: "#1a2138", axisLineColor: "#e4e9f2", splitLineColor: "#edf1f7", areaOpacity: "1", axisFontSize: "16", axisTextColor: "#8f9bb3", firstLineGradFrom: "#edf1f7", firstLineGradTo: "#edf1f7", firstLineShadow: "rgba(0, 0, 0, 0)", secondLineGradFrom: "#73a1ff", secondLineGradTo: "#73a1ff", secondLineShadow: "rgba(0, 0, 0, 0)", thirdLineGradFrom: "#5dcfe3", thirdLineGradTo: "#5dcfe3", thirdLineShadow: "rgba(0, 0, 0, 0)" }, orderProfitLegend: { firstItem: "#5dcfe3", secondItem: "#73a1ff", thirdItem: "#edf1f7" }, visitors: { tooltipBg: "#ffffff", tooltipLineColor: "rgba(0, 0, 0, 0)", tooltipLineWidth: "1", tooltipBorderColor: "#f7f9fc", tooltipExtraCss: "border-radius: 10px; padding: 8px 24px;", tooltipTextColor: "#1a2138", tooltipFontWeight: "normal", tooltipFontSize: "20", axisLineColor: "#e4e9f2", axisFontSize: "16", axisTextColor: "#8f9bb3", yAxisSplitLine: "#edf1f7", itemBorderColor: "#73a1ff", lineStyle: "dotted", lineWidth: "6", lineGradFrom: "#ffffff", lineGradTo: "#ffffff", lineShadow: "rgba(0, 0, 0, 0)", areaGradFrom: "#73a1ff", areaGradTo: "#598bff", innerLineStyle: "solid", innerLineWidth: "1", innerAreaGradFrom: "#5dcfe3", innerAreaGradTo: "#5dcfe3" }, visitorsLegend: { firstIcon: "#5dcfe3", secondIcon: "#73a1ff" }, visitorsPie: { firstPieGradientLeft: "#5dcfe3", firstPieGradientRight: "#5dcfe3", firstPieShadowColor: "rgba(0, 0, 0, 0)", firstPieRadius: ["65%", "90%"], secondPieGradientLeft: "#ffa36b", secondPieGradientRight: "#ffc94d", secondPieShadowColor: "rgba(0, 0, 0, 0)", secondPieRadius: ["63%", "92%"], shadowOffsetX: "-4", shadowOffsetY: "-4" }, visitorsPieLegend: { firstSection: "#ffa36b", secondSection: "#5dcfe3" }, earningPie: { radius: ["65%", "100%"], center: ["50%", "50%"], fontSize: "22", firstPieGradientLeft: "#5dcfe3", firstPieGradientRight: "#5dcfe3", firstPieShadowColor: "rgba(0, 0, 0, 0)", secondPieGradientLeft: "#73a1ff", secondPieGradientRight: "#73a1ff", secondPieShadowColor: "rgba(0, 0, 0, 0)", thirdPieGradientLeft: "#ffa36b", thirdPieGradientRight: "#ffa36b", thirdPieShadowColor: "rgba(0, 0, 0, 0)" }, earningLine: { gradFrom: "#73a1ff", gradTo: "#73a1ff", tooltipTextColor: "#1a2138", tooltipFontWeight: "normal", tooltipFontSize: "16", tooltipBg: "#ffffff", tooltipBorderColor: "#f7f9fc", tooltipBorderWidth: "1", tooltipExtraCss: "border-radius: 10px; padding: 4px 16px;" } } }, { name: "dark", base: "dark", variables: { temperature: { arcFill: ["#3366ff", "#3366ff", "#3366ff", "#3366ff", "#3366ff"], arcEmpty: "#1a2138", thumbBg: "#1a2138", thumbBorder: "#3366ff" }, solar: { gradientLeft: "#3366ff", gradientRight: "#3366ff", shadowColor: "rgba(0, 0, 0, 0)", secondSeriesFill: "#1a2138", radius: ["80%", "90%"] }, traffic: { tooltipBg: "#222b45", tooltipBorderColor: "#1a2138", tooltipExtraCss: "border-radius: 10px; padding: 4px 16px;", tooltipTextColor: "#ffffff", tooltipFontWeight: "normal", yAxisSplitLine: "#1b1b38", lineBg: "#101426", lineShadowBlur: "1", itemColor: "#101426", itemBorderColor: "#101426", itemEmphasisBorderColor: "#3366ff", shadowLineDarkBg: "rgba(0, 0, 0, 0)", shadowLineShadow: "rgba(0, 0, 0, 0)", gradFrom: "#1a2138", gradTo: "#1a2138" }, electricity: { tooltipBg: "#222b45", tooltipLineColor: "#ffffff", tooltipLineWidth: "0", tooltipBorderColor: "#1a2138", tooltipExtraCss: "border-radius: 10px; padding: 8px 24px;", tooltipTextColor: "#ffffff", tooltipFontWeight: "normal", axisLineColor: "#151a30", xAxisTextColor: "#8f9bb3", yAxisSplitLine: "#1b1b38", itemBorderColor: "#3366ff", lineStyle: "solid", lineWidth: "4", lineGradFrom: "#3366ff", lineGradTo: "#3366ff", lineShadow: "rgba(0, 0, 0, 0)", areaGradFrom: "#1a2138", areaGradTo: "#1a2138", shadowLineDarkBg: "rgba(0, 0, 0, 0)" }, bubbleMap: { titleColor: "#ffffff", areaColor: "#101426", areaHoverColor: "#3366ff", areaBorderColor: "#101426" }, profitBarAnimationEchart: { textColor: "#ffffff", firstAnimationBarColor: "#3366ff", secondAnimationBarColor: "#00d68f", splitLineStyleOpacity: "1", splitLineStyleWidth: "1", splitLineStyleColor: "#1b1b38", tooltipTextColor: "#ffffff", tooltipFontWeight: "normal", tooltipFontSize: "16", tooltipBg: "#222b45", tooltipBorderColor: "#1a2138", tooltipBorderWidth: "1", tooltipExtraCss: "border-radius: 10px; padding: 4px 16px;" }, trafficBarEchart: { gradientFrom: "#ffc94d", gradientTo: "#ffaa00", shadow: "#ffc94d", shadowBlur: "0", axisTextColor: "#ffffff", axisFontSize: "12", tooltipBg: "#222b45", tooltipBorderColor: "#1a2138", tooltipExtraCss: "border-radius: 10px; padding: 4px 16px;", tooltipTextColor: "#ffffff", tooltipFontWeight: "normal" }, countryOrders: { countryBorderColor: "#101426", countryFillColor: "#151a30", countryBorderWidth: "1", hoveredCountryBorderColor: "#3366ff", hoveredCountryFillColor: "#598bff", hoveredCountryBorderWidth: "1", chartAxisLineColor: "#101426", chartAxisTextColor: "#8f9bb3", chartAxisFontSize: "16", chartGradientTo: "#3366ff", chartGradientFrom: "#598bff", chartAxisSplitLine: "#1b1b38", chartShadowLineColor: "#598bff", chartLineBottomShadowColor: "#3366ff", chartInnerLineColor: "#1a2138" }, echarts: { bg: "#222b45", textColor: "#ffffff", axisLineColor: "#ffffff", splitLineColor: "#1b1b38", itemHoverShadowColor: "rgba(0, 0, 0, 0.5)", tooltipBackgroundColor: "#3366ff", areaOpacity: "0.7" }, chartjs: { axisLineColor: "#1b1b38", textColor: "#ffffff" }, orders: { tooltipBg: "#222b45", tooltipLineColor: "rgba(0, 0, 0, 0)", tooltipLineWidth: "0", tooltipBorderColor: "#1a2138", tooltipExtraCss: "border-radius: 10px; padding: 8px 24px;", tooltipTextColor: "#ffffff", tooltipFontWeight: "normal", tooltipFontSize: "20", axisLineColor: "#101426", axisFontSize: "16", axisTextColor: "#8f9bb3", yAxisSplitLine: "#1b1b38", itemBorderColor: "#3366ff", lineStyle: "solid", lineWidth: "4", firstAreaGradFrom: "#151a30", firstAreaGradTo: "#151a30", firstShadowLineDarkBg: "rgba(0, 0, 0, 0)", secondLineGradFrom: "#3366ff", secondLineGradTo: "#3366ff", secondAreaGradFrom: "rgba(51, 102, 255, 0.2)", secondAreaGradTo: "rgba(51, 102, 255, 0)", secondShadowLineDarkBg: "rgba(0, 0, 0, 0)", thirdLineGradFrom: "#00d68f", thirdLineGradTo: "#2ce69b", thirdAreaGradFrom: "rgba(0, 214, 143, 0.2)", thirdAreaGradTo: "rgba(0, 214, 143, 0)", thirdShadowLineDarkBg: "rgba(0, 0, 0, 0)" }, profit: { bg: "#222b45", textColor: "#ffffff", axisLineColor: "#101426", splitLineColor: "#1b1b38", areaOpacity: "1", axisFontSize: "16", axisTextColor: "#8f9bb3", firstLineGradFrom: "#151a30", firstLineGradTo: "#151a30", firstLineShadow: "rgba(0, 0, 0, 0)", secondLineGradFrom: "#3366ff", secondLineGradTo: "#3366ff", secondLineShadow: "rgba(0, 0, 0, 0)", thirdLineGradFrom: "#00d68f", thirdLineGradTo: "#2ce69b", thirdLineShadow: "rgba(0, 0, 0, 0)" }, orderProfitLegend: { firstItem: "#00d68f", secondItem: "#3366ff", thirdItem: "#151a30" }, visitors: { tooltipBg: "#222b45", tooltipLineColor: "rgba(0, 0, 0, 0)", tooltipLineWidth: "0", tooltipBorderColor: "#1a2138", tooltipExtraCss: "border-radius: 10px; padding: 8px 24px;", tooltipTextColor: "#ffffff", tooltipFontWeight: "normal", tooltipFontSize: "20", axisLineColor: "#101426", axisFontSize: "16", axisTextColor: "#8f9bb3", yAxisSplitLine: "#1b1b38", itemBorderColor: "#3366ff", lineStyle: "dotted", lineWidth: "6", lineGradFrom: "#ffffff", lineGradTo: "#ffffff", lineShadow: "rgba(0, 0, 0, 0)", areaGradFrom: "#3366ff", areaGradTo: "#598bff", innerLineStyle: "solid", innerLineWidth: "1", innerAreaGradFrom: "#00d68f", innerAreaGradTo: "#00d68f" }, visitorsLegend: { firstIcon: "#00d68f", secondIcon: "#3366ff" }, visitorsPie: { firstPieGradientLeft: "#00d68f", firstPieGradientRight: "#00d68f", firstPieShadowColor: "rgba(0, 0, 0, 0)", firstPieRadius: ["70%", "90%"], secondPieGradientLeft: "#ffaa00", secondPieGradientRight: "#ffc94d", secondPieShadowColor: "rgba(0, 0, 0, 0)", secondPieRadius: ["60%", "97%"], shadowOffsetX: "0", shadowOffsetY: "0" }, visitorsPieLegend: { firstSection: "#ffaa00", secondSection: "#00d68f" }, earningPie: { radius: ["65%", "100%"], center: ["50%", "50%"], fontSize: "22", firstPieGradientLeft: "#00d68f", firstPieGradientRight: "#00d68f", firstPieShadowColor: "rgba(0, 0, 0, 0)", secondPieGradientLeft: "#3366ff", secondPieGradientRight: "#3366ff", secondPieShadowColor: "rgba(0, 0, 0, 0)", thirdPieGradientLeft: "#ffaa00", thirdPieGradientRight: "#ffaa00", thirdPieShadowColor: "rgba(0, 0, 0, 0)" }, earningLine: { gradFrom: "#3366ff", gradTo: "#3366ff", tooltipTextColor: "#ffffff", tooltipFontWeight: "normal", tooltipFontSize: "16", tooltipBg: "#222b45", tooltipBorderColor: "#1a2138", tooltipBorderWidth: "1", tooltipExtraCss: "border-radius: 10px; padding: 4px 16px;" } } }], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NB_MEDIA_BREAKPOINTS"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["DEFAULT_MEDIA_BREAKPOINTS"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NB_LAYOUT_DIRECTION"], "rtl", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NB_DIALOG_CONFIG"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NB_WINDOW_CONFIG"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NB_TOASTR_CONFIG"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbChatOptions"], { messageGoogleMapKey: "AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY" }, [])]); });



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
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
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
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    //  API_URL:'http://localhost:9096/api/'
    API_URL: 'http://37.152.189.243:9096/api/'
};


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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module.ngfactory */ "./src/app/app.module.ngfactory.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AppModuleNgFactory"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/seyedmahdi/Documents/Projects/Billioner/SW/simplywall-panel/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map