import React, { useState } from "react";
import Header from "../componenets/Header";
import ClientStats from "../componenets/ClientStats";
import StationStats from "../componenets/StationStats";
import Dashboard from "../componenets/Dashboard";
import Transactions from "../componenets/Transactions";

const Customer = () => {
  const [menu, setMenu] = useState("Dashboard");
  const [sideBar, setSideBar] = useState(false);
  return (
    <div className="w-full  h-screen flex relative overflow-x-hidden">
      <div
        className={`naviagtion z-10 bg-[#F39C12] text-white w-7/12 md:w-3/12 h-full p-2 fixed left-0 top-0 ${
          sideBar ? "block" : "hidden"
        } md:block`}
      >
        <div className="flex justify-between">
          <h3 className="font-bold">Manager View</h3>
          <p
            className="font-bold text-xl cursor-pointer md:hidden"
            onClick={() => setSideBar(!sideBar)}
          >
            X
          </p>
        </div>
        <div className="mt-12 text-white flex flex-col text-base justify-left gap-4">
          <button
            onClick={() => {
              setMenu("Dashboard");
              setSideBar(!sideBar);
            }}
          >
            Dashboard
          </button>
          <button
            onClick={() => {
              setMenu("Transaction");
              setSideBar(!sideBar);
            }}
          >
            Transaction Analysis
          </button>
          <button
            onClick={() => {
              setMenu("Client Stats");
              setSideBar(!sideBar);
            }}
          >
            Client Stats
          </button>
        </div>
      </div>
      <div className="w-full md:w-9/12 h-full ml-auto z-1">
        <Header sideBar={sideBar} setSideBar={setSideBar} />
        <div className="container p-6 mx-auto">
          {menu === "Dashboard" ? (
            <Dashboard />
          ) : menu === "Transaction" ? (
            <Transactions />
          ) : menu === "Client Stats" ? (
            <ClientStats />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Customer;
