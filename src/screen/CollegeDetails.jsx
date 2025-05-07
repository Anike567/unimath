import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import getTopColleges from "../API_CALLS/getTopColleges";
import brochure from "./../assets/brochure.jpg";

const CollegeDetails = () => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setLoaded] = useState(false);
  const [college, setCollege] = useState(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const collegeId = queryParams.get("_id");

  useEffect(() => {
    getTopColleges()
      .then((data) => {
        const result = data.college.filter((uni) => uni._id === collegeId);
        setCollege(result);
        setLoaded(true);
      })
      .catch((err) => {
        console.log(err);
        setHasError(true);
      });
  }, [collegeId]);

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
    <div className="flex content-center mt-20">
      <div className="grid grid-cols-2 gap-4 m-auto">
        <div>
          {college && college.length > 0 ? (
            college.map((uni, index) => (
              <div key={index}>
                <div className="w-full max-w-2xl h-full max-h-2xl bg-white shadow-lg rounded-xl p-4 flex flex-col space-y-2">
                  <div className="w-full h-full overflow-hidden rounded-md">
                    <img
                      src={uni.university_img}
                      alt="college"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h1 className="text-lg font-semibold text-center">
                      {uni.university_name}
                    </h1>

                    <p className="text-sm text-gray-600 text-center">
                      {uni.description}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No college found.</p>
          )}
        </div>
        <div className="w-full h-full shadow-lg">
          <img
            className="w-full h-full object-cover"
            src={brochure}
            alt="college brochure"
          />
        </div>
      </div>
    </div>
  );
};

export default CollegeDetails;
