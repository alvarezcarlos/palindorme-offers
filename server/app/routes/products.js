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

    const isValidQuery = keys.length === 1 ? true : false

    if(!isValidQuery){
      res.status(400)
      res.send("Se debe buscar por una categoría a la vez")
      return res.end()
    }

    const key = keys[0];

    if(!allowedParams.includes(key)){
      res.status(400)
      res.send("Parámetro invalido")
      return res.end()
    }

    if(!query[key].length){
      res.status(400)
      res.send("El campo de busqueda no puede estar vacío")
      return res.end()
    }

    if(key === "id"){
      let products = await Product.find({id: query.id})
      products = addOfferProperty(products)
      res.status(200)
      res.json(products)
      return res.end()
    }

    if(query[key].length < 3){
      res.status(400)
      res.send("La búsqueda debe al menos 3 caracteres")
      return res.end()
    }

    let products = await Product.find({[key]: new RegExp(query[key])})
    products = addOfferProperty(products)
    res.json(products)
    res.end()
    
  })

module.exports = router;