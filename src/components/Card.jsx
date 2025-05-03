export default function Card(props) {
  return (
    <div className="w-full max-w-sm bg-white shadow-lg rounded-xl p-4 flex flex-col space-y-2">
      <div className="w-full h-48 overflow-hidden rounded-md">
        <img
          src={props.image}
          alt="college"
          className="w-full h-full object-cover"
        />
      </div>

      <div>
        <h1 className="text-lg font-semibold text-center">{props.message}</h1>
        {props.extraInfo && (
          <p className="text-sm text-gray-600 text-center">{props.extraInfo}</p>
        )}
      </div>
    </div>
  );
}
