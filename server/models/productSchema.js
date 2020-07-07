const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({

  id: {
    type: Number,
  },
  brand: {
    type: String,
  },
  description: {
    type: String
  },
  image:{
    type:String,
  },
  price:{
    type:Number
  }
}, {collection: 'products'})

module.exports = mongoose.model('product', ProductSchema);