'use client';
import React, { useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import LogoutButton from "../components/LogoutButton";

const Profile = () => {
  const { user, error, isLoading } = useUser();

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

  return (
    user && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.sub}</p>
        <LogoutButton />
      </div>
    )
  );
};

export default Profile;