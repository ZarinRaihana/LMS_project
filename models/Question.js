const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    ques: {
        type: String,
        required: true
    },
    option1:{
        type: String
    },
    option2:{
        type: String
    },
    option3:{
        type: String
    },
    option4:{
        type: String
    },
    correctAns:{
        type: String,
        required: true
    }
});
const Question = mongoose.model("Question", QuestionSchema);

module.exports = Question;