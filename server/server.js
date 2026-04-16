require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const Stripe = require("stripe");
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const productsRoutes = require("./routes/products");
const authRoutes = require("./routes/auth");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
    res.send("Server is working!");
});

app.use("/products", productsRoutes);
app.use("/auth", authRoutes);
app.post("/create-payment-intent", async (req, res) => {
    try {
        const { amount } = req.body;

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "eur"
        });

        res.json({
            clientSecret: paymentIntent.client_secret
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Vercel або локальний режим
const isVercel = process.env.VERCEL || process.env.VERCEL_ENV;

// Якщо запускається на Vercel — експортуємо app
if (!isVercel) {
    // Якщо локально — слухаємо порт
    app.listen(PORT, () => {
        console.log(`Server is running locally at http://localhost:${PORT}`);
    });
}

module.exports = app;
