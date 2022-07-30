
const express = require("express");
const app = express();
// importing
const detabaseconnection = require('./connector/dbconnection');

// we need to tell pour server that we will recieve data in form of json from frontend by this code 
app.use(express.json());

// when you want to import any file from your root folder you put "./" and you want to import somthing outsideof folder you put "../"
// it is good practice to write the name of collection in capital
const USER_MODEL = require("./models/User");
const USER_POST = require("./models/Post"); // here I have written User_Post but it is not good practice I should write POST_MODEL b/c it is MODEL of POST
const USER_PRODUCT = require("./models/Product");
// writing api, api.get(route,callback)
app.get("route", (req, res) => {
    try { // here error will throw because we have write re
        // since we send response in form of json thats why res.json
        re.json({ success: true });

    }
    catch (errror) {
        res.json({ success: false });
    }
})
// profile information using params// : is used while writing an api
app.get("/profileinfo/:id", (req, res) => {
    try {
        let name = req.params.id; // this is the parrameter passed at route
        res.json({
            success: true,
            data: `profile information of ${name} whose dob is ${req.query.dob}`,
        });
    }
    catch (eror) {
        res.status(404).json({ success: false });

    }

});
app.get("/comment/:comment", (req, res) => {
    try {
        let name = req.params.comment; // this is the parrameter passed at route
        res.json({
            success: true,
            data: `comment data is ${name} `,
        });
    }
    catch (eror) {
        res.status(404).json({ success: false });

    }

});
app.get("/profileinfo/:rollno", (req, res) => {
    try {
        let name = req.params.rollno; // this is the parrameter passed at route
        res.json({
            success: true,
            data: ` rollno is ${name} `,
        });
    }
    catch (eror) {
        res.status(404).json({ success: false });

    }

});
// filtering using quries // sent after writing ? and assigning variables no extra thing on backend route
app.get("/filters", (req, res) => {
    try {
        let page = req.query.page;
        let brand = req.query.brand;
        res.json({
            success: true,
            data: `data of page no ${page} of ${brand}`,
        });
    }
    catch (error) {
        res.status(404).json({ success: fail });
    }
}
);
app.get("/flipcard", (req, res) => {
    try {
        let company = req.query.company;
        let brand = req.query.brand;
        res.json({
            success: true,
            data: `data of page no ${company} of ${brand}`,
        });
    }
    catch (error) {
        res.status(404).json({ success: fail });
    }
}
);
app.get("/college", (req, res) => {
    try {
        let nirf = req.query.nirf;
        let grade = req.query.grade;
        res.json({
            success: true,
            data: `data of college ${nirf} of ${grade}`,
        });
    }
    catch (error) {
        res.status(404).json({ success: fail });
    }
}
);
// when we send data from fronteed to backend in the form of payload


// there is no relation in encription with model
app.post("/signup", async(req, res) => {
    try {
        // here we receive data from frontend
       const commingdata = req.body;
        //we get payload data of frontend from "req.body"
        // code for creating new data

        // we encrypt data before saving
        const newUser = new USER_MODEL({
            name: commingdata.name,
           // name: "test",
            age:commingdata.age, 
          //  age:16,
   email: commingdata.email,
           // email: "ajsjah@235.com",
            dob: commingdata.dob,
           // dob: "12/5/2314",
    password: commingdata.password,
           // password: "jdhjhfjh",
        })
       
        const newdata = await newUser.save();
        console.log(newdata);
        res.json({ success: true, message: "New data created" });
    }
    catch (error) {
        console.log(error);
        res.status(404).json({success:false})
    }
})
app.post("/postdata", async(req, res) => {
    try {
        const newPost = new USER_POST({
             postname: req.body.name,
    likes: req.body.likes,
    comments: req.body.comments,
    shares:req.body.shares,
        })
        await newPost.save();
       // console.log(req.body);
        res.json({ success: true });
    }
    catch (error) {
        res.status(404).json({success:false})
    }
})
app.get("/postdata", async (req, res) => {
    try {
        console.log("Fatching data")
        // sorting is used in any order as requested
        // -1 is used for descending and 1 is used for ascending 
        const data = await USER_POST.find();
        res.json({ success: true, data });

    } catch (error) {
        console.log(error);
        res.status(400).json({success:false,error:error.message})
    }
})
app.post("/product",async (req, res) => {
    try {
        const newproduct = new USER_PRODUCT({
            companyname: req.body.cname,
            price: req.body.price,
            discount:req.body.discount
        })
        await newproduct.save();
        res.json({ success: true });
    }
    catch (error) {
        res.status(404).json({success:false})
    }
})
app.post("/address", (req, res) => {
    try {
        console.log(req.body);
        res.json({ success: true });
    }
    catch (error) {
        res.status(404).json({success:false})
    }
})
// connect the detabase just before creating server
detabaseconnection();


// code for creating server
let port = 4000;
app.listen(port, () => console.log(`server is running at ${port}`));






