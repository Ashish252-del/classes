const mongoose = require("mongoose");
// blue print of collection 
const userModel = new mongoose.Schema({
    name: String,
    // if you want more functionality in namse
    // name: {
   //  type: String
    // trim:true // when you want to trim spaces
    // lowercase:true// if you want to your data in lower case
    // default:"Ashish"// in case we do not recieve data from frontend then by by default name will be Ashish 
  //  }
    age: { type: Number, default: 25, },
    email: {
        type: String,
        unique: true,// when we want unique entry// ek email ek baar
        require:true// if you want it must otherwise throw error
 },
    dob: String,
    password: String,
})

const savedmodel = mongoose.model("user", userModel); // first parameter is collection names same as your file name here(User.js)
module.exports = savedmodel;