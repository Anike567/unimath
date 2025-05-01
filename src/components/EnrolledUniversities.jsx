import React, { useEffect, useState } from "react";
import api from "./../API_CALLS/api";
import { deleteUniversity } from "../API_CALLS/saveUniversityDetail";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

import { MdDelete, MdEdit } from "react-icons/md";
export default function EnrolledUniversities() {
  const [isLoaded, setLoaded] = useState(false);
  const [universities, setUniversities] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const { userData } = useContext(AuthContext);

  async function getCollege(params) {
    api
      .get("/college/", {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then((res) => {
        setUniversities(res.data.college);
        setLoaded(true);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleDelete(_id) {
    deleteUniversity(_id, userData.token)
      .then((data) => {
        if (data.msg === "Deleted Successfully") {
          getCollege();
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        alert(JSON.stringify(err));
      });
  }

  useEffect(() => {
    getCollege();
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
      {/* Modal for viewing full image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Full View"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}

      <div className="w-full bg-violet-600 text-white shadow-md px-6 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-2xl font-bold">Enrolled Universities</h1>
        </div>
      </div>

      {/* Table for Enrolled Universities */}
      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-gray-100">
            <tr>
              {[
                "University Name",
                "NIRF Rank",
                "Courses Offered",
                "Fee Range",
                "University Image",
                "Actions",
              ].map((heading, idx) => (
                <th
                  key={idx}
                  className="text-left p-2 border border-gray-300 font-semibold text-sm sm:text-base"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {universities.map((uni, index) => (
              <tr key={index} className="border-t">
                <td className="p-2">{uni.university_name}</td>
                <td className="p-2">{uni.nirf_rank}</td>
                <td className="p-2">{uni.courses_offered}</td>
                <td className="p-2">{uni.fee_range}</td>
                <td className="p-2">
                  {uni.university_img ? (
                    <img
                      src={uni.university_img}
                      alt={uni.university_name}
                      className="w-16 h-16 object-cover rounded cursor-pointer"
                      onClick={() => setSelectedImage(uni.university_img)}
                    />
                  ) : (
                    <span>No Image</span>
                  )}
                </td>
                <td className="p-2 flex gap-2">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm">
                    <MdEdit size={30} />
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                    onClick={() => {
                      handleDelete(uni._id);
                    }}
                  >
                    <MdDelete size={30} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
