import { useEffect, useState } from "react";
import getAllEnquiries from "../API_CALLS/getEnquiries";
import { FiCheckSquare } from "react-icons/fi";
import { MdCancel } from "react-icons/md";

export default function Enquiries() {
  const [isLoaded, setLoaded] = useState(false);
  const [hasError, setError] = useState(false);
  const [enquiryList, setEnquiryList] = useState([]);

  useEffect(() => {
    getAllEnquiries()
      .then((data) => {
        setEnquiryList(data);
        setLoaded(true); // Set loaded to true after data is fetched
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, []);

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
      <h1 className="text-2xl font-bold mb-4">Enquiry Page</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-800 shadow-md rounded-lg overflow-hidden">
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
                  className="text-left px-1 py-1 sm:px-6 sm:py-3 border border-gray-800 font-semibold text-xs sm:text-xl"
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
                <td className="px-1 py-1 sm:px-6 sm:py-3 border border-gray-800 text-xs sm:text-xl">
                  {enquiry?.name || "Seema Yadav"}
                </td>
                <td className="px-1 py-1 sm:px-6 sm:py-3 border border-gray-800 text-xs sm:text-xl">
                  {enquiry.email}
                </td>
                <td className="px-1 py-1 sm:px-6 sm:py-3 border border-gray-800 text-xs sm:text-xl">
                  {enquiry.contact}
                </td>
                <td className="px-1 py-1 sm:px-6 sm:py-3 border border-gray-800 text-xs sm:text-xl">
                  {enquiry.course}
                </td>
                <td className="px-1 py-1 sm:px-6 sm:py-3 border border-gray-800 text-xs sm:text-xl">
                  {enquiry.university_name}
                </td>
                <td className="px-1 py-1 sm:px-6 sm:py-3 border border-gray-800 text-xs sm:text-xl">
                  {enquiry.fee_range}
                </td>
                <td className="px-1 py-1 sm:px-6 sm:py-3 border border-gray-800 text-xs sm:text-xl">
                  {enquiry?.resolved ? (
                    <FiCheckSquare className="text-green-600" size={40} />
                  ) : (
                    <MdCancel className="text-red-600" size={40} />
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
