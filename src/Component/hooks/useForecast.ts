import axios from "axios";
import  { ChangeEvent, useEffect, useState } from "react";
import { optionType, WeatherData } from "../../Context/types";



const useForcastData = () => {
    const [term, setTerm] = useState<string>("");
    const [options, setOptions] = useState<[]>([]);
    const [city, setCity] = useState<optionType | null>(null);

    const [searchData, setSearchData] = useState<WeatherData | null>(null);
    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim();
        setTerm(value);
        if (value === "") return;
        FetchOptionData(value);
    };

    const FetchOptionData = async (value: string) => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=2a3718a07ab88790135532834b6a9c02`
            );

            setOptions(response.data);
            console.log(options);
        } catch (error) {
            alert(error);
        }
    };
    const onSubmit = () => {
        if (!city) return;
        getSearchData(city);


    };
    const getSearchData = async (city: optionType) => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&cnt=10&appid=2a3718a07ab88790135532834b6a9c02`
            );
            console.log(response.data);
            setSearchData(response.data);
        } catch (error) {
            alert(error);
        }
    };

    const oNSelectOption = (option: optionType) => {
        setCity(option);
    };
    console.log(term);
    useEffect(() => {
        if (city) {
            setTerm(city.name);
            setOptions([]);
        }
    }, [city]);

    return {
        term,
        onInputChange,
        oNSelectOption,
        city,
        options,
        onSubmit, searchData
    }
}

export default useForcastData;