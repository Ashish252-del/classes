const mongoose = require("mongoose");
// blue print of collection 
const productModel = new mongoose.Schema({
    companyname: String,
    price: Number,
    discount: Number,
    
   
})

const savedmodel3 = mongoose.model("product", productModel); // first parameter is collection names same as your file name here(Product.js)
module.exports = savedmodel3;