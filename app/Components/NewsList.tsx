import Article from "./Article";

type Props = { news: NewsResponse };

const NewsList = ({ news }: Props) => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10 max-w-7xl mx-auto">
      {news.data?.map((article, index) => (
        <Article article={article} key={index} />
      ))}
    </main>
  );
};

export default NewsList;
