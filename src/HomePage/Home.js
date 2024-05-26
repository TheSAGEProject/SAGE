import React, { useEffect, useRef } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Navbar from '../components/RoundedNavbar';
import RoundedBack from '../components/RoundedBackground';


const Home = () => {
  const searchContainerRef = useRef(null);


  useEffect(() => {
    const adjustSearchContainerPosition = () => {
      const h1Height = document.querySelector('h1').getBoundingClientRect().height;
      const h1Top = document.querySelector('h1').getBoundingClientRect().top;
      searchContainerRef.current.style.top = (h1Top + h1Height + window.scrollY + window.innerHeight * 0.05) + 'px';
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
        <Link to="/chat">
          <button type="submit"></button>
        </Link>
      </div>
    </div>
  );
};


export default Home;
