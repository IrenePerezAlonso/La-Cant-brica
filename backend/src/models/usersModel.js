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

module.exports = model('users', userSchema);