import putS3 from "../textract/putS3.js";
import startDetection from '../textract/textract.js';
import { Dispatch, SetStateAction } from 'react';

// Handle file change event
export const handleFileChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setFile: Dispatch<SetStateAction<File | null>>,
  setFileName: Dispatch<SetStateAction<string>>
): void => {
  if (e.target.files && e.target.files.length > 0) {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFileName(selectedFile.name);
  }
};

// Handle file upload event
export const handleUpload = async (
  file: File | null,
  user: any,
  setLoading: Dispatch<SetStateAction<boolean>>
) => {
  if (file) {
    setLoading(true);
    console.log("Uploading file...");
    await putS3(file);
    await new Promise(resolve => setTimeout(resolve, 20000)); // 20-second delay
    setLoading(false);
    console.log("Finished Upload");
    // Additional logic can be added here
  }
};
