const { model, Schema }  = require('mongoose');

const userSchema = Schema({
	email: String,
	password: String,
	name: String,
	addres: String,
	phone: Number,
	cart: [{
		id: String,
		quantity: Number,
	}]
});

userSchema.methods.isValidPassword = function isValidPassword(password) {
	return password === this.password;
};

module.exports = model('users', userSchema);