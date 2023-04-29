const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Product = require("./14_2_21_dataSchema.js");
const app = express();
app.use(express.json());
app.use(cors());

app.use(express.static("public"));
app.use("/images",express.static("images"));

mongoose.connect("mongodb://127.0.0.1:27017/Assignment3_reactdata", {
  dbName: "Assignment3_reactdata",
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const port = process.env.PORT || 4000;
const host = "localhost";

app.get("/", async (req, resp) => {
  const query = {};
  const allProducts = await Product.find(query);
  console.log(allProducts);
  resp.send(allProducts);
});

app.listen(port, () => {
  console.log(`App listening at http://%s:%s`, host, port);
});
