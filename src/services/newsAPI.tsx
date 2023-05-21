import { NewsItem } from "../types/types";

export const getNews = async (): Promise<NewsItem[]> => {
  const storageKey = 'news_data';
  const expiryMinutes = 10;

  try {
    const cachedData = localStorage.getItem(storageKey);

    if (cachedData !== null) {
      const { data, timestamp } = JSON.parse(cachedData);
      // console.log('Cached data:', data, 'Timestamp:', timestamp);

      if (data && timestamp) {
        // Checkin if data is within expiry time
        const isExpired = (Date.now() - timestamp) > expiryMinutes * 60 * 1000;

        if (!isExpired) {
          return data;
        }
      }
    }
  } catch (error) {
    console.error('Failed to get data from local storage:', error);
  }

  const apiKey = process.env.REACT_APP_NEWSAPI_APIKEY;
  const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);

  if (!response.ok) {
    console.error('Bad response from news API:', response);
    throw new Error("News API request failed");
  }

  const data = await response.json();
  console.log('Fetched data:', data);

  try {
    // Storing data with timestamp
    localStorage.setItem(storageKey, JSON.stringify({ data: data.articles, timestamp: Date.now() }));
  } catch (error) {
    console.error('Failed to save data to local storage:', error);
  }

  if (!Array.isArray(data.articles)) {
    throw new Error("Invalid data from API");
  }

  return data.articles as NewsItem[];
};

export const getLatestNews = async (): Promise<NewsItem[]> => {
  const storageKey = 'latest_news_data';
  const expiryMinutes = 10;

  try {
    const cachedData = localStorage.getItem(storageKey);

    if (cachedData !== null) {
      const { data, timestamp } = JSON.parse(cachedData);

      // Check if data is still within expiry time
      const isExpired = (Date.now() - timestamp) > expiryMinutes * 60 * 1000;

      if (!isExpired) {
        return data;
      }
    }
  } catch (error) {
    console.error('Failed to get data from local storage:', error);
  }

  const apiKey = process.env.REACT_APP_NEWSAPI_APIKEY;


  // setting timestamp for 5 hours ago
  // const fiveHoursAgo = new Date(Date.now() - 5 * 60 * 60 * 1000);
  // const formattedDate = fiveHoursAgo.toISOString().split('T')[0];

  const url = `https://newsapi.org/v2/everything?domains=bbc.co.uk,cnn.com,nytimes.com,techcrunch.com,thenextweb.com&apiKey=${apiKey}`;
  console.log(url, 'url')

  const response = await fetch(url);

  if (!response.ok) {
    console.error('Bad response from news API:', response);
    throw new Error("News API request failed");
  }

  const data = await response.json();

  if (!Array.isArray(data.articles)) {
    throw new Error("Invalid data from API");
  }

  try {
    // Store data with timestamp
    localStorage.setItem(storageKey, JSON.stringify({ data: data.articles, timestamp: Date.now() }));
  } catch (error) {
    console.error('Failed to save data to local storage:', error);
  }

  return data.articles as NewsItem[];
};
