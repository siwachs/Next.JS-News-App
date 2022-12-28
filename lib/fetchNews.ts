import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  //Here ! means required.
  const graphQL_Query = gql`
    query MyQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        countries: "in, us, gb, jp, cn"
        sort: "published_desc"
        keywords: $keywords
      ) {
        data {
          author
          category
          country
          description
          image
          source
          published_at
          language
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;

  const res = await fetch(
    "https://oererkenschwick.stepzen.net/api/luminous-dragonfly/__graphql",
    {
      method: "POST",
      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Apikey ${process.env.STEPZEN_API}`,
      },
      body: JSON.stringify({
        query: graphQL_Query,
        variables: {
          access_key: process.env.MEDIASTACK_API,
          categories: category,
          keywords: keywords,
        },
      }),
    }
  );

  const newsResponse = await res.json();
  if (newsResponse.data.myQuery === null) {
    return {
      data: [],
      message: newsResponse.errors[0].message,
    };
  }
  
  const news = sortNewsByImage(newsResponse.data.myQuery);
  return news;
};

export default fetchNews;

//stepzen import curl "http://api.mediastack.com/v1/news?access_key=API_KEY&sources=business,sports"
