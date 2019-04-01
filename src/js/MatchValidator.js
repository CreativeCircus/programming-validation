class MatchValidator extends Validator {
	constructor(selector, otherSelector) {
		super(selector); // call constructor in Validator()
		console.log('constructor from MatchValidator')
		this.$otherField = document.querySelector(otherSelector);
	}

	validate() {
		super.validate();
		console.log(`validate in MatchValidator`)
		
		if (this.$field.value !== this.$otherField.value) {
			this.errors.push(`These fields must match!`);
		}

	}
}