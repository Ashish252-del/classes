const mongoose = require("mongoose");
// code for connecting detabase(time taking function)
const detabase2connection = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/myseconddatabase")
        console.log("Detabase successfully connected ")
    } catch (error) {
        console.log(error);
    }
};
module.exports = detabase2connection;