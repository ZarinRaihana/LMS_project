const express = require('express');
const router = express.Router();

const {createExam, exams, deleteExam, specExam} = require("../controllers/exam");

const {createQuestion, questions, deleteQues} = require("../controllers/question");

const { result, createResult } = require ("../controllers/result")



router.route ("/exam").post(createExam);
router.route ("/exams").get(exams);
router.route("/exams/:examId").delete(deleteExam);
router.route("/exams/:examId").get(specExam);

router.route("/exam/addQues").post(createQuestion);
router.route("/exam?:examId").get(questions);
router.route("/exam/addQues/quesList/:quesId").delete(deleteQues);

router.route("/result/exam?:examId").post(createResult);
router.route("/result/exam?:examId").get(result);


module.exports = router;