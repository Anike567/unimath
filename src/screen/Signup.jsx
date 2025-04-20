import { useState } from "react";
import Input from "../components/Input";
import PasswordField from "../components/PasswordField";

export default function SigninForm() {
  const [formState, setFormState] = useState({
    username: "",
    name: "",
    email: "",
    contact: "",
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
          <Input id="name" name="name" title="Name" handler={handleChange} />
          <Input
            id="e-mail"
            name="email"
            title="Email"
            handler={handleChange}
          />
          <Input
            id="contact"
            name="contact"
            title="Contact-no"
            handler={handleChange}
          />
          <PasswordField
            id="pass"
            name="password"
            title="Password"
            handler={handleChange}
          />

          <div className="flex items-center justify-between">
            <button
              onClick={(e) => {
                e.preventDefault();
                alert(JSON.stringify(formState));
              }}
              type="submit"
              className="bg-blue-500 font-sans hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
          </div>
        </form>

        <p className="text-center font-sans text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>
    </div>
  );
}
