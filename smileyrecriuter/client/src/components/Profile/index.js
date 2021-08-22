import React, { useState, useEffect } from 'react';
import './style.css';

import { getMe } from '../utils/API';
import Auth from '../utils/auth';
import UserDetails from "../Profile/userDetails";
import SavedJobs from "../Profile/savedJobs";


export default function Profile() {

    const [userData, setUserData] = useState({});

    const userDataLength = Object.keys(userData).length;

    useEffect(() => {
      const getUserData = async () => {
        try {
          const token = Auth.loggedIn() ? Auth.getToken() : null;
  
          if (!token) {
            return false;
          }
  
          const response = await getMe(token);
  
          if (!response.ok) {
            throw new Error('something went wrong!');
          }
  
          const user = await response.json();
          setUserData(user);
        
        } catch (err) {
          console.error(err);
        }

      };
      
      getUserData();
    }, [userDataLength]);

    return (
        <div className="row col-12">

            <div className="col-4">
                <UserDetails userData={userData} />
            </div>
            
            <div className="col-8">
                <SavedJobs jobs={userData.savedJobs}/>
            </div>
        </div>
    );
}