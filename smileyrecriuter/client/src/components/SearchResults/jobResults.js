import React, { useEffect, useState } from "react";
import { searchJobs } from '../utils/API';

export default function JobResults(props) {
    const [jobData, setJobData] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false);

    // const searchAdzuna = async () => {
    //     let location = props.searchObj.location
    //     let jobTitle = props.searchObj.jobTitle
    //     try {
    //         const resp = await searchJobs(jobTitle, location)
    //         const data = await resp.json()
    //         console.log("data**", data);
    //         return data;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    useEffect(() => {
        let location = props.searchObj.location
        let jobTitle = props.searchObj.jobTitle
        try {
            searchJobs(jobTitle, location).then((res) => {
                return res.json()
            }).then((data) => {
                console.log("data**", data);
                setJobData(data.results);
            });
        } catch (error) {
            console.log(error);
        }

    }, [props.searchObj.jobTitle,props.searchObj.location])

    const renderJobCards = () => {
        let result = null;

        if (jobData) {
            result = jobData.map((datum) => {
                return (
                    <div className="card">
                        <div className="card-body">
                            {isExpanded ? <span>dog food</span> : null}
                            <h4 className="card-title">{datum.title}</h4>
                            <h6 className="card-subtitle mb-2 text-muted">{datum.location.display_name}</h6>
                            <p className="card-text">
                               {isExpanded ? datum.description : datum.description.substring(0,100)}
                            </p>
                            <button
                                onClick={() => {
                                    if (isExpanded) {
                                        setIsExpanded(false)
                                    } else {
                                        setIsExpanded(true)
                                    }
                                }}
                            >
                                expand
                            </button>
                        </div>
                    </div>
                )
            });
        }

        return result;
    }


    return (
        <div className="border border-dark m-2 p-2">
            {renderJobCards()}
        </div>
    );
}