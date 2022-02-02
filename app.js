const express = require("express");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.use(express.static("public")); // important: after const app = express() and before app.get()

app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/home.html");
});

app.get("/contact", (request, response, next) => {
  response.sendFile(__dirname + "/views/contact.html");
});

app.get("/product-singer", (request, response, next) => {
  //response.sendFile(__dirname + "/views/product-singer.html");
  response.render("product");
});

app.get("/product-w6", (request, response, next) => {
  response.sendFile(__dirname + "/views/product-w6.html");
});

app.listen(3003),
  () => {
    console.log("server listening ...");
  };
