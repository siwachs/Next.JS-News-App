type Props = { params: { category: Category } };
//it is the wild card we extract from /news/[category] if [id] then we have to extract that...

import fetchNews from "../../../lib/fetchNews";
import NewsList from "../../Components/NewsList";

// import { categories } from "../../../constants";

const NewsCategory = async ({ params: { category } }: Props) => {
  const news: NewsResponse = await fetchNews(category);

  return (
    <div>
      <h1 className="headerTitle">{category}</h1>
      <NewsList news={news} />
    </div>
  );
};

export default NewsCategory;

// export async function generateStaticParams() {
//   return categories.map((category) => ({
//     category: category,
//   }));
// }

//1)It pre-built pages and cached them using revalidation...
//2)localhost:3000/news/[category]
//3)Since we using ISR
