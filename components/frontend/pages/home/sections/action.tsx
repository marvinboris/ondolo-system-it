import Link from "next/link";
import React from "react";

export default function HomeActionSection() {
  return (
    <section className="bg-gradient-to-br from-primary-600 from-10% to-blue py-[30px] text-sm text-white md:bg-blue">
      <div className="mx-auto max-w-[700px] px-[15px] text-center">
        <h2 className="section-title">
          <div>Une idée ? Un projet ? </div>
          <div>Nous sommes à votre écoute</div>
        </h2>

        <p className="mt-5">
          {`Nous sommes fiers de notre travail et nous sommes convaincus que nous pouvons aider votre entreprise à réussir en ligne. Contactez-nous dès aujourd'hui pour en savoir plus sur nos services et comment nous pouvons vous aider.`}
        </p>

        <p className="mt-5 md:mt-[50px]">
          <Link
            href="/contact"
            className="rounded-none border border-primary-900 bg-white px-10 py-2.5 text-primary-900"
          >
            Nous Contacter
          </Link>
        </p>
      </div>
    </section>
  );
}
