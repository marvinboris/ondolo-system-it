import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/20/solid";
import React from "react";

import Input from "@/components/frontend/ui/form/input";
import TextArea from "@/components/frontend/ui/form/text-area";
import SvgIcon from "@/components/ui/svg-icon";

export default function HomeContactSection() {
  return (
    <section className="pt-[60px]">
      <h2 className="text-center section-title">{`Envie de discuter ?`}</h2>

      <div className="grid md:grid-cols-5 gap-10 items-center mt-[60px]">
        <div className="bg-primary-900 px-[15px] md:px-[50px] py-[60px] text-secondary-100 md:col-span-2">
          <h3 className="text-[35px] font-bold text-orange text-center md:text-left">{`Informations de contact`}</h3>

          <p className="mt-[5px] text-[25px] text-center md:text-left">{`Dites-nous quelque chose`}</p>

          <div className="space-y-[30px] mt-[60px]">
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
                <p className="text-[21px]">{info.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-[60px] flex justify-center md:justify-start items-center gap-10">
            <SvgIcon name="facebook" className="flex-none w-5" />
            <SvgIcon name="twitter" className="flex-none w-5" />
            <SvgIcon name="linkedin" className="flex-none w-5" />
          </div>
        </div>

        <div className="md:col-span-2 px-10 py-[60px] md:px-0 md:py-0">
          <form className="grid md:grid-cols-2 gap-y-[25px] gap-x-[50px]">
            <Input name="last_name" label="Nom" placeholder="Charles" />
            <Input name="first_name" label="Prénom" placeholder="Vincent" />
            <Input type="email" name="email" label="Email" placeholder="charlesvincent@gmail.com" />
            <TextArea className="md:col-span-2" name="message" label="Message" placeholder="Ecrivez votre message..." />
            <p>
              <button className="bg-primary-900 text-white py-3 px-[25px] text-sm">Envoyer</button>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
