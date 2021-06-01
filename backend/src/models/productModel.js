const { model, Schema }  = require('mongoose');

const productsSchema = Schema({
		type: String,
		subType: String,
		name: String,
		img: String,
		price: Number,
		preparation: {
			entire: Boolean,
			withOutHeadGuts: Boolean,
			withOutThorn: Boolean,
            fillet: Boolean,
            slices:Boolean,
			fresh: Boolean,
        	cooked: Boolean
		}
});

module.exports = model('products', productsSchema);