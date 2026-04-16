const mongoose = require("mongoose");

// Створюємо схему користувача
const UserSchema = new mongoose.Schema({

    // Email користувача
    email: {
        type: String,      // тип поля
        required: true,    // обов'язкове поле
        unique: true       // не можна створити два однакових email
    },

    // Пароль користувача
    password: {
        type: String,
        required: true
    },
    token: {
        type: String
    }

});

// Експортуємо модель User для роботи з колекцією users в MongoDB
module.exports = mongoose.model("User", UserSchema);