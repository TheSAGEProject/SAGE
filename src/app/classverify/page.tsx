"use client"; // This is a client component
import React, { useState, ChangeEvent } from 'react';
import './verify.css';
import Navbar from '../components/RoundedNavbar';
import RoundedBack from '../components/RoundedBackground.js';
import PopUp from '../components/PopUp';

const initialCourses = [
  { term: 'Spring 2024', courses: ['CS XXXX - SOFTWARE BLAH BLAH', 'CS XXXX - SOFTWARE BLAH BLAH', 'CS XXXX - SOFTWARE BLAH BLAH'] },
  { term: 'Fall 2024', courses: ['CS XXXX - SOFTWARE BLAH BLAH', 'CS XXXX - SOFTWARE BLAH BLAH', 'CS XXXX - SOFTWARE BLAH BLAH'] },
];

const Verify = () => {
  const [courses, setCourses] = useState(initialCourses);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleInputChange = (termIndex: number, courseIndex: number, event: ChangeEvent<HTMLInputElement>) => {
    const newCourses = [...courses];
    newCourses[termIndex].courses[courseIndex] = event.target.value;
    setCourses(newCourses);
  };

  const handleConfirmClick = () => {
    const userConfirmed = window.confirm("Are you sure you want to confirm this information?");
    if (userConfirmed) {
      setIsPopupVisible(true);
      console.log ("pop up true")
    }
  };

  return (
    <div className='upload'>
      <RoundedBack />
      <Navbar />
      <div className="header">
        <h1>Is this information correct?</h1>
      </div>
      <div className="verify-container">
        <div className="content">
          {courses.map((semester, termIndex) => (
            <div key={termIndex} className="semester">
              <h2>{semester.term}</h2>
              {semester.courses.map((course, courseIndex) => (
                <div key={courseIndex} className="course">
                  <input
                    type="text"
                    value={course}
                    onChange={(e) => handleInputChange(termIndex, courseIndex, e)}
                  />
                  <button className="grade-button">A</button>
                </div>
              ))}
            </div>
          ))}
        </div>
        <button className="confirm-button" onClick={handleConfirmClick}>Confirm</button>
      </div>
      {isPopupVisible && <PopUp onClose={() => setIsPopupVisible(false)} />}
    </div>
  );
};

export default Verify;