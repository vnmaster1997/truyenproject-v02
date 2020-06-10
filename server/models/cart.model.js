const mongoose = require('mongoose');

var cartSchema = new mongoose.Schema({
    userId: String,
   total: Number,
   quantity: Number,
   products: Array
});

module.exports = mongoose.model('Cart', cartSchema);