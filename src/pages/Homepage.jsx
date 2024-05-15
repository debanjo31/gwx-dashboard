import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl text-center text-[#F39C12]">GWX DASHBOARD</h1>
      <div className="my-8 flex gap-2">
        <Link
          to={"/customer"}
          class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Customer
        </Link>
        <Link
          to={"/manager"}
          class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Manager
        </Link>
        <Link
          to={"/super-admin"}
          class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Super Admin
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
