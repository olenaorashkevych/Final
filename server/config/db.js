const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const URI = `mongodb+srv://olenaorashkevych:${process.env.DB_PASSWORD}@cluster0.cm5wvog.mongodb.net/test`;

        await mongoose.connect(URI);

        console.log("MongoDB connected");
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

module.exports = connectDB;