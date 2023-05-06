import Image from "next/image";
import React from "react";

import ActionSection from "../../ui/sections/action";
import ContactSection from "../../ui/sections/contact";
import PortfolioSection from "../../ui/sections/portfolio";

import ServicesProcessSection from "./sections/process";
import ServicesStackSection from "./sections/stack";
import { classNames } from "@/utils/helpers";

const details = [
  {
    title: "Site Vitrine",
    children:
      "Le meilleur outil pour présenter vos services ou produits en ligne.",
  },
  {
    title: "Boutique en Ligne",
    children:
      "Présentez et vendez vos produits en ligne rapidement et développez votre clientèle.",
  },
  {
    title: "Refonte de Site Web",
    children:
      "Vous souhaitez donner un coup de pinceau à votre site ? On le redessine pour vous.",
  },
];

const Detail = ({ tabIndex, title, children }: React.ComponentProps<"div">) => (
  <div
    className={classNames(
      "rounded-[10px] px-10 py-[50px] shadow-lg shadow-black/10 w-[280px] flex-none",
      tabIndex === 0
        ? "bg-[#A1FFFF]"
        : tabIndex === 1
        ? "bg-[#FFEAA1]"
        : tabIndex === 2
        ? "bg-[#C5A1FF]"
        : "bg-secondary-100"
    )}
  >
    <h3 className="text-lg font-semibold">{title}</h3>

    <p className="mt-2.5 text-secondary-700 text-sm">{children}</p>
  </div>
);

interface Props {
  service: {
    photo: string;
    title: string;
    description: string;
  };
}

export default function ServicesLayout({ service }: Props) {
  return (
    <main>
      <div className="container space-y-[120px] mt-[72px] py-[60px]">
        <div className="flex items-center justify-between">
          <div className="w-full md:w-1/2 flex-none">
            <h1 className="text-[34px] md:text-7xl font-black">{service.title}</h1>

            <div className="pt-10 text-xl font-light">
              {service.description}
            </div>
          </div>

          <div className="hidden md:block w-[500px] flex-none">
            <Image
              width={1563}
              height={1563}
              src={service.photo}
              alt={service.title}
              className="w-full"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-stretch justify-center gap-10">
          {details.map((detail, i) => (
            <Detail key={"detail-" + i} tabIndex={i} {...detail} />
          ))}
        </div>
      </div>

      <ServicesProcessSection />
      <ServicesStackSection />
      <ActionSection />
      <PortfolioSection />
      <ContactSection />
    </main>
  );
}
