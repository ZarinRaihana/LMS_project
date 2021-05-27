const User = require("../models/User");
const ErrorResponse = require('../utils/errorResponse');


// Register User
exports.register = async(req, res, next) => {
    const {username, email, password, role} = req.body;

    try{
        const user = await User.create({
            username, 
            email, 
            password,
            role
        });

        sendToken(user, 201, res);

    }catch(error){
        next(error);
    }

};
 

//  Login User
exports.login = async(req, res, next) => {
    const { email, password  } = req.body;

    // Check if email and password is provided
    if(!email || !password ){
        return next(new ErrorResponse("Please provide email and password"), 400);
    }
    
    try {
        // Check that user exists by email
        const user = await User.findOne({email}).select("+password");

        if(!user){
            return next(new ErrorResponse("Invalid Credentials"), 401);
        }
        console.log(user);
        // Check that password match
        const isMatch = await user.matchPasswords(password);

        if (!isMatch){
            return next(new ErrorResponse("Please provide email and password"), 401);
        }

        // Check Role
        // if (req.user.role !== role){
        //     return next(new ErrorResponse("Invalid Credentials"), 401);
        // }

        sendToken(user, 200, res);

    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};





exports.forgotpassword = (req, res, next) => {
    res.send("Forgot Password Route");
};


exports.resetpassword = (req, res, next) => {
    res.send("Reset Password Route");
};

const sendToken = (user, statusCode, res) => {
    const token = user.getSignedJwtToken();
    res.status(statusCode).json({ sucess: true, token });
  };