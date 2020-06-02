const mongoose = require('mongoose');

var cartSchema = new mongoose.Schema({
    name: {
        type: String
    },
    author: {
        type: String,
    },
    price: {
        type: String
    },
    imageUrl: {
        type: String
    }
});

module.exports =mongoose.model('cart', cartSchema);