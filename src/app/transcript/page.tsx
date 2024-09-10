"use client"; // This is a client component
import React, { useState } from 'react';
import './transcript.css';
import Image from 'next/image';
import imgUpload from '../../../public/upload-svgrepo-com.png';
import Navbar from '../components/RoundedNavbar';
import RoundedBack from '../components/RoundedBackground.js';
import { useAuth0 } from '@auth0/auth0-react';
import { handleFileChange, handleUpload } from './transcript'; // Import the functions

const Transcript = () => {
  const { user } = useAuth0();
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className='upload'>
      <Navbar />
      <div className='bg-dark-purple opacity-50 w-5/6 fixed left-1/2 top-24 transform -translate-x-1/2 rounded-3xl h-[70vh] md:h-[80vh] lg:h-[90vh] p-6'>
        <div className='text'>
          <h3>Upload Transcript</h3>
          <h2>Choose a file then select upload file <br /> to create your degree plan</h2>
          <div className='img'>
            <Image src={imgUpload} alt="imgupload" className='transcriptimage' />
          </div>
        </div>
        <div className="button-container">
          <label htmlFor="file" className="custom-button">Choose File</label>
          <div className="divider"></div>
          <input
            id="file"
            type="file"
            className="file-input"
            onChange={(e) => handleFileChange(e, setFile, setFileName)}
          />
          <button
            onClick={() => handleUpload(file, user, setLoading)}
            className="upload-button"
            disabled={!file || loading}
          >
            Upload File
          </button>
        </div>
        <div className="file-name-container">
          {loading ? (
            <p className="loading-text">Loading...</p>
          ) : (
            fileName && <p className="file-name">{fileName}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Transcript;
