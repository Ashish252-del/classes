
const mongoose = require("mongoose");
// code for connecting detabase(time taking function)
const detabaseconnection = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/myfirstdatabase")
        console.log("Detabase successfully connected ")
    } catch (error) {
        console.log(error);
    }
};
module.exports = detabaseconnection;