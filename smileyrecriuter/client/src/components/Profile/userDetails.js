import React, { useState, useEffect } from "react";
import {updateMe} from "../utils/API"
import Auth from '../utils/auth';

export default function UserDetails(props) {

    const [userFormData, setUserFormData] = useState({name: "",email: "", password: "", education: "", location: "", desPoz: ""});
    const [renderReady, setRenderReady] = useState(false)

    const handleInputChange = (event) => {

        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit =  async (event) => {
        event.preventDefault();
       
        const token = Auth.loggedIn() ?  Auth.getToken() : null;
    
        if (!token) {
          return false;
        }

         try { 
           const response = await updateMe(userFormData, token);
          
        
           if (!response.ok) {
             throw new Error('something went wrong!');
           }
      
           
         } catch (err) {
           console.log(err);
        
        
         }


    };

    useEffect(() => {

        setUserFormData(props.userData)
        
        setRenderReady(true)
    },[props.userData]);

    return (

        <>
            { renderReady === true && (
            <div className="col-md-5 border border-dark m-2 p-2">
                <h2>Sign Up</h2>
                <form className="form signup-form" id="sign-up-form" onSubmit={(e) => handleFormSubmit(e)}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input className="form-control" type="text" value={userFormData.name} name="name"  onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input className="form-control" type="text" value={userFormData.email} name="email"  onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input className="form-control" type="password" name="password" value={userFormData.password}   onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Education:</label>
                        <input className="form-control" type="text" name="education" value={userFormData.education} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Location:</label>
                        <input className="form-control" type="text" name="location" value={userFormData.location}  onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Desired Position:</label>
                        <input className="form-control" type="text" name="desPoz" value={userFormData.desPoz}  onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" type="submit">Update</button>
                    </div>
                </form>
            </div>
            )}
        </>
    );
}


