import { useEffect, useState } from "react";
import jsonData from "../json/data.json";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);
  useEffect(() => {
    setData(jsonData.logisticsData);
  }, []);

  useEffect(() => {
    const newData = data.map((item) => {
      return {
        client: item.clientName,
        station: item.stationName,
        destination: item.destination,
        date: item.date,
        status:
          item.successfulDelivery === true
            ? "successful"
            : item.cancelDelivery === true
            ? "cancel"
            : item.returnDelivery === true
            ? "return"
            : "",
      };
    });
    setNewData(newData);
  }, [data]);
  console.log(newData);
  return (
    <div>
      <h1 className="text-2xl text-[#F39C12] z-1">METRICS</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-4 py-10 ">
        <div class="container mx-auto">
          <div class="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
            <div class="h-20 bg-orange-400 flex items-center justify-between">
              <p class="mr-0 text-white text-lg pl-5">TOTAL SHIPMENTS</p>
            </div>
            <div class="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
              <p>TOTAL</p>
            </div>
            <p class="py-4 text-3xl ml-5">{data.length}</p>
            <hr />
          </div>
        </div>
        <div class="container mx-auto">
          <div class="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
            <div class="h-20 bg-violet-400 flex items-center justify-between">
              <p class="mr-0 text-white text-lg pl-5">Stations</p>
            </div>
            <div class="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
              <p>TOTAL</p>
            </div>
            <p class="py-4 text-3xl ml-5">
              {[...new Set(data.map((item) => item.stationName))].length}
            </p>
            <hr />
          </div>
        </div>
        <div class="container mx-auto">
          <div class="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
            <div class="h-20 bg-indigo-400 flex items-center justify-between">
              <p class="mr-0 text-white text-lg pl-5">Clients</p>
            </div>
            <div class="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
              <p>TOTAL</p>
            </div>
            <p class="py-4 text-3xl ml-5">
              {[...new Set(data.map((item) => item.clientName))].length}
            </p>
            <hr />
          </div>
        </div>
        <div class="container mx-auto">
          <div class="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
            <div class="h-20 bg-green-400 flex items-center justify-between">
              <p class="mr-0 text-white text-lg pl-5">SUCCESSFUL DELIVERY</p>
            </div>
            <div class="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
              <p>TOTAL</p>
            </div>
            <p class="py-4 text-3xl ml-5">
              {data.filter((item) => item.successfulDelivery === true).length}
            </p>
            <hr />
          </div>
        </div>
        <div class="container mx-auto">
          <div class="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
            <div class="h-20 bg-gray-400 flex items-center justify-between">
              <p class="mr-0 text-white text-lg pl-5">DESTINATIONS</p>
            </div>
            <div class="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
              <p>TOTAL</p>
            </div>
            <p class="py-4 text-3xl ml-5">
              {[...new Set(data.map((item) => item.destination))].length}
            </p>
            <hr />
          </div>
        </div>
        <div class="container mx-auto">
          <div class="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
            <div class="h-20 bg-red-600 flex items-center justify-between">
              <p class="mr-0 text-white text-lg pl-5">CANCELLED DELIVERY</p>
            </div>
            <div class="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
              <p>TOTAL</p>
            </div>
            <p class="py-4 text-3xl ml-5">
              {data.filter((item) => item.cancelDelivery === true).length}
            </p>
            <hr />
          </div>
        </div>
        <div class="container mx-auto">
          <div class="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
            <div class="h-20 bg-purple-400 flex items-center justify-between">
              <p class="mr-0 text-white text-lg pl-5">RETURNED DELIVERY</p>
            </div>
            <div class="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
              <p>TOTAL</p>
            </div>
            <p class="py-4 text-3xl ml-5">
              {data.filter((item) => item.returnDelivery === true).length}
            </p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
