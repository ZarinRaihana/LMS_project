const express = require('express');
const router = express.Router();

const {createExam, exams, deleteExam, specExam} = require("../controllers/exam");

const {createQuestion, questions, deleteQues} = require("../controllers/question");



router.route ("/exam").post(createExam);
router.route ("/exams").get(exams);
router.route("/exams/:examId").delete(deleteExam);
router.route("/exams/:examId").get(specExam);

router.route("/exam/addQues").post(createQuestion);
router.route("/exam?:examId").get(questions);
router.route("/exam/addQues/quesList/:quesId").delete(deleteQues);


module.exports = router;