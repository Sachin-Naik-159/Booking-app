const express = require("express");
const middleware = require("../middleware/protectectedResource");
const { book, delBooking, getBooking } = require("../controllers/book_controller");

const router = express.Router();

router
    .route("/booking")
    .post(middleware, book)
    .delete(middleware, delBooking);
router.route("/booking/:type").get(middleware, getBooking)

module.exports = router;