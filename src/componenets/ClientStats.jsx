import { useEffect, useState } from "react";
import jsonData from "../json/data.json";

const ClientStats = () => {
  const [data, setData] = useState([]);
  const [clients, setClients] = useState([]);
  useEffect(() => {
    setData(jsonData.logisticsData);
  }, []);
  useEffect(() => {
    const clients = data.map((item) => item.clientName);
    const uniqueClients = [...new Set(clients)];
    const clientCount = uniqueClients.map((client) => {
      const clientData = data.filter((item) => item.clientName === client);
      return {
        client: client,
        successfulShipments: clientData.filter(
          (item) => item.successfulDelivery === true
        ).length,
        cancelledReturnShipments: clientData.filter(
          (item) => item.cancelDelivery === true || item.returnDelivery === true
        ).length,
        clients: [...new Set(clientData.map((item) => item.stationName))]
          .length,
        destinations: [...new Set(clientData.map((item) => item.destination))]
          .length,
      };
    });
    setClients(clientCount);
  }, [data]);
  return (
    <div>
      <h1 className="text-2xl text-[#F39C12]">CLIENT STATISTICS</h1>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr className="divide-x">
                  <th
                    scope="col"
                    className="whitespace-nowrap py-3.5 pl-3 pr-2 text-left text-sm lg:text-base font-semibold text-gray-900 sm:pl-0"
                  >
                    CLIENT
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-1 py-3.5 text-left text-sm lg:text-base font-semibold text-gray-900"
                  >
                    SUCCESSFUL SHIPMENTS
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-1 py-3.5  text-left text-sm lg:text-base  font-semibold text-gray-900"
                  >
                    CANCELLED/RETURN SHIPMENTS
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-1 py-3.5  text-left text-sm lg:text-base  font-semibold text-gray-900"
                  >
                    STATIONS USED
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-1 py-3.5  text-left text-sm lg:text-base  font-semibold text-gray-900"
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
