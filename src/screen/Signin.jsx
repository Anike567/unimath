import PasswordField from "../components/PasswordField";
import Input from "../components/Input";
import { useState } from "react";
export default function Signin(params) {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="h-screen bg-gradient-to-br from-purple-500 to-pink-500 flex justify-center items-center">
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {/*username */}
          <Input
            title="Username"
            name="username"
            id="username"
            handler={handleChange}
          />

          {/* Password */}
          <PasswordField
            title="Password"
            name="password"
            id="pass"
            handler={handleChange}
          />
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                alert(JSON.stringify(formState));
              }}
            >
              Sign In
            </button>
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
