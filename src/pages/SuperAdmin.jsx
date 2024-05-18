import React, { useState } from "react";
import Header from "../componenets/Header";
import StationStats from "../componenets/StationStats";
import Dashboard from "../componenets/Dashboard";
import ShimpnentStats from "../componenets/ShimpnentStats";
import ClientStats from "../componenets/ClientStats";

const SuperAdmin = () => {
  const [menu, setMenu] = useState("Dashboard");
  const [sideBar, setSideBar] = useState(false);
  return (
    <div className="w-full h-screen flex relative overflow-x-hidden">
      <div
        className={`naviagtion bg-[#F39C12] text-white w-7/12 md:w-3/12 h-full p-2 fixed left-0 top-0 ${
          sideBar ? "block" : "hidden"
        } md:block`}
      >
        <div className="flex justify-between">
          <h3 className="font-bold">Super Admin View</h3>
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
              setMenu("Station Stats");
              setSideBar(!sideBar);
            }}
          >
            Station Stats
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
      <div className="w-full md:w-9/12 h-full ml-auto">
        <Header sideBar={sideBar} setSideBar={setSideBar} />
        <div className="container p-6 mx-auto">
          {menu === "Dashboard" ? (
            <Dashboard />
          ) : menu === "Station Stats" ? (
            <StationStats />
          ) : menu === "Shipment Stats" ? (
            <ShimpnentStats />
          ) : menu === "Client Stats" ? (
            <ClientStats />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SuperAdmin;
