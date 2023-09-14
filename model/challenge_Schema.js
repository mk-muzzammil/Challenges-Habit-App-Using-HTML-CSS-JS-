const mongoose = require("mongoose")

let schema = mongoose.Schema({
    image: {
        data: Buffer,
        contentType: String
    },
    Title: String,
    Description: String,
    Day_01: String,
    Day_02: String,
    Day_03: String,
    Day_04: String,
    Day_05: String,
    Day_06: String,
    Day_07: String,
    Day_08: String,
    Day_09: String,
    Day_10: String,
    Day_11: String,
    Day_12: String,
    Day_13: String,
    Day_14: String,
    Day_15: String,
    Day_16: String,
    Day_17: String,
    Day_18: String,

});

module.exports = mongoose.model("Challenges", schema);