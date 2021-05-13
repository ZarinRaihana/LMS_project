const Exam = require('../models/Exam');
const ErrorResponse = require('../utils/errorResponse');


// Creating Exam
exports.createExam = async(req, res, next) => {
    const {department, course, quizNo, numofQues, marks, date} = req.body;

    try{
        const exam = await Exam.create({
            department, 
            course, 
            quizNo, 
            numofQues, 
            marks, 
            date
        });
        exam.save()
        .then(result => {

            console.log(result);
        })

    }catch(error){
        next(error);
    }

};

//All Exams
exports.exams = async(req, res, next) => {
    try{
        const exams = await Exam.find();
        res.json(exams);
    }catch(error){
        next(error);
    }
};

// 
exports.specExam = async(req, res, next) => {
    try {
        const specdExam = await Exam.findOne({_id: req.params.examId})
        res.json(specdExam);
    } catch (error) {
        next(error);
    }
}
 
// DELETE Exam
exports.deleteExam = async(req, res, next) => {
    // console.log(req.params.examId)
    try{
        const deletedExam = await Exam.deleteOne({ _id: req.params.examId });
        res.json(deletedExam);
    }catch(error){
        next(error);
    }
};