import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HomeHeader() {
  return (
    <header className="relative z-0 flex flex-col items-center px-8 pb-[116px] pt-[187px] text-center">
      <Image
        width={4500}
        height={2631}
        src="/images/home-hero-lg.webp"
        alt="Home hero background"
        className="hidden md:block image-cover absolute inset-0 -z-10"
      />

      <Image
        width={1125}
        height={2047}
        src="/images/home-hero.webp"
        alt="Home hero background"
        className="md:hidden image-cover absolute inset-0 -z-10"
      />

      <h1 className="text-[34px]/[1.21] font-black md:text-[80px]/[1.21]">
        <div>Votre Agence</div>

        <div className="rolling">
          <div>
            <div>Dev. Web/Mobile</div>
            <div>Support Technique</div>
            <div>Créative</div>
          </div>
        </div>
      </h1>

      <p className="mt-10 max-w-[700px] text-xl font-light">
        {`Bienvenue chez notre entreprise, spécialisée dans la création de site web, le développement d'applications web et mobile, le support technique et l'infographie.`}
      </p>

      <p className="mt-[50px]">
        <Link
          href="/contact"
          className="rounded-[7px] bg-white px-10 py-2.5 text-lg font-medium shadow-2xl shadow-orange outline outline-black/20"
        >
          Nous contacter
        </Link>
      </p>
    </header>
  );
}
