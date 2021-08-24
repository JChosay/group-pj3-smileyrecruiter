import React, { useState } from "react";

import { loginUser } from '../utils/API';
import Auth from '../utils/auth';
export default function LoginForm() {
    const [userLoginData, setUserLoginData] = useState({ email: '', password: '' });
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserLoginData({ ...userLoginData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await loginUser(userLoginData);

            if (!response.ok) {
                throw new Error('something went wrong!');
            }

            const { token, user } = await response.json();
            console.log(user);
            Auth.login(token);
        } catch (err) {
            console.error(err);

        }

        setUserLoginData({
            name: '',
            email: '',
            password: '',
        });
    };



    return (
        <>
            <div className="col-md-5 border border-dark">
                <h2>Log In</h2>
                <form className="form login-form" id="log-in-form" onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <label>Email:</label>
                        <input className="form-input" name="email" type="text" id="email-login" onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label >Password:</label>
                        <input className="form-input" name="password" type="password" id="password-login" onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" id="login-page-btn" type="submit">Log In</button>
                    </div>
                </form>
            </div>
        </>
    )
}