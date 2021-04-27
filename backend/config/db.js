require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("data base connected succesfully");
  } catch (error) {
    console.error("data base connect unsucessful");
    process.exit(1)
  }
};

module.exports = connectDB;