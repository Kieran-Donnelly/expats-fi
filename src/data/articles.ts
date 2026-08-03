import articlesJson from './articles.json';

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  readingMinutes: number;
  html: string;
  sourceUrl: string;
};

export const articles = articlesJson as Article[];
export const articleCategories = [...new Set(articles.map((article) => article.category))].sort();
