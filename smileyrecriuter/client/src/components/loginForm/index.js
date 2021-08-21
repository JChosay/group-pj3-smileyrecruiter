import React from "react";

export default function LoginForm() {
    return (
        <>
            <div class="col-md-5 border border-dark">
                <h2>Log In</h2>
                <form class="form login-form" id="log-in-form">
                    <div class="form-group">
                        <label for="email-login">Email:</label>
                        <input class="form-input" type="text" id="email-login" />
                    </div>
                    <div class="form-group">
                        <label for="password-login">Password:</label>
                        <input class="form-input" type="password" id="password-login" />
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary" id="login-page-btn" type="submit">Log In</button>
                    </div>
                </form>
            </div>
        </>
    )
}