import React, { useState } from "react";
import Input from "./Input";
import saveUniversity from "../API_CALLS/saveUniversityDetail";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export default function CollegeForm() {
  const [formData, setFormData] = useState({
    university_name: "",
    nirf_rank: "",
    courses_offered: "",
    fee_range: "",
    image: null,
  });
  const [hasError, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { userData } = useContext(AuthContext);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    const form = new FormData();
    form.append("university_name", formData.university_name);
    form.append("nirf_rank", formData.nirf_rank);
    form.append("courses_offered", formData.courses_offered);
    form.append("fee_range", formData.fee_range);
    form.append("file", formData.image);

    saveUniversity(form, userData.token)
      .then((data) => {
        console.log(data);
        if (data.msg === "saved successfully") {
          alert("Saved Successfully");
        }
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  };

  if (hasError) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">
          Failed to load data. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-28 overflow-x-auto">
      <div className="border rounded-lg shadow-lg overflow-hidden bg-gray-100 flex items-center justify-center">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[400px]">
          <div className="grid grid-cols-1 gap-4">
            <Input
              title="University Name"
              name="university_name"
              id="university_name"
              handler={handleChange}
              value={formData.university_name}
            />

            <Input
              title="NIRF Ranking"
              name="nirf_rank"
              id="nirf_rank"
              handler={handleChange}
              value={formData.nirf_rank}
            />

            <Input
              title="Courses Offered (separated with ,)"
              name="courses_offered"
              id="courses_offered"
              handler={handleChange}
              value={formData.courses_offered}
            />

            <Input
              title="Fee Range"
              name="fee_range"
              id="fee_range"
              handler={handleChange}
              value={formData.fee_range}
            />

            <div className="mt-4">
              <p className="text-gray-700 text-sm font-bold mb-1">Image</p>
              <input
                type="file"
                onChange={handleFileChange}
                className="p-2 border w-full"
              />
            </div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[100px] disabled:opacity-50"
              type="button"
              disabled={isLoading}
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              {isLoading ? "Saving..." : "Save"}
            </button>

            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-[100px]"
              type="reset"
              onClick={(e) => {
                e.preventDefault();
                setFormData({
                  university_name: "",
                  nirf_rank: "",
                  courses_offered: "",
                  fee_range: "",
                  image: null,
                });
              }}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
