const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://anusha:1234@cluster0.exhdsez.mongodb.net/cluster1";

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;
