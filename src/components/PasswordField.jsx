import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
export default function PasswordField(props) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="mb-6">
      <label
        htmlFor="password"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {props.title}
      </label>
      <div className="relative">
        <div
          className="absolute top-2 right-3 cursor-pointer text-gray-600 "
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? (
            <FaEyeSlash className="cursor-pointer" />
          ) : (
            <FaEye className="cursor-pointer" />
          )}
        </div>
        <input
          id={props.id}
          type={showPassword ? "text" : "password"}
          placeholder={`Enter your ${props.title}`}
          name={props.name}
          onChange={props.handler}
          className="shadow font-sans appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    </div>
  );
}
