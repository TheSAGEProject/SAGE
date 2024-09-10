


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



const DPNav = () => {

  return (
    <div> 
      <nav className='flex align-middle justify-between bg-dark-purple' >
          <Link href="../">
            <Image src={FloralLogo} alt="Logo" width={50} height={50} className='absolute top-5 left-8'/>
          </Link>
        <div>
          <ul className='flex items-center justify-center '>
            <li className="text-2xl ">
              <Link
                href="../chat"
                className="mr-8 ml-3 flex items-center text-white hover:text-hover-green ..."
              >
                <Image src={chatImage} alt="chatWhite" className='scale-50 ' />
                <p className='font-raleway tracking-wider font-extralight antialiased'>chat.</p>
                
              </Link>
            </li>

            <li className="text-2xl">
              <Link
                href="../degreeplan"
                className=" mr-8 ml-3 flex items-center text-white hover:text-hover-green ..."
              >
                <Image src={degpImage} alt="degPWhite" className="scale-50 " />
                <p className='font-raleway tracking-wider'>degree plan.</p>
              </Link>
            </li>

            <li>
            <Link
                href="../profile"
              >
                <Image src={profImage} alt="profileWhite" className='w-12 h-12 mr-8' /> 
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};


export default DPNav;