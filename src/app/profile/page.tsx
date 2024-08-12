"use client";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from '../components/RoundedNavbar';
import RoundedBack from '../components/RoundedBackground';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        {/* Main Container: Centers content, full viewport height, light gray background */}
        <RoundedBack />
        <Navbar />
        <div className="flex bg-white shadow-md rounded-lg overflow-hidden p-6 max-w-2xl w-full">
          {/* Content Card: White background, subtle shadow, rounded corners, padding, max-width for responsiveness */}

          <div className="flex flex-col items-center pr-6 border-r border-gray-200 w-1/3">
            {/* Left Column: Vertical flex, center content, right border, 1/3 width */}
            <img
              src={user?.picture}
              alt={user?.name}
              className="w-24 h-24 rounded-full mb-4"
            />
            {/* User Icon: 96px size, rounded, margin-bottom */}
            <h2 className="text-2xl font-semibold">{user?.name}</h2>
            {/* User Name: Large, semi-bold */}
          </div>

          <div className="pl-6 w-2/3">
            {/* Right Column: Left padding, 2/3 width */}
            <div className="mb-4">
              {/* Input Group: Margin-bottom */}
              <label
                htmlFor="username"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Username
              </label>{" "}
              {/* Label: Block, dark gray, small, bold, margin-bottom */}
              <input
                type="text"
                id="username"
                value={user?.name}
                readOnly
                className="w-full p-2 border border-gray-300 rounded"
              />
              {/* Input: Full width, padding, border, rounded corners */}
            </div>

            <div className="mb-40">
              {/* Input Group */}
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={user?.email}
                readOnly
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            {/* Add more input fields here if needed */}

            <div className="mb-4">
              <button className="text-green-500 hover:underline">
                Reset Password?
              </button>{" "}
              {/* Reset Password Button: Green text, underline on hover */}
            </div>

            <div className="mb-4">
              {/* Input Group */}
              <label
                htmlFor="advisor"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Assigned Advisor
              </label>
              <input
                type="text"
                id="advisor"
                value="John Doe" // Replace with actual advisor data
                readOnly
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
        </div>

        <div className="absolute top-20 right-20 flex flex-col space-y-2">
          {/* Action Buttons: Space between, margin-top */}
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Switch Accounts
          </button>
          <button className="right-200: bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Reset Account
          </button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full">
            Delete Account
          </button>
        </div>
      </main>
    )
  );
};

export default Profile;
