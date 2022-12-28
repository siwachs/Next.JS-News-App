type Props = { article: NewsData };

import LiveTimestamp from "./LiveTimestamp";
import ReadMoreButton from "./ReadMoreButton";

const Article = ({ article }: Props) => {
  return (
    <article className="bg-slate-200 dark:bg-slate-800 flex flex-col shadow-lg rounded-lg hover:scale-105 hover:shadow-xl hover:bg-slate-200 transition-all duration-200 ease-out dark:shadow-gray-700">
      <img
        src={article.image ? article.image : "/no-image.jpeg"}
        alt={article.title}
        className="h-56 w-full object-cover rounded-t-lg shadow-md"
      />

      <div className="flex flex-1 flex-col">
        <div className="flex flex-1 flex-col p-5">
          <h2 className="font-serif font-bold line-clamp-3 sm:text-lg">
            {article.title}
          </h2>

          <section className="mt-2 flex-1">
            <p className="text-xs line-clamp-6 sm:text-sm">
              {article.description}
            </p>
          </section>

          <footer className="text-xs sm:text-sm flex pt-5 italic text-gray-400 items-center font-bold">
            <p className="text-left mr-auto">{article.source}</p>
            <p className="text-right ml-auto">
              <LiveTimestamp time={article.published_at} />
            </p>
          </footer>
        </div>

        <ReadMoreButton article={article} />
      </div>
    </article>
  );
};

export default Article;
