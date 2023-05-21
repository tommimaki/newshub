import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import WeatherWidget from "../components/WeatherWidget";
import { NewsItem } from "../types/types";
import { getNews } from "../services/newsAPI";
import { getWeatherByCoordinates } from "../services/weatherAPI";
import { getCurrentCoordinates } from "../services/userLocation";
import LatestNews from "../components/LatestNews";

const HomePage: React.FC = () => {
    const [news, setNews] = useState<NewsItem[]>([]);
    const [weather, setWeather] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const defaultCoordinates = { // Default coordinates if user blocks location
        latitude: 60.192059,
        longitude: 24.945831
    };

    useEffect(() => {
        getNews()
            .then(newsResponse => {
                setNews(newsResponse);
            })
            .catch(err => {
                console.error('Error fetching news:', err);
                setError(err.message);
            })
            .finally(() => {
                setIsLoading(false);
            });


        getCurrentCoordinates()
            .then(coords => {
                const { latitude, longitude } = coords;
                return getWeatherByCoordinates(latitude, longitude);
            })
            .catch((error) => {
                console.log(error.message);
                // Use default coordinates if user's location is not available
                return getWeatherByCoordinates(defaultCoordinates.latitude, defaultCoordinates.longitude);
            })
            .then(weatherResponse => {
                setWeather(weatherResponse);
            })
            .catch(err => {
                console.error(err.message);
            });

    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className=" flex flex-col-reverse sm:grid grid-cols-3 gap-4">
            <div className="col-span-2">
                <h1 className="text-gray-800 my-4 text-center font-bold text-xl sm:text-5xl">Breaking News</h1>
                {news === null ? (
                    <p>Loading news...</p>
                ) : (
                    news.map((newsItem) => (
                        <NewsCard key={newsItem.title} newsItem={newsItem} />
                    ))
                )}
            </div>
            <div className="col-span-1">
                <WeatherWidget weather={weather} />
                <LatestNews />
            </div>
        </div>
    );
};

export default HomePage;
