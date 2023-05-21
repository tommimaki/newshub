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
