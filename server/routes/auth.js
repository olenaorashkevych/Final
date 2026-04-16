const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");


const authController = require("../controllers/authController");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/isAuth", authController.isAuth);
router.get("/profile", authMiddleware, authController.getProfile);


module.exports = router;