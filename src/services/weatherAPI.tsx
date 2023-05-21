import axios from "axios";

const API_KEY = process.env.REACT_APP_WEATHER_APIKEY;

export const getWeatherByCoordinates = async (latitude: number, longitude: number) => {
    try {
        const response = await axios.get(
            `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${latitude},${longitude}`
        );
        return response.data;
    } catch (error) {
        throw new Error("Failed to fetch weather data.");
    }
};
