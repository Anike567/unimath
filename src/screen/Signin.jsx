import PasswordField from "../components/PasswordField";
import Input from "../components/Input";
import { useContext, useState } from "react";
import signin from "../API_CALLS/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Signin() {
  const [isLoading, setLoading] = useState(false);
  const { setUserData } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    setLoading(true);
    signin(formState)
      .then((data) => {
        setLoading(false);
        alert(data.msg);
        if (data.msg === "Logged in successfully") {
          setUserData({ isLoggedIn: true, token: data.authToken });
          navigate("/admin");
        }
      })
      .catch((err) => {
        setLoading(false);
        console.error("Login failed:", err);
        alert("Login failed. Please try again.");
      });
  };

  return (
    <div className="h-screen  flex justify-center items-center">
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {/* Email input */}
          <Input title="Email" name="email" id="email" handler={handleChange} />

          {/* Password input */}
          <PasswordField
            title="Password"
            name="password"
            id="pass"
            handler={handleChange}
          />

          <div className="flex items-center justify-between mt-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center w-full"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="w-6 h-6 border-4 border-white border-dashed rounded-full animate-spin" />
              ) : (
                "Sign In"
              )}
            </button>
          </div>

          <div className="mt-4 text-center">
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>

        <p className="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>
    </div>
  );
}
