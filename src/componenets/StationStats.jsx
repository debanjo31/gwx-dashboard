import { useEffect, useState } from "react";
import jsonData from "../json/data.json";

const StationStats = () => {
  const [data, setData] = useState([]);
  const [stationStats, setStationStats] = useState([]);
  useEffect(() => {
    setData(jsonData.logisticsData);
  }, []);
  useEffect(() => {
    const uniqueStations = [...new Set(data.map((item) => item.stationName))];
    const stationCount = uniqueStations.map((station) => {
      const stationData = data.filter((item) => item.stationName === station);
      return {
        station: station,
        successfulShipments: stationData.filter(
          (item) => item.successfulDelivery === true
        ).length,
        cancelledReturnShipments: stationData.filter(
          (item) => item.cancelDelivery === true || item.returnDelivery === true
        ).length,
        clients: [...new Set(stationData.map((item) => item.clientName))]
          .length,
        destinations: [...new Set(stationData.map((item) => item.destination))]
          .length,
      };
    });
    setStationStats(stationCount);
  }, [data]);
  return (
    <div>
      <h1 className="text-2xl text-[#F39C12]">STATIONS STATISTICS</h1>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr className="divide-x">
                  <th
                    scope="col"
                    className="whitespace-nowrap py-3.5  pl-4 pr-3 text-left text-sm lg:text-base xl:text-lg font-semibold text-gray-900 sm:pl-0"
                  >
                    Station
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5  text-left text-sm lg:text-base xl:text-lg font-semibold text-gray-900"
                  >
                    SUCCESSFUL SHIPMENTS
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5  text-left text-sm lg:text-base xl:text-lg font-semibold text-gray-900"
                  >
                    CANCELLED/RETURN SHIPMENTS
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5  text-left text-sm lg:text-base xl:text-lg font-semibold text-gray-900"
                  >
                    CLIENTS
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5  text-left text-sm lg:text-base xl:text-lg font-semibold text-gray-900"
                  >
                    Destinations
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {stationStats.map((station, index) => (
                  <tr key={index} className="divide-x">
                    <td className="whitespace-nowrap py-2 lg:py-4 pl-4 pr-3 text-sm lg:text-base xl:text-lg font-medium text-gray-900 sm:pl-0">
                      {station?.station}
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 lg:py-4 text-sm lg:text-base xl:text-lg text-gray-600">
                      {station?.successfulShipments}
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 lg:py-4 text-sm lg:text-base xl:text-lg text-gray-600">
                      {station?.cancelledReturnShipments}
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 lg:py-4 text-sm lg:text-base xl:text-lg text-gray-600">
                      {station?.clients}
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 lg:py-4 text-sm lg:text-base xl:text-lg text-gray-600">
                      {station?.destinations}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StationStats;
