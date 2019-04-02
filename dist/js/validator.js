"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Validator = function Validator(selector) {
  var _this = this;

  _classCallCheck(this, Validator);

  _defineProperty(this, "validate", function () {
    console.log("validate in Validator"); // empty out the array of collected error message text

    _this.errors = []; // find in the DOM any error messages pertaining to this particular validator

    var $oldErrorMessages = _this.$errorContainer.querySelectorAll("[data-validator-uid=\"".concat(_this.uid, "\"]"));

    $oldErrorMessages.forEach(function ($el) {
      // and remove them
      $el.remove();
    }); // simple "required" validation. nothing entered in the field? 

    if (!_this.$field.value) {
      // add the error message to the list of error messages for this field
      _this.errors.push("You must fill out the <em>".concat(_this.fieldName, "</em> field"));
    } // at this point, any other validators that extend this one will run their own logic too

  });

  _defineProperty(this, "showErrors", function () {
    console.log("showErrors in Validator");

    if (_this.errors.length) {
      _this.$field.style.borderColor = "red";

      _this.errors.forEach(function (error) {
        _this.$errorContainer.innerHTML += "<p data-validator-uid=\"".concat(_this.uid, "\">").concat(error, "</p>");
      });
    } else {
      _this.$field.style.borderColor = "green";
    }
  });

  console.log('constructor from Validator'); // find the field, show an error if it's not availble

  this.$field = document.querySelector(selector);

  if (!this.$field) {
    console.warn("Couldn't find an element with selector", selector);
    return false;
  } // Fetch a formatted name for the field from the alt tag, and fall back to the field's name tag 


  if (this.$field.alt) {
    this.fieldName = this.$field.alt;
  } else {
    this.fieldName = this.$field.name.replace('_', ' ').replace('-', ' '); // with some formatting help
  } // find an error container if one already exists from another validator on this field,
  // or on it's sibling fields (like day, month, year fields for a date of birth field group)


  this.$errorContainer = this.$field.parentElement.querySelector('.error-message'); // if the error container DOESN'T already exist from another validator,

  if (!this.$errorContainer) {
    // make an element to show errors in
    this.$errorContainer = document.createElement('div');
    this.$errorContainer.classList.add('error-message');
    this.$field.parentElement.appendChild(this.$errorContainer);
  } // keep track of errors


  this.errors = []; // generate a unique identifier for this validator. 
  // we'll use it later to make sure this validator doesnt mess with the error messages of other validators.

  this.uid = Math.floor(Math.random() * 10000); // add event listener to call this.validate, 
  // but overrule its _this_ logic, and force its
  // _this_ to be the Validate class instance, not the DOM element that triggers this event

  this.$field.addEventListener("keyup", this.validate);
  this.$field.addEventListener("blur", this.validate); // add event listener to call this.showErrors (after validation), 
  // but overrule its _this_ logic, and force its
  // _this_ to be the Validate class instance, not the DOM element that triggers this event

  this.$field.addEventListener("keyup", this.showErrors);
  this.$field.addEventListener("blur", this.showErrors);
};
//# sourceMappingURL=validator.js.map
