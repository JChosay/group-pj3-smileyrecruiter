import React, { useEffect, useState } from "react";
import { getTopCompanies } from '../utils/API';


export default function TopCompanies(props) {

    const [topCompanies, setTopCompanies] = useState();

    useEffect(() => {
        let location = props.searchObj.location
        let jobTitle = props.searchObj.jobTitle
        if (!location || !jobTitle){
            return
        } else{
            try {
                getTopCompanies(jobTitle, location).then((res) => {
                    return res.json()
                }).then((data) => {
                    
                    setTopCompanies(data.leaderboard);
                    
                });
            } catch (error) {
                console.log(error);
            }
        }
      

    }, [props.searchObj.jobTitle,props.searchObj.location]);

    const renderTopCompanies = () => {
        let list;
        if(topCompanies){
            list = topCompanies.map((company, i)=> {
                return (
                    <li className="list-group-item"key={i}>{company.canonical_name}</li>
                )
            })
        }
        return list
    }
    if(topCompanies){
    return (
        <div className="border border-dark p-2 m-2">
            <h5 className="card-title cardHeaders">Top Companies</h5>
            <ul className="list-group">
                {renderTopCompanies()}
                
            </ul>
        </div>
    )} else {
        return null;
    };
}



