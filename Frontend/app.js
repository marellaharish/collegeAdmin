const express = require("express");
const collection = require("./mongo");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.get("/",cors(),(req, res) => {

});

app.post("/",async(req, res) => {
    const{email, password} = req.body;

    try {
        const check = await collection.findOne({ email: email})
        if (check) {
            res.status(400).json({ message: " exists" })
        }
        else {
                    // await collection.insertOne(req.body);
                    res.status(200).json({ message: "notexist" })
                }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Non Exist" })
    }
});


app.post("/signup",async(req, res) => {
    const{firstName, lastName, email, phoneNumber, password} = req.body;

    const data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        password: password
    }

    try {
        const check = await collection.findOne({ email: email})
        if (check) {
            res.status(400).json({ message: "exists" })
        }
        else {
                    // await collection.insertOne(req.body);
                    res.status(200).json({ message: "notexist" })
                    await collection.insertMany([data])
                }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "notexist" })
    }
});

app.listen(8000, () => {
    console.log("Server is running");
})