import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./LoginButton.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <a href="/api/auth/login">
        <button  className="class-name">Login</button>
    </a>
  );
};

export default LoginButton;