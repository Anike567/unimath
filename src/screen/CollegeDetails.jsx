import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import getTopColleges from "../API_CALLS/getTopColleges";
import Card from "../components/Card";

const CollegeDetails = () => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setLoaded] = useState(false);
  const [college, setCollege] = useState(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const collegeId = queryParams.get("_id");

  useEffect(() => {
    {
      getTopColleges()
        .then((data) => {
          const result = data.college.filter((uni) => uni._id === collegeId);
          setCollege(result);
          setLoaded(true);
        })
        .catch((error) => {
          setHasError(true);
        });
    }
  }, []);

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  if (hasError) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <p className="text-red-600 text-lg font-semibold">
          Failed to load data. Please try again later.
        </p>
      </div>
    );
  }
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="grid grid-cols2">
        <div>
          {college.map((uni, index) => (
            <div key={index}>
              <Card
                image={uni.university_img}
                message={uni.university_name}
                extraInfo={uni.description}
              />
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CollegeDetails;
