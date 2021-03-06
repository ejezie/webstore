require("dotenv").config();
const Product = require("./models/Prouduct");
const connectDB = require("./config/db");
const productsData = require("./data/products");

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(productsData);

    console.log("data succesfully imported");
    process.exit();
  } catch (error) {
    console.error("Data import failed");
    process.exit(1);
  }
};

importData();