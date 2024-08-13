import React from 'react';
import './Navbar.css';
import Link from 'next/link';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';
import FloralLogo from '../../../public/FloralLogo.png';
import chatImage from '../../../public/Wchat.png';
import degpImage from '../../../public/Wdegp.png';
import profImage from '../../../public/Wprof.png';

const RoundedNavbar = () => {
  const { user } = useUser(); // Correct hook import

  console.log('User:', user);

  return (
    <div className="header-container">
      <nav className="navbar">
        <Link href="/homepage" className="navbar-logo">
          <Image src={FloralLogo} alt="Logo" width={50} height={50} />
        </Link>
        <div className="navbar-links">
          <Link href="/chatpage" className="navbar-icon">
            <Image src={chatImage} alt="Chat" width={24} height={24} />
            chat
          </Link>
          <Link href="/transcript" className="navbar-icon">
            <Image src={degpImage} alt="Degree Plan" width={24} height={24} />
            degree plan
          </Link>
          {user ? (
            <>
              <Link href="/profile" className="navbar-icon">
                <Image src={profImage} alt="Profile" width={24} height={24} />
              </Link>
              <LogoutButton /> {/* Show logout button */}
            </>
          ) : (
            <LoginButton />
          )}
        </div>
      </nav>
    </div>
  );
};

export default RoundedNavbar;
