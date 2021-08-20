import React from "react";
import './style.css';

import JobResults from "./jobResults";
import RecentSearches from "./recentSearches";

import TopCompanies from "./topCompanies"

export default function SearchResults() {
    return (
        <div className="row col-12">

            <div className="col-4">
                <RecentSearches />
                <TopCompanies />
            </div>
            
            <div className="col-8">
                <JobResults />
            </div>
        </div>
    );
}