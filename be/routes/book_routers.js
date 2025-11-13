const express = require("express");
const { book } = require("../controllers/book_controller");

const router = express.Router();

router.route("/book").post(book);

module.exports = router;