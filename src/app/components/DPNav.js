import '../global.css';
import './dpnav.css';


import chatImage from '../assets/Wchat.png';
import degpImage from '../assets/Wdegp.png';
import profImage from '../assets/Wprof.png';


import PchatImage from '../assets/Pchat.png';
import PdegpImage from '../assets/Pdegp.png';
import PprofImage from '../assets/Pprof.png';
import FloralLogo from '../assets/FloralLogo.png';


import { Link } from 'react-router-dom';
import { AlignCenter } from 'lucide-react';


const Header = () => {
  const handleMouseEnter = (event) => {
    switch (event.target.alt) {
      case 'chatWhite':
        event.target.src = PchatImage;
        break;
      case 'degPWhite':
        event.target.src = PdegpImage;
        break;
      case 'profileWhite':
        event.target.src = PprofImage;
        break;
      case 'logo':
        event.target.src = FloralLogo;
      default:
        break;
    }


  };


  const handleMouseLeave = (event) => {
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
  };


  return (
    <div className = "dp-header"> 
      <nav className="dp-navbar" >
      <Link to="../" className="floral-logo">
            <img src={FloralLogo} alt="Logo" />
          </Link>
        <div>
          <ul id="dp-navbar">
            <li className="chat-link">
              <Link
                to="../chat"
                className="generalFont chat-link"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img src={chatImage} alt="chatWhite" className="chatWhite" /> chat
              </Link>
            </li>

            <li className="chat-link">
              <Link
                to="../degreeplan"
                className="generalFont degreeplan-link"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img src={degpImage} alt="degPWhite" className="degPWhite" /> degree plan
              </Link>
            </li>

            <li>
              <Link
                to="../profile-page"
                className="header-link generalFont"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img src={profImage} alt="profileWhite" className="profileWhite" /> 
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};


export default Header;