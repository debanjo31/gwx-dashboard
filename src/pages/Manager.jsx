import React, { useState } from "react";
import Header from "../componenets/Header";
import ClientStats from "../componenets/ClientStats";
import StationStats from "../componenets/StationStats";
import Dashboard from "../componenets/Dashboard";

const Customer = () => {
  const [menu, setMenu] = useState("Top destinations");
  return (
    <div className="w-full h-screen flex relative overflow-x-hidden">
      <div className="naviagtion bg-[#F39C12] text-white w-3/12 h-full p-2 fixed left-0 top-0">
        <h3 className="font-bold">Manager View</h3>
        <div className="mt-12 text-white flex flex-col text-base justify-left gap-4">
          <button onClick={() => setMenu("Dashboard")}>Dashboard</button>
          <button onClick={() => setMenu("Station Stats")}>
            Transaction Analysis
          </button>
          <button onClick={() => setMenu("Client Stats")}>Client Stats</button>
        </div>
      </div>
      <div className="w-9/12 h-full ml-auto">
        <Header />
        {menu === "Dashboard" ? (
          <Dashboard />
        ) : menu === "Station Stats" ? (
          <StationStats />
        ) : menu === "Client Stats" ? (
          <ClientStats />
        ) : null}
      </div>
    </div>
  );
};

export default Customer;
