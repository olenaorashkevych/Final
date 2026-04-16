// Підключаємо модель користувача
const User = require("../models/User");

// Бібліотека для хешування паролів
const bcrypt = require("bcrypt");

// Функція логіну
const jwt = require("jsonwebtoken");

// Функція реєстрації
exports.register = async (req, res) => {

    try {

        // Беремо email і password з body запиту
        const { email, password } = req.body;

        // Перевіряємо чи користувач з таким email вже існує
        const existingUser = await User.findOne({ email });

        // Якщо існує — повертаємо помилку
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Хешуємо пароль
        // 10 — рівень "salt rounds" (наскільки складне хешування)
        const hashedPassword = await bcrypt.hash(password, 10);

        // Створюємо нового користувача
        const user = new User({
            email,
            password: hashedPassword
        });

        // Зберігаємо користувача в MongoDB
        await user.save();

        // Повертаємо відповідь про успішну реєстрацію
        res.json({ message: "User registered successfully" });

    } catch (error) {

        // Якщо виникла помилка сервера
        res.status(500).json({ message: "Server error" });

    }
};

exports.login = async (req, res) => {

    try {

        // Беремо email і password з body запиту
        const { email, password } = req.body;

        // Шукаємо користувача в базі по email
        const user = await User.findOne({ email });

        // Якщо користувача не знайдено
        if (!user) {
            return res.status(400).json({ message: "Invalid email" });
        }

        // Порівнюємо введений пароль з хешем
        const isMatch = await bcrypt.compare(password, user.password);

        // Якщо пароль неправильний
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid password" });
        }

        // Створюємо JWT token
        const token = jwt.sign(
            { userId: user._id }, // дані які зберігаються в token
            "secretkey", // секретний ключ сервера
            { expiresIn: "1h" } // токен працює 1 годину
        );

        // 👉 зберігаємо токен в БД
        user.token = token;

        await user.save();

        // Повертаємо token клієнту
        res.json({
            message: "Login successful",
            token: token,
            email: email
        });

    } catch (error) {

        res.status(500).json({ message: "Server error" });

    }
};

// Отримати профіль користувача
exports.getProfile = async (req, res) => {

    try {

        // userId ми отримали з token у authMiddleware
        const userId = req.userId;

        // шукаємо користувача в базі
        const user = await User.findById(userId).select("-password");
        // "-password" означає що поле password не повертається

        // якщо користувача не знайдено
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // повертаємо дані користувача
        res.json(user);

    } catch (error) {

        res.status(500).json({ message: "Server error" });

    }

};

exports.isAuth = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(401).json({ isAuth: false });
        }

        const decoded = jwt.verify(token, "secretkey");

        const user = await User.findById(decoded.userId);

        if (!user || user.token !== token) {
            return res.status(401).json({ isAuth: false });
        }

        res.json({
            isAuth: true,
            email: user.email
        });

    } catch (error) {
        res.status(401).json({ isAuth: false });
    }
};