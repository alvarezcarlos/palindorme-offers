
const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan")
const bodyParser = require('body-parser');
const products = require("./routes/products")


const start = () => {
  app.use(cors());
  app.use(logger('combined'));
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  app.use("/api", products);

  app.listen(3001, () => {
    console.log("app listening")
  })
}

module.exports = start;