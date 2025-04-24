const colorMap = {
  red: "bg-red-500",
  blue: "bg-blue-500",
  green: "bg-green-500",
  yellow: "bg-yellow-500",
  // add more as needed
};

export default function CustomCard(props) {
  const bgColor = colorMap[props.color] || "bg-gray-200"; // fallback color

  return (
    <div
      className={`w-full max-w-sm ${bgColor} shadow-lg rounded-xl p-4 flex flex-col items-center justify-center space-y-2`}
    >
      <div className="w-full h-48 overflow-hidden rounded-md">{props.icon}</div>
      <div>
        <h1 className="text-lg font-semibold">{props.text}</h1>
      </div>
    </div>
  );
}
