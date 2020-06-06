const mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    name: {
        type: String
    },
    author: {
        type: String,
    },
    description: {
        type: String,
        minlength: 4
    },
    price: {
        type: String
    },
    imageUrl: {
        type: String
    }
});

module.exports =mongoose.model('Product', productSchema);