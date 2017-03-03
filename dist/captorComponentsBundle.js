/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inputText = __webpack_require__(5);

var _inputDropdown = __webpack_require__(3);

var _tinyMCE = __webpack_require__(11);

var _saveButton = __webpack_require__(9);

var _datepicker = __webpack_require__(1);

var _radioButton = __webpack_require__(7);

// import angular from 'angular';
__webpack_require__(13);

exports.default = angular.module('captorAngularElements', ['ngAnimate', 'toastr', 'ngSanitize', 'ui.bootstrap', 'ui.mask', 'ui.tinymce', 'angularjs-dropdown-multiselect', 'ui.bootstrap.datetimepicker']).component('captorInputText', _inputText.InputTextComponent).component('captorMultiselectDropdown', _inputDropdown.InputDropdownComponent).component('captorTinymce', _tinyMCE.TinyMCEComponent).component('captorSavebutton', _saveButton.SaveButtonComponent).component('captorDatepicker', _datepicker.DatepickerComponent).component('captorRadiobutton', _radioButton.RadioButtonComponent).name;


angular.module('captorAngularElements').config(['$provide', Decorate]);
function Decorate($provide) {
  $provide.decorator('$locale', function ($delegate) {
    var value = $delegate.DATETIME_FORMATS;
    value.SHORTDAY = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    return $delegate;
  });
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DatepickerComponent = undefined;

var _datepicker = __webpack_require__(2);

var templateUrl = __webpack_require__(14);

var DatepickerComponent = exports.DatepickerComponent = {
    templateUrl: templateUrl,
    controller: _datepicker.DatepickerController,
    controllerAs: 'vm',
    require: {
        parent: '^^form'
    },
    bindings: {
        dateFormat: "@",
        minDate: "@",
        maxDate: "@",
        hideTime: "<",
        dateDisabled: "@",
        isDisabled: "@",
        minTime: "@",
        maxTime: "@",
        readonlyDate: "@",
        readonlyTime: "@",
        showMeridian: "@",
        label: "@",
        placeholder: "@",
        name: "@",
        value: "=",
        isRequired: "@"
    }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DatepickerController = function () {
    function DatepickerController() {
        _classCallCheck(this, DatepickerController);
    }

    _createClass(DatepickerController, [{
        key: "$onInit",
        value: function $onInit() {
            this.placeholder = this.placeholder == undefined ? "Select Date" : this.placeholder;
            this.name = this.name == undefined ? "datepicker" : this.name;
            this.dateFormat = this.dateFormat == undefined ? "MM/dd/yyyy" : this.dateFormat;
            this.openDatepicker = false;
            this.initDate = new Date();
            this.minDate = this.minDate != undefined ? new Date(this.minDate) : null;
            this.maxDate = this.maxDate != undefined ? new Date(this.maxDate) : null;
            this.dateOptions = {
                startingDay: 0,
                showWeeks: false,
                formatDay: 'd',
                initDate: this.initDate
                // minDate: this.minDate,
                // maxDate: this.maxDate
            };

            if (this.isRequired == "true") {
                this.requiredVal = true;
            } else {
                this.requiredVal = false;
            }
            // angular.element(document).find('.uib-datepicker-popup.')
            this.validateCaptorForm();
        }
    }, {
        key: "open",
        value: function open($event, opened) {
            $event.preventDefault();
            $event.stopPropagation();
            this.dateOpened = true;
        }
    }, {
        key: "validateCaptorForm",
        value: function validateCaptorForm() {
            this.validationError = '';
            if (this.requiredVal && (this.value == undefined || this.value == "")) {
                this.validationError = "This is a required field ";
                this.parent.$setValidity(this.name, false);
                return false;
            }
            this.validationError = '';
            this.parent.$setValidity(this.name, true);
            return true;
        }
    }, {
        key: "onclick",
        value: function onclick() {
            this.validateCaptorForm();
        }
    }, {
        key: "onChange",
        value: function onChange() {
            this.validateCaptorForm();
        }
    }, {
        key: "openPicker",
        value: function openPicker() {
            this.openDatepicker = true;
        }
    }]);

    return DatepickerController;
}();

exports.DatepickerController = DatepickerController;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InputDropdownComponent = undefined;

var _inputDropdown = __webpack_require__(4);

var templateUrl = __webpack_require__(15);

var InputDropdownComponent = exports.InputDropdownComponent = {
    templateUrl: templateUrl,
    controller: _inputDropdown.InputDropdownController,
    controllerAs: 'vm',
    require: {
        parent: '^^form'
    },
    bindings: {
        name: "@",
        label: "@",
        placeholder: "@",
        isRequired: "@",
        selectedVal: "=",
        value: "<",
        singleSelect: "@"
    }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InputDropdownController = function () {
    function InputDropdownController() {
        _classCallCheck(this, InputDropdownController);
    }

    _createClass(InputDropdownController, [{
        key: '$onInit',
        value: function $onInit() {

            // if(this.singleSelect == "true"){
            // this.selectedVal = {};
            this.showCheckUncheck = false;
            //     this.template = '<b>{{option.Description}}</b>';
            this.dropDownClass = 'customDropdown';
            // }else{
            this.selectedVal = [];
            //     this.showCheckUncheck = true;
            //     this.template='';
            //     this.dropDownClass = 'customDropdownMultiSelect';
            // }

            this.dropdownSettings = {
                externalIdProp: '',
                buttonClasses: 'form-control captorDropdownSingleSelect',
                enableSearch: true,
                scrollable: true,
                smartButtonMaxItems: 4,
                selectionLimit: 1,
                keyboardControls: true,
                displayProp: 'Description',
                idProp: 'Value',
                showCheckAll: this.showCheckUncheck,
                showUncheckAll: this.showCheckUncheck
            };

            // if(this.singleSelect == "true"){
            //     this.dropdownSettings.template = this.template
            // }

            this.translationTexts = {
                buttonDefaultText: this.placeholder
            };
            var self = this;
            this.dropdownEvents = {
                onSelectionChanged: function onSelectionChanged(item) {
                    self.validateCaptorForm();
                }
            };

            if (this.isRequired) {
                this.requiredVal = this.isRequired;
            }
            this.validateCaptorForm();
        }
    }, {
        key: 'validateCaptorForm',
        value: function validateCaptorForm() {
            this.validationError = '';
            if (this.requiredVal && (this.singleSelect == "false" && this.selectedVal.length == 0 || this.singleSelect == "true" && Object.keys(this.selectedVal).length == 0)) {
                this.validationError = "This is a required field ";
                this.parent.$setValidity(this.name, false);
                return false;
            }
            this.validationError = '';
            this.parent.$setValidity(this.name, true);
            return true;
        }
    }]);

    return InputDropdownController;
}();

exports.InputDropdownController = InputDropdownController;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InputTextComponent = undefined;

var _inputText = __webpack_require__(6);

var templateUrl = __webpack_require__(16);

var InputTextComponent = exports.InputTextComponent = {
    templateUrl: templateUrl,
    controller: _inputText.InputTextController,
    controllerAs: 'vm',
    require: {
        parent: '^^form'
    },
    bindings: {
        label: "@",
        minimumLength: "@",
        maximumLength: "@",
        placeholder: "@",
        type: "@",
        name: "@",
        value: "=",
        isRequired: "@",
        hideDisplay: "@"
    }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InputTextController = function () {
    function InputTextController() {
        _classCallCheck(this, InputTextController);
    }

    _createClass(InputTextController, [{
        key: "$onInit",
        value: function $onInit() {
            this.mask = "", this.regex = "", this.maskValue = false, this.readOnlyValue = false, this.readOnlyVal = "";

            if (!this.maximumLength) {
                this.maximumLength = 200;
            }
            if (this.isRequired == "true") {
                this.requiredVal = true;
            } else {
                this.requiredVal = false;
            }

            if (this.type == "email") {
                this.regex = "/^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/";
            } else {
                this.mask = "";
                this.regex = "";
            }

            //for readOnly input with hidden values except last 4 digits:
            if (this.type == "phone" || this.type == "ssn") {
                if (this.type == "phone") {
                    this.mask = "(999) 999-9999";
                } else if (this.type == "ssn") {
                    this.mask = "999-99-9999";
                }
                if (this.hideDisplay && this.value) {
                    this.mask = "";
                    this.readOnlyValue = true;
                    this.readOnlyVal = this.value;
                    if (this.type == "ssn") {
                        this.readOnlyVal = "XXX-XX-" + this.readOnlyVal.toString().slice(-4);
                    } else if (this.type == "phone") {
                        this.readOnlyVal = "(XXX) XXX-" + this.readOnlyVal.toString().slice(-4);
                    }
                    this.value = this.readOnlyVal;
                }
                this.type = "text";
            }

            this.validateCaptorForm();
        }
    }, {
        key: "onChange",
        value: function onChange() {
            try {
                if (this.value && this.maximumLength && this.value.length > this.maximumLength) {
                    this.value = this.value.substring(0, this.maximumLength);
                }
            } catch (e) {
                this.value = '';
            }
            this.validateCaptorForm();
        }
    }, {
        key: "validateCaptorForm",
        value: function validateCaptorForm() {
            this.validationError = '';
            if (this.requiredVal && !this.value) {
                this.validationError = "This is a required field ";
                return false;
            }
            if (this.value && this.minimumLength && this.value.length < this.minimumLength) {
                this.validationError = "has a minium length of " + this.minimumLength;
                return false;
            }
            if (this.type == "email" && this.value) {
                var regex = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm);
                this.validationError = "This Email Id is invalid";
                return regex.test(this.value);
            }
            this.validationError = '';
            return true;
        }
    }]);

    return InputTextController;
}();

exports.InputTextController = InputTextController;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RadioButtonComponent = undefined;

var _radioButton = __webpack_require__(8);

var templateUrl = __webpack_require__(17);

var RadioButtonComponent = exports.RadioButtonComponent = {
    templateUrl: templateUrl,
    controller: _radioButton.RadioButtonController,
    controllerAs: 'vm',
    require: {
        parent: '^^form'
    },
    bindings: {
        label: "@",
        name: "@",
        value: "=",
        isRequired: "@"
    }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RadioButtonController = function () {
    function RadioButtonController() {
        _classCallCheck(this, RadioButtonController);
    }

    _createClass(RadioButtonController, [{
        key: "$onInit",
        value: function $onInit() {

            if (this.isRequired == "true") {
                this.requiredVal = true;
            } else {
                this.requiredVal = false;
            }
            console.log(this.value);
            this.validateCaptorForm();
        }
    }, {
        key: "validateCaptorForm",
        value: function validateCaptorForm() {
            this.validationError = '';
            if (this.requiredVal) {
                this.validationError = "This is a required field ";
                return false;
            }
            this.validationError = '';
            return true;
        }
    }]);

    return RadioButtonController;
}();

exports.RadioButtonController = RadioButtonController;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SaveButtonComponent = undefined;

var _saveButton = __webpack_require__(10);

var templateUrl = __webpack_require__(18);

var SaveButtonComponent = exports.SaveButtonComponent = {
    templateUrl: templateUrl,
    controller: _saveButton.SaveButtonController,
    controllerAs: 'vm',
    require: {
        parent: '^^form'
    },
    bindings: {
        formName: "@",
        formSubmitMethod: "@",
        label: "@",
        formValid: "="
    }
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SaveButtonController = function () {
    function SaveButtonController(toastr) {
        _classCallCheck(this, SaveButtonController);

        this.toastr = toastr;
    }

    _createClass(SaveButtonController, [{
        key: '$onInit',
        value: function $onInit() {
            this.parentForm = this.parent;
            this.formValid = this.parent.$valid;
        }
    }, {
        key: 'save',
        value: function save(myForm) {
            console.log(myForm);
            if (!myForm.$valid) {
                myForm.$setSubmitted();
                return;
            } else {
                this.toastr.success('Form Submitted Successfully!!', {
                    'timeOut': 3000,
                    'progressBar': false,
                    'position-class': 'toast-top-right',
                    'target': 'body'
                });
            }
        }
    }]);

    return SaveButtonController;
}();

exports.SaveButtonController = SaveButtonController;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TinyMCEComponent = undefined;

var _tinyMCE = __webpack_require__(12);

var templateUrl = __webpack_require__(19);

var TinyMCEComponent = exports.TinyMCEComponent = {
    templateUrl: templateUrl,
    controller: _tinyMCE.TinyMCEController,
    controllerAs: 'vm',
    require: {
        parent: '^^form'
    },
    bindings: {
        label: "@",
        name: "@",
        value: "=",
        isRequired: "@",
        maxcharCount: "@",
        disabledBlock: "@"
    }
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TinyMCEController = function () {
    function TinyMCEController() {
        _classCallCheck(this, TinyMCEController);
    }

    _createClass(TinyMCEController, [{
        key: "$onInit",
        value: function $onInit() {
            var self = this;
            self.rem_Count = 0, self.char_Count = 0;
            self.minimumLength = 5;

            if (self.isRequired == "true") {
                self.requiredVal = true;
            } else {
                self.requiredVal = false;
            }

            self.tinymceOptions = {
                theme: "modern",
                skin: 'captor',
                plugins: self.disabledBlock == "true" ? 'autoresize link autolink' : 'wordcount link powerpaste autoresize autolink',
                default_link_target: "_blank",
                extended_valid_elements: "a[href|target=_blank]",
                oninit: "setPlainText",
                paste_as_text: true,
                spellchecker_language: 'en',
                autoresize_min_height: 150,
                autoresize_max_height: 150,
                powerpaste_word_import: 'clean',
                powerpaste_html_import: 'merge',
                wordcount_cleanregex: /[0-9.(),;:!?%#$?\x27\x22_+=\\/\-]*/g,
                browser_spellcheck: true,
                menubar: false,
                inline: false,
                forced_root_block: false,
                content_css: ['../css/apps-googlefont.min.css', '../css/tinymce.min.css'],
                readonly: self.disabledBlock == "true" ? true : false,
                toolbar: self.disabledBlock == "true" ? 'false' : "bold italic underline link",
                link_assume_external_targets: true,
                style_formats: [{
                    title: 'Bold text',
                    inline: 'b'
                }, {
                    title: 'Example 1',
                    inline: 'span',
                    classes: 'example1'
                }, {
                    title: 'Example 2',
                    inline: 'span',
                    classes: 'example2'
                }, {
                    title: 'Table styles'
                }, {
                    title: 'Table row 1',
                    selector: 'tr',
                    classes: 'tablerow1'
                }],
                link_class_list: [{
                    title: 'Hyperlink',
                    value: 'tinymce-hyperlink'
                }],
                init_instance_callback: function init_instance_callback(editor) {
                    var textContentTrigger = function textContentTrigger(e) {
                        var key = e.keyCode;
                        self.char_Count = self.getCharCount(editor.getBody().textContent);
                        self.rem_Count = parseInt(self.maxcharCount) - self.char_Count;

                        if (self.char_Count == parseInt(self.maxcharCount)) {
                            if (key != 8 && key != 46 && key != 37 && key != 38 && key != 39 && key != 40 && key != 17) {
                                //for backspace, delete, ctrlKey and arrow keys
                                var ctrlDown = false;
                                if (key != 17) {
                                    ctrlDown = true;
                                }
                                if (ctrlDown && (key == 67 || key == 88)) {
                                    //Allow Ctrl+c (Copy) and Ctrl+x (Cut) Shortcuts
                                } else {
                                    e.stopPropagation();
                                    e.preventDefault();
                                }
                            }
                        } else if (self.char_Count > parseInt(self.maxcharCount)) {
                            var spCount = self.getCountWithoutSpaces(editor.getBody().textContent, parseInt(self.maxcharCount));
                            self.value = editor.getBody().textContent;
                            console.log(parseInt(self.maxcharCount) + spCount);
                            self.value = self.value.slice(0, parseInt(self.maxcharCount) + spCount);
                            editor.setContent(self.value);
                        }
                        self.validateCaptorForm(self.value);
                    };

                    editor.on('KeyUp KeyDown KeyPress LoadContent Change NodeChange Paste', function (e) {
                        textContentTrigger(e);
                    });
                }
            };

            self.validateCaptorForm(self.value);
        }
    }, {
        key: "validateCaptorForm",
        value: function validateCaptorForm(editorValue) {
            this.validationError = '';
            var whiteSpaceRegExp = /\s/g,
                spChar = /&nbsp;/g;

            editorValue = editorValue.replace(spChar, '');
            editorValue = editorValue.replace(whiteSpaceRegExp, '');

            if (this.requiredVal && editorValue.length == 0) {
                this.validationError = "This is a required field ";
                this.parent.$setValidity('tinyMce', false);
                return false;
            }
            if (editorValue.length > 0 && editorValue.length < this.minimumLength) {
                this.validationError = "Minimum " + this.minimumLength + " characters are required";
                this.parent.$setValidity('tinyMce', false);
                return false;
            }
            this.validationError = '';
            this.parent.$setValidity('tinyMce', true);
            return true;
        }
    }, {
        key: "getCharCount",
        value: function getCharCount(str) {
            var charCount = 0;
            var whiteSpaceRegExp = /\s/g;

            if (str !== null || str !== undefined) {
                charCount = str.replace(whiteSpaceRegExp, '').length;
            }

            return charCount;
        }
    }, {
        key: "getCountWithoutSpaces",
        value: function getCountWithoutSpaces(str, maxLen) {
            var spCount = 0;
            var nonWhiteSpaceRegExp = /\S/g;
            if (str !== null || str !== undefined) {
                spCount = str.replace(nonWhiteSpaceRegExp, '').length;
            }
            return spCount;
        }
    }, {
        key: "onChange",
        value: function onChange(e) {
            this.validateCaptorForm(this.value);
        }
    }]);

    return TinyMCEController;
}();

exports.TinyMCEController = TinyMCEController;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports) {

var path = 'D:/My Files/Angular-Components - Copy/components/datetimePicker/datetimePicker.component.html';
var html = "<input-group ng-class=\"{ 'has-error' : vm.validationError && {{vm.name}}Form.$$parentForm.$submitted }\" class=\"captorDatePicker\">\r\n    <ng-form name=\"{{vm.name}}Form\" novalidate>\r\n        <label-area>\r\n            <label for=\"{{vm.name}}\" class=\"control-label\" ng-class=\"{ 'validation-failed-label' : vm.validationError && {{vm.name}}Form.$$parentForm.$submitted }\"> \r\n                {{vm.label}}\r\n                <span ng-show=\"vm.requiredVal \">*</span>\r\n                </label>\r\n        </label-area>\r\n        <div class=\"captorNGFormInput\">\r\n           <div class=\"col-md-6 input-group controls\">                   \r\n                <datetimepicker \r\n                    ng-model=\"vm.value\"\r\n                    name=\"{{vm.name}}\"\r\n                    label=\"{{vm.label}}\"\r\n                    placeholder=\"{{vm.placeholder}}\" \r\n                    date-format=\"{{vm.dateFormat}}\"\r\n                    date-options=\"vm.dateOptions\"\r\n                    show-spinners=\"true\"\r\n                    hidden-time=\"vm.hideTime\"\r\n                    show-meridian=\"false\"\r\n                    ng-required=\"vm.requiredVal\"\r\n                    date-opened=\"vm.openDatepicker\"\r\n                    ng-change=\"vm.onChange()\"\r\n                    min-date=\"vm.minDate\"\r\n                    max-date=\"vm.maxDate\"\r\n                    autocomplete=\"off\">\r\n                </datetimepicker>\r\n                <span ng-class=\"{ 'error-span' : vm.validationError && {{vm.name}}Form.$$parentForm.$submitted }\" \r\n                    class=\"input-group-addon right date-field calendar-datepicker-icon datePickerSpan\" ng-click=\"vm.openPicker()\"></span>\r\n            </div>\r\n            <error-message ng-show=\"vm.validationError && {{vm.name}}Form.$$parentForm.$submitted\">\r\n                <span class=\"captorValidationErrorMsg\" > {{vm.validationError}}</span>\r\n            </error-message>\r\n        </div>\r\n    </ng-form>\r\n</input-group>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

var path = 'D:/My Files/Angular-Components - Copy/components/inputDropdown/dropdown.component.html';
var html = "<input-group ng-class=\"{ 'has-error' : vm.validationError && {{vm.name}}Form.$$parentForm.$submitted }\">\r\n    <ng-form name=\"{{vm.name}}Form\" novalidate>\r\n    <div class=\"form-group input-controls custom-dropdown\">\r\n        <label-area>\r\n            <label for=\"{{vm.name}}\" class=\"control-label\" ng-class=\"{ 'validation-failed-label' : vm.validationError && {{vm.name}}Form.$$parentForm.$submitted }\"> \r\n                {{vm.label}}\r\n                <span ng-show=\" vm.requiredVal \">*</span>\r\n                </label>\r\n        </label-area>\r\n        <div class=\"captorNGFormInput\">\r\n            <div ng-class=\"vm.dropDownClass\">\r\n                <div ng-dropdown-multiselect=\"\" \r\n                    name=\"{{vm.name}}\"\r\n                    ng-class=\"{ 'validation-failed-border' : vm.validationError && {{vm.name}}Form.$$parentForm.$submitted }\"\r\n                    options=\"vm.value\" \r\n                    selected-model=\"vm.selectedVal\"\r\n                    single-selection=\"true\"\r\n                    extra-settings=\"vm.dropdownSettings\"\r\n                    translation-texts=\"vm.translationTexts\"\r\n                    events=\"vm.dropdownEvents\"\r\n                    ng-model=\"vm.selectedVal\"\r\n                    id=\"{{vm.name}}\"\r\n                    ng-change=\"vm.onChange()\">\r\n                </div>\r\n            </div>\r\n            <error-message ng-show=\"vm.validationError && {{vm.name}}Form.$$parentForm.$submitted\">-->\r\n                    <span class=\"captorValidationErrorMsg\" > {{vm.validationError}}</span>\r\n            </error-message>\r\n        </div>\r\n    </div>\r\n    </ng-form>\r\n</input-group>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

var path = 'D:/My Files/Angular-Components - Copy/components/inputText/textbox.component.html';
var html = "<input-group ng-class=\"{ 'has-error' : {{vm.name}}Form.{{vm.name}}.$invalid && vm.validationError && {{vm.name}}Form.$$parentForm.$submitted }\">\r\n    <ng-form name=\"{{vm.name}}Form\" novalidate>\r\n        <label-area>\r\n            <label for=\"{{vm.name}}\" class=\"control-label\" ng-class=\"{ 'validation-failed-label' : {{vm.name}}Form.{{vm.name}}.$invalid && vm.validationError && {{vm.name}}Form.$$parentForm.$submitted }\"> \r\n                {{vm.label}}\r\n                <span ng-show=\" vm.requiredVal \">*</span>\r\n                </label>\r\n        </label-area>\r\n        <div class=\"captorNGFormInput\">\r\n            <input type=\"{{vm.type}}\" \r\n                    class=\"form-control\" \r\n                    placeholder=\"{{vm.placeholder}}\" \r\n                    autocomplete=\"off\" \r\n                    ng-model-options=\"{allowInvalid: true , debounce: 10}\" \r\n                    name=\"{{vm.name}}\" \r\n                    id=\"{{vm.name}}\" \r\n                    ng-model=\"vm.value\" \r\n                    ng-click=\"vm.onClick()\"\r\n                    ng-change=\"vm.onChange()\" \r\n                    ng-required=\"vm.requiredVal\" \r\n                    ng-minlength=\"vm.minimumLength\" \r\n                    ng-maxlength=\"vm.maximumLength\" \r\n                    ng-readonly=\"{{vm.readOnlyValue}}\"\r\n                    ui-mask=\"{{ vm.mask }}\"\r\n                    ui-mask-placeholder \r\n                    ui-mask-placeholder-char=\"_\">\r\n            </input>\r\n            <error-message ng-show=\"{{vm.name}}Form.{{vm.name}}.$invalid && vm.validationError && {{vm.name}}Form.$$parentForm.$submitted\">\r\n                <span class=\"captorValidationErrorMsg\" > {{vm.validationError}}</span>\r\n            </error-message>\r\n        </div>\r\n    </ng-form>\r\n</input-group>\r\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

var path = 'D:/My Files/Angular-Components - Copy/components/radioButton/radio.component.html';
var html = "<input-group class=\"header-toggle toggles m-t-20 text-right\" ng-class=\"{ 'has-error' : {{vm.name}}Form.{{vm.name}}.$invalid && vm.validationError && {{vm.name}}Form.$$parentForm.$submitted }\">\r\n    <ng-form name=\"{{vm.name}}Form\" novalidate>\r\n        <label-area>\r\n            <label for=\"{{vm.name}}\" ng-class=\"{ 'validation-failed-label' : {{vm.name}}Form.{{vm.name}}.$invalid && vm.validationError && {{vm.name}}Form.$$parentForm.$submitted }\"> \r\n                {{vm.label}}\r\n                <span ng-show=\" vm.requiredVal \">*</span>\r\n                </label>\r\n        </label-area>\r\n        <div class=\"captorNGFormInput toggle-wrap\">\r\n            <label class=\"toggle-radio\">\r\n                <input name=\"vm.name\" \r\n                    type=\"radio\" \r\n                    value=\"true\" \r\n                    ng-model=\"vm.value\" />\r\n                <span>Yes</span>\r\n            </label>\r\n            <label class=\"toggle-radio arrest-option\">\r\n                <input name=\"vm.name\" \r\n                    type=\"radio\" \r\n                    value=\"false\" \r\n                    ng-model=\"vm.value\" checked/>\r\n                <span>No</span>\r\n            </label>\r\n            <error-message ng-show=\"{{vm.name}}Form.{{vm.name}}.$invalid && vm.validationError && {{vm.name}}Form.$$parentForm.$submitted\">\r\n                <span class=\"captorValidationErrorMsg\" > {{vm.validationError}}</span>\r\n            </error-message>\r\n        </div>\r\n    </ng-form>\r\n</input-group>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

var path = 'D:/My Files/Angular-Components - Copy/components/saveButton/saveButn.component.html';
var html = "<div>\r\n    <button class=\"btn btn-default btn-waypoint btn-icon btn-save btn-go-forward pull-right\" \r\n            ng-click=\"vm.save(vm.parentForm)\">\r\n        <span>{{vm.label}}</span>\r\n        <span class=\"icon\"></span>\r\n    </button>\r\n</div>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

var path = 'D:/My Files/Angular-Components - Copy/components/tinyMce/tinyMCEText.component.html';
var html = "<input-group ng-class=\"{ 'has-error' : vm.validationError && {{vm.name}}Form.$$parentForm.$submitted }\">\r\n    <ng-form name=\"{{vm.name}}Form\" novalidate>\r\n    <div class=\"form-group input-controls\">\r\n        <label-area>\r\n            <label for=\"{{vm.name}}\" class=\"control-label\" ng-class=\"{ 'validation-failed-label' : vm.validationError && {{vm.name}}Form.$$parentForm.$submitted }\"> \r\n                {{vm.label}}\r\n                <span ng-show=\" vm.requiredVal \">*</span>\r\n                </label>\r\n        </label-area>\r\n        <div class=\"captorNGFormInput\" ng-class=\"{ 'captorTinyMceError' : vm.validationError && {{vm.name}}Form.$$parentForm.$submitted }\">\r\n             <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                        <textarea \r\n                            name=\"{{vm.name}}\"\r\n                            class=\"form-control customTextarea\"\r\n                            ng-model=\"vm.value\"\r\n                            autocomplete=\"off\" \r\n                            ui-tinymce=\"vm.tinymceOptions\"\r\n                            ng-model-options=\"{allowInvalid: true , debounce: 0}\" \r\n                            ng-change=\"vm.onChange()\"\r\n                            ng-keydown=\"vm.onChange($event)\"\r\n                            ng-keyup=\"vm.onChange($event)\" \r\n                        >\r\n                        </textarea>\r\n                        <span class=\"small text-right counter\" \r\n                                ng-class=\"{'captorTinyMceTextWarning' : vm.rem_Count <= 25,\r\n                                            'captorTinyMceTextDanger' : vm.rem_Count <= 5 }\"\r\n                                ng-show=\"vm.disabledBlock!='true'\">\r\n                                {{vm.rem_Count}} of {{vm.maxcharCount}} characters remaining\r\n                        </span>\r\n                </div>\r\n            </div>\r\n            <error-message class=\"captorValidationErrorMsgTinyMce\" ng-show=\"vm.validationError && {{vm.name}}Form.$$parentForm.$submitted\">\r\n                    <span> {{vm.validationError}}</span>\r\n            </error-message>\r\n        </div>\r\n    </div>\r\n    </ng-form>\r\n</input-group>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);