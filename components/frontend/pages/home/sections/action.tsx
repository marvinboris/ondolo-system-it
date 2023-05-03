import Link from "next/link";
import React from "react";

export default function HomeActionSection() {
  return (
    <section className="mx-auto md:container">
      <div className="bg-gradient-to-r from-[#3A6098] to-[#A6CFA4] py-[30px] text-sm text-white md:rounded-[20px]">
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
              className="rounded-[7px] border border-primary-900 bg-white px-10 py-2.5 text-secondary-900 transition-all duration-200 md:border-0"
            >
              Nous Contacter
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
