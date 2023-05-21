import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import { NewsItem } from "../types";

import { getNews } from "../services/newsAPI";

const HomePage: React.FC = () => {
    const [news, setNews] = useState<NewsItem[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setIsLoading(true);
        getNews()
            .then((response) => {
                setNews(response);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Latest News</h1>
            {news.map((newsItem) => (
                <NewsCard key={newsItem.title} newsItem={newsItem} />
            ))}
        </div>
    );
};

export default HomePage;
