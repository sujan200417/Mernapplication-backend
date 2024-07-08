const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema(
    {
        
        ProductName: {
            type: String,
            required: true,
        },
        ProductPrice: {
            type: Number,
            required: true,
        },
        ProductBarcode: {
            type: Number,
            required: true,
        },
    },{
        collection:"product"
    });

const Products = mongoose.model("Products", ProductSchema)
module.exports = Products;
