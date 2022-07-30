const mongoose = require("mongoose");
// blue print of collection 
const postModel = new mongoose.Schema({
    postname: String,
    likes: Number,
    comments: Number,
    shares:Number,
   
})

const savedmodel2 = mongoose.model("post", postModel); // first parameter is collection names same as your file name here(User.js)
module.exports = savedmodel2;