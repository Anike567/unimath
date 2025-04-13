import banner from "../assets/slider-banner.webp";
import glBajaj from "../assets/GLBajaj.jpeg";
import Card from "./../components/Card";

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
    <div className=" bg-gradient-to-br from-purple-500 to-pink-500 flex flex-col justify-center items-center py-5 m-auto">
      <div>
        <img src={banner} alt="Banner" />
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
        {collegeData.map((data) => {
          return (
            <Card
              key={data.collegeName}
              image={data.image}
              collegeName={data.collegeName}
              collegeAddress={data.collegeAddress}
            />
          );
        })}
      </div>
    </div>
  );
}
