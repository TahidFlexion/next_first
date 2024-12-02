"use client";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function Userid() {
  const router = useRouter();
  const { userid } = router.query;
  const [userinfo, setUserinfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userid) return;

    async function getUserById(id) {
      try {
        const response = await fetch(`https://dummyjson.com/users/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await response.json();
        setUserinfo(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      }
    }

    getUserById(userid);
  }, [userid]);

  return (
    <div className="h-screen flex justify-center items-center bg-gray-50">
      {error ? (
        <div className="text-red-500">Error: {error}</div>
      ) : userinfo ? (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4 text-gray-700">User Info</h1>
          <img
            src={userinfo.image}
            alt={userinfo.firstName}
            className="w-32 h-32 rounded-full mx-auto"
          />
          <p className="text-lg text-gray-600 mt-4">
            <strong>First Name:</strong> {userinfo.firstName}
          </p>
          <p className="text-lg text-gray-600">
            <strong>Last Name:</strong> {userinfo.lastName}
          </p>
          <p className="text-lg text-gray-600">
            <strong>Email:</strong> {userinfo.email}
          </p>
        </div>
      ) : (
        <p className="text-gray-500">Loading...</p>
      )}
    </div>
  );
}

export default Userid;
