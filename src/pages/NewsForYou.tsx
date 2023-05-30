import React, { useState, useEffect } from 'react';
import { getCustomNews } from '../services/newsAPI';
import { GreenTick } from '../assets/icons';

const NewsForYou: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchTerms, setSearchTerms] = useState<string[]>([]);
    const [articles, setArticles] = useState<any[]>([]); // Array to hold articles
    const [startDate, setStartDate] = useState<string>(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]); // Start date for search (default is a week ago)
    const [endDate, setEndDate] = useState<string>(new Date().toISOString().split('T')[0]); // End date for search (default is today)
    const [language, setLanguage] = useState('en'); // Language for search (default is English)
    const [showTick, setShowTick] = useState(false)
    const [buttonClicked, setButtonClicked] = useState(false);


    const [firstVisit, setFirstVisit] = useState(true);
    const [defaultTopics, setDefaultTopics] = useState(['Tech', 'Politics', 'War', 'Science', 'Sports', 'Finance', 'Health', 'Entertainment']);


    const languages = ['ar', 'de', 'en', 'es', 'fr', 'he', 'it', 'nl', 'no', 'pt', 'ru', 'sv', 'ud', 'zh'];

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const fetchedArticles = await getCustomNews(searchTerms.join(','), startDate, endDate, language);
                setArticles(fetchedArticles);
            } catch (error) {
                console.error(error);
            }
        };

        if (searchTerms.length > 0) {
            fetchArticles();
        }
    }, [searchTerms, startDate, endDate, language]);

    const handleAddSearchTerm = () => {
        if (searchTerm) {
            setSearchTerms(prevSearchTerms => [...prevSearchTerms, searchTerm]);
            setSearchTerm('');
            setShowTick(true)
            setTimeout(() =>
                setShowTick(false), 3000
            )
        }
    };


    useEffect(() => {
        if (buttonClicked) {
            setTimeout(() => {
                setButtonClicked(false);
            }, 2000); // hide after 2 seconds
        }
    }, [buttonClicked]);


    console.log(searchTerms)
    // console.log(localStorage.token)
    // In your render method, before returning your main component:
    if (firstVisit) {
        return (
            <div>
                <h1 className='text-center sm:text-4xl mt-4'>Welcome! What do you want to read about? </h1>
                <div className='mt-4 flex flex-wrap gap-2 sm:pb-12 justify-center relative'>
                    {defaultTopics.map((topic, index) => (
                        <button className='btn-orange' key={index} onClick={() => {
                            setSearchTerms(prevSearchTerms => [...prevSearchTerms, topic]);
                            setButtonClicked(true);
                        }}>{topic}</button>
                    ))}
                    <div className="absolute left-0 right-0 bottom-0 mx-auto transform -translate-y-1/2 pointer-events-none">
                        {buttonClicked && <GreenTick />}
                    </div>

                </div>



                <div className='flex w-full justify-center'>
                    <div className='flex justify-center mt-4 max-w-lg mb-10 h-10 relative px-20 mx-20  '>
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                            {showTick && <GreenTick />}
                        </div>
                        <input
                            type="text"
                            className=' rounded-lg border-2 p-3'
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            placeholder="Enter your own terms..."
                        />
                        <button className="btn btn-primary ml-2" onClick={handleAddSearchTerm}>Add</button>
                    </div>
                </div>
                <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="block w-full p-2 border rounded"
                >
                    {languages.map((lang) => (
                        <option key={lang} value={lang}>
                            {lang}
                        </option>
                    ))}
                </select>
                <div className='flex justify-center'>

                    <button className="btn btn-primary my-2" onClick={() => setFirstVisit(false)}>Search</button>
                </div>
            </div>
        );
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">News For You</h1>

            <div className="mb-4">
                <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="block w-full p-2 border rounded"
                >
                    {languages.map((lang) => (
                        <option key={lang} value={lang}>
                            {lang}
                        </option>
                    ))}
                </select>
            </div>

            <div className='flex justify-center my-4 h-10'>

                <input
                    type="text"
                    className=' rounded-lg border-2 p-3'
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    placeholder="Enter your own terms..."
                />

                <button className="btn btn-primary ml-2" onClick={handleAddSearchTerm}>Add</button>

            </div>

            <div className="mb-4">
                <input
                    className="block w-full p-2 border rounded"
                    type="date"
                    value={startDate}
                    onChange={e => setStartDate(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <input
                    className="block w-full p-2 border rounded"
                    type="date"
                    value={endDate}
                    onChange={e => setEndDate(e.target.value)}
                />
            </div>

            {articles.map((article, index) => (
                <div key={index} className="mb-4">
                    <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                    <p>{article.description}</p>
                </div>
            ))}
        </div>
    );
};

export default NewsForYou;
