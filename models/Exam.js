const mongoose = require('mongoose');

const ExamSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
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
    
    date: {
        type: Date,
       // required: [true, "Please provide date"]
    }
        
});
const Exam = mongoose.model("Exam", ExamSchema);

module.exports = Exam;