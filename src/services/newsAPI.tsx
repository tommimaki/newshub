import { NewsItem } from "../types/types";

// hardcoded news for styling, later ill do the actual fetching
const newsItem: NewsItem = {
  source: {
    id: null,
    name: "Android Central",
  },
  author: "techkritiko@gmail.com (Jay Bonggolto)",
  title:
    "The Huawei Watch 4 has an unusual health feature the Apple Watch has yet to pick up",
  description:
    "Huawei claims its new smartwatch, the Huawei Watch 4, is equipped with an unprecedented wearable feature for tracking blood sugar levels.",
  url: "https://www.androidcentral.com/wearables/huawei-watch-4-high-blood-sugar-tracking-claims",
  urlToImage:
    "https://cdn.mos.cms.futurecdn.net/kX562SL4RmGXZG2EArdVLi-1200-80.jpg",
  publishedAt: "2023-05-21T10:56:00Z",
  content:
    "<ul><li>A Huawei executive claims the newly launched Watch 4 has a blood glucose monitoring feature.</li><li>Huawei says the smartwatch will alert the wearer when it detects irregular blood sugar lev… [+2799 chars]",
};

export const getNews = (): Promise<NewsItem[]> => {
  return new Promise((resolve) => {
    resolve(
      Array(10)
        .fill(null)
        .map(() => ({ ...newsItem }))
    );
  });
};
