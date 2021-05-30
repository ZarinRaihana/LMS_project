const Result = require('../models/Result');
const ErrorResponse = require('../utils/errorResponse');


exports.createResult = async(req, res, next) => {
    const {examId, username, marks} = req.body;

    try{
        const res = await Result.create({
            examId, 
            username, 
            marks
        });
        res.save()
        .then(result => {

            console.log(result);
        })

    }catch(error){
        next(error);
    }

};
// ALL result
exports.result = async(req, res, next) => {
    try{
        const results = await Result.find({ examId: req._parsedUrl.query });
        res.json(results);
    }catch(error){
        next(error);
    }
};