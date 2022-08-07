const express = require('express');
const router = express.Router();
const mongoose  = require ('mongoose');
const { addProduct, getProductDetails} = require('../controller/productController');
const multer = require('multer');



var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
      cb(null,shortid.generate() + '-' + file.originalname)
    }
  })

  var upload = multer({ storage })


router.post('/product/create',upload.array('productPictures'),addProduct);

router.get('/allProducts',getProductDetails);

module.exports = router;