import React from "react";
import LoginForm from "../components/loginForm"
import SignupForm from "../components/signupForm"
import Loghead from "../components/Loghead";

export default function LoginPage() {
    return (
        <div>
            {/* <div>
                <Loghead />
            </div> */}
            <div className="row">
                <LoginForm />
                <SignupForm />
            </div>
        </div>
    );
}