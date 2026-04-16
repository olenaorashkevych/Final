const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    vendorCode: {
        type: Number,
        required: true,
        unique: true
    },
    title: String,
    description: String,
    price: Number,
    oldPrice: Number,
    image: Number, // 1,2,3
    category: String,
    rating: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Product", ProductSchema);