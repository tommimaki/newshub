import React from 'react';
import { NewsItem } from '../types/types';
import { Link } from 'react-router-dom';

type Props = {
    newsItem: NewsItem;
};

const SmallNews: React.FC<Props> = ({ newsItem }) => {
    return (
        <div className="mx-auto px-2 py-1 max-w-sm my-2">
            <Link
                to={`/article/${encodeURIComponent(newsItem.title)}`}
                state={{ article: newsItem }}
            >
                <div className="bg-white shadow-xl rounded-lg mb-1 tracking-wide flex items-center">
                    {newsItem.urlToImage && (
                        <div className="flex-none w-28 h-28 mr-1">
                            <img src={newsItem.urlToImage} alt={newsItem.title} className="object-cover w-full h-full rounded-md" />
                        </div>
                    )}
                    <div className="px-4 py-2">
                        <h2 className="font-bold sm:text-lg text-gray-800 tracking-normal ">{newsItem.title}</h2>
                        <div className="author flex items-center mt-2">
                            <div>
                                <h2 className="text-sm tracking-tighter text-gray-900">
                                    <span>By {newsItem.author}</span>
                                    <span className="text-gray-600"> | {newsItem.source?.name}</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </Link >
        </div>
    );
};

export default SmallNews;
