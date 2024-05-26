import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';
import { useAuth0 } from "@auth0/auth0-react";

import chatImage from '../assets/Wchat.png';
import degpImage from '../assets/Wdegp.png';
import profImage from '../assets/Wprof.png';
import FloralLogo from '../assets/FloralLogo.png';

const RoundedNavbar = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="header-container">
      <nav className="navbar">
          <Link to="../" className="navbar-logo">
            <img src={FloralLogo} alt="Logo" />
          </Link>
        <div className="navbar-links">
          <Link to="../chat" className="navbar-icon">
            <img src={chatImage} alt="Chat"/>
              chat
          </Link>
          <Link to="../transcript" className="navbar-icon">
            <img src={degpImage} alt="Degree Plan" />
              degree plan
          </Link>
          {isAuthenticated ? (
            <Link to="../profile-page" className="navbar-icon">
              <img src={profImage} alt="Profile" />
            </Link>
          ) : (
            <LoginButton image={profImage}  />
          )}
        </div>
      </nav>
    </div>
  );
};

export default RoundedNavbar;
