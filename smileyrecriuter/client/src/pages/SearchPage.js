import React, {useState} from "react";
import SearchBar from "../components/SearchBar"
import SearchResults from "../components/SearchResults"


export default function SearchPage() {

 const [jobInput, setjobInput] = useState("")
 const [locationInput, setLocationInput] = useState("")
 const [searchObj, setSearchObj] = useState({})
console.log(searchObj);






    return (
        <div className="row">
        <SearchBar jobInput={jobInput} 
        setJobInput={setjobInput} 
        locationInput={locationInput} 
        setLocationInput={setLocationInput}
        searchObj={searchObj} 
        setSearchObj={setSearchObj}
        />
        <SearchResults searchObj={searchObj} />
        
        </div>
    );
}