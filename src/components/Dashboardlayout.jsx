import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { FiFileText, FiSettings } from "react-icons/fi";
import { FaEye, FaPlus } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
export default function DashboardLayout() {
  const { setUserData } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg border-r p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold text-purple-600 mb-8">NYC Admin</h1>
          <nav className="flex flex-col gap-4">
            <NavLink
              to="/admin/home"
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-md hover:bg-purple-100 ${
                  isActive ? "bg-purple-200 font-semibold" : ""
                }`
              }
            >
              <AiOutlineHome color="green" className="w-5 h-5" />
              Dashboard
            </NavLink>
            <NavLink
              to="/admin/enquiries"
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-md hover:bg-purple-100 ${
                  isActive ? "bg-purple-200 font-semibold" : ""
                }`
              }
            >
              <FiFileText color="green" className="w-5 h-5" />
              Enquiries
            </NavLink>
            <NavLink
              to="/admin/addstudent"
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-md hover:bg-purple-100 ${
                  isActive ? "bg-purple-200 font-semibold" : ""
                }`
              }
            >
              <FaPlus className="w-5 h-5" color="green" />
              Add student
            </NavLink>

            <NavLink
              to="/admin/adduniversity"
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-md hover:bg-purple-100 ${
                  isActive ? "bg-purple-200 font-semibold" : ""
                }`
              }
            >
              <FaPlus className="w-5 h-5" color="green" />
              Add University
            </NavLink>

            <NavLink
              to="/admin/studentdetails"
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-md hover:bg-purple-100 ${
                  isActive ? "bg-purple-200 font-semibold" : ""
                }`
              }
            >
              <FaEye className="w-5 h-5" color="green" />
              Enrolled Students
            </NavLink>

            <NavLink
              to="/admin/universitiesDetails"
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-md hover:bg-purple-100 ${
                  isActive ? "bg-purple-200 font-semibold" : ""
                }`
              }
            >
              <FaEye className="w-5 h-5" color="green" />
              Universities
            </NavLink>
          </nav>
        </div>

        <div>
          <button
            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
            onClick={() => {
              setUserData({
                isLoggedIn: false,
                token: "",
                name: "",
                email: "",
              });

              navigate("/admin");
            }}
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
