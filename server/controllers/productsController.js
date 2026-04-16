const Product = require("../models/Product");

// 🔹 Отримати всі продукти + сортування
exports.getProducts = async (req, res) => {
    try {
        const { sort } = req.query;

        let sortOption = {};

        switch (sort) {
            case "price_asc":
                sortOption.price = 1;
                break;
            case "price_desc":
                sortOption.price = -1;
                break;
            case "name":
                sortOption.title = 1;
                break;
            case "new":
                sortOption.createdAt = -1;
                break;
            default:
                sortOption.rating = -1; // популярність
        }

        const products = await Product.find().sort(sortOption);

        res.json(products);

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// 🔹 Генерація vendorCode
const generateVendorCode = () => {
    return Math.floor(10000 + Math.random() * 90000); // 5-значний код
};

// 🔹 Отримати всі продукти + сортування
exports.getProducts = async (req, res) => {
    try {
        const { sort } = req.query;

        let sortOption = {};

        switch (sort) {
            case "price_asc":
                sortOption.price = 1;
                break;
            case "price_desc":
                sortOption.price = -1;
                break;
            case "name":
                sortOption.title = 1;
                break;
            case "new":
                sortOption.createdAt = -1;
                break;
            default:
                sortOption.rating = -1; // popular
        }

        const products = await Product.find().sort(sortOption);

        res.json(products);

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// 🔹 Seed 40 продуктів
exports.seedProducts = async (req, res) => {
    try {
        await Product.deleteMany();

        const titles = [
            "Savory turkey and lamb",
            "Savory rabbit and duck",
            "Savory lamb",
        ];

        const usedCodes = new Set();
        const products = [];

        for (let i = 0; i < 40; i++) {

            let vendorCode;
            do {
                vendorCode = generateVendorCode();
            } while (usedCodes.has(vendorCode));

            usedCodes.add(vendorCode);

            products.push({
                vendorCode,
                title: titles[i % 3],
                description: "Dry food for dogs",
                price: Math.floor(Math.random() * 200) + 100,
                oldPrice: Math.floor(Math.random() * 200) + 200,
                image: (i % 3) + 1, // тільки 1,2,3
                category: "dog",
                rating: Math.floor(Math.random() * 5) + 1,
            });
        }

        await Product.insertMany(products);

        res.json({ message: "40 products created" });

    } catch (error) {
        res.status(500).json({ message: "Seed error" });
    }
};