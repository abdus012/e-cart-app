const mongoose = require('mongoose');

var conn = mongoose.Collection;

var ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    off:{
        type:Number
    },
    rating:{
        type:String,
    },
    productPictures:[
       { img:{
            type:String
        }
    }
   ],
    reviews:{
        type:Number
    },
    createdBy:{
        type:String,
        required:true
    },
    updatedAt:Date,

},{timestamps:true});

var ProductModel =  mongoose.model('products',ProductSchema);

module.exports=ProductModel;