type NewsData = {
  author: string | null;
  category: string;
  country: string;
  description: string;
  image: string;
  language: string;
  published_at: DateTime;
  source: string;
  title: string;
  url: string;
};

type Pagination = {
  count: Int;
  limit: Int;
  offset: Int;
  total: Int;
};

type NewsResponse = {
  pagination?: Pagination | null;
  data: NewsData[];
  message?: string | null;
};

type Category =
  | "general"
  | "business"
  | "entertainment"
  | "health"
  | "science"
  | "sports"
  | "technology";
