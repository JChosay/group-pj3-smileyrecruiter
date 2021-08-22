import React from "react";

export default function SignupForm() {
    return (
        <>
            <div class="col-md-5 border border-dark">
                <h2>Sign Up</h2>
                <form class="form signup-form" id="sign-up-form">
                    <div class="form-group">
                        <label for="name-signup">Name:</label>
                        <input class="form-input" type="text" id="name-signup" placeholder="Username" />
                    </div>
                    <div class="form-group">
                        <label for="email-signup">Email:</label>
                        <input class="form-input" type="text" id="email-signup" placeholder="email@mail.com" />
                    </div>
                    <div class="form-group">
                        <label for="password-signup">Password:</label>
                        <input class="form-input" type="password" id="password-signup" placeholder="Must be 8 characters or more" />
                    </div>
                    <div class="form-group">
                        <label for="location-signup">Location:</label>
                        <input class="form-input" type="text" id="location-signup" placeholder="Username" />
                    </div>
                    <div class="form-group">
                        <label for="Education-signup">Education:</label>
                        <input class="form-input" type="text" id="education-signup" placeholder="Username" />
                    </div>
                    <div class="form-group">
                        <label for="deisred-position-signup">Desired position:</label>
                        <input class="form-input" type="text" id="desired-position-signup" placeholder="Username" />
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary" id="signup-page-btn" type="submit">Sign Up</button>
                    </div>
                </form>
            </div>
        </>
    )
}