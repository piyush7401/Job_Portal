const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");


async function registerController(req,res,next){
  const { name, email, password } = req.body;
  //validate
  if (!name) {
    return next("name is required");
  }
  if (!email) {
    return next("email is required");
  }
  if (!password) {
    return next("password is required and greater than 6 character");
  }

  const exisitingUser = await userModel.findOne({ email });
  if (exisitingUser) {
    return next("Email Already Register Please Login");
  }
  const user = await userModel.create({ name, email, password });
  
  //token
   const token = user.createJWT();
  //  headers.append("Authorization", "Bearer " + token);
   res.status(201).cookie("token",token,{samesite:"none",secure:true}).json({
     success: true,
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

  console.log(email);
  console.log(password);
  //validation
  if (!email || !password) {
    return next("Please Provide All Fields");
  }
  //find user by email
  const user = await userModel.findOne({ email }).select("+password");   //yeh select password ko hide kardega in user mai
  
  if (!user) {
    return next("Invalid Useraname or password");
  }
  //compare password
 
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return next("Invalid Useraname or password");
  }
  user.password = undefined;

  const token = user.createJWT();

  res.status(200).cookie("token",token,{samesite:"none",secure:true}).json({
    success: true,
    message: "Login SUccessfully",
    user,
    token,
  });

};

module.exports = {registerController,loginController};