const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
require("./models/dbconnect");

// global.__basedir = __dirname;

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json())

app.use("/api/v1/auth", require("./routes/auth_routers"));
app.use("/api/v1/book", require("./routes/book_routers"));

app.listen(PORT, () => {
    console.log("Started on: " + PORT)
})