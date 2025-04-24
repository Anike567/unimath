import React, { useState } from "react";
import Input from "./Input"; // assuming these are your custom components
import PasswordField from "./PasswordField";

export default function UniversityForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    setIsLoading(true);
    // Simulate async action
    setTimeout(() => {
      console.log("Submitted:", formData);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div>
      {/* Top Nav */}
      {/* <div className="w-full fixed top-0 left-0 bg-violet-600 text-white z-10 shadow-md px-6 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-xl sm:text-2xl font-bold">Home Page</h1>
        </div>
      </div> */}

      {/* Form Section */}
      <div className="mt-28 overflow-x-auto">
        <div className="border rounded-lg shadow-lg overflow-hidden bg-gray-100 flex items-center justify-center">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[800px]">
            <div className="grid grid-cols-2 gap-4">
              <Input
                title="Name"
                name="name"
                id="name"
                handler={handleChange}
                value={formData.name}
              />

              <Input
                title="Email"
                name="email"
                id="email"
                handler={handleChange}
                value={formData.email}
              />

              <Input
                title="Contact No."
                name="contact"
                id="contact"
                handler={handleChange}
                value={formData.contact}
              />

              <Input
                title="Address"
                name="address"
                id="address"
                handler={handleChange}
                value={formData.address}
              />

              <Input
                title="Course"
                name="course"
                id="course"
                handler={handleChange}
                value={formData.course}
              />

              <Input
                title="University Name"
                name="university"
                id="university"
                handler={handleChange}
                value={formData.university}
              />

              <div className="mt-4">
                <div>
                  <p className="text-gray-700 text-sm font-bold ">
                    Date of Joining
                  </p>
                </div>
                <div>
                  <input type="date" className="p-2 border" />
                </div>
              </div>

              <div className="mt-4">
                <div>
                  <p className="text-gray-700 text-sm font-bold ">
                    Date of Completion
                  </p>
                </div>
                <div>
                  <input type="date" className="p-2 border border-round" />
                </div>
              </div>

              <div className="mt-4">
                <div>
                  <p className="text-gray-700 text-sm font-bold ">Image</p>
                </div>
                <div>
                  <input type="file" className="p-2 border border-round" />
                </div>
              </div>
            </div>
            {/* Submit Button */}
            <div className="flex items-center justify-between mt-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center w-[100px]"
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                Save
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center w-[100px]"
                type="reset"
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
