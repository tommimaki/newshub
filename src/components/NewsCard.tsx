import React from 'react';
import { NewsItem } from '../types';

type Props = {
    newsItem: NewsItem;
};

const NewsCard: React.FC<Props> = ({ newsItem }) => {
    return (
        <div className="news-card">
            <h2>{newsItem.title}</h2>
            {newsItem.urlToImage && <img src={newsItem.urlToImage} alt={newsItem.title} />}
            <p>{newsItem.description}</p>
            <a href={newsItem.url}>Read more</a>
        </div>
    );
};

export default NewsCard;
