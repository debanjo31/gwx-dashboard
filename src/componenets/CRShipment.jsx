import { useEffect, useState } from "react";
import jsonData from "../json/data.json";

const CRShipment = () => {
  const [data, setData] = useState([]);
  const [crshipment, setCRShipment] = useState([]);
  const [sort, setSort] = useState("destination"); // [destination, station]
  const [numberDisplay, setNumberDisplay] = useState(5);
  useEffect(() => {
    setData(jsonData.logisticsData);
  }, []);
  // filter by destination or station and count the number of cancelled/returned shipments
  useEffect(() => {
    const crShipment = data.filter((item) => {
      //if cancelDelivery is true, then it is a cancelled/returned shipment, returnDelivery is true then it is a returned shipment
      return item.cancelDelivery === true || item.returnDelivery === true;
    });

    if (sort === "destination") {
      const destinations = crShipment.map((item) => item.destination);
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
      setCRShipment(sortedDestinations.slice(0, numberDisplay));
    } else {
      const stations = crShipment.map((item) => item.stationName);
      const uniqueStations = [...new Set(stations)];
      const stationCount = uniqueStations.map((station) => {
        return {
          station: station,
          count: stations.filter((item) => item === station).length,
        };
      });
      const sortedStations = stationCount.sort((a, b) => b.count - a.count);
      setCRShipment(sortedStations.slice(0, numberDisplay));
    }
  }, [data, numberDisplay, sort]);
  console.log(crshipment);
  return (
    <div>
      <h1 className="text-2xl text-[#F39C12]">CANCELLED/RETURN SHIPMENT</h1>
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
                    CANCELLED/RETURN SHIPMENTS
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {crshipment.map((data, index) => (
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
      {numberDisplay <= crshipment.length && (
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

export default CRShipment;
