class NumberRangeValidator extends Validator {

	constructor(selector, min, max) {
		super(selector); // call constructor in Validator()
		console.log('constructor from NumberRangeValidator')
		this.min = min; // take arguments and put them into properties of the class
		this.max = max; // take arguments and put them into properties of the class
	}

	validate() {
		super.validate();
		console.log(`validate in NumberRangeValidator`)

		let numericValue = Number(this.$field.value);
		if (isNaN(numericValue)) {
			this.errors.push(`Number in field <em>${this.fieldName}</em> must be a real number`);
		}
		if (numericValue > this.max) {
			this.errors.push(`Number in field <em>${this.fieldName}</em> must not be greater than ` + this.max);
		}
		if (numericValue < this.min) {
			this.errors.push(`Number in field <em>${this.fieldName}</em> must not be less than ` + this.min);
		}

	}
}