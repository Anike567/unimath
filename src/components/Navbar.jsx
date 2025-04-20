import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import HamburgerButton from "./HamburgerButton";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { userData } = useContext(AuthContext);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <div className="bg-gray-800 px-5">
      <div className="flex items-center justify-between h-24">
        <div className="text-white text-lg font-bold">Unimatch</div>

        <div className="sm:hidden">
          <HamburgerButton onClick={toggleMenu} color="light" />
        </div>

        <div className="hidden sm:flex gap-6">
          <Link to="/" className="text-blue-400 hover:underline">
            Home
          </Link>
          <Link to="/topcolleges" className="text-blue-400 hover:underline">
            Top Colleges
          </Link>

          <Link to="/about" className="text-blue-400 hover:underline">
            About
          </Link>
          {userData.isLoggedIn && (
            <Link to="/dashboard" className="text-blue-400 hover:underline">
              Dashboard
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu with animation */}
      {menuOpen && (
        <div
          className={`sm:hidden flex flex-col gap-4 pb-4 transform transition-all duration-3000 ease-in-out ${
            menuOpen
              ? "translate-y-0 opacity-100" // Menu open, slide down and fade in
              : "translate-y-[-100%] opacity-0" // Menu closed, slide up and fade out
          }`}
        >
          <Link
            to="/"
            className="text-blue-400 hover:underline"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/topcolleges"
            className="text-blue-400 hover:underline"
            onClick={toggleMenu}
          >
            Top Colleges
          </Link>
          <Link
            to="/signup"
            className="text-blue-400 hover:underline"
            onClick={toggleMenu}
          >
            Top Cources
          </Link>
          <Link
            to="/about"
            className="text-blue-400 hover:underline"
            onClick={toggleMenu}
          >
            About
          </Link>
        </div>
      )}
    </div>
  );
}
