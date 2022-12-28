type Props = { searchParams?: { keyword: string } };

import fetchNews from "../../lib/fetchNews";
import NewsList from "../Components/NewsList";

const SearchPage = async ({ searchParams }: Props) => {
  const news: NewsResponse = await fetchNews(
    "general",
    searchParams?.keyword,
    true
  );

  return (
    <div>
      <h1 className="headerTitle">
        Search Results for: {searchParams?.keyword}
      </h1>
      <NewsList news={news} />
    </div>
  );
};

export default SearchPage;
