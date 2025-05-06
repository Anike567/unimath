export default function HoverCard(props) {
  return (
    <div className="w-sm max-w-sm lg:w-[600px] lg:max-w-[600px] bg-white shadow-lg rounded-xl p-4 flex flex-col group relative overflow-hidden">
      <div className="w-full h-[400px] overflow-hidden rounded-md relative">
        <img
          src={props.image}
          alt="college"
          className="w-full h-full object-cover rounded-md"
        />

        {/* Title always visible at bottom */}
        <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-60 py-2 px-3">
          <h1 className="text-black text-base font-semibold text-center">
            {props.message}
          </h1>
        </div>

        {/* Extra info slides up on hover */}
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-90 text-white transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out px-4 py-3">
          {props.extraInfo && (
            <p className="text-sm text-center">{props.extraInfo}</p>
          )}
        </div>
      </div>
    </div>
  );
}
