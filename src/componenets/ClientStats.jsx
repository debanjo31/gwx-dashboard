import { useEffect, useState } from "react";
import jsonData from "../json/data.json";
import LineChart from "../chart/Line";

const ClientStats = () => {
  const [data, setData] = useState([]);
  const [clients, setClients] = useState([]);
  const [chartData, setChartData] = useState({});
  useEffect(() => {
    setData(jsonData.logisticsData);
  }, []);
  useEffect(() => {
    const clients = data.map((item) => item.client);
    const uniqueClients = [...new Set(clients)];
    const clientCount = uniqueClients.map((client) => {
      const clientData = data.filter((item) => item.client === client);
      return {
        client: client,
        successfulShipments: clientData.filter(
          (item) => item.status === "successful"
        ).length,
        cancelledReturnShipments: clientData.filter(
          (item) => item.status === "cancel" || item.status === "return"
        ).length,
        clients: [...new Set(clientData.map((item) => item.station))].length,
        destinations: [...new Set(clientData.map((item) => item.destination))]
          .length,
      };
    });
    setClients(clientCount);
  }, [data]);

  useEffect(() => {
    setChartData({
      labels: clients?.map((data) => data.client),
      datasets: [
        {
          label: "Successful Shipments",
          data: clients?.map((data) => data.successfulShipments),
          backgroundColor: ["rgba(75,192,192,1)"],
          borderColor: "black",
          borderWidth: 2,
        },
        {
          label: "Cancelled/Return Shipments",
          data: clients?.map((data) => data.cancelledReturnShipments),
          backgroundColor: ["#ecf0f1"],
          borderColor: "red",
          borderWidth: 2,
        },
        {
          label: "Station Used",
          data: clients?.map((data) => data.clients),
          backgroundColor: ["#50AF95"],
          borderColor: "green",
          borderWidth: 2,
        },
        {
          label: "Destinations",
          data: clients?.map((data) => data.destinations),
          backgroundColor: ["#f3ba2f"],
          borderColor: "yellow",
          borderWidth: 2,
        },
      ],
    });
  }, [clients]);
  console.log(clients);
  return (
    <div>
      <h1 className="text-2xl text-[#F39C12]">CLIENT STATISTICS</h1>
      {clients.length > 0 && <LineChart chartData={chartData} />}
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr className="divide-x">
                  <th
                    scope="col"
                    className="whitespace-nowrap py-3.5 pl-2 pr-2 text-left text-sm lg:text-base font-semibold text-gray-900"
                  >
                    Client
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-1 py-3.5 text-left text-sm lg:text-base font-semibold text-gray-900"
                  >
                    Successful Shipment
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-1 py-3.5 text-left text-sm lg:text-base font-semibold text-gray-900"
                  >
                    Cancelled/Return Shipment
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-1 py-3.5 text-left text-sm lg:text-base font-semibold text-gray-900"
                  >
                    Station Used
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-1 py-3.5 text-left text-sm lg:text-base font-semibold text-gray-900"
                  >
                    Destinations
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {clients.map((client, index) => (
                  <tr key={index} className="divide-x">
                    <td className="whitespace-nowrap py-2 lg:py-4 pl-3 pr-2 text-sm lg:text-base font-medium text-gray-900 sm:pl-0">
                      {client?.client}
                    </td>
                    <td className="whitespace-nowrap px-1 py-2 lg:py-4 text-sm lg:text-base  text-gray-600">
                      {client?.successfulShipments}
                    </td>
                    <td className="whitespace-nowrap px-1 py-2 lg:py-4 text-sm lg:text-base  text-gray-600">
                      {client?.cancelledReturnShipments}
                    </td>
                    <td className="whitespace-nowrap px-1 py-2 lg:py-4 text-sm lg:text-base  text-gray-600">
                      {client?.clients}
                    </td>
                    <td className="whitespace-nowrap px-1 py-2 lg:py-4 text-sm lg:text-base  text-gray-600">
                      {client?.destinations}
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

export default ClientStats;
