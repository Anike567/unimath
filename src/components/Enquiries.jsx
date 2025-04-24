import { useEffect, useState } from "react";
import { FaRegSquare, FaRegCheckSquare } from "react-icons/fa";
import {
  getAllEnquiries,
  markResolved,
  markUnResolved,
  getResolved,
  getUnResolved,
} from "../API_CALLS/getEnquiries";

export default function Enquiries() {
  const [reload, setReload] = useState(false);
  const [isLoaded, setLoaded] = useState(false);
  const [hasError, setError] = useState(false);
  const [enquiryList, setEnquiryList] = useState([]);
  const [filter, setFilter] = useState("all"); // selected option

  const fetchData = (selectedOption) => {
    setLoaded(false); // loading starts

    let apiCall;
    switch (selectedOption) {
      case "resolved":
        apiCall = getResolved;
        break;
      case "unresolved":
        apiCall = getUnResolved;
        break;
      default:
        apiCall = getAllEnquiries;
    }

    apiCall()
      .then((data) => {
        setEnquiryList(data?.data || data);
        setLoaded(true);
        setError(false);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
      });
  };

  const handleMarkResolved = (enquiry) => {
    markResolved(enquiry._id)
      .then(() => setReload((prev) => !prev))
      .catch(console.log);
  };

  const handleMarkUnResolved = (enquiry) => {
    markUnResolved(enquiry._id)
      .then(() => setReload((prev) => !prev))
      .catch(console.log);
  };

  useEffect(() => {
    fetchData(filter);
  }, [reload, filter]);

  if (!isLoaded && !hasError) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-8 h-8 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

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
    <div className="p-6">
      {/* Fixed Header */}
      <div className="w-full  bg-violet-600 text-white z-10 shadow-md px-6 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-xl sm:text-2xl font-bold">Enquiry Page</h1>
          <select
            className="bg-white text-black rounded-md p-4 shadow-sm"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="resolved">Resolved</option>
            <option value="unresolved">Unresolved</option>
          </select>
        </div>
      </div>

      {/* Content Below Header */}
      <div className="mt-10 overflow-x-auto">
        <div className="border rounded-lg shadow-lg overflow-hidden">
          <table className="min-w-full bg-white text-sm sm:text-base">
            <thead className="bg-gray-100">
              <tr>
                {[
                  "Name",
                  "Email",
                  "Contact No",
                  "Course",
                  "University Name",
                  "Fee Range",
                  "Resolved",
                ].map((heading, idx) => (
                  <th
                    key={idx}
                    className="text-left px-4 py-3 border-b border-gray-300 font-semibold"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {enquiryList.map((enquiry, index) => (
                <tr
                  key={index}
                  className={
                    index % 2 === 0
                      ? "bg-white hover:bg-gray-50"
                      : "bg-gray-50 hover:bg-gray-100"
                  }
                >
                  <td className="px-4 py-3 border-t">
                    {enquiry?.name || "Seema Yadav"}
                  </td>
                  <td className="px-4 py-3 border-t">{enquiry.email}</td>
                  <td className="px-4 py-3 border-t">{enquiry.contact}</td>
                  <td className="px-4 py-3 border-t">{enquiry.course}</td>
                  <td className="px-4 py-3 border-t">
                    {enquiry.university_name}
                  </td>
                  <td className="px-4 py-3 border-t">{enquiry.fee_range}</td>
                  <td className="px-4 py-3 border-t">
                    {enquiry?.resolved ? (
                      <div
                        className="cursor-pointer"
                        onClick={() => handleMarkUnResolved(enquiry)}
                      >
                        <FaRegCheckSquare
                          className="text-green-600"
                          size={20}
                        />
                      </div>
                    ) : (
                      <div
                        className="cursor-pointer"
                        onClick={() => handleMarkResolved(enquiry)}
                      >
                        <FaRegSquare className="text-red-600" size={20} />
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
