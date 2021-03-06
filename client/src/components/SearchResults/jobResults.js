import React, { useEffect, useState } from "react";
import { searchJobs, } from '../utils/API';

export default function JobResults(props) {
    const [jobData, setJobData] = useState(null);



    useEffect(() => {
        let location = props.searchObj.location
        let jobTitle = props.searchObj.jobTitle
        if (!location || !jobTitle) {
            return
        } else {
            try {
                searchJobs(jobTitle, location).then((res) => {
                    return res.json()
                }).then((data) => {

                    setJobData(data.results);
                });
            } catch (error) {
                console.log(error);
            }
        }


    }, [props.searchObj.jobTitle, props.searchObj.location]);



    const renderJobCards = () => {
        let result = null;

        if (jobData) {
            result = jobData.map((datum) => {
                return (
                    <div className="card border border-dark my-2" key={datum.id}>
                        <div className="card-body ">

                            <h4 className="card-title">{datum.title}</h4>
                            <h6 className="card-subtitle mb-2 text-muted">Type: {datum.category.label} || Posted: {datum.created}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Employer: {datum.company.display_name}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">{datum.location.area[3]}, {datum.location.area[1]} ({datum.location.area[2]})</h6>
                            <a target="_blank" rel="noopener noreferrer" href={datum.redirect_url}><h6 className="card-subtitle mb-2 text-muted">Job Posting Link (External) </h6></a>
                            <p className="card-text">
                                {datum.description.substring(0, 100) + "..."}
                            </p>
                            <button className="btn btn-warning"
                                onClick={async (e) => {
                                    props.setActivePanel("job detail")
                                    props.setJobDetails(datum)
                                }}> Click me for the deets</button>
                        </div>
                    </div>
                )
            });
        }

        return result;
    }


    return (
        <div className="m-2 p-2" style={{
            maxHeight: "65vh",
            overflow: "auto"
        }}>
            {renderJobCards()}
        </div>
    );
}