"use client"; // This is a client component 
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Navbar from '../components/RoundedNavbar';

const Home = () => {
  const searchContainerRef = useRef<HTMLDivElement>(null);

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

  return (
    <div>
      <RoundedBack />
        <Navbar />
      <h1>SAGE</h1>
      <h4 className='homeh4'>Student Advising and Guidance Engine</h4>
      <div className="search-container" ref={searchContainerRef}>
        <input type="text" placeholder="  get sage advice..." />
        
        <Link href="/chatpage">
          <button type="submit"></button>
        </Link>
        
      </div>
    </div>
  );
};

export default Home;
