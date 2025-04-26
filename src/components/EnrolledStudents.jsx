import React, { useEffect, useState } from "react";
import api from "./../API_CALLS/api";

export default function EnrolledStudents() {
  const [isLoaded, setLoaded] = useState(false);
  const [enrolledStudents, setEnrolledStudents] = useState([]);

  useEffect(() => {
    api
      .get("/enquiries/getstudentdetails")
      .then((data) => {
        console.log(data.data);
        setEnrolledStudents(data.data.data);
        setLoaded(true);
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
          <h1 className="text-xl sm:text-2xl font-bold">Enrolled Students</h1>
        </div>
      </div>

      {/* Table for Enrolled Students */}
      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Address</th>
              <th className="p-3 text-left">Contact No.</th>
              <th className="p-3 text-left">University Name</th>
              <th className="p-3 text-left">DOJ</th>
              <th className="p-3 text-left">DOC</th>
              <th className="p-3 text-left">DP</th>
            </tr>
          </thead>
          <tbody>
            {enrolledStudents.map((std, index) => (
              <tr key={index} className="border-t">
                <td className="p-3">{std.name}</td>
                <td className="p-3">{std.email}</td>
                <td className="p-3">{std.address}</td>
                <td className="p-3">{std.contact}</td>
                <td className="p-3">{std.university}</td>
                <td className="p-3">{std.doj ? std.doj.split("T")[0] : "-"}</td>
                <td className="p-3">{std.doc ? std.doc.split("T")[0] : "-"}</td>
                <td className="p-3">
                  {std.image ? (
                    <img
                      src={`http://${std.image}`}
                      alt={std.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  ) : (
                    <span>No Image</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
