

export type WeatherData = {
  name: string,
  country: string,
  sunrise: number
  sunset: number,
  list: [
    {
      dt: number,
      main: {
        feels_like: number,
        humidity: number,
        pressure: number,
        temp: number,
        temp_max: number,
        temp_min: number
      },
      weather: [{
        main: string,
        description: string,
        icon: string
      }]
      , visibility: number,
      wind: { speed: number, deg: number, gust: number }
      ,
      clouds: { all: number },
      pop: number,
    }
  ]

  weather: {},

}
export type optionType = {
  name: string,
  lat: number,
  lon: number
}

export type CityData = {
  geoname_id: string;
  name: string;
  cou_name_en: string;
  timezone: string;
  country_code: string;
}
