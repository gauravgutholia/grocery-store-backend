const mongoose = require('mongoose');

const REQUIRED_STRING = {
    type: String,
    required: true,
};

const REQUIRED_NUM = {
    type: Number,
    required: true,
};

const productSchema = new mongoose.Schema({
    name: REQUIRED_STRING,
    MRP: REQUIRED_NUM,
    sellingPrice: REQUIRED_NUM,
    quantityAvailable: REQUIRED_NUM,
    productDetails: {
        nutrientValue: String,
        shelfLife: String,
        storageTips: String,
        seller: REQUIRED_STRING,
        description: REQUIRED_STRING,
        images: {
            mainImg: String,
            extraImages: [String],
        },
    },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
