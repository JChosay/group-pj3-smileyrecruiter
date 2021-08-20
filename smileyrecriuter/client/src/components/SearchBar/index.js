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
         <form className="form-inline col-12 d-flex justify-content-around p-2 mx-auto" onSubmit={handleFormSubmit}>
             {/* Job Title form input */}
             <div className="form-group mb-2 col-4">
                 <input type="text" className="form-control w-100 border border-dark" id="jobTitle" placeholder="job title" onChange={(e) => props.setJobInput(e.target.value)}></input>
             </div>

             {/* Location form input */}
             <div className="form-group mb-2 col-4">
                 <input type="text" className="form-control w-100 border border-dark" id="location" placeholder="location" onChange={(e) => props.setLocationInput(e.target.value)}></input>
             </div>

             {/* Search Jobs Button */}
             <button type="submit" className="btn btn-warning mb-2 col-3 jobBtn">Search Job Listings</button>
         </form>
     </>
    );
}