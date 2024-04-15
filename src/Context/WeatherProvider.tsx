import React from "react";

import { WeatherContext } from "./WeatherContext";
import useForcastData from "../Component/hooks/useForecast";
interface WeatherProviderProps {
  children: React.ReactNode; // Properly typing the children prop
  city?: string;
}

const WeatherProvider: React.FC<WeatherProviderProps> = ({ children }) => {
  const {
    term,
    onInputChange,
    oNSelectOption,
    city,
    options,
    onSubmit,
    searchData,
  } = useForcastData();

  console.log(term);
  return (
    <WeatherContext.Provider
      value={{
        term,
        onInputChange,
        oNSelectOption,
        city,
        options,
        onSubmit,
        searchData,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
