// ====== Setup for using express.js, mongoose
const express = require("express");
const hbs = require("hbs");
const app = express();

const mongoose = require("mongoose");
const { findOne } = require("./models/Product.model");
const Product = require("./models/Product.model");

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

hbs.registerPartials(__dirname + "/views/partials");

app.use(express.static("public"));

// ===== connect to DB
mongoose
  .connect("mongodb://0.0.0.0:27017/ecommerceApp")
  .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch((err) => console.error("Error connecting to mongo", err));

// ====== create route to homepage
app.get("/", function (req, res, next) {
  Product.find()
    .then((products) => {
      res.render("home", { products: products });
    })
    .catch((error) => console.log("this is an error", error));
});

//====== create route to contact page
app.get("/contact", function (req, res, next) {
  res.render("contact");
});

// ===== create routes for all product pages with req.params
app.get("/products/:productTitle/:productId", function (req, res, next) {
  Product.findById({ _id: req.params.productId })
    .then((productFromDb) => {
      res.render("product", productFromDb); //"product" = view
      console.log(productFromDb);
    })
    .catch((error) => console.log("this is an error", error));
});

// ==== localhost server
app.listen(3000, () => {
  console.log("server listening....");
});
