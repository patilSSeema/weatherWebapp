import React from "react";
import useForcastData from "./hooks/useForecast";
import { optionType } from "../Context/types";
import { useNavigate } from "react-router";

const SearchInput: React.FC = () => {
  const { term, onInputChange, onSubmit, options, oNSelectOption } =
    useForcastData();
  const navigate = useNavigate();

  const handleSearch = () => {
    onSubmit();
    navigate(`/weatherdata/${term}`);
  };

  return (
    <section className="w-full md:w-auto mt-1 relative">
      <div className="flex flex-col md:flex-row relative">
        <input
          type="text"
          value={term}
          onChange={onInputChange}
          placeholder="Enter city name"
          className="border border-gray-300 rounded-l px-3 py-2 focus:outline-none focus:border-blue-500 md:w-auto"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded-r mt-2 md:mt-0 md:ml-2 text-sm md:text-base"
        >
          Search
        </button>
      </div>
      {options.length > 0 && (
        <ul className="absolute top-full bg-white text-black shadow-md w-full md:w-max text-left p-3">
          {options.map((option: optionType, index: number) => (
            <li key={index} className="text-sm">
              <button
                className="w-full text-left cursor-pointer"
                onClick={() => oNSelectOption(option)}
              >
                {option.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default SearchInput;
