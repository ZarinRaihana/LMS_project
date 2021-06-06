const express = require('express');
const router = express.Router();
 

const { 
    register, 
    // upUser
    login, 
    forgotpassword, 
    resetpassword 
} = require("../controllers/auth");


router.route("/register").post(register);

router.route("/login").post(login);

// router.route("/profile/:userId").patch(upUser);

router.route("/forgotpassword").post(forgotpassword);

router.route("/resetpassword/:resetToken").put(resetpassword);




module.exports = router;