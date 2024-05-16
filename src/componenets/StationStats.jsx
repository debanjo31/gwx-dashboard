import { useEffect, useState } from "react";
import jsonData from "../json/data.json";
import LineChart from "../chart/Line";

const StationStats = () => {
  const [data, setData] = useState([]);
  const [stationStats, setStationStats] = useState([]);
  const [chartData, setChartData] = useState({});
  useEffect(() => {
    setData(jsonData.logisticsData);
  }, []);
  useEffect(() => {
    const uniqueStations = [...new Set(data.map((item) => item.station))];
    const stationCount = uniqueStations.map((station) => {
      const stationData = data.filter((item) => item.station === station);
      return {
        station: station,
        successfulShipments: stationData.filter(
          (item) => item.status === "successful"
        ).length,
        cancelledReturnShipments: stationData.filter(
          (item) => item.status === "cancel" || item.status === "retun"
        ).length,
        clients: [...new Set(stationData.map((item) => item.client))].length,
        destinations: [...new Set(stationData.map((item) => item.destination))]
          .length,
      };
    });
    setStationStats(stationCount);
  }, [data]);

  useEffect(() => {
    setChartData({
      labels: stationStats?.map((data) => data.station),
      datasets: [
        {
          label: "Successful Shipments",
          data: stationStats?.map((data) => data.successfulShipments),
          backgroundColor: ["rgba(75,192,192,1)"],
          borderColor: "black",
          borderWidth: 2,
        },
        {
          label: "Cancelled/Return Shipments",
          data: stationStats?.map((data) => data.cancelledReturnShipments),
          backgroundColor: ["#ecf0f1"],
          borderColor: "red",
          borderWidth: 2,
        },
        {
          label: "Clients",
          data: stationStats?.map((data) => data.clients),
          backgroundColor: ["#50AF95"],
          borderColor: "green",
          borderWidth: 2,
        },
        {
          label: "Destinations",
          data: stationStats?.map((data) => data.destinations),
          backgroundColor: ["#f3ba2f"],
          borderColor: "purple",
          borderWidth: 2,
        },
      ],
    });
  }, [stationStats]);
  console.log(stationStats);

  return (
    <div>
      <h1 className="text-2xl text-[#F39C12]">STATIONS STATISTICS</h1>
      {stationStats.length > 0 && <LineChart chartData={chartData} />}
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
