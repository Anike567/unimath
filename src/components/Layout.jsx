import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="overflow-auto">
      <div className="fixed top-0 left-0 w-full z-50 ">
        <Navbar />
      </div>
      <main className="pt-16 overflow-y-auto mt-4j">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
