import React from "react";
import LoginForm from "../components/loginForm"
import SignupForm from "../components/signupForm"
import Loghead from "../components/Loghead";

export default function LoginPage() {
    return (
        <div className="row justify-content-center ">
            <LoginForm />
            <SignupForm />
        </div>
    );
}