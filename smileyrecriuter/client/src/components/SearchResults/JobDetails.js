import React, { useState } from "react";

import Auth from '../utils/auth';
import { saveJob } from '../utils/API';

export default function JobDetails(props) {


    const handleSaveJob = async (jobData) => {
      
        const token = Auth.loggedIn() ? Auth.getToken() : null;
    
        if (!token) {
          return false;
        }

        let jobToSave = {
            job_id: jobData.id,
            job_title: jobData.title,
            job_description: jobData.description,
            job_location: jobData.location.display_name,
            job_companyName: jobData.company.display_name,
            job_comLink: jobData.redirect_url,
            job_category: jobData.category.label,
            job_postDate: jobData.created,
        }
        console.log(jobToSave);
        try {
          const response = await saveJob(jobToSave, token);
    
          if (!response.ok) {
            throw new Error('something went wrong!');
          }
    
          // if book successfully saves to user's account, save book id to state
          //setSavedBookIds([...savedBookIds, bookToSave.bookId]);
        } catch (err) {
          console.error(err);
        }
      };
    





    return (
        <div>
            <div className="card">
                <div className="card-body">

                    <h4 className="card-title">{props.jobDetails.title}</h4>
                    <h6 className="card-subtitle mb-2 text-muted">Type: {props.jobDetails.label} || Posted: {props.jobDetails.created}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Employer: {props.jobDetails.company.display_name}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">{props.jobDetails.location.area[3]}, {props.jobDetails.location.area[1]} ({props.jobDetails.location.area[2]})</h6>
                    <a target="_blank" rel="noopener noreferrer" href={props.jobDetails.redirect_url}><h6 className="card-subtitle mb-2 text-muted">Job Posting Link (External) </h6></a>
                    <p className="card-text">
                        {props.jobDetails.description}
                    </p>
                    <button onClick={() => {
                        props.setActivePanel("job list")
                    }}>Click to go back</button>
                    {Auth.loggedIn() && (
                    <button
                    onClick={()=>{handleSaveJob(props.jobDetails)}}
                    >Save job to profile</button>
                    )}
                </div>
            </div>
        </div>
    );
}