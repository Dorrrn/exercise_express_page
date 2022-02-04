const mongoose = require("mongoose");
const Product = require("./models/Product.model");

//
// DB CONNECTION
// !! localhost: 0.0.0.0:27017 for me
mongoose
  .connect("mongodb://0.0.0.0:27017/ecommerceApp")
  .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch((err) => console.error("Error connecting to mongo", err));

//
// CREATE
//

const boatDetails1 = {
  title: "basic boat",
  price: 100,
  color: "pink",
};

const boatDetails2 = {
  title: "jet ski",
  price: 500,
  color: "pink",
};

const boatDetails3 = {
  title: "yatch",
  price: 102000,
  color: "pink",
};

Product.insertMany([boatDetails1, boatDetails2, boatDetails3])
  .then((result) => console.log(result))
  .catch();

//
// READ
//
// Product.find()
//   .then((result) => console.log(result.length))
//   .catch((error) => console.log(error));

// //
// // UPDATE
// //
// Product.findByIdAndUpdate("61fbaea5ac564cf6aa421bfd", { price: 500 })
//   .then()
//   .catch();

//
// DELETE
//

// Product.deleteOne({title: "basic boat"})
// .then( result => console.log("document deleted"))
// .catch();
