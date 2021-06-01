const { model, Schema }  = require('mongoose');

const userSchema = Schema({
		email: String,
		password: String,
		cart: [{
			id: String,
			quantity: Number,
		}]
});

module.exports = model('products', userSchema);