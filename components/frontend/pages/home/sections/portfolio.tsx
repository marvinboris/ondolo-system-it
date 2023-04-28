import Link from "next/link";
import React from "react";

interface HomePortfolioSectionProps {
    portfolio: React.ReactNode;
}

export default function HomePortfolioSection({
    portfolio
}: HomePortfolioSectionProps) {
  return (
    <section className="pb-20 pt-[60px]">
      <div className="container text-center">
        <h2 className="section-title">{`Notre portfolio`}</h2>

        <div className="mx-auto mt-[60px] grid grid-cols-1 md:grid-cols-3 gap-x-[15px] gap-y-[30px] container">
          {portfolio}
        </div>

        <p className="mt-[50px]">
          <Link
            href="/realisations"
            className="rounded-none bg-primary-900 px-10 py-2.5 text-sm text-white"
          >
            En Savoir Plus
          </Link>
        </p>
      </div>
    </section>
  );
}
