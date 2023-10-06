const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


const signUp_Schema = new mongoose.Schema({
    username: {
        type: String,
        require: [true, "Name is required"]
    },


    email: {
        type: String,
        unique: true,
        require: [true, "Email is required"]
    },

    gneder:{
        type:String,
        defualt:  "Male"
    },

    password: {
        type: String,
        require: true
    }
});


signUp_Schema.pre("save", async function () {
    if (this.isModified("password")) {
        this.password =  await bcrypt.hash(this.password, 10);
    }
});


const signUpModel = new mongoose.model("User", signUp_Schema);



module.exports = signUpModel;


