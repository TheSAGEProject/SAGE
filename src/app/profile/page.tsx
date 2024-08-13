"use client";
import { useEffect } from "react";
import { useUser } from '@auth0/nextjs-auth0/client'; // Correct import
import Navbar from '../components/RoundedNavbar';
import RoundedBack from '../components/RoundedBackground';
import LogoutButton from '../components/LogoutButton';

const Profile = () => {
  const { user, error, isLoading } = useUser(); // Use the correct hook

  useEffect(() => {
    console.log("Loading:", isLoading);
    console.log("Error:", error);
    console.log("User:", user);
  }, [isLoading, error, user]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Check if user exists to determine authentication status
  return (
    user ? (
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        
        <Navbar />
        <RoundedBack>

          
        </RoundedBack>
        <div className="flex bg-white shadow-md rounded-lg overflow-hidden p-6 max-w-2xl w-full">
          <div className="flex flex-col items-center pr-6 border-r border-gray-200 w-1/3">
            <img
              src={user?.picture}
              alt={user?.name}
              className="w-24 h-24 rounded-full mb-4"
            />
            <h2 className="text-2xl font-semibold">{user?.name}</h2>
          </div>

          <div className="pl-6 w-2/3">
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                value={user?.name}
                readOnly
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-40">
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

            <div className="mb-4">
              <button className="text-green-500 hover:underline">
                Reset Password?
              </button>
            </div>

            <div className="mb-4">
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
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Switch Accounts
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Reset Account
          </button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full">
            Delete Account
          </button>
          <LogoutButton />
        </div>
      </main>
    ) : (
      <div>Please log in to view this page.</div>
    )
  );
};

export default Profile;
