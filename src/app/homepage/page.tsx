"use client"; // This is a client component 
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

import Navbar from '../components/RoundedNavbar';
import ThemeButton from '../components/ThemeButton';

const themes = ['green', 'blue', 'purple'];

const Home = () => {
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState<string>(themes[0]);

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

  useEffect(() => {
    // Log the current theme whenever it changes
    console.log('Current theme:', theme);
  }, [theme]);

  return (
    <div className={`relative overflow-y-scroll h-screen theme-${theme}`}>
      <Navbar />
      <ThemeButton />
      <div className='flex flex-col'>
        <h3 className='font-semibold'>Select theme:</h3>
        <div className="flex gap-4">
          {themes.map((t) => (
            <div 
              className='cursor-pointer' 
              key={t} 
              onClick={() => {
                console.log('Setting theme to:', t); // Log when a theme button is clicked
                setTheme(t);
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
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
                placeholder="  get sage advice..."
                className="font-sudo w-full py-4 px-4 rounded-full border border-gray-300 text-xl pr-16 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]"
              />
              <Link href="/chatpage">
                <button type="submit" className="absolute right-0 top-0 mt-2 mr-2 bg-blue-500 text-dark-purple py-2 px-4 rounded-full">
                  <img src='Psend.png' className='w-10 h-10'/>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
