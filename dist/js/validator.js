'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Validator = function () {
	function Validator(selector) {
		_classCallCheck(this, Validator);

		console.log('constructor from Validator');

		// find the field, show an error if it's not availble
		this.$field = document.querySelector(selector);
		if (!this.$field) {
			console.warn('Couldn\'t find an element with selector', selector);
			return false;
		}

		// Fetch a formatted name for the field from the alt tag, and fall back to the field's name tag 
		if (this.$field.alt) {
			this.fieldName = this.$field.alt;
		} else {
			this.fieldName = this.$field.name.replace('_', ' ').replace('-', ' '); // with some formatting help
		}

		// find an error container if one already exists from another validator on this field,
		// or on it's sibling fields (like day, month, year fields for a date of birth field group)
		this.$errorContainer = this.$field.parentElement.querySelector('.error-message');

		// if the error container DOESN'T already exist from another validator,
		if (!this.$errorContainer) {
			// make an element to show errors in
			this.$errorContainer = document.createElement('div');
			this.$errorContainer.classList.add('error-message');
			this.$field.parentElement.appendChild(this.$errorContainer);
		}

		// keep track of errors
		this.errors = [];

		// generate a unique identifier for this validator. 
		// we'll use it later to make sure this validator doesnt mess with the error messages of other validators.
		this.uid = Math.floor(Math.random() * 10000);

		// add event listener to call this.validate, 
		// but overrule its _this_ logic, and force its
		// _this_ to be the Validate class instance, not the DOM element that triggers this event
		this.$field.addEventListener('keyup', this.validate.bind(this));
		this.$field.addEventListener('blur', this.validate.bind(this));

		// add event listener to call this.showErrors (after validation), 
		// but overrule its _this_ logic, and force its
		// _this_ to be the Validate class instance, not the DOM element that triggers this event
		this.$field.addEventListener('keyup', this.showErrors.bind(this));
		this.$field.addEventListener('blur', this.showErrors.bind(this));
	}

	_createClass(Validator, [{
		key: 'validate',
		value: function validate() {
			console.log('validate in Validator');

			// empty out the array of collected error message text
			this.errors = [];

			// find in the DOM any error messages pertaining to this particular validator
			var $oldErrorMessages = this.$errorContainer.querySelectorAll('[data-validator-uid="' + this.uid + '"]');
			$oldErrorMessages.forEach(function ($el) {
				// and remove them
				$el.remove();
			});

			// simple "required" validation. nothing entered in the field? 
			if (!this.$field.value) {
				// add the error message to the list of error messages for this field
				this.errors.push('You must fill out the <em>' + this.fieldName + '</em> field');
			}

			// at this point, any other validators that extend this one will run their own logic too
		}
	}, {
		key: 'showErrors',
		value: function showErrors() {
			var _this = this;

			console.log('showErrors in Validator');

			if (this.errors.length) {
				this.$field.style.borderColor = 'red';
				this.errors.forEach(function (error) {
					_this.$errorContainer.innerHTML += '<p data-validator-uid="' + _this.uid + '">' + error + '</p>';
				});
			} else {
				this.$field.style.borderColor = 'green';
			}
		}
	}]);

	return Validator;
}();
//# sourceMappingURL=Validator.js.map
