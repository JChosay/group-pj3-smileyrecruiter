import React from "react";


export default function SearchBar(props) {

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        props.setSearchObj({
            jobTitle: props.jobInput,
            location: props.locationInput
        })
        //send this data to the recent searches component

        props.setJobInput("")
        props.setLocationInput("")
      };



    return (
        <>
            <form className="form-inline col-12 d-flex justify-content-around border border-dark p-2 m-2" onSubmit={handleFormSubmit}>
                <div className="form-group mb-2 w-40">
                    <label for="jobTitle" className="sr-only" >Job Title</label>
                    <input type="text"  className="form-control w-100" id="jobTitle" placeholder="job title" onChange={(e) => props.setJobInput(e.target.value)}></input>
                </div>
                <div className="form-group mx-sm-3 mb-2 w-40">
                    <label for="location" className="sr-only">location</label>
                    <input type="text" className="form-control w-100" id="location" placeholder="location" onChange={(e) => props.setLocationInput(e.target.value)}></input>
                </div>
                <button type="submit" className="btn btn-danger mb-2 col-12">Search Job Listings</button>
            </form>
        </>
    );
}