const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controllers.js");

router.get("/", getProducts);
router.get("/:id", getProduct);

// create product
router.post("/", createProduct);

// update product
router.put("/:id", updateProduct);

// delete product
router.delete("/:id", deleteProduct);

module.exports = router;
