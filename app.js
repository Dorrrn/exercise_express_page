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

// connect to DB
mongoose
  .connect("mongodb://0.0.0.0:27017/ecommerceApp")
  .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch((err) => console.error("Error connecting to mongo", err));

app.get("/", function (request, response, next) {
  Product.find()
    .then((products) => {
      response.render("home", { products: products });
    })
    .catch((error) => console.log("this is an error", error));
});

app.get("/contact", function (request, response, next) {
  response.render("contact");
});

// create routes for all products with req.params
app.get(
  "/products/:productTitle/:productId",
  function (request, response, next) {
    Product.findById({ _id: request.params.productId })
      .then((productFromDb) => {
        response.render("product", productFromDb); //"product" = view
        console.log(productFromDb);
      })
      .catch((error) => console.log("this is an error", error));
  }
);

app.listen(3000, () => {
  console.log("server listening....");
});
