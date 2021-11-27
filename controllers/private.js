  
exports.getPrivateRoute = (req, res, next) => {
  // console.log(req.user);
    res
      .status(200)
      .json({
        success: true,
        user: req.user,
        data: "You got access to the private data in this route",
      });
  }; 