const mongoose = require("mongoose");
// blue print of collection 
const gameModel = new mongoose.Schema({
    gname: { type: String, default: "Pubg" },
    lavel: { type: Number, require: true },
    score: { type: Number, require: true },
    password2: { type: String, },
    ide: {
        type: String,
        trim: true,
        
    },
    type:{
    type: String
},
    
},
    { timestamps: true });// timestamps will tell us at what time data is created


const gamedmodel2 = mongoose.model("game", gameModel); // first parameter is collection names same as your file name here(User.js)
module.exports = gamedmodel2;