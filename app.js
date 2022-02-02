const express = require("express");
const hbs = require("hbs");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

hbs.registerPartials(__dirname + "/views/partials");

app.use(express.static("public")); // important: after const app = express() and before app.get()

app.get("/", (request, response, next) => {
  const products = [
    {
      title: "Sewing machine 1",
      price: 100,
    },
    {
      title: "Sewing machine 2",
      price: 180,
    },
    {
      title: "Sewing machine 3",
      price: 440,
    },
  ];
  response.render("home", {products: products});
});

app.get("/contact", (request, response, next) => {
  response.render("contact");
});

// using HBS
app.get("/product-singer", (request, response, next) => {
  const productDetails = {
    title: "Singer 44S",
    price: 280,
    categories: ["beginner", "low price"],
    imgSrc:
      "https://i5.walmartimages.com/asr/55d35d78-f6c9-4382-a1e0-725c11ddfc16.d817e7733fee208b3101bccf3c5571d2.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
  };
  response.render("product", productDetails);
});

app.get("/product-w6", (request, response, next) => {
  const productDetails = {
    title: "W6 3300",
    price: 350,
    categories: ["intermediate", "low price"],
    imgSrc: "https://m.media-amazon.com/images/I/61HxZ5NoK7L._AC_SX466_.jpg",
    seller: {
      name: "Bob",
      location: "Berlin",
      rating: "4.5",
    },
  };
  response.render("product", productDetails);
});

app.get("/product-brother", (request, response, next) => {
  const productDetails = {
    title: "Brother 2000",
    price: 550,
    categories: ["advanced", "high price"],
  };
  response.render("product", productDetails);
});

// app.get("/product", (request, response, next) => {
//   const sewingDetails = [
//     {
//       title: "Singer 44S",
//       price: 280,
//       img: "https://i5.walmartimages.com/asr/55d35d78-f6c9-4382-a1e0-725c11ddfc16.d817e7733fee208b3101bccf3c5571d2.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
//     },
//     {
//       title: "W6 3300",
//       price: 350,
//       img: "https://m.media-amazon.com/images/I/61HxZ5NoK7L._AC_SX466_.jpg"
//     },
//   ];

//   response.render("product", sewingDetails);
// });

app.listen(3003),
  () => {
    console.log("server listening ...");
  };
