import '../global.css';
import './dpnav.css';


import chatImage from '../../../public/Wchat.png';
import degpImage from '../../../public/Wdegp.png';
import profImage from '../../../public/Wprof.png';

import PchatImage from '../../../public/Pchat.png';
import PchatGImage from '../../../public/PchatG.png'; //green

import PdegpImage from '../../../public/Pdegp.png';
import PdegGImage from '../../../public/PdegG.png';//green

import PprofImage from '../../../public/Pprof.png';
import PprofGImage from '../../../public/PprofG.png';
import FloralLogo from '../../../public/FloralLogo.png';

import Link from 'next/link';
import Image from 'next/image';
import { AlignCenter } from 'lucide-react';



const Header = () => {


  const handleMouseEnter = (event) => {
    /*
    switch (event.target.alt) {
      case 'PchatImage':
        event.target.src = PchatGImage;
        break;
      case 'degPWhite':
        event.target.src = PdegGImage;
        break;
      case 'profileWhite':
        event.target.src = PprofGImage;
        break;
      case 'logo':
        event.target.src = FloralLogo;
      default:
        break;
    }

    */
  };


  const handleMouseLeave = (event) => {
    /*
    switch (event.target.alt) {
      case 'chatWhite':
        event.target.src = chatImage;
        break;
      case 'degPWhite':
        event.target.src = degpImage;
        break;
      case 'profileWhite':
        event.target.src = profImage;
        break;
      default:
        break;
    }
        */
  };


  return (
    <div className = "dp-header"> 
      <nav className="dp-navbar" >
          <Link href="../" className="floral-logo">
            <Image src={FloralLogo} alt="Logo" width={50} height={50} />
          </Link>
        <div>
          <ul id="dp-navbar">
            <li className="chat-link">
              <Link
                href="../chat"
                className="generalFont chat-link"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Image src={chatImage} alt="chatWhite" className="chatWhite" /> chat
              </Link>
            </li>

            <li className="chat-link">
              <Link
                href="../degreeplan"
                className="generalFont degreeplan-link"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Image src={degpImage} alt="degPWhite" className="degPWhite" /> degree plan
              </Link>
            </li>

            <li>
              <Link
                href="../profile"
                className="header-link generalFont"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Image src={profImage} alt="profileWhite" className="profileWhite" /> 
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};


export default Header;