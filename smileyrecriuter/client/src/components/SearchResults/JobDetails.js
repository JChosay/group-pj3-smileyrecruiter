import React, { useState } from "react";



export default function JobDetails(props) {



    console.log(props.jobDetails)





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
                </div>
            </div>
        </div>
    );
}