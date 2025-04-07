import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="h-200 bg-yellow-200 p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
