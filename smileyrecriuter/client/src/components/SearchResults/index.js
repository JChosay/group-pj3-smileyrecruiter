import React from "react";
import RecentSearches from "../RecentSearches";
import JobResults from "../JobResults";
import TopCompanies from "../TopCompanies"

export default function SearchResults(props) {
    return (
        <div className="row col-12">
            <div className="col-4">
                <RecentSearches/>
                <TopCompanies/>
            </div>
            <div className="col-8">
                <JobResults searchObj={props.searchObj} />
            </div>

            
        </div>
    );
}