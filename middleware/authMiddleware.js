const JWT = require("jsonwebtoken");

async function userAuth(req, res, next){
  // console.log(req.body.user);
  // const authHeader = req.headers.authorization;
  const token = req.cookies.token;
  if (!token) {
    next("Auth Failed");
  }
  // const token = authHeader.split(" ")[1];
  try {
    const payload = JWT.verify(token, process.env.JWT_SECRET);
    req.userId =  payload.userId;
    // console.log(req)
    
    next();
  } catch (error) {
    next("Auth Failed");
  }
};

module.exports = userAuth;