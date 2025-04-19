import { useEffect, useState } from "react";
import getTopColleges from "../API_CALLS/getTopColleges";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export default function TopColleges() {
  const [collegeList, setCollegeList] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState(null);

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

  const handleClick = (college) => {
    setSelectedCollege(college);
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

      <div className="overflow-x-auto">
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
                  {college.courses_offered}
                </td>
                <td className="px-1 py-1 sm:px-6 sm:py-3 border border-gray-800 text-xs sm:text-xl">
                  {college.fee_range}
                </td>
                <td className="px-1 py-1 sm:px-6 sm:py-3 border border-gray-800 text-xs sm:text-xl">
                  <Popup
                    trigger={
                      <button
                        onClick={() => handleClick(college)}
                        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 sm:py-2 sm:px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                      >
                        Get Details
                      </button>
                    }
                    modal
                    nested
                  >
                    {(close) => (
                      <div className="p-4 bg-white rounded-lg shadow-lg w-full max-w-md">
                        <h3 className="text-xl font-semibold mb-2">
                          {selectedCollege?.university_name}
                        </h3>
                        <div>
                          <input placeholder="your mail" />
                        </div>
                        <button
                          onClick={close}
                          className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        >
                          Close
                        </button>
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
