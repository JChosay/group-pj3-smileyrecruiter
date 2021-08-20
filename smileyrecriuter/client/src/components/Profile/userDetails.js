import React from "react";


export default function UserDetails() {
    return (
        <div className="border border-dark p-2 m-2">
            <h5 className="card-title cardHeaders">Recent Searches</h5>
            <ul className="list-group">
                <li className="list-group-item">Librarian</li>
                <li className="list-group-item">Web Developer</li>
                <li className="list-group-item">Janitor</li>
                <li className="list-group-item">POTUS</li>
            </ul>
        </div>
    );
}
