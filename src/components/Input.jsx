export default function Input(props) {
  return (
    <div className="mb-4">
      <label
        htmlFor={props.id}
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {props.title}
      </label>
      <input
        name={props.name}
        onChange={props.handler}
        id={props.id}
        type="text"
        placeholder={`Enter your ${props.title}`}
        className="shadow font-sans appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
}
