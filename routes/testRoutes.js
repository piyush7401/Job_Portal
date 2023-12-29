const express = require("express");
const testPostController = require("../controllers/testController");
// import userAuth from "../middelwares/authMiddleware.js";

//router object
const router = express.Router();

//routes
router.post("/test-post", userAuth, testPostController);

//export
module.exports = router;