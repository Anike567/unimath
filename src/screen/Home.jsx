import Card from "../components/Card";
import councelling from "./../assets/Career_Counselling.png";
import admission from "./../assets/Admission_in_Top_Colleges_in_India.png";
import exper_councellin from "./../assets/Get_Expert_Career_Guidance.png";
import DemoCarousel from "./../components/Courosel";
import HoverCard from "../components/HoverCard";
import { useEffect, useState } from "react";
import getTopColleges from "../API_CALLS/getTopColleges";
import Button from "./../components/StyledButton";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Home() {
  const [collegeData, setCollegeData] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [hasError, setError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    getTopColleges()
      .then((data) => {
        const topColleges = data.college.slice(0, 6);
        console.log(topColleges);
        setCollegeData(topColleges);
        setLoaded(true);
      })

      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, []);

  if (hasError) {
    <div className="flex justify-center items-center h-screen">
      <p className="text-3xl, text-red-500">
        Error occured please try again later
      </p>
    </div>;
  }

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-8 h-8 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="  flex flex-col justify-center items-center py-5 m-auto">
      <DemoCarousel />

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {collegeData.map((data, index) => (
          <Link to="/college-details">
            <HoverCard
              key={index}
              image={data.university_img}
              message={data.university_name}
              extraInfo={data.description}
            />
          </Link>
        ))}
      </div>

      <div
        className="text-center mt-10"
        onClick={() => {
          navigate("/topcolleges");
        }}
      >
        <Button text="Browse More" />
      </div>

      <div id="discription" className="mt-4">
        <div className="text-center ">
          <h3 className="text-3xl font-bold mb-2">
            Get Admission in the Top Colleges of India
          </h3>
        </div>
        <div className="p-2 max-w-[70vw] mx-auto text-center">
          <p className="text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            ipsa nesciunt vero dicta rerum eaque, minima omnis aut
            exercitationem? Dolorem veritatis unde ut mollitia delectus quaerat
            accusantium veniam corporis voluptate?
          </p>
        </div>
      </div>

      <div className="bg-[#99E1D9] p-20 justify-center ">
        <div>
          <div>
            <h2 className="text-3xl text-center font-bold">
              Our Career Assessment is an Industry Benchmark Our groundwork
              takes you sky high
            </h2>
          </div>
          <div>
            <p className="text-center text-xl fonst semi-bold ">
              AdmissionLelo is one of the pioneers in online career counselling.
              Our expert team of counsellors are highly qualified, experienced
              and well-versed in giving sound advice to aspiring students. They
              impart career counselling to thousands of students every year with
              impeccable results.
            </p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <Card key={1} image={councelling} message="Free Career Councelling" />
          <Card
            key={2}
            image={admission}
            message="Only Best Colleges For You"
          />
          <Card
            key={3}
            image={exper_councellin}
            message="Best Career Guidance from Experts"
          />
        </div>
      </div>
    </div>
  );
}
