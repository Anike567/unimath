export default function About() {
  return (
    <div className="flex flex-col items-center max-w-[100vw] w-full px-6 py-20 bg-white text-center">
      <h2 className="text-3xl font-extrabold text-blue-600 mb-6">
        Why Choose <span className="text-black">Unimatch?</span>
      </h2>

      <ol className="list-decimal text-left space-y-4 text-lg max-w-xl">
        <li>
          <span className="font-semibold text-blue-500">
            Free Course Counseling:
          </span>{" "}
          Get expert guidance to pick the right career path without spending a
          dime.
        </li>
        <li>
          <span className="font-semibold text-blue-500">
            Curated Resources:
          </span>{" "}
          Access handpicked materials that match your learning style and goals.
        </li>
        <li>
          <span className="font-semibold text-blue-500">
            1-on-1 Mentorship:
          </span>{" "}
          Connect with professionals and get personal advice to grow faster.
        </li>
        <li>
          <span className="font-semibold text-blue-500">Flexible Support:</span>{" "}
          Whether you're a night owl or early bird, our support adapts to your
          schedule.
        </li>
      </ol>
    </div>
  );
}
