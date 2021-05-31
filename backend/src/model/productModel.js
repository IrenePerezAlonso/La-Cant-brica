const { model, Schema }  = require('mongoose');

const productsSchema = Schema({
	products:{
		type: String,
		subType: String,
		name: String,
		img: String,
		price: Number,
		isFish: Boolean
	}
});

module.exports = model('Products', productsSchema);