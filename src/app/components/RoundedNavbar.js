import React from 'react';
import Link from 'next/link';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { useUser } from '@auth0/nextjs-auth0/client';
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
  const { user } = useUser(); // Correct hook import

  return (
    <div className="bg-dark-purple opacity-80 w-5/6 h-[11.6vh] fixed top-24 left-1/2 transform -translate-x-1/2 rounded-t-3xl shadow-md z-50">
      <nav className="flex justify-between items-center h-full px-6">
        <Link href="/homepage" className="flex items-center">
          <Image src={FloralLogo} alt="Logo" width={50} height={50} />
        </Link>
        <div className="flex items-center space-x-8">
          <Link href="/homepage" className="flex items-center font-raleway text-3xl text-white hover:text-[#71AE6F]">
            <Image src={chatImage} alt="Chat" width={40} height={40} className="chat-icon" />
            <span className="ml-2">chat.</span>
          </Link>
          <Link href="/transcript" className="flex items-center font-raleway text-3xl text-white hover:text-[#71AE6F]">
            <Image src={degpImage} alt="Degree Plan" width={40} height={40} className="degp-icon" />
            <span className="ml-2">degree plan.</span>
          </Link>
          {user ? (
            <>
              <Link href="/profile" className="flex items-center font-raleway text-3xl text-white hover:text-[#71AE6F]">
                <Image src={profImage} alt="Profile" width={40} height={40} />
              </Link>
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
