const mongoose = require('mongoose');

const ExamSchema = new mongoose.Schema({
    department: {
        type: String,
        required: [true, "Please provide department"]
    },
    course:{
        type: String,
        required: [true, "Please provide course name"],
    },
    quizNo:{
        type: Number,
        required: [true, "Please provide quiz no."],
    },
    numofQues:{
        type: Number,
        required: [true, "Please provide number of ques"],
    },
    marks:{
        type: Number,
        required: [true, "Please provide marks"],
    },
    date: {
        type: Date,
       // required: [true, "Please provide date"]
    }
        
});
const Exam = mongoose.model("Exam", ExamSchema);

module.exports = Exam;