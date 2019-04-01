class RequiredCharacterValidator extends Validator {

	constructor(selector, requiredCharacters) {
		super(selector); // call constructor in Validator()
		console.log('constructor from RequiredCharacterValidator')

		this.requiredCharacters = requiredCharacters;
	}

	validate() {
		super.validate();
		console.log(`validate in RequiredCharacterValidator`)

		let foundARequireCharacter = false;

		this.requiredCharacters.forEach((char) => {
			if (this.$field.value.includes(char)) {
				foundARequireCharacter = true;
			}
		});
		
		if (!foundARequireCharacter) {
			this.errors.push(`The field <em>${this.fieldName}</em> requires one of these characters: ` + this.requiredCharacters.join(''));
		}

	}
}