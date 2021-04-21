const express = require('express');
const router = express.Router();


const { 
    register, 
    login, 
    forgotpassword, 
    resetpassword 
} = require("../../controllers/auth");


router.route("/teacher/register").post(register);

router.route("/teacher/login").post(login);

router.route("/forgotpassword").post(forgotpassword);

router.route("/resetpassword/:resetToken").put(resetpassword);




module.exports = router;