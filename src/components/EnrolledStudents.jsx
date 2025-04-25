import React, { useEffect, useState } from "react";
import api from "./../API_CALLS/api";

export default function EnrolledStudents() {
  const [isLoaded, setLoaded] = useState(false);
  useEffect(() => {
    api
      .get("/enquiries/getstudentdetails")
      .then((data) => {
        console.log(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-8 h-8 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }
  return (
    <div>
      <div className="w-full bg-violet-600 text-white z-10 shadow-md px-6 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-xl sm:text-2xl font-bold">Enrolled student</h1>
        </div>
      </div>

      {/* Example Table for Enrolled Students */}
      <div className="mt-6">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {/* This is where you'll loop over your enrolled students and display them */}
            <tr>
              <td className="p-4">John Doe</td>
              <td className="p-4">john.doe@example.com</td>
              <td className="p-4">Resolved</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
