class UpperLowerValidator extends Validator {
	constructor(selector){
		super(selector); // call constructor in Validator()
		console.log(`constructor from UpperLowerValidator`)
	}
	
	validate(){
		super.validate();
		
		let lowerRegex = /[a-z]/;
		if(!this.$field.value.match(lowerRegex)){
			this.errors.push(`You need at least one lowercase character`);
		} 

		let upperRegex = /[A-Z]/;
		if(!this.$field.value.match(upperRegex)){
			this.errors.push(`You need at least one uppercase character`);
		}       
	}
}