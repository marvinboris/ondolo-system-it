import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import React from "react";

import Logo from "@/components/ui/logo";
import SvgIcon from "@/components/ui/svg-icon";

export default function Footer() {
  return (
    <footer className="grid md:grid-cols-5 gap-10 bg-primary-900 px-[50px] py-[60px] text-secondary-100">
      <div className="space-y-[30px] col-span-2">
        <Logo white />

        <div className="space-y-[30px]">
          {[
            { icon: PhoneIcon, value: `+33 00 00 00 00` },
            { icon: EnvelopeIcon, value: `contact@ondolo.com` },
            {
              icon: MapPinIcon,
              value: `Notre fantastique adresse\nPays des Merveilles`,
            },
          ].map((info, i) => (
            <div key={"contact-info-" + i} className="flex gap-5">
              <info.icon className="w-6 flex-none" />
              <p className="text-sm">{info.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-[60px] flex items-center gap-10">
          <SvgIcon name="facebook" className="w-[15px] flex-none" />
          <SvgIcon name="twitter" className="w-[15px] flex-none" />
          <SvgIcon name="linkedin" className="w-[15px] flex-none" />
        </div>
      </div>

      <div className="space-y-5">
        <h3 className="text-[21px]">Liens Rapides</h3>

        <div className="space-y-[15px] text-sm">
          <div>
            <Link href="/services">Services</Link>
          </div>
          <div>
            <Link href="/realisations">Réalisations</Link>
          </div>
          <div>
            <Link href="/articles">Articles</Link>
          </div>
          <div>
            <Link href="/contact">Contact</Link>
          </div>
          <div>
            <Link href="/mentions-legales">Mentions Légales</Link>
          </div>
        </div>
      </div>

      <div className="col-span-2 space-y-5">
        <h3 className="text-[21px]">S’abonner à la Newsletter</h3>

        <form className="flex items-stretch text-sm">
          <input
            type="email"
            name="email"
            className="flex-1 bg-black/20 p-3 placeholder:text-secondary-500 outline-none focus:outline-none shadow-none shadow-white focus:shadow-lg transition-all duration-200"
            placeholder="Votre adresse mail"
          />
          <button className="border border-primary-900 bg-white text-primary-900 px-[25px]">
            S’abonner
          </button>
        </form>
      </div>
    </footer>
  );
}
