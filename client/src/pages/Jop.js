import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputFrom from "../components/shared/InputFrom";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../redux/features/alertSlice";
import axios from "axios";
import Spinner from "../components/shared/Spinner";
import { toast } from "react-toastify";
import "../styles/job.css"
const Jops = () => {
  const [company, setCompany] = useState("");
  const [position, setposition] = useState("");
  const [workLocation, setlocation] = useState("");
  const [workType, setWorktype] = useState("");
  const[experienceLevel,setExperienceLevel]=useState("")
  const [skills, setSkills] = useState("");
  const [education, setEducation] = useState("");
  const [industryType, setIndustryType] = useState("");

  

  //hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // redux state
  const { loading } = useSelector((state) => state.alerts);
  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!company || !position || !workLocation || !workType || !experienceLevel) {
        return toast.error("Please Provide All Fields");
      }
      dispatch(showLoading());
      const { data } = await axios.post("/api/v1/job/create-job", {
        company,
        position,
        workType,
        workLocation,
        experienceLevel,
        skills,
        industryType,
        education,
      });
      dispatch(hideLoading());
      if (data.success) {
        toast.success("jop added Successfully");
        navigate("/dashboard");
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Invalid Form Details Please Try Agian!");
      console.log(error);
    }
  };

  return (
    <>
    {loading ? (
      <Spinner />
    ) : (
      <div className="container">
       
        <div className="row justify-content-center">
          <div className="col-md-6">
          <h3>Add Jobs Post</h3>
            <form className="card p-2" onSubmit={handleSubmit}>
              <InputFrom
                htmlFor="company"
                labelText="Company"
                type="text"
                value={company}
                handleChange={(e) => setCompany(e.target.value)}
                name="company"
              />
              <InputFrom
                htmlFor="position"
                labelText="Position"
                type="text"
                value={position}
                handleChange={(e) => setposition(e.target.value)}
                name="position"
              />
              <InputFrom
                htmlFor="location"
                labelText="Location"
                type="text"
                value={workLocation}
                handleChange={(e) => setlocation(e.target.value)}
                name="worklocation"
              />
              <InputFrom
                htmlFor="worktype"
                labelText="Work Type"
                type="text"
                value={workType}
                handleChange={(e) => setWorktype(e.target.value)}
                name="worktype"
              />
              <InputFrom
                htmlFor="experienceLevel"
                labelText="Experience Level"
                type="text"
                value={experienceLevel}
                handleChange={(e) => setExperienceLevel(e.target.value)}
                name="experienceLevel"
              />
              <InputFrom
                htmlFor="skills"
                labelText="Skills Required"
                type="text"
                value={skills}
                handleChange={(e) => setSkills(e.target.value)}
                name="skills"
              />
              <InputFrom
                htmlFor="industryType"
                labelText="Industry Type"
                type="text"
                value={industryType}
                handleChange={(e) => setIndustryType(e.target.value)}
                name="industryType"
              />
              <InputFrom
                htmlFor="education"
                labelText="Education Qualification"
                type="text"
                value={education}
                handleChange={(e) => setEducation(e.target.value)}
                name="education"
              />

              <button type="submit" className="btn btn-primary">
                Add Job
              </button>
            </form>
          </div>
        </div>
      </div>
    )}
  </>
  );
};

export default Jops;