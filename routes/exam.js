const express = require('express');
const router = express.Router();

const {createExam, exams, deleteExam} = require("../controllers/exam");

const {createQuestion} = require("../controllers/question");



router.route ("/exam").post(createExam);
router.route ("/exams").get(exams);
router.route("/exams/:examId").delete(deleteExam);

router.route("/exam/addQues").post(createQuestion);

module.exports = router;