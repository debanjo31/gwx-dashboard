import React from "react";

const Homepage = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl text-center text-[#F39C12]">GWX DASHBOARD</h1>
      <div className="my-8 flex gap-2">
        <button>Customer</button>
        <button>Manager</button>
        <button>Super Admin</button>
      </div>
    </div>
  );
};

export default Homepage;
