const Question = require('../models/Question');
const ErrorResponse = require('../utils/errorResponse');


// Creating Question
exports.createQuestion = async(req, res, next) => {
    const {ques, option1, option2, option3, option4, correctAns, examId} = req.body;

    try{
        const question = await Question.create({
            ques, 
            option1, 
            option2, 
            option3, 
            option4, 
            correctAns,
            examId
        });
        question.save()
        .then(result => {

            console.log(result);
        })

    }catch(error){
        next(error);
    }

};

//All Questions
exports.questions = async(req, res, next) => {
    // console.log(req._parsedUrl.query)
    try{
        const questions = await Question.find({ examId: req._parsedUrl.query });
        res.json(questions);
    }catch(error){
        next(error);
    }
};

// DELETE Question
exports.deleteQues = async(req, res, next) => {
    // console.log(req.params.quesId)
    try{
        const deletedQues = await Question.deleteOne({ _id: req.params.quesId });
        res.json(deletedQues);
    }catch(error){
        next(error);
    }
};

//  Updating Question
// exports.editQuestion = async(req, res, next) => {
//     // console.log(req.params.quesId)
//     try{
//         const editQuestion = await Question.findByIdAndUpdate(
//             { _id: req.params.quesId }, 
//             {$set: {ques: req.params.ques, 
//                      option1: req.params.option1, 
//                     // option2: req.params.option2, 
//                     // option3: req.params.option3, 
//                     // option4: req.params.option4, 
//                     correctAns: req.params.correctAns}
//             } );
//         res.json(editQuestion);
//     }catch(error){
//         next(error);
//     }
// };