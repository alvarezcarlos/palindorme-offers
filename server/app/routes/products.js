const express = require('express')
const router = express.Router();
const Product = require('../../models/productSchema')
const addOfferProperty = require('../../services/addOfferProperty')

router
  .route("/products")
  .get(async (req, res) =>{
    const allowedParams = ["id", "brand", "description"]
    const query = req.query;
    const keys = Object.keys(query)
    console.log(keys)

    const isValidQuery = keys.length === 1 ? true : false

    if(!isValidQuery)
      return res.status(400).send("Se debe buscar por una categoría a la vez").end()

    const key = keys[0];

    if(!allowedParams.includes(key))
      return res.status(400).send("Parámetro invalido").end()

    if(!query[key].length)
      return res.status(400).send("El campo de busqueda no puede estar vacío").end()

    if(key === "id"){
      let products = await Product.find({id: query.id})
      products = addOfferProperty(products)
      return res.status(200).json(products).end()
    }

    if(query[key].length < 3)
      return res.status(400).send("La búsqueda debe al menos 3 caracteres").end()

    let products = await Product.find({[key]: new RegExp(query[key])})
    products = addOfferProperty(products)

    res
      .status(200)
      .json(products)
      .end()
    
  })

module.exports = router;