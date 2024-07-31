const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

// Main Get
app.get("/", (req, res) => {
  res.send("Hello From Node.JS Server");
});

// MongoDB Connection
mongoose
  .connect(
    "mongodb+srv://admin:admin@backenddb.po1gceo.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Port is running on port 3000");
    });
  })
  .catch((error) => {
    console.log("Connection failed!", error);
  });
