import React from "react";

import ServiceBlock from "@/components/frontend/ui/blocks/service";
import { services } from "@/utils/resources/data";

export default function HomeServicesSection() {
  return (
    <section className="container grid grid-cols-1 gap-[120px] py-[60px]">
      {services.map((service, i) => (
        <ServiceBlock
          key={"service-" + i}
          {...service}
          link={`/services/${service.slug}`}
        />
      ))}
    </section>
  );
}
