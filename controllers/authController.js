const userModel = require("../models/userModel");

async function registerController(req,res,next){
  const { name, email, password } = req.body;
  //validate
  if (!name) {
    next("name is required");
  }
  if (!email) {
    next("email is required");
  }
  if (!password) {
    next("password is required and greater than 6 character");
  }

  const exisitingUser = await userModel.findOne({ email });
  if (exisitingUser) {
    next("Email Already Register Please Login");
  }
  const user = await userModel.create({ name, email, password });
  
  //token
   const token = user.createJWT();
   res.status(201).send({
     sucess: true,
     message: "User Created Successfully",
     user: {
       name: user.name,
       lastName: user.lastName,
       email: user.email,
       location: user.location,
     },
     token,
   });
};

async function loginController(req, res, next){
  const { email, password } = req.body;
  //validation
  if (!email || !password) {
    next("Please Provide All Fields");
  }
  //find user by email
  const user = await userModel.findOne({ email }).select("+password");   //yeh select password ko hide kardega in user mai
  if (!user) {
    next("Invalid Useraname or password");
  }
  //compare password
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    next("Invalid Useraname or password");
  }
  user.password = undefined;

  const token = user.createJWT();

  res.status(200).json({
    success: true,
    message: "Login SUccessfully",
    user,
    token,
  });
  
};

module.exports = {registerController,loginController};