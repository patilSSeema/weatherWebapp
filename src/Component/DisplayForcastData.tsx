import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Degree from "./Degree";
import { WeatherData } from "../Context/types";
import Tile from "./Tiles";
import {
  getHumidityValue,
  getWindDirection,
  getVisibilityValue,
  getPop,
} from "../Component/helpers/index";

const DisplayForecastData = () => {
  const { city } = useParams();
  const [forecastData, setForecastData] = useState([]);
  const [today, setToday] = useState<WeatherData | null>(null);

  useEffect(() => {
    const fetchForecastData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=2a3718a07ab88790135532834b6a9c02&units=metric&cnt=10`
        );
        if (response.data && response.data.list) {
          setToday(response.data.list[0]);
          setForecastData(response.data.list);
        } else {
          console.error("Invalid forecast data:", response.data);
          // Handle invalid data case, e.g., show error message or fallback UI
        }
      } catch (error) {
        console.error("Error fetching forecast data:", error);
        // Handle error case, e.g., show error message or fallback UI
      }
    };

    fetchForecastData();
  }, [city]);

  if (!today) {
    return null; // or you can return a loading indicator
  }

  return (
    <div
      style={{
        backgroundImage: `url("./clouds.jpg")`, // Replace 'path/to/your/image.jpg' with the actual path to your image file
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full md:max-w-[90%] md:mx-auto py-4 md:py-4 md:px-10 lg:px-24 bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg">
        <div className="mx-auto md:w-[90%]">
          <section className="text-center bg-gradient-to-b from-blue-200 to-blue-400 py-8">
            <h2 className="text-3xl font-semibold text-white">
              {city} <span className="text-gray-200 font-normal"></span>
            </h2>
            {today && (
              <>
                <h1 className="text-5xl font-bold text-white mt-2">
                  <Degree temp={Math.round(today.main.temp)} />
                </h1>
                <p className="text-lg text-white mb-2">
                  {today.weather[0]?.main} ({today.weather[0]?.description})
                </p>
                <p className="text-lg text-white">
                  H: <Degree temp={Math.ceil(today.main.temp_max)} /> L:{" "}
                  <Degree temp={Math.floor(today.main.temp_min)} />
                </p>
              </>
            )}
          </section>

          <section className="flex overflow-x-auto mt-4 pb-2 mb-5">
            {forecastData.map((forecast, index) => (
              <div
                key={index}
                className="flex flex-col items-center mx-2 bg-gradient-to-br from-blue-200 to-blue-400 text-white rounded-lg shadow-md p-3"
              >
                <p className="text-lg font-semibold">
                  {index === 0
                    ? "Now"
                    : new Date(forecast.dt * 1000).getHours()}
                </p>
                <img
                  alt={`weather-icon-${forecast.weather[0].description}`}
                  src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                  className="h-12 w-12"
                />
                <p className="text-lg font-semibold">{forecast.main.temp}°C</p>
              </div>
            ))}
          </section>

          <section className=" m-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  text-gray-800 justify-center">
            <Tile
              icon="wind"
              title="Wind"
              info={`${Math.round(today.wind.speed)} km/h`}
              description={`${getWindDirection(
                Math.round(today.wind.deg)
              )}, gusts ${today.wind.gust.toFixed(1)} km/h`}
            />
            <Tile
              icon="feels"
              title="Feels like"
              info={<Degree temp={Math.round(today.main.feels_like)} />}
              description={`Feels ${
                Math.round(today.main.feels_like) < Math.round(today.main.temp)
                  ? "colder"
                  : "warmer"
              }`}
            />
            <Tile
              icon="humidity"
              title="Humidity"
              info={`${today.main.humidity} %`}
              description={getHumidityValue(today.main.humidity)}
            />
            <Tile
              icon="pop"
              title="Precipitation"
              info={`${Math.round(today.pop * 100)}%`}
              description={`${getPop(today.pop)}, clouds at ${
                today.clouds.all
              }%`}
            />
            <Tile
              icon="pressure"
              title="Pressure"
              info={`${today.main.pressure} hPa`}
              description={` ${
                Math.round(today.main.pressure) < 1013 ? "Lower" : "Higher"
              } than standard`}
            />
            <Tile
              icon="visibility"
              title="Visibility"
              info={`${(today.visibility / 1000).toFixed()} km`}
              description={getVisibilityValue(today.visibility)}
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default DisplayForecastData;
