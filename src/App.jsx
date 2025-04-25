import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import About from "./components/About";
import Home from "./screen/Home";
import Signup from "./screen/Signup";
import TopColleges from "./screen/TopColleges";
import Signin from "./screen/Signin";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext.jsx";
import DashboardLayout from "./components/Dashboardlayout.jsx";
import Enquiries from "./components/Enquiries.jsx";
import AdminHome from "./components/AdminHome.jsx";
import Settings from "./components/Setting.jsx";
import StudentForm from "./components/StudentForm.jsx";
import UniversityForm from "./components/UniversityForm.jsx";
import EnrolledStudents from "./components/EnrolledStudents.jsx";

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public/User Routes - No Login Needed */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="topcolleges" element={<TopColleges />} />
        </Route>

        {/* Auth Routes - Admin Only */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Admin Route */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminHome />} />
          <Route path="home" element={<AdminHome />} />
          <Route path="enquiries" element={<Enquiries />} />
          <Route path="settings" element={<Settings />} />
          <Route path="addstudent" element={<StudentForm />} />
          <Route path="adduniversity" element={<UniversityForm />} />
          <Route path="studentdetails" element={<EnrolledStudents />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
