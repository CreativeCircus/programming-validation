class EmailValidator extends Validator {

	constructor(selector) {
		super(selector); // call constructor in Validator()
		console.log('constructor from EmailValidator')
		// We dont need this constructor– it doesnt do anything different from
		// the parent class constructor. It's here for illustrative purposes.
	}


	validate() {
		super.validate();

		let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if ( !this.$field.value.match( emailRegex )) {
			this.errors.push(`Your email address is not valid`);
		}

		// if (!this.$field.value.includes('@')) {
		// 	this.errors.push(`Your email address needs an @`);
		// }
		// if (!this.$field.value.includes('.')) {
		// 	this.errors.push(`Your email address needs an .`);
		// }

	}

}