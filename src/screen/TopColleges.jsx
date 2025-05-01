import { useEffect, useState } from "react";
import getTopColleges from "../API_CALLS/getTopColleges";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import submitEnquiry from "../API_CALLS/submitEnquiry";

export default function TopColleges() {
  const [collegeList, setCollegeList] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [enquiryState, setEnquiryState] = useState({
    name: "",
    email: "",
    contact: "",
    course: "",
  });

  const handleSubmit = async (college, close) => {
    try {
      const data = await submitEnquiry(college, enquiryState);
      if (data.msg === "ok") {
        alert("Enquiry submitted successfully");
        close();
      } else {
        alert("Some internal error occurred. Please try again later.");
      }
    } catch (err) {
      alert("Unable to submit enquiry. Please try again later.");
    }
  };

  const handleChange = (e) => {
    setEnquiryState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    getTopColleges()
      .then((data) => {
        setCollegeList(data.college);
        setLoaded(true);
      })
      .catch((err) => {
        setHasError(true);
        console.log(err);
      });
  }, []);

  if (hasError) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">
          Failed to load data. Please try again later.
        </p>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-8 h-8 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="p-1 mt-10 sm:p-4 sm:m-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Top Colleges</h2>

      <div className="overflow-x-auto border">
        <table className="min-w-full bg-white border border-gray-800 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              {[
                "University Name",
                "NIRF Rank",
                "Courses Offered",
                "Fee Range",
                "Enquiry",
              ].map((heading, idx) => (
                <th
                  key={idx}
                  className="text-left px-1 py-1 sm:px-6 sm:py-3 border border-gray-800 font-semibold text-xs sm:text-xl"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {collegeList.map((college, index) => (
              <tr
                key={index}
                className={
                  index % 2 === 0
                    ? "bg-white hover:bg-gray-50"
                    : "bg-gray-50 hover:bg-gray-100"
                }
              >
                <td className="px-1 py-1 sm:px-6 sm:py-3 border border-gray-800 text-xs sm:text-xl">
                  {college.university_name}
                </td>
                <td className="px-1 py-1 sm:px-6 sm:py-3 border border-gray-800 text-xs sm:text-xl">
                  {college.nirf_rank}
                </td>
                <td className="px-1 py-1 sm:px-6 sm:py-3 border border-gray-800 text-xs sm:text-xl">
                  {college.courses_offered.join(", ")}
                </td>
                <td className="px-1 py-1 sm:px-6 sm:py-3 border border-gray-800 text-xs sm:text-xl">
                  {college.fee_range}
                </td>
                <td className="px-1 py-1 sm:px-6 sm:py-3 border border-gray-800 text-xs sm:text-xl">
                  <Popup
                    trigger={
                      <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 sm:py-2 sm:px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        Get Details
                      </button>
                    }
                    modal
                    nested
                    contentStyle={{
                      padding: "0px",
                      border: "none",
                      width: "auto",
                    }}
                  >
                    {(close) => (
                      <div className="p-4 bg-white rounded-lg shadow-lg w-full max-w-md sm:max-w-lg">
                        <h3 className="text-xl font-semibold mb-2">
                          {college.university_name}
                        </h3>
                        <p className="text-gray-700 mb-2">
                          NIRF Rank: {college.nirf_rank}
                        </p>
                        <p className="text-gray-700 mb-2">
                          Courses Offered: {college.courses_offered.join(", ")}
                        </p>
                        <p className="text-gray-700 mb-4">
                          Fee Range: {college.fee_range}
                        </p>

                        <input
                          placeholder="E-mail"
                          type="email"
                          className="w-full border border-gray-300 p-2 rounded mb-4"
                          name="email"
                          onChange={handleChange}
                        />
                        <input
                          placeholder="Name"
                          className="w-full border border-gray-300 p-2 rounded mb-4"
                          type="text"
                          name="name"
                          onChange={handleChange}
                        />
                        <input
                          placeholder="Contact no."
                          className="w-full border border-gray-300 p-2 rounded mb-4"
                          type="tel"
                          name="contact"
                          onChange={handleChange}
                        />

                        <select
                          className="p-2 w-full border border-gray-300 mb-4"
                          defaultValue=""
                          name="course"
                          onChange={handleChange}
                        >
                          <option disabled value="">
                            Select Course
                          </option>
                          {college.courses_offered.map((course, i) => (
                            <option key={i} value={course}>
                              {course}
                            </option>
                          ))}
                        </select>

                        <div className="flex justify-between">
                          <button
                            onClick={close}
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                          >
                            Close
                          </button>

                          <button
                            onClick={() => handleSubmit(college, close)}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    )}
                  </Popup>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
