const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const Schema = mongoose.Schema;
const bookingSchema = new Schema(
    {
        custId: {
            type: ObjectId,
            ref: "UserModel",
        },
        venue: {
            type: String,
            required: true,
        },
        bookingDate: {
            type: Date,
            required: true,
        },
        cost: {
            type: Number,
            required: true
        }
    },
    { timestamps: true }
);

const BookingModel = mongoose.model("BookingModel", bookingSchema);
module.exports = BookingModel;  