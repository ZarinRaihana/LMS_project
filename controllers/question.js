const Question = require('../models/Question');
const ErrorResponse = require('../utils/errorResponse');


// Creating Question
exports.createQuestion = async(req, res, next) => {
    const {ques, option1, option2, option3, option4, correctAns} = req.body;

    try{
        const question = await Question.create({
            ques, 
            option1, 
            option2, 
            option3, 
            option4, 
            correctAns
        });
        question.save()
        .then(result => {

            console.log(result);
        })

    }catch(error){
        next(error);
    }

};