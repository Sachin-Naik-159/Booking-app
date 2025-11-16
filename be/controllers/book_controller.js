const BookingModel = require("../models/booking_model");
const UserModel = require("../models/user_model");
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

const delBooking = async (req, res) => {
    try {
        const { _id } = req.body;
        console.log(_id);
        let resp = await BookingModel.findOneAndDelete({ _id });
        if (resp === null) {
            res.json({ message: "No Booking", resp });
        } else res.status(200).json({ message: "Deleated Booking" });
    } catch (err) {
        throw err;
    }
};

const getBooking = async (req, res) => {
    try {

        let query = { custId: req.user._id };
        if (req.params.type !== "user") {
            if (req.user.isAdmin) {
                query = {};
            }
        }

        let data = await BookingModel.find(query).populate({
            path: "custId",
            model: "UserModel",
            select: "username email",
        }).sort({ bookingDate: 1, username: 1 })
        res.status(200).json(data);

    } catch (err) {
        throw err;
    }
};

module.exports = {
    book,
    delBooking,
    getBooking
};