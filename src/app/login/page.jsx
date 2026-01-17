import React from "react";
import LoginForm from "../components/LoginForm";

const Login = () => {
    const handleSubmit = (e)=>{
        e.preventDefault()
    }
  return (
    <LoginForm></LoginForm>
  );
};

export default Login;
