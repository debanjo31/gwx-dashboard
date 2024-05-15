import { useEffect, useState } from "react";
import jsonData from "../json/data.json";

const TopDestination = () => {
  const [data, setData] = useState([]);
  const [topDestinations, setTopDestinations] = useState([]);
  const [numberDisplay, setNumberDisplay] = useState(5);
  useEffect(() => {
    setData(jsonData.logisticsData);
  }, []);
  //filter out the top destinations and how many times they have been visited and store them in topDestinations according to figure
  useEffect(() => {
    const destinations = data.map((item) => item.destination);
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
    setTopDestinations(sortedDestinations.slice(0, numberDisplay));
  }, [data, numberDisplay]);

  console.log(topDestinations);
  console.log(numberDisplay);
  return (
    <div>
      <h1 className="text-2xl text-[#F39C12]">TOP DESTINATIONS</h1>
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
                    TOP DESTINATIONS
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5  text-left text-sm lg:text-base xl:text-lg font-semibold text-gray-900"
                  >
                    SHIPMENTS
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {topDestinations.map((destination, index) => (
                  <tr key={index} className="divide-x">
                    <td className="whitespace-nowrap py-2 lg:py-4 pl-4 pr-3 text-sm lg:text-base xl:text-lg font-medium text-gray-900 sm:pl-0">
                      {destination?.destination}
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 lg:py-4 text-sm lg:text-base xl:text-lg text-gray-600">
                      {destination?.count}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {numberDisplay <= topDestinations.length && (
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

export default TopDestination;
