const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productId: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String },
    price: { type: String, required: true },
    quantity: { type: Number, required: true },
    categoryId: { type: String },
    imageUrl: { type: String }
});

const Product = mongoose.model('products', productSchema);

module.exports = Product;
