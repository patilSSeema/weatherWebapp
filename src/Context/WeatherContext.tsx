import { ChangeEvent, createContext, useContext } from "react";
import { WeatherData, optionType } from "./types";

export interface WeatherContextType {
  term: string; // Add term property here
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  oNSelectOption: (option: optionType) => void;
  city: optionType | null;
  options: optionType[];
  onSubmit: () => void;
  searchData: WeatherData | null;
}

export const WeatherContext = createContext<WeatherContextType | null>(null);

export const useWeather = () => {
  const context = useContext(WeatherContext);
  console.log(context);
  if (!context) {
    throw new Error("useWeather must be used within a WeatherProvider");
  }
  return context;
};
