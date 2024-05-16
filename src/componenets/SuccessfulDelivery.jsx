import { useEffect, useState } from "react";
import jsonData from "../json/data.json";
import LineChart from "../chart/Line";

const SuccessfulDelivery = () => {
  const [data, setData] = useState([]);
  const [shipment, setShipment] = useState([]);
  const [sort, setSort] = useState("destination"); // [destination, station]
  const [numberDisplay, setNumberDisplay] = useState(5);
  const [chartData, setChartData] = useState({});
  useEffect(() => {
    setData(jsonData.logisticsData);
  }, []);
  useEffect(() => {
    const shipment = data.filter((item) => {
      //if cancelDelivery is true, then it is a cancelled/returned shipment, returnDelivery is true then it is a returned shipment
      return item.status === "successful";
    });

    if (sort === "destination") {
      const destinations = shipment.map((item) => item.destination);
      const uniqueDestinations = [...new Set(destinations)];
      const destinationCount = uniqueDestinations.map((destination) => {
        return {
          destination: destination,
          count: destinations.filter((item) => item === destination).length,
        };
      });
      const sortedDestinations = destinationCount.sort(
        (a, b) => b.count - a.count
      );
      setShipment(sortedDestinations.slice(0, numberDisplay));
    } else {
      const stations = shipment.map((item) => item.station);
      const uniqueStations = [...new Set(stations)];
      const stationCount = uniqueStations.map((station) => {
        return {
          station: station,
          count: stations.filter((item) => item === station).length,
        };
      });
      const sortedStations = stationCount.sort((a, b) => b.count - a.count);
      setShipment(sortedStations.slice(0, numberDisplay));
    }
  }, [data, numberDisplay, sort]);

  useEffect(() => {
    setChartData({
      labels: shipment?.map((data) =>
        sort === "destination" ? data.destination : data.station
      ),
      datasets: [
        {
          label: sort === "destination" ? "Destination" : "Station",
          data: shipment?.map((data) => data.count),
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    });
  }, [shipment, sort]);

  console.log(shipment);
  return (
    <div>
      <h1 className="text-2xl text-[#F39C12]">SUCCESSFUL DELIVERY</h1>
      {shipment.length > 0 && <LineChart chartData={chartData} />}
      <div className="flex gap-2 mt-4">
        <p>Sort by:</p>
        <select
          name="dropdown"
          id="dropdown"
          className="mt-[0.5px]"
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="destination">Destination</option>
          <option value="station">Station</option>
        </select>
      </div>
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
                    {sort === "destination" ? "DESTINATION" : "STATION"}
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5  text-left text-sm lg:text-base xl:text-lg font-semibold text-gray-900"
                  >
                    SUCCESSFUL DELIVERY
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {shipment.map((data, index) => (
                  <tr key={index} className="divide-x">
                    <td className="whitespace-nowrap py-2 lg:py-4 pl-4 pr-3 text-sm lg:text-base xl:text-lg font-medium text-gray-900 sm:pl-0">
                      {sort === "destination"
                        ? data?.destination
                        : data?.station}
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 lg:py-4 text-sm lg:text-base xl:text-lg text-gray-600">
                      {data?.count}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {numberDisplay <= shipment.length && (
        <button
          onClick={() => setNumberDisplay(numberDisplay + 5)}
          className="mt-4 bg-[#F39C12] text-white px-2 py-1 rounded-lg"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default SuccessfulDelivery;
