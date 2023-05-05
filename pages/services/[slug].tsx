import { useRouter } from "next/router";
import React from "react";

import Layout, { Head } from "@/components/frontend/navigation/layout";
import ServicesLayout from "@/components/frontend/pages/services/layout";

import { NextPageWithLayout } from "@/pages/_app";
import { services } from "@/utils/resources/data";

const params = {
  link: "/",
  title: process.env.NEXT_PUBLIC_COMPANY_NAME!,
  description:
    "Ondolo System IT est une entreprise spécialisée dans le développement de solutions web et mobile sur mesure. Nous offrons des services de qualité pour répondre aux besoins de nos clients en matière de développement de logiciels. Contactez-nous dès maintenant pour en savoir plus !",
};

const ServicePage: NextPageWithLayout = () => {
  const {
    query: { slug },
  } = useRouter();

  const service = services.find((item) => item.slug === slug);

  return service ? (
    <>
      <Head {...params} />
      <ServicesLayout service={service} />
    </>
  ) : null;
};

ServicePage.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default ServicePage;
