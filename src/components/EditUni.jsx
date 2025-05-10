import Input from "./Input";

export default function EditUni({ props }) {
  const handleChange = () => {
    console.log("working");
  };
  console.log(props);
  return (
    <div
      className="border rounded-lg shadow-lg overflow-hidden bg-gray-100 flex items-center justify-center"
      onClick={(e) => e.stopPropagation()}
    >
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[400px]">
        <div className="grid grid-cols-1 gap-4">
          <Input
            title="University Name"
            name="university_name"
            id="university_name"
            handler={handleChange}
          />

          <Input title="NIRF Ranking" name="nirf_rank" id="nirf_rank" />

          <Input
            title="Courses Offered (separated with ,)"
            name="courses_offered"
            id="courses_offered"
            handler={handleChange}
          />

          <Input
            title="Description"
            name="description"
            id="description"
            handler={handleChange}
          />

          <Input
            title="Fee Range"
            name="fee_range"
            id="fee_range"
            handler={handleChange}
          />

          <div className="mt-4">
            <p className="text-gray-700 text-sm font-bold mb-1">Image</p>
            <input
              type="file"
              //   onChange={handleFileChange}
              className="p-2 border w-full"
            />
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[100px] disabled:opacity-50"
            type="button"
            disabled={isLoading}
            // onClick={(e) => {
            //   e.preventDefault();
            //   handleSubmit();
            // }}
          >
            {/* {isLoading ? "Saving..." : "Save"} */}
          </button>

          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-[100px]"
            type="reset"
            // onClick={(e) => {
            //   e.preventDefault();
            //   setFormData({
            //     university_name: "",
            //     nirf_rank: "",
            //     courses_offered: "",
            //     fee_range: "",
            //     description: "",
            //     image: null,
            //   });
            // }}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
