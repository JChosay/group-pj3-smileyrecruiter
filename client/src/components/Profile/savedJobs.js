import React from "react";

export default function SavedJobs(props) {

    const  renderSavedJobs =  () => {
        let jobCards;
        if (props.jobs) {
            jobCards = props.jobs.map((job) => {
                return (
                    <div className="card"key={job._id}>
                        <div className="card-body">
                            <h4 className="card-title">{job.job_title}</h4>
                            <h6 className="card-subtitle mb-2 text-muted">{job.job_location}</h6>
                            <p className="card-text">
                                {job.job_description}
                            </p>
                            <a href={job.job_comLink} target="_blank"
                            className="card-link">view job details</a>

                        </div>
                    </div>
                )
            });
        }
       
        return jobCards
    }


    return (
        <div className="border border-dark m-2 p-2">
           {renderSavedJobs()}
        </div>


    );
}