import { type } from "os";

type Source = {
  id: string | null;
  name: string | null;
};

export type NewsItem = {
  source: Source | null;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string;
};

export type UserPreferences = {
  searchTerms: string[];
  startDate: string;
  endDate: string;
  language: string;
};

export type WeatherResponse = {
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
  };
  current: {
    last_updated_epoch: number;
    last_updated: string;
    temp_c: number;
    is_day: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    uv: number;
  };
};
