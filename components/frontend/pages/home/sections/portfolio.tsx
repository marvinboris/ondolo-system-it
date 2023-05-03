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

        <div className="mx-auto mt-[60px] grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-[30px] md:gap-y-[150px] container text-left">
          {portfolio}
        </div>

        <p className="mt-[50px]">
          <Link
            href="/realisations"
            className="rounded-[7px] bg-primary-900 px-10 py-2.5 text-sm text-white"
          >
            En Savoir Plus
          </Link>
        </p>
      </div>
    </section>
  );
}
