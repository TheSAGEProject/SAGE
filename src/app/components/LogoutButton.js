import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    /*
    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
    */
    <a href="/api/auth/logout" className="text-white text-3xl font-raleway">Logout</a>
  );
};

export default LogoutButton;