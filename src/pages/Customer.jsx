import { useState } from "react";
import Header from "../componenets/Header";
import TopDestination from "../componenets/TopDestination";
import CRShipment from "../componenets/CRShipment";
import SuccessfulDelivery from "../componenets/SuccessfulDelivery";

const Customer = () => {
  const [menu, setMenu] = useState("Top destinations");
  return (
    <div className="w-full h-screen flex relative overflow-x-hidden">
      <div className="naviagtion bg-[#F39C12] text-white w-3/12 h-full p-2 fixed left-0 top-0">
        <h3 className="font-bold text-xl">Customer View</h3>
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
      <div className="w-9/12 h-full ml-auto">
        <Header />
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
