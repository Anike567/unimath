import { useEffect, useState } from "react";
import getTopColleges from "../API_CALLS/getTopColleges";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import submitEnquiry from "../API_CALLS/submitEnquiry";
import HoverCard from "../components/HoverCard";

export default function TopColleges() {
  const [collegeList, setCollegeList] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

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
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <p className="text-red-600 text-lg font-semibold">
          Failed to load data. Please try again later.
        </p>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="  py-12 bg-white flex justify-center items-center flex-col">
      <h2 className="text-3xl  sm:text-4xl font-bold text-center text-blue-700 mb-8">
        Top Colleges in India
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {collegeList.map((data, index) => (
          <div className="cursor-pinter">
            <HoverCard
              key={index}
              image={data.university_img}
              message={data.university_name}
              extraInfo={data.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
