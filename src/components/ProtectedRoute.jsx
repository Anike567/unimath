import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const [isLoading, setLoading] = useState(true);
  const { userData, setUserdata } = useContext(AuthContext);

  useEffect(() => {
    console.log(userData);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-8 h-8 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }
  if (!userData.isLoggedIn) {
    return <Navigate to="/signin" replace />;
  }

  return children;
}
