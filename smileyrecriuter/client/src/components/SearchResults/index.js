import React, { useState } from "react";
import './style.css';

import JobResults from "./jobResults";
import RecentSearches from "./recentSearches";
import JobDetails from "./JobDetails";

import TopCompanies from "./topCompanies"






export default function SearchResults(props) {

    const [activePanel, setActivePanel] = useState("job list")
    const [jobDetails, setJobDetails] = useState({})

    const renderJobComponent = () => {
        if(activePanel==="job list"){
            return <JobResults searchObj={props.searchObj} setActivePanel={setActivePanel} setJobDetails={setJobDetails}/>
        }else if(activePanel==="job detail"){
            return <JobDetails setActivePanel={setActivePanel} jobDetails={jobDetails} setJobDetails={setJobDetails}/>
        }
    }

    return (
        <div className="row col-12">

            <div className="col-4">
                <RecentSearches searchObj={props.searchObj} setSearchObj={props.setSearchObj}/>
                <TopCompanies searchObj={props.searchObj}/>
            </div>
            
            <div className="col-8">
                {renderJobComponent()}
                
                
            </div>
        </div>
    );
}