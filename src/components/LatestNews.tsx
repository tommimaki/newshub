import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import { NewsItem } from "../types/types";
import { getLatestNews } from "../services/newsAPI";

const LatestNews: React.FC = () => {
    const [news, setNews] = useState<NewsItem[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getLatestNews()
            .then(newsResponse => {
                console.log('latest newsResponse', newsResponse)
                setNews(newsResponse);
            })
            .catch(err => {
                setError(err.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <div>Loading latest news...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    console.log(news)
    return (
        <div className="mr-5">
            <h2 className="text-lg mt-4 text-center font-bold sm:text-3xl">Latest News</h2>
            {news.map((newsItem) => (
                <NewsCard key={newsItem.title} newsItem={newsItem} />
            ))}
        </div>
    );
};

export default LatestNews;
