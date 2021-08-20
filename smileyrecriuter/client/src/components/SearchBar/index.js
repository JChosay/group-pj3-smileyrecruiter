import React from "react";


export default function SearchBar() {
    return (
        <>
            <form className="form-inline col-12 d-flex justify-content-around border border-dark p-2 m-2">
                <div className="form-group mb-2 w-40">
                    <label for="jobTitle" className="sr-only" >Email</label>
                    <input type="text"  className="form-control w-100" id="jobTitle" placeholder="job title"></input>
                </div>
                <div className="form-group mx-sm-3 mb-2 w-40">
                    <label for="location" className="sr-only">Password</label>
                    <input type="text" className="form-control w-100" id="location" placeholder="location"></input>
                </div>
                <button type="submit" className="btn btn-danger mb-2 col-12">Search Job Listings</button>
            </form>
        </>
    );
}