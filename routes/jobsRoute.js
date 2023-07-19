import express from "express";
import {
  createJobController,
  getJobById,
  getjobs,
} from "../controllers/jobsController.js";


const router = express.Router();

//routes
// CREATE JOB || POST
router.post("/create-job",createJobController);

//GET JOBS || GET
router.get("/get-job",getjobs);

router.get("/jobdetails/:id",getJobById);

//UPDATE JOBS ||  PATCH
router.patch("/update-job/:id");

//DELETE JOBS || DELETE
router.delete("/delete-job/:id");

// JOBS STATS FILTER || GET
router.get("/job-stats");

export default router;
