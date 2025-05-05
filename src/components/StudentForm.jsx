import React, { useState } from "react";
import Input from "./Input"; // assuming these are your custom components
import { saveStudentDetails } from "../API_CALLS/saveDetails";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
export default function StudentForm() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    contact: "",
    address: "",
    course: "",
    university: "",
    doj: "",
    doc: "",
    enrollment_number: "",
    image: null,
  });
  const [hasError, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
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
    // setIsLoading(true);
    const form = new FormData();
    form.append("email", formData.email);
    form.append("name", formData.name);
    form.append("contact", formData.contact);
    form.append("address", formData.address);
    form.append("course", formData.course);
    form.append("doj", formData.doj);
    form.append("doc", formData.doc);
    form.append("file", formData.image);
    form.append("university", formData.university);
    form.append("enrollment_no", formData.enrollment_number);

    saveStudentDetails(form, userData.token)
      .then((data) => {
        if (data.msg === "done") {
          alert("Saved Successfully");
        }
      })

      .catch((err) => {
        console.log(err.code);
        if (err.code === "ERR_BAD_REQUEST") {
          navigate("/signin");
        } else {
          setError(true);
        }
      });
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
              title="Enrollment No."
              name="enrollment_number"
              id="enrollment_number"
              handler={handleChange}
              value={formData.enrollment_number}
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
              <p className="text-gray-700 text-sm font-bold">Date of Joining</p>
              <input
                type="date"
                name="doj"
                onChange={handleChange}
                value={formData.doj}
                className="p-2 border w-full"
              />
            </div>

            <div className="mt-4">
              <p className="text-gray-700 text-sm font-bold">
                Date of Completion
              </p>
              <input
                type="date"
                name="doc"
                onChange={handleChange}
                value={formData.doc}
                className="p-2 border w-full"
              />
            </div>

            <div className="mt-4">
              <p className="text-gray-700 text-sm font-bold">Image</p>
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
                alert(JSON.stringify(formData, null, 2));
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
