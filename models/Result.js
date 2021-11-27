const mongoose = require('mongoose');

const ResultSchema = new mongoose.Schema({
    examId: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: [true, "Please provide username"]
    },
    marks:{
        type: Number,
        required: [true, "Please provide marks"],
    }       
});
const Result = mongoose.model("Result", ResultSchema);

module.exports = Result;