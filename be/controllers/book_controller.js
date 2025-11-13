const BookingModel = require("../models/booking_model");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();
const JWT_KEY = process.env.JWT_KEY;

//Book
const book = async (req, res) => {
    try {
        const { custId, venue, bookingDate, cost } = req.body;
        let test = await BookingModel.findOne({ bookingDate })

        if (test != null) {
            return res.status(201).json({ message: "Slots not available" });
        } else {
            let token = jwt.verify(custId, JWT_KEY);
            const newBooking = new BookingModel({ custId: token._id, venue, bookingDate, cost })
            const resp = await newBooking.save();
            return res.status(201).json({ message: "Slot Booked" });
        }
    } catch (err) {
        throw err;
    }
};

module.exports = {
    book
};