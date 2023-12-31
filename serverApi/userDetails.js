const mongoose = require("mongoose");

const UserDetailsSchema = new mongoose.Schema(
    {
        fName: String,
        lName: String,
        email: { type: String, unique: true },
        phoneNo: String,
        password: String,
        confirmPassword: String,
    },
    {
        collection: "UserInfo",
    }
);

mongoose.model("UserInfo", UserDetailsSchema)