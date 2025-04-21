import { Outlet } from "react-router-dom";

export default function DashBoard() {
  return (
    <div className="h-screen bg-gradient-to-br from-purple-500 to-pink-500 flex justify-center items-center">
      <div className="flex flex-col w-[100vw] h-[100vh] sm:w-[90vw] sm:h-[80vh] border rounded-lg bg-white shadow-lg">
        <div className="w-[20%] h-[100%] bg-yellow-500 border-r p-4">
          <h1 className="font-bold text-lg mb-4">Navbar</h1>
        </div>

        <div className="w-[80%] p-4 overflow-auto bg-red-800">
          <h1>hii</h1>
        </div>
      </div>
    </div>
  );
}
