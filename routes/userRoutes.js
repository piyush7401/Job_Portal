const express = require("express");
const updateUserController = require("../controllers/userController.js");
const userAuth = require("../middleware/authMiddleware.js");

//router object
const router = express.Router();

//routes
// GET USERS || GET

// UPDATE USER || PUT
router.put("/update-user", userAuth, updateUserController);

export default router;