(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/AllComponents/calories/calories.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/AllComponents/calories/calories.component.ts ***!
  \**************************************************************/
/*! exports provided: CaloriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaloriesComponent", function() { return CaloriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Service/auth.service */ "./src/app/Service/auth.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function CaloriesComponent_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CaloriesComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CaloriesComponent_div_24_div_1_Template, 2, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r162.errors.required);
} }
function CaloriesComponent_div_30_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CaloriesComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CaloriesComponent_div_30_div_1_Template, 2, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r164 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r164.errors.required);
} }
function CaloriesComponent_div_36_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CaloriesComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CaloriesComponent_div_36_div_1_Template, 2, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r166 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r166.errors.required);
} }
class CaloriesComponent {
    constructor(router, authService, spinner) {
        this.router = router;
        this.authService = authService;
        this.spinner = spinner;
        this.NumDaysExercise = "medium";
        this.gender = "male";
        this.goal = "stability";
        this.show = false;
    }
    ngOnInit() {
        this.heroForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'weight': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.weight, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3),
            ]),
            'height': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.height, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(0),
            ]),
            'age': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.age, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(0),
            ]),
        });
        var widthscreen = window.matchMedia("(max-width: 600px)");
        this.MQ(widthscreen);
        if (window.matchMedia('(max-width: 600px)').matches) {
        }
        if (!localStorage.getItem('foo')) {
            localStorage.setItem('foo', 'no reload');
            location.reload();
        }
        else {
            localStorage.removeItem('foo');
        }
        document.getElementById('footer').style.width = "100%";
        document.getElementById('footer').style.marginLeft = "0%";
    }
    MQ(x) {
        if (x.matches) { // If media query matches
            $(".editecollapese").css({
                "margin-top": "38%",
                "margin-left": "-32%"
            });
        }
        else {
            $(".editecollapese").css({
                "margin-top": "0",
                "margin-left": "0"
            });
        }
    }
    //BMR = 66.5 + ( 13.75 × weight in kg ) + ( 5.003 × height in cm ) – ( 6.755 × age in years ) men
    //BMR = 655 + ( 9.563 × weight in kg ) + ( 1.850 × height in cm ) – ( 4.676 × age in years ) women
    ClaculateCalories() {
        if (this.gender == "male") {
            this.BMR = 66.5 + (13.75 * this.weight) + (5.003 * this.height) - (6.755 * this.age);
        }
        if (this.gender == "female") {
            this.BMR = 655 + (9.563 * this.weight) + (1.850 * this.height) - (4.676 * this.age);
        }
        if (this.NumDaysExercise == "low") {
            this.NumCalories = this.BMR * 1.53;
        }
        if (this.NumDaysExercise == "medium") {
            this.NumCalories = this.BMR * 1.76;
        }
        if (this.NumDaysExercise == "heigh") {
            this.NumCalories = this.BMR * 2.25;
        }
        if (this.goal == "fastgain") {
            this.NumCaloriesForGoal = this.NumCalories + 1000;
        }
        if (this.goal == "lowgain") {
            this.NumCaloriesForGoal = this.NumCalories + 500;
        }
        if (this.goal == "stability") {
            this.NumCaloriesForGoal = this.NumCalories;
        }
        if (this.goal == "lowloss") {
            this.NumCaloriesForGoal = this.NumCalories - 500;
        }
        if (this.goal == "fastloss") {
            this.NumCaloriesForGoal = this.NumCalories - 1000;
        }
        this.FinalResultForCal = Math.round(this.NumCaloriesForGoal);
        this.show = true;
        this.protein = this.weight * 2; // by gram
        var proteincal = this.protein * 4;
        var fatscal = (25 * this.FinalResultForCal) / 100;
        this.fats = fatscal / 9; // by gram
        var carbcal = this.FinalResultForCal - (proteincal + fatscal);
        this.carb = carbcal / 4; // by gram
        this.percentageForBody = {
            "ReqCalories": Math.floor(this.FinalResultForCal),
            "protein": Math.floor(this.protein),
            "fats": Math.floor(this.fats),
            "carb": Math.floor(this.carb)
        };
        this.authService.percentageForBody(localStorage.getItem("iduser"), this.percentageForBody);
        this.spinner.show();
        setTimeout(() => {
            this.spinner.hide();
        }, 2000);
    }
}
CaloriesComponent.ɵfac = function CaloriesComponent_Factory(t) { return new (t || CaloriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"])); };
CaloriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CaloriesComponent, selectors: [["app-calories"]], decls: 70, vars: 11, consts: [["Form", "ngForm"], [1, "container"], [1, "text-center", "CalculateYourCalories"], [1, "col-sm-12"], [1, "row"], [1, "form-check-label", "col-sm-2"], [1, "form-check", "col-sm-4"], ["type", "radio", "name", "exampleRadios2", "id", "exampleRadios1", "value", "male", "checked", "", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "exampleRadios1", 1, "form-check-label"], ["type", "radio", "name", "exampleRadios1", "id", "exampleRadios2", "value", "female", "checked", "", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "exampleRadios2", 1, "form-check-label"], [1, "col-12"], [1, "form-group", "col-12", "col-md-4"], ["for", "age"], ["type", "text", "required", "", "id", "inputAddress", "name", "age", "placeholder", "Age", 1, "form-control", 3, "ngModel", "ngModelChange"], ["agee", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "weight"], ["type", "text", "required", "", "id", "inputAddress2", "name", "weight", "placeholder", "Weight By kg", 1, "form-control", 3, "ngModel", "ngModelChange"], ["weightt", "ngModel"], ["for", "height"], ["type", "text", "required", "", "id", "inputAddress2", "name", "height", "placeholder", "Height", 1, "form-control", 3, "ngModel", "ngModelChange"], ["heightt", "ngModel"], [1, "form-group", "col-md-6", "col-12"], ["for", "inputState Activity"], ["id", "inputStatee", "name", "dayss", 1, "form-control", 3, "ngModel", "ngModelChange"], ["disabled", ""], ["value", "low"], ["value", "medium"], ["value", "heigh"], ["id", "inputState", "name", "days", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "fastgain"], ["value", "lowgain"], ["value", "stability"], ["value", "lowloss"], ["value", "fastloss"], [1, "text-center"], ["type", "submit", 1, "btn", "cal", 3, "disabled", "click"], [1, "alert", "alert-danger"], [4, "ngIf"]], template: function CaloriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Calculate Your Calories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Gender: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CaloriesComponent_Template_input_ngModelChange_10_listener($event) { return ctx.gender = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Male ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CaloriesComponent_Template_input_ngModelChange_14_listener($event) { return ctx.gender = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Female ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Age:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CaloriesComponent_Template_input_ngModelChange_22_listener($event) { return ctx.age = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CaloriesComponent_div_24_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Weight:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CaloriesComponent_Template_input_ngModelChange_28_listener($event) { return ctx.weight = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, CaloriesComponent_div_30_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Height:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CaloriesComponent_Template_input_ngModelChange_34_listener($event) { return ctx.height = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, CaloriesComponent_div_36_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Activity Level:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CaloriesComponent_Template_select_ngModelChange_42_listener($event) { return ctx.NumDaysExercise = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Choose...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Exercise 1 to 3 Days A Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Exercise 3 to 5 Days A Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Exercise 5 to 7 Days A Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Your Goal : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "select", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CaloriesComponent_Template_select_ngModelChange_54_listener($event) { return ctx.goal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Choose...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Gain Weight Fast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Gain Weight Low");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Stability On Weight");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Loss Weight Low");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Loss Weight Fast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CaloriesComponent_Template_button_click_68_listener() { return ctx.ClaculateCalories(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Calculate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r161 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        const _r162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
        const _r164 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
        const _r166 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.gender);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.gender);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.age);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r162.invalid && (_r162.dirty || _r162.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.weight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r164.invalid && (_r164.dirty || _r164.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.height);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r166.invalid && (_r166.dirty || _r166.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.NumDaysExercise);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.goal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r161.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: ["[_ngcontent-%COMP%]:root {\n  --maincolor: var(--maincolor);\n}\n\n.col-12[_ngcontent-%COMP%] {\n  margin: 0.5% 0;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\nform[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 4%;\n  padding: 4% 12%;\n  overflow: hidden;\n}\n\nform[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  background: #f3f3f3;\n  border-radius: 30px;\n  padding: 4%;\n}\n\nform[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 6%;\n  margin-top: 0;\n  color: var(--maincolor);\n}\n\nform[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  padding-bottom: 2%;\n}\n\nform[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .Activity[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\nform[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cal[_ngcontent-%COMP%] {\n  background-color: var(--maincolor);\n  color: white;\n  width: 55%;\n  padding: 1.3%;\n}\n\n.result[_ngcontent-%COMP%] {\n  font-size: 35px;\n  color: var(--maincolor);\n  margin-top: 4%;\n  margin-left: 20%;\n}\n\n.BtnDiet[_ngcontent-%COMP%] {\n  background-color: var(--maincolor);\n  margin-top: 4.5%;\n  color: white;\n  margin-left: 5%;\n  width: 25%;\n}\n\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  form[_ngcontent-%COMP%] {\n    margin-top: 12% !important;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  form[_ngcontent-%COMP%] {\n    margin-top: 20% !important;\n    padding: 4% 1%;\n  }\n  form[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    padding-left: 35px !important;\n    padding-right: 35px !important;\n  }\n  form[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .col-sm-4[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .col-sm-2[_ngcontent-%COMP%] {\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n}\n\n@media only screen and (max-width: 499px) {\n  form[_ngcontent-%COMP%] {\n    margin-top: 20% !important;\n  }\n  form[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .CalculateYourCalories[_ngcontent-%COMP%] {\n    font-size: 1.7em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWxsQ29tcG9uZW50cy9jYWxvcmllcy9DOlxcVXNlcnNcXGNvbXBhXFxEb3dubG9hZHNcXGdpdGh1YiBwcm9qZWN0c1xcQmUtRml0XFxCZUZpdC9zcmNcXGFwcFxcQWxsQ29tcG9uZW50c1xcY2Fsb3JpZXNcXGNhbG9yaWVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9BbGxDb21wb25lbnRzL2NhbG9yaWVzL2NhbG9yaWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksNkJBQUE7QUNBSjs7QURFQTtFQUFRLGNBQUE7QUNFUjs7QUREQTtFQUFNLGlCQUFBO0FDS047O0FESkE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ09KOztBRE5JO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNRUjs7QURQUTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDU1o7O0FEUFE7RUFDSSxrQkFBQTtBQ1NaOztBRE5RO0VBQ0ksZUFBQTtBQ1FaOztBRE5RO0VBQ0ksa0NBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUNRWjs7QURIQTtFQUNJLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ01KOztBREpBO0VBQ0ksa0NBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQ09KOztBRE1BO0VBRUk7SUFFSSwwQkFBQTtFQ0xOO0FBQ0Y7O0FEV0E7RUFFSTtJQUVJLDBCQUFBO0lBQ0EsY0FBQTtFQ1hOO0VEWU07SUFFSSw2QkFBQTtJQUNBLDhCQUFBO0VDWFY7RURZVTtJQUVJLG9CQUFBO0lBQ0EscUJBQUE7RUNYZDtBQUNGOztBRG1CQTtFQUVJO0lBRUksMEJBQUE7RUNuQk47RURzQk87SUFFSSxnQkFBQTtFQ3JCWDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvQWxsQ29tcG9uZW50cy9jYWxvcmllcy9jYWxvcmllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290e1xyXG4gICAgXHJcbiAgICAtLW1haW5jb2xvcjogdmFyKC0tbWFpbmNvbG9yKTtcclxufSBcclxuLmNvbC0xMnttYXJnaW46IDAuNSUgMDt9XHJcbmxhYmVse2ZvbnQtd2VpZ2h0OiBib2xkO31cclxuZm9ybXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogNCU7XHJcbiAgICBwYWRkaW5nOiA0JSAxMiU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgcGFkZGluZzogNCU7XHJcbiAgICAgICAgaDF7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDYlO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICBjb2xvcjp2YXIoLS1tYWluY29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9ybS1jaGVjaywuZm9ybS1ncm91cHtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIlO1xyXG4gICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5BY3Rpdml0eXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2Fse1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLW1haW5jb2xvcik7IFxyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1NSU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuMyU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICB9XHJcbn1cclxuLnJlc3VsdHtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIGNvbG9yOiB2YXIoLS1tYWluY29sb3IpO1xyXG4gICAgbWFyZ2luLXRvcDogNCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG59XHJcbi5CdG5EaWV0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbmNvbG9yKTtcclxuICAgIG1hcmdpbi10b3A6IDQuNSU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICB3aWR0aDogMjUlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweClcclxue1xyXG5cclxuXHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweClcclxue1xyXG4gICAgXHJcblxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweClcclxue1xyXG4gICAgZm9ybVxyXG4gICAge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEyJSAhaW1wb3J0YW50O1xyXG5cclxuICAgIH1cclxuICBcclxuXHJcblxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIFxyXG57XHJcbiAgICBmb3JtXHJcbiAgICB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogNCUgMSU7XHJcbiAgICAgICAgLmNvbnRhaW5lclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjM1cHggIWltcG9ydGFudCA7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6MzVweCAhaW1wb3J0YW50IDtcclxuICAgICAgICAgICAgLmNvbC1zbS00LC5jb2wtc20tMlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmbGV4OiAwIDAgMzMuMzMzMzMzJTtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzMuMzMzMzMzJTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gXHJcblxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDk5cHgpIFxyXG57XHJcbiAgICBmb3JtXHJcbiAgICB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLmNvbnRhaW5lclxyXG4gICAgICAgIHtcclxuICAgICAgICAgLkNhbGN1bGF0ZVlvdXJDYWxvcmllc1xyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgICBmb250LXNpemU6IDEuN2VtO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuIFxyXG5cclxufSIsIjpyb290IHtcbiAgLS1tYWluY29sb3I6IHZhcigtLW1haW5jb2xvcik7XG59XG5cbi5jb2wtMTIge1xuICBtYXJnaW46IDAuNSUgMDtcbn1cblxubGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiA0JTtcbiAgcGFkZGluZzogNCUgMTIlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuZm9ybSAuY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgcGFkZGluZzogNCU7XG59XG5mb3JtIC5jb250YWluZXIgaDEge1xuICBtYXJnaW4tYm90dG9tOiA2JTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgY29sb3I6IHZhcigtLW1haW5jb2xvcik7XG59XG5mb3JtIC5jb250YWluZXIgLmZvcm0tY2hlY2ssIGZvcm0gLmNvbnRhaW5lciAuZm9ybS1ncm91cCB7XG4gIHBhZGRpbmctYm90dG9tOiAyJTtcbn1cbmZvcm0gLmNvbnRhaW5lciAuQWN0aXZpdHkge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5mb3JtIC5jb250YWluZXIgLmNhbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5jb2xvcik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDU1JTtcbiAgcGFkZGluZzogMS4zJTtcbn1cblxuLnJlc3VsdCB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgY29sb3I6IHZhcigtLW1haW5jb2xvcik7XG4gIG1hcmdpbi10b3A6IDQlO1xuICBtYXJnaW4tbGVmdDogMjAlO1xufVxuXG4uQnRuRGlldCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5jb2xvcik7XG4gIG1hcmdpbi10b3A6IDQuNSU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICB3aWR0aDogMjUlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgZm9ybSB7XG4gICAgbWFyZ2luLXRvcDogMTIlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgZm9ybSB7XG4gICAgbWFyZ2luLXRvcDogMjAlICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogNCUgMSU7XG4gIH1cbiAgZm9ybSAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzNXB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgZm9ybSAuY29udGFpbmVyIC5jb2wtc20tNCwgZm9ybSAuY29udGFpbmVyIC5jb2wtc20tMiB7XG4gICAgZmxleDogMCAwIDMzLjMzMzMzMyU7XG4gICAgbWF4LXdpZHRoOiAzMy4zMzMzMzMlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ5OXB4KSB7XG4gIGZvcm0ge1xuICAgIG1hcmdpbi10b3A6IDIwJSAhaW1wb3J0YW50O1xuICB9XG4gIGZvcm0gLmNvbnRhaW5lciAuQ2FsY3VsYXRlWW91ckNhbG9yaWVzIHtcbiAgICBmb250LXNpemU6IDEuN2VtO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CaloriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-calories',
                templateUrl: './calories.component.html',
                styleUrls: ['./calories.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/AllComponents/exrecise/exrecise.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/AllComponents/exrecise/exrecise.component.ts ***!
  \**************************************************************/
/*! exports provided: ExreciseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExreciseComponent", function() { return ExreciseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_Models_fileupload_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Models/fileupload.model */ "./src/app/Models/fileupload.model.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var src_app_Service_exerecise_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Service/exerecise.service */ "./src/app/Service/exerecise.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/__ivy_ngcc__/fesm2015/ng6-toastr-notifications.js");
/* harmony import */ var ngx_wow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-wow */ "./node_modules/ngx-wow/__ivy_ngcc__/esm2015/ngx-wow.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");












function ExreciseComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExreciseComponent_a_4_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r130); const item_r127 = ctx.$implicit; const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r129.IdEx(item_r127.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r127 = ctx.$implicit;
    const index_r128 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", index_r128 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r127.ExreciseName);
} }
function ExreciseComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add New Exercise System ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExreciseComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExreciseComponent_div_7_option_5_Template(rf, ctx) { if (rf & 1) {
    const _r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExreciseComponent_div_7_option_5_Template_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r139); const i_r137 = ctx.index; const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r138.indexdayselect(i_r137); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r136 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r136);
} }
const _c0 = function (a0) { return { width: a0 }; };
function ExreciseComponent_div_7_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r132.percentage + "%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuenow", ctx_r132.percentage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r132.percentage, "%");
} }
function ExreciseComponent_div_7_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExreciseComponent_div_7_div_28_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExreciseComponent_div_7_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExreciseComponent_div_7_div_28_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r134.errors.required);
} }
function ExreciseComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "select", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExreciseComponent_div_7_Template_select_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r142); const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r141.NumDay = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Must Choose Day");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExreciseComponent_div_7_option_5_Template, 2, 1, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExreciseComponent_div_7_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r142); const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r143.nameEx = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ExreciseComponent_div_7_Template_input_change_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r142); const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r144.SelectImg($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExreciseComponent_div_7_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r142); const ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r145.AddImgExecise(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ExreciseComponent_div_7_div_14_Template, 3, 5, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExreciseComponent_div_7_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r142); const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r146.addCollectionEx(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Add Exrecise");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ExreciseComponent_div_7_div_19_Template, 4, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExreciseComponent_div_7_Template_input_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r142); const ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r147.NameDay = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Add Day");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "textarea", 46, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExreciseComponent_div_7_Template_textarea_ngModelChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r142); const ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r148.describion = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ExreciseComponent_div_7_div_28_Template, 2, 1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExreciseComponent_div_7_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r142); const ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r149.AddDataEx(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Save Exrecise System");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);
    const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r124.NumDay);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r124.NumDays);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r124.NumDay == "Must Choose Day")("ngModel", ctx_r124.nameEx);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r124.selectedFiles || ctx_r124.NumDay == "Must Choose Day");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r124.currentFileUpload);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r124.load);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r124.percentage == 100 && ctx_r124.load == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Number Exrecise Added : ", ctx_r124.dataOfEx.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r124.NameDay);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r124.NameDay == undefined || ctx_r124.NameDay == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r124.describion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r134.invalid && (_r134.dirty || _r134.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r124.dataOfDayEx.length < 2 || _r134.invalid);
} }
function ExreciseComponent_div_8_div_9_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item2_r153 = ctx.$implicit;
    const i_r154 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", i_r154 + 1, ". ", item2_r153.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item2_r153.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ExreciseComponent_div_8_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExreciseComponent_div_8_div_9_div_3_Template, 4, 3, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r151 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r151.day, "/", item_r151.nameDay, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r151.data);
} }
function ExreciseComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExreciseComponent_div_8_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r156); const ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r155.EXSelect(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Select This Exrecise System");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExreciseComponent_div_8_div_9_Template, 4, 3, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r125.EXsystemname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Describion For ", ctx_r125.EXsystemname, " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r125.getdescribion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r125.getdata);
} }
function ExreciseComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r160 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExreciseComponent_div_34_Template_i_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r160); const i_r158 = ctx.index; const ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r159.removeExAdd(i_r158); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r157 = ctx.$implicit;
    const i_r158 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" EXRECISE", i_r158 + 1, ": ", item_r157.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r157.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class ExreciseComponent {
    constructor(spinner, exerciseSer, router, toastr, wowService) {
        this.spinner = spinner;
        this.exerciseSer = exerciseSer;
        this.router = router;
        this.toastr = toastr;
        this.wowService = wowService;
        this.DataExrecises = [];
        this.load = true;
        this.dataOfEx = [];
        this.NumDay = 'Must Choose Day';
        ///////////////////////
        this.imgSelect = "";
        this.NumDays = [];
        this.dataOfDayEx = [];
        this.check = false;
        this.DataEX = [];
        this.getdata = [];
        ////////////////////ExUserSelect//////////////////////
        this.SystemUserSelect = [];
        this.TypeUser = localStorage.getItem("typeuser");
    }
    ngOnInit() {
        if (!localStorage.getItem('foo')) {
            localStorage.setItem('foo', 'no reload');
            location.reload();
        }
        else {
            localStorage.removeItem('foo');
        }
        this.spinner.show();
        this.heroForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'describion': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.describion, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ]),
        });
        this.wowService.init();
        this.getExercise();
        this.Days();
        setTimeout(() => {
            this.spinner.hide();
        }, 1000);
        document.getElementById('footer').style.width = "100%";
        document.getElementById('footer').style.marginLeft = "0%";
    }
    getExercise() {
        this.exerciseSer.get_exerecises().subscribe(res => {
            this.DataExrecises = res.map(e => {
                return Object.assign({ id: e.payload.doc.id }, e.payload.doc.data());
            });
            setTimeout(() => {
                document.getElementById("list-home-list").click();
                document.getElementById("noData").style.display = "none";
            }, 1000);
        }, err => {
            this.toastr.errorToastr(err.message);
        });
        // this.IdEx(this.DataExrecises[0].id)    
    }
    AddExrecises() {
        this.exerciseSer.Add_Exercises(this.NameSystemEx);
    }
    AddImgExecise() {
        const file = this.selectedFiles.item(0);
        this.selectedFiles = undefined;
        this.currentFileUpload = new src_app_Models_fileupload_model__WEBPACK_IMPORTED_MODULE_1__["Fileupload"](file);
        // console.log(this.currentFileUpload.url)
        this.exerciseSer.Add_Img_Ex(this.currentFileUpload).subscribe(percentage => {
            this.percentage = Math.round(percentage);
            if (percentage == 100) {
                this.wiating();
            }
        }, error => {
            console.log(error);
        });
    }
    SelectImg(event) {
        this.selectedFiles = event.target.files;
        console.log(event);
    }
    wiating() {
        setTimeout(() => {
            this.load = false;
        }, 10000);
    }
    addCollectionEx() {
        this.dataOfEx.push({ 'name': this.nameEx, 'photo': localStorage.getItem('photoEx') });
        this.nameEx = "";
        this.selectedFiles = null;
        this.percentage = 0;
        this.load = true;
        console.log(this.dataOfEx);
    }
    IdEx(id) {
        this.getdata = [];
        localStorage.setItem('idEx', id);
        this.GetImage();
        this.GetEXdata();
    }
    Days() {
        for (let i = 1; i <= 7; i++) {
            this.NumDays.push("day " + [i]);
        }
    }
    indexdayselect(index) {
        this.indexdayselectt = index;
    }
    DaySelect() {
        this.dataOfDayEx.push({ 'day': this.NumDay, 'nameDay': this.NameDay, 'data': this.dataOfEx });
        console.log(this.dataOfDayEx);
        this.dataOfEx = [];
        this.NameDay = "";
        this.NumDay = this.NumDay[this.indexdayselectt + 1];
    }
    AddDataEx() {
        this.exerciseSer.AddDataEx(this.describion, this.dataOfDayEx, localStorage.getItem('idEx'));
        this.describion = "";
    }
    removeExAdd(index) {
        this.DeletePhoto(index);
        setTimeout(() => {
            this.dataOfEx.splice(index, 1);
        }, 1000);
    }
    GetImage() {
        this.exerciseSer.get_Img(10).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(changes => changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val()))))).subscribe(fileUploads => {
            this.fileUploads = fileUploads;
        });
    }
    DeletePhoto(index) {
        // console.log(this.DatafoodsName[index])
        for (let i = 0; i < this.fileUploads.length; i++) {
            if (this.fileUploads[i].url == this.dataOfEx[index].photo) {
                console.log(this.fileUploads[i]);
                this.exerciseSer.delete_Img(this.fileUploads[i]);
            }
        }
    }
    GetEXdata() {
        this.exerciseSer.get_exerecises().subscribe(res => {
            this.DataEX = res.map(e => {
                return Object.assign({ id: e.payload.doc.id }, e.payload.doc.data());
            });
            // console.log( this.getdata)
            for (let i = 0; i < this.DataEX.length; i++) {
                if (this.DataEX[i].dataEx.length != 0) {
                    if (this.DataEX[i].id == localStorage.getItem('idEx')) {
                        this.SystemUserSelect = this.DataEX[i];
                        this.DataEXshow = this.DataEX[i].dataEx;
                        this.EXsystemname = this.DataEX[i].ExreciseName;
                        this.getdescribion = this.DataEXshow.describe;
                        this.getdata = this.DataEXshow.data;
                        // console.log(this.getdata)
                        this.check = false;
                    }
                }
            }
            //  console.log( this.getdata)
        }, err => {
            this.toastr.errorToastr(err.message);
        });
    }
    EXSelect() {
        console.log(this.SystemUserSelect);
        this.exerciseSer.add_Ex(localStorage.getItem("iduser"), this.SystemUserSelect);
    }
}
ExreciseComponent.ɵfac = function ExreciseComponent_Factory(t) { return new (t || ExreciseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Service_exerecise_service__WEBPACK_IMPORTED_MODULE_5__["ExereciseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__["ToastrManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_wow__WEBPACK_IMPORTED_MODULE_8__["NgwWowService"])); };
ExreciseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExreciseComponent, selectors: [["app-exrecise"]], decls: 40, vars: 7, consts: [[1, "col-12", "Exrecisecomponentt"], [1, "row", "Exrecisecomponent"], [1, "col-3", "tablistMQ"], ["id", "list-tab", "role", "tablist", 1, "list-group", "ExreciseName"], ["class", "list-group-item list-group-item-action  ", "id", "list-home-list", "data-toggle", "list", "role", "tab", "aria-controls", "home", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "list-group-item list-group-item-action ", "id", "list-Exercise system-list", "data-toggle", "modal", "data-target", "#ExreciseName", "role", "tab", 4, "ngIf"], ["class", "col-9", "id", "noData", "style", "width: 100%;", 4, "ngIf"], ["class", "col-9 formAddEx", 4, "ngIf"], ["class", "col-9 EXshow", 4, "ngIf"], [1, "container"], ["id", "ExreciseName", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], ["type", "text", "name", "Exrecise", "placeholder", "Exrecise Name", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default"], ["type", "submit", "data-dismiss", "modal", 1, "btn", "btn-default", "BtnAddFoodModel", 3, "click"], ["id", "ExreciseAdd", "role", "dialog", 1, "modal", "fade"], ["class", "modal-body", 4, "ngFor", "ngForOf"], ["id", "list-home-list", "data-toggle", "list", "role", "tab", "aria-controls", "home", 1, "list-group-item", "list-group-item-action", 3, "click"], ["id", "list-Exercise system-list", "data-toggle", "modal", "data-target", "#ExreciseName", "role", "tab", 1, "list-group-item", "list-group-item-action"], ["aria-hidden", "true", 1, "fa", "fa-plus", "fa-lg"], ["id", "noData", 1, "col-9", 2, "width", "100%"], ["src", "../../../assets/NoData.png", "alt", "", 2, "width", "100%"], [1, "col-9", "formAddEx"], ["name", "day", 1, "DaysSelection", 3, "ngModel", "ngModelChange"], ["disabled", ""], [3, "click", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Name exrecise", 1, "form-control", "nameExrecise", 3, "disabled", "ngModel", "ngModelChange"], [1, "formImg"], [1, "col-12", "UploadphotoDiv", 2, "position", "relative"], [1, "row"], [1, "btn", "btn-default", "col-6", 2, "position", "absolute", "left", "0px"], ["type", "file", 3, "change"], [1, "btn", "btn-success", "col-3", "text-center", 2, "position", "absolute", "right", "30px", 3, "disabled", "click"], ["class", "progress", 4, "ngIf"], [1, "row", 2, "margin-top", "20px"], ["type", "submit", 1, "form-control", "btn-addEx", 3, "disabled", "click"], ["class", "load", 4, "ngIf"], [1, "text-center", "numExAddDiv", 2, "width", "100%", "padding-right", "25%"], [1, "numExAdd"], ["type", "text", "name", "nameday", "placeholder", "Name Day", 1, "form-control", "nameExrecise", 3, "ngModel", "ngModelChange"], ["type", "submit", "data-toggle", "modal", "data-target", "#ExreciseAdd", 1, "form-control", "btn-addEx", 3, "disabled"], ["name", "describion", "required", "", "cols", "80", "rows", "5", "placeholder", "Add Describion About System Exrecise", 1, "describe", 3, "ngModel", "ngModelChange"], ["des", "ngModel"], ["class", "alert alert-danger ", 4, "ngIf"], [1, "form-control", "btn-SaveEx", 3, "disabled", "click"], [3, "click"], [1, "progress"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-info", "progress-bar-striped", 3, "ngStyle"], [1, "load"], [1, "fa", "fa-spinner", "fa-pulse", "fa-2x", "fa-fw"], [1, "alert", "alert-danger"], [4, "ngIf"], [1, "col-9", "EXshow"], [1, "text-center"], ["data-wow-duration", "2s", "data-wow-delay", "0.5s", 1, "form-control", "pulseMQ", "btn-select", "wow", "pulse", 3, "click"], [1, "descripeExspan", 2, "color", "var(--maincolor)"], [1, "lead", "descripeExP"], ["class", "divDay", 4, "ngFor", "ngForOf"], [1, "divDay"], [1, "text-center", "dayMQ"], ["class", "oneEX text-center", 4, "ngFor", "ngForOf"], [1, "oneEX", "text-center"], ["alt", "noPhoto", 3, "src"], [1, "NameExEdite"], ["alt", "NoPhoto", 1, "photoExselect", 3, "src"], ["aria-hidden", "true", 1, "fa", "fa-trash", "fa-lg", "trash1", 3, "click"]], template: function ExreciseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExreciseComponent_a_4_Template, 2, 3, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExreciseComponent_a_5_Template, 3, 0, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExreciseComponent_div_6_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExreciseComponent_div_7_Template, 31, 14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExreciseComponent_div_8_Template, 10, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Exrecise Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExreciseComponent_Template_input_ngModelChange_19_listener($event) { return ctx.NameSystemEx = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExreciseComponent_Template_button_click_23_listener() { return ctx.AddExrecises(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "ADD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "ADD EXRECISE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ExreciseComponent_div_34_Template, 6, 3, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExreciseComponent_Template_button_click_38_listener() { return ctx.DaySelect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "ADD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.DataExrecises);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.TypeUser == "admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.TypeUser != "admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getdata.length == 0 && ctx.TypeUser == "admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getdata.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.NameSystemEx);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataOfEx);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgStyle"]], styles: ["[_ngcontent-%COMP%]:root {\n  --maincolor: var(--maincolor);\n}\n\n.Exrecisecomponent[_ngcontent-%COMP%] {\n  overflow: hidden;\n  padding-right: 28px;\n  margin-top: 6%;\n  position: relative;\n}\n\n.Exrecisecomponent[_ngcontent-%COMP%]   .col-3[_ngcontent-%COMP%] {\n  position: fixed;\n}\n\n.Exrecisecomponent[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background: var(--maincolor);\n  border-color: var(--maincolor);\n  color: white;\n}\n\n.Exrecisecomponent[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   .fa-plus[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.Exrecisecomponent[_ngcontent-%COMP%]   .UploadphotoDiv[_ngcontent-%COMP%] {\n  margin-left: -15%;\n}\n\n.Exrecisecomponent[_ngcontent-%COMP%]   .EXshow[_ngcontent-%COMP%] {\n  margin-left: 25%;\n  box-shadow: 0 0 0.375rem 0.13125rem rgba(0, 0, 0, 0.08);\n  height: auto;\n  width: 100%;\n  overflow: hidden;\n  position: relative;\n}\n\n.Exrecisecomponent[_ngcontent-%COMP%]   .EXshow[_ngcontent-%COMP%]   .btn-select[_ngcontent-%COMP%] {\n  width: 30%;\n  background: var(--maincolor);\n  color: white;\n  margin-bottom: 42px;\n  height: 47px;\n  transform: perspective(1px) translateZ(0);\n  margin-top: -23px;\n  margin-bottom: 80px;\n}\n\n.Exrecisecomponent[_ngcontent-%COMP%]   .EXshow[_ngcontent-%COMP%]   .btn-select[_ngcontent-%COMP%]:hover {\n  -webkit-animation-name: btn-select;\n          animation-name: btn-select;\n  -webkit-animation-duration: 0.15s;\n          animation-duration: 0.15s;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n.Exrecisecomponent[_ngcontent-%COMP%]   .EXshow[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 34px;\n  width: 100%;\n  background: var(--maincolor);\n  height: 60px;\n  padding-top: 11px;\n  color: white;\n  margin-bottom: 100px;\n}\n\n.Exrecisecomponent[_ngcontent-%COMP%]   .EXshow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-style: italic;\n}\n\n.Exrecisecomponent[_ngcontent-%COMP%]   .EXshow[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 100px;\n  margin-bottom: 100px;\n  background: var(--maincolor);\n  width: 40%;\n  margin-left: 30%;\n  height: 50px;\n  padding-top: 8px;\n  color: white;\n}\n\n.Exrecisecomponent[_ngcontent-%COMP%]   .EXshow[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 75%;\n  margin-top: 30px;\n  margin-bottom: 200px;\n  box-shadow: 0 0 0.375rem 0.13125rem rgba(0, 0, 0, 0.08);\n}\n\n.Exrecisecomponent[_ngcontent-%COMP%]   .formAddEx[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0.375rem 0.13125rem rgba(0, 0, 0, 0.08);\n  margin-left: 25%;\n  padding-left: 130px;\n}\n\n.Exrecisecomponent[_ngcontent-%COMP%]   .formAddEx[_ngcontent-%COMP%]   .nameExrecise[_ngcontent-%COMP%] {\n  margin-top: 5%;\n  width: 77%;\n  margin-bottom: 5%;\n}\n\n.Exrecisecomponent[_ngcontent-%COMP%]   .formAddEx[_ngcontent-%COMP%]   .imgEx[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 200px;\n  background-size: 100% 100%;\n  margin-left: 23%;\n}\n\n.Exrecisecomponent[_ngcontent-%COMP%]   .formAddEx[_ngcontent-%COMP%]   .formImg[_ngcontent-%COMP%] {\n  margin-left: 8%;\n  margin-top: 5%;\n}\n\n.Exrecisecomponent[_ngcontent-%COMP%]   .formAddEx[_ngcontent-%COMP%]   .btn-addEx[_ngcontent-%COMP%] {\n  width: 30%;\n  background: var(--maincolor);\n  color: white;\n  margin-top: 3%;\n  margin-bottom: 3%;\n  margin-left: 23%;\n}\n\n.Exrecisecomponent[_ngcontent-%COMP%]   .formAddEx[_ngcontent-%COMP%]   .btn-addEx[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n}\n\n.Exrecisecomponent[_ngcontent-%COMP%]   .formAddEx[_ngcontent-%COMP%]   .btn-SaveEx[_ngcontent-%COMP%] {\n  width: 40%;\n  background-color: var(--maincolor);\n  color: white;\n  margin-top: 3%;\n  margin-left: 18%;\n  margin-bottom: 20px;\n}\n\n.Exrecisecomponent[_ngcontent-%COMP%]   .formAddEx[_ngcontent-%COMP%]   .btn-SaveEx[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n}\n\n.Exrecisecomponent[_ngcontent-%COMP%]   .formAddEx[_ngcontent-%COMP%]   .describe[_ngcontent-%COMP%] {\n  width: 77%;\n  margin-top: 5%;\n}\n\n.fa-plus[_ngcontent-%COMP%] {\n  color: var(--maincolor);\n}\n\n.progress[_ngcontent-%COMP%] {\n  margin-right: 44%;\n  margin-top: 5%;\n}\n\n.DaysSelection[_ngcontent-%COMP%] {\n  background: var(--maincolor);\n  color: white;\n  width: 30%;\n  height: 40px;\n  margin-left: 21%;\n  margin-top: 3%;\n}\n\n.load[_ngcontent-%COMP%] {\n  margin-top: 3%;\n}\n\n.trash1[_ngcontent-%COMP%] {\n  margin-left: 28%;\n  margin-top: 16px;\n}\n\n.NameExEdite[_ngcontent-%COMP%] {\n  margin-left: 5%;\n  margin-top: 12px;\n}\n\n.photoExselect[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 50px;\n  background-size: 100% 100%;\n  margin-left: 60px;\n}\n\n.alert-danger[_ngcontent-%COMP%] {\n  width: 77%;\n}\n\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\n  .Exrecisecomponent[_ngcontent-%COMP%] {\n    margin-top: 8% !important;\n  }\n  .Exrecisecomponent[_ngcontent-%COMP%]   .list-group-item-action[_ngcontent-%COMP%] {\n    font-size: 13px !important;\n  }\n\n  .EXshow[_ngcontent-%COMP%]   .btn-select[_ngcontent-%COMP%] {\n    width: 35% !important;\n  }\n}\n\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .Exrecisecomponent[_ngcontent-%COMP%] {\n    margin-top: 10% !important;\n  }\n  .Exrecisecomponent[_ngcontent-%COMP%]   .list-group-item-action[_ngcontent-%COMP%] {\n    font-size: 13px !important;\n  }\n  .Exrecisecomponent[_ngcontent-%COMP%]   .DaysSelection[_ngcontent-%COMP%] {\n    width: 42%;\n    margin-left: 18%;\n  }\n\n  .EXshow[_ngcontent-%COMP%]   .btn-select[_ngcontent-%COMP%] {\n    width: 50% !important;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .Exrecisecomponent[_ngcontent-%COMP%] {\n    margin-top: 15% !important;\n  }\n  .Exrecisecomponent[_ngcontent-%COMP%]   .numExAddDiv[_ngcontent-%COMP%] {\n    padding-right: 0% !important;\n  }\n  .Exrecisecomponent[_ngcontent-%COMP%]   .descripeExspan[_ngcontent-%COMP%] {\n    font-size: 22px !important;\n  }\n  .Exrecisecomponent[_ngcontent-%COMP%]   .descripeExP[_ngcontent-%COMP%] {\n    font-size: 15px !important;\n  }\n  .Exrecisecomponent[_ngcontent-%COMP%]   .formAddEx[_ngcontent-%COMP%] {\n    padding-left: 0px;\n  }\n  .Exrecisecomponent[_ngcontent-%COMP%]   .formAddEx[_ngcontent-%COMP%]   .nameExrecise[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .Exrecisecomponent[_ngcontent-%COMP%]   .formAddEx[_ngcontent-%COMP%]   .imgEx[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 125px;\n  }\n  .Exrecisecomponent[_ngcontent-%COMP%]   .formAddEx[_ngcontent-%COMP%]   .formImg[_ngcontent-%COMP%] {\n    margin-left: 8%;\n  }\n  .Exrecisecomponent[_ngcontent-%COMP%]   .formAddEx[_ngcontent-%COMP%]   .UploadphotoDiv[_ngcontent-%COMP%] {\n    margin-left: 0%;\n  }\n  .Exrecisecomponent[_ngcontent-%COMP%]   .formAddEx[_ngcontent-%COMP%]   .UploadphotoDiv[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    left: -20px !important;\n  }\n  .Exrecisecomponent[_ngcontent-%COMP%]   .formAddEx[_ngcontent-%COMP%]   .UploadphotoDiv[_ngcontent-%COMP%]   .btn-success[_ngcontent-%COMP%] {\n    right: 15px !important;\n  }\n  .Exrecisecomponent[_ngcontent-%COMP%]   .formAddEx[_ngcontent-%COMP%]   .btn-addEx[_ngcontent-%COMP%] {\n    width: 50%;\n    margin-left: 25%;\n  }\n  .Exrecisecomponent[_ngcontent-%COMP%]   .formAddEx[_ngcontent-%COMP%]   .btn-SaveEx[_ngcontent-%COMP%] {\n    margin-left: 30%;\n  }\n  .Exrecisecomponent[_ngcontent-%COMP%]   .formAddEx[_ngcontent-%COMP%]   .describe[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 5%;\n  }\n  .Exrecisecomponent[_ngcontent-%COMP%]   .EXshow[_ngcontent-%COMP%]   .btn-select[_ngcontent-%COMP%] {\n    width: 70% !important;\n  }\n  .Exrecisecomponent[_ngcontent-%COMP%]   .EXshow[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.3rem !important;\n    width: 50%;\n    margin-left: 25%;\n  }\n  .Exrecisecomponent[_ngcontent-%COMP%]   .list-group-item-action[_ngcontent-%COMP%] {\n    font-size: 13px !important;\n  }\n  .Exrecisecomponent[_ngcontent-%COMP%]   .DaysSelection[_ngcontent-%COMP%] {\n    width: 46% !important;\n    margin-left: 27% !important;\n  }\n}\n\n@media only screen and (max-width: 499px) {\n  .Exrecisecomponentt[_ngcontent-%COMP%] {\n    padding-right: 0px !important;\n    padding-left: 0px !important;\n  }\n  .Exrecisecomponentt[_ngcontent-%COMP%]   .Exrecisecomponent[_ngcontent-%COMP%] {\n    margin-top: 25% !important;\n    padding-right: 0px !important;\n    padding-left: 0px !important;\n    font-size: 1.5rem !important;\n  }\n  .Exrecisecomponentt[_ngcontent-%COMP%]   .Exrecisecomponent[_ngcontent-%COMP%]   .col-3[_ngcontent-%COMP%] {\n    padding-right: 0px !important;\n    padding-left: 0px !important;\n  }\n  .Exrecisecomponentt[_ngcontent-%COMP%]   .Exrecisecomponent[_ngcontent-%COMP%]   .col-3[_ngcontent-%COMP%]   .list-group-item-action[_ngcontent-%COMP%] {\n    font-size: 12px !important;\n  }\n  .Exrecisecomponentt[_ngcontent-%COMP%]   .Exrecisecomponent[_ngcontent-%COMP%]   .EXshow[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .Exrecisecomponentt[_ngcontent-%COMP%]   .Exrecisecomponent[_ngcontent-%COMP%]   .EXshow[_ngcontent-%COMP%]   .btn-select[_ngcontent-%COMP%] {\n    width: 75% !important;\n    font-size: 0.8rem !important;\n  }\n  .Exrecisecomponentt[_ngcontent-%COMP%]   .Exrecisecomponent[_ngcontent-%COMP%]   .EXshow[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    width: 70% !important;\n    margin-left: 15%;\n  }\n  .Exrecisecomponentt[_ngcontent-%COMP%]   .Exrecisecomponent[_ngcontent-%COMP%]   .formAddEx[_ngcontent-%COMP%]   .DaysSelection[_ngcontent-%COMP%] {\n    width: 70% !important;\n    margin-left: 15% !important;\n    font-size: 17px;\n  }\n  .Exrecisecomponentt[_ngcontent-%COMP%]   .Exrecisecomponent[_ngcontent-%COMP%]   .formAddEx[_ngcontent-%COMP%]   .formImg[_ngcontent-%COMP%]   .UploadphotoDiv[_ngcontent-%COMP%] {\n    padding-bottom: 40px;\n  }\n  .Exrecisecomponentt[_ngcontent-%COMP%]   .Exrecisecomponent[_ngcontent-%COMP%]   .formAddEx[_ngcontent-%COMP%]   .formImg[_ngcontent-%COMP%]   .UploadphotoDiv[_ngcontent-%COMP%]   .btn-success[_ngcontent-%COMP%] {\n    top: 45px;\n  }\n  .Exrecisecomponentt[_ngcontent-%COMP%]   .Exrecisecomponent[_ngcontent-%COMP%]   .formAddEx[_ngcontent-%COMP%]   .UploadphotoDiv[_ngcontent-%COMP%] {\n    margin-left: 0%;\n  }\n  .Exrecisecomponentt[_ngcontent-%COMP%]   .Exrecisecomponent[_ngcontent-%COMP%]   .formAddEx[_ngcontent-%COMP%]   .UploadphotoDiv[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    left: -20px !important;\n  }\n  .Exrecisecomponentt[_ngcontent-%COMP%]   .Exrecisecomponent[_ngcontent-%COMP%]   .formAddEx[_ngcontent-%COMP%]   .btn-addEx[_ngcontent-%COMP%] {\n    width: 50%;\n    margin-left: 25%;\n  }\n  .Exrecisecomponentt[_ngcontent-%COMP%]   .Exrecisecomponent[_ngcontent-%COMP%]   .formAddEx[_ngcontent-%COMP%]   .btn-SaveEx[_ngcontent-%COMP%] {\n    margin-left: 15%;\n    width: 70%;\n  }\n  .Exrecisecomponentt[_ngcontent-%COMP%]   .Exrecisecomponent[_ngcontent-%COMP%]   .formAddEx[_ngcontent-%COMP%]   .describe[_ngcontent-%COMP%] {\n    font-size: 80%;\n  }\n  .Exrecisecomponentt[_ngcontent-%COMP%]   .Exrecisecomponent[_ngcontent-%COMP%]   .formAddEx[_ngcontent-%COMP%]   .numExAdd[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWxsQ29tcG9uZW50cy9leHJlY2lzZS9DOlxcVXNlcnNcXGNvbXBhXFxEb3dubG9hZHNcXGdpdGh1YiBwcm9qZWN0c1xcQmUtRml0XFxCZUZpdC9zcmNcXGFwcFxcQWxsQ29tcG9uZW50c1xcZXhyZWNpc2VcXGV4cmVjaXNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9BbGxDb21wb25lbnRzL2V4cmVjaXNlL2V4cmVjaXNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksNkJBQUE7QUNBSjs7QURHQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURDSTtFQUNJLGVBQUE7QUNDUjs7QURFSTtFQUNJLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FDQVI7O0FEQ1E7RUFDSSxZQUFBO0FDQ1o7O0FER0k7RUFFSSxpQkFBQTtBQ0ZSOztBREtJO0VBQ0ksZ0JBQUE7RUFDQSx1REFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0hSOztBRElNO0VBQ0UsVUFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0ZSOztBRElZO0VBQ0ksa0NBQUE7VUFBQSwwQkFBQTtFQUNBLGlDQUFBO1VBQUEseUJBQUE7RUFDQSx5Q0FBQTtVQUFBLGlDQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtBQ0ZoQjs7QURRUTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FDTlo7O0FEUVE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUNOWjs7QURRUTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNOWjs7QURRUTtFQUNJLFVBQUE7RUFFQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsdURBQUE7QUNQWjs7QURZSTtFQUNJLHVEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ1ZSOztBRFdRO0VBQ0ksY0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQ1RaOztBRGFRO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FDWFo7O0FEYVE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ1haOztBRGFRO0VBQ0ksVUFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDWFo7O0FEWVk7RUFDSSxZQUFBO0FDVmhCOztBRGVRO0VBQ0ksVUFBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDYlo7O0FEY1k7RUFDSSxZQUFBO0FDWmhCOztBRGlCUTtFQUVLLFVBQUE7RUFDQSxjQUFBO0FDaEJiOztBRHFCQTtFQUNJLHVCQUFBO0FDbEJKOztBRHNCQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQ25CSjs7QUR1QkE7RUFDSSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ3BCSjs7QUR1QkE7RUFDSSxjQUFBO0FDcEJKOztBRHNCQTtFQUVJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNwQko7O0FEc0JBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDbkJKOztBRHFCQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtBQ2xCSjs7QURvQkE7RUFDSSxVQUFBO0FDakJKOztBRHlCQTtFQUVJO0lBRUkseUJBQUE7RUN4Qk47RUR5Qk07SUFFSSwwQkFBQTtFQ3hCVjs7RUQ2Qk07SUFFSSxxQkFBQTtFQzNCVjtBQUNGOztBRGlDQTtFQUVJO0lBRUksMEJBQUE7RUNqQ047RURrQ007SUFFSSwwQkFBQTtFQ2pDVjtFRG1DTTtJQUVJLFVBQUE7SUFDQSxnQkFBQTtFQ2xDVjs7RUR5Q007SUFFSSxxQkFBQTtFQ3ZDVjtBQUNGOztBRDhDQTtFQUVJO0lBR0ksMEJBQUE7RUMvQ047RURnRE07SUFFSSw0QkFBQTtFQy9DVjtFRGtETTtJQUVJLDBCQUFBO0VDakRWO0VEb0RNO0lBRUksMEJBQUE7RUNuRFY7RUR3RFM7SUFDQyxpQkFBQTtFQ3REVjtFRHVEVTtJQUNJLFdBQUE7RUNyRGQ7RUR1RFU7SUFDSSxZQUFBO0lBQ0EsYUFBQTtFQ3JEZDtFRHVEVTtJQUNJLGVBQUE7RUNyRGQ7RUR1RFU7SUFFSSxlQUFBO0VDdERkO0VEdURjO0lBRUksc0JBQUE7RUN0RGxCO0VEeURVO0lBRUksc0JBQUE7RUN4RGQ7RUQ0RFU7SUFDSSxVQUFBO0lBRUEsZ0JBQUE7RUMzRGQ7RUQ4RFU7SUFFSSxnQkFBQTtFQzdEZDtFRCtEVTtJQUVLLFdBQUE7SUFDQSxjQUFBO0VDOURmO0VEcUVVO0lBRUkscUJBQUE7RUNwRWQ7RUR1RVU7SUFFSSw0QkFBQTtJQUNBLFVBQUE7SUFDQSxnQkFBQTtFQ3RFZDtFRDJFTTtJQUVJLDBCQUFBO0VDMUVWO0VENEVNO0lBRUkscUJBQUE7SUFDQSwyQkFBQTtFQzNFVjtBQUNGOztBRGlGQTtFQUVJO0lBRUksNkJBQUE7SUFDQSw0QkFBQTtFQ2pGTjtFRG9GVTtJQUVJLDBCQUFBO0lBQ0EsNkJBQUE7SUFDQSw0QkFBQTtJQUNBLDRCQUFBO0VDbkZkO0VEb0ZjO0lBRUksNkJBQUE7SUFDQSw0QkFBQTtFQ25GbEI7RURvRmtCO0lBRUksMEJBQUE7RUNuRnRCO0VEeUZrQjtJQUVJLGlCQUFBO0VDeEZ0QjtFRDJGa0I7SUFFSSxxQkFBQTtJQUNBLDRCQUFBO0VDMUZ0QjtFRDRGa0I7SUFFSSxxQkFBQTtJQUNBLGdCQUFBO0VDM0Z0QjtFRGlHVTtJQUVJLHFCQUFBO0lBQ0EsMkJBQUE7SUFDQSxlQUFBO0VDaEdkO0VEc0djO0lBRUksb0JBQUE7RUNyR2xCO0VEc0drQjtJQUVJLFNBQUE7RUNyR3RCO0VEMkdVO0lBRUksZUFBQTtFQzFHZDtFRDJHYztJQUVJLHNCQUFBO0VDMUdsQjtFRCtHVTtJQUNJLFVBQUE7SUFFQSxnQkFBQTtFQzlHZDtFRGlIVTtJQUVJLGdCQUFBO0lBQ0EsVUFBQTtFQ2hIZDtFRGtIVTtJQUdLLGNBQUE7RUNsSGY7RURvSFU7SUFFSSxpQkFBQTtFQ25IZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvQWxsQ29tcG9uZW50cy9leHJlY2lzZS9leHJlY2lzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290e1xyXG4gICAgXHJcbiAgICAtLW1haW5jb2xvcjogdmFyKC0tbWFpbmNvbG9yKTtcclxufSBcclxuXHJcbi5FeHJlY2lzZWNvbXBvbmVudHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNiU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAuY29sLTN7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLmFjdGl2ZXtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluY29sb3IpO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbWFpbmNvbG9yKTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgLmZhLXBsdXN7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5VcGxvYWRwaG90b0RpdlxyXG4gICAge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTUlO1xyXG5cclxuICAgIH1cclxuICAgIC5FWHNob3d7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgLjM3NXJlbSAuMTMxMjVyZW0gcmdiYSgwLDAsMCwuMDgpO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgLmJ0bi1zZWxlY3R7XHJcbiAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluY29sb3IpO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0MnB4O1xyXG4gICAgICAgIGhlaWdodDogNDdweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDFweCkgdHJhbnNsYXRlWigwKTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMjNweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG4gICAgICAgXHJcbiAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogYnRuLXNlbGVjdDtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4xNXM7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgXHJcbiAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDM0cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOnZhcigtLW1haW5jb2xvcik7XHJcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDExcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoM3tcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOnZhcigtLW1haW5jb2xvcik7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICAgIC8vIGhlaWdodDogNDUwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwMHB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMC4zNzVyZW0gMC4xMzEyNXJlbSByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICBcclxuICAgIH1cclxuICAgIC5mb3JtQWRkRXh7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIC4zNzVyZW0gLjEzMTI1cmVtIHJnYmEoMCwwLDAsLjA4KTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjUlO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTMwcHg7XHJcbiAgICAgICAgLm5hbWVFeHJlY2lzZXtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3NyU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gICAgICAgICAgICAvLyBwYWRkaW5nLWxlZnQ6IDE0cGM7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAuaW1nRXh7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMyU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3JtSW1ne1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogOCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnRuLWFkZEV4e1xyXG4gICAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluY29sb3IpO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzJTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIzJTtcclxuICAgICAgICAgICAgJjpkaXNhYmxlZHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAuYnRuLVNhdmVFeHtcclxuICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbmNvbG9yKTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE4JTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgJjpkaXNhYmxlZHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRlc2NyaWJle1xyXG4gICAgXHJcbiAgICAgICAgICAgICB3aWR0aDogNzclO1xyXG4gICAgICAgICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gXHJcbn1cclxuLmZhLXBsdXN7XHJcbiAgICBjb2xvcjogdmFyKC0tbWFpbmNvbG9yKTtcclxuICBcclxufVxyXG5cclxuLnByb2dyZXNze1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0NCU7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuXHJcblxyXG59XHJcbi5EYXlzU2VsZWN0aW9ue1xyXG4gICAgYmFja2dyb3VuZDp2YXIoLS1tYWluY29sb3IpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMSU7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxufVxyXG5cclxuLmxvYWR7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxufVxyXG4udHJhc2gxe1xyXG4gICAgXHJcbiAgICBtYXJnaW4tbGVmdDogMjglO1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxufVxyXG4uTmFtZUV4RWRpdGV7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG59XHJcbi5waG90b0V4c2VsZWN0e1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG59XHJcbi5hbGVydC1kYW5nZXJ7XHJcbiAgICB3aWR0aDogNzclO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweClcclxue1xyXG5cclxuXHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweClcclxue1xyXG4gICAgLkV4cmVjaXNlY29tcG9uZW50XHJcbiAgICB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogOCUgIWltcG9ydGFudDtcclxuICAgICAgICAubGlzdC1ncm91cC1pdGVtLWFjdGlvblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOjEzcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuRVhzaG93XHJcbiAgICB7XHJcbiAgICAgICAgLmJ0bi1zZWxlY3RcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzNSUgIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KVxyXG57XHJcbiAgICAuRXhyZWNpc2Vjb21wb25lbnRcclxuICAgIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMCUgIWltcG9ydGFudDtcclxuICAgICAgICAubGlzdC1ncm91cC1pdGVtLWFjdGlvblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOjEzcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLkRheXNTZWxlY3Rpb25cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MiU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxOCU7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLkVYc2hvd1xyXG4gICAge1xyXG4gICAgICAgIC5idG4tc2VsZWN0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSBcclxue1xyXG4gICAgLkV4cmVjaXNlY29tcG9uZW50XHJcbiAgICB7XHJcblxyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIC5udW1FeEFkZERpdlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMCUgIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kZXNjcmlwZUV4c3BhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAuZGVzY3JpcGVFeFBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgLmZvcm1BZGRFeHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7IFxyXG4gICAgICAgICAgICAubmFtZUV4cmVjaXNle1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmltZ0V4e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZm9ybUltZ3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuVXBsb2FkcGhvdG9EaXZcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAlO1xyXG4gICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMjBweCAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJ0bi1zdWNjZXNzXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH0gXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5idG4tYWRkRXh7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYnRuLVNhdmVFeFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMzAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kZXNjcmliZXtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgLkVYc2hvd1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLmJ0bi1zZWxlY3RcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDcwJSAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoM1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbSAhaW1wb3J0YW50OyBcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjUlO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgLmxpc3QtZ3JvdXAtaXRlbS1hY3Rpb25cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5EYXlzU2VsZWN0aW9uXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB3aWR0aDogNDYlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNyUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuIFxyXG5cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ5OXB4KSBcclxue1xyXG4gICAgLkV4cmVjaXNlY29tcG9uZW50dFxyXG4gICAge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6MHB4ICFpbXBvcnRhbnQgO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDowcHggIWltcG9ydGFudCA7XHJcblxyXG4gICAgXHJcbiAgICAgICAgICAgIC5FeHJlY2lzZWNvbXBvbmVudFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyNSUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6MHB4ICFpbXBvcnRhbnQgO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjBweCAhaW1wb3J0YW50IDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAuY29sLTNcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjBweCAhaW1wb3J0YW50IDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MHB4ICFpbXBvcnRhbnQgO1xyXG4gICAgICAgICAgICAgICAgICAgIC5saXN0LWdyb3VwLWl0ZW0tYWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MTJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuRVhzaG93XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaDJcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmJ0bi1zZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NSUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaDNcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MTUlIDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgLmZvcm1BZGRFeHtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgLkRheXNTZWxlY3Rpb25cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDcwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1JSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG5cclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgXHJcbiAgICAgICAgICAgIC5mb3JtSW1ne1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLlVwbG9hZHBob3RvRGl2XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLmJ0bi1zdWNjZXNzXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDQ1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLlVwbG9hZHBob3RvRGl2XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwJTtcclxuICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogLTIwcHggIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5idG4tYWRkRXh7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYnRuLVNhdmVFeFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGVzY3JpYmV7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICBmb250LXNpemU6IDgwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubnVtRXhBZGRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICB9XHJcbiAgIH1cclxuICAgIFxyXG4gXHJcblxyXG59XHJcbiIsIjpyb290IHtcbiAgLS1tYWluY29sb3I6IHZhcigtLW1haW5jb2xvcik7XG59XG5cbi5FeHJlY2lzZWNvbXBvbmVudCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmctcmlnaHQ6IDI4cHg7XG4gIG1hcmdpbi10b3A6IDYlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uRXhyZWNpc2Vjb21wb25lbnQgLmNvbC0zIHtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuLkV4cmVjaXNlY29tcG9uZW50IC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluY29sb3IpO1xuICBib3JkZXItY29sb3I6IHZhcigtLW1haW5jb2xvcik7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5FeHJlY2lzZWNvbXBvbmVudCAuYWN0aXZlIC5mYS1wbHVzIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLkV4cmVjaXNlY29tcG9uZW50IC5VcGxvYWRwaG90b0RpdiB7XG4gIG1hcmdpbi1sZWZ0OiAtMTUlO1xufVxuLkV4cmVjaXNlY29tcG9uZW50IC5FWHNob3cge1xuICBtYXJnaW4tbGVmdDogMjUlO1xuICBib3gtc2hhZG93OiAwIDAgMC4zNzVyZW0gMC4xMzEyNXJlbSByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uRXhyZWNpc2Vjb21wb25lbnQgLkVYc2hvdyAuYnRuLXNlbGVjdCB7XG4gIHdpZHRoOiAzMCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW5jb2xvcik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWJvdHRvbTogNDJweDtcbiAgaGVpZ2h0OiA0N3B4O1xuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDFweCkgdHJhbnNsYXRlWigwKTtcbiAgbWFyZ2luLXRvcDogLTIzcHg7XG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XG59XG4uRXhyZWNpc2Vjb21wb25lbnQgLkVYc2hvdyAuYnRuLXNlbGVjdDpob3ZlciB7XG4gIGFuaW1hdGlvbi1uYW1lOiBidG4tc2VsZWN0O1xuICBhbmltYXRpb24tZHVyYXRpb246IDAuMTVzO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xufVxuLkV4cmVjaXNlY29tcG9uZW50IC5FWHNob3cgaDIge1xuICBtYXJnaW4tdG9wOiAzNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbmNvbG9yKTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBwYWRkaW5nLXRvcDogMTFweDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbn1cbi5FeHJlY2lzZWNvbXBvbmVudCAuRVhzaG93IHNwYW4ge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5FeHJlY2lzZWNvbXBvbmVudCAuRVhzaG93IGgzIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluY29sb3IpO1xuICB3aWR0aDogNDAlO1xuICBtYXJnaW4tbGVmdDogMzAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5FeHJlY2lzZWNvbXBvbmVudCAuRVhzaG93IGltZyB7XG4gIHdpZHRoOiA3NSU7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwMHB4O1xuICBib3gtc2hhZG93OiAwIDAgMC4zNzVyZW0gMC4xMzEyNXJlbSByZ2JhKDAsIDAsIDAsIDAuMDgpO1xufVxuLkV4cmVjaXNlY29tcG9uZW50IC5mb3JtQWRkRXgge1xuICBib3gtc2hhZG93OiAwIDAgMC4zNzVyZW0gMC4xMzEyNXJlbSByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICBtYXJnaW4tbGVmdDogMjUlO1xuICBwYWRkaW5nLWxlZnQ6IDEzMHB4O1xufVxuLkV4cmVjaXNlY29tcG9uZW50IC5mb3JtQWRkRXggLm5hbWVFeHJlY2lzZSB7XG4gIG1hcmdpbi10b3A6IDUlO1xuICB3aWR0aDogNzclO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cbi5FeHJlY2lzZWNvbXBvbmVudCAuZm9ybUFkZEV4IC5pbWdFeCB7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAyMyU7XG59XG4uRXhyZWNpc2Vjb21wb25lbnQgLmZvcm1BZGRFeCAuZm9ybUltZyB7XG4gIG1hcmdpbi1sZWZ0OiA4JTtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG4uRXhyZWNpc2Vjb21wb25lbnQgLmZvcm1BZGRFeCAuYnRuLWFkZEV4IHtcbiAgd2lkdGg6IDMwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbmNvbG9yKTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAzJTtcbiAgbWFyZ2luLWJvdHRvbTogMyU7XG4gIG1hcmdpbi1sZWZ0OiAyMyU7XG59XG4uRXhyZWNpc2Vjb21wb25lbnQgLmZvcm1BZGRFeCAuYnRuLWFkZEV4OmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xufVxuLkV4cmVjaXNlY29tcG9uZW50IC5mb3JtQWRkRXggLmJ0bi1TYXZlRXgge1xuICB3aWR0aDogNDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluY29sb3IpO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDMlO1xuICBtYXJnaW4tbGVmdDogMTglO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLkV4cmVjaXNlY29tcG9uZW50IC5mb3JtQWRkRXggLmJ0bi1TYXZlRXg6ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG59XG4uRXhyZWNpc2Vjb21wb25lbnQgLmZvcm1BZGRFeCAuZGVzY3JpYmUge1xuICB3aWR0aDogNzclO1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLmZhLXBsdXMge1xuICBjb2xvcjogdmFyKC0tbWFpbmNvbG9yKTtcbn1cblxuLnByb2dyZXNzIHtcbiAgbWFyZ2luLXJpZ2h0OiA0NCU7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuXG4uRGF5c1NlbGVjdGlvbiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW5jb2xvcik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDMwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tbGVmdDogMjElO1xuICBtYXJnaW4tdG9wOiAzJTtcbn1cblxuLmxvYWQge1xuICBtYXJnaW4tdG9wOiAzJTtcbn1cblxuLnRyYXNoMSB7XG4gIG1hcmdpbi1sZWZ0OiAyOCU7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5OYW1lRXhFZGl0ZSB7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cblxuLnBob3RvRXhzZWxlY3Qge1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XG59XG5cbi5hbGVydC1kYW5nZXIge1xuICB3aWR0aDogNzclO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gIC5FeHJlY2lzZWNvbXBvbmVudCB7XG4gICAgbWFyZ2luLXRvcDogOCUgIWltcG9ydGFudDtcbiAgfVxuICAuRXhyZWNpc2Vjb21wb25lbnQgLmxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24ge1xuICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLkVYc2hvdyAuYnRuLXNlbGVjdCB7XG4gICAgd2lkdGg6IDM1JSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLkV4cmVjaXNlY29tcG9uZW50IHtcbiAgICBtYXJnaW4tdG9wOiAxMCUgIWltcG9ydGFudDtcbiAgfVxuICAuRXhyZWNpc2Vjb21wb25lbnQgLmxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24ge1xuICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICB9XG4gIC5FeHJlY2lzZWNvbXBvbmVudCAuRGF5c1NlbGVjdGlvbiB7XG4gICAgd2lkdGg6IDQyJTtcbiAgICBtYXJnaW4tbGVmdDogMTglO1xuICB9XG5cbiAgLkVYc2hvdyAuYnRuLXNlbGVjdCB7XG4gICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5FeHJlY2lzZWNvbXBvbmVudCB7XG4gICAgbWFyZ2luLXRvcDogMTUlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLkV4cmVjaXNlY29tcG9uZW50IC5udW1FeEFkZERpdiB7XG4gICAgcGFkZGluZy1yaWdodDogMCUgIWltcG9ydGFudDtcbiAgfVxuICAuRXhyZWNpc2Vjb21wb25lbnQgLmRlc2NyaXBlRXhzcGFuIHtcbiAgICBmb250LXNpemU6IDIycHggIWltcG9ydGFudDtcbiAgfVxuICAuRXhyZWNpc2Vjb21wb25lbnQgLmRlc2NyaXBlRXhQIHtcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbiAgfVxuICAuRXhyZWNpc2Vjb21wb25lbnQgLmZvcm1BZGRFeCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIH1cbiAgLkV4cmVjaXNlY29tcG9uZW50IC5mb3JtQWRkRXggLm5hbWVFeHJlY2lzZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLkV4cmVjaXNlY29tcG9uZW50IC5mb3JtQWRkRXggLmltZ0V4IHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAxMjVweDtcbiAgfVxuICAuRXhyZWNpc2Vjb21wb25lbnQgLmZvcm1BZGRFeCAuZm9ybUltZyB7XG4gICAgbWFyZ2luLWxlZnQ6IDglO1xuICB9XG4gIC5FeHJlY2lzZWNvbXBvbmVudCAuZm9ybUFkZEV4IC5VcGxvYWRwaG90b0RpdiB7XG4gICAgbWFyZ2luLWxlZnQ6IDAlO1xuICB9XG4gIC5FeHJlY2lzZWNvbXBvbmVudCAuZm9ybUFkZEV4IC5VcGxvYWRwaG90b0RpdiBsYWJlbCB7XG4gICAgbGVmdDogLTIwcHggIWltcG9ydGFudDtcbiAgfVxuICAuRXhyZWNpc2Vjb21wb25lbnQgLmZvcm1BZGRFeCAuVXBsb2FkcGhvdG9EaXYgLmJ0bi1zdWNjZXNzIHtcbiAgICByaWdodDogMTVweCAhaW1wb3J0YW50O1xuICB9XG4gIC5FeHJlY2lzZWNvbXBvbmVudCAuZm9ybUFkZEV4IC5idG4tYWRkRXgge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgfVxuICAuRXhyZWNpc2Vjb21wb25lbnQgLmZvcm1BZGRFeCAuYnRuLVNhdmVFeCB7XG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcbiAgfVxuICAuRXhyZWNpc2Vjb21wb25lbnQgLmZvcm1BZGRFeCAuZGVzY3JpYmUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICB9XG4gIC5FeHJlY2lzZWNvbXBvbmVudCAuRVhzaG93IC5idG4tc2VsZWN0IHtcbiAgICB3aWR0aDogNzAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLkV4cmVjaXNlY29tcG9uZW50IC5FWHNob3cgaDMge1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xuICB9XG4gIC5FeHJlY2lzZWNvbXBvbmVudCAubGlzdC1ncm91cC1pdGVtLWFjdGlvbiB7XG4gICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLkV4cmVjaXNlY29tcG9uZW50IC5EYXlzU2VsZWN0aW9uIHtcbiAgICB3aWR0aDogNDYlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDI3JSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ5OXB4KSB7XG4gIC5FeHJlY2lzZWNvbXBvbmVudHQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLkV4cmVjaXNlY29tcG9uZW50dCAuRXhyZWNpc2Vjb21wb25lbnQge1xuICAgIG1hcmdpbi10b3A6IDI1JSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAuRXhyZWNpc2Vjb21wb25lbnR0IC5FeHJlY2lzZWNvbXBvbmVudCAuY29sLTMge1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLkV4cmVjaXNlY29tcG9uZW50dCAuRXhyZWNpc2Vjb21wb25lbnQgLmNvbC0zIC5saXN0LWdyb3VwLWl0ZW0tYWN0aW9uIHtcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgfVxuICAuRXhyZWNpc2Vjb21wb25lbnR0IC5FeHJlY2lzZWNvbXBvbmVudCAuRVhzaG93IGgyIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxuICAuRXhyZWNpc2Vjb21wb25lbnR0IC5FeHJlY2lzZWNvbXBvbmVudCAuRVhzaG93IC5idG4tc2VsZWN0IHtcbiAgICB3aWR0aDogNzUlICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAwLjhyZW0gIWltcG9ydGFudDtcbiAgfVxuICAuRXhyZWNpc2Vjb21wb25lbnR0IC5FeHJlY2lzZWNvbXBvbmVudCAuRVhzaG93IGgzIHtcbiAgICB3aWR0aDogNzAlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcbiAgfVxuICAuRXhyZWNpc2Vjb21wb25lbnR0IC5FeHJlY2lzZWNvbXBvbmVudCAuZm9ybUFkZEV4IC5EYXlzU2VsZWN0aW9uIHtcbiAgICB3aWR0aDogNzAlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDE1JSAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgfVxuICAuRXhyZWNpc2Vjb21wb25lbnR0IC5FeHJlY2lzZWNvbXBvbmVudCAuZm9ybUFkZEV4IC5mb3JtSW1nIC5VcGxvYWRwaG90b0RpdiB7XG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gIH1cbiAgLkV4cmVjaXNlY29tcG9uZW50dCAuRXhyZWNpc2Vjb21wb25lbnQgLmZvcm1BZGRFeCAuZm9ybUltZyAuVXBsb2FkcGhvdG9EaXYgLmJ0bi1zdWNjZXNzIHtcbiAgICB0b3A6IDQ1cHg7XG4gIH1cbiAgLkV4cmVjaXNlY29tcG9uZW50dCAuRXhyZWNpc2Vjb21wb25lbnQgLmZvcm1BZGRFeCAuVXBsb2FkcGhvdG9EaXYge1xuICAgIG1hcmdpbi1sZWZ0OiAwJTtcbiAgfVxuICAuRXhyZWNpc2Vjb21wb25lbnR0IC5FeHJlY2lzZWNvbXBvbmVudCAuZm9ybUFkZEV4IC5VcGxvYWRwaG90b0RpdiBsYWJlbCB7XG4gICAgbGVmdDogLTIwcHggIWltcG9ydGFudDtcbiAgfVxuICAuRXhyZWNpc2Vjb21wb25lbnR0IC5FeHJlY2lzZWNvbXBvbmVudCAuZm9ybUFkZEV4IC5idG4tYWRkRXgge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgfVxuICAuRXhyZWNpc2Vjb21wb25lbnR0IC5FeHJlY2lzZWNvbXBvbmVudCAuZm9ybUFkZEV4IC5idG4tU2F2ZUV4IHtcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xuICAgIHdpZHRoOiA3MCU7XG4gIH1cbiAgLkV4cmVjaXNlY29tcG9uZW50dCAuRXhyZWNpc2Vjb21wb25lbnQgLmZvcm1BZGRFeCAuZGVzY3JpYmUge1xuICAgIGZvbnQtc2l6ZTogODAlO1xuICB9XG4gIC5FeHJlY2lzZWNvbXBvbmVudHQgLkV4cmVjaXNlY29tcG9uZW50IC5mb3JtQWRkRXggLm51bUV4QWRkIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExreciseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-exrecise',
                templateUrl: './exrecise.component.html',
                styleUrls: ['./exrecise.component.scss']
            }]
    }], function () { return [{ type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }, { type: src_app_Service_exerecise_service__WEBPACK_IMPORTED_MODULE_5__["ExereciseService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__["ToastrManager"] }, { type: ngx_wow__WEBPACK_IMPORTED_MODULE_8__["NgwWowService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/AllComponents/foods/foods.component.ts":
/*!********************************************************!*\
  !*** ./src/app/AllComponents/foods/foods.component.ts ***!
  \********************************************************/
/*! exports provided: foodsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foodsComponent", function() { return foodsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_Models_fileupload_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Models/fileupload.model */ "./src/app/Models/fileupload.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_Service_foods_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Service/foods.service */ "./src/app/Service/foods.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/__ivy_ngcc__/fesm2015/ng6-toastr-notifications.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/Service/auth.service */ "./src/app/Service/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");














function foodsComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add Food");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function foodsComponent_div_12_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r65);
} }
function foodsComponent_div_12_select_30_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r67);
} }
function foodsComponent_div_12_select_30_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function foodsComponent_div_12_select_30_Template_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r68.NumMeal = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Choose Num Meal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, foodsComponent_div_12_select_30_option_3_Template, 2, 1, "option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r61.NumMeal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r61.nummeals);
} }
function foodsComponent_div_12_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add Foods ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function foodsComponent_div_12_div_32_li_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function foodsComponent_div_12_div_32_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, foodsComponent_div_12_div_32_li_1_span_2_Template, 2, 0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r71.name, " ", item_r71.amount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r71.amount > 10);
} }
function foodsComponent_div_12_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, foodsComponent_div_12_div_32_li_1_Template, 3, 3, "li", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function foodsComponent_div_12_div_32_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r73.SaveThisMeal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add This Meal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r63.Diets);
} }
function foodsComponent_div_12_button_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Check Your Meals");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function foodsComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Calories");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "protein");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Carbs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Fat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "select", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function foodsComponent_div_12_Template_select_ngModelChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r75.NumDay = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Choose Day");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, foodsComponent_div_12_option_29_Template, 2, 1, "option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, foodsComponent_div_12_select_30_Template, 4, 2, "select", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, foodsComponent_div_12_div_31_Template, 2, 0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, foodsComponent_div_12_div_32_Template, 5, 1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, foodsComponent_div_12_button_33_Template, 2, 0, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r31.percentageForBody.ReqCalories, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r31.percentageForBody.protein, "G ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r31.percentageForBody.carb, "G ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r31.percentageForBody.fats, "G ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r31.NumDay);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r31.NumDays);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.NumDay != "Choose Day");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.Diets.length == 0 && ctx_r31.NumMeal != "Choose Num Meal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.Diets.length != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.allmeals.length != 0);
} }
function foodsComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Food Analysis");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Understand how the food you\u2019re eating contributes to your daily ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "calories , macronutrients, and micronutrients.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function foodsComponent_div_17_h5_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r77.NameFoods, " (100g)");
} }
function foodsComponent_div_17_h5_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r77.NameFoods, " (One)");
} }
function foodsComponent_div_17_i_8_Template(rf, ctx) { if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function foodsComponent_div_17_i_8_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r89); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const item_r77 = ctx_r88.$implicit; const i_r78 = ctx_r88.index; const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r87.DeleteFood(item_r77.id, i_r78); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function foodsComponent_div_17_i_9_Template(rf, ctx) { if (rf & 1) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function foodsComponent_div_17_i_9_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const item_r77 = ctx_r91.$implicit; const i_r78 = ctx_r91.index; const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r90.ShowUpdateData(item_r77.id, i_r78); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function foodsComponent_div_17_a_18_Template(rf, ctx) { if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function foodsComponent_div_17_a_18_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r95); const item_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r93.inde(item_r77.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add To Meal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function foodsComponent_div_17_a_19_Template(rf, ctx) { if (rf & 1) {
    const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function foodsComponent_div_17_a_19_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r98); const item_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r96.inde(item_r77.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add To Meal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function foodsComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, foodsComponent_div_17_h5_6_Template, 2, 1, "h5", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, foodsComponent_div_17_h5_7_Template, 2, 1, "h5", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, foodsComponent_div_17_i_8_Template, 1, 0, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, foodsComponent_div_17_i_9_Template, 1, 0, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, foodsComponent_div_17_a_18_Template, 2, 0, "a", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, foodsComponent_div_17_a_19_Template, 2, 0, "a", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r77 = ctx.$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r77.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r77.TypeFood == "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r77.TypeFood == "Count");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r33.TypeUser == "admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r33.TypeUser == "admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("calories: ", item_r77.calories, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u2022Carbs: ", item_r77.Carbs, " g ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u2022Fat: ", item_r77.Fat, " g ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u2022Protein: ", item_r77.Protein, " g ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r77.TypeFood == "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r77.TypeFood == "Count");
} }
function foodsComponent_div_33_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function foodsComponent_div_33_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name must be at least 3 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function foodsComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, foodsComponent_div_33_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, foodsComponent_div_33_div_2_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r35.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r35.errors.minlength);
} }
function foodsComponent_div_36_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " calories is required and must be num. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function foodsComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, foodsComponent_div_36_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r37.errors.required);
} }
function foodsComponent_div_39_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Protein is required and must be num. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function foodsComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, foodsComponent_div_39_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r39.errors.required);
} }
function foodsComponent_div_42_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Carbs is required and must be num. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function foodsComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, foodsComponent_div_42_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r41.errors.required);
} }
function foodsComponent_div_45_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Fats is required and must be num. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function foodsComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, foodsComponent_div_45_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r43.errors.required);
} }
const _c0 = function (a0) { return { width: a0 }; };
function foodsComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r45.percentage + "%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuenow", ctx_r45.percentage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r45.percentage, "%");
} }
function foodsComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function foodsComponent_div_81_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function foodsComponent_div_81_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name must be at least 3 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function foodsComponent_div_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, foodsComponent_div_81_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, foodsComponent_div_81_div_2_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r35.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r35.errors.minlength);
} }
function foodsComponent_div_84_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " calories is required and must be num. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function foodsComponent_div_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, foodsComponent_div_84_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r37.errors.required);
} }
function foodsComponent_div_87_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Protein is required and must be num. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function foodsComponent_div_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, foodsComponent_div_87_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r39.errors.required);
} }
function foodsComponent_div_90_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Carbs is required and must be num. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function foodsComponent_div_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, foodsComponent_div_90_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r41.errors.required);
} }
function foodsComponent_div_93_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Fats is required and must be num. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function foodsComponent_div_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, foodsComponent_div_93_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r43.errors.required);
} }
function foodsComponent_div_131_Template(rf, ctx) { if (rf & 1) {
    const _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "pagination-controls", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function foodsComponent_div_131_Template_pagination_controls_pageChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r112); const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r111.pageNumber = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function foodsComponent_div_131_Template_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r112); const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r113.pageSize = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "12");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "15");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "18");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r58.pageSize);
} }
function foodsComponent_div_141_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item2_r118 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item2_r118.name, " ", item2_r118.amount, "");
} }
function foodsComponent_div_141_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Note: To Save Your Meals The Rest Of The Calories Must less than 100 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function foodsComponent_div_141_Template(rf, ctx) { if (rf & 1) {
    const _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, foodsComponent_div_141_div_6_Template, 2, 2, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function foodsComponent_div_141_Template_i_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r120); const i_r115 = ctx.index; const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r119.removeMeals(i_r115); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, foodsComponent_div_141_div_9_Template, 2, 0, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r114 = ctx.$implicit;
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r114.NumMeal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r114.SelFoods);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r59.percentageForBody.ReqCalories > 100);
} }
const _c1 = function (a0, a1) { return { itemsPerPage: a0, currentPage: a1 }; };
class foodsComponent {
    constructor(spinner, router, foodsSer, toastr, db, authservice) {
        this.spinner = spinner;
        this.router = router;
        this.foodsSer = foodsSer;
        this.toastr = toastr;
        this.db = db;
        this.authservice = authservice;
        /////GetFood/////
        this.Datafoods = [];
        this.DatafoodsName = [];
        this.Searchfoods = "";
        ////////////////cal calories//////
        this.percentageForBody = {
            "ReqCalories": 0,
            "protein": 0,
            "fats": 0,
            "carb": 0
        };
        this.DataUsers = [];
        ////////////Diets/////////
        this.Diets = [];
        this.load = true;
        //pagination
        this.pageNumber = 1;
        this.pageSize = 9;
        /////////////////
        this.NumMeal = 'Choose Num Meal';
        this.allmeals = [];
        this.nummeals = [];
        this.caloriesUses = 0;
        this.proteinUses = 0;
        this.carbUses = 0;
        this.fatUses = 0;
        this.NumDays = [];
        this.NumDay = 'Choose Day';
        this.TypeFood = "Amount";
        this.TypeUser = localStorage.getItem("typeuser");
        if (!localStorage.getItem('foo')) {
            localStorage.setItem('foo', 'no reload');
            location.reload();
        }
        else {
            localStorage.removeItem('foo');
        }
        this.spinner.show();
        this.Getfoods();
        this.Seletions();
        this.getpercentageForBody();
        this.heroForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'Namefoods': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.Namefoods, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3),
            ]),
            'calories': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.calories, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(0),
            ]),
            'Protein': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.Protein, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(0),
            ]),
            'Carbs': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.Carbs, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(0),
            ]),
            'Fat': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.Fat, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(0),
            ]),
        });
        setTimeout(() => {
            this.spinner.hide();
        }, 1000);
    }
    ngOnInit() {
        // console.log(document.getElementById("navbarNavAltMarkup"))
        // var x = window.matchMedia("(max-width: 700px)")
        document.getElementById('footer').style.width = "100%";
        document.getElementById('footer').style.marginLeft = "0%";
    }
    AddAndUpdatefood() {
        this.foodsSer.Add_Foods(this.Namefoods, this.calories, this.Protein, this.Carbs, this.Fat, this.TypeFood);
    }
    addfood() {
        this.AddAndUpdatefood();
        setTimeout(function () {
            if (!localStorage.getItem('foo')) {
                localStorage.setItem('foo', 'no reload');
                location.reload();
            }
            else {
                localStorage.removeItem('foo');
            }
        }, 2000);
        this.toastr.successToastr("Food Added");
    }
    Getfoods() {
        this.foodsSer.get_Foods().subscribe(res => {
            this.Datafoods = res.map(e => {
                return Object.assign({ id: e.payload.doc.id }, e.payload.doc.data());
            });
            this.GetImage();
            this.DatafoodsName = [];
            for (let i = 0; i < this.Datafoods.length; i++) {
                if (this.Datafoods[i].NameFoods.toUpperCase().includes(this.Searchfoods.toUpperCase())) {
                    this.DatafoodsName.push(this.Datafoods[i]);
                }
            }
            console.log(this.DatafoodsName.sort((a, b) => a.NameFoods > b.NameFoods ? 1 : -1));
        }, err => {
            this.toastr.errorToastr(err.message);
        });
    }
    // first() {
    //   this._data = new BehaviorSubject([]);
    //   this.data = this._data.asObservable();
    //   const scoresRef = this.getCollection( ref => ref
    //     .orderBy('score', 'desc')
    //     .limit(6))
    //     .subscribe(data => {
    //       this.latestEntry = data[data.length - 1].doc;
    //       this._data.next(data);
    //     });
    //   }
    SelectImg(event) {
        this.selectedFiles = event.target.files;
        console.log(this.selectedFiles);
    }
    AddImgFood() {
        const file = this.selectedFiles.item(0);
        this.selectedFiles = undefined;
        this.currentFileUpload = new src_app_Models_fileupload_model__WEBPACK_IMPORTED_MODULE_2__["Fileupload"](file);
        // console.log(this.currentFileUpload.url)
        this.foodsSer.Add_Img_Food(this.currentFileUpload).subscribe(percentage => {
            this.percentage = Math.round(percentage);
            if (percentage == 100) {
                this.wiating();
            }
        }, error => {
            console.log(error);
        });
    }
    DeleteFood(id, index) {
        this.foodsSer.Delete_Foods(id);
        for (let j = 0; j < this.DatafoodsName.length; j++) {
            if (id == this.Datafoods[j].id) {
                for (let i = 0; i < this.fileUploads.length; i++) {
                    if (this.fileUploads[i].url == this.DatafoodsName[j].url) {
                        this.DeleteImg(this.fileUploads[i]);
                    }
                }
            }
        }
        this.toastr.successToastr("Food Deleted");
        setTimeout(() => {
            if (!localStorage.getItem('foo')) {
                localStorage.setItem('foo', 'no reload');
                location.reload();
            }
            else {
                localStorage.removeItem('foo');
            }
        }, 1000);
    }
    Updatefood() {
        this.foodsSer.update_food(this.Namefoods, this.calories, this.Protein, this.Carbs, this.Fat, this.TypeFood, localStorage.getItem("IdFood"));
    }
    // updatefood(){
    //   this.foodsSer.Delete_Foods(localStorage.getItem("IdFood"));
    //   this.Updatefood()
    // }
    ShowUpdateData(id, index) {
        for (let i = 0; index < this.Datafoods.length; i++) {
            if (id == this.Datafoods[i].id) {
                console.log(this.Datafoods[i].id);
                this.Namefoods = this.Datafoods[i].NameFoods;
                this.calories = this.Datafoods[i].calories;
                this.Protein = this.Datafoods[i].Protein;
                this.Carbs = this.Datafoods[i].Carbs;
                this.Fat = this.Datafoods[i].Fat;
                localStorage.setItem('urlPhotoFood', this.Datafoods[i].url);
                localStorage.setItem('IdFood', this.Datafoods[i].id);
            }
        }
    }
    GetImage() {
        this.foodsSer.get_Img(this.Datafoods.length).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(changes => changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val()))))).subscribe(fileUploads => {
            this.fileUploads = fileUploads;
        });
    }
    DeleteImg(fileUpload) {
        this.foodsSer.delete_Img(fileUpload);
    }
    ClearData() {
        // if (!localStorage.getItem('foo')) { 
        //   localStorage.setItem('foo', 'no reload') 
        //   location.reload() 
        // } else {
        //   localStorage.removeItem('foo') 
        // }
        this.Namefoods = null;
        this.calories = null;
        this.Protein = null;
        this.Carbs = null;
        this.Fat = null;
        this.NumGrams = null;
    }
    CurrentcaloriesAmount() {
        for (let i = 0; i < this.Datafoods.length; i++) {
            if (this.Datafoods[i].id == this.selectfood) {
                if (this.percentageForBody.ReqCalories >= this.Datafoods[i].calories / 100 * this.NumGrams) {
                    // console.log(this.NumDay)
                    if (this.NumDay == 'Choose Day') {
                        this.toastr.warningToastr("Please Choose Day Frist");
                    }
                    else {
                        if (this.NumMeal == 'Choose Num Meal') {
                            this.toastr.warningToastr("Please Choose Num Meal Frist");
                        }
                        else {
                            this.percentageForBody.ReqCalories = Math.floor(this.percentageForBody.ReqCalories - (this.Datafoods[i].calories / 100 * this.NumGrams));
                            this.percentageForBody.protein = Math.floor(this.percentageForBody.protein - (this.Datafoods[i].Protein / 100 * this.NumGrams));
                            this.percentageForBody.carb = Math.floor(this.percentageForBody.carb - (this.Datafoods[i].Carbs / 100 * this.NumGrams));
                            this.percentageForBody.fats = Math.floor(this.percentageForBody.fats - (this.Datafoods[i].Fat / 100 * this.NumGrams));
                            this.Diets.push({ "name": this.Datafoods[i].NameFoods, "amount": this.NumGrams });
                            this.caloriesUses = this.caloriesUses + this.Datafoods[i].calories / 100 * this.NumGrams;
                            this.proteinUses = this.proteinUses + this.Datafoods[i].Protein / 100 * this.NumGrams;
                            this.carbUses = this.carbUses + this.Datafoods[i].Carbs / 100 * this.NumGrams;
                            this.fatUses = this.fatUses + this.Datafoods[i].Fat / 100 * this.NumGrams;
                        }
                    }
                    this.NumGrams = null;
                    // console.log(this.NumDay)
                }
                else {
                    this.toastr.warningToastr("Your Calories Available Less Than Foods Select");
                }
            }
        }
    }
    CurrentcaloriesCount() {
        for (let i = 0; i < this.Datafoods.length; i++) {
            if (this.Datafoods[i].id == this.selectfood) {
                if (this.percentageForBody.ReqCalories >= this.Datafoods[i].calories * this.NumGrams) {
                    console.log(this.NumDay);
                    if (this.NumDay == 'Choose Day') {
                        this.toastr.warningToastr("Please Choose Day Frist");
                    }
                    else {
                        if (this.NumMeal == 'Choose Num Meal') {
                            this.toastr.warningToastr("Please Choose Num Meal Frist");
                        }
                        else {
                            this.percentageForBody.ReqCalories = Math.floor(this.percentageForBody.ReqCalories - (this.Datafoods[i].calories * this.NumGrams));
                            this.percentageForBody.protein = Math.floor(this.percentageForBody.protein - (this.Datafoods[i].Protein * this.NumGrams));
                            this.percentageForBody.carb = Math.floor(this.percentageForBody.carb - (this.Datafoods[i].Carbs * this.NumGrams));
                            this.percentageForBody.fats = Math.floor(this.percentageForBody.fats - (this.Datafoods[i].Fat * this.NumGrams));
                            this.Diets.push({ "name": this.Datafoods[i].NameFoods, "amount": this.NumGrams });
                            this.caloriesUses = this.caloriesUses + this.Datafoods[i].calories * this.NumGrams;
                            this.proteinUses = this.proteinUses + this.Datafoods[i].Protein * this.NumGrams;
                            this.carbUses = this.carbUses + this.Datafoods[i].Carbs * this.NumGrams;
                            this.fatUses = this.fatUses + this.Datafoods[i].Fat * this.NumGrams;
                        }
                    }
                    this.NumGrams = null;
                    // console.log(this.NumDay)
                }
                else {
                    this.toastr.warningToastr("Your Calories Available Less Than Foods Select");
                }
            }
        }
    }
    SaveThisMeal() {
        for (let j = 0; j < this.nummeals.length; j++) {
            if (this.nummeals[j] == this.NumMeal) {
                this.allmeals.push({ "NumMeal": this.NumMeal, "SelFoods": this.Diets, "caloriesOfMeal": Math.floor(this.caloriesUses), "proteinOfMeal": Math.floor(this.proteinUses), "carbOfMeal": Math.floor(this.carbUses), "fatOfMeal": Math.floor(this.fatUses) });
                this.caloriesUses = 0;
                this.proteinUses = 0;
                this.carbUses = 0;
                this.fatUses = 0;
            }
        }
        this.Diets = [];
        console.log(this.allmeals);
    }
    finish() {
        this.foodsSer.add_meals(localStorage.getItem("iduser"), this.allmeals, this.NumDay);
    }
    inde(id) {
        this.selectfood = id;
    }
    wiating() {
        setTimeout(() => {
            this.load = false;
        }, 10000);
    }
    pageChanged(pN) {
        this.pageNumber = pN;
        this.Getfoods();
    }
    onChangePage(pageOfItems) {
        // update current page of items
        this.DatafoodsName = pageOfItems;
    }
    Test() {
        var nummeals = [];
        for (let i = 1; i <= 10; i++) {
            nummeals.push("Meal " + [i]);
        }
        for (let j = 0; j < nummeals.length; j++) {
            if (nummeals[j] == this.NumMeal) {
                this.allmeals.push({ NumMeal: this.NumMeal, SelFoods: this.Diets });
                console.log(this.allmeals);
            }
        }
    }
    Seletions() {
        for (let i = 1; i <= 10; i++) {
            this.nummeals.push("Meal " + [i]);
        }
        for (let i = 1; i <= 7; i++) {
            this.NumDays.push("day " + [i]);
        }
    }
    removeMeals(index) {
        this.percentageForBody.ReqCalories = this.percentageForBody.ReqCalories + this.allmeals[index].caloriesOfMeal;
        this.percentageForBody.protein = this.percentageForBody.protein + this.allmeals[index].proteinOfMeal;
        this.percentageForBody.carb = this.percentageForBody.carb + this.allmeals[index].carbOfMeal;
        this.percentageForBody.fats = this.percentageForBody.fats + this.allmeals[index].fatOfMeal;
        this.allmeals.splice(index, 1);
    }
    // test(){
    //   console.log(this.NumDay)
    // }
    getpercentageForBody() {
        this.authservice.get_Users().subscribe(res => {
            this.DataUsers = res.map(e => {
                return Object.assign({ id: e.payload.doc.id }, e.payload.doc.data());
            });
            //  console.log(this.DataUsers)
            for (let i = 0; i < this.DataUsers.length; i++) {
                if (this.DataUsers[i].mail == localStorage.getItem("UserLogMail")) {
                    this.percentageForBody = this.DataUsers[i].percentageForBody;
                    console.log(this.percentageForBody);
                }
            }
        }, err => {
            this.toastr.errorToastr(err.message);
        });
    }
}
foodsComponent.ɵfac = function foodsComponent_Factory(t) { return new (t || foodsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Service_foods_service__WEBPACK_IMPORTED_MODULE_6__["foodsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__["ToastrManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_8__["AngularFireDatabase"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"])); };
foodsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: foodsComponent, selectors: [["app-foods"]], decls: 147, vars: 43, consts: [[1, "allcontainet"], [1, "col-12"], [1, "row"], [1, "col-12", "col-lg-12"], [1, "row", "sectionsearch"], [1, "col-lg-8", "col-8"], ["type", "submit", 1, "SearchBtn", "form-control", "input-lg", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-search", "fa-2x"], ["type", "search", "placeholder", "Search For A Food ", "maxlength", "45", 1, "SearchInput", "form-control", "input-lg", 2, "padding-left", "25px", "font-size", "28px", "height", "61px", 3, "ngModel", "ngModelChange"], ["class", "col-lg-4 col-4", 4, "ngIf"], [1, "col-2"], ["class", "calories text-center col-12", 4, "ngIf"], [1, "col-10"], [1, "container"], ["class", "CaptionSearch text-center", 4, "ngIf"], ["class", "col-lg-4 col-md-6 col-sm-12  ", 4, "ngFor", "ngForOf"], [2, "z-index", "2"], ["loginForm", "ngForm"], ["id", "myModal", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-dismiss", "modal", 1, "close", 3, "click"], [1, "modal-body"], ["type", "text", "placeholder", "Name Food", "maxlength", "50", "name", "name", "required", "", "minlength", "3", 1, "form-control", "input-lg", "text-center", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "number", "placeholder", "calories", "maxlength", "3", "name", "name1", "required", "", 1, "form-control", "input-lg", "text-center", 3, "ngModel", "ngModelChange"], ["cal", "ngModel"], ["type", "number", "placeholder", "Protein", "maxlength", "3", "name", "name2", "required", "", 1, "form-control", "input-lg", "text-center", 3, "ngModel", "ngModelChange"], ["Pro", "ngModel"], ["type", "number", "placeholder", "Carbs", "maxlength", "3", "name", "name3", "required", "", "minlength", "0", 1, "form-control", "input-lg", "text-center", 3, "ngModel", "ngModelChange"], ["Carb", "ngModel"], ["type", "number", "placeholder", "Fat", "maxlength", "3", "name", "name4", "required", "", "minlength", "0", 1, "form-control", "input-lg", "text-center", 3, "ngModel", "ngModelChange"], ["Fats", "ngModel"], [1, "text-center"], ["for", "Type", 2, "margin-right", "20px"], ["type", "radio", "id", "count", "name", "count", "value", "Count", 3, "ngModel", "ngModelChange"], ["for", "count", 2, "margin-right", "30px"], ["type", "radio", "id", "Amount", "name", "gender", "value", "Amount", 3, "ngModel", "ngModelChange"], ["for", "Amount"], [1, "btn", "btn-default"], ["type", "file", 3, "change"], [1, "btn", "btn-success", 3, "disabled", "click"], ["class", "progress", 4, "ngIf"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default", 3, "click"], ["type", "submit", "data-dismiss", "modal", 1, "btn", "btn-default", "BtnAddFoodModel", 3, "disabled", "click"], [4, "ngIf"], ["UpdateForm", "ngForm"], ["id", "myModal2", "role", "dialog", 1, "modal", "fade"], [1, "container", 2, "z-index", "2"], ["id", "calories", "role", "dialog", 1, "modal", "fade"], ["type", "number", "name", "grams", "placeholder", "How Much Grams Need", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", "data-dismiss", "modal", 1, "btn", "btn-default", "BtnAddFoodModel", 3, "click"], ["id", "calories2", "role", "dialog", 1, "modal", "fade"], ["type", "button", "data-dismiss", "modal", 1, "close"], ["type", "number", "name", "grams", "placeholder", "Count You Need", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default"], ["class", "paginationstyle", "style", "margin-top: 3%;margin-left: 50%;", 4, "ngIf"], ["id", "meals", "role", "dialog", 1, "modal", "fade"], ["class", "modal-body", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-4"], ["data-toggle", "modal", "data-target", "#myModal", "type", "submit", 1, "AddBtn", "form-control", "input-lg", "btn-center"], [1, "calories", "text-center", "col-12"], [1, "row", 2, "margin-left", "0px", "margin-right", "0px"], [1, "fontSize", "col-xl-3", "col-lg-6", "col-md-6", "col-sm-12"], ["name", "day", 1, "meals", 2, "margin-top", "10px", 3, "ngModel", "ngModelChange"], ["disabled", ""], [4, "ngFor", "ngForOf"], ["class", "meals", "name", "meals", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "addfoods", 4, "ngIf"], ["class", "form-contro btn-savemeal", "data-toggle", "modal", "data-target", "#meals", 4, "ngIf"], ["name", "meals", 1, "meals", 3, "ngModel", "ngModelChange"], [1, "addfoods"], [1, "form-contro", "btn-savemeal", 3, "click"], ["data-toggle", "modal", "data-target", "#meals", 1, "form-contro", "btn-savemeal"], [1, "CaptionSearch", "text-center"], ["alt", "Food Search", "src", "assets/FoodHighlightCalories.jpg", 1, "jss60"], [1, "col-lg-4", "col-md-6", "col-sm-12"], [1, "card", "Getfoods"], ["alt", "Card image cap", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "col-xs-12", "col-12", 2, "padding-top", "16%", "padding-bottom", "10%"], ["class", "card-title", 4, "ngIf"], ["class", "fa fa-trash fa-lg", "aria-hidden", "true", 3, "click", 4, "ngIf"], ["class", "fa fa-pencil fa-lg", "aria-hidden", "true", "data-toggle", "modal", "data-target", "#myModal2", 3, "click", 4, "ngIf"], [1, "card-text"], ["data-toggle", "modal", "data-target", "#calories", "class", "btn btn-primary addToMeal", 3, "click", 4, "ngIf"], ["data-toggle", "modal", "data-target", "#calories2", "class", "btn btn-primary addToMeal", 3, "click", 4, "ngIf"], [1, "card-title"], ["aria-hidden", "true", 1, "fa", "fa-trash", "fa-lg", 3, "click"], ["aria-hidden", "true", "data-toggle", "modal", "data-target", "#myModal2", 1, "fa", "fa-pencil", "fa-lg", 3, "click"], ["data-toggle", "modal", "data-target", "#calories", 1, "btn", "btn-primary", "addToMeal", 3, "click"], ["data-toggle", "modal", "data-target", "#calories2", 1, "btn", "btn-primary", "addToMeal", 3, "click"], [1, "alert", "alert-danger"], [1, "progress"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-info", "progress-bar-striped", 3, "ngStyle"], [1, "fa", "fa-spinner", "fa-pulse", "fa-2x", "fa-fw"], [1, "paginationstyle", 2, "margin-top", "3%", "margin-left", "50%"], [3, "pageChange"], [1, "form-group", "options", "pages", 2, "float", "left", "margin-top", "-39px"], [1, "input-group", "input-group-sm"], ["name", "pageChangedName", 3, "ngModel", "ngModelChange"], ["style", "\n              font-size: 13px;\n              margin-top: 25px;\n              margin-left: 15px;\n              color:var(--maincolor);\n              ", 4, "ngIf"], [2, "font-size", "13px", "margin-top", "25px", "margin-left", "15px", "color", "var(--maincolor)"]], template: function foodsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function foodsComponent_Template_button_click_7_listener() { return ctx.Getfoods(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function foodsComponent_Template_input_ngModelChange_9_listener($event) { return ctx.Searchfoods = $event; })("ngModelChange", function foodsComponent_Template_input_ngModelChange_9_listener() { return ctx.Getfoods(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, foodsComponent_div_10_Template, 4, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, foodsComponent_div_12_Template, 34, 10, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, foodsComponent_div_16_Template, 8, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, foodsComponent_div_17_Template, 20, 11, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "form", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Add Food");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function foodsComponent_Template_button_click_28_listener() { return ctx.ClearData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function foodsComponent_Template_input_ngModelChange_31_listener($event) { return ctx.Namefoods = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, foodsComponent_div_33_Template, 3, 2, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function foodsComponent_Template_input_ngModelChange_34_listener($event) { return ctx.calories = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, foodsComponent_div_36_Template, 2, 1, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 29, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function foodsComponent_Template_input_ngModelChange_37_listener($event) { return ctx.Protein = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, foodsComponent_div_39_Template, 2, 1, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 31, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function foodsComponent_Template_input_ngModelChange_40_listener($event) { return ctx.Carbs = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, foodsComponent_div_42_Template, 2, 1, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 33, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function foodsComponent_Template_input_ngModelChange_43_listener($event) { return ctx.Fat = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, foodsComponent_div_45_Template, 2, 1, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Type Foods:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function foodsComponent_Template_input_ngModelChange_49_listener($event) { return ctx.TypeFood = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Count");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function foodsComponent_Template_input_ngModelChange_52_listener($event) { return ctx.TypeFood = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function foodsComponent_Template_input_change_57_listener($event) { return ctx.SelectImg($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function foodsComponent_Template_button_click_58_listener() { return ctx.AddImgFood(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, foodsComponent_div_60_Template, 3, 5, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function foodsComponent_Template_button_click_62_listener() { return ctx.ClearData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function foodsComponent_Template_button_click_64_listener() { return ctx.addfood(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "ADD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, foodsComponent_div_66_Template, 4, 0, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "form", 16, 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Update Food");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function foodsComponent_Template_button_click_76_listener() { return ctx.ClearData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "input", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function foodsComponent_Template_input_ngModelChange_79_listener($event) { return ctx.Namefoods = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, foodsComponent_div_81_Template, 3, 2, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "input", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function foodsComponent_Template_input_ngModelChange_82_listener($event) { return ctx.calories = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, foodsComponent_div_84_Template, 2, 1, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "input", 29, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function foodsComponent_Template_input_ngModelChange_85_listener($event) { return ctx.Protein = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, foodsComponent_div_87_Template, 2, 1, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "input", 31, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function foodsComponent_Template_input_ngModelChange_88_listener($event) { return ctx.Carbs = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, foodsComponent_div_90_Template, 2, 1, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "input", 33, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function foodsComponent_Template_input_ngModelChange_91_listener($event) { return ctx.Fat = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, foodsComponent_div_93_Template, 2, 1, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function foodsComponent_Template_button_click_95_listener() { return ctx.ClearData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function foodsComponent_Template_button_click_97_listener() { return ctx.Updatefood(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Add Grams");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function foodsComponent_Template_button_click_106_listener() { return ctx.ClearData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function foodsComponent_Template_input_ngModelChange_109_listener($event) { return ctx.NumGrams = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function foodsComponent_Template_button_click_111_listener() { return ctx.ClearData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function foodsComponent_Template_button_click_113_listener() { return ctx.CurrentcaloriesAmount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "ADD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Add Count");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function foodsComponent_Template_input_ngModelChange_125_listener($event) { return ctx.NumGrams = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function foodsComponent_Template_button_click_129_listener() { return ctx.CurrentcaloriesCount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "ADD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](131, foodsComponent_div_131_Template, 17, 1, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Meals Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](141, foodsComponent_div_141_Template, 10, 3, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function foodsComponent_Template_button_click_145_listener() { return ctx.finish(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "ADD Meals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
        const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
        const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);
        const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);
        const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);
        const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44);
        const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Searchfoods);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.TypeUser == "admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.percentageForBody.ReqCalories != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.DatafoodsName.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 37, ctx.DatafoodsName, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](40, _c1, ctx.pageSize, ctx.pageNumber)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Namefoods);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r35.invalid && (_r35.dirty || _r35.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.calories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r37.invalid && (_r37.dirty || _r37.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Protein);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r39.invalid && (_r39.dirty || _r39.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Carbs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r41.invalid && (_r41.dirty || _r41.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Fat);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r43.invalid && (_r43.dirty || _r43.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.TypeFood);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.TypeFood);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.selectedFiles || !_r34.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentFileUpload);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r34.valid || ctx.percentage != 100 || ctx.load == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.percentage == 100 && ctx.load == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Namefoods);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r35.invalid && (_r35.dirty || _r35.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.calories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r37.invalid && (_r37.dirty || _r37.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Protein);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r39.invalid && (_r39.dirty || _r39.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Carbs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r41.invalid && (_r41.dirty || _r41.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Fat);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r43.invalid && (_r43.dirty || _r43.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r47.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.NumGrams);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.NumGrams);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.DatafoodsName.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allmeals);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.percentageForBody.ReqCalories > 100);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgStyle"], ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginationControlsComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginatePipe"]], styles: ["[_ngcontent-%COMP%]:root {\n  --maincolor: var(--maincolor);\n}\n\n.allcontainet[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.allcontainet[_ngcontent-%COMP%]   .sectionsearch[_ngcontent-%COMP%] {\n  margin-left: 331px;\n  margin-right: 15px;\n}\n\n.allcontainet[_ngcontent-%COMP%]   .col-lg-12[_ngcontent-%COMP%] {\n  margin-top: 12%;\n  margin-bottom: 8%;\n}\n\n.allcontainet[_ngcontent-%COMP%]   .col-lg-12[_ngcontent-%COMP%]   .AddBtn[_ngcontent-%COMP%] {\n  background-color: var(--maincolor);\n  color: white;\n  width: 100%;\n  height: 3em;\n  font-size: 20px;\n}\n\n.allcontainet[_ngcontent-%COMP%]   .col-lg-12[_ngcontent-%COMP%]   .SearchInput[_ngcontent-%COMP%] {\n  border-radius: 0 4px 4px 0;\n  border-left: none;\n  height: 3.8em;\n  padding: 1rem 0;\n  width: 75%;\n}\n\n.allcontainet[_ngcontent-%COMP%]   .col-lg-12[_ngcontent-%COMP%]   .SearchInput[_ngcontent-%COMP%]:focus {\n  border-color: var(--maincolor);\n  box-shadow: none;\n}\n\n.allcontainet[_ngcontent-%COMP%]   .col-lg-12[_ngcontent-%COMP%]   .SearchBtn[_ngcontent-%COMP%] {\n  border-radius: 4px 0 0 4px;\n  width: 25%;\n  background-color: var(--maincolor);\n  color: white;\n  height: 3.8em;\n  border-right: none;\n}\n\n.allcontainet[_ngcontent-%COMP%]   .CaptionSearch[_ngcontent-%COMP%] {\n  margin-top: 4%;\n  margin-left: 25%;\n}\n\n.allcontainet[_ngcontent-%COMP%]   .CaptionSearch[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-top: 2%;\n  font-size: 2rem;\n}\n\n.allcontainet[_ngcontent-%COMP%]   .CaptionSearch[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-top: 2%;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.75;\n}\n\n.allcontainet[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-top: 5%;\n}\n\n.allcontainet[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .BtnAddFoodModel[_ngcontent-%COMP%] {\n  background: var(--maincolor);\n  color: white;\n}\n\n.allcontainet[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .h3[_ngcontent-%COMP%] {\n  color: var(--maincolor);\n}\n\n.allcontainet[_ngcontent-%COMP%]   .Getfoods[_ngcontent-%COMP%] {\n  box-shadow: 2px 2px 12px 3px #ccc;\n  width: 18rem;\n  position: relative;\n  border-radius: 20px;\n  transition: all 0.2s ease-in-out;\n  margin: 4% 0 4% 20%;\n  border-bottom: 1px solid #eeeeee;\n}\n\n.allcontainet[_ngcontent-%COMP%]   .Getfoods[_ngcontent-%COMP%]   .card-img-top[_ngcontent-%COMP%] {\n  height: 196px;\n  border-radius: 20px 20px 0 0;\n}\n\n.allcontainet[_ngcontent-%COMP%]   .Getfoods[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n\n.allcontainet[_ngcontent-%COMP%]   .Getfoods[_ngcontent-%COMP%]   .fa-trash[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n}\n\n.allcontainet[_ngcontent-%COMP%]   .Getfoods[_ngcontent-%COMP%]   .fa-pencil[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 25px;\n}\n\n.allcontainet[_ngcontent-%COMP%]   .Getfoods[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  margin-top: -17%;\n  padding-bottom: 3%;\n  height: 268px;\n}\n\n.allcontainet[_ngcontent-%COMP%]   .Getfoods[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .addToMeal[_ngcontent-%COMP%] {\n  position: absolute !important;\n  left: 20px !important;\n  right: 20px !important;\n  width: auto !important;\n  bottom: 10px !important;\n}\n\n.allcontainet[_ngcontent-%COMP%]   .Getfoods[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: var(--maincolor);\n  font-size: 20px;\n}\n\n.allcontainet[_ngcontent-%COMP%]   .Getfoods[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-top: -9%;\n  margin-bottom: 0%;\n  color: var(--maincolor);\n  opacity: 0.8;\n  font-size: 1.3rem;\n}\n\n.allcontainet[_ngcontent-%COMP%]   .Getfoods[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  opacity: 0.8;\n  margin-bottom: 0.5rem;\n}\n\n.allcontainet[_ngcontent-%COMP%]   .Getfoods[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background-color: var(--maincolor);\n  border-color: var(--maincolor);\n  width: 100%;\n  color: white;\n}\n\n.allcontainet[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%] {\n  margin-bottom: 4%;\n}\n\n.allcontainet[_ngcontent-%COMP%]   .calories[_ngcontent-%COMP%] {\n  background-color: var(--maincolor);\n  margin-top: 15px;\n  position: fixed;\n  z-index: 1;\n  width: 23%;\n  height: auto;\n  padding-top: 1%;\n  left: 0px;\n}\n\n.allcontainet[_ngcontent-%COMP%]   .calories[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .allcontainet[_ngcontent-%COMP%]   .calories[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.allcontainet[_ngcontent-%COMP%]   .calories[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-bottom: 5%;\n}\n\n.allcontainet[_ngcontent-%COMP%]   .calories[_ngcontent-%COMP%]   .btn-savemeal[_ngcontent-%COMP%] {\n  width: 60%;\n  background-color: white;\n  margin-bottom: 2%;\n  margin-top: 2%;\n  color: var(--maincolor);\n}\n\n.allcontainet[_ngcontent-%COMP%]   .calories[_ngcontent-%COMP%]   .meals[_ngcontent-%COMP%], .allcontainet[_ngcontent-%COMP%]   .calories[_ngcontent-%COMP%]   .addfoods[_ngcontent-%COMP%] {\n  margin-bottom: 2%;\n}\n\n.allcontainet[_ngcontent-%COMP%]   .calories[_ngcontent-%COMP%]   .meals[_ngcontent-%COMP%] {\n  background-color: var(--maincolor);\n  color: white;\n}\n\n.allcontainet[_ngcontent-%COMP%]   .ngx-pagination[_ngcontent-%COMP%] {\n  margin-left: 49% !important;\n  margin-bottom: 1rem;\n  margin-top: 2;\n}\n\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .allcontainet[_ngcontent-%COMP%]   .sectionsearch[_ngcontent-%COMP%]   .SearchInput[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n    height: 50px !important;\n    padding-left: 10px !important;\n  }\n  .allcontainet[_ngcontent-%COMP%]   .sectionsearch[_ngcontent-%COMP%]   .SearchBtn[_ngcontent-%COMP%] {\n    height: 50px !important;\n  }\n  .allcontainet[_ngcontent-%COMP%]   .sectionsearch[_ngcontent-%COMP%]   .AddBtn[_ngcontent-%COMP%] {\n    height: 50px !important;\n    font-size: 16px !important;\n  }\n  .allcontainet[_ngcontent-%COMP%]   .calories[_ngcontent-%COMP%] {\n    overflow: hidden;\n    width: 23%;\n  }\n\n  .paginationstyle[_ngcontent-%COMP%] {\n    margin-left: 37% !important;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .allcontainet[_ngcontent-%COMP%]   .sectionsearch[_ngcontent-%COMP%] {\n    margin-top: 28px !important;\n    margin-left: 200px !important;\n  }\n  .allcontainet[_ngcontent-%COMP%]   .sectionsearch[_ngcontent-%COMP%]   .SearchInput[_ngcontent-%COMP%] {\n    font-size: 15px !important;\n    height: 40px !important;\n    padding-left: 10px !important;\n  }\n  .allcontainet[_ngcontent-%COMP%]   .sectionsearch[_ngcontent-%COMP%]   .SearchBtn[_ngcontent-%COMP%] {\n    height: 40px !important;\n    font-size: 11px !important;\n  }\n  .allcontainet[_ngcontent-%COMP%]   .sectionsearch[_ngcontent-%COMP%]   .AddBtn[_ngcontent-%COMP%] {\n    height: 40px !important;\n    font-size: 11px !important;\n  }\n  .allcontainet[_ngcontent-%COMP%]   .CaptionSearch[_ngcontent-%COMP%] {\n    margin-left: 7% !important;\n  }\n  .allcontainet[_ngcontent-%COMP%]   .CaptionSearch[_ngcontent-%COMP%]   .jss60[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n  .allcontainet[_ngcontent-%COMP%]   .CaptionSearch[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    font-size: 0.7rem !important;\n  }\n  .allcontainet[_ngcontent-%COMP%]   .calories[_ngcontent-%COMP%] {\n    overflow: hidden;\n    width: 31%;\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n  }\n  .allcontainet[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    position: relative;\n    height: 225px !important;\n  }\n  .allcontainet[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 14px !important;\n  }\n  .allcontainet[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    font-size: 14px !important;\n  }\n  .allcontainet[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .fa-trash[_ngcontent-%COMP%] {\n    font-size: 17px !important;\n  }\n  .allcontainet[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .fa-pencil[_ngcontent-%COMP%] {\n    font-size: 17px !important;\n  }\n  .allcontainet[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n    font-size: 13px !important;\n  }\n  .allcontainet[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .addToMeal[_ngcontent-%COMP%] {\n    font-size: 15px !important;\n  }\n\n  .paginationstyle[_ngcontent-%COMP%] {\n    margin-left: 33% !important;\n  }\n}\n\n@media only screen and (max-width: 499px) {\n  .allcontainet[_ngcontent-%COMP%]   .col-lg-12[_ngcontent-%COMP%] {\n    top: 20px;\n    left: 100px;\n  }\n  .allcontainet[_ngcontent-%COMP%]   .col-lg-12[_ngcontent-%COMP%]   .sectionsearch[_ngcontent-%COMP%] {\n    margin-left: 0px !important;\n  }\n\n  .paginationstyle[_ngcontent-%COMP%] {\n    margin-left: 0% !important;\n  }\n\n  .calories[_ngcontent-%COMP%] {\n    width: 36% !important;\n  }\n  .calories[_ngcontent-%COMP%]   .fontSize[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .calories[_ngcontent-%COMP%]   .meals[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWxsQ29tcG9uZW50cy9mb29kcy9DOlxcVXNlcnNcXGNvbXBhXFxEb3dubG9hZHNcXGdpdGh1YiBwcm9qZWN0c1xcQmUtRml0XFxCZUZpdC9zcmNcXGFwcFxcQWxsQ29tcG9uZW50c1xcZm9vZHNcXGZvb2RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9BbGxDb21wb25lbnRzL2Zvb2RzL2Zvb2RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksNkJBQUE7QUNBSjs7QURFQTtFQUVJLGdCQUFBO0FDQUo7O0FEQ0k7RUFFSSxrQkFBQTtFQUNBLGtCQUFBO0FDQVI7O0FES0k7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNIUjs7QURLUTtFQUdJLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBRUEsZUFBQTtBQ05aOztBRFVRO0VBQ0ksMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQ1JaOztBRFVZO0VBQ0ksOEJBQUE7RUFDQSxnQkFBQTtBQ1JoQjs7QURZUTtFQUNJLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ1ZaOztBRGdCSTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQ2RSOztBRGdCUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDZFo7O0FEZ0JRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDZFo7O0FEcUJRO0VBQ0ksY0FBQTtBQ25CWjs7QUR1Qks7RUFDRyw0QkFBQTtFQUNBLFlBQUE7QUNyQlI7O0FEdUJJO0VBQ0ksdUJBQUE7QUNyQlI7O0FEeUJJO0VBQ0ksaUNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUVBLGdDQUFBO0VBc0JBLG1CQUFBO0VBQ0EsZ0NBQUE7QUM3Q1I7O0FEdUJRO0VBQ0ksYUFBQTtFQUNBLDRCQUFBO0FDckJaOztBRHlCUTtFQUNJLHFCQUFBO0FDdkJaOztBRHlCUTtFQUVJLGtCQUFBO0VBQ0EsVUFBQTtBQ3hCWjs7QUQyQlE7RUFFSSxrQkFBQTtFQUNBLFdBQUE7QUMxQlo7O0FEK0JRO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUM3Qlo7O0FEOEJZO0VBR0ksNkJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQzlCaEI7O0FEa0NhO0VBRUcsdUJBQUE7RUFDQSxlQUFBO0FDakNoQjs7QURtQ1k7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFFRCx1QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ2xDZjs7QURxQ1k7RUFDSSxZQUFBO0VBQ0EscUJBQUE7QUNuQ2hCOztBRHFDWTtFQUNJLGtDQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ25DaEI7O0FEMENJO0VBQ0ksaUJBQUE7QUN4Q1I7O0FEMENJO0VBQ0ksa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQ3hDUjs7QUR5Q1E7RUFDSSxZQUFBO0FDdkNaOztBRHlDUTtFQUNJLGlCQUFBO0FDdkNaOztBRHlDUTtFQUNJLFVBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FDdkNaOztBRDJDUTtFQUNJLGlCQUFBO0FDekNaOztBRDJDUTtFQUNJLGtDQUFBO0VBQ0EsWUFBQTtBQ3pDWjs7QUQ4Q0k7RUFDSSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQzVDUjs7QUR5REE7RUFNWTtJQUVJLDBCQUFBO0lBQ0EsdUJBQUE7SUFDQSw2QkFBQTtFQzVEZDtFRCtEVTtJQUVJLHVCQUFBO0VDOURkO0VEaUVVO0lBRUksdUJBQUE7SUFDQSwwQkFBQTtFQ2hFZDtFRG9FTTtJQUVJLGdCQUFBO0lBQ0EsVUFBQTtFQ25FVjs7RUR3RUU7SUFFSSwyQkFBQTtFQ3RFTjtBQUNGOztBRDBFQTtFQUlRO0lBRUksMkJBQUE7SUFDQSw2QkFBQTtFQzVFVjtFRDhFVTtJQUVJLDBCQUFBO0lBQ0EsdUJBQUE7SUFDQSw2QkFBQTtFQzdFZDtFRGdGVTtJQUVJLHVCQUFBO0lBQ0EsMEJBQUE7RUMvRWQ7RURrRlU7SUFFSSx1QkFBQTtJQUNBLDBCQUFBO0VDakZkO0VEcUZNO0lBRUksMEJBQUE7RUNwRlY7RURzRlU7SUFFSSxzQkFBQTtFQ3JGZDtFRHVGVTtJQUVJLDRCQUFBO0VDdEZkO0VEMkZNO0lBRUksZ0JBQUE7SUFDQSxVQUFBO0lBQ0EsNEJBQUE7SUFDQSw2QkFBQTtFQzFGVjtFRDZGTTtJQUVJLGtCQUFBO0lBQ0Esd0JBQUE7RUM1RlY7RUQ2RlU7SUFFSSwwQkFBQTtFQzVGZDtFRDhGVTtJQUVJLDBCQUFBO0VDN0ZkO0VEZ0dVO0lBRUksMEJBQUE7RUMvRmQ7RURrR1U7SUFFSSwwQkFBQTtFQ2pHZDtFRG9HVTtJQUVJLDBCQUFBO0VDbkdkO0VEc0dVO0lBRUksMEJBQUE7RUNyR2Q7O0VENkdFO0lBRUksMkJBQUE7RUMzR047QUFDRjs7QURpSEE7RUFJUTtJQUVJLFNBQUE7SUFDQSxXQUFBO0VDbkhWO0VEb0hVO0lBRUksMkJBQUE7RUNuSGQ7O0VEd0hFO0lBRUksMEJBQUE7RUN0SE47O0VEd0hFO0lBRUkscUJBQUE7RUN0SE47RUR1SE07SUFFSSxlQUFBO0VDdEhWO0VEd0hNO0lBRUksZUFBQTtFQ3ZIVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvQWxsQ29tcG9uZW50cy9mb29kcy9mb29kcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290e1xyXG4gICAgXHJcbiAgICAtLW1haW5jb2xvcjogdmFyKC0tbWFpbmNvbG9yKTtcclxufSBcclxuLmFsbGNvbnRhaW5ldFxyXG57XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLnNlY3Rpb25zZWFyY2hcclxuICAgIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMzMxcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICAgICBcclxuICAgXHJcbiAgICAuY29sLWxnLTEye1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEyJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4JTtcclxuICAgICAgIFxyXG4gICAgICAgIC5BZGRCdG57XHJcbiAgICBcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbmNvbG9yKSA7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogM2VtO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAuU2VhcmNoSW5wdXR7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgNHB4IDRweCAwO1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzLjhlbTtcclxuICAgICAgICAgICAgcGFkZGluZzogMXJlbSAwO1xyXG4gICAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgIFxyXG4gICAgICAgICAgICAmOmZvY3Vze1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1tYWluY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzpub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAuU2VhcmNoQnRue1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcclxuICAgICAgICAgICAgd2lkdGg6IDI1JTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbmNvbG9yKSA7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzLjhlbTtcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICAuQ2FwdGlvblNlYXJjaHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0JTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjUlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGg1e1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoNntcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNzU7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5tb2RhbC1jb250ZW50e1xyXG4gICAgLm1vZGFsLWJvZHl7XHJcbiAgICAgICAgaW5wdXR7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgIH1cclxuICAgICAuQnRuQWRkRm9vZE1vZGVse1xyXG4gICAgICAgIGJhY2tncm91bmQ6dmFyKC0tbWFpbmNvbG9yKSA7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgLmgze1xyXG4gICAgICAgIGNvbG9yOnZhcigtLW1haW5jb2xvcikgO1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICB9XHJcbiAgICAuR2V0Zm9vZHN7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAxMnB4IDNweCAjY2NjO1xyXG4gICAgICAgIHdpZHRoOiAxOHJlbTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIFxyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgLmNhcmQtaW1nLXRvcHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxOTZweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4ICAwIDBcclxuICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZhLXRyYXNoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZhLXBlbmNpbFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMjVweDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1hcmdpbjogNCUgMCA0JSAyMCU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWVlZWU7XHJcbiAgICAgICAgLmNhcmQtYm9keXtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTE3JTtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDMlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI2OHB4O1xyXG4gICAgICAgICAgICAuYWRkVG9NZWFsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDIwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50OyBcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICBoNXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tbWFpbmNvbG9yKSA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDZ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtOSU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwJTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tbWFpbmNvbG9yKSA7XHJcbiAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYnRue1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbmNvbG9yKSA7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLW1haW5jb2xvcikgO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAucHJvZ3Jlc3N7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNCU7XHJcbiAgICB9XHJcbiAgICAuY2Fsb3JpZXN7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbmNvbG9yKTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIHdpZHRoOiAyMyU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxJTtcclxuICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgc3BhbixkaXZ7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTo1JSA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idG4tc2F2ZW1lYWx7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1tYWluY29sb3IpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lYWxzLC5hZGRmb29kc3tcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZWFsc3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1tYWluY29sb3IpOyA7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC5uZ3gtcGFnaW5hdGlvbiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQ5JSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG5cclxufVxyXG5cclxuICBcclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpXHJcbntcclxuICAgIFxyXG5cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpXHJcbntcclxuICAgIC5hbGxjb250YWluZXRcclxuICAgIHtcclxuICAgICAgICAuc2VjdGlvbnNlYXJjaFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLlNlYXJjaElucHV0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLlNlYXJjaEJ0blxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLkFkZEJ0blxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuY2Fsb3JpZXNcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMyU7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICAucGFnaW5hdGlvbnN0eWxlXHJcbiAgICB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDM3JSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkgXHJcbntcclxuICAgIC5hbGxjb250YWluZXRcclxuICAgIHtcclxuICAgICAgICAuc2VjdGlvbnNlYXJjaFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjhweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjAwcHggIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgICAgIC5TZWFyY2hJbnB1dFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5TZWFyY2hCdG5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHggIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLkFkZEJ0blxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuQ2FwdGlvblNlYXJjaFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDclICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICAgICAuanNzNjBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoNlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuN3JlbSAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbG9yaWVzXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB3aWR0aDogMzElO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MHB4ICFpbXBvcnRhbnQgO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjBweCAhaW1wb3J0YW50IDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJkLWJvZHlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMjVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBoNVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MTRweCAhaW1wb3J0YW50IDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoNlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MTRweCAhaW1wb3J0YW50IDtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZhLXRyYXNoIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MTdweCAhaW1wb3J0YW50IDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZhLXBlbmNpbCBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjE3cHggIWltcG9ydGFudCA7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jYXJkLXRleHRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5hZGRUb01lYWxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICAucGFnaW5hdGlvbnN0eWxlXHJcbiAgICB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMzJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gXHJcblxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgIChtYXgtd2lkdGg6IDQ5OXB4KVxyXG57XHJcbiAgICAuYWxsY29udGFpbmV0XHJcbiAgICB7XHJcbiAgICAgICAgLmNvbC1sZy0xMlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAxMDBweDtcclxuICAgICAgICAgICAgLnNlY3Rpb25zZWFyY2hcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgIFxyXG4gICAgfVxyXG4gICAgLnBhZ2luYXRpb25zdHlsZVxyXG4gICAge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmNhbG9yaWVzXHJcbiAgICB7XHJcbiAgICAgICAgd2lkdGg6IDM2JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIC5mb250U2l6ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWVhbHNcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbn0iLCI6cm9vdCB7XG4gIC0tbWFpbmNvbG9yOiB2YXIoLS1tYWluY29sb3IpO1xufVxuXG4uYWxsY29udGFpbmV0IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5hbGxjb250YWluZXQgLnNlY3Rpb25zZWFyY2gge1xuICBtYXJnaW4tbGVmdDogMzMxcHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbi5hbGxjb250YWluZXQgLmNvbC1sZy0xMiB7XG4gIG1hcmdpbi10b3A6IDEyJTtcbiAgbWFyZ2luLWJvdHRvbTogOCU7XG59XG4uYWxsY29udGFpbmV0IC5jb2wtbGctMTIgLkFkZEJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5jb2xvcik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogM2VtO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uYWxsY29udGFpbmV0IC5jb2wtbGctMTIgLlNlYXJjaElucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogMCA0cHggNHB4IDA7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBoZWlnaHQ6IDMuOGVtO1xuICBwYWRkaW5nOiAxcmVtIDA7XG4gIHdpZHRoOiA3NSU7XG59XG4uYWxsY29udGFpbmV0IC5jb2wtbGctMTIgLlNlYXJjaElucHV0OmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1tYWluY29sb3IpO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLmFsbGNvbnRhaW5ldCAuY29sLWxnLTEyIC5TZWFyY2hCdG4ge1xuICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcbiAgd2lkdGg6IDI1JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbmNvbG9yKTtcbiAgY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDMuOGVtO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG4uYWxsY29udGFpbmV0IC5DYXB0aW9uU2VhcmNoIHtcbiAgbWFyZ2luLXRvcDogNCU7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG59XG4uYWxsY29udGFpbmV0IC5DYXB0aW9uU2VhcmNoIGg1IHtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cbi5hbGxjb250YWluZXQgLkNhcHRpb25TZWFyY2ggaDYge1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS43NTtcbn1cbi5hbGxjb250YWluZXQgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWJvZHkgaW5wdXQge1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cbi5hbGxjb250YWluZXQgLm1vZGFsLWNvbnRlbnQgLkJ0bkFkZEZvb2RNb2RlbCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW5jb2xvcik7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5hbGxjb250YWluZXQgLm1vZGFsLWNvbnRlbnQgLmgzIHtcbiAgY29sb3I6IHZhcigtLW1haW5jb2xvcik7XG59XG4uYWxsY29udGFpbmV0IC5HZXRmb29kcyB7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMTJweCAzcHggI2NjYztcbiAgd2lkdGg6IDE4cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICBtYXJnaW46IDQlIDAgNCUgMjAlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZWVlZTtcbn1cbi5hbGxjb250YWluZXQgLkdldGZvb2RzIC5jYXJkLWltZy10b3Age1xuICBoZWlnaHQ6IDE5NnB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwO1xufVxuLmFsbGNvbnRhaW5ldCAuR2V0Zm9vZHM6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG4uYWxsY29udGFpbmV0IC5HZXRmb29kcyAuZmEtdHJhc2gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG59XG4uYWxsY29udGFpbmV0IC5HZXRmb29kcyAuZmEtcGVuY2lsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjVweDtcbn1cbi5hbGxjb250YWluZXQgLkdldGZvb2RzIC5jYXJkLWJvZHkge1xuICBtYXJnaW4tdG9wOiAtMTclO1xuICBwYWRkaW5nLWJvdHRvbTogMyU7XG4gIGhlaWdodDogMjY4cHg7XG59XG4uYWxsY29udGFpbmV0IC5HZXRmb29kcyAuY2FyZC1ib2R5IC5hZGRUb01lYWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgbGVmdDogMjBweCAhaW1wb3J0YW50O1xuICByaWdodDogMjBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICBib3R0b206IDEwcHggIWltcG9ydGFudDtcbn1cbi5hbGxjb250YWluZXQgLkdldGZvb2RzIC5jYXJkLWJvZHkgaDUge1xuICBjb2xvcjogdmFyKC0tbWFpbmNvbG9yKTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmFsbGNvbnRhaW5ldCAuR2V0Zm9vZHMgLmNhcmQtYm9keSBoNiB7XG4gIG1hcmdpbi10b3A6IC05JTtcbiAgbWFyZ2luLWJvdHRvbTogMCU7XG4gIGNvbG9yOiB2YXIoLS1tYWluY29sb3IpO1xuICBvcGFjaXR5OiAwLjg7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuLmFsbGNvbnRhaW5ldCAuR2V0Zm9vZHMgLmNhcmQtYm9keSBwIHtcbiAgb3BhY2l0eTogMC44O1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG4uYWxsY29udGFpbmV0IC5HZXRmb29kcyAuY2FyZC1ib2R5IC5idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluY29sb3IpO1xuICBib3JkZXItY29sb3I6IHZhcigtLW1haW5jb2xvcik7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG59XG4uYWxsY29udGFpbmV0IC5wcm9ncmVzcyB7XG4gIG1hcmdpbi1ib3R0b206IDQlO1xufVxuLmFsbGNvbnRhaW5ldCAuY2Fsb3JpZXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluY29sb3IpO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAyMyU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZy10b3A6IDElO1xuICBsZWZ0OiAwcHg7XG59XG4uYWxsY29udGFpbmV0IC5jYWxvcmllcyBzcGFuLCAuYWxsY29udGFpbmV0IC5jYWxvcmllcyBkaXYge1xuICBjb2xvcjogd2hpdGU7XG59XG4uYWxsY29udGFpbmV0IC5jYWxvcmllcyBzcGFuIHtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG4uYWxsY29udGFpbmV0IC5jYWxvcmllcyAuYnRuLXNhdmVtZWFsIHtcbiAgd2lkdGg6IDYwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1ib3R0b206IDIlO1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgY29sb3I6IHZhcigtLW1haW5jb2xvcik7XG59XG4uYWxsY29udGFpbmV0IC5jYWxvcmllcyAubWVhbHMsIC5hbGxjb250YWluZXQgLmNhbG9yaWVzIC5hZGRmb29kcyB7XG4gIG1hcmdpbi1ib3R0b206IDIlO1xufVxuLmFsbGNvbnRhaW5ldCAuY2Fsb3JpZXMgLm1lYWxzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbmNvbG9yKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmFsbGNvbnRhaW5ldCAubmd4LXBhZ2luYXRpb24ge1xuICBtYXJnaW4tbGVmdDogNDklICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIG1hcmdpbi10b3A6IDI7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuYWxsY29udGFpbmV0IC5zZWN0aW9uc2VhcmNoIC5TZWFyY2hJbnB1dCB7XG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsbGNvbnRhaW5ldCAuc2VjdGlvbnNlYXJjaCAuU2VhcmNoQnRuIHtcbiAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgfVxuICAuYWxsY29udGFpbmV0IC5zZWN0aW9uc2VhcmNoIC5BZGRCdG4ge1xuICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGxjb250YWluZXQgLmNhbG9yaWVzIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiAyMyU7XG4gIH1cblxuICAucGFnaW5hdGlvbnN0eWxlIHtcbiAgICBtYXJnaW4tbGVmdDogMzclICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmFsbGNvbnRhaW5ldCAuc2VjdGlvbnNlYXJjaCB7XG4gICAgbWFyZ2luLXRvcDogMjhweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAyMDBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGxjb250YWluZXQgLnNlY3Rpb25zZWFyY2ggLlNlYXJjaElucHV0IHtcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbiAgfVxuICAuYWxsY29udGFpbmV0IC5zZWN0aW9uc2VhcmNoIC5TZWFyY2hCdG4ge1xuICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGxjb250YWluZXQgLnNlY3Rpb25zZWFyY2ggLkFkZEJ0biB7XG4gICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxMXB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsbGNvbnRhaW5ldCAuQ2FwdGlvblNlYXJjaCB7XG4gICAgbWFyZ2luLWxlZnQ6IDclICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsbGNvbnRhaW5ldCAuQ2FwdGlvblNlYXJjaCAuanNzNjAge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsbGNvbnRhaW5ldCAuQ2FwdGlvblNlYXJjaCBoNiB7XG4gICAgZm9udC1zaXplOiAwLjdyZW0gIWltcG9ydGFudDtcbiAgfVxuICAuYWxsY29udGFpbmV0IC5jYWxvcmllcyB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogMzElO1xuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsbGNvbnRhaW5ldCAuY2FyZC1ib2R5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAyMjVweCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGxjb250YWluZXQgLmNhcmQtYm9keSBoNSB7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsbGNvbnRhaW5ldCAuY2FyZC1ib2R5IGg2IHtcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgfVxuICAuYWxsY29udGFpbmV0IC5jYXJkLWJvZHkgLmZhLXRyYXNoIHtcbiAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgfVxuICAuYWxsY29udGFpbmV0IC5jYXJkLWJvZHkgLmZhLXBlbmNpbCB7XG4gICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsbGNvbnRhaW5ldCAuY2FyZC1ib2R5IC5jYXJkLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGxjb250YWluZXQgLmNhcmQtYm9keSAuYWRkVG9NZWFsIHtcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wYWdpbmF0aW9uc3R5bGUge1xuICAgIG1hcmdpbi1sZWZ0OiAzMyUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OTlweCkge1xuICAuYWxsY29udGFpbmV0IC5jb2wtbGctMTIge1xuICAgIHRvcDogMjBweDtcbiAgICBsZWZ0OiAxMDBweDtcbiAgfVxuICAuYWxsY29udGFpbmV0IC5jb2wtbGctMTIgLnNlY3Rpb25zZWFyY2gge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wYWdpbmF0aW9uc3R5bGUge1xuICAgIG1hcmdpbi1sZWZ0OiAwJSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmNhbG9yaWVzIHtcbiAgICB3aWR0aDogMzYlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNhbG9yaWVzIC5mb250U2l6ZSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG4gIC5jYWxvcmllcyAubWVhbHMge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](foodsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-foods',
                templateUrl: './foods.component.html',
                styleUrls: ['./foods.component.scss']
            }]
    }], function () { return [{ type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: src_app_Service_foods_service__WEBPACK_IMPORTED_MODULE_6__["foodsService"] }, { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__["ToastrManager"] }, { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_8__["AngularFireDatabase"] }, { type: src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/AllComponents/home/home.component.ts":
/*!******************************************************!*\
  !*** ./src/app/AllComponents/home/home.component.ts ***!
  \******************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_wow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-wow */ "./node_modules/ngx-wow/__ivy_ngcc__/esm2015/ngx-wow.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/__ivy_ngcc__/fesm2015/ng6-toastr-notifications.js");
/* harmony import */ var src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Service//auth.service */ "./src/app/Service/auth.service.ts");
/* harmony import */ var src_app_Service_home_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Service/home.service */ "./src/app/Service/home.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");










const _c0 = ["boxes"];
const _c1 = ["boxes1"];
function HomeComponent_img_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 56);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.imguser, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function HomeComponent_img_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 57);
} }
function HomeComponent_div_77_i_13_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_77_i_13_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.DeleteComment(item_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_77_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const i_r5 = ctx_r13.index;
    const item_r4 = ctx_r13.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-target", "#collapseExample" + i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Show reply (", item_r4.reply.length, ") on ", item_r4.name, " ");
} }
function HomeComponent_div_77_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h6", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_77_div_26_div_1_Template_span_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const y_r16 = ctx.index; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r18.showreply2(y_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Reply");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 65, 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_77_div_26_div_1_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r20.replycommentadd = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_77_div_26_div_1_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const y_r16 = ctx.index; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r21.showreply2(y_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_77_div_26_div_1_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const item2_r15 = ctx.$implicit; const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.addreplay(item_r4.id, item2_r15.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Reply ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item2_r15 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item2_r15.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item2_r15.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item2_r15.reply, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item2_r15.date2.num, "", item2_r15.date2.char, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item2_r15.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("placeholder", " Reply On @", item2_r15.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r14.replycommentadd);
} }
function HomeComponent_div_77_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_77_div_26_div_1_Template, 23, 8, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r4.reply);
} }
function HomeComponent_div_77_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h6", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_77_Template_span_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const i_r5 = ctx.index; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.showreply(i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Reply");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HomeComponent_div_77_i_13_Template, 1, 0, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 65, 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_77_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.replycommentadd = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_77_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const i_r5 = ctx.index; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.showreply(i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_77_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const item_r4 = ctx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.addreplay(item_r4.id, item_r4.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Reply ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, HomeComponent_div_77_span_24_Template, 2, 3, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, HomeComponent_div_77_div_26_Template, 2, 1, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r4.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r4.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r4.comment, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r4.date.num, "", item_r4.date.char, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r4.mail == ctx_r2.MailtoDeleteComment);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r2.imguser, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("placeholder", " Reply On @", item_r4.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.replycommentadd);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r4.reply.length != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "collapseExample", i_r5, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r4.reply.length != 0);
} }
class HomeComponent {
    constructor(wowService, router, toastr, authService, homeser, spinner) {
        this.wowService = wowService;
        this.router = router;
        this.toastr = toastr;
        this.authService = authService;
        this.homeser = homeser;
        this.spinner = spinner;
        this.isActive = true;
        this.datacomments = [];
        this.datacomments2 = [];
        this.dateshow = { "num": 0, "char": "" };
        this.dateshow2 = { "num": 0, "char": "" };
        this.datacommentshow = [];
        this.datacommentreplyshow = [];
        this.MailtoDeleteComment = localStorage.getItem("UserLogMail");
        /////////////////////////getreplay//////////////////////
        this.getreplys = [];
        this.spinner.show();
        this.CheckLog = this.authService.isLoggedIn;
        this.wowService.init();
        if (!localStorage.getItem('foo')) {
            localStorage.setItem('foo', 'no reload');
            location.reload();
        }
        else {
            localStorage.removeItem('foo');
        }
        var bodyStyles = document.body.style;
        document.getElementById('navbar').style.top = "70px";
        document.getElementById('navbar').style.background = "none";
        bodyStyles.setProperty('--maincolorNav', "white");
        window.addEventListener('scroll', function () {
            if (window.pageYOffset >= 100) {
                document.getElementById('navbar').style.top = "0px";
                document.getElementById('navbar').style.background = "rgb(38, 38, 38)";
                bodyStyles.setProperty('--maincolorNav', "white");
                //  console.log(window.pageYOffset)
            }
            else {
                document.getElementById('navbar').style.top = "70px";
                document.getElementById('navbar').style.background = "none";
                bodyStyles.setProperty('--maincolorNav', "white");
            }
            if (window.pageYOffset >= 401) {
                document.getElementById('ScrollUp').style.display = "block";
            }
            if (window.pageYOffset <= 400) {
                document.getElementById('ScrollUp').style.display = "none";
            }
        });
        this.nameuser = localStorage.getItem('Nameuser');
        this.imguser = localStorage.getItem('ProfilePhotoUser');
        this.GetComments();
        setTimeout(() => {
            this.spinner.hide();
        }, 1000);
    }
    ngOnInit() {
        // console.log(this.authService.isLoggedIn)
        document.getElementById('footer').style.width = "100%";
        document.getElementById('footer').style.marginLeft = "0%";
    }
    callanimate() {
        this.wowService.init();
    }
    ScrollUp() {
        window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
        this.router.navigate(['foods']);
    }
    toggle() {
        return this.isActive = !this.isActive;
    }
    ChangeColorSite(colorSelect) {
        var bodyStyles = document.body.style;
        bodyStyles.setProperty('--maincolor', colorSelect);
    }
    // LogOut(){
    //   this.authService.log_out()
    //   }
    addComment() {
        this.date = new Date();
        // this.dateadd=this.date.toString().split("GMT");
        this.homeser.Add_comments(this.nameuser, this.imguser, this.comment, this.date).then(() => {
            this.comment = null;
            setTimeout(() => {
                this.GetComments();
            }, 1000);
        }).catch(function (error) {
            alert(error);
        });
    }
    showreply(i) {
        // this.showdivreply={test:true,"data":this.datacomments[i]}
        let nativeElement = this.boxes.toArray()[i].nativeElement;
        nativeElement.style.display =
            nativeElement.style.display === "none" || !nativeElement.style.display
                ? "block"
                : "none";
    }
    showreply2(i) {
        let nativeElement = this.boxess.toArray()[i].nativeElement;
        nativeElement.style.display =
            nativeElement.style.display === "none" || !nativeElement.style.display
                ? "block"
                : "none";
    }
    GetComments() {
        this.homeser.get_Comments().subscribe(res => {
            this.datacomments = res.map(e => {
                return Object.assign({ id: e.payload.doc.id }, e.payload.doc.data());
            });
            this.datacomments.reverse();
            this.datacomments2 = this.datacomments;
            // console.log(this.datacomments)
            for (let i = 0; i < this.datacomments.length; i++) {
                // console.log(this.datacomments[i].date)
                this.dateget = this.datacomments[i].date.toDate();
                var date1 = new Date();
                // var finaldate =  Math.floor((Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate()) - Date.UTC(this.dateget.getFullYear(), this.dateget.getMonth(), this.dateget.getDate()) ) /(1000 * 60 * 60 * 24));
                var finaldate = date1.getTime() - this.dateget.getTime();
                if (finaldate / 1000 > 1) {
                    var s = finaldate / 1000;
                    this.dateshow.num = s;
                    this.dateshow.char = "s";
                    if (s / 60 > 1) {
                        var m = s / 60;
                        this.dateshow.num = m;
                        this.dateshow.char = "m";
                        if (m / 60 > 1) {
                            var h = m / 60;
                            this.dateshow.num = h;
                            this.dateshow.char = "h";
                            if (h / 24 > 1) {
                                var d = h / 24;
                                this.dateshow.num = d;
                                this.dateshow.char = "d";
                                if (d / 7 > 1) {
                                    var w = d / 7;
                                    this.dateshow.num = w;
                                    this.dateshow.char = "w";
                                    if (w / 4 > 1) {
                                        var month = w / 4;
                                        this.dateshow.num = month;
                                        this.dateshow.char = "month";
                                        if (month / 12 > 1) {
                                            var y = month / 12;
                                            this.dateshow.num = y;
                                            this.dateshow.char = "y";
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                this.dateshow.num = Math.floor(this.dateshow.num);
                //  console.log(this.getreplys.length)
                this.datacomments[i].date = { num: this.dateshow.num, char: this.dateshow.char };
                //  this.datacommentshow.push( {num:this.dateshow.num,char:this.dateshow.char })
                this.getreplys = this.datacomments[i].reply;
                //  console.log(this.getreplys.length)
                for (let x = 0; x < this.getreplys.length; x++) {
                    //  this.getreply = this.getreplys[i].reply
                    //  this.getnamereply= this.getreplys[i].name
                    //  this.getphotoreply = this.getreplys[i].photo
                    // console.log(this.getreplys[x].date)
                    this.getdatereply = this.getreplys[x].date.toDate();
                    //  this.getmailreply=this.getreplys[i].mail
                    var finaldatereply = date1.getTime() - this.getdatereply.getTime();
                    if (finaldatereply / 1000 > 1) {
                        var s2 = finaldatereply / 1000;
                        this.dateshow2.num = s2;
                        this.dateshow2.char = "s";
                        if (s2 / 60 > 1) {
                            var m2 = s2 / 60;
                            this.dateshow2.num = m2;
                            this.dateshow2.char = "m";
                            if (m2 / 60 > 1) {
                                var h2 = m2 / 60;
                                this.dateshow2.num = h2;
                                this.dateshow2.char = "h";
                                if (h2 / 24 > 1) {
                                    var d2 = h2 / 24;
                                    this.dateshow2.num = d2;
                                    this.dateshow2.char = "d";
                                    if (d2 / 7 > 1) {
                                        var w2 = d2 / 7;
                                        this.dateshow2.num = w2;
                                        this.dateshow2.char = "w";
                                        if (w2 / 4 > 1) {
                                            var month2 = w2 / 4;
                                            this.dateshow2.num = month2;
                                            this.dateshow2.char = "month";
                                            if (month2 / 12 > 1) {
                                                var y2 = month2 / 12;
                                                this.dateshow2.num = y2;
                                                this.dateshow2.char = "y";
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    this.dateshow2.num = Math.floor(this.dateshow2.num);
                    this.getreplys[x].date2 = { num: this.dateshow2.num, char: this.dateshow2.char };
                    // console.log(this.getreplys[x].date)
                    // this.datacommentreplyshow.push( {num:this.dateshow2.num,char:this.dateshow2.char })
                }
            }
            // console.log(this.getreplys)
            // console.log(this.getreply)
            // console.log(this.dateshow)
            // console.log(finaldate)
            // console.log(this.datacomments)
        }, err => {
            this.toastr.errorToastr(err.message);
        });
    }
    DeleteComment(id) {
        this.homeser.Delete_comment(id);
    }
    addreplay(id, name) {
        console.log(this.datacomments2);
        this.date = new Date();
        var reply = this.replycommentadd + " @" + name;
        this.homeser.add_replay(id, reply, this.nameuser, this.imguser, this.date, this.datacomments2);
        this.replycommentadd = null;
        setTimeout(() => {
            this.GetComments();
        }, 1000);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_wow__WEBPACK_IMPORTED_MODULE_1__["NgwWowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Service_home_service__WEBPACK_IMPORTED_MODULE_5__["HomeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.boxes = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.boxess = _t);
    } }, decls: 105, vars: 8, consts: [[2, "overflow", "hidden"], ["id", "carouselExampleIndicators", "data-ride", "carousel", 1, "carousel", "slide", "carousel-fade"], [1, "carousel-indicators"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "0", 1, "active", 3, "click"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "1", 3, "click"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "assets/cover.jpg", "alt", "First slide", 1, "d-block", "w-100"], [1, "carousel-caption", "d-md-block", "CoverPhoto"], [1, "PositionCaption"], ["data-wow-duration", "2s", 1, "wow", "fadeInLeft"], ["data-wow-duration", "3s", "data-wow-delay", "1s", 1, "GitFitStrong", "wow", "fadeInLeft"], ["data-wow-duration", "4s", "data-wow-delay", "1s", 1, "wow", "fadeInLeft"], [1, "carousel-item"], ["src", "assets/FittMan.jpg", "alt", "Second slide", 1, "d-block", "w-100"], [1, "FitLogo"], ["data-wow-duration", "4s", 1, "wow", "fadeInLeft", "mediapersonaltrainer"], ["data-wow-duration", "5s", "data-wow-delay", "1s", 1, "wow", "fadeInLeft"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "prev", 1, "carousel-control-prev", 3, "click"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "next", 1, "carousel-control-next", 3, "click"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "AboutUs"], [1, "container"], [1, "text-center"], [1, "lead", "ParaAboutUs", "text-center"], ["src", "assets/signature2.jpg", "alt", "signature", 1, "signature", "responsive-img"], [1, "sectionTrainer"], [1, "title"], [1, "newPost"], [1, "forumDivOuter"], ["id", "forumDiv"], [1, "row"], ["alt", "No Photo", 3, "src", 4, "ngIf"], ["src", "assets/user.jpg", "alt", "No Photo", 4, "ngIf"], ["name", "comments", "rows", "4", "data-min-rows", "4", "placeholder", "Enter your message here", 1, "autoExpand", "forumPost", "form-control", 2, "margin-top", "0px", "margin-bottom", "0px", "height", "94px", 3, "ngModel", "ngModelChange"], [1, "forumPostButton", "btn", "btn-default", "form-control", 3, "disabled", "click"], [1, "allcomment"], ["class", "comments ", "style", "margin-top: 3%; padding-bottom: 2%;", 4, "ngFor", "ngForOf"], ["loginForm", "ngForm"], ["id", "myModal2", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], [1, "ContactUs"], [1, "DarkFrame"], [1, "fa", "fa-user-o", "fa-3x", "text-center"], ["role", "form-inline"], ["name", "mail", "type", "text", "placeholder", "E-mail", "data-wow-duration", "2s", "data-wow-offset", "200", 1, "form-control", "inputcontact", "wow", "bounceInLeft", 3, "ngModel", "ngModelChange"], ["name", "password", "data-wow-duration", "3s", "data-wow-offset", "200", "type", "text", "placeholder", "Pass", 1, "form-control", "input-lg", "inputcontact", "wow", "bounceInLeft", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default"], ["type", "submit", "data-dismiss", "modal", 1, "btn", "btn-default", "BtnAddFoodModel", 3, "disabled"], ["alt", "No Photo", 3, "src"], ["src", "assets/user.jpg", "alt", "No Photo"], [1, "comments", 2, "margin-top", "3%", "padding-bottom", "2%"], ["alt", "No Photo", 1, "imgcomment", 3, "src"], [2, "margin-top", "-3px", "background", "rgba(236, 234, 234, 0.77)", "padding", "10px", "border-radius", "5%", "margin-bottom", "3%", "margin-left", "7px"], [2, "margin-left", "2px", "margin-top", "0px", "font-size", "15px", "opacity", "0.8", "margin-bottom", "0px"], [1, "mediadate", 2, "margin-left", "12%", "margin-top", "-21px", "opacity", "0.5", "font-size", "0.8rem"], [1, "mediareplay", 2, "margin-top", "-26px", "margin-left", "24px", "font-size", "15px", "color", "var(--maincolor)", "cursor", "pointer", 3, "click"], ["style", "margin-left: 2%;\n          margin-top: -2%;", "class", "fa fa-trash", "aria-hidden", "true", 3, "click", 4, "ngIf"], [1, "row", "mediareply2", 2, "display", "none"], ["boxes", ""], ["alt", "No Img", 2, "width", "40px", "height", "40px", "margin-left", "4%", 3, "src"], [1, "mediabox", 2, "border", "1px solid rgba(0, 0, 0, 0.5)", "overflow", "hidden", "width", "50%", "margin-left", "10%", "margin-bottom", "1%", "height", "110px", "margin-top", "-36px"], [2, "height", "54px", "width", "100%", 3, "ngModel", "placeholder", "ngModelChange"], [1, "row", 2, "background", "rgb(242, 243, 244)", "margin-top", "-9px", "padding-top", "17px", "padding-bottom", "25px"], [1, "form-control", "mediabtncancel", 2, "margin-left", "53%", "margin-right", "2%", "width", "20%", 3, "click"], [1, "form-control", "mediabtnreply", 2, "width", "20%", "background", "var(--maincolor)", "color", "white", 3, "click"], ["style", "opacity: 0.7;\n      font-size: 14px;\n      margin-left: 2%;\n      margin-bottom: 2%;", "class", "Showreply", "type", "button", "data-toggle", "collapse", "aria-expanded", "false", "aria-controls", "collapseExample", 4, "ngIf"], [1, "collapse", 3, "id"], [4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-trash", 2, "margin-left", "2%", "margin-top", "-2%", 3, "click"], ["type", "button", "data-toggle", "collapse", "aria-expanded", "false", "aria-controls", "collapseExample", 1, "Showreply", 2, "opacity", "0.7", "font-size", "14px", "margin-left", "2%", "margin-bottom", "2%"], [4, "ngFor", "ngForOf"], ["alt", "No Photo", 1, "imgreply", 2, "width", "40px", "height", "40px", "margin-left", "5%", 3, "src"], [2, "margin-top", "-3px", "background", "rgba(236, 234, 234, 0.77)", "padding", "10px", "border-radius", "5%", "margin-bottom", "2%", "margin-left", "7px"], [2, "font-size", "15px"], [2, "margin-left", "2px", "margin-top", "0px", "font-size", "12px", "opacity", "0.7", "margin-bottom", "0px"], [1, "mediadate", 2, "margin-left", "12%", "margin-top", "-15px", "opacity", "0.5", "font-size", "0.8rem"], [1, "mediareplay", 2, "color", "var(--maincolor)", "cursor", "pointer", "font-size", "14px", "margin-top", "-19px", "margin-left", "20px", 3, "click"], ["boxes1", ""], ["alt", "No Img", 2, "width", "40px", "height", "40px", "margin-left", "5%", 3, "src"], [1, "mediabox2", 2, "border", "1px solid rgba(0, 0, 0, 0.5)", "overflow", "hidden", "width", "50%", "margin-left", "11%", "margin-bottom", "1%", "height", "110px", "margin-top", "-34px"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ol", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_li_click_3_listener() { return ctx.callanimate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_li_click_4_listener() { return ctx.callanimate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " ARE YOU READY TO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "GET FIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, ", STRONG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "& MOTIVATED!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " BE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "FIT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " LOOKING FOR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h1", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "PERSONAL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "TRAINER?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " ,totam rem aperiam, eaque ipsa quae ab illo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_40_listener() { return ctx.callanimate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_44_listener() { return ctx.callanimate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "section", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h1", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " About Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "We Will Help You To Be Fit By Calculate The Calories Your Body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Needs And Make A Diet For A Good Body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " And Exercise Regimen Depending On The Goal You Want To Reachy You Should");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Start Now To Realization Of Goal And Maintain Your Health ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "section", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h2", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Questions / Comments: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, HomeComponent_img_69_Template, 1, 1, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, HomeComponent_img_70_Template, 1, 0, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "textarea", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_textarea_ngModelChange_71_listener($event) { return ctx.comment = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_74_listener() { return ctx.addComment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, HomeComponent_div_77_Template, 27, 12, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "form", null, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "section", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "form", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_98_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "input", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_99_listener($event) { return ctx.pass = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Log");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.CheckLog == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.CheckLog == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.comment);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.CheckLog == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.datacomments);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r3.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"]], styles: ["[_ngcontent-%COMP%]:root {\n  --maincolor: var(--maincolor);\n}\n\n.carousel-item[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 840px;\n  max-height: 840px;\n  background-size: 100% 100%;\n}\n\n.carousel-item[_ngcontent-%COMP%]   .CoverPhoto[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  z-index: 10;\n  color: #fff;\n  text-align: center;\n  background: rgba(37, 37, 37, 0.5);\n  bottom: 0;\n  width: 100%;\n  left: 0;\n}\n\n.carousel-item[_ngcontent-%COMP%]   .CoverPhoto[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Raleway\";\n  margin-left: 20px;\n  color: white;\n  font-size: 30px;\n}\n\n.carousel-item[_ngcontent-%COMP%]   .CoverPhoto[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .FitLogo[_ngcontent-%COMP%] {\n  color: var(--maincolor);\n}\n\n.carousel-item[_ngcontent-%COMP%]   .CoverPhoto[_ngcontent-%COMP%]   .PositionCaption[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 40%;\n  left: 15%;\n}\n\n.carousel-item[_ngcontent-%COMP%]   .CoverPhoto[_ngcontent-%COMP%]   .PositionCaption[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .carousel-item[_ngcontent-%COMP%]   .CoverPhoto[_ngcontent-%COMP%]   .PositionCaption[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .carousel-item[_ngcontent-%COMP%]   .CoverPhoto[_ngcontent-%COMP%]   .PositionCaption[_ngcontent-%COMP%]   .GitFitStrong[_ngcontent-%COMP%], .carousel-item[_ngcontent-%COMP%]   .CoverPhoto[_ngcontent-%COMP%]   .PositionCaption[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .carousel-item[_ngcontent-%COMP%]   .CoverPhoto[_ngcontent-%COMP%]   .PositionCaption[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 1%;\n}\n\n.carousel-item[_ngcontent-%COMP%]   .CoverPhoto[_ngcontent-%COMP%]   .PositionCaption[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-left: -230px;\n}\n\n.carousel-item[_ngcontent-%COMP%]   .CoverPhoto[_ngcontent-%COMP%]   .PositionCaption[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-right: 162px;\n}\n\n.carousel-item[_ngcontent-%COMP%]   .CoverPhoto[_ngcontent-%COMP%]   .PositionCaption[_ngcontent-%COMP%]   .GitFitStrong[_ngcontent-%COMP%] {\n  margin-left: 70px;\n}\n\n.carousel-item[_ngcontent-%COMP%]   .CoverPhoto[_ngcontent-%COMP%]   .PositionCaption[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  font-weight: 662;\n}\n\n.carousel-item[_ngcontent-%COMP%]   .CoverPhoto[_ngcontent-%COMP%]   .PositionCaption[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  left: 20%;\n  font-size: 20px;\n}\n\n.carousel-item[_ngcontent-%COMP%]   .CoverPhoto[_ngcontent-%COMP%]   .PositionCaption[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--maincolor);\n}\n\n.carousel-item[_ngcontent-%COMP%]   .CoverPhoto[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background: var(--maincolor);\n  color: whitesmoke;\n  width: 30%;\n  margin-right: 5%;\n  margin-top: 4%;\n}\n\n.AboutUs[_ngcontent-%COMP%] {\n  background: white;\n  box-shadow: 0px 8px 10px 10px whitesmoke;\n}\n\n.AboutUs[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 600px;\n  position: relative;\n}\n\n.AboutUs[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--maincolor);\n  margin-top: 2%;\n  padding-top: 3%;\n}\n\n.AboutUs[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .ParaAboutUs[_ngcontent-%COMP%] {\n  padding-top: 3%;\n}\n\n.AboutUs[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .signature[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 28%;\n  top: 51%;\n  transform: rotate(-15deg);\n}\n\n.AboutUs[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .signature[_ngcontent-%COMP%]:hover {\n  box-shadow: 8px 8px 10px 10px whitesmoke;\n}\n\n.sectionTrainer[_ngcontent-%COMP%] {\n  min-width: 100%;\n  width: 100%;\n  height: 550px;\n  margin-top: 2%;\n  position: relative;\n}\n\n.sectionTrainer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  border: 1px solid #dddfe2;\n  padding-top: 2%;\n  padding-bottom: 2%;\n}\n\n.sectionTrainer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .allcomment[_ngcontent-%COMP%] {\n  height: 282px;\n  overflow-y: scroll;\n}\n\n.sectionTrainer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .allcomment[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%] {\n  padding-left: 170px;\n  padding-right: 170px;\n  margin-bottom: 2%;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1) !important;\n}\n\n.sectionTrainer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .allcomment[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\n.sectionTrainer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .allcomment[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .imgcomment[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  margin-left: 3%;\n}\n\n.sectionTrainer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 94px;\n  height: 94px;\n  margin-left: 13%;\n  border-radius: 10%;\n}\n\n.sectionTrainer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .autoExpand[_ngcontent-%COMP%] {\n  width: 70%;\n  margin-left: 1%;\n}\n\n.sectionTrainer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-left: 21%;\n  margin-bottom: 1%;\n  color: var(--maincolor);\n}\n\n.sectionTrainer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .forumPostButton[_ngcontent-%COMP%] {\n  background: var(--maincolor);\n  color: white;\n  width: 15%;\n  margin-left: 76%;\n}\n\n.sectionTrainer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .forumPostButton[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n\nfooter[_ngcontent-%COMP%] {\n  background-color: #262626;\n  height: auto;\n}\n\nfooter[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 25px;\n  margin-top: 10%;\n  margin-bottom: 11%;\n}\n\nfooter[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%] {\n  margin-top: 6%;\n  color: #fff;\n}\n\nfooter[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-bottom: 6%;\n}\n\nfooter[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 10%;\n}\n\nfooter[_ngcontent-%COMP%]   .RecentPosts[_ngcontent-%COMP%] {\n  margin-top: 5%;\n}\n\nfooter[_ngcontent-%COMP%]   .RecentPosts[_ngcontent-%COMP%]   .FristPost[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  padding-bottom: 15px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;\n}\n\nfooter[_ngcontent-%COMP%]   .RecentPosts[_ngcontent-%COMP%]   .FristPost[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  background: url('FristPost.jpg');\n  background-size: 100% 100%;\n  height: 75px;\n  width: 75px;\n}\n\nfooter[_ngcontent-%COMP%]   .RecentPosts[_ngcontent-%COMP%]   .FristPost[_ngcontent-%COMP%]   .Name[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-left: 20px;\n  color: white;\n}\n\nfooter[_ngcontent-%COMP%]   .RecentPosts[_ngcontent-%COMP%]   .SecondPost[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;\n  margin-left: 20px;\n  padding-top: 15px;\n}\n\nfooter[_ngcontent-%COMP%]   .RecentPosts[_ngcontent-%COMP%]   .SecondPost[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  background: url('SecondPost.jpg');\n  background-size: 100% 100%;\n  height: 75px;\n  width: 75px;\n}\n\nfooter[_ngcontent-%COMP%]   .RecentPosts[_ngcontent-%COMP%]   .SecondPost[_ngcontent-%COMP%]   .Name[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-left: 20px;\n  color: white;\n}\n\nfooter[_ngcontent-%COMP%]   .RecentPosts[_ngcontent-%COMP%]   .ThirdPost[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  margin-left: 20px;\n}\n\nfooter[_ngcontent-%COMP%]   .RecentPosts[_ngcontent-%COMP%]   .ThirdPost[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  background: url('ThirdPost.jpg');\n  background-size: 100% 100%;\n  height: 75px;\n  width: 75px;\n}\n\nfooter[_ngcontent-%COMP%]   .RecentPosts[_ngcontent-%COMP%]   .ThirdPost[_ngcontent-%COMP%]   .Name[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-left: 20px;\n  color: white;\n}\n\nfooter[_ngcontent-%COMP%]   .LatestProjects[_ngcontent-%COMP%] {\n  margin-top: 5%;\n}\n\nfooter[_ngcontent-%COMP%]   .LatestProjects[_ngcontent-%COMP%]   .one[_ngcontent-%COMP%] {\n  background: url('1.jpg');\n  background-size: 100% 100%;\n  height: 85px;\n  width: 85px;\n  margin-left: 5%;\n}\n\nfooter[_ngcontent-%COMP%]   .LatestProjects[_ngcontent-%COMP%]   .two[_ngcontent-%COMP%] {\n  background: url('2.jpg');\n  background-size: 100% 100%;\n  height: 85px;\n  width: 85px;\n  margin-left: 5%;\n}\n\nfooter[_ngcontent-%COMP%]   .LatestProjects[_ngcontent-%COMP%]   .three[_ngcontent-%COMP%] {\n  background: url('3.jpg');\n  background-size: 100% 100%;\n  height: 85px;\n  width: 85px;\n  margin-left: 5%;\n}\n\nfooter[_ngcontent-%COMP%]   .LatestProjects[_ngcontent-%COMP%]   .four[_ngcontent-%COMP%] {\n  background: url('4.jpg');\n  background-size: 100% 100%;\n  height: 85px;\n  width: 85px;\n  margin-left: 5%;\n  margin-top: 5%;\n}\n\nfooter[_ngcontent-%COMP%]   .LatestProjects[_ngcontent-%COMP%]   .five[_ngcontent-%COMP%] {\n  background: url('5.jpg');\n  background-size: 100% 100%;\n  height: 85px;\n  width: 85px;\n  margin-left: 5%;\n  margin-top: 5%;\n}\n\nfooter[_ngcontent-%COMP%]   .LatestProjects[_ngcontent-%COMP%]   .six[_ngcontent-%COMP%] {\n  background: url('6.jpg');\n  background-size: 100% 100%;\n  height: 85px;\n  width: 85px;\n  margin-left: 5%;\n  margin-top: 5%;\n}\n\nfooter[_ngcontent-%COMP%]   .LatestProjects[_ngcontent-%COMP%]   .seven[_ngcontent-%COMP%] {\n  background: url('7.jpg');\n  background-size: 100% 100%;\n  height: 85px;\n  width: 85px;\n  margin-left: 5%;\n  margin-top: 5%;\n}\n\nfooter[_ngcontent-%COMP%]   .LatestProjects[_ngcontent-%COMP%]   .eight[_ngcontent-%COMP%] {\n  background: url('8.jpg');\n  background-size: 100% 100%;\n  height: 85px;\n  width: 85px;\n  margin-left: 5%;\n  margin-top: 5%;\n}\n\nfooter[_ngcontent-%COMP%]   .LatestProjects[_ngcontent-%COMP%]   .nine[_ngcontent-%COMP%] {\n  background: url('9.jpg');\n  background-size: 100% 100%;\n  height: 85px;\n  width: 85px;\n  margin-left: 5%;\n  margin-top: 5%;\n}\n\nfooter[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  background: #222;\n  color: white;\n  min-width: 100%;\n  height: 47px;\n  padding-top: 10px;\n  bottom: 0px;\n  margin-top: 3%;\n}\n\nfooter[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]   .Fit[_ngcontent-%COMP%] {\n  color: var(--maincolor);\n}\n\n#myModal2[_ngcontent-%COMP%] {\n  background: rgba(30, 30, 30, 0.7);\n}\n\n#myModal2[_ngcontent-%COMP%]   .inputcontact[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n#myModal2[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n@media only screen and (min-width: 1200px) {\n  .sectionTrainer[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .Showreply[_ngcontent-%COMP%] {\n    font-size: 13px !important;\n  }\n  .sectionTrainer[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .mediadate[_ngcontent-%COMP%] {\n    margin-top: -12px !important;\n    margin-left: 10% !important;\n  }\n  .sectionTrainer[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-top: -16px !important;\n  }\n  .sectionTrainer[_ngcontent-%COMP%]   .mediareply2[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\n  .sectionTrainer[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .Showreply[_ngcontent-%COMP%] {\n    font-size: 13px !important;\n  }\n  .sectionTrainer[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .mediadate[_ngcontent-%COMP%] {\n    margin-top: -5px !important;\n    margin-left: 12% !important;\n  }\n  .sectionTrainer[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-top: -9px !important;\n  }\n  .sectionTrainer[_ngcontent-%COMP%]   .mediareply2[_ngcontent-%COMP%]   .mediabox[_ngcontent-%COMP%], .sectionTrainer[_ngcontent-%COMP%]   .mediareply2[_ngcontent-%COMP%]   .mediabox2[_ngcontent-%COMP%] {\n    width: 64% !important;\n    margin-left: 12% !important;\n  }\n}\n\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .carousel-item[_ngcontent-%COMP%]   .PositionCaption[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.5rem !important;\n  }\n  .carousel-item[_ngcontent-%COMP%]   .PositionCaption[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    left: 4% !important;\n    font-size: 15px !important;\n  }\n\n  .AboutUs[_ngcontent-%COMP%]   .signature[_ngcontent-%COMP%] {\n    left: 16% !important;\n  }\n\n  .sectionTrainer[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .Showreply[_ngcontent-%COMP%] {\n    font-size: 13px !important;\n  }\n  .sectionTrainer[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .mediadate[_ngcontent-%COMP%] {\n    margin-top: -5px !important;\n    margin-left: 18% !important;\n  }\n  .sectionTrainer[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-top: -9px !important;\n  }\n  .sectionTrainer[_ngcontent-%COMP%]   .mediareply2[_ngcontent-%COMP%]   .mediabox[_ngcontent-%COMP%], .sectionTrainer[_ngcontent-%COMP%]   .mediareply2[_ngcontent-%COMP%]   .mediabox2[_ngcontent-%COMP%] {\n    width: 85% !important;\n    margin-left: 18% !important;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .carousel-item[_ngcontent-%COMP%]   .PositionCaption[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.5rem !important;\n  }\n  .carousel-item[_ngcontent-%COMP%]   .PositionCaption[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    left: 4% !important;\n    font-size: 15px !important;\n  }\n\n  .AboutUs[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1rem !important;\n  }\n  .AboutUs[_ngcontent-%COMP%]   .signature[_ngcontent-%COMP%] {\n    left: 5% !important;\n  }\n\n  .sectionTrainer[_ngcontent-%COMP%]   .fa-trash[_ngcontent-%COMP%] {\n    margin-top: 0% !important;\n  }\n  .sectionTrainer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-left: 5% !important;\n  }\n  .sectionTrainer[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%] {\n    padding-left: 100px !important;\n    padding-right: 100px !important;\n  }\n  .sectionTrainer[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .Showreply[_ngcontent-%COMP%] {\n    font-size: 13px !important;\n  }\n  .sectionTrainer[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .mediadate[_ngcontent-%COMP%] {\n    margin-top: 0px !important;\n    margin-left: 21% !important;\n  }\n  .sectionTrainer[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-top: -4px !important;\n  }\n  .sectionTrainer[_ngcontent-%COMP%]   .mediareply2[_ngcontent-%COMP%]   .mediabox[_ngcontent-%COMP%], .sectionTrainer[_ngcontent-%COMP%]   .mediareply2[_ngcontent-%COMP%]   .mediabox2[_ngcontent-%COMP%] {\n    width: 100% !important;\n    margin-left: 20% !important;\n  }\n}\n\n@media only screen and (max-width: 450px) {\n  .carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 740px !important;\n  }\n  .carousel-item[_ngcontent-%COMP%]   .PositionCaption[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.1rem !important;\n  }\n  .carousel-item[_ngcontent-%COMP%]   .PositionCaption[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 1.2rem !important;\n  }\n  .carousel-item[_ngcontent-%COMP%]   .PositionCaption[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.4rem !important;\n  }\n  .carousel-item[_ngcontent-%COMP%]   .PositionCaption[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    left: 4% !important;\n    font-size: 12px !important;\n  }\n\n  .AboutUs[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1rem !important;\n  }\n  .AboutUs[_ngcontent-%COMP%]   .signature[_ngcontent-%COMP%] {\n    left: 1px !important;\n    right: 1px !important;\n    width: 100%;\n  }\n\n  .sectionTrainer[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    margin-left: 5% !important;\n    font-size: 1.6rem !important;\n  }\n  .sectionTrainer[_ngcontent-%COMP%]   .newPost[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    height: 60px !important;\n  }\n  .sectionTrainer[_ngcontent-%COMP%]   .newPost[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 60px !important;\n    height: 60px !important;\n  }\n  .sectionTrainer[_ngcontent-%COMP%]   .newPost[_ngcontent-%COMP%]   .forumPostButton[_ngcontent-%COMP%] {\n    width: 30% !important;\n    margin-left: 63% !important;\n  }\n  .sectionTrainer[_ngcontent-%COMP%]   .fa-trash[_ngcontent-%COMP%] {\n    margin-top: 0% !important;\n  }\n  .sectionTrainer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-left: 5% !important;\n  }\n  .sectionTrainer[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%] {\n    padding-left: 10px !important;\n    padding-right: 10px !important;\n  }\n  .sectionTrainer[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .Showreply[_ngcontent-%COMP%] {\n    font-size: 13px !important;\n  }\n  .sectionTrainer[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .mediadate[_ngcontent-%COMP%] {\n    margin-top: 0px !important;\n    margin-left: 21% !important;\n  }\n  .sectionTrainer[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-top: -4px !important;\n  }\n  .sectionTrainer[_ngcontent-%COMP%]   .mediareply2[_ngcontent-%COMP%]   .mediabox[_ngcontent-%COMP%], .sectionTrainer[_ngcontent-%COMP%]   .mediareply2[_ngcontent-%COMP%]   .mediabox2[_ngcontent-%COMP%] {\n    width: 70% !important;\n    margin-left: 24% !important;\n  }\n  .sectionTrainer[_ngcontent-%COMP%]   .mediareply2[_ngcontent-%COMP%]   .mediabox[_ngcontent-%COMP%]   .mediabtncancel[_ngcontent-%COMP%], .sectionTrainer[_ngcontent-%COMP%]   .mediareply2[_ngcontent-%COMP%]   .mediabox2[_ngcontent-%COMP%]   .mediabtncancel[_ngcontent-%COMP%] {\n    margin-left: 30% !important;\n    width: auto !important;\n  }\n  .sectionTrainer[_ngcontent-%COMP%]   .mediareply2[_ngcontent-%COMP%]   .mediabox[_ngcontent-%COMP%]   .mediabtnreply[_ngcontent-%COMP%], .sectionTrainer[_ngcontent-%COMP%]   .mediareply2[_ngcontent-%COMP%]   .mediabox2[_ngcontent-%COMP%]   .mediabtnreply[_ngcontent-%COMP%] {\n    width: auto !important;\n  }\n\n  footer[_ngcontent-%COMP%]   .LatestProjects[_ngcontent-%COMP%]   .one[_ngcontent-%COMP%] {\n    height: 75px !important;\n    width: 80px !important;\n    margin-left: 2% !important;\n    margin-top: 2% !important;\n  }\n  footer[_ngcontent-%COMP%]   .LatestProjects[_ngcontent-%COMP%]   .two[_ngcontent-%COMP%] {\n    height: 75px !important;\n    width: 80px !important;\n    margin-left: 2% !important;\n    margin-top: 2% !important;\n  }\n  footer[_ngcontent-%COMP%]   .LatestProjects[_ngcontent-%COMP%]   .three[_ngcontent-%COMP%] {\n    height: 75px !important;\n    width: 80px !important;\n    margin-left: 2% !important;\n    margin-top: 2% !important;\n  }\n  footer[_ngcontent-%COMP%]   .LatestProjects[_ngcontent-%COMP%]   .four[_ngcontent-%COMP%] {\n    height: 75px !important;\n    width: 80px !important;\n    margin-left: 2% !important;\n    margin-top: 2% !important;\n  }\n  footer[_ngcontent-%COMP%]   .LatestProjects[_ngcontent-%COMP%]   .five[_ngcontent-%COMP%] {\n    height: 75px !important;\n    width: 80px !important;\n    margin-left: 2% !important;\n    margin-top: 2% !important;\n  }\n  footer[_ngcontent-%COMP%]   .LatestProjects[_ngcontent-%COMP%]   .six[_ngcontent-%COMP%] {\n    height: 75px !important;\n    width: 80px !important;\n    margin-left: 2% !important;\n    margin-top: 2% !important;\n  }\n  footer[_ngcontent-%COMP%]   .LatestProjects[_ngcontent-%COMP%]   .seven[_ngcontent-%COMP%] {\n    height: 75px !important;\n    width: 80px !important;\n    margin-left: 2% !important;\n    margin-top: 2% !important;\n  }\n  footer[_ngcontent-%COMP%]   .LatestProjects[_ngcontent-%COMP%]   .eight[_ngcontent-%COMP%] {\n    height: 75px !important;\n    width: 80px !important;\n    margin-left: 3% !important;\n    margin-top: 2% !important;\n  }\n  footer[_ngcontent-%COMP%]   .LatestProjects[_ngcontent-%COMP%]   .nine[_ngcontent-%COMP%] {\n    height: 80px !important;\n    width: 80px !important;\n    margin-left: 2% !important;\n    margin-top: 2% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWxsQ29tcG9uZW50cy9ob21lL0M6XFxVc2Vyc1xcY29tcGFcXERvd25sb2Fkc1xcZ2l0aHViIHByb2plY3RzXFxCZS1GaXRcXEJlRml0L3NyY1xcYXBwXFxBbGxDb21wb25lbnRzXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9BbGxDb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVJLDZCQUFBO0FDREo7O0FETUE7RUFDSSxrQkFBQTtBQ0hKOztBREtZO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUNIaEI7O0FES1k7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7QUNIaEI7O0FESWdCO0VBQ0ksc0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDRnBCOztBREdnQjtFQUNJLHVCQUFBO0FDRHBCOztBRElnQjtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNGcEI7O0FESW9CO0VBQ0ksaUJBQUE7QUNGeEI7O0FESW9CO0VBQ0ksbUJBQUE7QUNGeEI7O0FES29CO0VBQ0ksbUJBQUE7QUNIeEI7O0FETW9CO0VBQ0ksaUJBQUE7QUNKeEI7O0FET29CO0VBRUksaUJBQUE7RUFDQSxnQkFBQTtBQ054Qjs7QURTb0I7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQ1B4Qjs7QURVb0I7RUFDSSx1QkFBQTtBQ1J4Qjs7QURXZ0I7RUFDSSw0QkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ1RwQjs7QURrQlk7RUFDSSxpQkFBQTtFQUNBLHdDQUFBO0FDZmhCOztBRGtCZ0I7RUFFSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDakJwQjs7QURrQm9CO0VBQ0ksdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ2hCeEI7O0FEbUJnQjtFQUNJLGVBQUE7QUNqQnBCOztBRG1CZ0I7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBRUEseUJBQUE7QUNsQnBCOztBRG1Cb0I7RUFDSSx3Q0FBQTtBQ2pCeEI7O0FEMEJRO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDdkJaOztBRHlCWTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDdkJoQjs7QUR3QmdCO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0FDdEJwQjs7QUR1Qm9CO0VBRUksbUJBQUE7RUFDQSxvQkFBQTtFQUVBLGlCQUFBO0VBQ0Esc0RBQUE7QUN2QnhCOztBRHdCd0I7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUN0QjVCOztBRHVCNEI7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNyQmhDOztBRGlDZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUMvQnBCOztBRGlDZ0I7RUFDSSxVQUFBO0VBQ0EsZUFBQTtBQy9CcEI7O0FEb0NZO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FDbENoQjs7QURvQ1k7RUFDSSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNsQ2hCOztBRG1DZ0I7RUFDSSxxQkFBQTtBQ2pDcEI7O0FEd0NJO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FDckNSOztBRHNDUTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDcENaOztBRHNDUTtFQUNJLGNBQUE7RUFFQSxXQUFBO0FDckNaOztBRHVDWTtFQUNJLGlCQUFBO0FDckNoQjs7QURzQ2dCO0VBQ0ksaUJBQUE7QUNwQ3BCOztBRHlDSTtFQUNJLGNBQUE7QUN2Q1I7O0FEMENRO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUVBLDREQUFBO0FDekNaOztBRDBDWTtFQUNJLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDeENoQjs7QUQ2Q2dCO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUMzQ3BCOztBRCtDUTtFQUNJLG9CQUFBO0VBQ0EsNERBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDN0NaOztBRDhDWTtFQUNJLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDNUNoQjs7QURpRGdCO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUMvQ3BCOztBRG1EUTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUNqRFo7O0FEa0RZO0VBQ0ksa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNoRGhCOztBRHFEZ0I7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ25EcEI7O0FEd0RPO0VBQ0MsY0FBQTtBQ3REUjs7QUR3RFc7RUFDQyx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDdERaOztBRHdEVztFQUNDLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUN0RFo7O0FEd0RXO0VBQ0Msd0JBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ3REWjs7QUR3RFc7RUFDQyx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ3REWjs7QUQwRFc7RUFDQyx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ3hEWjs7QUQwRFc7RUFDQyx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ3hEWjs7QUQwRFc7RUFDQyx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ3hEWjs7QUQ0RFc7RUFDQyx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQzFEWjs7QUQ0RFc7RUFDQyx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQzFEWjs7QUQ2RE87RUFDSyxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUMzRFo7O0FENERZO0VBQ0ksdUJBQUE7QUMxRGhCOztBRGdFQTtFQUNJLGlDQUFBO0FDN0RKOztBRDhESTtFQUNnQixtQkFBQTtBQzVEcEI7O0FEOERnQjtFQUNJLG1CQUFBO0FDNURwQjs7QURpRUE7RUFPVztJQUNJLDBCQUFBO0VDcEViO0VEeUVhO0lBRUksNEJBQUE7SUFDQSwyQkFBQTtFQ3hFakI7RUQyRWE7SUFFSSw0QkFBQTtFQzFFakI7RURpRk07SUFFSSxXQUFBO0VDaEZWO0FBQ0Y7O0FEeUZBO0VBT1c7SUFDSSwwQkFBQTtFQzdGYjtFRGtHYTtJQUVJLDJCQUFBO0lBQ0EsMkJBQUE7RUNqR2pCO0VEb0dhO0lBRUksMkJBQUE7RUNuR2pCO0VENEdVO0lBRUcscUJBQUE7SUFDQSwyQkFBQTtFQzNHYjtBQUNGOztBRG1IQTtFQU1ZO0lBRUksNEJBQUE7RUN2SGQ7RUR5SFU7SUFFSSxtQkFBQTtJQUNBLDBCQUFBO0VDeEhkOztFRGdJTztJQUVJLG9CQUFBO0VDOUhYOztFRHVJVTtJQUNJLDBCQUFBO0VDcElkO0VEeUljO0lBRUksMkJBQUE7SUFDQSwyQkFBQTtFQ3hJbEI7RUQySWM7SUFFSSwyQkFBQTtFQzFJbEI7RURtSlc7SUFFRyxxQkFBQTtJQUNBLDJCQUFBO0VDbEpkO0FBQ0Y7O0FEMEpBO0VBTVk7SUFFSSw0QkFBQTtFQzlKZDtFRGlLVTtJQUVJLG1CQUFBO0lBQ0EsMEJBQUE7RUNoS2Q7O0VEd0tPO0lBRUcsMEJBQUE7RUN0S1Y7RUR3S087SUFFSSxtQkFBQTtFQ3ZLWDs7RUQ2S007SUFFSSx5QkFBQTtFQzNLVjtFRGdMVTtJQUVJLDBCQUFBO0VDL0tkO0VEb0xPO0lBRUcsOEJBQUE7SUFDQSwrQkFBQTtFQ25MVjtFRHFMVTtJQUNJLDBCQUFBO0VDbkxkO0VEd0xjO0lBRUksMEJBQUE7SUFDQSwyQkFBQTtFQ3ZMbEI7RUQwTGM7SUFFSSwyQkFBQTtFQ3pMbEI7RURtTVU7SUFFQSxzQkFBQTtJQUNBLDJCQUFBO0VDbE1WO0FBQ0Y7O0FEME1BO0VBSVE7SUFFSSx3QkFBQTtFQzVNVjtFRGlOVTtJQUVJLDRCQUFBO0VDaE5kO0VEbU5VO0lBRUksNEJBQUE7RUNsTmQ7RURxTlU7SUFFSSw0QkFBQTtFQ3BOZDtFRHVOVTtJQUVJLG1CQUFBO0lBQ0EsMEJBQUE7RUN0TmQ7O0VEOE5PO0lBRUcsMEJBQUE7RUM1TlY7RUQ4Tk87SUFFSSxvQkFBQTtJQUNBLHFCQUFBO0lBQ0EsV0FBQTtFQzdOWDs7RURtT087SUFFRywwQkFBQTtJQUNBLDRCQUFBO0VDak9WO0VEdU9VO0lBRUcsdUJBQUE7RUN0T2I7RUR5T1U7SUFFSSxzQkFBQTtJQUNBLHVCQUFBO0VDeE9kO0VEME9VO0lBRUkscUJBQUE7SUFDQSwyQkFBQTtFQ3pPZDtFRDZPTTtJQUVJLHlCQUFBO0VDNU9WO0VEaVBVO0lBRUksMEJBQUE7RUNoUGQ7RURxUE87SUFFRyw2QkFBQTtJQUNBLDhCQUFBO0VDcFBWO0VEdVBVO0lBRUksMEJBQUE7RUN0UGQ7RUQyUGM7SUFFSSwwQkFBQTtJQUNBLDJCQUFBO0VDMVBsQjtFRDZQYztJQUVJLDJCQUFBO0VDNVBsQjtFRHNRVTtJQUVBLHFCQUFBO0lBQ0EsMkJBQUE7RUNyUVY7RURzUVU7SUFFSSwyQkFBQTtJQUNBLHNCQUFBO0VDclFkO0VEdVFVO0lBRUksc0JBQUE7RUN0UWQ7O0VEaVJTO0lBRUMsdUJBQUE7SUFDQSxzQkFBQTtJQUNBLDBCQUFBO0lBQ0EseUJBQUE7RUMvUVY7RURpUlM7SUFFQyx1QkFBQTtJQUNBLHNCQUFBO0lBQ0EsMEJBQUE7SUFDQSx5QkFBQTtFQ2hSVjtFRGtSUztJQUVDLHVCQUFBO0lBQ0Esc0JBQUE7SUFDQSwwQkFBQTtJQUNBLHlCQUFBO0VDalJWO0VEbVJTO0lBRUMsdUJBQUE7SUFDQSxzQkFBQTtJQUNBLDBCQUFBO0lBQ0EseUJBQUE7RUNsUlY7RURvUlM7SUFFQyx1QkFBQTtJQUNBLHNCQUFBO0lBQ0EsMEJBQUE7SUFDQSx5QkFBQTtFQ25SVjtFRHFSUztJQUVDLHVCQUFBO0lBQ0Esc0JBQUE7SUFDQSwwQkFBQTtJQUNBLHlCQUFBO0VDcFJWO0VEc1JTO0lBRUMsdUJBQUE7SUFDQSxzQkFBQTtJQUNBLDBCQUFBO0lBQ0EseUJBQUE7RUNyUlY7RUR1UlM7SUFFQyx1QkFBQTtJQUNBLHNCQUFBO0lBQ0EsMEJBQUE7SUFDQSx5QkFBQTtFQ3RSVjtFRHdSUztJQUVDLHVCQUFBO0lBQ0Esc0JBQUE7SUFDQSwwQkFBQTtJQUNBLHlCQUFBO0VDdlJWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9BbGxDb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcjpyZ2IoMjI3LCAxMDgsIDgxKTtcclxuOnJvb3R7XHJcbiAgICBcclxuICAgIC0tbWFpbmNvbG9yOiB2YXIoLS1tYWluY29sb3IpO1xyXG5cclxufSAgIFxyXG5cclxuXHJcbi5jYXJvdXNlbC1pdGVtIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgXHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIGhlaWdodDogODQwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA4NDBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5Db3ZlclBob3Rve1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMzcsIDM3LCAzNywgMC41MCk7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICBoMXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJSYWxld2F5XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgICAgIC5GaXRMb2dve1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1tYWluY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuUG9zaXRpb25DYXB0aW9ue1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDQwJTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxNSU7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBoMyxoNCwuR2l0Rml0U3Ryb25nLGgxLHB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDElO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBoM3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0yMzBweDsgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaDR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTYycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5HaXRGaXRTdHJvbmd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaDF7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDY2MjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDIwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjp2YXIoLS1tYWluY29sb3IpIDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYnRue1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW5jb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDQlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9BYm91dFVzLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgICAgICAgICAuQWJvdXRVc3tcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDhweCAxMHB4IDEwcHggd2hpdGVzbW9rZTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuY29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGgxe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tbWFpbmNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLlBhcmFBYm91dFVze1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zaWduYXR1cmV7IFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAyOCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MSU7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xNWRlZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogOHB4IDhweCAxMHB4IDEwcHggd2hpdGVzbW9rZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vdHJhaW5lci8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgXHJcbiAgICAgICAgLnNlY3Rpb25UcmFpbmVye1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDU1MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgLmNvbnRhaW5lcntcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGRmZTI7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMiU7XHJcbiAgICAgICAgICAgICAgICAuYWxsY29tbWVudHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI4MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICAgICAgICAgICAgICAuY29tbWVudHN7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTcwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE3MHB4O1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJvd3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmltZ2NvbW1lbnR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5yb3d7XHJcbiAgICAgICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDk0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5NHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMyU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmF1dG9FeHBhbmR7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMSU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjElO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tbWFpbmNvbG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZm9ydW1Qb3N0QnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbmNvbG9yKTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNSU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNzYlO1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBmb290ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjYyNjtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgaDN7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTElO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGFjdHN7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDYlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkaXZ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2JTtcclxuICAgICAgICAgICAgICAgIGl7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIC5SZWNlbnRQb3N0c3tcclxuICAgICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAuRnJpc3RQb3N0e1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuMSkhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAucGhvdG97XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJ3NyYy9hc3NldHMvRnJpc3RQb3N0LmpwZycpIDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDc1cHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIC5OYW1le1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MjBweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLlNlY29uZFBvc3R7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuMSkhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgIC5waG90b3tcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnc3JjL2Fzc2V0cy9TZWNvbmRQb3N0LmpwZycpIDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDc1cHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIC5OYW1le1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MjBweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLlRoaXJkUG9zdHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICAucGhvdG97XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJ3NyYy9hc3NldHMvVGhpcmRQb3N0LmpwZycpIDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDc1cHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIC5OYW1le1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MjBweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAgICAuTGF0ZXN0UHJvamVjdHN7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICAgICBcclxuICAgICAgICAgICAub25le1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJ3NyYy9hc3NldHMvMS5qcGcnKSA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDg1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4NXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIC50d297XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnc3JjL2Fzc2V0cy8yLmpwZycpIDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogODVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDg1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1JVxyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICAudGhyZWV7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnc3JjL2Fzc2V0cy8zLmpwZycpIDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogODVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDg1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgLmZvdXJ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnc3JjL2Fzc2V0cy80LmpwZycpIDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogODVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDg1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNSU7XHJcblxyXG5cclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgLmZpdmV7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnc3JjL2Fzc2V0cy81LmpwZycpIDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogODVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDg1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIC5zaXh7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnc3JjL2Fzc2V0cy82LmpwZycpIDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogODVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDg1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIC5zZXZlbntcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCdzcmMvYXNzZXRzLzcuanBnJykgO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4NXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogODVweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1JTtcclxuXHJcblxyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICAuZWlnaHR7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnc3JjL2Fzc2V0cy84LmpwZycpIDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogODVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDg1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIC5uaW5le1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJ3NyYy9hc3NldHMvOS5qcGcnKSA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDg1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4NXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgIH1cclxuICAgICAgIC5jb3B5cmlnaHR7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyMjI7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ3cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICBib3R0b206IDBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICAgICAgICAgIC5GaXR7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tbWFpbmNvbG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgICAgXHJcbn0gICBcclxuXHJcbiNteU1vZGFsMntcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMzAsIDMwICwgMzAsIDAuNyk7XHJcbiAgICAuaW5wdXRjb250YWN0eyBcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmZhe1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweClcclxue1xyXG4gICAgLnNlY3Rpb25UcmFpbmVyXHJcbiAgICB7XHJcbiAgICAgIFxyXG4gICAgICAgIC5jb21tZW50c1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAuU2hvd3JlcGx5e1xyXG4gICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgLnJvd1xyXG4gICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgLm1lZGlhZGF0ZVxyXG4gICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJSAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBzcGFuXHJcbiAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZWRpYXJlcGx5MlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpXHJcbntcclxuICAgIC5zZWN0aW9uVHJhaW5lclxyXG4gICAge1xyXG4gICAgICBcclxuICAgICAgICAuY29tbWVudHNcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgLlNob3dyZXBseXtcclxuICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIC5yb3dcclxuICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIC5tZWRpYWRhdGVcclxuICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEyJSAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBzcGFuXHJcbiAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC05cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lZGlhcmVwbHkyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAubWVkaWFib3gsLm1lZGlhYm94MlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgIHdpZHRoOiA2NCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEyJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpXHJcbntcclxuICAgIC5jYXJvdXNlbC1pdGVtXHJcbiAgICAge1xyXG4gICAgICAgIC5Qb3NpdGlvbkNhcHRpb25cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGgxXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA0JSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICB9XHJcbiAgICAgLkFib3V0VXNcclxuICAgICB7XHJcbiAgICAgICAgIC5zaWduYXR1cmVcclxuICAgICAgICAgeyBcclxuICAgICAgICAgICAgIGxlZnQ6IDE2JSAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgfVxyXG4gICAgIH1cclxuICAgICAuc2VjdGlvblRyYWluZXJcclxuICAgICB7XHJcbiAgICAgICBcclxuICAgICAgICAgLmNvbW1lbnRzXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgLlNob3dyZXBseXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5yb3dcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5tZWRpYWRhdGVcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE4JSAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNwYW5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtOXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIH1cclxuICAgICAgICAgLm1lZGlhcmVwbHkyXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgIC5tZWRpYWJveCwubWVkaWFib3gyXHJcbiAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogODUlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTglICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICB9XHJcbiBcclxuICAgICAgICAgfVxyXG5cclxuICAgICB9XHJcbiAgXHJcblxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIFxyXG57XHJcbiAgICAuY2Fyb3VzZWwtaXRlbVxyXG4gICAgIHtcclxuICAgICAgICAuUG9zaXRpb25DYXB0aW9uXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoMVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbSAhaW1wb3J0YW50OyAgXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgfVxyXG4gICAgIC5BYm91dFVzXHJcbiAgICAge1xyXG4gICAgICAgICBwXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgLnNpZ25hdHVyZVxyXG4gICAgICAgICB7IFxyXG4gICAgICAgICAgICAgbGVmdDogNSUgIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgIH1cclxuICAgICB9XHJcbiAgICAgLnNlY3Rpb25UcmFpbmVyXHJcbiAgICAge1xyXG4gICAgICAgIC5mYS10cmFzaFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMCUgIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgICAucm93XHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgaW1nXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1JSAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgfVxyXG4gICAgICAgICAuY29tbWVudHNcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7IFxyXG5cclxuICAgICAgICAgICAgLlNob3dyZXBseXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5yb3dcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5tZWRpYWRhdGVcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjElICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3BhblxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC00cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAubWVkaWFyZXBseTJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC5tZWRpYWJveCwubWVkaWFib3gyXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgfVxyXG4gXHJcblxyXG59ICAgIFxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSBcclxue1xyXG4gICAgLmNhcm91c2VsLWl0ZW1cclxuICAgICB7XHJcbiAgICAgICAgaW1nXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDc0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICAuUG9zaXRpb25DYXB0aW9uXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoM1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbSAhaW1wb3J0YW50OyAgXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGg0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtICFpbXBvcnRhbnQ7ICBcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDFcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW0gIWltcG9ydGFudDsgIFxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDQlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgIH1cclxuICAgICAuQWJvdXRVc1xyXG4gICAgIHtcclxuICAgICAgICAgcFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIC5zaWduYXR1cmVcclxuICAgICAgICAgeyBcclxuICAgICAgICAgICAgIGxlZnQ6IDFweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgcmlnaHQ6IDFweCAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgfVxyXG4gICAgIH1cclxuICAgICAuc2VjdGlvblRyYWluZXJcclxuICAgICB7XHJcbiAgICAgICAgIC50aXRsZVxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1JSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNnJlbSAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgLm5ld1Bvc3RcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHRhcmVhXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XHJcbiAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGltZ1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZvcnVtUG9zdEJ1dHRvblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNjMlICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mYS10cmFzaFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMCUgIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgICAucm93XHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgaW1nXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1JSAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgfVxyXG4gICAgICAgICAuY29tbWVudHNcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweCAhaW1wb3J0YW50OyBcclxuICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIC5TaG93cmVwbHlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnJvd1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLm1lZGlhZGF0ZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMSUgIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzcGFuXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tZWRpYXJlcGx5MlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLm1lZGlhYm94LC5tZWRpYWJveDJcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICB3aWR0aDogNzAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLm1lZGlhYnRuY2FuY2VsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1lZGlhYnRucmVwbHlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgfVxyXG4gICAgIGZvb3RlcntcclxuXHJcbiAgICAgICAuTGF0ZXN0UHJvamVjdHNcclxuICAgICAgIHtcclxuICAgICAgICAgICAub25lXHJcbiAgICAgICAgICAge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDc1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIC50d29cclxuICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNzVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB3aWR0aDogODBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMiUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMiUgIWltcG9ydGFudDtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgLnRocmVlXHJcbiAgICAgICAgICAge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDc1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIC5mb3VyXHJcbiAgICAgICAgICAge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDc1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIC5maXZlXHJcbiAgICAgICAgICAge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDc1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIC5zaXhcclxuICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNzVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB3aWR0aDogODBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMiUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMiUgIWltcG9ydGFudDtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgLnNldmVuXHJcbiAgICAgICAgICAge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDc1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIC5laWdodFxyXG4gICAgICAgICAgIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4IWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIC5uaW5lXHJcbiAgICAgICAgICAge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHghaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB3aWR0aDogODBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMiUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMiUgIWltcG9ydGFudDtcclxuICAgICAgICAgICB9XHJcbiAgICAgICB9XHJcbiAgIFxyXG59ICAgXHJcblxyXG4gXHJcblxyXG59ICAgICAgIFxyXG4gICAgICIsIjpyb290IHtcbiAgLS1tYWluY29sb3I6IHZhcigtLW1haW5jb2xvcik7XG59XG5cbi5jYXJvdXNlbC1pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNhcm91c2VsLWl0ZW0gaW1nIHtcbiAgaGVpZ2h0OiA4NDBweDtcbiAgbWF4LWhlaWdodDogODQwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuLmNhcm91c2VsLWl0ZW0gLkNvdmVyUGhvdG8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTA7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzcsIDM3LCAzNywgMC41KTtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMDtcbn1cbi5jYXJvdXNlbC1pdGVtIC5Db3ZlclBob3RvIGgxIHtcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDMwcHg7XG59XG4uY2Fyb3VzZWwtaXRlbSAuQ292ZXJQaG90byBoMSAuRml0TG9nbyB7XG4gIGNvbG9yOiB2YXIoLS1tYWluY29sb3IpO1xufVxuLmNhcm91c2VsLWl0ZW0gLkNvdmVyUGhvdG8gLlBvc2l0aW9uQ2FwdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0MCU7XG4gIGxlZnQ6IDE1JTtcbn1cbi5jYXJvdXNlbC1pdGVtIC5Db3ZlclBob3RvIC5Qb3NpdGlvbkNhcHRpb24gaDMsIC5jYXJvdXNlbC1pdGVtIC5Db3ZlclBob3RvIC5Qb3NpdGlvbkNhcHRpb24gaDQsIC5jYXJvdXNlbC1pdGVtIC5Db3ZlclBob3RvIC5Qb3NpdGlvbkNhcHRpb24gLkdpdEZpdFN0cm9uZywgLmNhcm91c2VsLWl0ZW0gLkNvdmVyUGhvdG8gLlBvc2l0aW9uQ2FwdGlvbiBoMSwgLmNhcm91c2VsLWl0ZW0gLkNvdmVyUGhvdG8gLlBvc2l0aW9uQ2FwdGlvbiBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMSU7XG59XG4uY2Fyb3VzZWwtaXRlbSAuQ292ZXJQaG90byAuUG9zaXRpb25DYXB0aW9uIGgzIHtcbiAgbWFyZ2luLWxlZnQ6IC0yMzBweDtcbn1cbi5jYXJvdXNlbC1pdGVtIC5Db3ZlclBob3RvIC5Qb3NpdGlvbkNhcHRpb24gaDQge1xuICBtYXJnaW4tcmlnaHQ6IDE2MnB4O1xufVxuLmNhcm91c2VsLWl0ZW0gLkNvdmVyUGhvdG8gLlBvc2l0aW9uQ2FwdGlvbiAuR2l0Rml0U3Ryb25nIHtcbiAgbWFyZ2luLWxlZnQ6IDcwcHg7XG59XG4uY2Fyb3VzZWwtaXRlbSAuQ292ZXJQaG90byAuUG9zaXRpb25DYXB0aW9uIGgxIHtcbiAgZm9udC1zaXplOiAzLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2NjI7XG59XG4uY2Fyb3VzZWwtaXRlbSAuQ292ZXJQaG90byAuUG9zaXRpb25DYXB0aW9uIHAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAyMCU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5jYXJvdXNlbC1pdGVtIC5Db3ZlclBob3RvIC5Qb3NpdGlvbkNhcHRpb24gc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1tYWluY29sb3IpO1xufVxuLmNhcm91c2VsLWl0ZW0gLkNvdmVyUGhvdG8gLmJ0biB7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW5jb2xvcik7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICB3aWR0aDogMzAlO1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xuICBtYXJnaW4tdG9wOiA0JTtcbn1cblxuLkFib3V0VXMge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxMHB4IDEwcHggd2hpdGVzbW9rZTtcbn1cbi5BYm91dFVzIC5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLkFib3V0VXMgLmNvbnRhaW5lciBoMSB7XG4gIGNvbG9yOiB2YXIoLS1tYWluY29sb3IpO1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgcGFkZGluZy10b3A6IDMlO1xufVxuLkFib3V0VXMgLmNvbnRhaW5lciAuUGFyYUFib3V0VXMge1xuICBwYWRkaW5nLXRvcDogMyU7XG59XG4uQWJvdXRVcyAuY29udGFpbmVyIC5zaWduYXR1cmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDI4JTtcbiAgdG9wOiA1MSU7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0xNWRlZyk7XG59XG4uQWJvdXRVcyAuY29udGFpbmVyIC5zaWduYXR1cmU6aG92ZXIge1xuICBib3gtc2hhZG93OiA4cHggOHB4IDEwcHggMTBweCB3aGl0ZXNtb2tlO1xufVxuXG4uc2VjdGlvblRyYWluZXIge1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDU1MHB4O1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNlY3Rpb25UcmFpbmVyIC5jb250YWluZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZmUyO1xuICBwYWRkaW5nLXRvcDogMiU7XG4gIHBhZGRpbmctYm90dG9tOiAyJTtcbn1cbi5zZWN0aW9uVHJhaW5lciAuY29udGFpbmVyIC5hbGxjb21tZW50IHtcbiAgaGVpZ2h0OiAyODJweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuLnNlY3Rpb25UcmFpbmVyIC5jb250YWluZXIgLmFsbGNvbW1lbnQgLmNvbW1lbnRzIHtcbiAgcGFkZGluZy1sZWZ0OiAxNzBweDtcbiAgcGFkZGluZy1yaWdodDogMTcwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpICFpbXBvcnRhbnQ7XG59XG4uc2VjdGlvblRyYWluZXIgLmNvbnRhaW5lciAuYWxsY29tbWVudCAuY29tbWVudHMgLnJvdyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cbi5zZWN0aW9uVHJhaW5lciAuY29udGFpbmVyIC5hbGxjb21tZW50IC5jb21tZW50cyAucm93IC5pbWdjb21tZW50IHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDMlO1xufVxuLnNlY3Rpb25UcmFpbmVyIC5jb250YWluZXIgLnJvdyBpbWcge1xuICB3aWR0aDogOTRweDtcbiAgaGVpZ2h0OiA5NHB4O1xuICBtYXJnaW4tbGVmdDogMTMlO1xuICBib3JkZXItcmFkaXVzOiAxMCU7XG59XG4uc2VjdGlvblRyYWluZXIgLmNvbnRhaW5lciAucm93IC5hdXRvRXhwYW5kIHtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luLWxlZnQ6IDElO1xufVxuLnNlY3Rpb25UcmFpbmVyIC5jb250YWluZXIgaDIge1xuICBtYXJnaW4tbGVmdDogMjElO1xuICBtYXJnaW4tYm90dG9tOiAxJTtcbiAgY29sb3I6IHZhcigtLW1haW5jb2xvcik7XG59XG4uc2VjdGlvblRyYWluZXIgLmNvbnRhaW5lciAuZm9ydW1Qb3N0QnV0dG9uIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbmNvbG9yKTtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTUlO1xuICBtYXJnaW4tbGVmdDogNzYlO1xufVxuLnNlY3Rpb25UcmFpbmVyIC5jb250YWluZXIgLmZvcnVtUG9zdEJ1dHRvbjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjYyNjtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuZm9vdGVyIGgzIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBtYXJnaW4tYm90dG9tOiAxMSU7XG59XG5mb290ZXIgLmNvbnRhY3RzIHtcbiAgbWFyZ2luLXRvcDogNiU7XG4gIGNvbG9yOiAjZmZmO1xufVxuZm9vdGVyIC5jb250YWN0cyBkaXYge1xuICBtYXJnaW4tYm90dG9tOiA2JTtcbn1cbmZvb3RlciAuY29udGFjdHMgZGl2IGkge1xuICBtYXJnaW4tcmlnaHQ6IDEwJTtcbn1cbmZvb3RlciAuUmVjZW50UG9zdHMge1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cbmZvb3RlciAuUmVjZW50UG9zdHMgLkZyaXN0UG9zdCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAhaW1wb3J0YW50O1xufVxuZm9vdGVyIC5SZWNlbnRQb3N0cyAuRnJpc3RQb3N0IC5waG90byB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9GcmlzdFBvc3QuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgaGVpZ2h0OiA3NXB4O1xuICB3aWR0aDogNzVweDtcbn1cbmZvb3RlciAuUmVjZW50UG9zdHMgLkZyaXN0UG9zdCAuTmFtZSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5mb290ZXIgLlJlY2VudFBvc3RzIC5TZWNvbmRQb3N0IHtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuZm9vdGVyIC5SZWNlbnRQb3N0cyAuU2Vjb25kUG9zdCAucGhvdG8ge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvU2Vjb25kUG9zdC5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBoZWlnaHQ6IDc1cHg7XG4gIHdpZHRoOiA3NXB4O1xufVxuZm9vdGVyIC5SZWNlbnRQb3N0cyAuU2Vjb25kUG9zdCAuTmFtZSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5mb290ZXIgLlJlY2VudFBvc3RzIC5UaGlyZFBvc3Qge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5mb290ZXIgLlJlY2VudFBvc3RzIC5UaGlyZFBvc3QgLnBob3RvIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL1RoaXJkUG9zdC5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBoZWlnaHQ6IDc1cHg7XG4gIHdpZHRoOiA3NXB4O1xufVxuZm9vdGVyIC5SZWNlbnRQb3N0cyAuVGhpcmRQb3N0IC5OYW1lIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmZvb3RlciAuTGF0ZXN0UHJvamVjdHMge1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cbmZvb3RlciAuTGF0ZXN0UHJvamVjdHMgLm9uZSB7XG4gIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvMS5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBoZWlnaHQ6IDg1cHg7XG4gIHdpZHRoOiA4NXB4O1xuICBtYXJnaW4tbGVmdDogNSU7XG59XG5mb290ZXIgLkxhdGVzdFByb2plY3RzIC50d28ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzLzIuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgaGVpZ2h0OiA4NXB4O1xuICB3aWR0aDogODVweDtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuZm9vdGVyIC5MYXRlc3RQcm9qZWN0cyAudGhyZWUge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzLzMuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgaGVpZ2h0OiA4NXB4O1xuICB3aWR0aDogODVweDtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuZm9vdGVyIC5MYXRlc3RQcm9qZWN0cyAuZm91ciB7XG4gIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvNC5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBoZWlnaHQ6IDg1cHg7XG4gIHdpZHRoOiA4NXB4O1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuZm9vdGVyIC5MYXRlc3RQcm9qZWN0cyAuZml2ZSB7XG4gIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvNS5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBoZWlnaHQ6IDg1cHg7XG4gIHdpZHRoOiA4NXB4O1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuZm9vdGVyIC5MYXRlc3RQcm9qZWN0cyAuc2l4IHtcbiAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy82LmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGhlaWdodDogODVweDtcbiAgd2lkdGg6IDg1cHg7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5mb290ZXIgLkxhdGVzdFByb2plY3RzIC5zZXZlbiB7XG4gIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvNy5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBoZWlnaHQ6IDg1cHg7XG4gIHdpZHRoOiA4NXB4O1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuZm9vdGVyIC5MYXRlc3RQcm9qZWN0cyAuZWlnaHQge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzLzguanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgaGVpZ2h0OiA4NXB4O1xuICB3aWR0aDogODVweDtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cbmZvb3RlciAuTGF0ZXN0UHJvamVjdHMgLm5pbmUge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzLzkuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgaGVpZ2h0OiA4NXB4O1xuICB3aWR0aDogODVweDtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cbmZvb3RlciAuY29weXJpZ2h0IHtcbiAgYmFja2dyb3VuZDogIzIyMjtcbiAgY29sb3I6IHdoaXRlO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDdweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGJvdHRvbTogMHB4O1xuICBtYXJnaW4tdG9wOiAzJTtcbn1cbmZvb3RlciAuY29weXJpZ2h0IC5GaXQge1xuICBjb2xvcjogdmFyKC0tbWFpbmNvbG9yKTtcbn1cblxuI215TW9kYWwyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgzMCwgMzAsIDMwLCAwLjcpO1xufVxuI215TW9kYWwyIC5pbnB1dGNvbnRhY3Qge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuI215TW9kYWwyIC5mYSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5zZWN0aW9uVHJhaW5lciAuY29tbWVudHMgLlNob3dyZXBseSB7XG4gICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnNlY3Rpb25UcmFpbmVyIC5jb21tZW50cyAucm93IC5tZWRpYWRhdGUge1xuICAgIG1hcmdpbi10b3A6IC0xMnB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJSAhaW1wb3J0YW50O1xuICB9XG4gIC5zZWN0aW9uVHJhaW5lciAuY29tbWVudHMgLnJvdyBzcGFuIHtcbiAgICBtYXJnaW4tdG9wOiAtMTZweCAhaW1wb3J0YW50O1xuICB9XG4gIC5zZWN0aW9uVHJhaW5lciAubWVkaWFyZXBseTIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gIC5zZWN0aW9uVHJhaW5lciAuY29tbWVudHMgLlNob3dyZXBseSB7XG4gICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnNlY3Rpb25UcmFpbmVyIC5jb21tZW50cyAucm93IC5tZWRpYWRhdGUge1xuICAgIG1hcmdpbi10b3A6IC01cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMTIlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnNlY3Rpb25UcmFpbmVyIC5jb21tZW50cyAucm93IHNwYW4ge1xuICAgIG1hcmdpbi10b3A6IC05cHggIWltcG9ydGFudDtcbiAgfVxuICAuc2VjdGlvblRyYWluZXIgLm1lZGlhcmVwbHkyIC5tZWRpYWJveCwgLnNlY3Rpb25UcmFpbmVyIC5tZWRpYXJlcGx5MiAubWVkaWFib3gyIHtcbiAgICB3aWR0aDogNjQlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDEyJSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmNhcm91c2VsLWl0ZW0gLlBvc2l0aW9uQ2FwdGlvbiBoMSB7XG4gICAgZm9udC1zaXplOiAyLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAuY2Fyb3VzZWwtaXRlbSAuUG9zaXRpb25DYXB0aW9uIHAge1xuICAgIGxlZnQ6IDQlICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuQWJvdXRVcyAuc2lnbmF0dXJlIHtcbiAgICBsZWZ0OiAxNiUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5zZWN0aW9uVHJhaW5lciAuY29tbWVudHMgLlNob3dyZXBseSB7XG4gICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnNlY3Rpb25UcmFpbmVyIC5jb21tZW50cyAucm93IC5tZWRpYWRhdGUge1xuICAgIG1hcmdpbi10b3A6IC01cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMTglICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnNlY3Rpb25UcmFpbmVyIC5jb21tZW50cyAucm93IHNwYW4ge1xuICAgIG1hcmdpbi10b3A6IC05cHggIWltcG9ydGFudDtcbiAgfVxuICAuc2VjdGlvblRyYWluZXIgLm1lZGlhcmVwbHkyIC5tZWRpYWJveCwgLnNlY3Rpb25UcmFpbmVyIC5tZWRpYXJlcGx5MiAubWVkaWFib3gyIHtcbiAgICB3aWR0aDogODUlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDE4JSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jYXJvdXNlbC1pdGVtIC5Qb3NpdGlvbkNhcHRpb24gaDEge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNhcm91c2VsLWl0ZW0gLlBvc2l0aW9uQ2FwdGlvbiBwIHtcbiAgICBsZWZ0OiA0JSAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLkFib3V0VXMgcCB7XG4gICAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLkFib3V0VXMgLnNpZ25hdHVyZSB7XG4gICAgbGVmdDogNSUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5zZWN0aW9uVHJhaW5lciAuZmEtdHJhc2gge1xuICAgIG1hcmdpbi10b3A6IDAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnNlY3Rpb25UcmFpbmVyIC5yb3cgaW1nIHtcbiAgICBtYXJnaW4tbGVmdDogNSUgIWltcG9ydGFudDtcbiAgfVxuICAuc2VjdGlvblRyYWluZXIgLmNvbW1lbnRzIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1yaWdodDogMTAwcHggIWltcG9ydGFudDtcbiAgfVxuICAuc2VjdGlvblRyYWluZXIgLmNvbW1lbnRzIC5TaG93cmVwbHkge1xuICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICB9XG4gIC5zZWN0aW9uVHJhaW5lciAuY29tbWVudHMgLnJvdyAubWVkaWFkYXRlIHtcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMjElICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnNlY3Rpb25UcmFpbmVyIC5jb21tZW50cyAucm93IHNwYW4ge1xuICAgIG1hcmdpbi10b3A6IC00cHggIWltcG9ydGFudDtcbiAgfVxuICAuc2VjdGlvblRyYWluZXIgLm1lZGlhcmVwbHkyIC5tZWRpYWJveCwgLnNlY3Rpb25UcmFpbmVyIC5tZWRpYXJlcGx5MiAubWVkaWFib3gyIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAyMCUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAuY2Fyb3VzZWwtaXRlbSBpbWcge1xuICAgIGhlaWdodDogNzQwcHggIWltcG9ydGFudDtcbiAgfVxuICAuY2Fyb3VzZWwtaXRlbSAuUG9zaXRpb25DYXB0aW9uIGgzIHtcbiAgICBmb250LXNpemU6IDEuMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5jYXJvdXNlbC1pdGVtIC5Qb3NpdGlvbkNhcHRpb24gaDQge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNhcm91c2VsLWl0ZW0gLlBvc2l0aW9uQ2FwdGlvbiBoMSB7XG4gICAgZm9udC1zaXplOiAxLjRyZW0gIWltcG9ydGFudDtcbiAgfVxuICAuY2Fyb3VzZWwtaXRlbSAuUG9zaXRpb25DYXB0aW9uIHAge1xuICAgIGxlZnQ6IDQlICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuQWJvdXRVcyBwIHtcbiAgICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAuQWJvdXRVcyAuc2lnbmF0dXJlIHtcbiAgICBsZWZ0OiAxcHggIWltcG9ydGFudDtcbiAgICByaWdodDogMXB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuc2VjdGlvblRyYWluZXIgLnRpdGxlIHtcbiAgICBtYXJnaW4tbGVmdDogNSUgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDEuNnJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5zZWN0aW9uVHJhaW5lciAubmV3UG9zdCB0ZXh0YXJlYSB7XG4gICAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnNlY3Rpb25UcmFpbmVyIC5uZXdQb3N0IGltZyB7XG4gICAgd2lkdGg6IDYwcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbiAgfVxuICAuc2VjdGlvblRyYWluZXIgLm5ld1Bvc3QgLmZvcnVtUG9zdEJ1dHRvbiB7XG4gICAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiA2MyUgIWltcG9ydGFudDtcbiAgfVxuICAuc2VjdGlvblRyYWluZXIgLmZhLXRyYXNoIHtcbiAgICBtYXJnaW4tdG9wOiAwJSAhaW1wb3J0YW50O1xuICB9XG4gIC5zZWN0aW9uVHJhaW5lciAucm93IGltZyB7XG4gICAgbWFyZ2luLWxlZnQ6IDUlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnNlY3Rpb25UcmFpbmVyIC5jb21tZW50cyB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1yaWdodDogMTBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5zZWN0aW9uVHJhaW5lciAuY29tbWVudHMgLlNob3dyZXBseSB7XG4gICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnNlY3Rpb25UcmFpbmVyIC5jb21tZW50cyAucm93IC5tZWRpYWRhdGUge1xuICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAyMSUgIWltcG9ydGFudDtcbiAgfVxuICAuc2VjdGlvblRyYWluZXIgLmNvbW1lbnRzIC5yb3cgc3BhbiB7XG4gICAgbWFyZ2luLXRvcDogLTRweCAhaW1wb3J0YW50O1xuICB9XG4gIC5zZWN0aW9uVHJhaW5lciAubWVkaWFyZXBseTIgLm1lZGlhYm94LCAuc2VjdGlvblRyYWluZXIgLm1lZGlhcmVwbHkyIC5tZWRpYWJveDIge1xuICAgIHdpZHRoOiA3MCUgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMjQlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnNlY3Rpb25UcmFpbmVyIC5tZWRpYXJlcGx5MiAubWVkaWFib3ggLm1lZGlhYnRuY2FuY2VsLCAuc2VjdGlvblRyYWluZXIgLm1lZGlhcmVwbHkyIC5tZWRpYWJveDIgLm1lZGlhYnRuY2FuY2VsIHtcbiAgICBtYXJnaW4tbGVmdDogMzAlICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuICAuc2VjdGlvblRyYWluZXIgLm1lZGlhcmVwbHkyIC5tZWRpYWJveCAubWVkaWFidG5yZXBseSwgLnNlY3Rpb25UcmFpbmVyIC5tZWRpYXJlcGx5MiAubWVkaWFib3gyIC5tZWRpYWJ0bnJlcGx5IHtcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICB9XG5cbiAgZm9vdGVyIC5MYXRlc3RQcm9qZWN0cyAub25lIHtcbiAgICBoZWlnaHQ6IDc1cHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogODBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAyJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDIlICFpbXBvcnRhbnQ7XG4gIH1cbiAgZm9vdGVyIC5MYXRlc3RQcm9qZWN0cyAudHdvIHtcbiAgICBoZWlnaHQ6IDc1cHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogODBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAyJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDIlICFpbXBvcnRhbnQ7XG4gIH1cbiAgZm9vdGVyIC5MYXRlc3RQcm9qZWN0cyAudGhyZWUge1xuICAgIGhlaWdodDogNzVweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDIlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMiUgIWltcG9ydGFudDtcbiAgfVxuICBmb290ZXIgLkxhdGVzdFByb2plY3RzIC5mb3VyIHtcbiAgICBoZWlnaHQ6IDc1cHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogODBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAyJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDIlICFpbXBvcnRhbnQ7XG4gIH1cbiAgZm9vdGVyIC5MYXRlc3RQcm9qZWN0cyAuZml2ZSB7XG4gICAgaGVpZ2h0OiA3NXB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMiUgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAyJSAhaW1wb3J0YW50O1xuICB9XG4gIGZvb3RlciAuTGF0ZXN0UHJvamVjdHMgLnNpeCB7XG4gICAgaGVpZ2h0OiA3NXB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMiUgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAyJSAhaW1wb3J0YW50O1xuICB9XG4gIGZvb3RlciAuTGF0ZXN0UHJvamVjdHMgLnNldmVuIHtcbiAgICBoZWlnaHQ6IDc1cHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogODBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAyJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDIlICFpbXBvcnRhbnQ7XG4gIH1cbiAgZm9vdGVyIC5MYXRlc3RQcm9qZWN0cyAuZWlnaHQge1xuICAgIGhlaWdodDogNzVweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDMlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMiUgIWltcG9ydGFudDtcbiAgfVxuICBmb290ZXIgLkxhdGVzdFByb2plY3RzIC5uaW5lIHtcbiAgICBoZWlnaHQ6IDgwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogODBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAyJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDIlICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: ngx_wow__WEBPACK_IMPORTED_MODULE_1__["NgwWowService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"] }, { type: src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: src_app_Service_home_service__WEBPACK_IMPORTED_MODULE_5__["HomeService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] }]; }, { boxes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: ["boxes"]
        }], boxess: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: ["boxes1"]
        }] }); })();


/***/ }),

/***/ "./src/app/AllComponents/profile/plan/plan.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/AllComponents/profile/plan/plan.component.ts ***!
  \**************************************************************/
/*! exports provided: PlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanComponent", function() { return PlanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_Models_fileupload_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Models/fileupload.model */ "./src/app/Models/fileupload.model.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Service/auth.service */ "./src/app/Service/auth.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/__ivy_ngcc__/fesm2015/ng6-toastr-notifications.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











function PlanComponent_div_52_div_1_div_2_tr_19_div_3_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlanComponent_div_52_div_1_div_2_tr_19_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PlanComponent_div_52_div_1_div_2_tr_19_div_3_span_2_Template, 2, 0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item2_r194 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item2_r194.name, " ", item2_r194.amount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item2_r194.amount > 10);
} }
function PlanComponent_div_52_div_1_div_2_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PlanComponent_div_52_div_1_div_2_tr_19_div_3_Template, 3, 3, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r191 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r191.NumMeal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r191.SelFoods);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r191.caloriesOfMeal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r191.proteinOfMeal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r191.carbOfMeal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r191.fatOfMeal);
} }
function PlanComponent_div_52_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Day1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name Meal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Content Meal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Calories ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Protein ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Carb ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Fat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PlanComponent_div_52_div_1_div_2_tr_19_Template, 12, 6, "tr", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r182.day1);
} }
function PlanComponent_div_52_div_1_div_3_tr_19_div_3_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlanComponent_div_52_div_1_div_3_tr_19_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PlanComponent_div_52_div_1_div_3_tr_19_div_3_span_2_Template, 2, 0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item2_r200 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item2_r200.name, " ", item2_r200.amount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item2_r200.amount > 10);
} }
function PlanComponent_div_52_div_1_div_3_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PlanComponent_div_52_div_1_div_3_tr_19_div_3_Template, 3, 3, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r197 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r197.NumMeal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r197.SelFoods);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r197.caloriesOfMeal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r197.proteinOfMeal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r197.carbOfMeal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r197.fatOfMeal);
} }
function PlanComponent_div_52_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Day2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name Meal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Content Meal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Calories In Meal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Protein ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Carb ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Fat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PlanComponent_div_52_div_1_div_3_tr_19_Template, 12, 6, "tr", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r183.day2);
} }
function PlanComponent_div_52_div_1_div_4_tr_19_div_3_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlanComponent_div_52_div_1_div_4_tr_19_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PlanComponent_div_52_div_1_div_4_tr_19_div_3_span_2_Template, 2, 0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item2_r206 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item2_r206.name, " ", item2_r206.amount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item2_r206.amount > 10);
} }
function PlanComponent_div_52_div_1_div_4_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PlanComponent_div_52_div_1_div_4_tr_19_div_3_Template, 3, 3, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r203 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r203.NumMeal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r203.SelFoods);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r203.caloriesOfMeal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r203.proteinOfMeal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r203.carbOfMeal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r203.fatOfMeal);
} }
function PlanComponent_div_52_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Day3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name Meal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Content Meal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Calories In Meal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Protein ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Carb ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Fat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PlanComponent_div_52_div_1_div_4_tr_19_Template, 12, 6, "tr", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r184.day3);
} }
function PlanComponent_div_52_div_1_div_5_tr_19_div_3_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlanComponent_div_52_div_1_div_5_tr_19_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PlanComponent_div_52_div_1_div_5_tr_19_div_3_span_2_Template, 2, 0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item2_r212 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item2_r212.name, " ", item2_r212.amount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item2_r212.amount > 10);
} }
function PlanComponent_div_52_div_1_div_5_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PlanComponent_div_52_div_1_div_5_tr_19_div_3_Template, 3, 3, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r209 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r209.NumMeal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r209.SelFoods);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r209.caloriesOfMeal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r209.proteinOfMeal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r209.carbOfMeal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r209.fatOfMeal);
} }
function PlanComponent_div_52_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Day4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name Meal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Content Meal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Calories In Meal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Protein ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Carb ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Fat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PlanComponent_div_52_div_1_div_5_tr_19_Template, 12, 6, "tr", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r185.day4);
} }
function PlanComponent_div_52_div_1_div_6_tr_19_div_3_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlanComponent_div_52_div_1_div_6_tr_19_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PlanComponent_div_52_div_1_div_6_tr_19_div_3_span_2_Template, 2, 0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item2_r218 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item2_r218.name, " ", item2_r218.amount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item2_r218.amount > 10);
} }
function PlanComponent_div_52_div_1_div_6_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PlanComponent_div_52_div_1_div_6_tr_19_div_3_Template, 3, 3, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r215 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r215.NumMeal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r215.SelFoods);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r215.caloriesOfMeal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r215.proteinOfMeal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r215.carbOfMeal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r215.fatOfMeal);
} }
function PlanComponent_div_52_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Day5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name Meal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Content Meal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Calories In Meal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Protein ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Carb ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Fat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PlanComponent_div_52_div_1_div_6_tr_19_Template, 12, 6, "tr", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r186.day5);
} }
function PlanComponent_div_52_div_1_div_7_tr_19_div_3_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlanComponent_div_52_div_1_div_7_tr_19_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PlanComponent_div_52_div_1_div_7_tr_19_div_3_span_2_Template, 2, 0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item2_r224 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item2_r224.name, " ", item2_r224.amount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item2_r224.amount > 10);
} }
function PlanComponent_div_52_div_1_div_7_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PlanComponent_div_52_div_1_div_7_tr_19_div_3_Template, 3, 3, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r221 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r221.NumMeal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r221.SelFoods);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r221.caloriesOfMeal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r221.proteinOfMeal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r221.carbOfMeal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r221.fatOfMeal);
} }
function PlanComponent_div_52_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Day6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name Meal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Content Meal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Calories In Meal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Protein ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Carb ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Fat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PlanComponent_div_52_div_1_div_7_tr_19_Template, 12, 6, "tr", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r187.day6);
} }
function PlanComponent_div_52_div_1_div_8_tr_19_div_3_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlanComponent_div_52_div_1_div_8_tr_19_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PlanComponent_div_52_div_1_div_8_tr_19_div_3_span_2_Template, 2, 0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item2_r230 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item2_r230.name, " ", item2_r230.amount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item2_r230.amount > 10);
} }
function PlanComponent_div_52_div_1_div_8_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PlanComponent_div_52_div_1_div_8_tr_19_div_3_Template, 3, 3, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r227 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r227.NumMeal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r227.SelFoods);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r227.caloriesOfMeal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r227.proteinOfMeal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r227.carbOfMeal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r227.fatOfMeal);
} }
function PlanComponent_div_52_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Day7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name Meal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Content Meal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Calories In Meal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Protein ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Carb ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Fat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PlanComponent_div_52_div_1_div_8_tr_19_Template, 12, 6, "tr", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r188.day7);
} }
function PlanComponent_div_52_div_1_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r233 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlanComponent_div_52_div_1_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r233); const ctx_r232 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r232.AddAnotherDay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Another Day");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlanComponent_div_52_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PlanComponent_div_52_div_1_div_2_Template, 20, 1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PlanComponent_div_52_div_1_div_3_Template, 20, 1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PlanComponent_div_52_div_1_div_4_Template, 20, 1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PlanComponent_div_52_div_1_div_5_Template, 20, 1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PlanComponent_div_52_div_1_div_6_Template, 20, 1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PlanComponent_div_52_div_1_div_7_Template, 20, 1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PlanComponent_div_52_div_1_div_8_Template, 20, 1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PlanComponent_div_52_div_1_button_9_Template, 2, 0, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " If You Add The Same Day Diet The Old Day Will Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r180.day1.length != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r180.day2.length != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r180.day3.length != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r180.day4.length != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r180.day5.length != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r180.day6.length != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r180.day7.length != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r180.day1.length == 0 || ctx_r180.day2.length == 0 || ctx_r180.day3.length == 0 || ctx_r180.day4.length == 0 || ctx_r180.day5.length == 0 || ctx_r180.day6.length == 0 || ctx_r180.day7.length == 0);
} }
function PlanComponent_div_52_div_4_tr_5_Template(rf, ctx) { if (rf & 1) {
    const _r238 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlanComponent_div_52_div_4_tr_5_Template_th_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r238); const i_r236 = ctx.index; const ctx_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r237.ShowDataEx(i_r236); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r235 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r235.day);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r235.nameDay);
} }
function PlanComponent_div_52_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PlanComponent_div_52_div_4_tr_5_Template, 5, 2, "tr", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Exercise:", ctx_r181.ExSystemName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r181.ExSystem);
} }
function PlanComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PlanComponent_div_52_div_1_Template, 13, 8, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PlanComponent_div_52_div_4_Template, 6, 2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "If You Add Another Exrecise The Old Will Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r171.day1.length != 0 || ctx_r171.day2.length != 0 || ctx_r171.day3.length != 0 || ctx_r171.day4.length != 0 || ctx_r171.day5.length != 0 || ctx_r171.day6.length != 0 || ctx_r171.day7.length != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r171.ExSystem.length != 0);
} }
function PlanComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    const _r240 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlanComponent_div_53_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r240); const ctx_r239 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r239.createplan(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Create Your Plan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { width: a0 }; };
function PlanComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r173.percentage + "%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuenow", ctx_r173.percentage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r173.percentage, "%");
} }
function PlanComponent_div_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlanComponent_div_88_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "User Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlanComponent_div_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PlanComponent_div_88_div_1_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r175.f_ChangeUserName.UserName.errors.required);
} }
function PlanComponent_div_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r242 = ctx.$implicit;
    const i_r243 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" EXRECISE", i_r243 + 1, ": ", item_r242.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r242.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PlanComponent_div_117_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Old Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlanComponent_div_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PlanComponent_div_117_div_1_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r177.f_ChangePassword.oldpass.errors.required);
} }
function PlanComponent_div_120_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlanComponent_div_120_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New Password must be at least 6 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlanComponent_div_120_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Passwords must match");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlanComponent_div_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PlanComponent_div_120_div_1_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PlanComponent_div_120_div_2_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PlanComponent_div_120_div_3_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r178.f_ChangePassword.newpass.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r178.f_ChangePassword.newpass.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r178.f_ChangePassword.confirmPass.errors.mustMatch);
} }
function PlanComponent_div_123_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlanComponent_div_123_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Passwords must match");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlanComponent_div_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PlanComponent_div_123_div_1_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PlanComponent_div_123_div_2_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r179.f_ChangePassword.confirmPass.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r179.f_ChangePassword.confirmPass.errors.mustMatch);
} }
const _c1 = function (a0) { return { "is-invalid": a0 }; };
class PlanComponent {
    constructor(authService, toastr, router, spinner, formBuilder) {
        this.authService = authService;
        this.toastr = toastr;
        this.router = router;
        this.spinner = spinner;
        this.formBuilder = formBuilder;
        this.load = true;
        /////////////////////////changepass/////////////////////
        this.submittedChangePass = false;
        /////////////////////////changepass/////////////////////
        this.submittedChangeUserName = false;
        /////////////////////////
        this.day1 = [];
        this.day2 = [];
        this.day3 = [];
        this.day4 = [];
        this.day5 = [];
        this.day6 = [];
        this.day7 = [];
        ///////////////////////
        this.ExSystem = [];
        // ExSystemDay=[]
        this.ExSystemaData = [];
        this.TypeUser = localStorage.getItem("typeuser");
        this.formChangePassword = this.formBuilder.group({
            oldpass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            newpass: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            confirmPass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        }, {
            validator: this.MustMatch('newpass', 'confirmPass')
        });
        this.formChangeUserName = this.formBuilder.group({
            UserName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    ngOnInit() {
        this.spinner.show();
        document.getElementById('footer').style.marginTop = "0%";
        if (!localStorage.getItem('foo')) {
            localStorage.setItem('foo', 'no reload');
            location.reload();
        }
        else {
            localStorage.removeItem('foo');
        }
        this.GetUsers();
        setTimeout(() => {
            this.spinner.hide();
        }, 1000);
    }
    //  test(){
    //    this.authService.updateUserPassword("555555")
    //  }
    GetUsers() {
        this.authService.get_Users().subscribe(res => {
            this.DataUsers = res.map(e => {
                return Object.assign({ id: e.payload.doc.id }, e.payload.doc.data());
            });
            this.DataUserProfile = [];
            //  console.log(this.DataUsers)
            for (let i = 0; i < this.DataUsers.length; i++) {
                if (this.DataUsers[i].mail == localStorage.getItem("UserLogMail")) {
                    //  console.log(this.DataUsers[i])
                    this.Username = this.DataUsers[i].name;
                    this.UserUrl = this.DataUsers[i].url;
                    this.mail = this.DataUsers[i].mail;
                    this.typeUser = this.DataUsers[i].type;
                    this.day1 = this.DataUsers[i].day1;
                    this.day2 = this.DataUsers[i].day2;
                    this.day3 = this.DataUsers[i].day3;
                    this.day4 = this.DataUsers[i].day4;
                    this.day5 = this.DataUsers[i].day5;
                    this.day6 = this.DataUsers[i].day6;
                    this.day7 = this.DataUsers[i].day7;
                    if (this.DataUsers[i].ExereciseSystem.dataEx.length != 0) {
                        this.ExSystem = this.DataUsers[i].ExereciseSystem.dataEx.data;
                        this.ExSystemName = this.DataUsers[i].ExereciseSystem.ExreciseName;
                    }
                    localStorage.setItem("iduser", this.DataUsers[i].id);
                    localStorage.setItem("Nameuser", this.DataUsers[i].name);
                    localStorage.setItem("ProfilePhotoUser", this.DataUsers[i].url);
                    //  console.log(this.DataUsers[i].url)
                    localStorage.setItem("UserPassword", this.DataUsers[i].password);
                    localStorage.setItem("typeuser", this.DataUsers[i].type);
                }
            }
        }, err => {
            this.toastr.errorToastr(err.message);
        });
    }
    onResetchaneUserName() {
        this.submittedChangeUserName = false;
        this.formChangeUserName.reset();
    }
    get f_ChangeUserName() { return this.formChangeUserName.controls; }
    updateUserName() {
        this.submittedChangeUserName = true;
        if (this.formChangeUserName.invalid) {
            return;
        }
        this.authService.update_UserName(this.formChangeUserName.get('UserName').value, localStorage.getItem("iduser"));
    }
    GetImage() {
        this.authService.get_Img(100).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(changes => changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val()))))).subscribe(fileUploads => {
            this.fileUploads = fileUploads;
            // console.log(fileUploads)
        });
        // console.log("1")
    }
    DeleteProfileImg() {
        // console.log(this.fileUploads)
        for (let i = 0; i < this.fileUploads.length; i++) {
            // console.log(this.fileUploads[i].url)
            if (this.fileUploads[i].url == localStorage.getItem("ProfilePhotoUser")) {
                // console.log(this.fileUploads[i])
                this.DeleteImg(this.fileUploads[i]);
            }
        }
        // if (!localStorage.getItem('foo')) { 
        //   localStorage.setItem('foo', 'no reload') 
        //   location.reload() 
        // } else {
        //   localStorage.removeItem('foo') 
        // }
        // console.log("2")
    }
    DeleteImg(fileUpload) {
        this.authService.delete_Img(fileUpload);
        this.AddProfileImg();
        // console.log("3")
    }
    SelectImg(event) {
        this.selectedFiles = event.target.files;
    }
    AddProfileImg() {
        const file = this.selectedFiles.item(0);
        this.selectedFiles = undefined;
        this.currentFileUpload = new src_app_Models_fileupload_model__WEBPACK_IMPORTED_MODULE_1__["Fileupload"](file);
        this.authService.Add_Img_user(this.currentFileUpload).subscribe(percentage => {
            this.percentage = Math.round(percentage);
            if (percentage == 100) {
                this.wiating();
            }
        }, error => {
            console.log(error);
        });
        // console.log("4")
    }
    updateProfilePhoto() {
        this.authService.update_profilePhoto(localStorage.getItem("iduser"));
    }
    // f1().then(res => f2());
    wiating() {
        setTimeout(() => {
            this.load = false;
        }, 15000);
    }
    MustMatch(controlName, matchingControlName) {
        return (formGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];
            if (matchingControl.errors && !matchingControl.errors.mustMatch) {
                // return if another validator has already found an error on the matchingControl
                return;
            }
            // set error on matchingControl if validation fails
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ mustMatch: true });
            }
            else {
                matchingControl.setErrors(null);
            }
        };
    }
    onResetchanepass() {
        this.submittedChangePass = false;
        this.formChangePassword.reset();
    }
    get f_ChangePassword() { return this.formChangePassword.controls; }
    chanepass() {
        this.submittedChangePass = true;
        if (this.formChangePassword.invalid) {
            return;
        }
        if (this.formChangePassword.get('oldpass').value == localStorage.getItem("UserPassword")) {
            this.authService.updateUserPassword(this.formChangePassword.get('newpass').value);
        }
        else {
            this.toastr.warningToastr("OldPassword Not Correct");
        }
    }
    AddAnotherDay() {
        this.router.navigate(["/foods"]);
    }
    ShowDataEx(i) {
        this.ExSystemaData = this.ExSystem[i].data;
        this.NameDayExSystemaData = this.ExSystem[i].nameDay;
    }
    createplan() {
        this.router.navigate(["/calories"]);
    }
    ChangeColorSite(colorSelect) {
        var bodyStyles = document.body.style;
        localStorage.setItem('colorSite', colorSelect);
        bodyStyles.setProperty('--maincolor', localStorage.getItem('colorSite'));
    }
}
PlanComponent.ɵfac = function PlanComponent_Factory(t) { return new (t || PlanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"])); };
PlanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlanComponent, selectors: [["app-plan"]], decls: 129, vars: 30, consts: [[1, "cardInfoColorSite"], [1, "col-12"], [1, "row"], [1, "col-12", "col-lg-6", "cardInfo"], [1, "row", "cardHeader"], [1, "align-items-baseline", "d-flex", "px-3"], [1, "m-0", "px-2", "user-circle"], ["aria-hidden", "true", 1, "fa", "fa-address-card"], [1, "headUser", "titleHover"], [1, "row", "cardBody"], [1, "col-8", "left-part"], [1, "container"], [1, "dataUser"], ["aria-hidden", "true", "data-toggle", "modal", "data-target", "#ChangeUserName", 1, "fa", "fa-pencil"], [1, "col-4"], ["aria-hidden", "true", "data-toggle", "modal", "data-target", "#ChangeProfilePhoto", 1, "divimgPro", 3, "click"], ["alt", "", 3, "src"], [1, "imghover"], ["aria-hidden", "true", "data-toggle", "modal", "data-target", "#ChangePassword", 1, "form-control", "btn-change-password"], [1, "col-12", "col-lg-6", "cardColor"], ["aria-hidden", "true", 1, "fa", "fa-cog"], [1, "col-3"], [1, "colorDiv", "blue", 3, "click"], [1, "colorDiv", "red", 3, "click"], [1, "colorDiv", "green", 3, "click"], [1, "colorDiv", "defult", 3, "click"], [1, "s1"], ["aria-hidden", "true", 1, "fa", "fa-tasks"], ["class", "plan col-12", 4, "ngIf"], ["class", "emptyplan col-12 text-center", 4, "ngIf"], ["id", "ChangeProfilePhoto", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "btn", "btn-default"], ["type", "file", 3, "change"], [1, "btn", "btn-success", 3, "disabled", "click"], ["class", "progress", 4, "ngIf"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], [4, "ngIf"], [3, "formGroup", "ngSubmit"], ["id", "ChangeUserName", "data-backdrop", "static", "data-keyboard", "false", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], [1, "margin-bottom", "col-12"], ["formControlName", "UserName", "name", "UserName", "type", "text", "placeholder", "User Name", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary"], ["id", "EXdata", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog"], ["type", "button", "data-dismiss", "modal", 1, "close"], ["class", "modal-body text-center", 4, "ngFor", "ngForOf"], ["id", "ChangePassword", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", "data-backdrop", "static", "data-keyboard", "false", 1, "modal", "fade"], ["formControlName", "oldpass", "name", "oldpass", "type", "password", "placeholder", "Old Password", 1, "form-control", 3, "ngClass"], ["formControlName", "newpass", "name", "newpass", "type", "password", "placeholder", "New Password", 1, "form-control", 3, "ngClass"], ["formControlName", "confirmPass", "name", "confirmPass", "type", "password", "placeholder", "Confirm Password", 1, "form-control", 3, "ngClass"], [1, "plan", "col-12"], ["class", "container text-center", "style", "padding-left: 24px ", 4, "ngIf"], [1, "container", "text-center"], [1, "borderstylyEX"], ["class", "daytable", 4, "ngIf"], [2, "opacity", "0.6", "font-family", "Andale Mono"], [1, "container", "text-center", 2, "padding-left", "24px"], [1, "borderstyly"], ["style", "margin-bottom: 2%;", "class", "anotherDay", 3, "click", 4, "ngIf"], [1, "daytable"], [1, "day"], [1, "table", 2, "color", "white"], ["scope", "col"], ["class", "content", 4, "ngFor", "ngForOf"], [1, "content"], ["scope", "row"], ["class", "nameMealAndAmount", 4, "ngFor", "ngForOf"], [1, "nameMealAndAmount"], [1, "table"], [4, "ngFor", "ngForOf"], [1, "anotherDay", 2, "margin-bottom", "2%", 3, "click"], ["data-toggle", "modal", "data-target", "#EXdata", "scope", "col", 1, "nameday", 3, "click"], [1, "emptyplan", "col-12", "text-center"], [1, "form-control", "CreateYourPlan", 2, "width", "40%", "margin", "3% auto", "color", "white", "background", "var(--maincolor)", 3, "click"], [1, "progress"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-info", "progress-bar-striped", 3, "ngStyle"], [1, "fa", "fa-spinner", "fa-pulse", "fa-2x", "fa-fw"], [1, "invalid-feedback"], [1, "modal-body", "text-center"], [1, "NameExEdite"], ["alt", "NoPhoto", 1, "photoExselect", 3, "src"]], template: function PlanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Personal Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlanComponent_Template_div_click_21_listener() { return ctx.GetImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Color Site");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlanComponent_Template_div_click_36_listener() { return ctx.ChangeColorSite("rgb(85, 185, 244)"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlanComponent_Template_div_click_38_listener() { return ctx.ChangeColorSite("rgb(204, 64, 74)"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlanComponent_Template_div_click_40_listener() { return ctx.ChangeColorSite("rgb(99, 197, 88)"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlanComponent_Template_div_click_42_listener() { return ctx.ChangeColorSite("rgb(227, 108, 81)"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "section", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, PlanComponent_div_52_Template, 7, 2, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, PlanComponent_div_53_Template, 3, 0, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h5", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Change Profile Photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PlanComponent_Template_input_change_65_listener($event) { return ctx.SelectImg($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlanComponent_Template_button_click_66_listener() { return ctx.DeleteProfileImg(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, PlanComponent_div_68_Template, 3, 5, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlanComponent_Template_button_click_72_listener() { return ctx.updateProfilePhoto(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, PlanComponent_div_74_Template, 4, 0, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "form", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PlanComponent_Template_form_ngSubmit_75_listener() { return ctx.updateUserName(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h5", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Change UserName");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlanComponent_Template_button_click_82_listener() { return ctx.onResetchaneUserName(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, PlanComponent_div_88_Template, 2, 1, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlanComponent_Template_button_click_90_listener() { return ctx.onResetchaneUserName(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](103, PlanComponent_div_103_Template, 4, 3, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "form", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PlanComponent_Template_form_ngSubmit_104_listener() { return ctx.chanepass(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "h5", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlanComponent_Template_button_click_111_listener() { return ctx.onResetchanepass(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "input", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](117, PlanComponent_div_117_Template, 2, 1, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](120, PlanComponent_div_120_Template, 4, 3, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](123, PlanComponent_div_123_Template, 3, 2, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlanComponent_Template_button_click_125_listener() { return ctx.onResetchanepass(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Type: ", ctx.typeUser, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" UserName : ", ctx.Username, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" E-Mail : ", ctx.mail, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.UserUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.day1.length != 0 || ctx.day2.length != 0 || ctx.day3.length != 0 || ctx.day4.length != 0 || ctx.day5.length != 0 || ctx.day6.length != 0 || ctx.day7.length != 0 || ctx.ExSystem.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.day1.length == 0 && ctx.day2.length == 0 && ctx.day3.length == 0 && ctx.day4.length == 0 && ctx.day5.length == 0 && ctx.day6.length == 0 && ctx.day7.length == 0 && ctx.ExSystem.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.selectedFiles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentFileUpload);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.percentage != 100 || ctx.load == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.percentage == 100 && ctx.load == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formChangeUserName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c1, ctx.submittedChangeUserName && ctx.f_ChangeUserName.UserName.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submittedChangeUserName && ctx.f_ChangeUserName.UserName.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.NameDayExSystemaData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ExSystemaData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formChangePassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c1, ctx.submittedChangePass && ctx.f_ChangePassword.oldpass.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submittedChangePass && ctx.f_ChangePassword.oldpass.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c1, ctx.submittedChangePass && ctx.f_ChangePassword.newpass.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submittedChangePass && ctx.f_ChangePassword.newpass.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c1, ctx.submittedChangePass && ctx.f_ChangePassword.confirmPass.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submittedChangePass && ctx.f_ChangePassword.confirmPass.errors);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgStyle"]], styles: ["[_ngcontent-%COMP%]:root {\n  --maincolor: var(--maincolor);\n}\n\n.checkmark[_ngcontent-%COMP%] {\n  display: inline-block;\n  transform: rotate(45deg);\n  height: 70px;\n  width: 35px;\n  margin: auto;\n  border-bottom: 10px solid #ffffff;\n  border-right: 8px solid #ffffff;\n}\n\nh3[_ngcontent-%COMP%], span[_ngcontent-%COMP%] {\n  color: white !important;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--maincolor);\n  border-color: var(--maincolor);\n}\n\n.s1[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n}\n\n.s1[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%] {\n  padding-left: 0px;\n  padding-right: 0px;\n  height: 100%;\n}\n\n.s1[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin-left: 0px;\n  margin-right: 0px;\n  height: 100%;\n  background: #262626;\n}\n\n.s1[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  margin-top: 4%;\n  background: var(--maincolor);\n  padding-left: 0px;\n  position: absolute;\n  left: 0;\n  height: 100%;\n}\n\n.s1[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  padding-left: 5%;\n  margin-right: 5%;\n}\n\n.s1[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  padding-top: 5%;\n  padding-bottom: 5%;\n}\n\n.s1[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .BtnChange[_ngcontent-%COMP%] {\n  background-color: var(--maincolor);\n  outline: none;\n  border: none;\n}\n\n.s1[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .BtnChange[_ngcontent-%COMP%]:focus {\n  border: none !important;\n  border-color: white !important;\n}\n\n.s1[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%] {\n  padding-top: 7%;\n  font-size: 25px;\n  color: white;\n}\n\n.s1[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: black;\n}\n\n.s1[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%]   .e-mail[_ngcontent-%COMP%] {\n  margin-top: 8%;\n  margin-bottom: 10%;\n  color: white;\n  margin-top: 10%;\n}\n\n.s1[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   .plan[_ngcontent-%COMP%] {\n  padding-bottom: 7%;\n  margin-top: 5%;\n  height: 100%;\n}\n\n.s1[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   .plan[_ngcontent-%COMP%]   .borderstyly[_ngcontent-%COMP%] {\n  border: 8px solid var(--maincolor);\n  padding: 17px;\n  border-radius: 50px;\n}\n\n.s1[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   .plan[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.7rem;\n  margin-bottom: 4%;\n  color: white;\n  margin-top: 5%;\n  width: 96%;\n  background: var(--maincolor);\n  height: 43px;\n  padding-top: 4px;\n  text-align: center;\n  margin-left: 2%;\n}\n\n.s1[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   .plan[_ngcontent-%COMP%]   .anotherDay[_ngcontent-%COMP%] {\n  background-color: var(--maincolor);\n  color: white;\n  border-color: var(--maincolor);\n  margin-right: 30%;\n  margin-top: 10%;\n  margin-left: 30%;\n  width: 40%;\n}\n\n.s1[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   .plan[_ngcontent-%COMP%]   .anotherDay[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n\n.s1[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   .plan[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  border-top: 1px solid #dee2e6;\n}\n\n.s1[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   .emptyplan[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.76);\n  width: 100%;\n  right: 0;\n  height: 100%;\n}\n\n.changepass[_ngcontent-%COMP%] {\n  margin-right: 13%;\n  padding-bottom: 12%;\n}\n\n.changepass[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.7rem;\n  margin-bottom: 4%;\n  color: white;\n}\n\n.changepass[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-bottom: 3%;\n  width: 100%;\n  height: 7%;\n}\n\n.changepass[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 35px;\n  margin-bottom: 30px;\n  background-color: var(--maincolor);\n  width: 50%;\n  color: white;\n  margin-left: 25%;\n  height: 6%;\n}\n\n.changepass[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  box-shadow: 5px 5px 5px 4px whitesmoke;\n}\n\n.changepass[_ngcontent-%COMP%]   .fa-pencil[_ngcontent-%COMP%] {\n  margin-top: 4%;\n}\n\n.changepass[_ngcontent-%COMP%]   .fa-pencil[_ngcontent-%COMP%]:hover {\n  color: var(--maincolor);\n}\n\n.changepass[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n\n.day[_ngcontent-%COMP%] {\n  margin-bottom: 4%;\n}\n\n.daytable[_ngcontent-%COMP%] {\n  padding-top: 2%;\n  padding-bottom: 2%;\n}\n\n.daytable[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 0px 21px #ababab;\n}\n\n.borderstylyEX[_ngcontent-%COMP%] {\n  border: 8px solid var(--maincolor);\n  padding: 17px;\n  margin-top: 4%;\n  border-radius: 50px;\n}\n\n.NameExEdite[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n\n.photoExselect[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 150px;\n  background-size: 100% 100%;\n}\n\n.nameday[_ngcontent-%COMP%]:hover {\n  color: var(--maincolor);\n  cursor: pointer;\n}\n\n.s1[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n\n.s1[_ngcontent-%COMP%]   .cardHeader[_ngcontent-%COMP%] {\n  padding-top: 3px;\n  background: var(--maincolor);\n  color: white;\n  border-radius: 10px 10px 0px 0px;\n}\n\n.s1[_ngcontent-%COMP%]   .cardHeader[_ngcontent-%COMP%]   .fa-user-circle[_ngcontent-%COMP%], .s1[_ngcontent-%COMP%]   .cardHeader[_ngcontent-%COMP%]   .fa-cog[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.cardInfoColorSite[_ngcontent-%COMP%] {\n  margin-bottom: 2%;\n}\n\n.cardInfoColorSite[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .cardInfo[_ngcontent-%COMP%], .cardInfoColorSite[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .cardColor[_ngcontent-%COMP%] {\n  padding: 2%;\n}\n\n.cardInfoColorSite[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .cardInfo[_ngcontent-%COMP%]   .cardHeader[_ngcontent-%COMP%], .cardInfoColorSite[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .cardColor[_ngcontent-%COMP%]   .cardHeader[_ngcontent-%COMP%] {\n  padding-top: 3px;\n  background: var(--maincolor);\n  color: white;\n  border-radius: 10px 10px 0px 0px;\n}\n\n.cardInfoColorSite[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .cardInfo[_ngcontent-%COMP%]   .cardHeader[_ngcontent-%COMP%]   .fa-user-circle[_ngcontent-%COMP%], .cardInfoColorSite[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .cardInfo[_ngcontent-%COMP%]   .cardHeader[_ngcontent-%COMP%]   .fa-cog[_ngcontent-%COMP%], .cardInfoColorSite[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .cardColor[_ngcontent-%COMP%]   .cardHeader[_ngcontent-%COMP%]   .fa-user-circle[_ngcontent-%COMP%], .cardInfoColorSite[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .cardColor[_ngcontent-%COMP%]   .cardHeader[_ngcontent-%COMP%]   .fa-cog[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.cardInfoColorSite[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .cardInfo[_ngcontent-%COMP%]   .cardBody[_ngcontent-%COMP%], .cardInfoColorSite[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .cardColor[_ngcontent-%COMP%]   .cardBody[_ngcontent-%COMP%] {\n  height: 90%;\n  background: #262626;\n  padding: 2% 1%;\n  border-radius: 0px 0px 10px 10px;\n}\n\n.cardInfoColorSite[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .cardInfo[_ngcontent-%COMP%]   .cardBody[_ngcontent-%COMP%]   .blue[_ngcontent-%COMP%], .cardInfoColorSite[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .cardColor[_ngcontent-%COMP%]   .cardBody[_ngcontent-%COMP%]   .blue[_ngcontent-%COMP%] {\n  background-color: #55b9f4;\n}\n\n.cardInfoColorSite[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .cardInfo[_ngcontent-%COMP%]   .cardBody[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%], .cardInfoColorSite[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .cardColor[_ngcontent-%COMP%]   .cardBody[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%] {\n  background-color: #cc404a;\n}\n\n.cardInfoColorSite[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .cardInfo[_ngcontent-%COMP%]   .cardBody[_ngcontent-%COMP%]   .green[_ngcontent-%COMP%], .cardInfoColorSite[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .cardColor[_ngcontent-%COMP%]   .cardBody[_ngcontent-%COMP%]   .green[_ngcontent-%COMP%] {\n  background-color: #63c558;\n}\n\n.cardInfoColorSite[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .cardInfo[_ngcontent-%COMP%]   .cardBody[_ngcontent-%COMP%]   .defult[_ngcontent-%COMP%], .cardInfoColorSite[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .cardColor[_ngcontent-%COMP%]   .cardBody[_ngcontent-%COMP%]   .defult[_ngcontent-%COMP%] {\n  background-color: #e36c51;\n}\n\n.cardInfoColorSite[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .cardInfo[_ngcontent-%COMP%]   .cardBody[_ngcontent-%COMP%]   .colorDiv[_ngcontent-%COMP%], .cardInfoColorSite[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .cardColor[_ngcontent-%COMP%]   .cardBody[_ngcontent-%COMP%]   .colorDiv[_ngcontent-%COMP%] {\n  height: 75PX;\n  width: 75PX;\n  border-radius: 100px;\n  cursor: pointer;\n  margin: auto;\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n  text-align: center;\n}\n\n.cardInfoColorSite[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .cardInfo[_ngcontent-%COMP%]   .cardBody[_ngcontent-%COMP%]   .left-part[_ngcontent-%COMP%], .cardInfoColorSite[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .cardColor[_ngcontent-%COMP%]   .cardBody[_ngcontent-%COMP%]   .left-part[_ngcontent-%COMP%] {\n  color: white;\n  padding-left: 0;\n}\n\n.cardInfoColorSite[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .cardInfo[_ngcontent-%COMP%]   .cardBody[_ngcontent-%COMP%]   .left-part[_ngcontent-%COMP%]   .dataUser[_ngcontent-%COMP%], .cardInfoColorSite[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .cardColor[_ngcontent-%COMP%]   .cardBody[_ngcontent-%COMP%]   .left-part[_ngcontent-%COMP%]   .dataUser[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  line-height: 2;\n}\n\n.cardInfoColorSite[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .cardInfo[_ngcontent-%COMP%]   .cardBody[_ngcontent-%COMP%]   .btn-change-password[_ngcontent-%COMP%], .cardInfoColorSite[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .cardColor[_ngcontent-%COMP%]   .cardBody[_ngcontent-%COMP%]   .btn-change-password[_ngcontent-%COMP%] {\n  color: white;\n  background: var(--maincolor);\n  margin: auto;\n  border-radius: 10px;\n  height: auto;\n}\n\n.cardInfoColorSite[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .cardInfo[_ngcontent-%COMP%]   .cardBody[_ngcontent-%COMP%]   .btn-change-password[_ngcontent-%COMP%]:hover, .cardInfoColorSite[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .cardColor[_ngcontent-%COMP%]   .cardBody[_ngcontent-%COMP%]   .btn-change-password[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n\n.cardInfoColorSite[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .cardInfo[_ngcontent-%COMP%]   .cardBody[_ngcontent-%COMP%]   .divimgPro[_ngcontent-%COMP%], .cardInfoColorSite[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .cardColor[_ngcontent-%COMP%]   .cardBody[_ngcontent-%COMP%]   .divimgPro[_ngcontent-%COMP%] {\n  position: relative;\n  width: 140px;\n  height: 140px;\n  border-radius: 50%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 10px;\n}\n\n.cardInfoColorSite[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .cardInfo[_ngcontent-%COMP%]   .cardBody[_ngcontent-%COMP%]   .divimgPro[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .cardInfoColorSite[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .cardColor[_ngcontent-%COMP%]   .cardBody[_ngcontent-%COMP%]   .divimgPro[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  background-size: 100% 100%;\n  box-shadow: 0px 0px 11px #ababab;\n}\n\n.cardInfoColorSite[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .cardInfo[_ngcontent-%COMP%]   .cardBody[_ngcontent-%COMP%]   .divimgPro[_ngcontent-%COMP%]   .imghover[_ngcontent-%COMP%], .cardInfoColorSite[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .cardColor[_ngcontent-%COMP%]   .cardBody[_ngcontent-%COMP%]   .divimgPro[_ngcontent-%COMP%]   .imghover[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  border-radius: 50%;\n  position: absolute;\n  background: rgba(0, 0, 0, 0.5);\n  color: white;\n  font-family: -webkit-pictograph;\n  opacity: 0;\n  line-height: 5;\n  font-size: 28px;\n  cursor: pointer;\n  text-align: center;\n}\n\n.cardInfoColorSite[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .cardInfo[_ngcontent-%COMP%]   .cardBody[_ngcontent-%COMP%]   .divimgPro[_ngcontent-%COMP%]   .imghover[_ngcontent-%COMP%]:hover, .cardInfoColorSite[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .cardColor[_ngcontent-%COMP%]   .cardBody[_ngcontent-%COMP%]   .divimgPro[_ngcontent-%COMP%]   .imghover[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n#ChangePassword[_ngcontent-%COMP%]   .margin-bottom[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n\n#ChangePassword[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\n  h5[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n\n  .cardInfoColorSite[_ngcontent-%COMP%]   .cardInfo[_ngcontent-%COMP%]   .divimgPro[_ngcontent-%COMP%] {\n    width: 115px !important;\n    height: 115px !important;\n  }\n\n  .s1[_ngcontent-%COMP%] {\n    margin-top: 1%;\n  }\n  .s1[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n    padding-top: 5%;\n  }\n  .s1[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .BtnChange[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .s1[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n  }\n  .s1[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%]   .e-mail[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .s1[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .changepass[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .s1[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .changepass[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n  }\n}\n\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .s1[_ngcontent-%COMP%]   .CreateYourPlan[_ngcontent-%COMP%] {\n    width: 50% !important;\n  }\n  .s1[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n    padding-top: 5%;\n  }\n  .s1[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .divimgPro[_ngcontent-%COMP%] {\n    width: 100px !important;\n    height: 100px !important;\n  }\n  .s1[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .BtnChange[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .s1[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%] {\n    font-size: 14px !important;\n  }\n  .s1[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%]   .e-mail[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .s1[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .changepass[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .s1[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .changepass[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 14px !important;\n  }\n  .s1[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .changepass[_ngcontent-%COMP%]   .BtnChange[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: 0%;\n  }\n  .s1[_ngcontent-%COMP%]   .plan[_ngcontent-%COMP%] {\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n  }\n  .s1[_ngcontent-%COMP%]   .plan[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    padding-left: 10px !important;\n    padding-right: 10px !important;\n  }\n  .s1[_ngcontent-%COMP%]   .plan[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .borderstyly[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    padding: 10px;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .s1[_ngcontent-%COMP%] {\n    margin-top: 3%;\n  }\n  .s1[_ngcontent-%COMP%]   .CreateYourPlan[_ngcontent-%COMP%] {\n    width: 50% !important;\n  }\n  .s1[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n    padding-top: 10%;\n  }\n  .s1[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .divimgPro[_ngcontent-%COMP%] {\n    width: 100px !important;\n    height: 100px !important;\n  }\n  .s1[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%] {\n    font-size: 10px !important;\n  }\n  .s1[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%]   .e-mail[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  .s1[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .changepass[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .s1[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .changepass[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 10px !important;\n  }\n  .s1[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .changepass[_ngcontent-%COMP%]   .BtnChange[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: 0%;\n  }\n  .s1[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .changepass[_ngcontent-%COMP%]   .BtnChange[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  .s1[_ngcontent-%COMP%]   .plan[_ngcontent-%COMP%] {\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n  }\n  .s1[_ngcontent-%COMP%]   .plan[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-top: 10% !important;\n  }\n  .s1[_ngcontent-%COMP%]   .plan[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    padding-left: 10px !important;\n    padding-right: 10px !important;\n  }\n  .s1[_ngcontent-%COMP%]   .plan[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .borderstyly[_ngcontent-%COMP%] {\n    font-size: 0.5rem;\n    padding: 5px;\n  }\n  .s1[_ngcontent-%COMP%]   .plan[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n  .s1[_ngcontent-%COMP%]   .plan[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .nameMealAndAmount[_ngcontent-%COMP%] {\n    font-size: 0.4rem;\n  }\n  .s1[_ngcontent-%COMP%]   .plan[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n  }\n\n  h5[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n\n  .cardInfoColorSite[_ngcontent-%COMP%] {\n    margin-top: 10%;\n  }\n  .cardInfoColorSite[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .cardInfo[_ngcontent-%COMP%], .cardInfoColorSite[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .cardColor[_ngcontent-%COMP%] {\n    padding: 6%;\n    margin: auto;\n  }\n  .cardInfoColorSite[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .cardInfo[_ngcontent-%COMP%]   .colorDiv[_ngcontent-%COMP%], .cardInfoColorSite[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .cardColor[_ngcontent-%COMP%]   .colorDiv[_ngcontent-%COMP%] {\n    height: 50PX !important;\n    width: 50PX !important;\n  }\n  .cardInfoColorSite[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .cardInfo[_ngcontent-%COMP%]   .divimgPro[_ngcontent-%COMP%], .cardInfoColorSite[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .cardColor[_ngcontent-%COMP%]   .divimgPro[_ngcontent-%COMP%] {\n    width: 80px !important;\n    height: 80px !important;\n  }\n  .cardInfoColorSite[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .cardInfo[_ngcontent-%COMP%]   .btn-change-password[_ngcontent-%COMP%], .cardInfoColorSite[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .cardColor[_ngcontent-%COMP%]   .btn-change-password[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n}\n\n@media only screen and (max-width: 499px) {\n  .s1[_ngcontent-%COMP%] {\n    margin-top: 11%;\n  }\n  .s1[_ngcontent-%COMP%]   .CreateYourPlan[_ngcontent-%COMP%] {\n    width: 80% !important;\n    margin: 10% !important;\n    margin-left: 10% !important;\n  }\n  .s1[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n    padding-top: 10%;\n    padding-right: 0px !important;\n  }\n  .s1[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    padding-right: 0px !important;\n    padding-left: 0px !important;\n  }\n  .s1[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    padding-right: 0px !important;\n    padding-left: 0px !important;\n  }\n  .s1[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .divimgPro[_ngcontent-%COMP%] {\n    width: 60px !important;\n    height: 60px !important;\n  }\n  .s1[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%] {\n    font-size: 10px !important;\n  }\n  .s1[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%]   .e-mail[_ngcontent-%COMP%] {\n    font-size: 10px;\n    overflow-wrap: break-word;\n  }\n  .s1[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .changepass[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .s1[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .changepass[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 10px !important;\n  }\n  .s1[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .changepass[_ngcontent-%COMP%]   .BtnChange[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: 0%;\n  }\n  .s1[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .changepass[_ngcontent-%COMP%]   .BtnChange[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  .s1[_ngcontent-%COMP%]   .plan[_ngcontent-%COMP%] {\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n  }\n  .s1[_ngcontent-%COMP%]   .plan[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-top: 10% !important;\n  }\n  .s1[_ngcontent-%COMP%]   .plan[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    padding-left: 5px !important;\n    padding-right: 1px !important;\n  }\n  .s1[_ngcontent-%COMP%]   .plan[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .borderstyly[_ngcontent-%COMP%] {\n    overflow: scroll;\n    font-size: 0.5rem;\n    padding: 1px;\n  }\n  .s1[_ngcontent-%COMP%]   .plan[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n  .s1[_ngcontent-%COMP%]   .plan[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .nameMealAndAmount[_ngcontent-%COMP%] {\n    font-size: 0.4rem;\n  }\n  .s1[_ngcontent-%COMP%]   .plan[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    padding: 0.1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWxsQ29tcG9uZW50cy9wcm9maWxlL3BsYW4vQzpcXFVzZXJzXFxjb21wYVxcRG93bmxvYWRzXFxnaXRodWIgcHJvamVjdHNcXEJlLUZpdFxcQmVGaXQvc3JjXFxhcHBcXEFsbENvbXBvbmVudHNcXHByb2ZpbGVcXHBsYW5cXHBsYW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0FsbENvbXBvbmVudHMvcHJvZmlsZS9wbGFuL3BsYW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSw2QkFBQTtBQ0FKOztBREdBO0VBQ0kscUJBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0EsK0JBQUE7QUNBSjs7QURFQTtFQUFTLHVCQUFBO0FDRVQ7O0FEREE7RUFDSSw0QkFBQTtFQUNBLDhCQUFBO0FDSUo7O0FERkE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0tKOztBREZJO0VBRVEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNHWjs7QURGWTtFQUVJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNHaEI7O0FEQ1k7RUFDSSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7QUNDaEI7O0FEQWdCO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ0VwQjs7QURBb0I7RUFtQkksZUFBQTtFQUNBLGtCQUFBO0FDaEJ4Qjs7QURId0I7RUFFSSxrQ0FBQTtFQUNBLGFBQUE7RUFHQSxZQUFBO0FDRTVCOztBREQ0QjtFQUNJLHVCQUFBO0VBQ0EsOEJBQUE7QUNHaEM7O0FEV29CO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDVHBCOztBRFl3QjtFQUVJLFlBQUE7QUNYNUI7O0FEZW9CO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNieEI7O0FEb0JZO0VBQ0ksa0JBQUE7RUFFQSxjQUFBO0VBQ0EsWUFBQTtBQ25CaEI7O0FEb0JnQjtFQUNJLGtDQUFBO0VBQ0EsYUFBQTtFQUNJLG1CQUFBO0FDbEJ4Qjs7QURxQmdCO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Qsa0JBQUE7RUFDQSxlQUFBO0FDbkJuQjs7QUR1QmdCO0VBQ0ksa0NBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUNyQnBCOztBRHNCb0I7RUFDSSxxQkFBQTtBQ3BCeEI7O0FEdUJnQjtFQUVJLDZCQUFBO0FDdEJwQjs7QUR5QlE7RUFFSSwrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQ3hCWjs7QURpQ0E7RUFJSSxpQkFBQTtFQUdBLG1CQUFBO0FDbkNKOztBRG9DSTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDbENSOztBRHFDSTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUVBLFVBQUE7QUNwQ1I7O0FEc0NJO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUNwQ1I7O0FEcUNRO0VBQ0ksc0NBQUE7QUNuQ1o7O0FEd0NJO0VBUUksY0FBQTtBQzdDUjs7QUR3Q1E7RUFDSSx1QkFBQTtBQ3RDWjs7QUQrQ0E7RUFDSSxpQkFBQTtBQzVDSjs7QUQ4Q0E7RUFDSSxpQkFBQTtBQzNDSjs7QUQ2Q0E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUMxQ0o7O0FEMkNBO0VBQ0ksZ0NBQUE7QUN6Q0o7O0FENENBO0VBQ0ksa0NBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDekNKOztBRDRDQTtFQUVJLGdCQUFBO0FDMUNKOztBRDRDQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7QUN6Q0o7O0FENkNJO0VBQ0ksdUJBQUE7RUFDQSxlQUFBO0FDMUNSOztBRDhDSTtFQUVJLG1CQUFBO0FDNUNSOztBRDZDUTtFQUVJLGdCQUFBO0VBRUEsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7QUM3Q1o7O0FEMENZO0VBQXdCLGVBQUE7QUN2Q3BDOztBRDhDSTtFQUVJLGlCQUFBO0FDNUNSOztBRGdEWTtFQUVJLFdBQUE7QUMvQ2hCOztBRGtEZ0I7RUFFSSxnQkFBQTtFQUVBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FDbERwQjs7QUQrQ29CO0VBQXdCLGVBQUE7QUM1QzVDOztBRGlEZ0I7RUFFSSxXQUFBO0VBaUJBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0FDaEVwQjs7QUQ4Q29CO0VBQU0seUJBQUE7QUMzQzFCOztBRDRDb0I7RUFBSyx5QkFBQTtBQ3pDekI7O0FEMENvQjtFQUFPLHlCQUFBO0FDdkMzQjs7QUR3Q29CO0VBQVEseUJBQUE7QUNyQzVCOztBRHNDb0I7RUFFSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FDckN4Qjs7QUQwQ29CO0VBRUksWUFBQTtFQUNBLGVBQUE7QUN6Q3hCOztBRDBDd0I7RUFFSSxtQkFBQTtFQUNBLGNBQUE7QUN6QzVCOztBRDRDb0I7RUFFSSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDM0N4Qjs7QUQ0Q3dCO0VBQ0UscUJBQUE7QUMxQzFCOztBRDhDb0I7RUFFSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUM3Q3hCOztBRDhDd0I7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxNQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQ0FBQTtBQzVDNUI7O0FEOEN3QjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLFVBQUE7RUFDRCxjQUFBO0VBQ0MsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQzVDNUI7O0FENkM0QjtFQUNJLFVBQUE7QUMzQ2hDOztBRDRESTtFQUVJLGtCQUFBO0FDMURSOztBRDRESTtFQUVJLGtCQUFBO0FDM0RSOztBRG1FQTtFQUVJO0lBRUksaUJBQUE7RUNsRU47O0VEeUVVO0lBRUksdUJBQUE7SUFDQSx3QkFBQTtFQ3ZFZDs7RUQ4RUU7SUFHSSxjQUFBO0VDN0VOO0VEZ0ZNO0lBQ0ksZUFBQTtFQzlFVjtFRHFGa0I7SUFFSSxlQUFBO0VDcEZ0QjtFRDJGYztJQUVBLDBCQUFBO0VDMUZkO0VEOEZjO0lBRUksZUFBQTtFQzdGbEI7RUR3R2M7SUFFSSwwQkFBQTtFQ3ZHbEI7QUFDRjs7QUQ2R0E7RUFLUTtJQUVJLHFCQUFBO0VDaEhWO0VEbUhNO0lBQ0ksZUFBQTtFQ2pIVjtFRHVIa0I7SUFFSSx1QkFBQTtJQUNBLHdCQUFBO0VDdEh0QjtFRHlIa0I7SUFFSSxlQUFBO0VDeEh0QjtFRCtIYztJQUVBLDBCQUFBO0VDOUhkO0VEa0ljO0lBRUksZUFBQTtFQ2pJbEI7RUQ0SWM7SUFFSSwwQkFBQTtFQzNJbEI7RUQ2SWM7SUFFSSxXQUFBO0lBQ0EsZUFBQTtFQzVJbEI7RURnSk07SUFFSSw0QkFBQTtJQUNBLDZCQUFBO0VDL0lWO0VEZ0pVO0lBRUksNkJBQUE7SUFDQSw4QkFBQTtFQy9JZDtFRGdKYztJQUdJLGlCQUFBO0lBQ0EsYUFBQTtFQ2hKbEI7QUFDRjs7QUQ2SkE7RUFHSTtJQUdJLGNBQUE7RUMvSk47RURpS007SUFFSSxxQkFBQTtFQ2hLVjtFRHFLTTtJQUNJLGdCQUFBO0VDbktWO0VEeUtrQjtJQUVJLHVCQUFBO0lBQ0Esd0JBQUE7RUN4S3RCO0VEZ0xjO0lBRUEsMEJBQUE7RUMvS2Q7RURtTGM7SUFFSSxlQUFBO0VDbExsQjtFRDZMYztJQUVJLDBCQUFBO0VDNUxsQjtFRDhMYztJQUVJLFdBQUE7SUFDQSxlQUFBO0VDN0xsQjtFRCtMYztJQUVJLGVBQUE7RUM5TGxCO0VEbU1NO0lBRUksNEJBQUE7SUFDQSw2QkFBQTtFQ2xNVjtFRG1NVTtJQUVJLDBCQUFBO0VDbE1kO0VEb01VO0lBRUksNkJBQUE7SUFDQSw4QkFBQTtFQ25NZDtFRG9NYztJQUdJLGlCQUFBO0lBQ0EsWUFBQTtFQ3BNbEI7RUR1TWM7SUFFSSxpQkFBQTtFQ3RNbEI7RUQwTWtCO0lBRUksaUJBQUE7RUN6TXRCO0VENE1rQjtJQUVJLGVBQUE7RUMzTXRCOztFRHNORTtJQUVJLGlCQUFBO0VDcE5OOztFRHNORTtJQUVJLGVBQUE7RUNwTk47RUR3TlU7SUFjSSxXQUFBO0lBQ0EsWUFBQTtFQ25PZDtFRHNOYztJQUVJLHVCQUFBO0lBQ0Esc0JBQUE7RUNyTmxCO0VEdU5jO0lBRUksc0JBQUE7SUFDQSx1QkFBQTtFQ3RObEI7RUR5TmM7SUFBcUIsZUFBQTtFQ3RObkM7QUFDRjs7QUQ2TkE7RUFFSTtJQUdJLGVBQUE7RUM5Tk47RURnT007SUFFSSxxQkFBQTtJQUNBLHNCQUFBO0lBQ0EsMkJBQUE7RUMvTlY7RURtT007SUFDSSxnQkFBQTtJQUNBLDZCQUFBO0VDak9WO0VEb09VO0lBQ0ksNkJBQUE7SUFDQSw0QkFBQTtFQ2xPZDtFRHFPYztJQUNJLDZCQUFBO0lBQ0EsNEJBQUE7RUNuT2xCO0VEb09rQjtJQUVJLHNCQUFBO0lBQ0EsdUJBQUE7RUNuT3RCO0VEMk9jO0lBRUEsMEJBQUE7RUMxT2Q7RUQ4T2M7SUFFSSxlQUFBO0lBQ0EseUJBQUE7RUM3T2xCO0VEd1BjO0lBRUksMEJBQUE7RUN2UGxCO0VEeVBjO0lBRUksV0FBQTtJQUNBLGVBQUE7RUN4UGxCO0VEMFBjO0lBRUksZUFBQTtFQ3pQbEI7RUQ4UE07SUFFSSw0QkFBQTtJQUNBLDZCQUFBO0VDN1BWO0VEOFBVO0lBRUksMEJBQUE7RUM3UGQ7RUQrUFU7SUFFSSw0QkFBQTtJQUNBLDZCQUFBO0VDOVBkO0VEK1BjO0lBRUksZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLFlBQUE7RUM5UGxCO0VEaVFjO0lBRUksaUJBQUE7RUNoUWxCO0VEb1FrQjtJQUVJLGlCQUFBO0VDblF0QjtFRHNRa0I7SUFFSSxlQUFBO0VDclF0QjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvQWxsQ29tcG9uZW50cy9wcm9maWxlL3BsYW4vcGxhbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290e1xyXG4gICAgXHJcbiAgICAtLW1haW5jb2xvcjogdmFyKC0tbWFpbmNvbG9yKTtcclxuXHJcbn1cclxuLmNoZWNrbWFyayB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIG1hcmdpbjogYXV0bzsgXHJcbiAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmlnaHQ6IDhweCBzb2xpZCAjZmZmZmZmO1xyXG4gIH1cclxuaDMsc3BhbiB7Y29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7fVxyXG4uYnRuLXByaW1hcnl7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluY29sb3IpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1tYWluY29sb3IpO1xyXG59XHJcbi5zMSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG5cclxuICAgIC5jb2wtMTJcclxuICAgIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAucm93XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyNjI2MjY7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuaW5mb3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDQlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbmNvbG9yKTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLnJvd3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgLkJ0bkNoYW5nZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTpub25lO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmZvY3Vze1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvdXRsaW5lOm5vbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJveC1zaGFkb3c6IDhweCA4cHggMTBweCAxMHB4IHdoaXRlc21va2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDUlO1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC51c2VybmFtZXtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNyU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLmUtbWFpbHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogOCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnBsYW57XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNyU7XHJcbiAgICAgICAgICAgICAgICAvLyBib3gtc2hhZG93OiA4cHggOHB4IDEwcHggMTBweCB3aGl0ZXNtb2tlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAuYm9yZGVyc3R5bHl7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiA4cHggc29saWQgdmFyKC0tbWFpbmNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGgye1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTYlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW5jb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0M3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMiVcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hbm90aGVyRGF5e1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5jb2xvcik7IFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLW1haW5jb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6NDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY29udGVudHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIC5lbXB0eXBsYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43Nik7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4gICBcclxuICAgIFxyXG4uY2hhbmdlcGFzc3tcclxuICAgIC8vIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgLy8gYm94LXNoYWRvdzogOHB4IDhweCAxMHB4IDEwcHggd2hpdGVzbW9rZTtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiAxMy41JTtcclxuICAgIG1hcmdpbi1yaWdodDogMTMlO1xyXG4gICAgLy8gcGFkZGluZy10b3A6IDMlO1xyXG4gICBcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMiU7XHJcbiAgICBoMntcclxuICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0JTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7IFxyXG4gICAgfVxyXG5cclxuICAgIGlucHV0e1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC8vIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA3JTtcclxuICAgIH1cclxuICAgIGJ1dHRvbntcclxuICAgICAgICBtYXJnaW4tdG9wOiAzNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1tYWluY29sb3IpOyBcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjUlO1xyXG4gICAgICAgIGhlaWdodDogNiU7XHJcbiAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggNHB4IHdoaXRlc21va2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAuZmEtcGVuY2lse1xyXG4gICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgY29sb3I6dmFyKC0tbWFpbmNvbG9yKTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgbWFyZ2luLXRvcDogNCU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBcclxufVxyXG4uY2hhbmdlcGFzc3tcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcbi5kYXl7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0JTtcclxufVxyXG4uZGF5dGFibGV7XHJcbiAgICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMiU7XHJcbiY6aG92ZXJ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIxcHggI2FiYWJhYjtcclxufVxyXG59XHJcbi5ib3JkZXJzdHlseUVYe1xyXG4gICAgYm9yZGVyOiA4cHggc29saWQgdmFyKC0tbWFpbmNvbG9yKTtcclxuICAgIHBhZGRpbmc6IDE3cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcblxyXG59XHJcbi5OYW1lRXhFZGl0ZXtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuLnBob3RvRXhzZWxlY3R7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogNjBweDtcclxufVxyXG4ubmFtZWRheXtcclxuICAgICY6aG92ZXJ7XHJcbiAgICAgICAgY29sb3I6dmFyKC0tbWFpbmNvbG9yKTsgIFxyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuICAgIC5zMVxyXG4gICAge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgLmNhcmRIZWFkZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAgICAgICAgIC5mYS11c2VyLWNpcmNsZSwuZmEtY29ne2ZvbnQtc2l6ZTogMjBweDt9XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW5jb2xvcik7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHg7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXJkSW5mb0NvbG9yU2l0ZVxyXG4gICAge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gICAgICAgIC5yb3dcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuY2FyZEluZm8sLmNhcmRDb2xvclxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyJTtcclxuICAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAuY2FyZEhlYWRlclxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLmZhLXVzZXItY2lyY2xlLC5mYS1jb2d7Zm9udC1zaXplOiAyMHB4O31cclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMHB4IDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jYXJkQm9keVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIC5ibHVle2JhY2tncm91bmQtY29sb3I6cmdiKDg1LCAxODUsIDI0NCk7fVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZWR7YmFja2dyb3VuZC1jb2xvcjpyZ2IoMjA0LCA2NCwgNzQpO31cclxuICAgICAgICAgICAgICAgICAgICAuZ3JlZW57YmFja2dyb3VuZC1jb2xvcjpyZ2IoOTksIDE5NywgODgpO31cclxuICAgICAgICAgICAgICAgICAgICAuZGVmdWx0e2JhY2tncm91bmQtY29sb3I6cmdiKDIyNywgMTA4LCA4MSk7fVxyXG4gICAgICAgICAgICAgICAgICAgIC5jb2xvckRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3NVBYO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzVQWDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzI2MjYyNjtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyJSAxJTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwcHggMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAubGVmdC1wYXJ0XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmRhdGFVc2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmJ0bi1jaGFuZ2UtcGFzc3dvcmRcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbmNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmRpdmltZ1Byb1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTFweCAjYWJhYmFiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbWdob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IC13ZWJraXQtcGljdG9ncmFwaDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiBcclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4jQ2hhbmdlUGFzc3dvcmRcclxue1xyXG4gICAgLm1hcmdpbi1ib3R0b21cclxuICAgIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICB9XHJcbiAgICBpbnB1dFxyXG4gICAge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweClcclxue1xyXG5cclxuXHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweClcclxue1xyXG4gICAgaDVcclxuICAgIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZEluZm9Db2xvclNpdGVcclxuICAgIHtcclxuICAgICAgICAuY2FyZEluZm9cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC5kaXZpbWdQcm9cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDExNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDExNXB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zMVxyXG4gICAge1xyXG4gICAgXHJcbiAgICAgICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICAgICBcclxuICAgICAgXHJcbiAgICAgICAgLmluZm97XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOjUlIDtcclxuICAgICAgICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgICAgICAuY29udGFpbmVye1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5yb3d7XHJcbiAgICAgICAgICAgICAgICAgICAgLkJ0bkNoYW5nZVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnVzZXJuYW1lXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuZS1tYWlsXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNoYW5nZXBhc3NcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaDIsaW5wdXRcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KVxyXG57XHJcbiAgICAuczFcclxuICAgIHtcclxuICBcclxuICAgICAgICAuQ3JlYXRlWW91clBsYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbmZve1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDo1JSA7XHJcbiAgICAgIFxyXG4gICAgICAgICAgICAuY29udGFpbmVye1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5yb3d7XHJcbiAgICAgICAgICAgICAgICAgICAgLmRpdmltZ1Byb1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5CdG5DaGFuZ2VcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYm94LXNoYWRvdzogOHB4IDhweCAxMHB4IDEwcHggd2hpdGVzbW9rZTtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnVzZXJuYW1lXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuZS1tYWlsXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY2hhbmdlcGFzc1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoMixpbnB1dFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLkJ0bkNoYW5nZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjAlIDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucGxhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC5jb250YWluZXJcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAuYm9yZGVyc3R5bHlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgIH1cclxuIFxyXG4gICAgXHJcbiAgXHJcblxyXG5cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSBcclxue1xyXG4gICAgXHJcbiAgICAuczFcclxuICAgIHtcclxuXHJcbiAgICAgICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICBcclxuICAgICAgICAuQ3JlYXRlWW91clBsYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICAgICAgICAgXHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgLmluZm97XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOjEwJSA7XHJcbiAgICAgIFxyXG4gICAgICAgICAgICAuY29udGFpbmVye1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5yb3d7XHJcbiAgICAgICAgICAgICAgICAgICAgLmRpdmltZ1Byb1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYm94LXNoYWRvdzogOHB4IDhweCAxMHB4IDEwcHggd2hpdGVzbW9rZTtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnVzZXJuYW1lXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuZS1tYWlsXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY2hhbmdlcGFzc1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoMixpbnB1dFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLkJ0bkNoYW5nZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjAlIDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5CdG5DaGFuZ2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucGxhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGgyXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jb250YWluZXJcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAuYm9yZGVyc3R5bHlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHhcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuZGF5XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudGFibGVcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAubmFtZU1lYWxBbmRBbW91bnRcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC40cmVtO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IC41cmVtO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoNVxyXG4gICAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgfVxyXG4gICAgLmNhcmRJbmZvQ29sb3JTaXRlXHJcbiAgICB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgICAgIC5yb3dcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuY2FyZEluZm8sLmNhcmRDb2xvclxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAuY29sb3JEaXZcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwUFggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTBQWCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmRpdmltZ1Byb1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5idG4tY2hhbmdlLXBhc3N3b3Jke2ZvbnQtc2l6ZTogMTBweDt9XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA2JTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OTlweCkgXHJcbntcclxuICAgIC5zMVxyXG4gICAge1xyXG5cclxuICAgICAgICBtYXJnaW4tdG9wOiAxMSU7XHJcblxyXG4gICAgICAgIC5DcmVhdGVZb3VyUGxhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTAlICFpbXBvcnRhbnQ7XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgLmluZm97XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOjEwJSA7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6MHB4ICFpbXBvcnRhbnQgO1xyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgICAgICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjBweCAhaW1wb3J0YW50IDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnJvd3tcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjBweCAhaW1wb3J0YW50IDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIC5kaXZpbWdQcm9cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyBib3gtc2hhZG93OiA4cHggOHB4IDEwcHggMTBweCB3aGl0ZXNtb2tlO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAudXNlcm5hbWVcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5lLW1haWxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNoYW5nZXBhc3NcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaDIsaW5wdXRcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5CdG5DaGFuZ2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDowJSA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuQnRuQ2hhbmdlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnBsYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBoMlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY29udGFpbmVyXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIC5ib3JkZXJzdHlseVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMXB4XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmRheVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRhYmxlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgLm5hbWVNZWFsQW5kQW1vdW50XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNHJlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAuMXJlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICBcclxuICAgIFxyXG4gXHJcblxyXG59IiwiOnJvb3Qge1xuICAtLW1haW5jb2xvcjogdmFyKC0tbWFpbmNvbG9yKTtcbn1cblxuLmNoZWNrbWFyayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICBoZWlnaHQ6IDcwcHg7XG4gIHdpZHRoOiAzNXB4O1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgI2ZmZmZmZjtcbiAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgI2ZmZmZmZjtcbn1cblxuaDMsIHNwYW4ge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbmNvbG9yKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1tYWluY29sb3IpO1xufVxuXG4uczEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xufVxuLnMxIC5jb2wtMTIge1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uczEgLmNvbC0xMiAucm93IHtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzI2MjYyNjtcbn1cbi5zMSAuY29sLTEyIC5pbmZvIHtcbiAgbWFyZ2luLXRvcDogNCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW5jb2xvcik7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5zMSAuY29sLTEyIC5pbmZvIC5jb250YWluZXIge1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xufVxuLnMxIC5jb2wtMTIgLmluZm8gLmNvbnRhaW5lciAucm93IHtcbiAgcGFkZGluZy10b3A6IDUlO1xuICBwYWRkaW5nLWJvdHRvbTogNSU7XG59XG4uczEgLmNvbC0xMiAuaW5mbyAuY29udGFpbmVyIC5yb3cgLkJ0bkNoYW5nZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5jb2xvcik7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5zMSAuY29sLTEyIC5pbmZvIC5jb250YWluZXIgLnJvdyAuQnRuQ2hhbmdlOmZvY3VzIHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbi5zMSAuY29sLTEyIC5pbmZvIC5jb250YWluZXIgLnJvdyAudXNlcm5hbWUge1xuICBwYWRkaW5nLXRvcDogNyU7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnMxIC5jb2wtMTIgLmluZm8gLmNvbnRhaW5lciAucm93IC51c2VybmFtZSBpOmhvdmVyIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuLnMxIC5jb2wtMTIgLmluZm8gLmNvbnRhaW5lciAucm93IC51c2VybmFtZSAuZS1tYWlsIHtcbiAgbWFyZ2luLXRvcDogOCU7XG4gIG1hcmdpbi1ib3R0b206IDEwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAxMCU7XG59XG4uczEgLmNvbC0xMiAucGxhbiB7XG4gIHBhZGRpbmctYm90dG9tOiA3JTtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5zMSAuY29sLTEyIC5wbGFuIC5ib3JkZXJzdHlseSB7XG4gIGJvcmRlcjogOHB4IHNvbGlkIHZhcigtLW1haW5jb2xvcik7XG4gIHBhZGRpbmc6IDE3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG4uczEgLmNvbC0xMiAucGxhbiBoMiB7XG4gIGZvbnQtc2l6ZTogMS43cmVtO1xuICBtYXJnaW4tYm90dG9tOiA0JTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgd2lkdGg6IDk2JTtcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbmNvbG9yKTtcbiAgaGVpZ2h0OiA0M3B4O1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbn1cbi5zMSAuY29sLTEyIC5wbGFuIC5hbm90aGVyRGF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbmNvbG9yKTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItY29sb3I6IHZhcigtLW1haW5jb2xvcik7XG4gIG1hcmdpbi1yaWdodDogMzAlO1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIG1hcmdpbi1sZWZ0OiAzMCU7XG4gIHdpZHRoOiA0MCU7XG59XG4uczEgLmNvbC0xMiAucGxhbiAuYW5vdGhlckRheTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cbi5zMSAuY29sLTEyIC5wbGFuIC5jb250ZW50IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTY7XG59XG4uczEgLmNvbC0xMiAuZW1wdHlwbGFuIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjc2KTtcbiAgd2lkdGg6IDEwMCU7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jaGFuZ2VwYXNzIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMyU7XG4gIHBhZGRpbmctYm90dG9tOiAxMiU7XG59XG4uY2hhbmdlcGFzcyBoMiB7XG4gIGZvbnQtc2l6ZTogMS43cmVtO1xuICBtYXJnaW4tYm90dG9tOiA0JTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNoYW5nZXBhc3MgaW5wdXQge1xuICBtYXJnaW4tYm90dG9tOiAzJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNyU7XG59XG4uY2hhbmdlcGFzcyBidXR0b24ge1xuICBtYXJnaW4tdG9wOiAzNXB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluY29sb3IpO1xuICB3aWR0aDogNTAlO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG4gIGhlaWdodDogNiU7XG59XG4uY2hhbmdlcGFzcyBidXR0b246aG92ZXIge1xuICBib3gtc2hhZG93OiA1cHggNXB4IDVweCA0cHggd2hpdGVzbW9rZTtcbn1cbi5jaGFuZ2VwYXNzIC5mYS1wZW5jaWwge1xuICBtYXJnaW4tdG9wOiA0JTtcbn1cbi5jaGFuZ2VwYXNzIC5mYS1wZW5jaWw6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tbWFpbmNvbG9yKTtcbn1cblxuLmNoYW5nZXBhc3Mge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLmRheSB7XG4gIG1hcmdpbi1ib3R0b206IDQlO1xufVxuXG4uZGF5dGFibGUge1xuICBwYWRkaW5nLXRvcDogMiU7XG4gIHBhZGRpbmctYm90dG9tOiAyJTtcbn1cbi5kYXl0YWJsZTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjFweCAjYWJhYmFiO1xufVxuXG4uYm9yZGVyc3R5bHlFWCB7XG4gIGJvcmRlcjogOHB4IHNvbGlkIHZhcigtLW1haW5jb2xvcik7XG4gIHBhZGRpbmc6IDE3cHg7XG4gIG1hcmdpbi10b3A6IDQlO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuXG4uTmFtZUV4RWRpdGUge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4ucGhvdG9FeHNlbGVjdCB7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbi5uYW1lZGF5OmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLW1haW5jb2xvcik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnMxIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5zMSAuY2FyZEhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW5jb2xvcik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHg7XG59XG4uczEgLmNhcmRIZWFkZXIgLmZhLXVzZXItY2lyY2xlLCAuczEgLmNhcmRIZWFkZXIgLmZhLWNvZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmNhcmRJbmZvQ29sb3JTaXRlIHtcbiAgbWFyZ2luLWJvdHRvbTogMiU7XG59XG4uY2FyZEluZm9Db2xvclNpdGUgLnJvdyAuY2FyZEluZm8sIC5jYXJkSW5mb0NvbG9yU2l0ZSAucm93IC5jYXJkQ29sb3Ige1xuICBwYWRkaW5nOiAyJTtcbn1cbi5jYXJkSW5mb0NvbG9yU2l0ZSAucm93IC5jYXJkSW5mbyAuY2FyZEhlYWRlciwgLmNhcmRJbmZvQ29sb3JTaXRlIC5yb3cgLmNhcmRDb2xvciAuY2FyZEhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW5jb2xvcik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHg7XG59XG4uY2FyZEluZm9Db2xvclNpdGUgLnJvdyAuY2FyZEluZm8gLmNhcmRIZWFkZXIgLmZhLXVzZXItY2lyY2xlLCAuY2FyZEluZm9Db2xvclNpdGUgLnJvdyAuY2FyZEluZm8gLmNhcmRIZWFkZXIgLmZhLWNvZywgLmNhcmRJbmZvQ29sb3JTaXRlIC5yb3cgLmNhcmRDb2xvciAuY2FyZEhlYWRlciAuZmEtdXNlci1jaXJjbGUsIC5jYXJkSW5mb0NvbG9yU2l0ZSAucm93IC5jYXJkQ29sb3IgLmNhcmRIZWFkZXIgLmZhLWNvZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5jYXJkSW5mb0NvbG9yU2l0ZSAucm93IC5jYXJkSW5mbyAuY2FyZEJvZHksIC5jYXJkSW5mb0NvbG9yU2l0ZSAucm93IC5jYXJkQ29sb3IgLmNhcmRCb2R5IHtcbiAgaGVpZ2h0OiA5MCU7XG4gIGJhY2tncm91bmQ6ICMyNjI2MjY7XG4gIHBhZGRpbmc6IDIlIDElO1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwcHggMTBweDtcbn1cbi5jYXJkSW5mb0NvbG9yU2l0ZSAucm93IC5jYXJkSW5mbyAuY2FyZEJvZHkgLmJsdWUsIC5jYXJkSW5mb0NvbG9yU2l0ZSAucm93IC5jYXJkQ29sb3IgLmNhcmRCb2R5IC5ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1YjlmNDtcbn1cbi5jYXJkSW5mb0NvbG9yU2l0ZSAucm93IC5jYXJkSW5mbyAuY2FyZEJvZHkgLnJlZCwgLmNhcmRJbmZvQ29sb3JTaXRlIC5yb3cgLmNhcmRDb2xvciAuY2FyZEJvZHkgLnJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjYzQwNGE7XG59XG4uY2FyZEluZm9Db2xvclNpdGUgLnJvdyAuY2FyZEluZm8gLmNhcmRCb2R5IC5ncmVlbiwgLmNhcmRJbmZvQ29sb3JTaXRlIC5yb3cgLmNhcmRDb2xvciAuY2FyZEJvZHkgLmdyZWVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYzYzU1ODtcbn1cbi5jYXJkSW5mb0NvbG9yU2l0ZSAucm93IC5jYXJkSW5mbyAuY2FyZEJvZHkgLmRlZnVsdCwgLmNhcmRJbmZvQ29sb3JTaXRlIC5yb3cgLmNhcmRDb2xvciAuY2FyZEJvZHkgLmRlZnVsdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMzZjNTE7XG59XG4uY2FyZEluZm9Db2xvclNpdGUgLnJvdyAuY2FyZEluZm8gLmNhcmRCb2R5IC5jb2xvckRpdiwgLmNhcmRJbmZvQ29sb3JTaXRlIC5yb3cgLmNhcmRDb2xvciAuY2FyZEJvZHkgLmNvbG9yRGl2IHtcbiAgaGVpZ2h0OiA3NVBYO1xuICB3aWR0aDogNzVQWDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jYXJkSW5mb0NvbG9yU2l0ZSAucm93IC5jYXJkSW5mbyAuY2FyZEJvZHkgLmxlZnQtcGFydCwgLmNhcmRJbmZvQ29sb3JTaXRlIC5yb3cgLmNhcmRDb2xvciAuY2FyZEJvZHkgLmxlZnQtcGFydCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuLmNhcmRJbmZvQ29sb3JTaXRlIC5yb3cgLmNhcmRJbmZvIC5jYXJkQm9keSAubGVmdC1wYXJ0IC5kYXRhVXNlciwgLmNhcmRJbmZvQ29sb3JTaXRlIC5yb3cgLmNhcmRDb2xvciAuY2FyZEJvZHkgLmxlZnQtcGFydCAuZGF0YVVzZXIge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBsaW5lLWhlaWdodDogMjtcbn1cbi5jYXJkSW5mb0NvbG9yU2l0ZSAucm93IC5jYXJkSW5mbyAuY2FyZEJvZHkgLmJ0bi1jaGFuZ2UtcGFzc3dvcmQsIC5jYXJkSW5mb0NvbG9yU2l0ZSAucm93IC5jYXJkQ29sb3IgLmNhcmRCb2R5IC5idG4tY2hhbmdlLXBhc3N3b3JkIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluY29sb3IpO1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGhlaWdodDogYXV0bztcbn1cbi5jYXJkSW5mb0NvbG9yU2l0ZSAucm93IC5jYXJkSW5mbyAuY2FyZEJvZHkgLmJ0bi1jaGFuZ2UtcGFzc3dvcmQ6aG92ZXIsIC5jYXJkSW5mb0NvbG9yU2l0ZSAucm93IC5jYXJkQ29sb3IgLmNhcmRCb2R5IC5idG4tY2hhbmdlLXBhc3N3b3JkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuLmNhcmRJbmZvQ29sb3JTaXRlIC5yb3cgLmNhcmRJbmZvIC5jYXJkQm9keSAuZGl2aW1nUHJvLCAuY2FyZEluZm9Db2xvclNpdGUgLnJvdyAuY2FyZENvbG9yIC5jYXJkQm9keSAuZGl2aW1nUHJvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTQwcHg7XG4gIGhlaWdodDogMTQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5jYXJkSW5mb0NvbG9yU2l0ZSAucm93IC5jYXJkSW5mbyAuY2FyZEJvZHkgLmRpdmltZ1BybyBpbWcsIC5jYXJkSW5mb0NvbG9yU2l0ZSAucm93IC5jYXJkQ29sb3IgLmNhcmRCb2R5IC5kaXZpbWdQcm8gaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTFweCAjYWJhYmFiO1xufVxuLmNhcmRJbmZvQ29sb3JTaXRlIC5yb3cgLmNhcmRJbmZvIC5jYXJkQm9keSAuZGl2aW1nUHJvIC5pbWdob3ZlciwgLmNhcmRJbmZvQ29sb3JTaXRlIC5yb3cgLmNhcmRDb2xvciAuY2FyZEJvZHkgLmRpdmltZ1BybyAuaW1naG92ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IC13ZWJraXQtcGljdG9ncmFwaDtcbiAgb3BhY2l0eTogMDtcbiAgbGluZS1oZWlnaHQ6IDU7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2FyZEluZm9Db2xvclNpdGUgLnJvdyAuY2FyZEluZm8gLmNhcmRCb2R5IC5kaXZpbWdQcm8gLmltZ2hvdmVyOmhvdmVyLCAuY2FyZEluZm9Db2xvclNpdGUgLnJvdyAuY2FyZENvbG9yIC5jYXJkQm9keSAuZGl2aW1nUHJvIC5pbWdob3Zlcjpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbiNDaGFuZ2VQYXNzd29yZCAubWFyZ2luLWJvdHRvbSB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbiNDaGFuZ2VQYXNzd29yZCBpbnB1dCB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICBoNSB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gIH1cblxuICAuY2FyZEluZm9Db2xvclNpdGUgLmNhcmRJbmZvIC5kaXZpbWdQcm8ge1xuICAgIHdpZHRoOiAxMTVweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTE1cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5zMSB7XG4gICAgbWFyZ2luLXRvcDogMSU7XG4gIH1cbiAgLnMxIC5pbmZvIHtcbiAgICBwYWRkaW5nLXRvcDogNSU7XG4gIH1cbiAgLnMxIC5pbmZvIC5jb250YWluZXIgLnJvdyAuQnRuQ2hhbmdlIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbiAgLnMxIC5pbmZvIC5jb250YWluZXIgLnJvdyAudXNlcm5hbWUge1xuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5zMSAuaW5mbyAuY29udGFpbmVyIC5yb3cgLnVzZXJuYW1lIC5lLW1haWwge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuICAuczEgLmluZm8gLmNoYW5nZXBhc3MgaDIsIC5zMSAuaW5mbyAuY2hhbmdlcGFzcyBpbnB1dCB7XG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuczEgLkNyZWF0ZVlvdXJQbGFuIHtcbiAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnMxIC5pbmZvIHtcbiAgICBwYWRkaW5nLXRvcDogNSU7XG4gIH1cbiAgLnMxIC5pbmZvIC5jb250YWluZXIgLnJvdyAuZGl2aW1nUHJvIHtcbiAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnMxIC5pbmZvIC5jb250YWluZXIgLnJvdyAuQnRuQ2hhbmdlIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbiAgLnMxIC5pbmZvIC5jb250YWluZXIgLnJvdyAudXNlcm5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICB9XG4gIC5zMSAuaW5mbyAuY29udGFpbmVyIC5yb3cgLnVzZXJuYW1lIC5lLW1haWwge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICAuczEgLmluZm8gLmNoYW5nZXBhc3MgaDIsIC5zMSAuaW5mbyAuY2hhbmdlcGFzcyBpbnB1dCB7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnMxIC5pbmZvIC5jaGFuZ2VwYXNzIC5CdG5DaGFuZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAwJTtcbiAgfVxuICAuczEgLnBsYW4ge1xuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnMxIC5wbGFuIC5jb250YWluZXIge1xuICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiAgfVxuICAuczEgLnBsYW4gLmNvbnRhaW5lciAuYm9yZGVyc3R5bHkge1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnMxIHtcbiAgICBtYXJnaW4tdG9wOiAzJTtcbiAgfVxuICAuczEgLkNyZWF0ZVlvdXJQbGFuIHtcbiAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnMxIC5pbmZvIHtcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xuICB9XG4gIC5zMSAuaW5mbyAuY29udGFpbmVyIC5yb3cgLmRpdmltZ1BybyB7XG4gICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5zMSAuaW5mbyAuY29udGFpbmVyIC5yb3cgLnVzZXJuYW1lIHtcbiAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgfVxuICAuczEgLmluZm8gLmNvbnRhaW5lciAucm93IC51c2VybmFtZSAuZS1tYWlsIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbiAgLnMxIC5pbmZvIC5jaGFuZ2VwYXNzIGgyLCAuczEgLmluZm8gLmNoYW5nZXBhc3MgaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5zMSAuaW5mbyAuY2hhbmdlcGFzcyAuQnRuQ2hhbmdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogMCU7XG4gIH1cbiAgLnMxIC5pbmZvIC5jaGFuZ2VwYXNzIC5CdG5DaGFuZ2Uge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuICAuczEgLnBsYW4ge1xuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnMxIC5wbGFuIGgyIHtcbiAgICBtYXJnaW4tdG9wOiAxMCUgIWltcG9ydGFudDtcbiAgfVxuICAuczEgLnBsYW4gLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1yaWdodDogMTBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5zMSAucGxhbiAuY29udGFpbmVyIC5ib3JkZXJzdHlseSB7XG4gICAgZm9udC1zaXplOiAwLjVyZW07XG4gICAgcGFkZGluZzogNXB4O1xuICB9XG4gIC5zMSAucGxhbiAuY29udGFpbmVyIC5kYXkge1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICB9XG4gIC5zMSAucGxhbiAuY29udGFpbmVyIC50YWJsZSAubmFtZU1lYWxBbmRBbW91bnQge1xuICAgIGZvbnQtc2l6ZTogMC40cmVtO1xuICB9XG4gIC5zMSAucGxhbiAuY29udGFpbmVyIC50YWJsZSB0aCB7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICB9XG5cbiAgaDUge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICB9XG5cbiAgLmNhcmRJbmZvQ29sb3JTaXRlIHtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gIH1cbiAgLmNhcmRJbmZvQ29sb3JTaXRlIC5yb3cgLmNhcmRJbmZvLCAuY2FyZEluZm9Db2xvclNpdGUgLnJvdyAuY2FyZENvbG9yIHtcbiAgICBwYWRkaW5nOiA2JTtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbiAgLmNhcmRJbmZvQ29sb3JTaXRlIC5yb3cgLmNhcmRJbmZvIC5jb2xvckRpdiwgLmNhcmRJbmZvQ29sb3JTaXRlIC5yb3cgLmNhcmRDb2xvciAuY29sb3JEaXYge1xuICAgIGhlaWdodDogNTBQWCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA1MFBYICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNhcmRJbmZvQ29sb3JTaXRlIC5yb3cgLmNhcmRJbmZvIC5kaXZpbWdQcm8sIC5jYXJkSW5mb0NvbG9yU2l0ZSAucm93IC5jYXJkQ29sb3IgLmRpdmltZ1BybyB7XG4gICAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDgwcHggIWltcG9ydGFudDtcbiAgfVxuICAuY2FyZEluZm9Db2xvclNpdGUgLnJvdyAuY2FyZEluZm8gLmJ0bi1jaGFuZ2UtcGFzc3dvcmQsIC5jYXJkSW5mb0NvbG9yU2l0ZSAucm93IC5jYXJkQ29sb3IgLmJ0bi1jaGFuZ2UtcGFzc3dvcmQge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OTlweCkge1xuICAuczEge1xuICAgIG1hcmdpbi10b3A6IDExJTtcbiAgfVxuICAuczEgLkNyZWF0ZVlvdXJQbGFuIHtcbiAgICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAxMCUgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMTAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnMxIC5pbmZvIHtcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5zMSAuaW5mbyAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5zMSAuaW5mbyAuY29udGFpbmVyIC5yb3cge1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnMxIC5pbmZvIC5jb250YWluZXIgLnJvdyAuZGl2aW1nUHJvIHtcbiAgICB3aWR0aDogNjBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5zMSAuaW5mbyAuY29udGFpbmVyIC5yb3cgLnVzZXJuYW1lIHtcbiAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgfVxuICAuczEgLmluZm8gLmNvbnRhaW5lciAucm93IC51c2VybmFtZSAuZS1tYWlsIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgfVxuICAuczEgLmluZm8gLmNoYW5nZXBhc3MgaDIsIC5zMSAuaW5mbyAuY2hhbmdlcGFzcyBpbnB1dCB7XG4gICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnMxIC5pbmZvIC5jaGFuZ2VwYXNzIC5CdG5DaGFuZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAwJTtcbiAgfVxuICAuczEgLmluZm8gLmNoYW5nZXBhc3MgLkJ0bkNoYW5nZSB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG4gIC5zMSAucGxhbiB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgfVxuICAuczEgLnBsYW4gaDIge1xuICAgIG1hcmdpbi10b3A6IDEwJSAhaW1wb3J0YW50O1xuICB9XG4gIC5zMSAucGxhbiAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctcmlnaHQ6IDFweCAhaW1wb3J0YW50O1xuICB9XG4gIC5zMSAucGxhbiAuY29udGFpbmVyIC5ib3JkZXJzdHlseSB7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICBmb250LXNpemU6IDAuNXJlbTtcbiAgICBwYWRkaW5nOiAxcHg7XG4gIH1cbiAgLnMxIC5wbGFuIC5jb250YWluZXIgLmRheSB7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gIH1cbiAgLnMxIC5wbGFuIC5jb250YWluZXIgLnRhYmxlIC5uYW1lTWVhbEFuZEFtb3VudCB7XG4gICAgZm9udC1zaXplOiAwLjRyZW07XG4gIH1cbiAgLnMxIC5wbGFuIC5jb250YWluZXIgLnRhYmxlIHRoIHtcbiAgICBwYWRkaW5nOiAwLjFyZW07XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlanComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-plan',
                templateUrl: './plan.component.html',
                styleUrls: ['./plan.component.scss']
            }]
    }], function () { return [{ type: src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/AllComponents/profile/profile.component.ts":
/*!************************************************************!*\
  !*** ./src/app/AllComponents/profile/profile.component.ts ***!
  \************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Service/auth.service */ "./src/app/Service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const _c0 = function () { return { exact: true }; };
class ProfileComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
        document.getElementById('footer').style.width = "83.333333%";
        document.getElementById('footer').style.marginLeft = "16.666667%";
    }
    logout() {
        this.authService.log_out();
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 16, vars: 2, consts: [[1, "s1"], [1, "col-12"], [1, "row"], [1, "col-2", "left-part"], ["routerLink", "plan", "routerLinkActive", "active", 1, "content", "setting", "text-center", 3, "routerLinkActiveOptions"], ["aria-hidden", "true", 1, "fa", "fa-user"], [1, "d-none", "d-sm-block"], ["data-toggle", "modal", 1, "content", "LogOut", "text-center", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-sign-out"], [1, "col-10", "right-part"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_div_click_9_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "LogOut");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".s1[_ngcontent-%COMP%]   .right-part[_ngcontent-%COMP%] {\n  padding: 10% 5%;\n  margin-left: 16.666667%;\n}\n.s1[_ngcontent-%COMP%]   .left-part[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  background: #262626;\n  padding-top: 6%;\n  margin-top: 2%;\n}\n.s1[_ngcontent-%COMP%]   .left-part[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  width: 100%;\n  background: var(--maincolor);\n  color: white !important;\n  outline: 0px !important;\n}\n.s1[_ngcontent-%COMP%]   .left-part[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  color: #bdbdbd;\n  cursor: pointer;\n}\n.s1[_ngcontent-%COMP%]   .left-part[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  padding: 5%;\n}\n.s1[_ngcontent-%COMP%]   .left-part[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%] {\n  margin-right: 1%;\n}\n.s1[_ngcontent-%COMP%]   .left-part[_ngcontent-%COMP%]   .LogOut[_ngcontent-%COMP%] {\n  bottom: 10%;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\n  .s1[_ngcontent-%COMP%]   .right-part[_ngcontent-%COMP%] {\n    padding: 10% 1%;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .s1[_ngcontent-%COMP%]   .right-part[_ngcontent-%COMP%] {\n    padding: 10% 1%;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .s1[_ngcontent-%COMP%]   .left-part[_ngcontent-%COMP%] {\n    padding-top: 23% !important;\n  }\n  .s1[_ngcontent-%COMP%]   .right-part[_ngcontent-%COMP%] {\n    padding: 12% 1%;\n  }\n}\n@media only screen and (max-width: 450px) {\n  .s1[_ngcontent-%COMP%]   .left-part[_ngcontent-%COMP%] {\n    padding-top: 23% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWxsQ29tcG9uZW50cy9wcm9maWxlL0M6XFxVc2Vyc1xcY29tcGFcXERvd25sb2Fkc1xcZ2l0aHViIHByb2plY3RzXFxCZS1GaXRcXEJlRml0L3NyY1xcYXBwXFxBbGxDb21wb25lbnRzXFxwcm9maWxlXFxwcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9BbGxDb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNSTtFQUVBLGVBQUE7RUFDQSx1QkFBQTtBQ05KO0FEUUk7RUFFSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDUFI7QURTUTtFQUVJLFdBQUE7RUFDQSw0QkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7QUNSWjtBRFdRO0VBR0ksY0FBQTtFQUNBLGVBQUE7QUNYWjtBRGNRO0VBRUksV0FBQTtBQ2JaO0FEZVk7RUFFSSxnQkFBQTtBQ2RoQjtBRG1CUTtFQUVJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FDbEJaO0FEMkJBO0VBSVk7SUFFQSxlQUFBO0VDNUJWO0FBQ0Y7QURtQ0E7RUFLUTtJQUVBLGVBQUE7RUN0Q047QUFDRjtBRDJDQTtFQUlnQjtJQUVJLDJCQUFBO0VDN0NsQjtFRGdEYztJQUVJLGVBQUE7RUMvQ2xCO0FBQ0Y7QURxREE7RUFJRztJQUVTLDJCQUFBO0VDdkRWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9BbGxDb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcblxyXG4uczFcclxue1xyXG4gICAgLnJpZ2h0LXBhcnRcclxue1xyXG4gICAgcGFkZGluZzogMTAlIDUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY2NyU7XHJcbn1cclxuICAgIC5sZWZ0LXBhcnRcclxuICAgIHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgdG9wOjA7XHJcbiAgICAgICAgYm90dG9tOjA7XHJcbiAgICAgICAgYmFja2dyb3VuZDojMjYyNjI2IDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNiU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmFjdGl2ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW5jb2xvcik7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBvdXRsaW5lOjBweCAhaW1wb3J0YW50O1xyXG4gICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250ZW50XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb2xvcjogcmdiKDE4OSwgMTg5LCAxODkpO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBoNVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGFkZGluZzogNSU7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgICAuZmFzXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgLkxvZ091dFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYm90dG9tOiAxMCU7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gIFxyXG4gICAgXHJcblxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpXHJcbntcclxuICAgIC5zMVxyXG4gICAge1xyXG4gICAgICAgICAgICAucmlnaHQtcGFydFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTAlIDElO1xyXG4gICAgICAgIH1cclxuICAgIH0gXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcblxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweClcclxue1xyXG4gICAgXHJcbiAgICAuczFcclxuICAgIHtcclxuICAgICAgICAucmlnaHQtcGFydFxyXG4gICAge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwJSAxJTtcclxuICAgIH1cclxuICAgIH0gXHJcbiAgXHJcblxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIFxyXG57XHJcbiAgICAuczFcclxuXHRcdHtcclxuICAgICAgICAgICAgICAgIC5sZWZ0LXBhcnRcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjMlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucmlnaHQtcGFydFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEyJSAxJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gXHJcblxyXG59ICAgIFxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSBcclxue1xyXG4gICAgLnMxXHJcblx0XHR7XHJcblx0XHQgLmxlZnQtcGFydFxyXG5cdFx0IHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDIzJSAhaW1wb3J0YW50O1xyXG5cdFxyXG5cdFx0IH1cclxuICAgICAgICB9XHJcbiAgICBcclxufVxyXG5cclxuIiwiLnMxIC5yaWdodC1wYXJ0IHtcbiAgcGFkZGluZzogMTAlIDUlO1xuICBtYXJnaW4tbGVmdDogMTYuNjY2NjY3JTtcbn1cbi5zMSAubGVmdC1wYXJ0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogIzI2MjYyNjtcbiAgcGFkZGluZy10b3A6IDYlO1xuICBtYXJnaW4tdG9wOiAyJTtcbn1cbi5zMSAubGVmdC1wYXJ0IC5hY3RpdmUge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbmNvbG9yKTtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIG91dGxpbmU6IDBweCAhaW1wb3J0YW50O1xufVxuLnMxIC5sZWZ0LXBhcnQgLmNvbnRlbnQge1xuICBjb2xvcjogI2JkYmRiZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnMxIC5sZWZ0LXBhcnQgaDUge1xuICBwYWRkaW5nOiA1JTtcbn1cbi5zMSAubGVmdC1wYXJ0IGg1IC5mYXMge1xuICBtYXJnaW4tcmlnaHQ6IDElO1xufVxuLnMxIC5sZWZ0LXBhcnQgLkxvZ091dCB7XG4gIGJvdHRvbTogMTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gIC5zMSAucmlnaHQtcGFydCB7XG4gICAgcGFkZGluZzogMTAlIDElO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLnMxIC5yaWdodC1wYXJ0IHtcbiAgICBwYWRkaW5nOiAxMCUgMSU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnMxIC5sZWZ0LXBhcnQge1xuICAgIHBhZGRpbmctdG9wOiAyMyUgIWltcG9ydGFudDtcbiAgfVxuICAuczEgLnJpZ2h0LXBhcnQge1xuICAgIHBhZGRpbmc6IDEyJSAxJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAuczEgLmxlZnQtcGFydCB7XG4gICAgcGFkZGluZy10b3A6IDIzJSAhaW1wb3J0YW50O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.scss']
            }]
    }], function () { return [{ type: src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Models/fileupload.model.ts":
/*!********************************************!*\
  !*** ./src/app/Models/fileupload.model.ts ***!
  \********************************************/
/*! exports provided: Fileupload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fileupload", function() { return Fileupload; });
class Fileupload {
    constructor(file) {
        this.file = file;
    }
}


/***/ }),

/***/ "./src/app/Service/auth.service.ts":
/*!*****************************************!*\
  !*** ./src/app/Service/auth.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/__ivy_ngcc__/fesm2015/ng6-toastr-notifications.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");










class AuthService {
    constructor(afAuth, firestore, router, toastr, db, storage) {
        this.afAuth = afAuth;
        this.firestore = firestore;
        this.router = router;
        this.toastr = toastr;
        this.db = db;
        this.storage = storage;
        // currentUser
        this.basePath = '/usrsImages';
    }
    VerificationLogIn() {
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.user = user;
                // console.log(this.user )
                localStorage.setItem('user', JSON.stringify(this.user));
                // console.log(this.user)
                // console.log(this.user.emailVerified)
                localStorage.setItem('UserLogMail', this.user.email);
                // localStorage.setItem('',this.user.emailVerified);
            }
            else {
                localStorage.setItem('user', null);
            }
        });
    }
    login(email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var result = yield this.afAuth.signInWithEmailAndPassword(email, password).then(res => {
                this.VerificationLogIn();
                this.IsLoggedIn();
                localStorage.setItem('mail', JSON.stringify(res.user.email));
                setTimeout(() => {
                    this.router.navigate(['/profile/plan']);
                }, 500);
            })
                .catch(error => {
                this.toastr.warningToastr("E-MAIL OR PASSWORD NOT CORRECT");
            });
            // this.VerificationLogIn()
            //   this.toastr.successToastr("LogIn")
            //   localStorage.setItem('mail', JSON.stringify(result.user.email));
        });
    }
    IsLoggedIn() {
        const user = localStorage.getItem('user');
        if (user != null) {
            return true;
        }
        else {
            return false;
        }
    }
    get isLoggedIn() {
        const user = localStorage.getItem('user');
        if (user != null) {
            return true;
        }
        else {
            return false;
        }
    }
    log_out() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.afAuth.signOut();
            localStorage.removeItem('user');
            localStorage.removeItem('mail');
            localStorage.removeItem("UserLogMail");
            localStorage.removeItem("iduser");
            localStorage.removeItem("Nameuser");
            localStorage.removeItem("ProfilePhotoUser");
            localStorage.removeItem("UserPassword");
            localStorage.removeItem("typeuser");
            this.toastr.successToastr("LogOut");
            setTimeout(() => {
                if (!localStorage.getItem('foo')) {
                    localStorage.setItem('foo', 'no reload');
                    location.reload();
                }
                else {
                    localStorage.removeItem('foo');
                }
            }, 500);
            this.router.navigate(['']);
            // this.router.navigate(['admin/login']);
        });
    }
    sendPasswordResetEmail(passwordResetEmail) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log(this.afAuth.sendPasswordResetEmail(passwordResetEmail))
            return yield this.afAuth.sendPasswordResetEmail(passwordResetEmail).then(fun => {
                this.toastr.successToastr("Check Massage Send To Your E-Mail");
            });
        });
    }
    register(email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // var result = await this.afAuth.createUserWithEmailAndPassword(email, password)
            // .then(credential => {
            //   console.log(credential.user)
            // })
            return this.afAuth.createUserWithEmailAndPassword(email, password)
                .then(credential => {
                this.login(email, password);
                // console.log(credential.user)
                this.sendEmailVerification();
            });
        });
    }
    sendEmailVerification() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield (yield this.afAuth.currentUser).sendEmailVerification();
            // this.router.navigate(['admin/verify-email']);
        });
    }
    updateUserPassword(password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            (yield this.afAuth.currentUser).updatePassword(password).then(credential => {
                this.update_Pass(password, localStorage.getItem("iduser"));
            }).catch(function (error) {
                alert(error);
            });
        });
    }
    Add_InfoUser(SignInMail, SignInpassword, UserName) {
        // console.log(this.AddUrl)
        var body = {
            "mail": SignInMail,
            "password": SignInpassword,
            "name": UserName,
            "url": this.AddUrl,
            "type": "client",
            "day1": [],
            "day2": [],
            "day3": [],
            "day4": [],
            "day5": [],
            "day6": [],
            "day7": [],
            "ExereciseSystem": {
                "ExreciseName": "",
                "dataEx": [],
                "id": ""
            },
            "percentageForBody": {
                "ReqCalories": 0,
                "protein": 0,
                "fats": 0,
                "carb": 0
            }
        };
        return this.firestore.collection('Users').add(body);
    }
    Add_Img_user(fileUpload) {
        const filePath = `${this.basePath}/${fileUpload.file.name}`;
        const storageRef = this.storage.ref(filePath);
        const uploadTask = this.storage.upload(filePath, fileUpload.file);
        uploadTask.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => {
            storageRef.getDownloadURL().subscribe(downloadURL => {
                this.AddUrl = downloadURL;
                // console.log('File available at', downloadURL);
                fileUpload.url = downloadURL;
                fileUpload.name = fileUpload.file.name;
                this.saveFileData(fileUpload);
            });
        })).subscribe();
        return uploadTask.percentageChanges();
    }
    saveFileData(fileUpload) {
        this.db.list(this.basePath).push(fileUpload);
    }
    get_Users() {
        return this.firestore.collection('Users').snapshotChanges();
    }
    update_UserName(user, id) {
        this.firestore.collection('Users').doc(id).update({ name: user });
        this.toastr.successToastr("Changed");
        setTimeout(() => {
            if (!localStorage.getItem('foo')) {
                localStorage.setItem('foo', 'no reload');
                location.reload();
            }
            else {
                localStorage.removeItem('foo');
            }
        }, 1000);
    }
    delete_Img(fileUpload) {
        this.deleteFileDatabase(fileUpload.key)
            .then(() => {
            this.deleteFileStorage(fileUpload.name);
        })
            .catch(error => this.toastr.warningToastr("TRY IN ANOTHER TIME"));
    }
    deleteFileDatabase(key) {
        return this.db.list(this.basePath).remove(key);
    }
    deleteFileStorage(name) {
        const storageRef = this.storage.ref(this.basePath);
        storageRef.child(name).delete();
    }
    get_Img(numberItems) {
        return this.db.list(this.basePath, ref => ref.limitToLast(numberItems));
    }
    update_profilePhoto(id) {
        this.firestore.collection('Users').doc(id).update({ url: this.AddUrl });
        this.toastr.successToastr("Changed");
        setTimeout(() => {
            if (!localStorage.getItem('foo')) {
                localStorage.setItem('foo', 'no reload');
                location.reload();
            }
            else {
                localStorage.removeItem('foo');
            }
        }, 1000);
    }
    update_Pass(pass, id) {
        this.firestore.collection('Users').doc(id).update({ password: pass });
        this.toastr.successToastr("Changed");
        setTimeout(() => {
            if (!localStorage.getItem('foo')) {
                localStorage.setItem('foo', 'no reload');
                location.reload();
            }
            else {
                localStorage.removeItem('foo');
            }
        }, 1000);
    }
    percentageForBody(id, percentageForBody) {
        this.firestore.collection('Users').doc(id).update({ percentageForBody: percentageForBody });
        setTimeout(() => {
            this.router.navigate(['/foods']);
        }, 1000);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabase"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorage"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"] }, { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabase"] }, { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorage"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Service/exerecise.service.ts":
/*!**********************************************!*\
  !*** ./src/app/Service/exerecise.service.ts ***!
  \**********************************************/
/*! exports provided: ExereciseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExereciseService", function() { return ExereciseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/__ivy_ngcc__/fesm2015/ng6-toastr-notifications.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








class ExereciseService {
    constructor(firestore, db, storage, toastr, router) {
        this.firestore = firestore;
        this.db = db;
        this.storage = storage;
        this.toastr = toastr;
        this.router = router;
        this.basePath = '/ExreciseImages';
    }
    get_exerecises() {
        return this.firestore.collection('Exercise').snapshotChanges();
    }
    Add_Exercises(NameEx) {
        var body = {
            "ExreciseName": NameEx,
            "dataEx": []
        };
        return this.firestore.collection('Exercise').add(body).then(() => {
            this.toastr.successToastr("Changed");
        })
            .catch(error => console.log(error));
    }
    Add_Img_Ex(fileUpload) {
        const filePath = `${this.basePath}/${fileUpload.file.name}`;
        const storageRef = this.storage.ref(filePath);
        const uploadTask = this.storage.upload(filePath, fileUpload.file);
        uploadTask.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => {
            storageRef.getDownloadURL().subscribe(downloadURL => {
                console.log('File available at', downloadURL);
                fileUpload.url = downloadURL;
                localStorage.setItem('photoEx', downloadURL);
                console.log(this.AddUrl);
                fileUpload.name = fileUpload.file.name;
                this.saveFileData(fileUpload);
            });
        })).subscribe();
        return uploadTask.percentageChanges();
    }
    saveFileData(fileUpload) {
        this.db.list(this.basePath).push(fileUpload);
    }
    AddDataEx(describe, data, id) {
        this.firestore.collection('Exercise').doc(id).update({ dataEx: { 'describe': describe, 'data': data } });
        this.toastr.successToastr("Added");
        // setTimeout(() => {
        //   if (!localStorage.getItem('foo')) { 
        //     localStorage.setItem('foo', 'no reload') 
        //     location.reload() 
        //   } else {
        //     localStorage.removeItem('foo') 
        //   }
        // }, 1000);
    }
    delete_Img(fileUpload) {
        this.deleteFileDatabase(fileUpload.key)
            .then(() => {
            this.deleteFileStorage(fileUpload.name);
        })
            .catch(error => console.log(error));
        this.toastr.successToastr("ok");
    }
    deleteFileDatabase(key) {
        return this.db.list(this.basePath).remove(key)
            .catch(error => console.log(error));
    }
    deleteFileStorage(name) {
        const storageRef = this.storage.ref(this.basePath);
        storageRef.child(name).delete().catch(error => console.log(error));
    }
    get_Img(numberItems) {
        return this.db.list(this.basePath, ref => ref.limitToLast(numberItems));
    }
    add_Ex(id, EXSelect) {
        console.log(EXSelect);
        this.firestore.collection('Users').doc(id).update({ ExereciseSystem: EXSelect }).then(() => {
            this.toastr.successToastr("SYSTEM ADDED");
            this.router.navigate(['/profile/plan']);
        })
            .catch(error => console.log(error));
    }
}
ExereciseService.ɵfac = function ExereciseService_Factory(t) { return new (t || ExereciseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
ExereciseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ExereciseService, factory: ExereciseService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExereciseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }, { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] }, { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] }, { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Service/foods.service.ts":
/*!******************************************!*\
  !*** ./src/app/Service/foods.service.ts ***!
  \******************************************/
/*! exports provided: foodsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foodsService", function() { return foodsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/__ivy_ngcc__/fesm2015/ng6-toastr-notifications.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








class foodsService {
    constructor(firestore, db, storage, toastr, router) {
        this.firestore = firestore;
        this.db = db;
        this.storage = storage;
        this.toastr = toastr;
        this.router = router;
        this.basePath = '/FoodsImages';
    }
    get_Foods() {
        // return this.firestore.collection('policies',ref => ref
        // .limit(parseInt(pageSize))
        // .orderBy('NameFoods')).snapshotChanges();
        return this.firestore.collection('policies').snapshotChanges();
    }
    Add_Foods(Namefoods, calories, Protein, Carbs, Fat, typefoods) {
        console.log(this.AddUrl);
        let URL;
        if (this.AddUrl == null || this.AddUrl == undefined) {
            URL = localStorage.getItem("urlPhotoFood");
            // console.log("urlPhotoFood")
        }
        else {
            URL = this.AddUrl;
            console.log("this.AddUrl");
        }
        console.log(URL);
        var body = {
            "NameFoods": Namefoods,
            "calories": calories,
            "Protein": Protein,
            "Carbs": Carbs,
            "Fat": Fat,
            "TypeFood": typefoods,
            "url": URL
        };
        this.AddUrl = null;
        return this.firestore.collection('policies').add(body);
    }
    // Update_Foods(foods: Foods){
    //   delete foods.id;
    //   this.firestore.doc('policies/' + foods.id).update(foods);
    // }
    Delete_Foods(policyId) {
        this.firestore.doc('policies/' + policyId).delete();
    }
    Add_Img_Food(fileUpload) {
        const filePath = `${this.basePath}/${fileUpload.file.name}`;
        const storageRef = this.storage.ref(filePath);
        const uploadTask = this.storage.upload(filePath, fileUpload.file);
        uploadTask.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => {
            storageRef.getDownloadURL().subscribe(downloadURL => {
                console.log('File available at', downloadURL);
                fileUpload.url = downloadURL;
                this.AddUrl = downloadURL;
                console.log(this.AddUrl);
                fileUpload.name = fileUpload.file.name;
                this.saveFileData(fileUpload);
            });
        })).subscribe();
        return uploadTask.percentageChanges();
    }
    saveFileData(fileUpload) {
        this.db.list(this.basePath).push(fileUpload);
    }
    delete_Img(fileUpload) {
        this.deleteFileDatabase(fileUpload.key)
            .then(() => {
            this.deleteFileStorage(fileUpload.name);
        })
            .catch(error => console.log(error));
    }
    deleteFileDatabase(key) {
        return this.db.list(this.basePath).remove(key);
    }
    deleteFileStorage(name) {
        const storageRef = this.storage.ref(this.basePath);
        storageRef.child(name).delete();
    }
    get_Img(numberItems) {
        return this.db.list(this.basePath, ref => ref.limitToLast(numberItems));
    }
    add_meals(id, meal, nameField) {
        console.log(nameField);
        var x;
        if (nameField == "day 1") {
            x = { day1: meal };
        }
        if (nameField == "day 2") {
            x = { day2: meal };
        }
        if (nameField == "day 3") {
            x = { day3: meal };
        }
        if (nameField == "day 4") {
            x = { day4: meal };
        }
        if (nameField == "day 5") {
            x = { day5: meal };
        }
        if (nameField == "day 6") {
            x = { day6: meal };
        }
        if (nameField == "day 7") {
            x = { day7: meal };
        }
        this.firestore.collection('Users').doc(id).update(x).then(() => {
            this.toastr.successToastr("Changed");
            this.router.navigate(["/exrcise"]);
        })
            .catch(error => console.log(error));
    }
    update_food(Namefood, calorie, Proteins, Carb, Fats, TypeFoods, id) {
        console.log(id);
        this.firestore.collection('policies').doc(id).update({
            NameFoods: Namefood,
            calories: calorie,
            Fat: Fats,
            Protein: Proteins,
            TypeFood: TypeFoods,
            Carbs: Carb,
            url: localStorage.getItem("urlPhotoFood")
        }).then(() => {
            this.toastr.successToastr("Food Updated");
            setTimeout(function () {
                if (!localStorage.getItem('foo')) {
                    localStorage.setItem('foo', 'no reload');
                    location.reload();
                }
                else {
                    localStorage.removeItem('foo');
                }
            }, 2000);
        })
            .catch(error => console.log(error));
    }
}
foodsService.ɵfac = function foodsService_Factory(t) { return new (t || foodsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
foodsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: foodsService, factory: foodsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](foodsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }, { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] }, { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] }, { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Service/home.service.ts":
/*!*****************************************!*\
  !*** ./src/app/Service/home.service.ts ***!
  \*****************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/__ivy_ngcc__/fesm2015/ng6-toastr-notifications.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







class HomeService {
    constructor(firestore, db, storage, toastr, router) {
        this.firestore = firestore;
        this.db = db;
        this.storage = storage;
        this.toastr = toastr;
        this.router = router;
    }
    Add_comments(name, photo, comment, date) {
        var body = {
            "name": name,
            "photo": photo,
            "comment": comment,
            "date": date,
            "mail": localStorage.getItem("UserLogMail"),
            "reply": []
        };
        console.log(body);
        return this.firestore.collection("comments").add(body);
    }
    get_Comments() {
        return this.firestore.collection('comments', ref => ref.orderBy('date')).snapshotChanges();
    }
    Delete_comment(commentsid) {
        this.firestore.doc('comments/' + commentsid).delete();
    }
    add_replay(id, reply, name, photo, date, datacomments) {
        var body = {
            "name": name,
            "photo": photo,
            "reply": reply,
            "mail": localStorage.getItem("UserLogMail"),
            "date": date,
            "date2": {}
        };
        var allreplyarray = [];
        allreplyarray = datacomments;
        for (let i = 0; i < allreplyarray.length; i++) {
            if (id == allreplyarray[i].id) {
                allreplyarray[i].reply.push(body);
                //  console.log(allreplyarray[i].reply)
                this.firestore.collection('comments/').doc(id).update({ reply: allreplyarray[i].reply }).then(() => {
                })
                    .catch(error => this.toastr.warningToastr(error));
            }
        }
    }
}
HomeService.ɵfac = function HomeService_Factory(t) { return new (t || HomeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
HomeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HomeService, factory: HomeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }, { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }, { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"] }, { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _AllComponents_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AllComponents/home/home.component */ "./src/app/AllComponents/home/home.component.ts");
/* harmony import */ var _AllComponents_foods_foods_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AllComponents/foods/foods.component */ "./src/app/AllComponents/foods/foods.component.ts");
/* harmony import */ var _AllComponents_exrecise_exrecise_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AllComponents/exrecise/exrecise.component */ "./src/app/AllComponents/exrecise/exrecise.component.ts");
/* harmony import */ var _AllComponents_calories_calories_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AllComponents/calories/calories.component */ "./src/app/AllComponents/calories/calories.component.ts");
/* harmony import */ var _AllComponents_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AllComponents/profile/profile.component */ "./src/app/AllComponents/profile/profile.component.ts");
/* harmony import */ var _bodygard_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bodygard.guard */ "./src/app/bodygard.guard.ts");
/* harmony import */ var _AllComponents_profile_plan_plan_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AllComponents/profile/plan/plan.component */ "./src/app/AllComponents/profile/plan/plan.component.ts");











const routes = [
    { path: '', component: _AllComponents_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'foods', component: _AllComponents_foods_foods_component__WEBPACK_IMPORTED_MODULE_3__["foodsComponent"], canActivate: [_bodygard_guard__WEBPACK_IMPORTED_MODULE_7__["BodygardGuard"]] },
    { path: 'exrcise', component: _AllComponents_exrecise_exrecise_component__WEBPACK_IMPORTED_MODULE_4__["ExreciseComponent"], canActivate: [_bodygard_guard__WEBPACK_IMPORTED_MODULE_7__["BodygardGuard"]] },
    { path: 'calories', component: _AllComponents_calories_calories_component__WEBPACK_IMPORTED_MODULE_5__["CaloriesComponent"], canActivate: [_bodygard_guard__WEBPACK_IMPORTED_MODULE_7__["BodygardGuard"]] },
    { path: 'profile', component: _AllComponents_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"], children: [{ path: 'plan', component: _AllComponents_profile_plan_plan_component__WEBPACK_IMPORTED_MODULE_8__["PlanComponent"] }], canActivate: [_bodygard_guard__WEBPACK_IMPORTED_MODULE_7__["BodygardGuard"]] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _Models_fileupload_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Models/fileupload.model */ "./src/app/Models/fileupload.model.ts");
/* harmony import */ var src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Service//auth.service */ "./src/app/Service/auth.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/__ivy_ngcc__/fesm2015/ng6-toastr-notifications.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










const _c0 = ["LoginModel"];
function AppComponent_form_24_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 88);
} if (rf & 2) {
    const ctx_r263 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r263.UserUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c1 = function () { return ["/profile/plan"]; };
function AppComponent_form_24_Template(rf, ctx) { if (rf & 1) {
    const _r265 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_form_24_img_1_Template, 1, 1, "img", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_form_24_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r265); const ctx_r264 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r264.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "LogOut");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r250 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r250.CheckLog == true && ctx_r250.UserUrl != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r250.Username, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
} }
function AppComponent_form_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "LogIn");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_115_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Required E-mail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_115_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Provide A Valid Email Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_115_div_1_Template, 2, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_115_div_2_Template, 2, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r253 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r253.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r253.errors == null ? null : _r253.errors.email);
} }
function AppComponent_div_141_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_141_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email must be a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_141_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_141_div_1_Template, 2, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_141_div_2_Template, 2, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r255 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r255.f_LogIn.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r255.f_LogIn.email.errors.email);
} }
function AppComponent_div_144_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_144_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password must be at least 6 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_144_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_144_div_1_Template, 2, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_144_div_2_Template, 2, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r256 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r256.f_LogIn.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r256.f_LogIn.password.errors.minlength);
} }
function AppComponent_div_174_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "User Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_174_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_174_div_1_Template, 2, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r257 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r257.f_SignUp.userName.errors.required);
} }
function AppComponent_div_177_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_177_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email must be a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_177_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_177_div_1_Template, 2, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_177_div_2_Template, 2, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r258.f_SignUp.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r258.f_SignUp.email.errors.email);
} }
function AppComponent_div_180_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_180_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password must be at least 6 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_180_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_180_div_1_Template, 2, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_180_div_2_Template, 2, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r259 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r259.f_SignUp.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r259.f_SignUp.password.errors.minlength);
} }
function AppComponent_div_183_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_183_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Passwords must match");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_183_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_183_div_1_Template, 2, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_183_div_2_Template, 2, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r260 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r260.f_SignUp.confirmPassword.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r260.f_SignUp.confirmPassword.errors.mustMatch);
} }
const _c2 = function (a0) { return { width: a0 }; };
function AppComponent_div_189_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r261 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c2, ctx_r261.percentage + "%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuenow", ctx_r261.percentage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r261.percentage, "%");
} }
function AppComponent_div_195_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c3 = function () { return [""]; };
const _c4 = function () { return ["/foods"]; };
const _c5 = function () { return ["/exrcise"]; };
const _c6 = function () { return ["/calories"]; };
const _c7 = function (a0) { return { "is-invalid": a0 }; };
class AppComponent {
    constructor(authService, toastr, spinner, formBuilder) {
        this.authService = authService;
        this.toastr = toastr;
        this.spinner = spinner;
        this.formBuilder = formBuilder;
        this.title = 'Be-Fit';
        this.isActive = true;
        this.submittedLogin = false;
        this.submittedSignUp = false;
        /////////GetUsers/////////////
        this.DataUsers = [];
        //  UserLogMail 
        this.DataUserlog = [];
        this.load = true;
    }
    ngOnInit() {
        if (localStorage.getItem('colorSite')) {
            var bodyStyles = document.body.style;
            bodyStyles.setProperty('--maincolor', localStorage.getItem('colorSite'));
            this.colorspinner = localStorage.getItem('colorSite');
        }
        else {
            var bodyStyles = document.body.style;
            bodyStyles.setProperty('--maincolor', 'rgb(227, 108, 81)');
            this.colorspinner = 'rgb(227, 108, 81)';
        }
        this.spinner.show();
        this.LoginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
        });
        this.SignUpForm = this.formBuilder.group({
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        }, {
            validator: this.MustMatch('password', 'confirmPassword')
        });
        window.addEventListener('scroll', function () {
            if (window.pageYOffset >= 401) {
                document.getElementById('ScrollUp').style.display = "block";
            }
            if (window.pageYOffset <= 400) {
                document.getElementById('ScrollUp').style.display = "none";
            }
        });
        this.CheckLog = this.authService.isLoggedIn;
        this.GetUsers();
        if (!this.CheckLog)
            setTimeout(() => {
                console.log(document.getElementById("logshow"));
                document.getElementById("logshow").click();
            }, 500);
        setTimeout(() => {
            this.spinner.hide();
        }, 2000);
    }
    ScrollUp() {
        window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    }
    toggle() {
        return this.isActive = !this.isActive;
    }
    ChangeColorSite(colorSelect) {
        var bodyStyles = document.body.style;
        bodyStyles.setProperty('--maincolor', colorSelect);
    }
    logout() {
        this.authService.log_out();
        this.UserUrl = null;
    }
    // convenience getter for easy access to form fields
    get f_LogIn() { return this.LoginForm.controls; }
    LogIn() {
        this.submittedLogin = true;
        // stop here if form is invalid
        if (this.LoginForm.invalid) {
            return;
        }
        this.authService.login(this.LoginForm.get('email').value, this.LoginForm.get('password').value);
    }
    onResetLogInForm() {
        this.submittedLogin = false;
        this.LoginForm.reset();
    }
    send_Password_ResetEmail() {
        // this.EmailResetPassword = localStorage.getItem("mail")
        // console.log(this.EmailResetPassword)
        this.authService.sendPasswordResetEmail(this.EmailResetPassword)
            .catch((error) => {
            if (error.code) {
                this.toastr.warningToastr(error.message);
            }
        });
    }
    MustMatch(controlName, matchingControlName) {
        return (formGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];
            if (matchingControl.errors && !matchingControl.errors.mustMatch) {
                // return if another validator has already found an error on the matchingControl
                return;
            }
            // set error on matchingControl if validation fails
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ mustMatch: true });
            }
            else {
                matchingControl.setErrors(null);
            }
        };
    }
    onResetSignUpForm() {
        this.submittedSignUp = false;
        this.SignUpForm.reset();
        this.whenClosesignUp();
    }
    // convenience getter for easy access to form fields
    get f_SignUp() { return this.SignUpForm.controls; }
    signUp() {
        this.submittedSignUp = true;
        if (this.percentage != 100 && this.load == true) {
            this.toastr.warningToastr("Upload Photo");
        }
        if (this.percentage == 100 && this.load == true) {
            this.toastr.warningToastr("Please Wait");
        }
        // stop here if form is invalid
        if (this.SignUpForm.invalid || this.percentage != 100 || this.load == true) {
            return;
        }
        console.log("2");
        this.authService.register(this.SignUpForm.get('email').value, this.SignUpForm.get('password').value).then(() => {
            console.log("3");
            this.InfoUser(this.SignUpForm.get('email').value, this.SignUpForm.get('password').value, this.SignUpForm.get('userName').value);
            this.toastr.successToastr("User Created");
        }).catch(function (error) {
            alert(error);
        });
    }
    InfoUser(SignInMail, SignInpassword, UserName) { this.authService.Add_InfoUser(SignInMail, SignInpassword, UserName); }
    SelectImg(event) {
        this.selectedFiles = event.target.files;
        console.log(this.selectedFiles);
    }
    AddImgUser() {
        const file = this.selectedFiles.item(0);
        this.selectedFiles = undefined;
        this.currentFileUpload = new _Models_fileupload_model__WEBPACK_IMPORTED_MODULE_2__["Fileupload"](file);
        // console.log(this.currentFileUpload.url)
        this.authService.Add_Img_user(this.currentFileUpload).subscribe(percentage => {
            this.percentage = Math.round(percentage);
            if (percentage == 100) {
                this.wiating();
            }
        }, error => {
            console.log(error.message);
        });
    }
    GetUsers() {
        this.authService.get_Users().subscribe(res => {
            this.DataUsers = res.map(e => {
                return Object.assign({ id: e.payload.doc.id }, e.payload.doc.data());
            });
            // console.log(this.DataUsers)
            // console.log(this.UserLogMail)
            // this.GetImage()
            this.DataUserlog = [];
            for (let i = 0; i < this.DataUsers.length; i++) {
                if (this.DataUsers[i].mail == localStorage.getItem("UserLogMail")) {
                    this.Username = this.DataUsers[i].name;
                    this.UserUrl = this.DataUsers[i].url;
                    // console.log(this.UserUrl)
                    // console.log(this.DataUsers[i].name)
                }
            }
        }, err => {
            this.toastr.errorToastr(err.message);
        });
    }
    wiating() {
        setTimeout(() => {
            this.load = false;
        }, 10000);
    }
    whenOpensignUp() {
        document.body.style.overflowY = "hidden";
    }
    whenClosesignUp() {
        document.body.style.overflowY = "visible";
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.LoginModel = _t.first);
    } }, decls: 196, vars: 46, consts: [["id", "spinner", "bdColor", "rgba(0,0,0,1)", "size", "large", "type", "square-jelly-box", 1, "spinner", 2, "z-index", "999999", 3, "color", "fullScreen"], ["id", "navbar", 1, "navbar", "navbar-expand-lg", "navbar-dark", "fixed-top"], [1, "navbar-brand", 3, "routerLink"], [1, "FitLogo"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", 2, "padding-left", "1%"], [1, "navbar-nav", "navbar-nav-ul", "mr-auto"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], [1, "nav-item", "dropdown"], ["class", "form-inline navbar-nav-form  my-2 my-lg-0", 4, "ngIf"], ["class", "form-inline navbar-nav-form my-2 my-lg-0", 4, "ngIf"], ["id", "footer", 2, "margin-top", "5%", "position", "relative"], [1, "container"], [1, "col-12"], [1, "row"], [1, "col-lg-4", "col-sm-12", "contacts"], ["aria-hidden", "true", 1, "fa", "fa-map"], ["aria-hidden", "true", 1, "fa", "fa-phone"], ["aria-hidden", "true", 1, "fa", "fa-envelope-o"], ["aria-hidden", "true", 1, "fa", "fa-clock-o"], [1, "col-lg-4", "col-sm-12", "RecentPosts"], [1, "FristPost"], [1, "photo"], [1, "Name"], [1, "SecondPost"], [1, "ThirdPost"], [1, "col-lg-4", "col-sm-12", "LatestProjects"], [1, "col-lg-12"], [1, "col-lg-3", "one"], [1, "col-lg-3", "two"], [1, "col-lg-3", "three"], [1, "col-lg-3", "four"], [1, "col-lg-3", "five"], [1, "col-lg-3", "six"], [1, "col-lg-3", "seven"], [1, "col-lg-3", "eight"], [1, "col-lg-3", "nine"], [1, "copyright", "text-center"], [1, "Fit"], ["id", "ScrollUp", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-chevron-up"], ["ConfirmEmail", "ngForm"], ["id", "ConfirmEmail", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-dismiss", "modal", 1, "close", 3, "click"], [1, "modal-body"], [1, "ContactUs"], [1, "DarkFrame"], ["role", "form-inline"], ["name", "mail", "type", "text", "email", "true", "placeholder", "E-mail", "required", "", 1, "form-control", "inputcontact", 3, "ngModel", "ngModelChange"], ["mailConfirm", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default"], ["type", "submit", "data-dismiss", "modal", 1, "btn", "btn-default", "BtnAddFoodModel", 3, "disabled", "click"], [3, "formGroup", "ngSubmit"], ["id", "LoginModel", "role", "dialog", "data-backdrop", "static", "data-keyboard", "false", 1, "modal", "fade"], [1, "text-center"], [1, "fa", "fa-user-o", "fa-3x", "text-center"], [1, "margin-bottom", "col-12"], ["formControlName", "email", "name", "mail", "type", "text", "placeholder", "E-mail", 1, "form-control", "inputcontact", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "password", "name", "password", "id", "passwordlogin", "type", "password", "placeholder", "Password", 1, "form-control", "inputcontact", 3, "ngClass"], ["data-dismiss", "modal", "data-toggle", "modal", "data-target", "#Signin", 1, "Create", 3, "click"], ["data-toggle", "modal", "data-target", "#ConfirmEmail", "data-dismiss", "modal", 1, "forgetPass"], ["type", "button", "type", "reset", "data-dismiss", "modal", 1, "btn", "btn-default", "button-cancel", 3, "click"], ["type", "submit", 1, "btn", "btn-default", "BtnAddFoodModel", "button-Log"], ["id", "Signin", "role", "dialog", "data-backdrop", "static", "data-keyboard", "false", 1, "modal", "fade"], ["name", "userName", "formControlName", "userName", "type", "text", "placeholder", "UserName", 1, "form-control", "inputcontact", 3, "ngClass"], ["formControlName", "email", "name", "SignInMail", "type", "text", "placeholder", "E-mail", 1, "form-control", "inputcontact", 3, "ngClass"], ["formControlName", "password", "name", "SignInpassword", "type", "password", "placeholder", "Password", 1, "form-control", "inputcontact", 3, "ngClass"], ["formControlName", "confirmPassword", "name", "RePassword", "type", "password", "placeholder", "Confirm Password", 1, "form-control", "inputcontact", 3, "ngClass"], [1, "btn", "btn-default"], ["type", "file", 3, "change"], ["type", "button", 1, "btn", "btn-success", 3, "disabled", "click"], ["class", "progress", 4, "ngIf"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default", 3, "click"], [4, "ngIf"], [1, "form-inline", "navbar-nav-form", "my-2", "my-lg-0"], ["class", "profilephoto", "alt", "", 3, "src", 4, "ngIf"], ["href", "#", "id", "navbarDropdown username", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "username", 2, "outline", "none", "position", "relative", "color", "white", "font-size", "20px"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], [1, "dropdown-item", 3, "routerLink"], [1, "dropdown-item", 3, "click"], ["alt", "", 1, "profilephoto", 3, "src"], ["id", "logshow", "data-toggle", "modal", "data-target", "#LoginModel", "type", "submit", 1, "btn", "login", "my-2", "my-sm-0", "form-control"], [1, "alert", "alert-danger"], [1, "invalid-feedback"], [1, "progress"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-info", "progress-bar-striped", 3, "ngStyle"], [1, "fa", "fa-spinner", "fa-pulse", "fa-2x", "fa-fw"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Loading... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "BE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "FIT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Foods");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Exercise");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Calories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AppComponent_form_24_Template, 9, 4, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AppComponent_form_25_Template, 3, 0, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "footer", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Egypt,Menofia,Shebin-Elkom ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " 01556044585 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " mohmedmagdykh@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Mon.-Fri.: 10-20 Sun.: 12-16 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Recent Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Jack Necolase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Gym");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Tom kroze");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Traviling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Jason Statem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Driving");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Latest Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " Copyright \u00A9 2020 Be ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Fit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " .inc ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_93_listener() { return ctx.ScrollUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "form", null, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Forget Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_104_listener() { return ctx.onResetSignUpForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "section", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "form", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "input", 53, 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_113_listener($event) { return ctx.EmailResetPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](115, AppComponent_div_115_Template, 3, 2, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_119_listener() { return ctx.send_Password_ResetEmail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "form", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AppComponent_Template_form_ngSubmit_121_listener() { return ctx.LogIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_129_listener() { return ctx.onResetLogInForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "section", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "i", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "input", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](141, AppComponent_div_141_Template, 3, 2, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "input", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](144, AppComponent_div_144_Template, 3, 2, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_145_listener() { return ctx.whenOpensignUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Create E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, " Forget Password ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "button", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_150_listener() { return ctx.onResetLogInForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "button", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "LogIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "form", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AppComponent_Template_form_ngSubmit_154_listener() { return ctx.signUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_162_listener() { return ctx.onResetSignUpForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "section", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "i", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "input", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](174, AppComponent_div_174_Template, 2, 1, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "input", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](177, AppComponent_div_177_Template, 3, 2, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "input", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](180, AppComponent_div_180_Template, 3, 2, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "input", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](183, AppComponent_div_183_Template, 3, 2, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "label", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "input", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_input_change_185_listener($event) { return ctx.SelectImg($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "button", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_186_listener() { return ctx.AddImgUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](189, AppComponent_div_189_Template, 3, 5, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "button", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_191_listener() { return ctx.onResetSignUpForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "button", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](195, AppComponent_div_195_Template, 4, 0, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r253 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.colorspinner)("fullScreen", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.CheckLog == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.CheckLog == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.EmailResetPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r253.invalid && (_r253.dirty || _r253.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r253.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.LoginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](34, _c7, ctx.submittedLogin && ctx.f_LogIn.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submittedLogin && ctx.f_LogIn.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](36, _c7, ctx.submittedLogin && ctx.f_LogIn.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submittedLogin && ctx.f_LogIn.password.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.SignUpForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](38, _c7, ctx.submittedSignUp && ctx.f_SignUp.userName.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submittedSignUp && ctx.f_SignUp.userName.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](40, _c7, ctx.submittedSignUp && ctx.f_SignUp.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submittedSignUp && ctx.f_SignUp.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](42, _c7, ctx.submittedSignUp && ctx.f_SignUp.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submittedSignUp && ctx.f_SignUp.password.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](44, _c7, ctx.submittedSignUp && ctx.f_SignUp.confirmPassword.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submittedSignUp && ctx.f_SignUp.confirmPassword.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.selectedFiles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentFileUpload);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.percentage == 100 && ctx.load == true);
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"]], styles: ["[_ngcontent-%COMP%]:root {\n  --maincolorNav: var(--maincolorNav);\n}\n\na[_ngcontent-%COMP%] {\n  cursor: pointer !important;\n}\n\ntextarea[_ngcontent-%COMP%]:focus, input[_ngcontent-%COMP%]:focus, button[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n\nngx-spinner[_ngcontent-%COMP%] {\n  color: var(--maincolor) !important;\n}\n\nngx-spinner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--maincolor);\n  font-size: 20px;\n}\n\n#navbar[_ngcontent-%COMP%] {\n  top: 0px;\n  background: #262626;\n  height: 70px;\n  border-top: 1px solid rgba(255, 255, 255, 0.1) !important;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;\n  padding-left: 7%;\n  padding-right: 7%;\n}\n\n#navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-left: 5%;\n  margin-right: 5%;\n}\n\n#navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: white !important;\n}\n\n#navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: var(--maincolor) !important;\n}\n\n#navbar[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%] {\n  background-color: var(--maincolor);\n  color: white;\n  border: none;\n  width: 115px;\n}\n\n.setting[_ngcontent-%COMP%] {\n  margin-top: 200px;\n  position: fixed;\n  color: var(--maincolor);\n  z-index: 99998;\n}\n\n.setting[_ngcontent-%COMP%]   .colorBox[_ngcontent-%COMP%] {\n  background: #3c3c3c;\n  width: 150px;\n  height: 80px;\n  float: left;\n  padding-top: 18px;\n}\n\n.setting[_ngcontent-%COMP%]   .colorBox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  display: inline-block;\n  margin-left: 5px;\n}\n\n.setting[_ngcontent-%COMP%]   .colorBox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .h6[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  color: white;\n}\n\n.setting[_ngcontent-%COMP%]   .colorBox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%] {\n  background: #cc404a;\n}\n\n.setting[_ngcontent-%COMP%]   .colorBox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .blue[_ngcontent-%COMP%] {\n  background: #55b9f4;\n}\n\n.setting[_ngcontent-%COMP%]   .colorBox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .green[_ngcontent-%COMP%] {\n  background: #63c558;\n}\n\n.setting[_ngcontent-%COMP%]   .colorBox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .defult[_ngcontent-%COMP%] {\n  background: #e36c51;\n}\n\n#ScrollUp[_ngcontent-%COMP%] {\n  background: var(--maincolor);\n  z-index: 99999;\n  width: 50px;\n  height: 40px;\n  position: fixed;\n  right: 20px;\n  bottom: 20px;\n  cursor: pointer;\n  color: #fff;\n  text-align: center;\n  display: none;\n}\n\n.modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--maincolor);\n}\n\n.modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n\n.modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .margin-bottom[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .fa-user-o[_ngcontent-%COMP%] {\n  color: var(--maincolor);\n  margin-bottom: 25px;\n}\n\n.modal-content[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   .button-Log[_ngcontent-%COMP%] {\n  background: var(--maincolor);\n  color: white;\n}\n\n.modal-content[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   .button-cancel[_ngcontent-%COMP%] {\n  color: var(--maincolor);\n}\n\n.forgetPass[_ngcontent-%COMP%], .Create[_ngcontent-%COMP%] {\n  color: var(--maincolor);\n}\n\n.Create[_ngcontent-%COMP%] {\n  margin-left: 3%;\n}\n\n.forgetPass[_ngcontent-%COMP%] {\n  margin-left: 42%;\n}\n\n.profilephoto[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  background-size: 100% 100%;\n  height: 40px;\n  width: 40px;\n}\n\n.progress[_ngcontent-%COMP%] {\n  margin-bottom: 10%;\n  margin-top: 12%;\n  width: 100%;\n}\n\n.btn-success[_ngcontent-%COMP%] {\n  height: 5%;\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  font-family: \"Raleway\";\n  color: white;\n  font-size: 28px;\n}\n\n.navbar-brand[_ngcontent-%COMP%]   .FitLogo[_ngcontent-%COMP%] {\n  color: var(--maincolor);\n}\n\nfooter[_ngcontent-%COMP%] {\n  background-color: #262626;\n  height: auto;\n}\n\nfooter[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 25px;\n  margin-top: 10%;\n  margin-bottom: 11%;\n}\n\nfooter[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%] {\n  margin-top: 6%;\n  color: #fff;\n}\n\nfooter[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-bottom: 6%;\n}\n\nfooter[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 10%;\n}\n\nfooter[_ngcontent-%COMP%]   .RecentPosts[_ngcontent-%COMP%] {\n  margin-top: 5%;\n}\n\nfooter[_ngcontent-%COMP%]   .RecentPosts[_ngcontent-%COMP%]   .FristPost[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  padding-bottom: 15px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;\n}\n\nfooter[_ngcontent-%COMP%]   .RecentPosts[_ngcontent-%COMP%]   .FristPost[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  background: url('FristPost.jpg');\n  background-size: 100% 100%;\n  height: 75px;\n  width: 75px;\n}\n\nfooter[_ngcontent-%COMP%]   .RecentPosts[_ngcontent-%COMP%]   .FristPost[_ngcontent-%COMP%]   .Name[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-left: 20px;\n  color: white;\n}\n\nfooter[_ngcontent-%COMP%]   .RecentPosts[_ngcontent-%COMP%]   .SecondPost[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;\n  margin-left: 20px;\n  padding-top: 15px;\n}\n\nfooter[_ngcontent-%COMP%]   .RecentPosts[_ngcontent-%COMP%]   .SecondPost[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  background: url('SecondPost.jpg');\n  background-size: 100% 100%;\n  height: 75px;\n  width: 75px;\n}\n\nfooter[_ngcontent-%COMP%]   .RecentPosts[_ngcontent-%COMP%]   .SecondPost[_ngcontent-%COMP%]   .Name[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-left: 20px;\n  color: white;\n}\n\nfooter[_ngcontent-%COMP%]   .RecentPosts[_ngcontent-%COMP%]   .ThirdPost[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  margin-left: 20px;\n}\n\nfooter[_ngcontent-%COMP%]   .RecentPosts[_ngcontent-%COMP%]   .ThirdPost[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  background: url('ThirdPost.jpg');\n  background-size: 100% 100%;\n  height: 75px;\n  width: 75px;\n}\n\nfooter[_ngcontent-%COMP%]   .RecentPosts[_ngcontent-%COMP%]   .ThirdPost[_ngcontent-%COMP%]   .Name[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-left: 20px;\n  color: white;\n}\n\nfooter[_ngcontent-%COMP%]   .LatestProjects[_ngcontent-%COMP%] {\n  margin-top: 5%;\n}\n\nfooter[_ngcontent-%COMP%]   .LatestProjects[_ngcontent-%COMP%]   .one[_ngcontent-%COMP%] {\n  background: url('1.jpg');\n  background-size: 100% 100%;\n  height: 85px;\n  width: 85px;\n  margin-left: 5%;\n}\n\nfooter[_ngcontent-%COMP%]   .LatestProjects[_ngcontent-%COMP%]   .two[_ngcontent-%COMP%] {\n  background: url('2.jpg');\n  background-size: 100% 100%;\n  height: 85px;\n  width: 85px;\n  margin-left: 5%;\n}\n\nfooter[_ngcontent-%COMP%]   .LatestProjects[_ngcontent-%COMP%]   .three[_ngcontent-%COMP%] {\n  background: url('3.jpg');\n  background-size: 100% 100%;\n  height: 85px;\n  width: 85px;\n  margin-left: 5%;\n}\n\nfooter[_ngcontent-%COMP%]   .LatestProjects[_ngcontent-%COMP%]   .four[_ngcontent-%COMP%] {\n  background: url('4.jpg');\n  background-size: 100% 100%;\n  height: 85px;\n  width: 85px;\n  margin-left: 5%;\n  margin-top: 5%;\n}\n\nfooter[_ngcontent-%COMP%]   .LatestProjects[_ngcontent-%COMP%]   .five[_ngcontent-%COMP%] {\n  background: url('5.jpg');\n  background-size: 100% 100%;\n  height: 85px;\n  width: 85px;\n  margin-left: 5%;\n  margin-top: 5%;\n}\n\nfooter[_ngcontent-%COMP%]   .LatestProjects[_ngcontent-%COMP%]   .six[_ngcontent-%COMP%] {\n  background: url('6.jpg');\n  background-size: 100% 100%;\n  height: 85px;\n  width: 85px;\n  margin-left: 5%;\n  margin-top: 5%;\n}\n\nfooter[_ngcontent-%COMP%]   .LatestProjects[_ngcontent-%COMP%]   .seven[_ngcontent-%COMP%] {\n  background: url('7.jpg');\n  background-size: 100% 100%;\n  height: 85px;\n  width: 85px;\n  margin-left: 5%;\n  margin-top: 5%;\n}\n\nfooter[_ngcontent-%COMP%]   .LatestProjects[_ngcontent-%COMP%]   .eight[_ngcontent-%COMP%] {\n  background: url('8.jpg');\n  background-size: 100% 100%;\n  height: 85px;\n  width: 85px;\n  margin-left: 5%;\n  margin-top: 5%;\n}\n\nfooter[_ngcontent-%COMP%]   .LatestProjects[_ngcontent-%COMP%]   .nine[_ngcontent-%COMP%] {\n  background: url('9.jpg');\n  background-size: 100% 100%;\n  height: 85px;\n  width: 85px;\n  margin-left: 5%;\n  margin-top: 5%;\n}\n\nfooter[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  background: #222;\n  color: white;\n  min-width: 100%;\n  height: 47px;\n  padding-top: 10px;\n  bottom: 0px;\n  margin-top: 3%;\n}\n\nfooter[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]   .Fit[_ngcontent-%COMP%] {\n  color: var(--maincolor);\n}\n\n@media only screen and (min-width: 1200px) {\n  #navbar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  #navbar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%] {\n    position: absolute;\n  }\n  #navbar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .navbar-nav-ul[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 22%;\n  }\n  #navbar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .navbar-nav-form[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 15px;\n  }\n}\n\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\n  #navbar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  #navbar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%] {\n    position: absolute;\n  }\n  #navbar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .navbar-nav-ul[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 8%;\n  }\n  #navbar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .navbar-nav-form[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 15px;\n  }\n}\n\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  #navbar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%] {\n    padding-left: 0%;\n    background: rgba(38, 38, 38, 0.5) !important;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  #navbar[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  #navbar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%] {\n    background: rgba(38, 38, 38, 0.5) !important;\n  }\n\n  #LoginModel[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin-left: 0%;\n    width: 100%;\n    font-size: 1.2rem;\n    text-align: center;\n  }\n\n  #Signin[_ngcontent-%COMP%] {\n    position: absolute;\n    height: 100%;\n  }\n}\n\n@media only screen and (max-width: 499px) {\n  footer[_ngcontent-%COMP%]   .LatestProjects[_ngcontent-%COMP%]   .one[_ngcontent-%COMP%] {\n    height: 75px !important;\n    width: 80px !important;\n    margin-left: 2% !important;\n    margin-top: 2% !important;\n  }\n  footer[_ngcontent-%COMP%]   .LatestProjects[_ngcontent-%COMP%]   .two[_ngcontent-%COMP%] {\n    height: 75px !important;\n    width: 80px !important;\n    margin-left: 2% !important;\n    margin-top: 2% !important;\n  }\n  footer[_ngcontent-%COMP%]   .LatestProjects[_ngcontent-%COMP%]   .three[_ngcontent-%COMP%] {\n    height: 75px !important;\n    width: 80px !important;\n    margin-left: 2% !important;\n    margin-top: 2% !important;\n  }\n  footer[_ngcontent-%COMP%]   .LatestProjects[_ngcontent-%COMP%]   .four[_ngcontent-%COMP%] {\n    height: 75px !important;\n    width: 80px !important;\n    margin-left: 2% !important;\n    margin-top: 2% !important;\n  }\n  footer[_ngcontent-%COMP%]   .LatestProjects[_ngcontent-%COMP%]   .five[_ngcontent-%COMP%] {\n    height: 75px !important;\n    width: 80px !important;\n    margin-left: 2% !important;\n    margin-top: 2% !important;\n  }\n  footer[_ngcontent-%COMP%]   .LatestProjects[_ngcontent-%COMP%]   .six[_ngcontent-%COMP%] {\n    height: 75px !important;\n    width: 80px !important;\n    margin-left: 2% !important;\n    margin-top: 2% !important;\n  }\n  footer[_ngcontent-%COMP%]   .LatestProjects[_ngcontent-%COMP%]   .seven[_ngcontent-%COMP%] {\n    height: 75px !important;\n    width: 80px !important;\n    margin-left: 2% !important;\n    margin-top: 2% !important;\n  }\n  footer[_ngcontent-%COMP%]   .LatestProjects[_ngcontent-%COMP%]   .eight[_ngcontent-%COMP%] {\n    height: 75px !important;\n    width: 80px !important;\n    margin-left: 3% !important;\n    margin-top: 2% !important;\n  }\n  footer[_ngcontent-%COMP%]   .LatestProjects[_ngcontent-%COMP%]   .nine[_ngcontent-%COMP%] {\n    height: 80px !important;\n    width: 80px !important;\n    margin-left: 2% !important;\n    margin-top: 2% !important;\n  }\n}\n\n#Signin[_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxjb21wYVxcRG93bmxvYWRzXFxnaXRodWIgcHJvamVjdHNcXEJlLUZpdFxcQmVGaXQvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUNBQUE7QUNDSjs7QURDQTtFQUVJLDBCQUFBO0FDQ0o7O0FEQ0E7RUFDSSx3QkFBQTtBQ0VKOztBREFBO0VBRUksa0NBQUE7QUNFSjs7QURBSTtFQUNJLHVCQUFBO0VBQ0MsZUFBQTtBQ0VUOztBRENBO0VBQ0ksUUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUVBLHlEQUFBO0VBQ0EsNERBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FEQUk7RUFFSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ1I7O0FEQ1E7RUFFSSx1QkFBQTtBQ0FaOztBRENZO0VBRUksa0NBQUE7QUNBaEI7O0FETUk7RUFFRyxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0xQOztBRFlBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDVEo7O0FEVUk7RUFDSSxtQkFBQTtFQUVBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDVFI7O0FEV1k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNUaEI7O0FEV1k7RUFDSSxnQkFBQTtFQUNELFlBQUE7QUNUZjs7QURXWTtFQUNJLG1CQUFBO0FDVGhCOztBRFdZO0VBQ0ksbUJBQUE7QUNUaEI7O0FEV1k7RUFDSSxtQkFBQTtBQ1RoQjs7QURXWTtFQUNJLG1CQUFBO0FDVGhCOztBRGlCQTtFQUNJLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNkSjs7QURrQlE7RUFDSSx1QkFBQTtBQ2ZaOztBRG9CSTtFQUNJLG9CQUFBO0FDbEJSOztBRG1CUTtFQUNJLG1CQUFBO0FDakJaOztBRG9CUTtFQUNJLHVCQUFBO0VBQ0EsbUJBQUE7QUNsQlo7O0FEc0JRO0VBQ0ksNEJBQUE7RUFDQSxZQUFBO0FDcEJaOztBRHNCUTtFQUNJLHVCQUFBO0FDcEJaOztBRHlCQTtFQUNJLHVCQUFBO0FDdEJKOztBRHdCQTtFQUNJLGVBQUE7QUNyQko7O0FEd0JBO0VBQ0ksZ0JBQUE7QUNyQko7O0FEdUJBO0VBRVEsa0JBQUE7RUFFQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDdEJSOztBRHlCQTtFQUNJLGtCQUFBO0VBRUEsZUFBQTtFQUNBLFdBQUE7QUN2Qko7O0FEeUJBO0VBQ0ksVUFBQTtBQ3RCSjs7QUR3QkE7RUFDSSxzQkFBQTtFQUVBLFlBQUE7RUFDQSxlQUFBO0FDdEJKOztBRHVCQTtFQUNJLHVCQUFBO0FDckJKOztBRHdCQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQ3JCSjs7QURzQkk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ3BCUjs7QURzQkk7RUFDSSxjQUFBO0VBRUEsV0FBQTtBQ3JCUjs7QUR1QlE7RUFDSSxpQkFBQTtBQ3JCWjs7QURzQlk7RUFDSSxpQkFBQTtBQ3BCaEI7O0FEeUJBO0VBQ0ksY0FBQTtBQ3ZCSjs7QUQwQkk7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0VBRUEsNERBQUE7QUN6QlI7O0FEMEJRO0VBQ0ksa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUN4Qlo7O0FENkJZO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUMzQmhCOztBRCtCSTtFQUNJLG9CQUFBO0VBQ0EsNERBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDN0JSOztBRDhCUTtFQUNJLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDNUJaOztBRGlDWTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDL0JoQjs7QURtQ0k7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FDakNSOztBRGtDUTtFQUNJLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDaENaOztBRHFDWTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDbkNoQjs7QUR3Q0c7RUFDQyxjQUFBO0FDdENKOztBRHdDTztFQUNDLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUN0Q1I7O0FEd0NPO0VBQ0Msd0JBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ3RDUjs7QUR3Q087RUFDQyx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDdENSOztBRHdDTztFQUNDLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDdENSOztBRDBDTztFQUNDLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDeENSOztBRDBDTztFQUNDLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDeENSOztBRDBDTztFQUNDLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDeENSOztBRDRDTztFQUNDLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDMUNSOztBRDRDTztFQUNDLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDMUNSOztBRDZDRztFQUNLLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQzNDUjs7QUQ0Q1E7RUFDSSx1QkFBQTtBQzFDWjs7QURnREE7RUFJUTtJQUVBLGtCQUFBO0VDakROO0VEa0RNO0lBRUksa0JBQUE7RUNqRFY7RURtRE07SUFFSSxrQkFBQTtJQUNBLFNBQUE7RUNsRFY7RURxRE07SUFFSSxrQkFBQTtJQUNBLFdBQUE7RUNwRFY7QUFDRjs7QUQ0REE7RUFJUTtJQUVJLGtCQUFBO0VDOURWO0VEK0RVO0lBRUksa0JBQUE7RUM5RGQ7RURnRVU7SUFFSSxrQkFBQTtJQUNBLFFBQUE7RUMvRGQ7RURrRVU7SUFFSSxrQkFBQTtJQUNBLFdBQUE7RUNqRWQ7QUFDRjs7QUR5RUE7RUFJUTtJQUVJLGdCQUFBO0lBQ0EsNENBQUE7RUMzRVY7QUFDRjs7QURrRkE7RUFJTTtJQUVJLFdBQUE7RUNwRlI7RURzRkk7SUFFTSw0Q0FBQTtFQ3JGVjs7RUQ2Rk07SUFFSSxlQUFBO0lBQ0EsV0FBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RUMzRlY7O0VEOEZFO0lBR0ksa0JBQUE7SUFDQSxZQUFBO0VDN0ZOO0FBQ0Y7O0FEaUdBO0VBTVk7SUFFQyx1QkFBQTtJQUNBLHNCQUFBO0lBQ0EsMEJBQUE7SUFDQSx5QkFBQTtFQ3JHWDtFRHVHVTtJQUVDLHVCQUFBO0lBQ0Esc0JBQUE7SUFDQSwwQkFBQTtJQUNBLHlCQUFBO0VDdEdYO0VEd0dVO0lBRUMsdUJBQUE7SUFDQSxzQkFBQTtJQUNBLDBCQUFBO0lBQ0EseUJBQUE7RUN2R1g7RUR5R1U7SUFFQyx1QkFBQTtJQUNBLHNCQUFBO0lBQ0EsMEJBQUE7SUFDQSx5QkFBQTtFQ3hHWDtFRDBHVTtJQUVDLHVCQUFBO0lBQ0Esc0JBQUE7SUFDQSwwQkFBQTtJQUNBLHlCQUFBO0VDekdYO0VEMkdVO0lBRUMsdUJBQUE7SUFDQSxzQkFBQTtJQUNBLDBCQUFBO0lBQ0EseUJBQUE7RUMxR1g7RUQ0R1U7SUFFQyx1QkFBQTtJQUNBLHNCQUFBO0lBQ0EsMEJBQUE7SUFDQSx5QkFBQTtFQzNHWDtFRDZHVTtJQUVDLHVCQUFBO0lBQ0Esc0JBQUE7SUFDQSwwQkFBQTtJQUNBLHlCQUFBO0VDNUdYO0VEOEdVO0lBRUMsdUJBQUE7SUFDQSxzQkFBQTtJQUNBLDBCQUFBO0lBQ0EseUJBQUE7RUM3R1g7QUFDRjs7QURxSEE7RUFBUSxnQkFBQTtBQ2xIUiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290e1xyXG4gICAgLS1tYWluY29sb3JOYXY6IHZhcigtLW1haW5jb2xvck5hdik7XHJcbn1cclxuYVxyXG57XHJcbiAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxufVxyXG50ZXh0YXJlYTpmb2N1cywgaW5wdXQ6Zm9jdXMgLGJ1dHRvbjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxubmd4LXNwaW5uZXJcclxue1xyXG4gICAgY29sb3I6IHZhcigtLW1haW5jb2xvcikgIWltcG9ydGFudDtcclxuICAgIFxyXG4gICAgcHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tbWFpbmNvbG9yKTtcclxuICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG59XHJcbiNuYXZiYXJ7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGJhY2tncm91bmQ6cmdiKDM4LCAzOCwgMzgpIDtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgXHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuMSkhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjEpIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDo3JTtcclxuICAgIHBhZGRpbmctcmlnaHQ6NyU7XHJcbiAgICAubmF2LWl0ZW1cclxuICAgIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgICAgICBcclxuICAgICAgICAubmF2LWxpbmtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAmOmhvdmVyXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1tYWluY29sb3IpICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5sb2dpblxyXG4gICAge1xyXG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbmNvbG9yKTtcclxuICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgIHdpZHRoOiAxMTVweDtcclxuICAgICB9XHJcbiAgIFxyXG5cclxuICAgXHJcbiAgICBcclxufVxyXG4uc2V0dGluZ3tcclxuICAgIG1hcmdpbi10b3A6IDIwMHB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgY29sb3I6IHZhcigtLW1haW5jb2xvcikgO1xyXG4gICAgei1pbmRleDogOTk5OTg7XHJcbiAgICAuY29sb3JCb3h7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDYwLCA2MCwgNjApIDtcclxuICAgICAgICBcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxOHB4OyBcclxuICAgICAgICB1bHtcclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1cHggO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaDZ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnJlZHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyMDQsIDY0LCA3NCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJsdWV7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoODUsIDE4NSwgMjQ0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZ3JlZW57XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoOTksIDE5NywgODgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kZWZ1bHR7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOnJnYigyMjcsIDEwOCwgODEpICA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIH0gIFxyXG4gICAgXHJcbiAgICBcclxufVxyXG4jU2Nyb2xsVXB7XHJcbiAgICBiYWNrZ3JvdW5kOnZhcigtLW1haW5jb2xvcikgO1xyXG4gICAgei1pbmRleDogOTk5OTk7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5tb2RhbC1jb250ZW50e1xyXG4gICAgLm1vZGFsLWhlYWRlcntcclxuICAgICAgICBoM3tcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLW1haW5jb2xvcik7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC5tb2RhbC1ib2R5e1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIC5tYXJnaW4tYm90dG9te1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgLmZhLXVzZXItbyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1tYWluY29sb3IpO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5tb2RhbC1mb290ZXJ7XHJcbiAgICAgICAgLmJ1dHRvbi1Mb2d7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW5jb2xvcik7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ1dHRvbi1jYW5jZWx7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1tYWluY29sb3IpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmZvcmdldFBhc3MsLkNyZWF0ZXtcclxuICAgIGNvbG9yOiB2YXIoLS1tYWluY29sb3IpO1xyXG59XHJcbi5DcmVhdGV7XHJcbiAgICBtYXJnaW4tbGVmdDogMyU7XHJcbn1cclxuXHJcbi5mb3JnZXRQYXNze1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQyJTtcclxufVxyXG4ucHJvZmlsZXBob3Rve1xyXG4gICAgXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQ6IHVybCgnc3JjL2Fzc2V0cy91c2VyLmpwZycpIDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICBcclxufVxyXG4ucHJvZ3Jlc3N7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7IFxyXG5cclxuICAgIG1hcmdpbi10b3A6IDEyJTsgXHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uYnRuLXN1Y2Nlc3N7XHJcbiAgICBoZWlnaHQ6IDUlO1xyXG59XHJcbi5uYXZiYXItYnJhbmQge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiO1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6IC0xMjJweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuLkZpdExvZ297XHJcbiAgICBjb2xvcjogdmFyKC0tbWFpbmNvbG9yKTtcclxufVxyXG59XHJcbmZvb3RlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjI2MjY7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBoM3tcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDExJTtcclxuICAgIH1cclxuICAgIC5jb250YWN0c3tcclxuICAgICAgICBtYXJnaW4tdG9wOiA2JTtcclxuICAgICAgICBcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBcclxuICAgICAgICBkaXZ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDYlO1xyXG4gICAgICAgICAgICBpe1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4uUmVjZW50UG9zdHN7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIFxyXG4gICAgXHJcbiAgICAuRnJpc3RQb3N0e1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC4xKSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLnBob3Rve1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnc3JjL2Fzc2V0cy9GcmlzdFBvc3QuanBnJykgO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNzVweDtcclxuICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAuTmFtZXtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDoyMHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgLlNlY29uZFBvc3R7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjEpIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgICAgICAucGhvdG97XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCdzcmMvYXNzZXRzL1NlY29uZFBvc3QuanBnJykgO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNzVweDtcclxuICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAuTmFtZXtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDoyMHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgLlRoaXJkUG9zdHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAucGhvdG97XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCdzcmMvYXNzZXRzL1RoaXJkUG9zdC5qcGcnKSA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIC5OYW1le1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjIwcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgXHJcbiAgICB9XHJcbn1cclxuICAgLkxhdGVzdFByb2plY3Rze1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgIFxyXG4gICAgICAgLm9uZXtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJ3NyYy9hc3NldHMvMS5qcGcnKSA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA4NXB4O1xyXG4gICAgICAgIHdpZHRoOiA4NXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgICAgIH1cclxuICAgICAgIC50d297XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKCdzcmMvYXNzZXRzLzIuanBnJykgO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogODVweDtcclxuICAgICAgICB3aWR0aDogODVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNSVcclxuICAgICAgIH1cclxuICAgICAgIC50aHJlZXtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJ3NyYy9hc3NldHMvMy5qcGcnKSA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA4NXB4O1xyXG4gICAgICAgIHdpZHRoOiA4NXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgICAgIH1cclxuICAgICAgIC5mb3Vye1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgnc3JjL2Fzc2V0cy80LmpwZycpIDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDg1cHg7XHJcbiAgICAgICAgd2lkdGg6IDg1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUlO1xyXG5cclxuXHJcbiAgICAgICB9XHJcbiAgICAgICAuZml2ZXtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJ3NyYy9hc3NldHMvNS5qcGcnKSA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA4NXB4O1xyXG4gICAgICAgIHdpZHRoOiA4NXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgICAgIH1cclxuICAgICAgIC5zaXh7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKCdzcmMvYXNzZXRzLzYuanBnJykgO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogODVweDtcclxuICAgICAgICB3aWR0aDogODVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICAgICB9XHJcbiAgICAgICAuc2V2ZW57XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKCdzcmMvYXNzZXRzLzcuanBnJykgO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogODVweDtcclxuICAgICAgICB3aWR0aDogODVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNSU7XHJcblxyXG5cclxuICAgICAgIH1cclxuICAgICAgIC5laWdodHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJ3NyYy9hc3NldHMvOC5qcGcnKSA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA4NXB4O1xyXG4gICAgICAgIHdpZHRoOiA4NXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgICAgIH1cclxuICAgICAgIC5uaW5le1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgnc3JjL2Fzc2V0cy85LmpwZycpIDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDg1cHg7XHJcbiAgICAgICAgd2lkdGg6IDg1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgICAgfVxyXG4gICB9XHJcbiAgIC5jb3B5cmlnaHR7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzIyMjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNDdweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICBib3R0b206IDBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgICAgICAuRml0e1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbWFpbmNvbG9yKTtcclxuICAgICAgICB9XHJcbn1cclxuICAgXHJcbn0gICBcclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KVxyXG57XHJcbiAgICAjbmF2YmFyXHJcbiAgICB7XHJcbiAgICAgICAgLm5hdmJhci1jb2xsYXBzZVxyXG4gICAge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAubmF2YmFyLWNvbGxhcHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uYXZiYXItbmF2LXVsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDIyJTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uYXZiYXItbmF2LWZvcm1cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDE1cHg7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICAgXHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KVxyXG57XHJcbiAgICAjbmF2YmFyXHJcbiAgICB7XHJcbiAgICAgICAgLm5hdmJhci1jb2xsYXBzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAubmF2YmFyLWNvbGxhcHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubmF2YmFyLW5hdi11bFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA4JTtcclxuICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5uYXZiYXItbmF2LWZvcm1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDE1cHg7XHJcbiAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICBcclxuXHJcbiAgICB9XHJcblxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweClcclxue1xyXG4gICAgI25hdmJhclxyXG4gICAge1xyXG4gICAgICAgIC5uYXZiYXItY29sbGFwc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6cmdiKDM4LCAzOCwgMzggLCAwLjUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSBcclxue1xyXG4gICAgI25hdmJhclxyXG4gICAge1xyXG4gICAgICAubG9naW5cclxuICAgICAge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgLm5hdmJhci1jb2xsYXBzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDpyZ2IoMzgsIDM4LCAzOCAsIDAuNSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICBcclxuXHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgfVxyXG4gICAgI0xvZ2luTW9kZWxcclxuICAgIHtcclxuICAgICAgICBhXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICNTaWduaW5cclxuICAgIHtcclxuXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuIFxyXG5cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ5OXB4KSBcclxue1xyXG4gICAgZm9vdGVye1xyXG5cclxuICAgICAgICAuTGF0ZXN0UHJvamVjdHNcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC5vbmVcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgaGVpZ2h0OiA3NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICB3aWR0aDogODBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50d29cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgaGVpZ2h0OiA3NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICB3aWR0aDogODBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50aHJlZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICBoZWlnaHQ6IDc1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgIHdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMiUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZvdXJcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgaGVpZ2h0OiA3NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICB3aWR0aDogODBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5maXZlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgIGhlaWdodDogNzVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgbWFyZ2luLXRvcDogMiUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2l4XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgIGhlaWdodDogNzVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgbWFyZ2luLXRvcDogMiUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2V2ZW5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgaGVpZ2h0OiA3NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICB3aWR0aDogODBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5laWdodFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICBoZWlnaHQ6IDc1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgIHdpZHRoOiA4MHB4IWltcG9ydGFudDtcclxuICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgbWFyZ2luLXRvcDogMiUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubmluZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICBoZWlnaHQ6IDgwcHghaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgbWFyZ2luLXRvcDogMiUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgfSAgIFxyXG4gICAgXHJcblxyXG59XHJcblxyXG4jU2lnbmlue292ZXJmbG93LXk6IGF1dG87fVxyXG4iLCI6cm9vdCB7XG4gIC0tbWFpbmNvbG9yTmF2OiB2YXIoLS1tYWluY29sb3JOYXYpO1xufVxuXG5hIHtcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG59XG5cbnRleHRhcmVhOmZvY3VzLCBpbnB1dDpmb2N1cywgYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5uZ3gtc3Bpbm5lciB7XG4gIGNvbG9yOiB2YXIoLS1tYWluY29sb3IpICFpbXBvcnRhbnQ7XG59XG5uZ3gtc3Bpbm5lciBwIHtcbiAgY29sb3I6IHZhcigtLW1haW5jb2xvcik7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuI25hdmJhciB7XG4gIHRvcDogMHB4O1xuICBiYWNrZ3JvdW5kOiAjMjYyNjI2O1xuICBoZWlnaHQ6IDcwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDclO1xuICBwYWRkaW5nLXJpZ2h0OiA3JTtcbn1cbiNuYXZiYXIgLm5hdi1pdGVtIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIG1hcmdpbi1yaWdodDogNSU7XG59XG4jbmF2YmFyIC5uYXYtaXRlbSAubmF2LWxpbmsge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbiNuYXZiYXIgLm5hdi1pdGVtIC5uYXYtbGluazpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1tYWluY29sb3IpICFpbXBvcnRhbnQ7XG59XG4jbmF2YmFyIC5sb2dpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5jb2xvcik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMTE1cHg7XG59XG5cbi5zZXR0aW5nIHtcbiAgbWFyZ2luLXRvcDogMjAwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgY29sb3I6IHZhcigtLW1haW5jb2xvcik7XG4gIHotaW5kZXg6IDk5OTk4O1xufVxuLnNldHRpbmcgLmNvbG9yQm94IHtcbiAgYmFja2dyb3VuZDogIzNjM2MzYztcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nLXRvcDogMThweDtcbn1cbi5zZXR0aW5nIC5jb2xvckJveCB1bCBsaSB7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5zZXR0aW5nIC5jb2xvckJveCB1bCAuaDYge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4uc2V0dGluZyAuY29sb3JCb3ggdWwgLnJlZCB7XG4gIGJhY2tncm91bmQ6ICNjYzQwNGE7XG59XG4uc2V0dGluZyAuY29sb3JCb3ggdWwgLmJsdWUge1xuICBiYWNrZ3JvdW5kOiAjNTViOWY0O1xufVxuLnNldHRpbmcgLmNvbG9yQm94IHVsIC5ncmVlbiB7XG4gIGJhY2tncm91bmQ6ICM2M2M1NTg7XG59XG4uc2V0dGluZyAuY29sb3JCb3ggdWwgLmRlZnVsdCB7XG4gIGJhY2tncm91bmQ6ICNlMzZjNTE7XG59XG5cbiNTY3JvbGxVcCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW5jb2xvcik7XG4gIHotaW5kZXg6IDk5OTk5O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAyMHB4O1xuICBib3R0b206IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWhlYWRlciBoMyB7XG4gIGNvbG9yOiB2YXIoLS1tYWluY29sb3IpO1xufVxuLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWJvZHkge1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbi5tb2RhbC1jb250ZW50IC5tb2RhbC1ib2R5IC5tYXJnaW4tYm90dG9tIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5tb2RhbC1jb250ZW50IC5tb2RhbC1ib2R5IC5mYS11c2VyLW8ge1xuICBjb2xvcjogdmFyKC0tbWFpbmNvbG9yKTtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbi5tb2RhbC1jb250ZW50IC5tb2RhbC1mb290ZXIgLmJ1dHRvbi1Mb2cge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluY29sb3IpO1xuICBjb2xvcjogd2hpdGU7XG59XG4ubW9kYWwtY29udGVudCAubW9kYWwtZm9vdGVyIC5idXR0b24tY2FuY2VsIHtcbiAgY29sb3I6IHZhcigtLW1haW5jb2xvcik7XG59XG5cbi5mb3JnZXRQYXNzLCAuQ3JlYXRlIHtcbiAgY29sb3I6IHZhcigtLW1haW5jb2xvcik7XG59XG5cbi5DcmVhdGUge1xuICBtYXJnaW4tbGVmdDogMyU7XG59XG5cbi5mb3JnZXRQYXNzIHtcbiAgbWFyZ2luLWxlZnQ6IDQyJTtcbn1cblxuLnByb2ZpbGVwaG90byB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG59XG5cbi5wcm9ncmVzcyB7XG4gIG1hcmdpbi1ib3R0b206IDEwJTtcbiAgbWFyZ2luLXRvcDogMTIlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJ0bi1zdWNjZXNzIHtcbiAgaGVpZ2h0OiA1JTtcbn1cblxuLm5hdmJhci1icmFuZCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDI4cHg7XG59XG4ubmF2YmFyLWJyYW5kIC5GaXRMb2dvIHtcbiAgY29sb3I6IHZhcigtLW1haW5jb2xvcik7XG59XG5cbmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjI2MjY7XG4gIGhlaWdodDogYXV0bztcbn1cbmZvb3RlciBoMyB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDI1cHg7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTElO1xufVxuZm9vdGVyIC5jb250YWN0cyB7XG4gIG1hcmdpbi10b3A6IDYlO1xuICBjb2xvcjogI2ZmZjtcbn1cbmZvb3RlciAuY29udGFjdHMgZGl2IHtcbiAgbWFyZ2luLWJvdHRvbTogNiU7XG59XG5mb290ZXIgLmNvbnRhY3RzIGRpdiBpIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG59XG5mb290ZXIgLlJlY2VudFBvc3RzIHtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5mb290ZXIgLlJlY2VudFBvc3RzIC5GcmlzdFBvc3Qge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgIWltcG9ydGFudDtcbn1cbmZvb3RlciAuUmVjZW50UG9zdHMgLkZyaXN0UG9zdCAucGhvdG8ge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvRnJpc3RQb3N0LmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGhlaWdodDogNzVweDtcbiAgd2lkdGg6IDc1cHg7XG59XG5mb290ZXIgLlJlY2VudFBvc3RzIC5GcmlzdFBvc3QgLk5hbWUge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuZm9vdGVyIC5SZWNlbnRQb3N0cyAuU2Vjb25kUG9zdCB7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cbmZvb3RlciAuUmVjZW50UG9zdHMgLlNlY29uZFBvc3QgLnBob3RvIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL1NlY29uZFBvc3QuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgaGVpZ2h0OiA3NXB4O1xuICB3aWR0aDogNzVweDtcbn1cbmZvb3RlciAuUmVjZW50UG9zdHMgLlNlY29uZFBvc3QgLk5hbWUge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuZm9vdGVyIC5SZWNlbnRQb3N0cyAuVGhpcmRQb3N0IHtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuZm9vdGVyIC5SZWNlbnRQb3N0cyAuVGhpcmRQb3N0IC5waG90byB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9UaGlyZFBvc3QuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgaGVpZ2h0OiA3NXB4O1xuICB3aWR0aDogNzVweDtcbn1cbmZvb3RlciAuUmVjZW50UG9zdHMgLlRoaXJkUG9zdCAuTmFtZSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5mb290ZXIgLkxhdGVzdFByb2plY3RzIHtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5mb290ZXIgLkxhdGVzdFByb2plY3RzIC5vbmUge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzLzEuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgaGVpZ2h0OiA4NXB4O1xuICB3aWR0aDogODVweDtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuZm9vdGVyIC5MYXRlc3RQcm9qZWN0cyAudHdvIHtcbiAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy8yLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGhlaWdodDogODVweDtcbiAgd2lkdGg6IDg1cHg7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cbmZvb3RlciAuTGF0ZXN0UHJvamVjdHMgLnRocmVlIHtcbiAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy8zLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGhlaWdodDogODVweDtcbiAgd2lkdGg6IDg1cHg7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cbmZvb3RlciAuTGF0ZXN0UHJvamVjdHMgLmZvdXIge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzLzQuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgaGVpZ2h0OiA4NXB4O1xuICB3aWR0aDogODVweDtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cbmZvb3RlciAuTGF0ZXN0UHJvamVjdHMgLmZpdmUge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzLzUuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgaGVpZ2h0OiA4NXB4O1xuICB3aWR0aDogODVweDtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cbmZvb3RlciAuTGF0ZXN0UHJvamVjdHMgLnNpeCB7XG4gIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvNi5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBoZWlnaHQ6IDg1cHg7XG4gIHdpZHRoOiA4NXB4O1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuZm9vdGVyIC5MYXRlc3RQcm9qZWN0cyAuc2V2ZW4ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzLzcuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgaGVpZ2h0OiA4NXB4O1xuICB3aWR0aDogODVweDtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cbmZvb3RlciAuTGF0ZXN0UHJvamVjdHMgLmVpZ2h0IHtcbiAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy84LmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGhlaWdodDogODVweDtcbiAgd2lkdGg6IDg1cHg7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5mb290ZXIgLkxhdGVzdFByb2plY3RzIC5uaW5lIHtcbiAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy85LmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGhlaWdodDogODVweDtcbiAgd2lkdGg6IDg1cHg7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5mb290ZXIgLmNvcHlyaWdodCB7XG4gIGJhY2tncm91bmQ6ICMyMjI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ3cHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBib3R0b206IDBweDtcbiAgbWFyZ2luLXRvcDogMyU7XG59XG5mb290ZXIgLmNvcHlyaWdodCAuRml0IHtcbiAgY29sb3I6IHZhcigtLW1haW5jb2xvcik7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICNuYXZiYXIgLm5hdmJhci1jb2xsYXBzZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gICNuYXZiYXIgLm5hdmJhci1jb2xsYXBzZSAubmF2YmFyLWNvbGxhcHNlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbiAgI25hdmJhciAubmF2YmFyLWNvbGxhcHNlIC5uYXZiYXItbmF2LXVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMjIlO1xuICB9XG4gICNuYXZiYXIgLm5hdmJhci1jb2xsYXBzZSAubmF2YmFyLW5hdi1mb3JtIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDE1cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgI25hdmJhciAubmF2YmFyLWNvbGxhcHNlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgI25hdmJhciAubmF2YmFyLWNvbGxhcHNlIC5uYXZiYXItY29sbGFwc2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuICAjbmF2YmFyIC5uYXZiYXItY29sbGFwc2UgLm5hdmJhci1uYXYtdWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA4JTtcbiAgfVxuICAjbmF2YmFyIC5uYXZiYXItY29sbGFwc2UgLm5hdmJhci1uYXYtZm9ybSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxNXB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgI25hdmJhciAubmF2YmFyLWNvbGxhcHNlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMzgsIDM4LCAzOCwgMC41KSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICNuYXZiYXIgLmxvZ2luIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAjbmF2YmFyIC5uYXZiYXItY29sbGFwc2Uge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMzgsIDM4LCAzOCwgMC41KSAhaW1wb3J0YW50O1xuICB9XG5cbiAgI0xvZ2luTW9kZWwgYSB7XG4gICAgbWFyZ2luLWxlZnQ6IDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gICNTaWduaW4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDk5cHgpIHtcbiAgZm9vdGVyIC5MYXRlc3RQcm9qZWN0cyAub25lIHtcbiAgICBoZWlnaHQ6IDc1cHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogODBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAyJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDIlICFpbXBvcnRhbnQ7XG4gIH1cbiAgZm9vdGVyIC5MYXRlc3RQcm9qZWN0cyAudHdvIHtcbiAgICBoZWlnaHQ6IDc1cHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogODBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAyJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDIlICFpbXBvcnRhbnQ7XG4gIH1cbiAgZm9vdGVyIC5MYXRlc3RQcm9qZWN0cyAudGhyZWUge1xuICAgIGhlaWdodDogNzVweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDIlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMiUgIWltcG9ydGFudDtcbiAgfVxuICBmb290ZXIgLkxhdGVzdFByb2plY3RzIC5mb3VyIHtcbiAgICBoZWlnaHQ6IDc1cHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogODBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAyJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDIlICFpbXBvcnRhbnQ7XG4gIH1cbiAgZm9vdGVyIC5MYXRlc3RQcm9qZWN0cyAuZml2ZSB7XG4gICAgaGVpZ2h0OiA3NXB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMiUgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAyJSAhaW1wb3J0YW50O1xuICB9XG4gIGZvb3RlciAuTGF0ZXN0UHJvamVjdHMgLnNpeCB7XG4gICAgaGVpZ2h0OiA3NXB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMiUgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAyJSAhaW1wb3J0YW50O1xuICB9XG4gIGZvb3RlciAuTGF0ZXN0UHJvamVjdHMgLnNldmVuIHtcbiAgICBoZWlnaHQ6IDc1cHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogODBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAyJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDIlICFpbXBvcnRhbnQ7XG4gIH1cbiAgZm9vdGVyIC5MYXRlc3RQcm9qZWN0cyAuZWlnaHQge1xuICAgIGhlaWdodDogNzVweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDMlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMiUgIWltcG9ydGFudDtcbiAgfVxuICBmb290ZXIgLkxhdGVzdFByb2plY3RzIC5uaW5lIHtcbiAgICBoZWlnaHQ6IDgwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogODBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAyJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDIlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiNTaWduaW4ge1xuICBvdmVyZmxvdy15OiBhdXRvO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { LoginModel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['LoginModel']
        }] }); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_wow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-wow */ "./node_modules/ngx-wow/__ivy_ngcc__/esm2015/ngx-wow.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _AllComponents_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AllComponents/home/home.component */ "./src/app/AllComponents/home/home.component.ts");
/* harmony import */ var _AllComponents_foods_foods_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AllComponents/foods/foods.component */ "./src/app/AllComponents/foods/foods.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/__ivy_ngcc__/fesm2015/ng6-toastr-notifications.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _AllComponents_exrecise_exrecise_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./AllComponents/exrecise/exrecise.component */ "./src/app/AllComponents/exrecise/exrecise.component.ts");
/* harmony import */ var _AllComponents_calories_calories_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./AllComponents/calories/calories.component */ "./src/app/AllComponents/calories/calories.component.ts");
/* harmony import */ var _AllComponents_profile_profile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./AllComponents/profile/profile.component */ "./src/app/AllComponents/profile/profile.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var jw_angular_pagination__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! jw-angular-pagination */ "./node_modules/jw-angular-pagination/__ivy_ngcc__/fesm2015/jw-angular-pagination.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _AllComponents_profile_plan_plan_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./AllComponents/profile/plan/plan.component */ "./src/app/AllComponents/profile/plan/plan.component.ts");


























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_21__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_21__["HashLocationStrategy"] }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ngx_wow__WEBPACK_IMPORTED_MODULE_2__["NgwWowModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebaseConfig),
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_14__["AngularFireDatabaseModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot(),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__["AngularFirestoreModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__["AngularFireAuthModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_18__["NgxPaginationModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_19__["NgxSpinnerModule"],
            jw_angular_pagination__WEBPACK_IMPORTED_MODULE_20__["JwPaginationModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _AllComponents_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _AllComponents_foods_foods_component__WEBPACK_IMPORTED_MODULE_6__["foodsComponent"],
        _AllComponents_exrecise_exrecise_component__WEBPACK_IMPORTED_MODULE_15__["ExreciseComponent"],
        _AllComponents_calories_calories_component__WEBPACK_IMPORTED_MODULE_16__["CaloriesComponent"],
        _AllComponents_profile_profile_component__WEBPACK_IMPORTED_MODULE_17__["ProfileComponent"],
        _AllComponents_profile_plan_plan_component__WEBPACK_IMPORTED_MODULE_22__["PlanComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        ngx_wow__WEBPACK_IMPORTED_MODULE_2__["NgwWowModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_14__["AngularFireDatabaseModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__["AngularFirestoreModule"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__["AngularFireAuthModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_18__["NgxPaginationModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_19__["NgxSpinnerModule"],
        jw_angular_pagination__WEBPACK_IMPORTED_MODULE_20__["JwPaginationModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _AllComponents_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                    _AllComponents_foods_foods_component__WEBPACK_IMPORTED_MODULE_6__["foodsComponent"],
                    _AllComponents_exrecise_exrecise_component__WEBPACK_IMPORTED_MODULE_15__["ExreciseComponent"],
                    _AllComponents_calories_calories_component__WEBPACK_IMPORTED_MODULE_16__["CaloriesComponent"],
                    _AllComponents_profile_profile_component__WEBPACK_IMPORTED_MODULE_17__["ProfileComponent"],
                    _AllComponents_profile_plan_plan_component__WEBPACK_IMPORTED_MODULE_22__["PlanComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    ngx_wow__WEBPACK_IMPORTED_MODULE_2__["NgwWowModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebaseConfig),
                    _angular_fire_database__WEBPACK_IMPORTED_MODULE_14__["AngularFireDatabaseModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot(),
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                    _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__["AngularFirestoreModule"],
                    _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__["AngularFireAuthModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_18__["NgxPaginationModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_19__["NgxSpinnerModule"],
                    jw_angular_pagination__WEBPACK_IMPORTED_MODULE_20__["JwPaginationModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
                ],
                providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_21__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_21__["HashLocationStrategy"] }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/bodygard.guard.ts":
/*!***********************************!*\
  !*** ./src/app/bodygard.guard.ts ***!
  \***********************************/
/*! exports provided: BodygardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodygardGuard", function() { return BodygardGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Service//auth.service */ "./src/app/Service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class BodygardGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate(next, state) {
        if (this.auth.IsLoggedIn()) {
            return true;
        }
        document.getElementById("logshow").click();
        return false;
    }
}
BodygardGuard.ɵfac = function BodygardGuard_Factory(t) { return new (t || BodygardGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
BodygardGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BodygardGuard, factory: BodygardGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BodygardGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


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
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyDVZ_1-vFuwLcNJAsrogDwAPdRC_3pzDxo",
        authDomain: "be-fit-8f8b6.firebaseapp.com",
        databaseURL: "https://be-fit-8f8b6.firebaseio.com",
        projectId: "be-fit-8f8b6",
        storageBucket: "be-fit-8f8b6.appspot.com",
        messagingSenderId: "1065414896086",
        appId: "1:1065414896086:web:aee1cd76b920222e995c77",
        measurementId: "G-HBWTMBQ8T0"
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\compa\Downloads\github projects\Be-Fit\BeFit\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map