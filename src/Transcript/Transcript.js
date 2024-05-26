import React, { useState } from 'react';
import './transcript.css';
import imgUpload from '../assets/upload-svgrepo-com.png';
import Navbar from '../components/RoundedNavbar';
import RoundedBack from '../components/RoundedBackground';
import putS3 from "../textract/putS3.js";
import startDetection from '../textract/textract.js';
import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from 'react-router-dom';

const Transcript = () => {
  const { user } = useAuth0();
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory(); // Import useHistory hook 

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };

  const handleUpload = async () => {
    if (file) {
      setLoading(true);
      console.log("Uploading file...");
      const formData = new FormData();
      formData.append("file", file);
      await putS3(file);
      // startDetection call (so basically textract) is inconsistent in how much time it takes
      // await startDetection(file.name, user.sub.substring(14));
      
      // PUT A 20 SECOND DELAY RIGHT HERE
      await setTimeout(function() {
        setLoading(false);
      console.log("Finished Upload");
      history.push("../degreeplan"); // Navigate to "../degreeplan" after upload
      }, 20000);

      
    }
  };

  return (
    <div className='upload'>
      <RoundedBack />
      <Navbar />
      <div className='text'>
        <h3>upload transcript</h3>
        <h2>Choose a file then select upload file <br /> to create your degree plan</h2>
        <div className='img'>
          <img src={imgUpload} alt="imgupload" className='transcriptimage' />
        </div>
      </div>
      <div className="button-container">
        <label htmlFor="file" className="custom-button">Choose File</label>
        <div className="divider"></div>
        <input id="file" type="file" className="file-input" onChange={(e) => handleFileChange(e)} />
        <button onClick={handleUpload} className="upload-button" disabled={!file || loading}>Upload File</button>
      </div>
      <div className="file-name-container">
      {loading ? <p className="loading-text">Loading...</p> : (fileName && <p className="file-name">{fileName}</p>)}
      </div>
    </div>
  );
};

export default Transcript;
