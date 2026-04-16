const express = require("express");
const router = express.Router();

const {
    getProducts,
    seedProducts
} = require("../controllers/productsController");

// GET /products?sort=price_asc
router.get("/", getProducts);

// POST /products/seed
router.post("/seed", seedProducts);

module.exports = router;