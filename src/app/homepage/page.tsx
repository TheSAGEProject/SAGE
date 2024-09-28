"use client"; // This is a client component 
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Navbar from '../components/RoundedNavbar';
import { useRouter } from 'next/navigation'

const Home = () => {
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const adjustSearchContainerPosition = () => {
      const h1Element = document.querySelector('h1');
      
      if (h1Element) {
        const h1Height = h1Element.getBoundingClientRect().height;
        const h1Top = h1Element.getBoundingClientRect().top;
        if (searchContainerRef.current) {
          searchContainerRef.current.style.top = `${h1Top + h1Height + window.scrollY + window.innerHeight * 0.05}px`;
        }
      }
    };

    adjustSearchContainerPosition();
    window.addEventListener('resize', adjustSearchContainerPosition);


    return () => {
      window.removeEventListener('resize', adjustSearchContainerPosition);
    };
  }, []);

  
  const handleChatClick = () => {
    const inputElement = document.getElementById('start-msg') as HTMLInputElement;
    const message = inputElement.value;
    sessionStorage.setItem('first-message', message);
    router.push('/chatpage');
  };
  return (
    <div className="relative overflow-y-scroll h-screen">
      <Navbar />
      <div className="bg-dark-purple opacity-50 w-5/6 fixed left-1/2 top-24 transform -translate-x-1/2 rounded-3xl h-[70vh] md:h-[80vh] lg:h-[90vh] p-6">
        <div className="flex flex-col items-center relative h-full justify-center">
          <h1 className="text-white text-9xl md:text-8xl lg:text-9xl font-maharlika">
            SAGE
          </h1>
          <h2 className="text-white font-raleway text-2xl font-light mt-2">
            Student Advising and Guidance Engine
          </h2>
          <div className="w-full flex flex-col items-center mt-8" ref={searchContainerRef}>
            <div className="relative w-3/4 lg:w-1/2">
              <input
                type="text"
                id="start-msg"
                placeholder="  get sage advice..."
                className="font-sudo w-full py-4 px-4 rounded-full border border-gray-300 text-xl pr-16 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]"
              />

              <button type="submit" onClick={handleChatClick} className="absolute right-0 top-0 mt-2 mr-2 bg-blue-500 text-dark-purple py-2 px-4 rounded-full">
                 <img src='Psend.png' className='w-10 h-10'/>
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
