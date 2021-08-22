import React, { useState, useEffect } from "react";


export default function UserDetails(props) {

    
    
    const [userFormData, setUserFormData] = useState();
    

    useEffect(() => {
        
         setUserFormData(props.userData)
        
      });
 

    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setUserFormData({ ...userFormData, [name]: value });
    };
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
  
      console.log(userFormData);
     // try {
     //   const response = await createUser(userFormData);
     //  
  //
     //   if (!response.ok) {
     //     throw new Error('something went wrong!');
     //   }
  //
     //   const { token, user } = await response.json();
     //  
     //  
     //   Auth.login(token);
     // } catch (err) {
     //   console.log(err);
  //
  //
     // }
  
      
    };

    console.log(userFormData);
    return (
        <>
      <div className="col-md-5 border border-dark m-2 p-2">
        <h2>Sign Up</h2>
        <form className="form signup-form" id="sign-up-form" onSubmit={(e)=>handleFormSubmit(e)}>
          <div className="form-group">
            <label>Name:</label>
            <input className="form-input" id="name" name="name" 
            //value={userFormData.name} 
            type="text"  placeholder="Name" onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input className="form-input" type="text" name="email" 
            //value={userFormData.email} 
            placeholder="email@mail.com" onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input className="form-input" type="text" name="password" 
            //value={userFormData.password} 
            id="password-signup" placeholder="Must be 8 characters or more" onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Education:</label>
            <input className="form-input" type="text" name="education" 
            //value={userFormData.education} 
            placeholder="email@mail.com" onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Location:</label>
            <input className="form-input" type="text" name="location" 
            //value={userFormData.location} 
            placeholder="email@mail.com" onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Desired Position:</label>
            <input className="form-input" type="text" name="desPoz"
            // value={userFormData.desPoz}
             placeholder="email@mail.com" onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <button className="btn btn-primary"  type="submit">Update</button>
          </div>
        </form>
      </div>
    </>
    );
}


/*
location: {
        type: String,
    },
    education: {
        type: String,
    },
    desPoz: {
        type: String
*/