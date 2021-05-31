const { model, Schema }  = require('mongoose');

const productsSchema = Schema({
	fish: {
		white: {
			name: String,
			price: Number,
			img: String,
			preparation: [String]
		},
		blue: {
			name: String,
			price: Number,
			img: String,
			preparation: [String]
		},
	},
	shellfish: {
		mollusck: {
			name: String,
			price: Number,
			img: String,
			preparation: [String]
		},
		crustacean: {
			name: String,
			price: Number,
			img: String,
			preparation: [String]
		},
	},
	cephalopod: {
		name: String,
		price: Number,
		img: String,
		preparation: [String]
	},
});

module.exports = model('Products', productsSchema);