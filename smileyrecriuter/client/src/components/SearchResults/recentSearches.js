import React, { useState, useEffect } from "react";


export default function RecentSearches(props) {


    const [recentSearches, setRecentSearches] = useState([])
    const [renderReady, setRenderReady] = useState("false")

   


    const renderRecentSearches = () => {
        let list;
        if(recentSearches){
            list = recentSearches.map((search, i)=> {
                return (
                    <li className="list-group-item"key={i}><button onClick={()=>props.setSearchObj({jobTitle: search.jobTitle, location: search.location})}> {search.jobTitle} in {search.location} </button>{search.jobTitle} in {search.location}</li>
                )
            })
           
        }
        return list
    }




    useEffect(() => {
        if (recentSearches.length < 5 && props.searchObj.jobTitle) {
            setRecentSearches([ props.searchObj, ...recentSearches])
        } 
         else if(recentSearches.length > 4 ){
             console.log("over the limit");
             let copy = recentSearches.slice()
             let newCopy = copy.pop()
             setRecentSearches([ props.searchObj, ...copy])
         }
    }, [props.searchObj.jobTitle, props.searchObj.location]);

    

    


    
    if(recentSearches.length){
    return (
        <>
        {recentSearches.length && (
            
                <div className="border border-dark p-2 m-2">
                <h5 className="card-title cardHeaders">Recent Searches</h5>
                <ul className="list-group">
                    {renderRecentSearches()}
                    
                </ul>
            </div>
            )}
        
    
    </>
    )
        }else{return null}
}



