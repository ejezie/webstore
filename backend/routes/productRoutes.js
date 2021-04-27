const express = require("express");
const router = express.router();

const {
  getAllProducts,
  getProductById,
} = require("../controller/productcontrollers");

router.get("/", getAllProducts);
router.get("/:id", getProductById);

module.exports = router;
