import Image from "next/image";
import React from "react";

export default function ServicesStackSection() {
  return (
    <section className="container space-y-[60px] py-[60px]">
      <h2 className="section-title">{`Stack technique`}</h2>

      <Image
        width={4875}
        height={2000}
        src="/images/services-stack.webp"
        alt="Stack technique"
        className="h-auto w-full"
      />
    </section>
  );
}
