const express = require("express");
const { register, login, current } = require("../controllers/userController");
const validateToken = require("../middleware/tokenHandler");

const router = express.Router();

router.post("/register", register);
router.post("/login",login);
router.get("/current", validateToken,current);

module.exports =router;