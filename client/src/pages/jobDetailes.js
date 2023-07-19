import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../components/Layout/Layout";

const boldTextStyle = {
  fontWeight: "bold",
  color: "#369",
};

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/job/jobdetails/${id}`);
        setJob(response.data);
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };
    fetchJobDetails();
  }, [id]);

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            {job ? (
              <div>
                <h1 style={{ color: "#369" }}>{job.position}</h1>
                <p style={boldTextStyle}>Company: {job.company}</p>
                <hr />
                <p style={boldTextStyle}>Position: {job.position}</p>
                <hr />
                <p style={boldTextStyle}>Status: {job.status}</p>
                <hr />
                <p style={boldTextStyle}>Work Type: {job.workType}</p>
                <hr />
                <p style={boldTextStyle}>Work Location: {job.workLocation}</p>
                <hr />
                <p style={boldTextStyle}>Experience Level: {job.experienceLevel}</p>
                <hr />
                <p style={boldTextStyle}>Skills: {job.skills}</p>
                <hr />
                <p style={boldTextStyle}>Industry Type: {job.industryType}</p>
                <hr />
                <p style={boldTextStyle}>Education: {job.education}</p>
                <hr />
                {/* Add other fields as needed */}
                <button className="btn btn-primary">Apply</button>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
         
        </div>
      </div>
    </Layout>
  );
};

export default JobDetails;
