const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());

const mongoUrl = "mongodb+srv://demo:harish.9798@admain.sirm0ih.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
})
    .then(() => {
        console.log("Connected To DataBase");
    })
    .catch((e) => console.log(e));

require("./userDetails")

const User = mongoose.model("UserInfo");

app.post("/signup", async (req, res) => {
    const { fName, lName, email, phoneNo, password, confirmPassword } = req.body;
    try {
        await User.create({
            fName,
            lName,
            email,
            phoneNo,
            password,
            confirmPassword
        })
        res.send({
            status: "Ok"
        })
    } catch (error) {
        res.send({
            status: "error"
        })
    }
})

app.listen(8000, () => {
    console.log("Server Started");
})