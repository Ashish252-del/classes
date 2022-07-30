const express = require("express");
const app = express();

// writing  request for frontend// writing first api // writing an api
app.get("/rollno", (req, res) => {
    res.json({ success: true, data: "All the rollno" });
});

app.get("/comments", (req, res) => {
    res.json({ success: true, data: "All the comments " });
});
app.get("/suscribers", (req, res) => {
    res.json({success:true, data:"All the suscribers"})
})
app.get("/likes", (req, res) => {
    res.json({success:true, data:"All the likes"})
})
app.get("/dislikes", (req, res) => {
    res.json({success:true, data:"All the dislikes"})
})

// code for creating server
let port = 5000;
app.listen(port, () => console.log(`Server is running at ${port}`));