'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RequiredCharacterValidator = function (_Validator) {
	_inherits(RequiredCharacterValidator, _Validator);

	function RequiredCharacterValidator(selector, requiredCharacters) {
		_classCallCheck(this, RequiredCharacterValidator);

		// call constructor in Validator()
		var _this = _possibleConstructorReturn(this, (RequiredCharacterValidator.__proto__ || Object.getPrototypeOf(RequiredCharacterValidator)).call(this, selector));

		console.log('constructor from RequiredCharacterValidator');

		_this.requiredCharacters = requiredCharacters;
		return _this;
	}

	_createClass(RequiredCharacterValidator, [{
		key: 'validate',
		value: function validate() {
			var _this2 = this;

			_get(RequiredCharacterValidator.prototype.__proto__ || Object.getPrototypeOf(RequiredCharacterValidator.prototype), 'validate', this).call(this);
			console.log('validate in RequiredCharacterValidator');

			var foundARequireCharacter = false;

			this.requiredCharacters.forEach(function (char) {
				if (_this2.$field.value.includes(char)) {
					foundARequireCharacter = true;
				}
			});

			if (!foundARequireCharacter) {
				this.errors.push('The field <em>' + this.fieldName + '</em> requires one of these characters: ' + this.requiredCharacters.join(''));
			}
		}
	}]);

	return RequiredCharacterValidator;
}(Validator);
//# sourceMappingURL=RequiredCharacterValidator.js.map
