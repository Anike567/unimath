import { FaEye } from "react-icons/fa";
import CustomCard from "./CustomCard";

export default function AdminHome() {
  return (
    <div>
      <div className="w-full bg-violet-600 text-white z-10 shadow-md px-6 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-xl sm:text-2xl font-bold">Home Page</h1>
          <select className="bg-white text-black rounded-md p-4 shadow-sm">
            <option value="resolved">Resolved</option>
            <option value="unresolved">Unresolved</option>
            <option value="all">All</option>
          </select>
        </div>
      </div>

      <div className="mt-28 overflow-x-auto">
        <div className="border rounded-lg shadow-lg overflow-hidden">
          <CustomCard color="red" icon={<FaEye />} text="40" />
        </div>
      </div>
    </div>
  );
}
