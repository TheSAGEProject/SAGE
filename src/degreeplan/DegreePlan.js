import RoundedBack from '../components/RoundedBackground';
import Navbar from '../components/RoundedNavbar';
import React, { useState, useEffect, useRef } from 'react';
import './degreeplan.css';
import styled from 'styled-components'
import Classes from '../components/Classes';
import Semester from '../components/Semester';
import QuickChat from '../components/QuickChat'

const Button = styled.button`
  background-color: #0AB28A;
  color: white;  padding: 13px 150px;
  border-radius: 20px;
  outline: none;
  cursor: pointer;
  transition: ease background-color 250ms;
  font-family: 'Sudo Var', sans-serif;
  font-size: 35px;
  letter-spacing: 3px;
  width: 443px;
  height: 60px;
  &:ho    background-color: #055c47;
  }
`;

const DegreePlan = () => {

  const [classes, setClasses] = useState([]);
  const [semesters, setSemesters] = useState({});
  const [loading, setLoading] = useState(false);

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
    getDegreePlan();
  };

  const handleRemoveFromPreviousSemester = (courseCode, destinationSemesterKey, movedClass) => {
    const updatedSemesters = { ...semesters };
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
  };

  return (
    <div className="deg-container">
      <RoundedBack />
       <Navbar />
        <div className='content'>
            <div className='flexContainer'>
              <div className='allClasses'>
                <p className='specialHeader generalFont taken-classes-text'>Taken Classes</p>
                  <div className='taken-container'>
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
                {console.log(semesters)}
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
              <Button className='generate-button' onClick={handleGenerateClick} disabled={loading}>
                {loading ? (
                  <>
                    <div className="loading-circle"></div>
                    <div className="loading-circle"></div>
                    <div className="loading-circle"></div>
                  </>
                ) : (
                  'Generate'
                )}
              </Button>
            </div>
            <div className='qc-div'>
              <QuickChat/>
            </div>
        </div>
      </div>
  );
}

export default DegreePlan;