const express = require("express");
const { login, register } = require("../controllers/auth_controller");
const { verifyJWTToken } = require("../controllers/test_controller")

const router = express.Router();

//User auth
router.route("/login").post(login);
router.route("/register").post(register);
router.route("/test").post(verifyJWTToken);

module.exports = router;