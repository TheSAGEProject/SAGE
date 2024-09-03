"use client"; // This is a client component 
import RoundedBack from '../components/RoundedBackground';
import Navbar from '../components/DPNav';
import React, { useState, useEffect, useRef } from 'react';
import './degreeplan.css';
import styled from 'styled-components'
import Classes from '../components/Classes';
import Semester from '../components/Semester';
import QuickChat from '../components/QuickChat'



const DegreePlan = () => {



  //const [classes, setClasses] = useState([]);
  //const [semesters, setSemesters] = useState({});
  const [loading, setLoading] = useState(false);

  // Static sample data
  const classes = [
    { course_code: 'CS101', name: 'Intro to Computer Science', prerequisites: [], corequisites: [] },
    { course_code: 'MATH101', name: 'Calculus I', prerequisites: [], corequisites: [] },
    // Add more static class data here
  ];

  const semesters = {
    'Fall 2023': [
      { course_code: 'CS201', name: 'Data Structures', prerequisites: ['CS101'], corequisites: [] },
      { course_code: 'MATH201', name: 'Calculus II', prerequisites: ['MATH101'], corequisites: [] },
      // Add more static semester data here
    ],
    // Add more semesters here
  };

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await fetch('https://cczyt46ucfu4bzz4lshj26e7gu0bwqgw.lambda-url.us-west-2.on.aws/');
        const data = await response.json();
        setClasses(data);
      } catch (error) {
        console.error('Error fetching classes:', error);
      }
    };

    fetchClasses();
  }, []); 

  const getDegreePlan = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://55rm2jn7ns6d2yfkznmcuqzfom0gvpdc.lambda-url.us-west-2.on.aws/');
      const data = await response.json();
      setSemesters(data);
    } catch (error) {
      console.error('Error fetching semesters:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateClick = () => {
    /*
    getDegreePlan();
    */
  };

  const handleRemoveFromPreviousSemester = (courseCode, destinationSemesterKey, movedClass) => {
    //const updatedSemesters = { ...semesters };
    /*
    Object.entries(updatedSemesters).forEach(([semesterKey, semesterClasses]) => {
      if (Array.isArray(semesterClasses)) {
        if (semesterKey !== destinationSemesterKey) {
          console.log('filtering: ' + semesterKey);
          const updatedClasses = semesterClasses.filter((classItem) => classItem.course_code !== courseCode);
          updatedSemesters[semesterKey] = updatedClasses;
        } else {
          // Add the moved class to the destination semester
          updatedSemesters[semesterKey] = [...semesterClasses, movedClass];
        }
        
      }
    });
    setSemesters(updatedSemesters);
    */
  };

  return (
    <div className=''>
      
      <Navbar/>
      <div className='bg-dark-purple opacity-75 h-screen' >
            <div className='flexContainer bg-[#19061d]  overflow-x-scroll absolute top-48 left-20 w-[2450px] rounded-3xl'>
              <div className='m-[10px] mb-[30px] mr-[20px] ml-[100px] bg-[#fffefe] rounded-[30px] shadow-none min-w-[450px] h-[500px] relative flex flex-col items-start mt-24 overflow-y-scroll '>
                <p className='m-[15px] flex flex-col items-start tracking-[-1px] font-semibold text-[2.4rem]  taken-classes-text font-raleway text-dark-green ' style={{"fontWeight": 700}}>Taken Classes</p>
                <div className=''>
                  {classes.map((classData) => (
                    <Classes
                      key={classData.course_code}
                      course_code={classData.course_code}
                      name={classData.name}
                      prerequisites={classData.prerequisites}
                      corequisites={classData.corequisites}
                    />
                  ))}
                </div>
              </div>
              <div className='flexContainer'>
                {Object.entries(semesters).map(([semesterName, semesterData]) => { //convert semester object into array of key-value pairs
                  const [season, year] = semesterName.split(' ');
                  return (
                    <Semester
                      key={semesterName}
                      season={season}
                      year={year}
                      classes={semesterData}
                      onRemoveFromPreviousSemester={handleRemoveFromPreviousSemester}
                      semesterKey={season + ' ' + year}
                      semesters={semesters}
                    />
                  );
                })}
              </div>
            </div>
            <div className='button-div'>
              <button className='generate-button font-raleway bg-light-green text-white py-[13px] px-[150px] rounded-[20px] outline-none cursor-pointer transition ease duration-250 text-[35px] tracking-[3px] w-[443px] h-[60px] hover:bg-[#055c47] absolute top-3/4 left-48' 
              onClick={handleGenerateClick} disabled={loading}>
                {loading ? (
                  <>
                    <div className="loading-circle"></div>
                    <div className="loading-circle"></div>
                    <div className="loading-circle"></div>
                  </>
                ) : (
                  'regenerate'
                )}
              </button>
            </div>
            <div className='qc-div'>
              <QuickChat />
            </div>
          </div>
        
    </div>
  );
}

export default DegreePlan;