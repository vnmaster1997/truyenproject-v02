const express = require('express');
const router = express.Router();
const Product = require('../models/product.js');
const fs = require('fs')
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
const path = require('path');

router.get('/listproducts', async (req, res, next) => {
	try {
		let listProducts = await Product.find({});
		res.json(listProducts);
	} catch(e) {
		console.log(e)
	}
})

/*router.get('/category', (req, res) => {
  Category.find().then((category) => {
    res.send({
      category
    });
  }, (e) => {
    res.status(400).send(e);
  });
});*/

/*// SET STORAGE
var storage = multer.diskStorage({
	destination: function (req, file, cb) {
	  cb(null, 'uploads')
	},
	filename: function (req, file, cb) {
	  cb(null, file.fieldname + '-' + Date.now())
	}
  })
   
var upload = multer({ storage: storage })*/

router.post('/create'/*, upload.single('imageProduct')*/, async (req, res) => {
	try {
		const { name, author, description, price, imageUrl } = req.body;
		/*var img = fs.readFileSync(req.file.path);
		var encode_image = img.toString('base64');*/
		// Define a JSONobject for the image attributes for saving to database
		
		/*var finalImg = {
			contentType: req.file.mimetype,
			image:  new Buffer(encode_image, 'base64')
		};*/
		let product =  new Product({
			name: name,
			author: author,
			description: description,
			price: price,
			imageUrl: imageUrl
		});
		await product.save();
		/*var path = req.file.path;
		res.send(path)*/
	} catch(e) {
		console.log(e)
	}
})

router.put('/:productId', async (req, res) => {
	const { name, author, description, price, imageUrl } = req.body;
	
})


router.get('/:productId', async (req, res) => {
	try {
		let productId = req.params.productId;
		let product = await Product.findById(productId);
		res.send(product);
	} catch(e) {
		console.log(e)
	}
})

module.exports = router;