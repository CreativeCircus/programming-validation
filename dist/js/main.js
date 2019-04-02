"use strict";

new NumberRangeValidator('[name=day]', 1, 31);
new Validator('[name=month]');
new Validator('[name=year]');
new EmailValidator('[name=email]');
new RequiredCharacterValidator('[name=password]', ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+']);
new MatchValidator('[name=password]', '[name=password2]');
new UpperLowerValidator('[name=first-name]');
//# sourceMappingURL=main.js.map
