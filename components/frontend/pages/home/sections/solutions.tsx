import Link from "next/link";
import React from "react";

interface HomeSolutionsSectionProps {
  solutions: React.ReactNode;
}

export default function HomeSolutionsSection({
  solutions,
}: HomeSolutionsSectionProps) {
  return (
    <section className="pb-20 pt-[60px]">
      <div className="container text-center">
        <h2 className="section-title">
          {`Des solutions sur mesure`}
        </h2>

        <div className="mx-auto mt-[60px] flex max-w-3xl flex-wrap justify-center gap-10">
          {solutions}
        </div>

        <p className="mt-[50px]">
          <Link
            href="/services"
            className="rounded-[7px] bg-primary-900 text-white px-10 py-2.5 text-sm"
          >
            En Savoir Plus
          </Link>
        </p>
      </div>
    </section>
  );
}
