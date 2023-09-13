const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SWCRET = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9!@#$*&'()*+,-./{}[]";

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

    const encryptedpassword = await bcrypt.hash(password, 10);
    try {
        const oldUser = await User.findOne({ email });
        if (oldUser) {
            return res.json({ error: "User Already Exist" });
        }
        await User.create({
            fName,
            lName,
            email,
            phoneNo,
            password: encryptedpassword,
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


app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        return res.json({ error: "User Not Exist Please Register" });
    }
    if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ email: user.email }, JWT_SWCRET);
        if (res.status(201)) {
            return res.json({ status: "ok", data: token, userinfo: user });
        }
        else {
            return res.json({ error: "Error Signing" });
        }
    }
    res.json({ status: "error", error: "Invalid User Name Or Password" })
});


app.post("/home", async (req, res) => {
    const { token } = req.body;
    try {
        const user = jwt.verify(token, JWT_SWCRET);
        console.log(user);
        const userEmail = user.email;
        user.findOne({ email: userEmail }).then((data) => {
            res.send({ status: "ok", data: data });
        }).catch((error) => {
            res.send({ status: "Error", data: Error });
        });
    } catch (error) {

    }
})



app.listen(8000, () => {
    console.log("Server Started");
})