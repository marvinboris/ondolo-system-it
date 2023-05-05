import React from "react";

interface HomeArticlesSectionProps {
  articles: React.ReactNode;
}

export default function HomeArticlesSection({
  articles,
}: HomeArticlesSectionProps) {
  return (
    <section className="pb-[120px] pt-[60px]">
      <div className="px-[15px] text-center">
        <h2 className="section-title">{`Nos derniers articles`}</h2>

        <div className="mt-[60px] flex flex-wrap items-stretch justify-center gap-[73px]">
          {articles}
        </div>
      </div>
    </section>
  );
}
