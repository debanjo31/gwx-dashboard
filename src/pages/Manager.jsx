import React from "react";
import Header from "../componenets/Header";

const Customer = () => {
  return (
    <div className="w-full h-screen flex relative overflow-x-hidden">
      <div className="naviagtion bg-[#F39C12] text-white w-3/12 h-full p-2 fixed left-0 top-0">
        <h3 className="font-bold">Manager View</h3>
      </div>
      <div className="w-9/12 h-full ml-auto">
        <Header />
      </div>
    </div>
  );
};

export default Customer;
