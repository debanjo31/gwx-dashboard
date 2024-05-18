import { useState } from "react";
import Header from "../componenets/Header";
import TopDestination from "../componenets/TopDestination";
import CRShipment from "../componenets/CRShipment";
import SuccessfulDelivery from "../componenets/SuccessfulDelivery";

const Customer = () => {
  const [menu, setMenu] = useState("Top destinations");
  const [sideBar, setSideBar] = useState(false);
  return (
    <div className="w-full h-screen flex relative overflow-x-hidden">
      <div
        className={`naviagtion bg-[#F39C12] text-white w-7/12 md:w-3/12 h-full p-2 fixed left-0 top-0 ${
          sideBar ? "block" : "hidden"
        } md:block`}
      >
        <div className="flex justify-between">
          <h3 className="font-bold text-xl">Customer View</h3>
          <p
            className="font-bold text-xl cursor-pointer md:hidden"
            onClick={() => setSideBar(!sideBar)}
          >
            X
          </p>
        </div>
        <div className="mt-12 text-white flex flex-col text-base justify-left gap-4">
          <button onClick={() => setMenu("Top destinations")}>
            Top destinations
          </button>
          <button onClick={() => setMenu("Canceled/Returned Shipments")}>
            Canceled/Returned Shipments
          </button>
          <button onClick={() => setMenu("Successful delivery")}>
            Successful delivery
          </button>
        </div>
      </div>
      <div className="w-full md:w-9/12 h-full ml-auto">
        <Header sideBar={sideBar} setSideBar={setSideBar} />
        <div className="container p-6 mx-auto">
          {menu === "Top destinations" ? (
            <TopDestination />
          ) : menu === "Canceled/Returned Shipments" ? (
            <CRShipment />
          ) : menu === "Successful delivery" ? (
            <SuccessfulDelivery />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Customer;
