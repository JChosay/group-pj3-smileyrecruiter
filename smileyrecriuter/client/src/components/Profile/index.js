import React from "react";
import './style.css';

import UserDetails from "../Profile/userDetails";
import SavedJobs from "../Profile/savedJobs";


export default function Profile() {
    return (
        <div className="row col-12">

            <div className="col-4">
                <UserDetails />
            </div>
            
            <div className="col-8">
                <SavedJobs />
            </div>
        </div>
    );
}