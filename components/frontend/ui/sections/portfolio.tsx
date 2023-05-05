import Image from "next/image";
import Link from "next/link";
import React from "react";

import { portfolio } from "@/utils/resources/data";

export default function PortfolioSection() {
  const blocks = portfolio.map((project, i) => (
    <div key={"project-" + i} className="group w-full max-w-[480px] flex-none">
      <div className="h-[275px] md:h-[270px]">
        <Image
          width={500}
          height={500}
          src={project.photo}
          alt={"Project image - " + (i + 1)}
          className="image-cover rounded-[20px] grayscale transition-all duration-200 group-hover:grayscale-0"
        />
      </div>

      <div className="mt-10 text-[32px]/[1.21] font-bold text-primary-900">
        {project.name}
      </div>

      <div className="mt-2 text-sm text-secondary-400">{project.type}</div>
    </div>
  ));

  return (
    <section className="pb-20 pt-[60px]">
      <div className="container text-center">
        <h2 className="section-title">{`Notre portfolio`}</h2>

        <div className="container mx-auto mt-[60px] flex flex-wrap justify-center gap-x-10 gap-y-10 text-left md:gap-y-[150px]">
          {blocks}
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
