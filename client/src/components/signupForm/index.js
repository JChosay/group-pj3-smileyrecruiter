import React, { useState } from "react";

import { createUser } from '../utils/API';
import Auth from '../utils/auth';


export default function SignupForm() {


  const [userFormData, setUserFormData] = useState({ name: '', email: '', password: '' });
 

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

   
    console.log(userFormData);
    try {
      const response = await createUser(userFormData);
     

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { token, user } = await response.json();
     
     
      Auth.login(token);
    } catch (err) {
      console.log(err);


    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };


  return (
    <>
      <div className="col-md-5 border border-dark mx-3">
        <h2>Sign Up</h2>
        <form className="form signup-form" id="sign-up-form" onSubmit={(e)=>handleFormSubmit(e)}>
          <div className="form-group">
            <label>Name:</label>
            <input className="form-input ml-2" name="name" type="text" id="name-signup" placeholder="Name" onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input className="form-input ml-2" type="text" name="email" id="email-signup" placeholder="email@mail.com" onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input className="form-input ml-2" style={{width: "300px"}} type="password" name="password" id="password-signup" placeholder="Must be 8 characters or more" onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <button className="btn btn-warning ml-2 " id="signup-page-btn" type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </>
  )

}