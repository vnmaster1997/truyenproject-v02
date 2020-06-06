const mongoose = require('mongoose');
const Product = require('./product.model');
var cartSchema = new mongoose.Schema({
    userId: String,
   total: Number,
   quantity: Number,
   products: [Product]
});

module.exports =mongoose.model('cart', cartSchema);