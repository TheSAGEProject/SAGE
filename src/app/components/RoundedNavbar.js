import React from 'react';
import './Navbar.css';
import Link from 'next/link';
import LoginButton from './LoginButton';
import { useAuth0 } from "@auth0/auth0-react";
import Image from 'next/image';
import FloralLogo from '../../../public/FloralLogo.png';
import chatImage from '../../../public/Wchat.png';
import degpImage from '../../../public/Wdegp.png';
import profImage from '../../../public/Wprof.png';
// green
import chatGImage from '../../../public/PchatG.png';
import degpGImage from '../../../public/PdegG.png';
import profGImage from '../../../public/PprofG.png';

const RoundedNavbar = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="header-container">
      <nav className="navbar">
        <Link href="/homepage" className="navbar-logo">
          <Image src={FloralLogo} alt="Logo" width={50} height={50} />
        </Link>
        <div className="navbar-links">
          <Link href="/homepage" className="navbar-icon">
            <Image src={chatImage} alt="Chat" width={40} height={40}
            className= "chat-icon" />
            chat
          </Link>
          <Link href="/transcript" className="navbar-icon">
            <Image src={degpImage} alt="Degree Plan" width={40} height={40} 
            className= "degp-icon"/>
            degree plan
          </Link>
          {isAuthenticated ? (
            <Link href="/profile" className="navbar-icon">
              <Image src={profImage} alt="Profile" width={40} height={40} />
            </Link>
          ) : (
            <LoginButton image={profImage} />
          )}
        </div>
      </nav>
    </div>
  );
};

export default RoundedNavbar;