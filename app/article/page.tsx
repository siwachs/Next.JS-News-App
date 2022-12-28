type Props = {
  searchParams?: NewsData;
};

import { notFound } from "next/navigation";
import LiveTimestamp from "../Components/LiveTimestamp";
import Link from "next/link";

const ArticlePage = ({ searchParams }: Props) => {
  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams
  ) {
    return notFound();
  }

  const article: NewsData = searchParams;

  return (
    <article className="mt-6">
      <section className="flex flex-col lg:flex-row pb-24 px-0 lg:px-10">
        <img
          src={article.image === "null" ? "/no-image.jpeg" : article.image}
          alt={article.title}
          className="h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-contain rounded-lg shadow-md"
        />

        <div className="px-8">
          <Link legacyBehavior href={article.url || ""}>
            <a target="_blank">
              <h1 className="headerTitle hover:underline cursor-pointer px-0 pb-2">
                {article.title}
              </h1>
            </a>
          </Link>

          <div className="flex divide-x-2 space-x-4">
            <h2 className="font-bold">
              By: {article.author !== "null" ? article.author : "Unknown"}
            </h2>
            <h2 className="font-bold pl-4">Source: {article.source}</h2>
            <p className="pl-4">
              <LiveTimestamp
                time={
                  article.published_at === "null" ? "" : article.published_at
                }
              />
            </p>
          </div>

          <p className="pt-4 text-lg">{article.description}</p>
        </div>
      </section>
    </article>
  );
};

export default ArticlePage;
