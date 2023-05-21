import React from 'react';
import { NewsItem } from '../types/types';

type Props = {
    newsItem: NewsItem;
};

const NewsCard: React.FC<Props> = ({ newsItem }) => {
    return (
        <div className="mx-auto px-2 py-1 max-w-4xl my-2">
            <div className="bg-white shadow-xl rounded-lg mb-1 tracking-wide">
                {newsItem.urlToImage && (
                    <div className="md:flex-shrink-0">
                        <img src={newsItem.urlToImage} alt={newsItem.title} className="w-full h-64 rounded-lg rounded-b-none" />
                    </div>
                )}
                <div className="px-4 py-2 mt-2">
                    <h2 className="font-bold text-2xl text-gray-800 tracking-normal">{newsItem.title}</h2>
                    <p className="text-sm text-gray-700 px-2 mr-1">{newsItem.description}</p>
                    <div className="flex items-center justify-between mt-2 mx-6">
                        <a href={newsItem.url} className="text-blue-500 text-xs -ml-3 ">Read more</a>
                    </div>
                    <div className="author flex items-center -ml-3 my-3">
                        <div>
                            <h2 className="text-sm tracking-tighter text-gray-900">
                                <span>By {newsItem.author}</span>
                                <span className="text-gray-600"> | {newsItem.source?.name}</span>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
