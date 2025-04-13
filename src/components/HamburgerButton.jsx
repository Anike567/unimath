export default function HamburgerButton(props) {
  const lineColor = props.color === "light" ? "bg-white" : "bg-black";

  return (
    <div
      onClick={props.onClick}
      className="flex flex-col justify-between w-6 h-5 cursor-pointer group"
    >
      <span
        className={`block h-0.5 ${lineColor} group-hover:bg-gray-700 transition-all duration-300`}
      ></span>
      <span
        className={`block h-0.5 ${lineColor} group-hover:bg-gray-700 transition-all duration-300`}
      ></span>
      <span
        className={`block h-0.5 ${lineColor} group-hover:bg-gray-700 transition-all duration-300`}
      ></span>
    </div>
  );
}
