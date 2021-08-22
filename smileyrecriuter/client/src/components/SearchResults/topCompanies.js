import React from "react";
import { topCompanies } from '../utils/API';


export default function TopCompanies() {
    return (
        <div className="border border-dark p-2 m-2">
            <h5 className="card-title cardHeaders">Top Companies</h5>
            <ul className="list-group">
                <li className="list-group-item">Facebook</li>
                <li className="list-group-item">Amazon</li>
                <li className="list-group-item">Google</li>
                <li className="list-group-item">Oracle</li>
                <li className="list-group-item">Government</li>
            </ul>
        </div>
    );
}



