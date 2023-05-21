import React from 'react';
import { WeatherResponse } from '../types/types';

interface WeatherWidgetProps {
    weather: WeatherResponse;
}

const WeatherWidget: React.FC<WeatherWidgetProps> = ({ weather }) => {
    return (
        <div className="rounded-lg mx-4 sm:mt-16 p-4 shadow-lg">
            {weather && weather.current && weather.current.condition ? (
                <>
                    <div className="bg-slate-300 text-gray-700 rounded-lg p-6 flex flex-col lg:flex-row justify-between items-center">
                        <div className="text-center lg:text-left">
                            <h2 className="text-2xl font-bold mb-4">Weather</h2>
                            <h3 className="text-lg sm:text-xl text-gray-800 font-bold mb-2">{weather.location.name}</h3>
                            <div className="hidden md:block">
                                <p className="mb-1">Feels like: {weather.current.feelslike_c}°C</p>
                                <p className="mb-1">Condition: {weather.current.condition.text}</p>
                                <p className="mb-1">Wind: {weather.current.wind_kph} kph, {weather.current.wind_dir}</p>
                                <p className="mb-1">UV: {weather.current.uv}</p>
                                <p className="mb-1">Humidity: {weather.current.humidity}%</p>
                            </div>
                        </div>
                        <div className="mt-4 lg:mt-0">
                            <img src={weather.current.condition.icon} alt={weather.current.condition.text} className="h-12 w-12 lg:h-36 lg:w-36 mb-1" />
                            <p className="text-4xl lg:text-6xl text-gray-700">{weather.current.temp_c}°C</p>
                        </div>
                    </div>
                </>
            ) : (
                <div>
                    <p>No weather data available for your location</p>
                </div>
            )}
        </div>
    );
};

export default WeatherWidget;
