const express = require("express");
const {createJobController,getAllJobsController,updateJobController,deleteJobController,jobStatsController} = require("../controllers/jobsController");
const userAuth = require("../middleware/authMiddleware.js");

const router = express.Router();

//routes
// CREATE JOB || POST
router.post("/create-job", userAuth, createJobController);

//GET JOBS || GET
router.get("/get-job", userAuth, getAllJobsController);

//UPDATE JOBS ||  PATCH
router.patch("/update-job/:id", userAuth, updateJobController);

//DELETE JOBS || DELETE
router.delete("/delete-job/:id", userAuth, deleteJobController);

// JOBS STATS FILTER || GET
router.get("/job-stats", userAuth, jobStatsController);


module.exports = router;