const express = require("express");
const app = express();
// Importing to detabase
const detabaseconnection = require('./connector/db2');
// Importing 
const GAME_MODEL = require('./models/game');
const bcrypt = require("bcryptjs");
// we need to tell pour server that we will recieve data in form of json from frontend by this code 
app.use(express.json());

//  when we send data from fronteed to backend in the form of payload
app.post("/games", async (req, res) => {
    // Using shortcut
   
    try {
        const { gname, lavel, score, password2, ide,type } = req.body;
        // encrypt the password
        const encryptedpass = await bcrypt.hash(password2, 12);//code for encrypting
        const newEntry = new GAME_MODEL({ gname, lavel, score, password2:encryptedpass, ide,type});
        await newEntry.save();
        res.json({ success: true, message: "new entry is created" });
    } catch (error) {
        console.log(error);
        res.status(404).json({success:false})
        
    }
})

// geting deta
app.get("/gamedata", async (req, res) => {
    try {
        console.log("Fatching data")
        // sorting is used to arrange data in any order as requested
        //-1 is used for descending and 1 is used for ascending
        // to sort according to time we use createdAt
        // any other parameter ex- like:-1// decresing order of like will print
        const data = await GAME_MODEL.find().sort({ createdAt: -1 });
        res.json({ success: true, data });

    } catch (error) {
        console.log(error);
        res.status(400).json({success:false,error:error.message})
    }
})

// await POST_MODEL.find() => this returns all documents
// but if we want filtered document then => await POST_MODEL.find({filter condition})
// gettings post data according to condition
app.get("/filterdata", async (req, res) => {
    try {
        console.log("Fatching data")
        // When we request data from database according to a particular condition, we use filtering before sending data
        const data = await GAME_MODEL.find({ type:"finale" })
        res.json({ success: true, data });

    } catch (error) {
        console.log(error);
        res.status(400).json({success:false,error:error.message})
    }
})
// If we want only specific fields from our database, instead of all the fields. E.g. We want only gname, and ide, not score and level
// In this case , we use projection
//await POST_MODEL.find({filter-condition},{projection})
// Inside model.find(), first bracket describes filtering, while second bracket describes projection
// 1 is used for presence, 0 is used for absence
// connect the detabase just before creating server
app.get("/specific", async (req, res) => {
    try {
        console.log("Fatching data")
        const data = await GAME_MODEL.find({ ide: "T8" },
      { score: 1, gname: 1, ide: 1, _id: 0 });
        res.json({ success: true, data });

    } catch (error) {
        console.log(error);
        res.status(400).json({success:false,error:error.message})
    }
})
detabaseconnection();
// code for creating server
let port = 6000;
app.listen(port, () => console.log(`server is running at ${port}`));