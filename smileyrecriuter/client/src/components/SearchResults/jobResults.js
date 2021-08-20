import React from "react";
import { searchJobs} from '../utils/API';

export default function  JobResults(props) {

    const searchAdzuna = async () => {
    let location = props.searchObj.location
    let jobTitle = props.searchObj.jobTitle
    try {
        const resp = await searchJobs(jobTitle, location)
        const data = await resp.json()
        console.log(data.results);
    } catch (error) {
        console.log(error);
    }

}
searchAdzuna()

    return (
        <div className="border border-dark m-2 p-2">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Job Title</h4>
                    <h6 className="card-subtitle mb-2 text-muted">Location</h6>
                    <p className="card-text">
                        details if we want
                    </p>
                    <a href="#!" className="card-link">view job details</a>
                    
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Job Title</h4>
                    <h6 className="card-subtitle mb-2 text-muted">Location</h6>
                    <p className="card-text">
                        details if we want
                    </p>
                    <a href="#!" className="card-link">view job details</a>
                    
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Job Title</h4>
                    <h6 className="card-subtitle mb-2 text-muted">Location</h6>
                    <p className="card-text">
                        details if we want
                    </p>
                    <a href="#!" className="card-link">view job details</a>
                    
                </div>
            </div>


        </div>
    );
}