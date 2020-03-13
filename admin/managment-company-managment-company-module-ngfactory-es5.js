(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["managment-company-managment-company-module-ngfactory"],{

/***/ "./node_modules/angular-ng-autocomplete/fesm5/angular-ng-autocomplete.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/angular-ng-autocomplete/fesm5/angular-ng-autocomplete.js ***!
  \*******************************************************************************/
/*! exports provided: AutocompleteComponent, AutocompleteLibComponent, AutocompleteLibModule, HighlightPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteComponent", function() { return AutocompleteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteLibComponent", function() { return AutocompleteLibComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteLibModule", function() { return AutocompleteLibModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightPipe", function() { return HighlightPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







/**
 * @fileoverview added by tsickle
 * Generated from: lib/autocomplete-lib.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AutocompleteLibComponent = /** @class */ (function () {
    function AutocompleteLibComponent() {
    }
    /**
     * @return {?}
     */
    AutocompleteLibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    AutocompleteLibComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ng-autocomplete-lib',
                    template: "\n    <p>\n      autocomplete-lib works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    AutocompleteLibComponent.ctorParameters = function () { return []; };
    return AutocompleteLibComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/autocomplete/autocomplete.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Keyboard events
 * @type {?}
 */
var isArrowUp = (/**
 * @param {?} keyCode
 * @return {?}
 */
function (keyCode) { return keyCode === 38; });
var ɵ0 = isArrowUp;
/** @type {?} */
var isArrowDown = (/**
 * @param {?} keyCode
 * @return {?}
 */
function (keyCode) { return keyCode === 40; });
var ɵ1 = isArrowDown;
/** @type {?} */
var isArrowUpDown = (/**
 * @param {?} keyCode
 * @return {?}
 */
function (keyCode) { return isArrowUp(keyCode) || isArrowDown(keyCode); });
var ɵ2 = isArrowUpDown;
/** @type {?} */
var isEnter = (/**
 * @param {?} keyCode
 * @return {?}
 */
function (keyCode) { return keyCode === 13; });
var ɵ3 = isEnter;
/** @type {?} */
var isBackspace = (/**
 * @param {?} keyCode
 * @return {?}
 */
function (keyCode) { return keyCode === 8; });
var ɵ4 = isBackspace;
/** @type {?} */
var isDelete = (/**
 * @param {?} keyCode
 * @return {?}
 */
function (keyCode) { return keyCode === 46; });
var ɵ5 = isDelete;
/** @type {?} */
var isESC = (/**
 * @param {?} keyCode
 * @return {?}
 */
function (keyCode) { return keyCode === 27; });
var ɵ6 = isESC;
/** @type {?} */
var isTab = (/**
 * @param {?} keyCode
 * @return {?}
 */
function (keyCode) { return keyCode === 9; });
var ɵ7 = isTab;
var AutocompleteComponent = /** @class */ (function () {
    function AutocompleteComponent(elementRef, renderer) {
        this.renderer = renderer;
        // input events
        this.query = ''; // search query
        // search query
        this.filteredList = []; // list of items
        // list of items
        this.historyList = []; // list of history items
        // list of history items
        this.isHistoryListVisible = true;
        this.selectedIdx = -1;
        this.toHighlight = '';
        this.notFound = false;
        this.isFocused = false;
        this.isOpen = false;
        this.isScrollToEnd = false;
        this.overlay = false;
        this.manualOpen = undefined;
        this.manualClose = undefined;
        // @Inputs
        /**
         * Data of items list.
         * It can be array of strings or array of objects.
         */
        this.data = [];
        // keyword to filter the list
        this.placeHolder = ''; // input placeholder
        // input placeholder
        this.heading = '';
        /**
         * Heading text of history list.
         * If it is null then history heading is hidden.
         */
        this.historyHeading = 'Recently selected';
        this.historyListMaxNumber = 15; // maximum number of items in the history list.
        // maximum number of items in the history list.
        this.notFoundText = 'Not found'; // set custom text when filter returns empty result
        // input disable/enable
        /**
         * The minimum number of characters the user must type before a search is performed.
         */
        this.minQueryLength = 1;
        // @Output events
        /**
         * Event that is emitted whenever an item from the list is selected.
         */
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event that is emitted whenever an input is changed.
         */
        this.inputChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event that is emitted whenever an input is focused.
         */
        this.inputFocused = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event that is emitted whenever an input is cleared.
         */
        this.inputCleared = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event that is emitted when the autocomplete panel is opened.
         */
        this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event that is emitted when the autocomplete panel is closed.
         */
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event that is emitted when scrolled to the end of items.
         */
        this.scrolledToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Propagates new value when model changes
         */
        this.propagateChange = (/**
         * @return {?}
         */
        function () {
        });
        this.elementRef = elementRef;
    }
    /**
     * Writes a new value from the form model into the view,
     * Updates model
     */
    /**
     * Writes a new value from the form model into the view,
     * Updates model
     * @param {?} value
     * @return {?}
     */
    AutocompleteComponent.prototype.writeValue = /**
     * Writes a new value from the form model into the view,
     * Updates model
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.query = value;
    };
    /**
     * Registers a handler that is called when something in the view has changed
     */
    /**
     * Registers a handler that is called when something in the view has changed
     * @param {?} fn
     * @return {?}
     */
    AutocompleteComponent.prototype.registerOnChange = /**
     * Registers a handler that is called when something in the view has changed
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.propagateChange = fn;
    };
    /**
     * Registers a handler specifically for when a control receives a touch event
     */
    /**
     * Registers a handler specifically for when a control receives a touch event
     * @param {?} fn
     * @return {?}
     */
    AutocompleteComponent.prototype.registerOnTouched = /**
     * Registers a handler specifically for when a control receives a touch event
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
    };
    /**
     * Event that is called when the value of an input element is changed
     */
    /**
     * Event that is called when the value of an input element is changed
     * @param {?} event
     * @return {?}
     */
    AutocompleteComponent.prototype.onChange = /**
     * Event that is called when the value of an input element is changed
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.propagateChange(event.target.value);
    };
    /**
     * Event that is called when the control status changes to or from DISABLED
     */
    /**
     * Event that is called when the control status changes to or from DISABLED
     * @param {?} isDisabled
     * @return {?}
     */
    AutocompleteComponent.prototype.setDisabledState = /**
     * Event that is called when the control status changes to or from DISABLED
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
    /**
     * @return {?}
     */
    AutocompleteComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setInitialValue(this.initialValue);
    };
    /**
     * @return {?}
     */
    AutocompleteComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.initEventStream();
        this.handleScroll();
    };
    /**
     * Set initial value
     * @param value
     */
    /**
     * Set initial value
     * @param {?} value
     * @return {?}
     */
    AutocompleteComponent.prototype.setInitialValue = /**
     * Set initial value
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.initialValue) {
            this.select(value);
        }
    };
    /**
     * Update search results
     */
    /**
     * Update search results
     * @param {?} changes
     * @return {?}
     */
    AutocompleteComponent.prototype.ngOnChanges = /**
     * Update search results
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes &&
            changes.data &&
            Array.isArray(changes.data.currentValue)) {
            this.handleItemsChange();
            if (!changes.data.firstChange && this.isFocused) {
                this.handleOpen();
            }
        }
    };
    /**
     * Items change
     */
    /**
     * Items change
     * @return {?}
     */
    AutocompleteComponent.prototype.handleItemsChange = /**
     * Items change
     * @return {?}
     */
    function () {
        this.isScrollToEnd = false;
        if (!this.isOpen) {
            return;
        }
        this.filteredList = this.data;
        this.notFound = !this.filteredList || this.filteredList.length === 0;
    };
    /**
     * Filter data
     */
    /**
     * Filter data
     * @return {?}
     */
    AutocompleteComponent.prototype.filterList = /**
     * Filter data
     * @return {?}
     */
    function () {
        var _this = this;
        this.selectedIdx = -1;
        this.initSearchHistory();
        if (this.query != null && this.data) {
            this.toHighlight = this.query;
            this.filteredList = this.data.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                if (typeof item === 'string') {
                    // string logic, check equality of strings
                    return item.toLowerCase().indexOf(_this.query.toLowerCase()) > -1;
                }
                else if (typeof item === 'object' && item.constructor === Object) {
                    // object logic, check property equality
                    return item[_this.searchKeyword].toLowerCase().indexOf(_this.query.toLowerCase()) > -1;
                }
            }));
        }
        else {
            this.notFound = false;
        }
    };
    /**
     * Check type of item in the list.
     * @param item
     */
    /**
     * Check type of item in the list.
     * @param {?} item
     * @return {?}
     */
    AutocompleteComponent.prototype.isType = /**
     * Check type of item in the list.
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return typeof item === 'string';
    };
    /**
     * Select item in the list.
     * @param item
     */
    /**
     * Select item in the list.
     * @param {?} item
     * @return {?}
     */
    AutocompleteComponent.prototype.select = /**
     * Select item in the list.
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _this = this;
        this.query = !this.isType(item) ? item[this.searchKeyword] : item;
        this.isOpen = true;
        this.overlay = false;
        this.selected.emit(item);
        this.propagateChange(item);
        if (this.initialValue) {
            // check if history already exists in localStorage and then update
            /** @type {?} */
            var history_1 = window.localStorage.getItem("" + this.historyIdentifier);
            if (history_1) {
                /** @type {?} */
                var existingHistory = JSON.parse(localStorage["" + this.historyIdentifier]);
                if (!(existingHistory instanceof Array))
                    existingHistory = [];
                // check if selected item exists in existingHistory
                if (!existingHistory.some((/**
                 * @param {?} existingItem
                 * @return {?}
                 */
                function (existingItem) { return !_this.isType(existingItem)
                    ? existingItem[_this.searchKeyword] == item[_this.searchKeyword] : existingItem == item; }))) {
                    existingHistory.unshift(item);
                    localStorage.setItem("" + this.historyIdentifier, JSON.stringify(existingHistory));
                    // check if items don't exceed max allowed number
                    if (existingHistory.length >= this.historyListMaxNumber) {
                        existingHistory.splice(existingHistory.length - 1, 1);
                        localStorage.setItem("" + this.historyIdentifier, JSON.stringify(existingHistory));
                    }
                }
                else {
                    // if selected item exists in existingHistory swap to top in array
                    if (!this.isType(item)) {
                        // object logic
                        /** @type {?} */
                        var copiedExistingHistory = existingHistory.slice();
                        // copy original existingHistory array
                        /** @type {?} */
                        var selectedIndex = copiedExistingHistory.map((/**
                         * @param {?} el
                         * @return {?}
                         */
                        function (el) { return el[_this.searchKeyword]; })).indexOf(item[this.searchKeyword]);
                        copiedExistingHistory.splice(selectedIndex, 1);
                        copiedExistingHistory.splice(0, 0, item);
                        localStorage.setItem("" + this.historyIdentifier, JSON.stringify(copiedExistingHistory));
                    }
                    else {
                        // string logic
                        /** @type {?} */
                        var copiedExistingHistory = existingHistory.slice();
                        copiedExistingHistory.splice(copiedExistingHistory.indexOf(item), 1);
                        copiedExistingHistory.splice(0, 0, item);
                        localStorage.setItem("" + this.historyIdentifier, JSON.stringify(copiedExistingHistory));
                    }
                }
            }
            else {
                this.saveHistory(item);
            }
        }
        else {
            this.saveHistory(item);
        }
        this.handleClose();
    };
    /**
     * Document click
     * @param e event
     */
    /**
     * Document click
     * @param {?} e event
     * @return {?}
     */
    AutocompleteComponent.prototype.handleClick = /**
     * Document click
     * @param {?} e event
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var clickedComponent = e.target;
        /** @type {?} */
        var inside = false;
        do {
            if (clickedComponent === this.elementRef.nativeElement) {
                inside = true;
                if (this.filteredList.length) {
                    this.handleOpen();
                }
            }
            clickedComponent = clickedComponent.parentNode;
        } while (clickedComponent);
        if (!inside) {
            this.handleClose();
        }
    };
    /**
     * Handle body overlay
     */
    /**
     * Handle body overlay
     * @return {?}
     */
    AutocompleteComponent.prototype.handleOverlay = /**
     * Handle body overlay
     * @return {?}
     */
    function () {
        this.overlay = false;
    };
    /**
     * Scroll items
     */
    /**
     * Scroll items
     * @return {?}
     */
    AutocompleteComponent.prototype.handleScroll = /**
     * Scroll items
     * @return {?}
     */
    function () {
        var _this = this;
        this.renderer.listen(this.filteredListElement.nativeElement, 'scroll', (/**
         * @return {?}
         */
        function () {
            _this.scrollToEnd();
        }));
    };
    /**
     * Define panel state
     */
    /**
     * Define panel state
     * @param {?} event
     * @return {?}
     */
    AutocompleteComponent.prototype.setPanelState = /**
     * Define panel state
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event) {
            event.stopPropagation();
        }
        // If controls are untouched
        if (typeof this.manualOpen === 'undefined'
            && typeof this.manualClose === 'undefined') {
            this.isOpen = false;
            this.handleOpen();
        }
        // If one of the controls is untouched and other is deactivated
        if (typeof this.manualOpen === 'undefined'
            && this.manualClose === false
            || typeof this.manualClose === 'undefined'
                && this.manualOpen === false) {
            this.isOpen = false;
            this.handleOpen();
        }
        // if controls are touched but both are deactivated
        if (this.manualOpen === false && this.manualClose === false) {
            this.isOpen = false;
            this.handleOpen();
        }
        // if open control is touched and activated
        if (this.manualOpen) {
            this.isOpen = false;
            this.handleOpen();
            this.manualOpen = false;
        }
        // if close control is touched and activated
        if (this.manualClose) {
            this.isOpen = true;
            this.handleClose();
            this.manualClose = false;
        }
    };
    /**
     * Manual controls
     */
    /**
     * Manual controls
     * @return {?}
     */
    AutocompleteComponent.prototype.open = /**
     * Manual controls
     * @return {?}
     */
    function () {
        this.manualOpen = true;
        this.isOpen = false;
        this.handleOpen();
    };
    /**
     * @return {?}
     */
    AutocompleteComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.manualClose = true;
        this.isOpen = true;
        this.handleClose();
    };
    /**
     * @return {?}
     */
    AutocompleteComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.handleFocus(event);
    };
    /**
     * @return {?}
     */
    AutocompleteComponent.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.remove(event);
    };
    /**
     * Remove search query
     */
    /**
     * Remove search query
     * @param {?} e
     * @return {?}
     */
    AutocompleteComponent.prototype.remove = /**
     * Remove search query
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.stopPropagation();
        this.query = '';
        this.inputCleared.emit();
        this.propagateChange(this.query);
        this.setPanelState(e);
    };
    /**
     * Initialize historyList search
     */
    /**
     * Initialize historyList search
     * @return {?}
     */
    AutocompleteComponent.prototype.initSearchHistory = /**
     * Initialize historyList search
     * @return {?}
     */
    function () {
        this.isHistoryListVisible = false;
        if (this.historyIdentifier && !this.query) {
            /** @type {?} */
            var history_2 = window.localStorage.getItem("" + this.historyIdentifier);
            if (history_2) {
                this.isHistoryListVisible = true;
                this.filteredList = [];
                this.historyList = history_2 ? JSON.parse(history_2) : [];
            }
            else {
                this.isHistoryListVisible = false;
            }
        }
        else {
            this.isHistoryListVisible = false;
        }
    };
    /**
     * @return {?}
     */
    AutocompleteComponent.prototype.handleOpen = /**
     * @return {?}
     */
    function () {
        if (this.isOpen || this.isOpen && !this.isLoading) {
            return;
        }
        // If data exists
        if (this.data && this.data.length) {
            this.isOpen = true;
            this.overlay = true;
            this.filterList();
            this.opened.emit();
        }
    };
    /**
     * @return {?}
     */
    AutocompleteComponent.prototype.handleClose = /**
     * @return {?}
     */
    function () {
        if (!this.isOpen) {
            this.isFocused = false;
            return;
        }
        this.isOpen = false;
        this.overlay = false;
        this.filteredList = [];
        this.selectedIdx = -1;
        this.notFound = false;
        this.isHistoryListVisible = false;
        this.isFocused = false;
        this.closed.emit();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    AutocompleteComponent.prototype.handleFocus = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.searchInput.nativeElement.focus();
        if (this.isFocused) {
            return;
        }
        this.inputFocused.emit(e);
        // if data exists then open
        if (this.data && this.data.length) {
            this.setPanelState(event);
        }
        this.isFocused = true;
    };
    /**
     * @return {?}
     */
    AutocompleteComponent.prototype.scrollToEnd = /**
     * @return {?}
     */
    function () {
        if (this.isScrollToEnd) {
            return;
        }
        /** @type {?} */
        var scrollTop = this.filteredListElement.nativeElement
            .scrollTop;
        /** @type {?} */
        var scrollHeight = this.filteredListElement.nativeElement
            .scrollHeight;
        /** @type {?} */
        var elementHeight = this.filteredListElement.nativeElement
            .clientHeight;
        /** @type {?} */
        var atBottom = scrollHeight === scrollTop + elementHeight;
        if (atBottom) {
            this.scrolledToEnd.emit();
            this.isScrollToEnd = true;
        }
    };
    /**
     * Initialize keyboard events
     */
    /**
     * Initialize keyboard events
     * @return {?}
     */
    AutocompleteComponent.prototype.initEventStream = /**
     * Initialize keyboard events
     * @return {?}
     */
    function () {
        this.inputKeyUp$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.searchInput.nativeElement, 'keyup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e; })));
        this.inputKeyDown$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.searchInput.nativeElement, 'keydown').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e; })));
        this.listenEventStream();
    };
    /**
     * Listen keyboard events
     */
    /**
     * Listen keyboard events
     * @return {?}
     */
    AutocompleteComponent.prototype.listenEventStream = /**
     * Listen keyboard events
     * @return {?}
     */
    function () {
        var _this = this;
        // key up event
        this.inputKeyUp$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            return !isArrowUpDown(e.keyCode) &&
                !isEnter(e.keyCode) &&
                !isESC(e.keyCode) &&
                !isTab(e.keyCode);
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(this.debounceTime)).subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            _this.onKeyUp(e);
        }));
        // cursor up & down
        this.inputKeyDown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return isArrowUpDown(e.keyCode); }))).subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            e.preventDefault();
            _this.onFocusItem(e);
        }));
        // enter keyup
        this.inputKeyUp$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return isEnter(e.keyCode); }))).subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            //this.onHandleEnter();
        }));
        // enter keydown
        this.inputKeyDown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return isEnter(e.keyCode); }))).subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            _this.onHandleEnter();
        }));
        // ESC
        this.inputKeyUp$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return isESC(e.keyCode); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(100))).subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            _this.onEsc();
        }));
        // TAB
        this.inputKeyDown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return isTab(e.keyCode); }))).subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            _this.onTab();
        }));
        // delete
        this.inputKeyDown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return isBackspace(e.keyCode) || isDelete(e.keyCode); }))).subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            _this.onDelete();
        }));
    };
    /**
     * on keyup == when input changed
     * @param e event
     */
    /**
     * on keyup == when input changed
     * @param {?} e event
     * @return {?}
     */
    AutocompleteComponent.prototype.onKeyUp = /**
     * on keyup == when input changed
     * @param {?} e event
     * @return {?}
     */
    function (e) {
        this.notFound = false; // search results are unknown while typing
        // if input is empty
        if (!this.query) {
            this.notFound = false;
            this.inputChanged.emit(e.target.value);
            this.inputCleared.emit();
            //this.filterList();
            this.setPanelState(e);
        }
        // note that '' can be a valid query
        if (!this.query && this.query !== '') {
            return;
        }
        // if query >= to minQueryLength
        if (this.query.length >= this.minQueryLength) {
            this.inputChanged.emit(e.target.value);
            this.filterList();
            // If no results found
            if (!this.filteredList.length && !this.isLoading) {
                this.notFoundText ? this.notFound = true : this.notFound = false;
            }
        }
    };
    /**
     * Keyboard arrow top and arrow bottom
     * @param e event
     */
    /**
     * Keyboard arrow top and arrow bottom
     * @param {?} e event
     * @return {?}
     */
    AutocompleteComponent.prototype.onFocusItem = /**
     * Keyboard arrow top and arrow bottom
     * @param {?} e event
     * @return {?}
     */
    function (e) {
        // move arrow up and down on filteredList or historyList
        if (!this.historyList.length || !this.isHistoryListVisible) {
            // filteredList
            /** @type {?} */
            var totalNumItem = this.filteredList.length;
            if (e.key === 'ArrowDown') {
                /** @type {?} */
                var sum = this.selectedIdx;
                sum = (this.selectedIdx === null) ? 0 : sum + 1;
                this.selectedIdx = (totalNumItem + sum) % totalNumItem;
                this.scrollToFocusedItem(this.selectedIdx);
            }
            else if (e.key === 'ArrowUp') {
                if (this.selectedIdx == -1) {
                    this.selectedIdx = 0;
                }
                this.selectedIdx = (totalNumItem + this.selectedIdx - 1) % totalNumItem;
                this.scrollToFocusedItem(this.selectedIdx);
            }
        }
        else {
            // historyList
            /** @type {?} */
            var totalNumItem = this.historyList.length;
            if (e.key === 'ArrowDown') {
                /** @type {?} */
                var sum = this.selectedIdx;
                sum = (this.selectedIdx === null) ? 0 : sum + 1;
                this.selectedIdx = (totalNumItem + sum) % totalNumItem;
                this.scrollToFocusedItem(this.selectedIdx);
            }
            else if (e.key === 'ArrowUp') {
                if (this.selectedIdx == -1) {
                    this.selectedIdx = 0;
                }
                this.selectedIdx = (totalNumItem + this.selectedIdx - 1) % totalNumItem;
                this.scrollToFocusedItem(this.selectedIdx);
            }
        }
    };
    /**
     * Scroll to focused item
     * * @param index
     */
    /**
     * Scroll to focused item
     * * \@param index
     * @param {?} index
     * @return {?}
     */
    AutocompleteComponent.prototype.scrollToFocusedItem = /**
     * Scroll to focused item
     * * \@param index
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var listElement = null;
        // Define list element
        if (!this.historyList.length || !this.isHistoryListVisible) {
            // filteredList element
            listElement = this.filteredListElement.nativeElement;
        }
        else {
            // historyList element
            listElement = this.historyListElement.nativeElement;
        }
        /** @type {?} */
        var items = Array.prototype.slice.call(listElement.childNodes).filter((/**
         * @param {?} node
         * @return {?}
         */
        function (node) {
            if (node.nodeType === 1) {
                // if node is element
                return node.className.includes('item');
            }
            else {
                return false;
            }
        }));
        if (!items.length) {
            return;
        }
        /** @type {?} */
        var listHeight = listElement.offsetHeight;
        /** @type {?} */
        var itemHeight = items[index].offsetHeight;
        /** @type {?} */
        var visibleTop = listElement.scrollTop;
        /** @type {?} */
        var visibleBottom = listElement.scrollTop + listHeight - itemHeight;
        /** @type {?} */
        var targetPosition = items[index].offsetTop;
        if (targetPosition < visibleTop) {
            listElement.scrollTop = targetPosition;
        }
        if (targetPosition > visibleBottom) {
            listElement.scrollTop = targetPosition - listHeight + itemHeight;
        }
    };
    /**
     * Select item on enter click
     */
    /**
     * Select item on enter click
     * @return {?}
     */
    AutocompleteComponent.prototype.onHandleEnter = /**
     * Select item on enter click
     * @return {?}
     */
    function () {
        // click enter to choose item from filteredList or historyList
        if (this.selectedIdx > -1) {
            if (!this.historyList.length || !this.isHistoryListVisible) {
                // filteredList
                this.query = !this.isType(this.filteredList[this.selectedIdx])
                    ? this.filteredList[this.selectedIdx][this.searchKeyword]
                    : this.filteredList[this.selectedIdx];
                this.saveHistory(this.filteredList[this.selectedIdx]);
                this.select(this.filteredList[this.selectedIdx]);
            }
            else {
                // historyList
                this.query = !this.isType(this.historyList[this.selectedIdx])
                    ? this.historyList[this.selectedIdx][this.searchKeyword]
                    : this.historyList[this.selectedIdx];
                this.saveHistory(this.historyList[this.selectedIdx]);
                this.select(this.historyList[this.selectedIdx]);
            }
        }
        this.isHistoryListVisible = false;
        this.handleClose();
    };
    /**
     * Esc click
     */
    /**
     * Esc click
     * @return {?}
     */
    AutocompleteComponent.prototype.onEsc = /**
     * Esc click
     * @return {?}
     */
    function () {
        this.searchInput.nativeElement.blur();
        this.handleClose();
    };
    /**
     * Tab click
     */
    /**
     * Tab click
     * @return {?}
     */
    AutocompleteComponent.prototype.onTab = /**
     * Tab click
     * @return {?}
     */
    function () {
        this.searchInput.nativeElement.blur();
        this.handleClose();
    };
    /**
     * Delete click
     */
    /**
     * Delete click
     * @return {?}
     */
    AutocompleteComponent.prototype.onDelete = /**
     * Delete click
     * @return {?}
     */
    function () {
        // panel is open on delete
        this.isOpen = true;
    };
    /**
     * Select item to save in localStorage
     * @param selected
     */
    /**
     * Select item to save in localStorage
     * @param {?} selected
     * @return {?}
     */
    AutocompleteComponent.prototype.saveHistory = /**
     * Select item to save in localStorage
     * @param {?} selected
     * @return {?}
     */
    function (selected) {
        var _this = this;
        if (this.historyIdentifier) {
            // check if selected item exists in historyList
            if (!this.historyList.some((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return !_this.isType(item)
                ? item[_this.searchKeyword] == selected[_this.searchKeyword] : item == selected; }))) {
                this.saveHistoryToLocalStorage(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])([selected], this.historyList));
                // check if items don't exceed max allowed number
                if (this.historyList.length >= this.historyListMaxNumber) {
                    this.historyList.splice(this.historyList.length - 1, 1);
                    this.saveHistoryToLocalStorage(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])([selected], this.historyList));
                }
            }
            else {
                // if selected item exists in historyList swap to top in array
                if (!this.isType(selected)) {
                    // object logic
                    /** @type {?} */
                    var copiedHistoryList = this.historyList.slice();
                    // copy original historyList array
                    /** @type {?} */
                    var selectedIndex = copiedHistoryList.map((/**
                     * @param {?} item
                     * @return {?}
                     */
                    function (item) { return item[_this.searchKeyword]; })).indexOf(selected[this.searchKeyword]);
                    copiedHistoryList.splice(selectedIndex, 1);
                    copiedHistoryList.splice(0, 0, selected);
                    this.saveHistoryToLocalStorage(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(copiedHistoryList));
                }
                else {
                    // string logic
                    /** @type {?} */
                    var copiedHistoryList = this.historyList.slice();
                    copiedHistoryList.splice(this.historyList.indexOf(selected), 1);
                    copiedHistoryList.splice(0, 0, selected);
                    this.saveHistoryToLocalStorage(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(copiedHistoryList));
                }
            }
        }
    };
    /**
     * Save item in localStorage
     * @param selected
     */
    /**
     * Save item in localStorage
     * @param {?} selected
     * @return {?}
     */
    AutocompleteComponent.prototype.saveHistoryToLocalStorage = /**
     * Save item in localStorage
     * @param {?} selected
     * @return {?}
     */
    function (selected) {
        window.localStorage.setItem("" + this.historyIdentifier, JSON.stringify(selected));
    };
    /**
     * Remove item from localStorage
     * @param index
     * @param e event
     */
    /**
     * Remove item from localStorage
     * @param {?} index
     * @param {?} e event
     * @return {?}
     */
    AutocompleteComponent.prototype.removeHistoryItem = /**
     * Remove item from localStorage
     * @param {?} index
     * @param {?} e event
     * @return {?}
     */
    function (index, e) {
        e.stopPropagation();
        this.historyList = this.historyList.filter((/**
         * @param {?} v
         * @param {?} i
         * @return {?}
         */
        function (v, i) { return i !== index; }));
        this.saveHistoryToLocalStorage(this.historyList);
        if (this.historyList.length == 0) {
            window.localStorage.removeItem("" + this.historyIdentifier);
            this.filterList();
        }
    };
    /**
     * Reset localStorage
     * @param e event
     */
    /**
     * Reset localStorage
     * @param {?} e event
     * @return {?}
     */
    AutocompleteComponent.prototype.resetHistoryList = /**
     * Reset localStorage
     * @param {?} e event
     * @return {?}
     */
    function (e) {
        e.stopPropagation();
        this.historyList = [];
        window.localStorage.removeItem("" + this.historyIdentifier);
        this.filterList();
    };
    AutocompleteComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ng-autocomplete',
                    template: "<div class=\"autocomplete-container\"\n     [ngClass]=\"{ 'active': isOpen}\">\n  <div class=\"input-container\">\n    <input #searchInput type=\"text\" placeholder={{placeHolder}}\n           [(ngModel)]=query\n           (input)=\"onChange($event)\"\n           (focus)=handleFocus($event)\n           [disabled]=\"disabled\">\n    <div class=\"x\" *ngIf=\"query && !isLoading && !disabled\" (click)=\"remove($event)\">\n      <i class=\"material-icons\">close</i>\n    </div>\n    <!--Loading mask-->\n    <div class=\"sk-fading-circle\" *ngIf=\"isLoading\">\n      <div class=\"sk-circle1 sk-circle\"></div>\n      <div class=\"sk-circle2 sk-circle\"></div>\n      <div class=\"sk-circle3 sk-circle\"></div>\n      <div class=\"sk-circle4 sk-circle\"></div>\n      <div class=\"sk-circle5 sk-circle\"></div>\n      <div class=\"sk-circle6 sk-circle\"></div>\n      <div class=\"sk-circle7 sk-circle\"></div>\n      <div class=\"sk-circle8 sk-circle\"></div>\n      <div class=\"sk-circle9 sk-circle\"></div>\n      <div class=\"sk-circle10 sk-circle\"></div>\n      <div class=\"sk-circle11 sk-circle\"></div>\n      <div class=\"sk-circle12 sk-circle\"></div>\n    </div>\n  </div>\n\n  <!--FilteredList items-->\n  <div class=\"suggestions-container\"\n       [ngClass]=\"{ 'is-hidden': isHistoryListVisible, 'is-visible': !isHistoryListVisible}\">\n    <!--FilteredList heading-->\n    <div class=\"heading\" *ngIf=\"filteredList.length > 0 && heading\">\n      <div class=\"text\">{{heading}}</div>\n    </div>\n\n    <ul #filteredListElement>\n      <li *ngFor=\"let item of filteredList; let idx = index\" class=\"item\">\n        <!--string logic-->\n        <div [class.complete-selected]=\"idx === selectedIdx\" *ngIf='isType(item)'\n             (click)=\"select(item)\">\n          <ng-container\n            *ngTemplateOutlet=\"itemTemplate;  context: { $implicit: item | highlight: toHighlight }\">\n          </ng-container>\n        </div>\n        <!--object logic-->\n        <div [class.complete-selected]=\"idx === selectedIdx\" *ngIf='!isType(item)'\n             (click)=\"select(item)\">\n          <ng-container\n            *ngTemplateOutlet=\"itemTemplate; context: { $implicit: item | highlight: toHighlight : searchKeyword }\">\n          </ng-container>\n        </div>\n      </li>\n    </ul>\n  </div>\n\n  <!--HistoryList items-->\n  <div class=\"suggestions-container\"\n       [ngClass]=\"{ 'is-hidden': !isHistoryListVisible, 'is-visible': isHistoryListVisible}\">\n    <!--HistoryList heading-->\n    <div class=\"heading\" *ngIf=\"historyList.length > 0 && historyHeading\">\n      <div class=\"text\">{{historyHeading}}</div>\n      <div class=\"x\" (click)=\"resetHistoryList($event)\">\n        <i class=\"material-icons\">delete</i>\n      </div>\n    </div>\n\n    <ul #historyListElement>\n      <li *ngFor=\"let item of historyList; let idx = index\" class=\"item\">\n        <!--string logic-->\n        <div [class.complete-selected]=\"idx === selectedIdx\" *ngIf='isType(item)' (click)=\"select(item)\">\n          <ng-container\n            *ngTemplateOutlet=\"itemTemplate;  context: { $implicit: item }\">\n          </ng-container>\n        </div>\n        <!--object logic-->\n        <div [class.complete-selected]=\"idx === selectedIdx\" *ngIf='!isType(item)' (click)=\"select(item)\">\n          <ng-container\n            *ngTemplateOutlet=\"itemTemplate; context: { $implicit: item }\">\n          </ng-container>\n        </div>\n        <div class=\"x\" (click)=\"removeHistoryItem(idx, $event)\">\n          <i class=\"material-icons\">close</i>\n        </div>\n      </li>\n    </ul>\n  </div>\n\n  <!--Not found-->\n  <div class=\"not-found\" *ngIf=\"isLoading ? !isLoading && notFound : notFound\">\n    <ng-container\n      *ngTemplateOutlet=\"notFoundTemplate;  context: { $implicit: notFoundText  }\">\n    </ng-container>\n  </div>\n</div>\n<div class=\"overlay\" *ngIf=\"overlay\" (click)=\"handleOverlay()\"></div>\n",
                    providers: [
                        {
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                             * @return {?}
                             */
                            function () { return AutocompleteComponent; })),
                            multi: true
                        }
                    ],
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    host: {
                        '(document:click)': 'handleClick($event)',
                        'class': 'ng-autocomplete'
                    },
                    styles: ["@import url(https://fonts.googleapis.com/icon?family=Material+Icons);.ng-autocomplete{width:600px}.autocomplete-container{box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);position:relative;overflow:visible;height:40px}.autocomplete-container .input-container input{font-size:14px;box-sizing:border-box;border:none;box-shadow:none;outline:0;background-color:#fff;color:rgba(0,0,0,.87);width:100%;padding:0 15px;line-height:40px;height:40px}.autocomplete-container .input-container input:disabled{background-color:#eee;color:#666}.autocomplete-container .input-container .x{position:absolute;right:10px;margin:auto;cursor:pointer;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.autocomplete-container .input-container .x i{color:rgba(0,0,0,.54);font-size:22px;vertical-align:middle}.autocomplete-container .suggestions-container{position:absolute;width:100%;background:#fff;height:auto;box-shadow:0 2px 5px rgba(0,0,0,.25);box-sizing:border-box}.autocomplete-container .suggestions-container ul{padding:0;margin:0;max-height:240px;overflow-y:auto}.autocomplete-container .suggestions-container ul li{position:relative;list-style:none;padding:0;margin:0;cursor:pointer}.autocomplete-container .suggestions-container ul li a{padding:14px 15px;display:block;text-decoration:none;cursor:pointer;color:rgba(0,0,0,.87);font-size:15px}.autocomplete-container .suggestions-container .complete-selected,.autocomplete-container .suggestions-container ul li:hover{background-color:rgba(158,158,158,.18)}.autocomplete-container .suggestions-container .heading{position:relative;padding:10px 15px;border:1px solid #f1f1f1}.autocomplete-container .suggestions-container .heading .text{font-size:.85em}.autocomplete-container .suggestions-container .x{position:absolute;right:10px;margin:auto;cursor:pointer;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.autocomplete-container .suggestions-container .x i{color:rgba(0,0,0,.54);font-size:18px;vertical-align:middle}.autocomplete-container .suggestions-container.is-hidden{visibility:hidden}.autocomplete-container .suggestions-container.is-visible{visibility:visible}.autocomplete-container .not-found{padding:0 .75em;border:1px solid #f1f1f1;background:#fff}.autocomplete-container .not-found div{padding:.4em 0;font-size:.95em;line-height:1.4;border-bottom:1px solid rgba(230,230,230,.7)}.autocomplete-container.active{z-index:999}.highlight{font-weight:700}.overlay{position:absolute;background-color:transparent;width:100%;height:100%;top:0;right:0;bottom:0;left:0;z-index:50}input[type=text]::-ms-clear{display:none}.sk-fading-circle{width:20px;height:20px;position:absolute;right:10px;top:0;bottom:0;margin:auto}.sk-fading-circle .sk-circle{width:100%;height:100%;position:absolute;left:0;top:0}.sk-fading-circle .sk-circle:before{content:\"\";display:block;margin:0 auto;width:15%;height:15%;background-color:#333;border-radius:100%;-webkit-animation:1.2s ease-in-out infinite both sk-circleFadeDelay;animation:1.2s ease-in-out infinite both sk-circleFadeDelay}.sk-fading-circle .sk-circle2{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.sk-fading-circle .sk-circle3{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.sk-fading-circle .sk-circle4{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.sk-fading-circle .sk-circle5{-webkit-transform:rotate(120deg);transform:rotate(120deg)}.sk-fading-circle .sk-circle6{-webkit-transform:rotate(150deg);transform:rotate(150deg)}.sk-fading-circle .sk-circle7{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.sk-fading-circle .sk-circle8{-webkit-transform:rotate(210deg);transform:rotate(210deg)}.sk-fading-circle .sk-circle9{-webkit-transform:rotate(240deg);transform:rotate(240deg)}.sk-fading-circle .sk-circle10{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.sk-fading-circle .sk-circle11{-webkit-transform:rotate(300deg);transform:rotate(300deg)}.sk-fading-circle .sk-circle12{-webkit-transform:rotate(330deg);transform:rotate(330deg)}.sk-fading-circle .sk-circle2:before{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-fading-circle .sk-circle3:before{-webkit-animation-delay:-1s;animation-delay:-1s}.sk-fading-circle .sk-circle4:before{-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-fading-circle .sk-circle5:before{-webkit-animation-delay:-.8s;animation-delay:-.8s}.sk-fading-circle .sk-circle6:before{-webkit-animation-delay:-.7s;animation-delay:-.7s}.sk-fading-circle .sk-circle7:before{-webkit-animation-delay:-.6s;animation-delay:-.6s}.sk-fading-circle .sk-circle8:before{-webkit-animation-delay:-.5s;animation-delay:-.5s}.sk-fading-circle .sk-circle9:before{-webkit-animation-delay:-.4s;animation-delay:-.4s}.sk-fading-circle .sk-circle10:before{-webkit-animation-delay:-.3s;animation-delay:-.3s}.sk-fading-circle .sk-circle11:before{-webkit-animation-delay:-.2s;animation-delay:-.2s}.sk-fading-circle .sk-circle12:before{-webkit-animation-delay:-.1s;animation-delay:-.1s}@-webkit-keyframes sk-circleFadeDelay{0%,100%,39%{opacity:0}40%{opacity:1}}@keyframes sk-circleFadeDelay{0%,100%,39%{opacity:0}40%{opacity:1}}"]
                }] }
    ];
    /** @nocollapse */
    AutocompleteComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
    ]; };
    AutocompleteComponent.propDecorators = {
        searchInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['searchInput',] }],
        filteredListElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['filteredListElement',] }],
        historyListElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['historyListElement',] }],
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        searchKeyword: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        placeHolder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        heading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        initialValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        historyIdentifier: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        historyHeading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        historyListMaxNumber: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        notFoundText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        isLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        debounceTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        minQueryLength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        inputChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        inputFocused: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        inputCleared: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        opened: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        closed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        scrolledToEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        itemTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        notFoundTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        customTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],] }]
    };
    return AutocompleteComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/autocomplete/highlight.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HighlightPipe = /** @class */ (function () {
    function HighlightPipe() {
    }
    /**
     * @param {?} text
     * @param {?} search
     * @param {?=} searchKeyword
     * @return {?}
     */
    HighlightPipe.prototype.transform = /**
     * @param {?} text
     * @param {?} search
     * @param {?=} searchKeyword
     * @return {?}
     */
    function (text, search, searchKeyword) {
        /** @type {?} */
        var pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
        pattern = pattern.split(' ').filter((/**
         * @param {?} t
         * @return {?}
         */
        function (t) {
            return t.length > 0;
        })).join('|');
        /** @type {?} */
        var regex = new RegExp(pattern, 'gi');
        if (!search) {
            return text;
        }
        if (searchKeyword) {
            /** @type {?} */
            var name_1 = text[searchKeyword].replace(regex, (/**
             * @param {?} match
             * @return {?}
             */
            function (match) { return "<b>" + match + "</b>"; }));
            // copy original object
            /** @type {?} */
            var text2 = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, text);
            // set bold value into searchKeyword of copied object
            text2[searchKeyword] = name_1;
            return text2;
        }
        else {
            return search ? text.replace(regex, (/**
             * @param {?} match
             * @return {?}
             */
            function (match) { return "<b>" + match + "</b>"; })) : text;
        }
    };
    HighlightPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                    name: 'highlight'
                },] }
    ];
    return HighlightPipe;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/autocomplete-lib.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AutocompleteLibModule = /** @class */ (function () {
    function AutocompleteLibModule() {
    }
    AutocompleteLibModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
                    ],
                    declarations: [AutocompleteLibComponent, AutocompleteComponent, HighlightPipe],
                    exports: [AutocompleteLibComponent, AutocompleteComponent, HighlightPipe]
                },] }
    ];
    return AutocompleteLibModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: angular-ng-autocomplete.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=angular-ng-autocomplete.js.map


/***/ }),

/***/ "./node_modules/ngx-pagination/dist/ngx-pagination.js":
/*!************************************************************!*\
  !*** ./node_modules/ngx-pagination/dist/ngx-pagination.js ***!
  \************************************************************/
/*! exports provided: ɵb, ɵa, NgxPaginationModule, PaginationService, PaginationControlsComponent, PaginationControlsDirective, PaginatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return DEFAULT_STYLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DEFAULT_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPaginationModule", function() { return NgxPaginationModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationService", function() { return PaginationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationControlsComponent", function() { return PaginationControlsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationControlsDirective", function() { return PaginationControlsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatePipe", function() { return PaginatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var PaginationService = /** @class */ (function () {
    function PaginationService() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.instances = {};
        this.DEFAULT_ID = 'DEFAULT_PAGINATION_ID';
    }
    PaginationService.prototype.defaultId = function () { return this.DEFAULT_ID; };
    /**
     * Register a PaginationInstance with this service. Returns a
     * boolean value signifying whether the instance is new or
     * updated (true = new or updated, false = unchanged).
     */
    PaginationService.prototype.register = function (instance) {
        if (instance.id == null) {
            instance.id = this.DEFAULT_ID;
        }
        if (!this.instances[instance.id]) {
            this.instances[instance.id] = instance;
            return true;
        }
        else {
            return this.updateInstance(instance);
        }
    };
    /**
     * Check each property of the instance and update any that have changed. Return
     * true if any changes were made, else return false.
     */
    PaginationService.prototype.updateInstance = function (instance) {
        var changed = false;
        for (var prop in this.instances[instance.id]) {
            if (instance[prop] !== this.instances[instance.id][prop]) {
                this.instances[instance.id][prop] = instance[prop];
                changed = true;
            }
        }
        return changed;
    };
    /**
     * Returns the current page number.
     */
    PaginationService.prototype.getCurrentPage = function (id) {
        if (this.instances[id]) {
            return this.instances[id].currentPage;
        }
    };
    /**
     * Sets the current page number.
     */
    PaginationService.prototype.setCurrentPage = function (id, page) {
        if (this.instances[id]) {
            var instance = this.instances[id];
            var maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);
            if (page <= maxPage && 1 <= page) {
                this.instances[id].currentPage = page;
                this.change.emit(id);
            }
        }
    };
    /**
     * Sets the value of instance.totalItems
     */
    PaginationService.prototype.setTotalItems = function (id, totalItems) {
        if (this.instances[id] && 0 <= totalItems) {
            this.instances[id].totalItems = totalItems;
            this.change.emit(id);
        }
    };
    /**
     * Sets the value of instance.itemsPerPage.
     */
    PaginationService.prototype.setItemsPerPage = function (id, itemsPerPage) {
        if (this.instances[id]) {
            this.instances[id].itemsPerPage = itemsPerPage;
            this.change.emit(id);
        }
    };
    /**
     * Returns a clone of the pagination instance object matching the id. If no
     * id specified, returns the instance corresponding to the default id.
     */
    PaginationService.prototype.getInstance = function (id) {
        if (id === void 0) { id = this.DEFAULT_ID; }
        if (this.instances[id]) {
            return this.clone(this.instances[id]);
        }
        return {};
    };
    /**
     * Perform a shallow clone of an object.
     */
    PaginationService.prototype.clone = function (obj) {
        var target = {};
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                target[i] = obj[i];
            }
        }
        return target;
    };
    return PaginationService;
}());

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var LARGE_NUMBER = Number.MAX_SAFE_INTEGER;
var PaginatePipe = /** @class */ (function () {
    function PaginatePipe(service) {
        this.service = service;
        // store the values from the last time the pipe was invoked
        this.state = {};
    }
    PaginatePipe.prototype.transform = function (collection, args) {
        // When an observable is passed through the AsyncPipe, it will output
        // `null` until the subscription resolves. In this case, we want to
        // use the cached data from the `state` object to prevent the NgFor
        // from flashing empty until the real values arrive.
        if (!(collection instanceof Array)) {
            var _id = args.id || this.service.defaultId();
            if (this.state[_id]) {
                return this.state[_id].slice;
            }
            else {
                return collection;
            }
        }
        var serverSideMode = args.totalItems && args.totalItems !== collection.length;
        var instance = this.createInstance(collection, args);
        var id = instance.id;
        var start, end;
        var perPage = instance.itemsPerPage;
        var emitChange = this.service.register(instance);
        if (!serverSideMode && collection instanceof Array) {
            perPage = +perPage || LARGE_NUMBER;
            start = (instance.currentPage - 1) * perPage;
            end = start + perPage;
            var isIdentical = this.stateIsIdentical(id, collection, start, end);
            if (isIdentical) {
                return this.state[id].slice;
            }
            else {
                var slice = collection.slice(start, end);
                this.saveState(id, collection, slice, start, end);
                this.service.change.emit(id);
                return slice;
            }
        }
        else {
            if (emitChange) {
                this.service.change.emit(id);
            }
            // save the state for server-side collection to avoid null
            // flash as new data loads.
            this.saveState(id, collection, collection, start, end);
            return collection;
        }
    };
    /**
     * Create an PaginationInstance object, using defaults for any optional properties not supplied.
     */
    PaginatePipe.prototype.createInstance = function (collection, config) {
        this.checkConfig(config);
        return {
            id: config.id != null ? config.id : this.service.defaultId(),
            itemsPerPage: +config.itemsPerPage || 0,
            currentPage: +config.currentPage || 1,
            totalItems: +config.totalItems || collection.length
        };
    };
    /**
     * Ensure the argument passed to the filter contains the required properties.
     */
    PaginatePipe.prototype.checkConfig = function (config) {
        var required = ['itemsPerPage', 'currentPage'];
        var missing = required.filter(function (prop) { return !(prop in config); });
        if (0 < missing.length) {
            throw new Error("PaginatePipe: Argument is missing the following required properties: " + missing.join(', '));
        }
    };
    /**
     * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
     * array for a given id. This means that the next time the pipe is run on this collection & id, we just
     * need to check that the collection, start and end points are all identical, and if so, return the
     * last sliced array.
     */
    PaginatePipe.prototype.saveState = function (id, collection, slice, start, end) {
        this.state[id] = {
            collection: collection,
            size: collection.length,
            slice: slice,
            start: start,
            end: end
        };
    };
    /**
     * For a given id, returns true if the collection, size, start and end values are identical.
     */
    PaginatePipe.prototype.stateIsIdentical = function (id, collection, start, end) {
        var state = this.state[id];
        if (!state) {
            return false;
        }
        var isMetaDataIdentical = state.size === collection.length &&
            state.start === start &&
            state.end === end;
        if (!isMetaDataIdentical) {
            return false;
        }
        return state.slice.every(function (element, index) { return element === collection[start + index]; });
    };
    PaginatePipe = __decorate$1([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'paginate',
            pure: false
        }),
        __metadata("design:paramtypes", [PaginationService])
    ], PaginatePipe);
    return PaginatePipe;
}());

/**
 * The default template and styles for the pagination links are borrowed directly
 * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
 */
var DEFAULT_TEMPLATE = "\n    <pagination-template  #p=\"paginationApi\"\n                         [id]=\"id\"\n                         [maxSize]=\"maxSize\"\n                         (pageChange)=\"pageChange.emit($event)\"\n                         (pageBoundsCorrection)=\"pageBoundsCorrection.emit($event)\">\n    <ul class=\"ngx-pagination\" \n        role=\"navigation\" \n        [attr.aria-label]=\"screenReaderPaginationLabel\" \n        [class.responsive]=\"responsive\"\n        *ngIf=\"!(autoHide && p.pages.length <= 1)\">\n\n        <li class=\"pagination-previous\" [class.disabled]=\"p.isFirstPage()\" *ngIf=\"directionLinks\"> \n            <a tabindex=\"0\" *ngIf=\"1 < p.getCurrent()\" (keyup.enter)=\"p.previous()\" (click)=\"p.previous()\" [attr.aria-label]=\"previousLabel + ' ' + screenReaderPageLabel\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isFirstPage()\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li> \n\n        <li class=\"small-screen\">\n            {{ p.getCurrent() }} / {{ p.getLastPage() }}\n        </li>\n\n        <li [class.current]=\"p.getCurrent() === page.value\" \n            [class.ellipsis]=\"page.label === '...'\"\n            *ngFor=\"let page of p.pages\">\n            <a tabindex=\"0\" (keyup.enter)=\"p.setCurrent(page.value)\" (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderPageLabel }} </span>\n                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span>\n            </a>\n            <ng-container *ngIf=\"p.getCurrent() === page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderCurrentLabel }} </span>\n                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span> \n            </ng-container>\n        </li>\n\n        <li class=\"pagination-next\" [class.disabled]=\"p.isLastPage()\" *ngIf=\"directionLinks\">\n            <a tabindex=\"0\" *ngIf=\"!p.isLastPage()\" (keyup.enter)=\"p.next()\" (click)=\"p.next()\" [attr.aria-label]=\"nextLabel + ' ' + screenReaderPageLabel\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isLastPage()\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n    </ul>\n    </pagination-template>\n    ";
var DEFAULT_STYLES = "\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\u00AB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\u00BB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  ";

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function coerceToBoolean(input) {
    return !!input && input !== 'false';
}
/**
 * The default pagination controls component. Actually just a default implementation of a custom template.
 */
var PaginationControlsComponent = /** @class */ (function () {
    function PaginationControlsComponent() {
        this.maxSize = 7;
        this.previousLabel = 'Previous';
        this.nextLabel = 'Next';
        this.screenReaderPaginationLabel = 'Pagination';
        this.screenReaderPageLabel = 'page';
        this.screenReaderCurrentLabel = "You're on page";
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageBoundsCorrection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._directionLinks = true;
        this._autoHide = false;
        this._responsive = false;
    }
    Object.defineProperty(PaginationControlsComponent.prototype, "directionLinks", {
        get: function () {
            return this._directionLinks;
        },
        set: function (value) {
            this._directionLinks = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "autoHide", {
        get: function () {
            return this._autoHide;
        },
        set: function (value) {
            this._autoHide = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "responsive", {
        get: function () {
            return this._responsive;
        },
        set: function (value) {
            this._responsive = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "id", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", Number)
    ], PaginationControlsComponent.prototype, "maxSize", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", Boolean),
        __metadata$1("design:paramtypes", [Boolean])
    ], PaginationControlsComponent.prototype, "directionLinks", null);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", Boolean),
        __metadata$1("design:paramtypes", [Boolean])
    ], PaginationControlsComponent.prototype, "autoHide", null);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", Boolean),
        __metadata$1("design:paramtypes", [Boolean])
    ], PaginationControlsComponent.prototype, "responsive", null);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "previousLabel", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "nextLabel", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "screenReaderPaginationLabel", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "screenReaderPageLabel", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "screenReaderCurrentLabel", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata$1("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PaginationControlsComponent.prototype, "pageChange", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata$1("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PaginationControlsComponent.prototype, "pageBoundsCorrection", void 0);
    PaginationControlsComponent = __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pagination-controls',
            template: DEFAULT_TEMPLATE,
            styles: [DEFAULT_STYLES],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        })
    ], PaginationControlsComponent);
    return PaginationControlsComponent;
}());

var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * This directive is what powers all pagination controls components, including the default one.
 * It exposes an API which is hooked up to the PaginationService to keep the PaginatePipe in sync
 * with the pagination controls.
 */
var PaginationControlsDirective = /** @class */ (function () {
    function PaginationControlsDirective(service, changeDetectorRef) {
        var _this = this;
        this.service = service;
        this.changeDetectorRef = changeDetectorRef;
        this.maxSize = 7;
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageBoundsCorrection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pages = [];
        this.changeSub = this.service.change
            .subscribe(function (id) {
            if (_this.id === id) {
                _this.updatePageLinks();
                _this.changeDetectorRef.markForCheck();
                _this.changeDetectorRef.detectChanges();
            }
        });
    }
    PaginationControlsDirective.prototype.ngOnInit = function () {
        if (this.id === undefined) {
            this.id = this.service.defaultId();
        }
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnChanges = function (changes) {
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnDestroy = function () {
        this.changeSub.unsubscribe();
    };
    /**
     * Go to the previous page
     */
    PaginationControlsDirective.prototype.previous = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() - 1);
    };
    /**
     * Go to the next page
     */
    PaginationControlsDirective.prototype.next = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() + 1);
    };
    /**
     * Returns true if current page is first page
     */
    PaginationControlsDirective.prototype.isFirstPage = function () {
        return this.getCurrent() === 1;
    };
    /**
     * Returns true if current page is last page
     */
    PaginationControlsDirective.prototype.isLastPage = function () {
        return this.getLastPage() === this.getCurrent();
    };
    /**
     * Set the current page number.
     */
    PaginationControlsDirective.prototype.setCurrent = function (page) {
        this.pageChange.emit(page);
    };
    /**
     * Get the current page number.
     */
    PaginationControlsDirective.prototype.getCurrent = function () {
        return this.service.getCurrentPage(this.id);
    };
    /**
     * Returns the last page number
     */
    PaginationControlsDirective.prototype.getLastPage = function () {
        var inst = this.service.getInstance(this.id);
        if (inst.totalItems < 1) {
            // when there are 0 or fewer (an error case) items, there are no "pages" as such,
            // but it makes sense to consider a single, empty page as the last page.
            return 1;
        }
        return Math.ceil(inst.totalItems / inst.itemsPerPage);
    };
    PaginationControlsDirective.prototype.getTotalItems = function () {
        return this.service.getInstance(this.id).totalItems;
    };
    PaginationControlsDirective.prototype.checkValidId = function () {
        if (this.service.getInstance(this.id).id == null) {
            console.warn("PaginationControlsDirective: the specified id \"" + this.id + "\" does not match any registered PaginationInstance");
        }
    };
    /**
     * Updates the page links and checks that the current page is valid. Should run whenever the
     * PaginationService.change stream emits a value matching the current ID, or when any of the
     * input values changes.
     */
    PaginationControlsDirective.prototype.updatePageLinks = function () {
        var _this = this;
        var inst = this.service.getInstance(this.id);
        var correctedCurrentPage = this.outOfBoundCorrection(inst);
        if (correctedCurrentPage !== inst.currentPage) {
            setTimeout(function () {
                _this.pageBoundsCorrection.emit(correctedCurrentPage);
                _this.pages = _this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, _this.maxSize);
            });
        }
        else {
            this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
        }
    };
    /**
     * Checks that the instance.currentPage property is within bounds for the current page range.
     * If not, return a correct value for currentPage, or the current value if OK.
     */
    PaginationControlsDirective.prototype.outOfBoundCorrection = function (instance) {
        var totalPages = Math.ceil(instance.totalItems / instance.itemsPerPage);
        if (totalPages < instance.currentPage && 0 < totalPages) {
            return totalPages;
        }
        else if (instance.currentPage < 1) {
            return 1;
        }
        return instance.currentPage;
    };
    /**
     * Returns an array of Page objects to use in the pagination controls.
     */
    PaginationControlsDirective.prototype.createPageArray = function (currentPage, itemsPerPage, totalItems, paginationRange) {
        // paginationRange could be a string if passed from attribute, so cast to number.
        paginationRange = +paginationRange;
        var pages = [];
        var totalPages = Math.ceil(totalItems / itemsPerPage);
        var halfWay = Math.ceil(paginationRange / 2);
        var isStart = currentPage <= halfWay;
        var isEnd = totalPages - halfWay < currentPage;
        var isMiddle = !isStart && !isEnd;
        var ellipsesNeeded = paginationRange < totalPages;
        var i = 1;
        while (i <= totalPages && i <= paginationRange) {
            var label = void 0;
            var pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
            var openingEllipsesNeeded = (i === 2 && (isMiddle || isEnd));
            var closingEllipsesNeeded = (i === paginationRange - 1 && (isMiddle || isStart));
            if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                label = '...';
            }
            else {
                label = pageNumber;
            }
            pages.push({
                label: label,
                value: pageNumber
            });
            i++;
        }
        return pages;
    };
    /**
     * Given the position in the sequence of pagination links [i],
     * figure out what page number corresponds to that position.
     */
    PaginationControlsDirective.prototype.calculatePageNumber = function (i, currentPage, paginationRange, totalPages) {
        var halfWay = Math.ceil(paginationRange / 2);
        if (i === paginationRange) {
            return totalPages;
        }
        else if (i === 1) {
            return i;
        }
        else if (paginationRange < totalPages) {
            if (totalPages - halfWay < currentPage) {
                return totalPages - paginationRange + i;
            }
            else if (halfWay < currentPage) {
                return currentPage - halfWay + i;
            }
            else {
                return i;
            }
        }
        else {
            return i;
        }
    };
    __decorate$3([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$2("design:type", String)
    ], PaginationControlsDirective.prototype, "id", void 0);
    __decorate$3([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$2("design:type", Number)
    ], PaginationControlsDirective.prototype, "maxSize", void 0);
    __decorate$3([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata$2("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PaginationControlsDirective.prototype, "pageChange", void 0);
    __decorate$3([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata$2("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PaginationControlsDirective.prototype, "pageBoundsCorrection", void 0);
    PaginationControlsDirective = __decorate$3([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: 'pagination-template,[pagination-template]',
            exportAs: 'paginationApi'
        }),
        __metadata$2("design:paramtypes", [PaginationService,
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], PaginationControlsDirective);
    return PaginationControlsDirective;
}());

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NgxPaginationModule = /** @class */ (function () {
    function NgxPaginationModule() {
    }
    NgxPaginationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [
                PaginatePipe,
                PaginationControlsComponent,
                PaginationControlsDirective
            ],
            providers: [PaginationService],
            exports: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]
        })
    ], NgxPaginationModule);
    return NgxPaginationModule;
}());

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "./node_modules/ngx-pagination/dist/ngx-pagination.ngfactory.js":
/*!**********************************************************************!*\
  !*** ./node_modules/ngx-pagination/dist/ngx-pagination.ngfactory.js ***!
  \**********************************************************************/
/*! exports provided: NgxPaginationModuleNgFactory, RenderType_PaginationControlsComponent, View_PaginationControlsComponent_0, View_PaginationControlsComponent_Host_0, PaginationControlsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPaginationModuleNgFactory", function() { return NgxPaginationModuleNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_PaginationControlsComponent", function() { return RenderType_PaginationControlsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PaginationControlsComponent_0", function() { return View_PaginationControlsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PaginationControlsComponent_Host_0", function() { return View_PaginationControlsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationControlsComponentNgFactory", function() { return PaginationControlsComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var NgxPaginationModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](ngx_pagination__WEBPACK_IMPORTED_MODULE_1__["NgxPaginationModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_pagination__WEBPACK_IMPORTED_MODULE_1__["PaginationService"], ngx_pagination__WEBPACK_IMPORTED_MODULE_1__["PaginationService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_pagination__WEBPACK_IMPORTED_MODULE_1__["NgxPaginationModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_1__["NgxPaginationModule"], [])]); });

var styles_PaginationControlsComponent = ["\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\u00AB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\u00BB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  "];
var RenderType_PaginationControlsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_PaginationControlsComponent, data: {} });

function View_PaginationControlsComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "a", [["tabindex", "0"]], [[1, "aria-label", 0]], [[null, "keyup.enter"], [null, "click"]], function (_v, en, $event) { var ad = true; if (("keyup.enter" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent.parent, 2).previous() !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent.parent, 2).previous() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "span", [["class", "show-for-sr"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.previousLabel + " ") + _co.screenReaderPageLabel); _ck(_v, 0, 0, currVal_0); var currVal_1 = _co.previousLabel; _ck(_v, 1, 0, currVal_1); var currVal_2 = _co.screenReaderPageLabel; _ck(_v, 3, 0, currVal_2); }); }
function View_PaginationControlsComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "span", [["class", "show-for-sr"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.previousLabel; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.screenReaderPageLabel; _ck(_v, 3, 0, currVal_1); }); }
function View_PaginationControlsComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "li", [["class", "pagination-previous"]], [[2, "disabled", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_PaginationControlsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_PaginationControlsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_1 = (1 < _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent, 2).getCurrent()); _ck(_v, 2, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent, 2).isFirstPage(); _ck(_v, 4, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent, 2).isFirstPage(); _ck(_v, 0, 0, currVal_0); }); }
function View_PaginationControlsComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "a", [["tabindex", "0"]], null, [[null, "keyup.enter"], [null, "click"]], function (_v, en, $event) { var ad = true; if (("keyup.enter" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent.parent, 2).setCurrent(_v.parent.context.$implicit.value) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent.parent, 2).setCurrent(_v.parent.context.$implicit.value) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "span", [["class", "show-for-sr"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, null, ["", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](4, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](5, 2)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.screenReaderPageLabel; _ck(_v, 2, 0, currVal_0); var currVal_1 = ((_v.parent.context.$implicit.label === "...") ? _v.parent.context.$implicit.label : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent.parent, 0), _v.parent.context.$implicit.label, ""))); _ck(_v, 4, 0, currVal_1); }); }
function View_PaginationControlsComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "span", [["class", "show-for-sr"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, null, ["", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](4, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](5, 2)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.screenReaderCurrentLabel; _ck(_v, 2, 0, currVal_0); var currVal_1 = ((_v.parent.context.$implicit.label === "...") ? _v.parent.context.$implicit.label : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent.parent, 0), _v.parent.context.$implicit.label, ""))); _ck(_v, 4, 0, currVal_1); }); }
function View_PaginationControlsComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "li", [], [[2, "current", null], [2, "ellipsis", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_PaginationControlsComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_PaginationControlsComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent, 2).getCurrent() !== _v.context.$implicit.value); _ck(_v, 2, 0, currVal_2); var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent, 2).getCurrent() === _v.context.$implicit.value); _ck(_v, 4, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent, 2).getCurrent() === _v.context.$implicit.value); var currVal_1 = (_v.context.$implicit.label === "..."); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_PaginationControlsComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "a", [["tabindex", "0"]], [[1, "aria-label", 0]], [[null, "keyup.enter"], [null, "click"]], function (_v, en, $event) { var ad = true; if (("keyup.enter" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent.parent, 2).next() !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent.parent, 2).next() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "span", [["class", "show-for-sr"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.nextLabel + " ") + _co.screenReaderPageLabel); _ck(_v, 0, 0, currVal_0); var currVal_1 = _co.nextLabel; _ck(_v, 1, 0, currVal_1); var currVal_2 = _co.screenReaderPageLabel; _ck(_v, 3, 0, currVal_2); }); }
function View_PaginationControlsComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "span", [["class", "show-for-sr"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.nextLabel; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.screenReaderPageLabel; _ck(_v, 3, 0, currVal_1); }); }
function View_PaginationControlsComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "li", [["class", "pagination-next"]], [[2, "disabled", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_PaginationControlsComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_PaginationControlsComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_1 = !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent, 2).isLastPage(); _ck(_v, 2, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent, 2).isLastPage(); _ck(_v, 4, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent, 2).isLastPage(); _ck(_v, 0, 0, currVal_0); }); }
function View_PaginationControlsComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 8, "ul", [["class", "ngx-pagination"], ["role", "navigation"]], [[1, "aria-label", 0], [2, "responsive", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_PaginationControlsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "li", [["class", "small-screen"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](4, null, [" ", " / ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_PaginationControlsComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_PaginationControlsComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.directionLinks; _ck(_v, 2, 0, currVal_2); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent, 2).pages; _ck(_v, 6, 0, currVal_5); var currVal_6 = _co.directionLinks; _ck(_v, 8, 0, currVal_6); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.screenReaderPaginationLabel; var currVal_1 = _co.responsive; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent, 2).getCurrent(); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent, 2).getLastPage(); _ck(_v, 4, 0, currVal_3, currVal_4); }); }
function View_PaginationControlsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 3, "pagination-template", [], null, [[null, "pageChange"], [null, "pageBoundsCorrection"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("pageChange" === en)) {
        var pd_0 = (_co.pageChange.emit($event) !== false);
        ad = (pd_0 && ad);
    } if (("pageBoundsCorrection" === en)) {
        var pd_1 = (_co.pageBoundsCorrection.emit($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 737280, [["p", 4]], 0, ngx_pagination__WEBPACK_IMPORTED_MODULE_1__["PaginationControlsDirective"], [ngx_pagination__WEBPACK_IMPORTED_MODULE_1__["PaginationService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { id: [0, "id"], maxSize: [1, "maxSize"] }, { pageChange: "pageChange", pageBoundsCorrection: "pageBoundsCorrection" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_PaginationControlsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.id; var currVal_1 = _co.maxSize; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = !(_co.autoHide && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).pages.length <= 1)); _ck(_v, 4, 0, currVal_2); }, null); }
function View_PaginationControlsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "pagination-controls", [], null, null, null, View_PaginationControlsComponent_0, RenderType_PaginationControlsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, ngx_pagination__WEBPACK_IMPORTED_MODULE_1__["PaginationControlsComponent"], [], null, null)], null, null); }
var PaginationControlsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("pagination-controls", ngx_pagination__WEBPACK_IMPORTED_MODULE_1__["PaginationControlsComponent"], View_PaginationControlsComponent_Host_0, { id: "id", maxSize: "maxSize", directionLinks: "directionLinks", autoHide: "autoHide", responsive: "responsive", previousLabel: "previousLabel", nextLabel: "nextLabel", screenReaderPaginationLabel: "screenReaderPaginationLabel", screenReaderPageLabel: "screenReaderPageLabel", screenReaderCurrentLabel: "screenReaderCurrentLabel" }, { pageChange: "pageChange", pageBoundsCorrection: "pageBoundsCorrection" }, []);



/***/ }),

/***/ "./src/app/pages/managment-company/add/add.component.ngfactory.js":
/*!************************************************************************!*\
  !*** ./src/app/pages/managment-company/add/add.component.ngfactory.js ***!
  \************************************************************************/
/*! exports provided: RenderType_AddComponent, View_AddComponent_0, View_AddComponent_Host_0, AddComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AddComponent", function() { return RenderType_AddComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AddComponent_0", function() { return View_AddComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AddComponent_Host_0", function() { return View_AddComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponentNgFactory", function() { return AddComponentNgFactory; });
/* harmony import */ var _add_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.component.scss.shim.ngstyle */ "./src/app/pages/managment-company/add/add.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../node_modules/@nebular/theme/index.ngfactory */ "./node_modules/@nebular/theme/index.ngfactory.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add.component */ "./src/app/pages/managment-company/add/add.component.ts");
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/company.service */ "./src/app/services/company.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var styles_AddComponent = [_add_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AddComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AddComponent, data: {} });

function View_AddComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "col-md-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "img", [["class", "avatar"]], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.company.avatar; _ck(_v, 1, 0, currVal_0); }); }
function View_AddComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "col-md-12 mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "row justify-content-between"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "p", [["class", "list-section-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" \u0648\u06CC\u0631\u0627\u06CC\u0634 \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0634\u0631\u06A9\u062A ", " - ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 10, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 9, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "label", [["class", "label"], ["for", "version"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u062A\u0648\u0636\u06CC\u062D\u0627\u062A"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 6, "textarea", [["fullWidth", ""], ["id", "version"], ["nbInput", ""], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "input-full-width", null], [2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "shape-rectangle", null], [2, "shape-semi-round", null], [2, "shape-round", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.company.description = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbInputDirective"], [], { fullWidth: [0, "fullWidth"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 10, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 9, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 6, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 5, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 4, "div", [["class", "upload-avatar"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).click() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" \u0628\u0631\u0627\u06CC \u0627\u067E\u0644\u0648\u062F \u0646\u0645\u0627\u062F \u0627\u06CC\u0646\u062C\u0627 \u06A9\u0644\u06CC\u06A9 \u06A9\u0646\u06CC\u062F "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, [["file", 1]], null, 1, "input", [["style", "display:none;"], ["type", "file"]], [[8, "accept", 0]], [[null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_co.imageUpload($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](24, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AddComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 9, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 8, "div", [["class", "row justify-content-end"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 4, "button", [["class", "ml-3 btn-cancel action-btn-width"], ["hero", ""], ["nbButton", ""]], [[2, "appearance-filled", null], [2, "appearance-outline", null], [2, "appearance-ghost", null], [2, "appearance-hero", null], [2, "full-width", null], [1, "aria-disabled", 0], [2, "btn-disabled", null], [1, "tabindex", 0], [2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "shape-rectangle", null], [2, "shape-round", null], [2, "shape-semi-round", null], [2, "icon-start", null], [2, "icon-end", null], [2, "transitions", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).onClick() !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).onClick($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_NbButtonComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_NbButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](31, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 4243456, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { hero: [0, "hero"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" \u0628\u0627\u0632\u06AF\u0634\u062A "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 2, "button", [["class", "action-btn-width"], ["hero", ""], ["nbButton", ""], ["status", "primary"]], [[2, "appearance-filled", null], [2, "appearance-outline", null], [2, "appearance-ghost", null], [2, "appearance-hero", null], [2, "full-width", null], [1, "aria-disabled", 0], [2, "btn-disabled", null], [1, "tabindex", 0], [2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "shape-rectangle", null], [2, "shape-round", null], [2, "shape-semi-round", null], [2, "icon-start", null], [2, "icon-end", null], [2, "transitions", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.save() !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_NbButtonComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_NbButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 4243456, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { status: [0, "status"], hero: [1, "hero"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" \u0630\u062E\u06CC\u0631\u0647 "]))], function (_ck, _v) { var _co = _v.component; var currVal_23 = _co.company.description; _ck(_v, 12, 0, currVal_23); var currVal_24 = ""; _ck(_v, 15, 0, currVal_24); var currVal_26 = _co.company.avatar; _ck(_v, 26, 0, currVal_26); var currVal_51 = _ck(_v, 31, 0, "/pages/company"); _ck(_v, 30, 0, currVal_51); var currVal_52 = ""; _ck(_v, 32, 0, currVal_52); var currVal_77 = "primary"; var currVal_78 = ""; _ck(_v, 35, 0, currVal_77, currVal_78); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.company.CoName; var currVal_1 = _co.company.CoTSESymbol; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassUntouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassTouched; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassPristine; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassDirty; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassValid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassInvalid; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassPending; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).fullWidth; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).tiny; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).small; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).medium; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).large; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).giant; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).primary; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).info; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).success; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).warning; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).danger; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).rectangle; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).semiRound; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).round; _ck(_v, 9, 1, [currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22]); var currVal_25 = _ck(_v, 24, 0, "image/png", "image/jpeg"); _ck(_v, 23, 0, currVal_25); var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).filled; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).outline; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ghost; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).hero; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).fullWidth; var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).disabled; var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).disabled; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).tabbable; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).tiny; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).small; var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).medium; var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).large; var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).giant; var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).primary; var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).info; var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).success; var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).warning; var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).danger; var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).rectangle; var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).round; var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).semiRound; var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).iconLeft; var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).iconRight; var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).transitions; _ck(_v, 29, 1, [currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50]); var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).filled; var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).outline; var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ghost; var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).hero; var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).fullWidth; var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).disabled; var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).disabled; var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).tabbable; var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).tiny; var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).small; var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).medium; var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).large; var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).giant; var currVal_66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).primary; var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).info; var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).success; var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).warning; var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).danger; var currVal_71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).rectangle; var currVal_72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).round; var currVal_73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).semiRound; var currVal_74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).iconLeft; var currVal_75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).iconRight; var currVal_76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).transitions; _ck(_v, 34, 1, [currVal_53, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61, currVal_62, currVal_63, currVal_64, currVal_65, currVal_66, currVal_67, currVal_68, currVal_69, currVal_70, currVal_71, currVal_72, currVal_73, currVal_74, currVal_75, currVal_76]); }); }
function View_AddComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ngx-add", [], null, null, null, View_AddComponent_0, RenderType_AddComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _add_component__WEBPACK_IMPORTED_MODULE_7__["AddComponent"], [_services_company_service__WEBPACK_IMPORTED_MODULE_8__["CompanyService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AddComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ngx-add", _add_component__WEBPACK_IMPORTED_MODULE_7__["AddComponent"], View_AddComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/managment-company/add/add.component.scss.shim.ngstyle.js":
/*!********************************************************************************!*\
  !*** ./src/app/pages/managment-company/add/add.component.scss.shim.ngstyle.js ***!
  \********************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".upload-avatar[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  border-radius: 8px;\n  box-shadow: 0px 2px 6px #DDDDDD;\n  background: white;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .upload-avatar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 10px; }\n    .autocomplete-container .input-container .x {\n  right: unset !important;\n  left: 10px !important; }\n  .avatar[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  border-radius: 8px; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZXllZG1haGRpL0RvY3VtZW50cy9Qcm9qZWN0cy9CaWxsaW9uZXIvU1cvc2ltcGx5d2FsbC1wYW5lbC9zcmMvYXBwL3BhZ2VzL21hbmFnbWVudC1jb21wYW55L2FkZC9hZGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCLEVBQUE7RUFSekI7SUFXSSxlQUFlLEVBQUE7RUFLbkI7RUFDRSx1QkFBc0I7RUFDdEIscUJBQW9CLEVBQUE7RUFHdEI7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWFuYWdtZW50LWNvbXBhbnkvYWRkL2FkZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cGxvYWQtYXZhdGFye1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggI0RERERERDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIHNwYW57XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG59XG5cblxuOjpuZy1kZWVwIC5hdXRvY29tcGxldGUtY29udGFpbmVyIC5pbnB1dC1jb250YWluZXIgLnh7XG4gIHJpZ2h0OiB1bnNldCFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDEwcHghaW1wb3J0YW50O1xufVxuXG4uYXZhdGFye1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbiJdfQ== */"];



/***/ }),

/***/ "./src/app/pages/managment-company/add/add.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/managment-company/add/add.component.ts ***!
  \**************************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/company.service */ "./src/app/services/company.service.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../list/list.component */ "./src/app/pages/managment-company/list/list.component.ts");




var AddComponent = /** @class */ (function () {
    function AddComponent(companyService, route, router) {
        this.companyService = companyService;
        this.route = route;
        this.router = router;
        this.company = new _list_list_component__WEBPACK_IMPORTED_MODULE_3__["CompanyList"]();
    }
    AddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            if (params['id']) {
                _this.companyService.getOne(params['id']).subscribe(function (res) {
                    if (res && res.isSuccessful) {
                        _this.company = res.data;
                    }
                });
            }
        });
    };
    AddComponent.prototype.save = function () {
        var _this = this;
        this.companyService.edit(this.company).subscribe(function (res) {
            if (res) {
                _this.router.navigateByUrl('pages/company');
            }
        });
    };
    AddComponent.prototype.imageUpload = function (event) {
        if (event.target.files[0] && event.target.files[0].size <= 2048000) {
            var reader_1 = new FileReader();
            reader_1.readAsDataURL(event.target.files[0]);
            var self_1 = this;
            reader_1.onload = function () {
                self_1.company.avatar = reader_1.result.toString();
            };
        }
    };
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/pages/managment-company/list/list.component.ngfactory.js":
/*!**************************************************************************!*\
  !*** ./src/app/pages/managment-company/list/list.component.ngfactory.js ***!
  \**************************************************************************/
/*! exports provided: RenderType_ListComponent, View_ListComponent_0, View_ListComponent_Host_0, ListComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ListComponent", function() { return RenderType_ListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ListComponent_0", function() { return View_ListComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ListComponent_Host_0", function() { return View_ListComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponentNgFactory", function() { return ListComponentNgFactory; });
/* harmony import */ var _list_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.component.scss.shim.ngstyle */ "./src/app/pages/managment-company/list/list.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _node_modules_ngx_pagination_dist_ngx_pagination_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../node_modules/ngx-pagination/dist/ngx-pagination.ngfactory */ "./node_modules/ngx-pagination/dist/ngx-pagination.ngfactory.js");
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list.component */ "./src/app/pages/managment-company/list/list.component.ts");
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/company.service */ "./src/app/services/company.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 










var styles_ListComponent = [_list_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ListComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ListComponent, data: {} });

function View_ListComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "img", [["class", "avatar"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 0, "img", [["src", "../../../../assets/images/action-btn/Edit_Icon.svg"], ["style", "cursor: pointer"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.edit(_v.context.$implicit._id) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.CoName; _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit.CoTSESymbol; _ck(_v, 4, 0, currVal_1); var currVal_2 = _v.context.$implicit.CoNameEnglish; _ck(_v, 6, 0, currVal_2); var currVal_3 = _v.context.$implicit.avatar; _ck(_v, 8, 0, currVal_3); }); }
function View_ListComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "row justify-content-between"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "p", [["class", "list-section-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" \u0645\u062F\u06CC\u0631\u06CC\u062A \u0634\u0631\u06A9\u062A \u0647\u0627 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 12, "div", [["class", "col-md-12 mt-3 mb-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 11, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 10, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "label", [["class", "label"], ["for", "exampleInputPass"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u062C\u0633\u062A\u062C\u0648 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0646\u0627\u0645 \u0634\u0631\u06A9\u062A \u06CC\u0627 \u0646\u0645\u0627\u062F"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 7, "input", [["fullWidth", ""], ["id", "exampleInputPass"], ["nbInput", ""], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "input-full-width", null], [2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "shape-rectangle", null], [2, "shape-semi-round", null], [2, "shape-round", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.filter = $event) !== false);
        ad = (pd_4 && ad);
    } if (("ngModelChange" === en)) {
        var pd_5 = (_co.changePage(0) !== false);
        ad = (pd_5 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"], options: [1, "options"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](13, { standalone: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbInputDirective"], [], { fullWidth: [0, "fullWidth"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 18, "div", [["class", "col-md-12 table-wrap mt-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 17, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 16, "table", [["class", "table"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 10, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 9, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u0646\u0627\u0645 \u0634\u0631\u06A9\u062A\t"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" \u0646\u0645\u0627\u062F "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u0646\u0627\u0645 \u0627\u0646\u06AF\u0644\u06CC\u0633\u06CC "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u0622\u0648\u0627\u062A\u0627\u0631 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 0, "th", [["class", "small-td"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 4, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 3, null, View_ListComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](34, { itemsPerPage: 0, currentPage: 1, totalItems: 2 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginatePipe"], [ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationService"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 3, "div", [["class", "col-md-12 pagination-wrap mt-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 2, "div", [["class", "row justify-content-center align-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 1, "pagination-controls", [["autoHide", "true"], ["directionLinks", "true"], ["maxSize", "9"], ["nextLabel", "\u0628\u0639\u062F\u06CC"], ["previousLabel", "\u0642\u0628\u0644\u06CC"], ["responsive", "true"], ["screenReaderCurrentLabel", "\u0635\u0641\u062D\u0647"], ["screenReaderPageLabel", "page"], ["screenReaderPaginationLabel", "Pagination"]], null, [[null, "pageChange"], [null, "pageBoundsCorrection"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("pageChange" === en)) {
        var pd_0 = (_co.pageChanged($event) !== false);
        ad = (pd_0 && ad);
    } if (("pageBoundsCorrection" === en)) {
        var pd_1 = (_co.pageChanged($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_ngx_pagination_dist_ngx_pagination_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_PaginationControlsComponent_0"], _node_modules_ngx_pagination_dist_ngx_pagination_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_PaginationControlsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 49152, null, 0, ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationControlsComponent"], [], { maxSize: [0, "maxSize"], directionLinks: [1, "directionLinks"], autoHide: [2, "autoHide"], responsive: [3, "responsive"], previousLabel: [4, "previousLabel"], nextLabel: [5, "nextLabel"], screenReaderPaginationLabel: [6, "screenReaderPaginationLabel"], screenReaderPageLabel: [7, "screenReaderPageLabel"], screenReaderCurrentLabel: [8, "screenReaderCurrentLabel"] }, { pageChange: "pageChange", pageBoundsCorrection: "pageBoundsCorrection" })], function (_ck, _v) { var _co = _v.component; var currVal_21 = _co.filter; var currVal_22 = _ck(_v, 13, 0, true); _ck(_v, 12, 0, currVal_21, currVal_22); var currVal_23 = ""; _ck(_v, 16, 0, currVal_23); var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 33, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).transform(_co.companyList, _ck(_v, 34, 0, 10, _co.page, _co.count))); _ck(_v, 33, 0, currVal_24); var currVal_25 = "9"; var currVal_26 = "true"; var currVal_27 = "true"; var currVal_28 = "true"; var currVal_29 = "\u0642\u0628\u0644\u06CC"; var currVal_30 = "\u0628\u0639\u062F\u06CC"; var currVal_31 = "Pagination"; var currVal_32 = "page"; var currVal_33 = "\u0635\u0641\u062D\u0647"; _ck(_v, 39, 0, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassPending; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).fullWidth; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).tiny; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).small; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).medium; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).large; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).giant; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).primary; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).info; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).success; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).warning; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).danger; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).rectangle; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).semiRound; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).round; _ck(_v, 9, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20]); }); }
function View_ListComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ngx-list", [], null, null, null, View_ListComponent_0, RenderType_ListComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _list_component__WEBPACK_IMPORTED_MODULE_7__["ListComponent"], [_services_company_service__WEBPACK_IMPORTED_MODULE_8__["CompanyService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ListComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ngx-list", _list_component__WEBPACK_IMPORTED_MODULE_7__["ListComponent"], View_ListComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/managment-company/list/list.component.scss.shim.ngstyle.js":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/managment-company/list/list.component.scss.shim.ngstyle.js ***!
  \**********************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".avatar[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 8px; }\n\n  .autocomplete-container .input-container .x {\n  right: unset !important;\n  left: 10px !important; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZXllZG1haGRpL0RvY3VtZW50cy9Qcm9qZWN0cy9CaWxsaW9uZXIvU1cvc2ltcGx5d2FsbC1wYW5lbC9zcmMvYXBwL3BhZ2VzL21hbmFnbWVudC1jb21wYW55L2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsdUJBQXNCO0VBQ3RCLHFCQUFvQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWFuYWdtZW50LWNvbXBhbnkvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF2YXRhcntcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG46Om5nLWRlZXAgLmF1dG9jb21wbGV0ZS1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciAueHtcbiAgcmlnaHQ6IHVuc2V0IWltcG9ydGFudDtcbiAgbGVmdDogMTBweCFpbXBvcnRhbnQ7XG59XG4iXX0= */"];



/***/ }),

/***/ "./src/app/pages/managment-company/list/list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/managment-company/list/list.component.ts ***!
  \****************************************************************/
/*! exports provided: ListComponent, CompanyList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyList", function() { return CompanyList; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/company.service */ "./src/app/services/company.service.ts");



var ListComponent = /** @class */ (function () {
    function ListComponent(companyService, router) {
        this.companyService = companyService;
        this.router = router;
        this.page = 0;
        this.filter = '';
        this.count = 0;
        this.companyList = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        this.getCompanyPagination(this.page, this.filter);
    };
    ListComponent.prototype.changePage = function (event) {
        this.page = event;
        this.getCompanyPagination(event, this.filter);
    };
    ListComponent.prototype.pageChanged = function (event) {
        this.page = event;
        this.getCompanyPagination(event, this.filter);
    };
    ListComponent.prototype.getCompanyPagination = function (page, filter) {
        var _this = this;
        this.companyService.getAll(page, filter).subscribe(function (res) {
            _this.count = res.totalDocs;
            _this.companyList = res.docs;
        });
    };
    ListComponent.prototype.edit = function (_id) {
        this.router.navigate(['pages/company/add'], { queryParams: { id: _id } });
    };
    return ListComponent;
}());

var CompanyList = /** @class */ (function () {
    function CompanyList() {
    }
    return CompanyList;
}());



/***/ }),

/***/ "./src/app/pages/managment-company/managment-company-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/managment-company/managment-company-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ManagmentCompanyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagmentCompanyRoutingModule", function() { return ManagmentCompanyRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/managment-company/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/managment-company/add/add.component.ts");



var routes = [
    { path: '', component: _list_list_component__WEBPACK_IMPORTED_MODULE_1__["ListComponent"] },
    { path: 'add', component: _add_add_component__WEBPACK_IMPORTED_MODULE_2__["AddComponent"] }
];
var ManagmentCompanyRoutingModule = /** @class */ (function () {
    function ManagmentCompanyRoutingModule() {
    }
    return ManagmentCompanyRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/managment-company/managment-company.module.ngfactory.js":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/managment-company/managment-company.module.ngfactory.js ***!
  \*******************************************************************************/
/*! exports provided: ManagmentCompanyModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagmentCompanyModuleNgFactory", function() { return ManagmentCompanyModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _managment_company_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./managment-company.module */ "./src/app/pages/managment-company/managment-company.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _list_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component.ngfactory */ "./src/app/pages/managment-company/list/list.component.ngfactory.js");
/* harmony import */ var _add_add_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add/add.component.ngfactory */ "./src/app/pages/managment-company/add/add.component.ngfactory.js");
/* harmony import */ var _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/@nebular/theme/index.ngfactory */ "./node_modules/@nebular/theme/index.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/company.service */ "./src/app/services/company.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _managment_company_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./managment-company-routing.module */ "./src/app/pages/managment-company/managment-company-routing.module.ts");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _nebular_security__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @nebular/security */ "./node_modules/@nebular/security/fesm5/index.js");
/* harmony import */ var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @nebular/eva-icons */ "./node_modules/@nebular/eva-icons/fesm5/index.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _shared_shared_routing_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../shared/shared-routing.module */ "./src/app/shared/shared-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! angular-ng-autocomplete */ "./node_modules/angular-ng-autocomplete/fesm5/angular-ng-autocomplete.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/managment-company/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/managment-company/add/add.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



























var ManagmentCompanyModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_managment_company_module__WEBPACK_IMPORTED_MODULE_1__["ManagmentCompanyModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _list_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ListComponentNgFactory"], _add_add_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["AddComponentNgFactory"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["NbSearchFieldComponentNgFactory"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["NbContextMenuComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbRestoreScrollTopHelper"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbRestoreScrollTopHelper"], [_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["ɵc"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["ɵd"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbSearchService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbSearchService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["PaginationService"], ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["PaginationService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _services_company_service__WEBPACK_IMPORTED_MODULE_13__["CompanyService"], _services_company_service__WEBPACK_IMPORTED_MODULE_13__["CompanyService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _managment_company_routing_module__WEBPACK_IMPORTED_MODULE_15__["ManagmentCompanyRoutingModule"], _managment_company_routing_module__WEBPACK_IMPORTED_MODULE_15__["ManagmentCompanyRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["ɵc"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["ɵc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbIconModule"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbIconLibraries"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbMenuModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbMenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbLayoutModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbLayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbBadgeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbBadgeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbUserModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbUserModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbActionsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbActionsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_16__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_16__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_17__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_17__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCdkMappingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCdkMappingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCdkAdapterModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCdkAdapterModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbOverlayModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbOverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbSearchModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbSearchModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbSidebarModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbSidebarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbContextMenuModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbContextMenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_security__WEBPACK_IMPORTED_MODULE_19__["NbSecurityModule"], _nebular_security__WEBPACK_IMPORTED_MODULE_19__["NbSecurityModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCheckboxModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_20__["NbEvaIconsModule"], _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_20__["NbEvaIconsModule"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbIconLibraries"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _theme_theme_module__WEBPACK_IMPORTED_MODULE_21__["ThemeModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_21__["ThemeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_routing_module__WEBPACK_IMPORTED_MODULE_22__["SharedRoutingModule"], _shared_shared_routing_module__WEBPACK_IMPORTED_MODULE_22__["SharedRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_23__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_23__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_24__["AutocompleteLibModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_24__["AutocompleteLibModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["NgxPaginationModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["NgxPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _managment_company_module__WEBPACK_IMPORTED_MODULE_1__["ManagmentCompanyModule"], _managment_company_module__WEBPACK_IMPORTED_MODULE_1__["ManagmentCompanyModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ROUTES"], function () { return [[{ path: "", component: _list_list_component__WEBPACK_IMPORTED_MODULE_25__["ListComponent"] }, { path: "add", component: _add_add_component__WEBPACK_IMPORTED_MODULE_26__["AddComponent"] }], []]; }, [])]); });



/***/ }),

/***/ "./src/app/pages/managment-company/managment-company.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/managment-company/managment-company.module.ts ***!
  \*********************************************************************/
/*! exports provided: ManagmentCompanyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagmentCompanyModule", function() { return ManagmentCompanyModule; });
var ManagmentCompanyModule = /** @class */ (function () {
    function ManagmentCompanyModule() {
    }
    return ManagmentCompanyModule;
}());



/***/ }),

/***/ "./src/app/services/company.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/company.service.ts ***!
  \*********************************************/
/*! exports provided: CompanyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyService", function() { return CompanyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _serivce_base2_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./serivce-base2.service */ "./src/app/services/serivce-base2.service.ts");



var CompanyService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CompanyService, _super);
    function CompanyService(_HttpClient) {
        var _this = _super.call(this) || this;
        _this._HttpClient = _HttpClient;
        _this._objectName = 'company/';
        return _this;
    }
    CompanyService.prototype.edit = function (object) {
        return this.putService("update", object);
    };
    CompanyService.prototype.getAll = function (page, filter) {
        return this.getService('getAll?page=' + page + (filter ? '&filter=' + filter : ''));
    };
    CompanyService.prototype.getOne = function (id) {
        return this.getService("get-one/" + id);
    };
    return CompanyService;
}(_serivce_base2_service__WEBPACK_IMPORTED_MODULE_2__["ServiceBase2"]));



/***/ }),

/***/ "./src/app/shared/shared-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/shared-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SharedRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedRoutingModule", function() { return SharedRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

var routes = [];
var SharedRoutingModule = /** @class */ (function () {
    function SharedRoutingModule() {
    }
    return SharedRoutingModule;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    return SharedModule;
}());



/***/ })

}]);
//# sourceMappingURL=managment-company-managment-company-module-ngfactory-es5.js.map