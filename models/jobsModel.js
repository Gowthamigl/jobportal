import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      requied: [true, "Companay name is require"],
    },
    position: {
      type: String,
      required: [true, "Job Position is required"],
      maxlength: 100,
    },
    status: {
      type: String,
      enum: ["pending", "reject", "interview"],
      default: "pending",
    },
    workType: {
      type: String,
      enum: ["full-time", "part-time", "internship", "contaract"],
      default: "full-time",
    },
    workLocation: {
      type: String,
      required: [true, "Work location is required"],
    },
    experienceLevel: {
      type: String,
      default: "fresher",
      required: [true, "Work location is required"],
    },
    skills:{
      type:String
    },
   industryType:{
    type:String
   },
   education:{
    type:String
   }
    
  },
  { timestamps: true }
);


export default mongoose.model("Job", jobSchema);
