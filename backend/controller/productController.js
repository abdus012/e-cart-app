const mongoose = require('mongoose');
const productModel = require('../modules/productModel');



exports.addProduct=(req,res)=>{

    const{
        name,
        price,
        description,
        quantity,
        createdBy,
        rating,
        off
    }=req.body;

    let productPictures =[];

    if(req.files.length > 0){
       productPictures = req.files.map(file=>{
           return {img : file.filename}
       });
    }

    const ProductDetails = new productModel({
        name,
        price,
        description,
        productPictures,
        quantity,
        createdBy,
        rating,
        off
    })

    ProductDetails.save()
    .then(product=>{
        res.status(201).json({
            message:"Product Created Successfully!!",
            product:product
        })
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })

}

exports.getProductDetails = (req,res)=>{
    console.log("all =====================");
    productModel.find()
    .exec((error,product)=>{
        if(error){
           return res.status(400).json({
                error:error
            })
        }
        if(product){
            return res.status(200).json({
                product
            })
        }
        else{
            return res.status(400).json({ error:"Params Required!!"})
        }
    })
}