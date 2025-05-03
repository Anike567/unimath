import banner from "../assets/slider-banner.webp";
import glBajaj from "../assets/GLBajaj.jpeg";
import Card from "./../components/Card";
import councelling from "./../assets/Career_Counselling.png";
import admission from "./../assets/Admission_in_Top_Colleges_in_India.png";
import exper_councellin from "./../assets/Get_Expert_Career_Guidance.png";
import Slider from "../components/Slider";

export default function Home() {
  const collegeData = [
    {
      image: glBajaj,
      collegeName: "GL Bajaj Institute of Technology",
      collegeAddress: "Greater Noida, Uttar Pradesh",
    },
    {
      image: glBajaj,
      collegeName: "GL Bajaj Institute of Technology",
      collegeAddress: "Greater Noida, Uttar Pradesh",
    },
    {
      image: glBajaj,
      collegeName: "GL Bajaj Institute of Technology",
      collegeAddress: "Greater Noida, Uttar Pradesh",
    },
    {
      image: glBajaj,
      collegeName: "GL Bajaj Institute of Technology",
      collegeAddress: "Greater Noida, Uttar Pradesh",
    },
    {
      image: glBajaj,
      collegeName: "GL Bajaj Institute of Technology",
      collegeAddress: "Greater Noida, Uttar Pradesh",
    },
    {
      image: glBajaj,
      collegeName: "GL Bajaj Institute of Technology",
      collegeAddress: "Greater Noida, Uttar Pradesh",
    },
  ];

  return (
    <div className="  flex flex-col justify-center items-center py-5 m-auto">
      <div>
        <img src={banner} alt="Banner" className=" w-[100vw]" />
      </div>

      <div id="discription" className="mt-4">
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-2">
            Get Admission in the Colleges in India
          </h3>
        </div>
        <div className="text-center p-2">
          <p className="text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            ipsa nesciunt vero dicta rerum eaque, minima omnis aut
            exercitationem? Dolorem veritatis unde ut mollitia delectus quaerat
            accusantium veniam corporis voluptate?
          </p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {collegeData.map((data, index) => (
          <Card
            key={index}
            image={data.image}
            message={data.collegeName}
            extraInfo={data.collegeAddress}
          />
        ))}
      </div>

      <div className="bg-violet-400 p-10 justify-center">
        <div>
          <div>
            <h2 className="text-3xl text-center font-bold">
              Our Career Assessment is an Industry Benchmark Our groundwork
              takes you sky high
            </h2>
          </div>
          <div>
            <p className="text-center text-xl fonst semi-bold">
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
            message="Only Free Colleges For You"
          />
          <Card
            key={3}
            image={exper_councellin}
            message="Best Career Guidance from Experts"
          />
        </div>
      </div>

      <div>
        <Slider />
      </div>
    </div>
  );
}
