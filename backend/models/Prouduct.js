const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    numInStock:{
        type: Number,
        required: true,
    },
    ImageUrl: {
        type: String,
        required: true
    },

})

const Product = mongoose.model('product', productSchema)
modules.export = Product;