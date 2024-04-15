import axios from "axios";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";

import { CityData } from "../Context/types";

const AllCities: React.FC = () => {
  const [cities, setCities] = useState<CityData[]>([]);

  const pageLimit = 10;

  const pageNo = Math.ceil(cities.length / pageLimit) + 1;
  const FetchData = async () => {
    try {
      const response = await axios.get(
        `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?rows=${pageLimit}&start=${
          (pageNo - 1) * pageLimit
        }`
      );
      const mergedData = [...cities, ...response.data.results];
      setCities(mergedData);
      console.log(pageNo);
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    FetchData();
  }, []);

  const fetchMoreData = () => {
    FetchData();
  };
  console.log(cities);
  return (
    <>
      <div className="container mx-auto">
        <table className="table-auto  bg-slate-400 text-white">
          <InfiniteScroll
            dataLength={cities.length}
            next={fetchMoreData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
          >
            <thead>
              <tr className="border">
                <th className="p-4">City Name</th>
                <th className="p-4">Country</th>
                <th className="p-4">Time Zone</th>
              </tr>
            </thead>
            <tbody>
              {cities.map((item, index) => {
                return (
                  <tr className="border text-decoration-none" key={index}>
                    <Link
                      className="text-white"
                      to={`/weatherdata/${item.name}`}
                    >
                      <td className="p-4">{item.name}</td>
                    </Link>
                    <td className="p-4">{item.cou_name_en}</td>
                    <td className="p-4">{item.timezone}</td>
                  </tr>
                );
              })}
            </tbody>
          </InfiniteScroll>
        </table>
      </div>
    </>
  );
};

export default AllCities;
