const UserModel = require("../models/user_model");
var jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();
const JWT_KEY = process.env.JWT_KEY;

const verifyJWTToken = async (req, res) => {
    try {
        const { token } = req.body;
        var decoded = jwt.verify(token, JWT_KEY);

        let userInDB = await UserModel.findById(decoded._id);

        let userInfo = {
            _id: userInDB._id,
            username: userInDB.username,
            email: userInDB.email,
            isAdmin: userInDB.isAdmin,
        }
        res.status(200).json({
            result: { token, user: userInfo },
            message: "Logged In",
        });
    } catch (err) {
        return res.status(401).json({ message: "Invalid Token" });
    }

};

module.exports = {
    verifyJWTToken
};