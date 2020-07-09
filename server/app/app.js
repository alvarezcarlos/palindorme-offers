
const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan")
const bodyParser = require('body-parser');
const products = require("./routes/products")

app.use(cors());
app.use(logger('combined'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use("/api", products);
app.disable('etag');

const server = 
  app.listen(3001, () => {
    console.log("app listening")
  })


module.exports = server;