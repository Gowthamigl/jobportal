import jobsModel from "../models/jobsModel.js";
import mongoose from "mongoose";
import moment from "moment";
// ====== CREATE JOB ======
export const createJobController = async (req, res, next) => {
  const { company, position,workLocation,industryType} = req.body;
  if (!company || !position || !workLocation || !industryType) {
    next("Please Provide All Fields");
  }
  req.body.createdBy = req.session.user;
  const job = await jobsModel.create(req.body);
  res.status(201).json({ job });
};



export const getjobs = async (req, res, next) => {
  try{
    const user=await jobsModel.find()
    if(user){
       // res.json(user)
        res.status(200).json(user)
    }else{
        res.status(404).json({message:"user not found"})
    }
}catch(err){
    console.error('Error getting user', err);
    res.status(500).json({message:"internal server err"})
}
};


// Assuming you have already imported the necessary modules and the Job model

export const getJobById = async (req, res, next) => {
  try {
    const jobId = req.params.id; // Assuming the job ID is passed as a URL parameter
    const job = await jobsModel.findById(jobId);
    
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.status(200).json(job);
    console.log(job)
  } catch (err) {
    console.error('Error getting job details:', err);
    res.status(500).json({ message: "Internal server error" });
  }
};
