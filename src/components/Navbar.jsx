import { Link } from "react-router-dom";
import Signin from "../screen/Signin";
import Signup from "../screen/Signup";
export default function Navbar() {
  return (
    <div className="flex items-center justify-between bg-gray-800 h-24 px-5">
      <div className="left">
        <h3 className="text-lg font-bold text-white">Unimatch</h3>
      </div>
      <div className="right flex gap-4">
        <Link to="/" className="hover:underline text-blue-600">
          Home
        </Link>
        <Link to="/signin" className="hover:underline text-blue-600">
          Signin
        </Link>
        <Link to="/signup" className="hover:underline text-blue-600">
          Signup
        </Link>
        <Link to="/about" className="hover:underline text-blue-600">
          About
        </Link>
      </div>
    </div>
  );
}
