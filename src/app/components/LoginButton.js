import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <a href="/api/auth/login">
        <button  className='text-white text-3xl font-raleway'>Login.</button>
    </a>
  );
};

export default LoginButton;