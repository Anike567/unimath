import { useEffect, useState, useRef } from "react";
import getTopColleges from "../API_CALLS/getTopColleges";
import "reactjs-popup/dist/index.css";
import HoverCard from "../components/HoverCard";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function TopColleges() {
  const [collegeList, setCollegeList] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [displaySearchList, setDisplaySearchList] = useState(false);
  const searchRef = useRef();

  const search = (text) => {
    if (!text.trim()) {
      setSearchList([]);
      setDisplaySearchList(false);
      return;
    }

    const foundList = collegeList.filter((uni) =>
      uni.university_name.toLowerCase().includes(text.toLowerCase())
    );
    setSearchList(foundList);
    setDisplaySearchList(true);
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setDisplaySearchList(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
    <div className="py-12 bg-white flex justify-center items-center flex-col">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-700 mb-8">
        Top Colleges in India
      </h2>

      {/* Search Box and Dropdown */}
      <div className="relative mb-10 w-[30vw]" ref={searchRef}>
        <input
          className="px-4 py-2 pl-10 w-full border rounded-md"
          placeholder="Search for university by name"
          value={searchText}
          onChange={(e) => {
            const value = e.target.value;
            setSearchText(value);
            search(value);
          }}
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />

        {displaySearchList && searchList.length > 0 && (
          <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md max-h-60 overflow-y-auto shadow-md">
            {searchList.map((uni, index) => (
              <Link to={`/college-details?_id=${uni._id} `}>
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-blue-100 cursor-pointer text-lg text-bold"
                  onClick={() => {
                    setSearchText(uni.university_name);
                    setDisplaySearchList(false);
                  }}
                >
                  {uni.university_name}
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {collegeList.map((data, index) => (
          <Link to={`/college-details?_id=${data._id} `} key={index}>
            <div className="cursor-pointer" key={index}>
              <HoverCard
                image={data.university_img}
                message={data.university_name}
                extraInfo={data.description}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
