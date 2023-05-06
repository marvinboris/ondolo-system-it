import React from "react";

import { NextPageWithLayout } from "./_app";
import Layout, { Head } from "@/components/frontend/navigation/layout";
import HomeHeader from "@/components/frontend/pages/home/header";
import HomeArticlesSection from "@/components/frontend/pages/home/sections/articles";
import HomeServicesSection from "@/components/frontend/pages/home/sections/services";
import HomeSolutionsSection from "@/components/frontend/pages/home/sections/solutions";
import ArticleBlock from "@/components/frontend/ui/blocks/article";
import SolutionBlock from "@/components/frontend/ui/blocks/solution";
import PortfolioSection from "@/components/frontend/ui/sections/portfolio";
import ActionSection from "@/components/frontend/ui/sections/action";
import ContactSection from "@/components/frontend/ui/sections/contact";

const data = {
  solutions: [
    {
      icon: ({ className = "" }) => (
        <svg
          width="50"
          height="50"
          className={className}
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M46 7.3H43V3.4C43 1.5 41.5 0 39.6 0H10.1C8.19998 0 6.69998 1.5 6.69998 3.4V7.3H3.99998C2.09998 7.3 0.599976 8.8 0.599976 10.7V38.8C0.599976 40.7 2.09998 42.2 3.99998 42.2H18.2V44.5C17.2 44.8 16 45.4 15.3 46.7C15 47.2 14.8 47.8 14.7 48.4L14.5 50H35.5L35.4 48.4C35.4 47.8 35.2 47.3 35 46.8C34.3 45.3 32.9 44.7 31.8 44.5V42.2H46C47.9 42.2 49.4 40.7 49.4 38.8V10.7C49.4 8.8 47.9 7.3 46 7.3ZM28.8 44.2H21.3V42.1H28.8V44.2ZM46 10.3C46.2 10.3 46.4 10.5 46.4 10.7V30.3H43V10.3H46ZM9.69998 3.4C9.69998 3.2 9.89998 3 10.1 3H39.6C39.8 3 40 3.2 40 3.4V30.2H9.69998V3.4ZM3.99998 10.3H6.69998V30.3H3.59998V10.7C3.59998 10.4 3.79998 10.3 3.99998 10.3ZM46 39.1H3.99998C3.79998 39.1 3.59998 38.9 3.59998 38.7V33.2H6.69998H43H46.4V38.7C46.4 39 46.2 39.1 46 39.1Z"
            fill="currentColor"
          />
          <path
            d="M15.6 28.8H34.4V9.59998H15.6V28.8ZM17.6 26.9V22C17.8 22 18.1 21.9 18.3 21.9C20.2 21.7 21.6 22.8 23 24C24.2 25 25.5 26 27.1 26C27.3 26 27.6 26 27.8 25.9C28.9 25.7 29.7 25.1 30.4 24.6C31.2 24 31.7 23.7 32.3 23.7V26.8H17.6V26.9ZM32.5 11.6V21.7C31.2 21.6 30.2 22.4 29.4 23C28.8 23.5 28.2 23.9 27.6 24C26.6 24.2 25.7 23.5 24.4 22.5C22.9 21.3 21 19.8 18.3 20C18.1 20 17.9 20 17.8 20.1V11.7H32.5V11.6Z"
            fill="currentColor"
          />
          <path
            d="M27.5999 20C29.3999 20 30.8999 18.5 30.8999 16.7C30.8999 14.9 29.3999 13.4 27.5999 13.4C25.7999 13.4 24.2999 14.9 24.2999 16.7C24.2999 18.5 25.6999 20 27.5999 20ZM27.5999 15.4C28.2999 15.4 28.8999 16 28.8999 16.7C28.8999 17.4 28.2999 18 27.5999 18C26.8999 18 26.2999 17.4 26.2999 16.7C26.2999 16 26.7999 15.4 27.5999 15.4Z"
            fill="currentColor"
          />
          <path
            d="M18.9 7.30005H30.8C31.4 7.30005 31.8 6.90005 31.8 6.30005C31.8 5.70005 31.4 5.30005 30.8 5.30005H18.9C18.3 5.30005 17.9 5.70005 17.9 6.30005C17.9 6.90005 18.3 7.30005 18.9 7.30005Z"
            fill="currentColor"
          />
          <path
            d="M25 34.4C23.9 34.4 23.1 35.3 23.1 36.3C23.1 37.4 24 38.2 25 38.2C26.1 38.2 26.9 37.3 26.9 36.3C26.9 35.2 26.1 34.4 25 34.4Z"
            fill="currentColor"
          />
        </svg>
      ),
      label: "Création de Site Web",
      description: `Incontournable pour les sites vitrines et Boutiques en ligne`,
    },
    {
      icon: ({ className = "" }) => (
        <svg
          width="50"
          height="44"
          className={className}
          viewBox="0 0 50 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M45.19 0.849976H4.81C2.16 0.849976 0 2.99998 0 5.64998V38.34C0 40.99 2.16 43.15 4.81 43.15H45.19C47.84 43.15 50 40.99 50 38.34V5.64998C50 2.99998 47.84 0.849976 45.19 0.849976ZM4.81 4.68998H45.19C45.72 4.68998 46.15 5.11998 46.15 5.64998V9.97997H3.85V5.64998C3.85 5.11998 4.28 4.68998 4.81 4.68998ZM45.19 39.31H4.81C4.28 39.31 3.85 38.88 3.85 38.35V13.83H46.16V38.35C46.15 38.88 45.72 39.31 45.19 39.31Z"
            fill="currentColor"
          />
          <path
            d="M7.21004 9.01993C8.27043 9.01993 9.13004 8.16032 9.13004 7.09993C9.13004 6.03954 8.27043 5.17993 7.21004 5.17993C6.14965 5.17993 5.29004 6.03954 5.29004 7.09993C5.29004 8.16032 6.14965 9.01993 7.21004 9.01993Z"
            fill="currentColor"
          />
          <path
            d="M12.9801 9.01993C14.0404 9.01993 14.9001 8.16032 14.9001 7.09993C14.9001 6.03954 14.0404 5.17993 12.9801 5.17993C11.9197 5.17993 11.0601 6.03954 11.0601 7.09993C11.0601 8.16032 11.9197 9.01993 12.9801 9.01993Z"
            fill="currentColor"
          />
          <path
            d="M18.75 9.01993C19.8103 9.01993 20.67 8.16032 20.67 7.09993C20.67 6.03954 19.8103 5.17993 18.75 5.17993C17.6896 5.17993 16.83 6.03954 16.83 7.09993C16.83 8.16032 17.6896 9.01993 18.75 9.01993Z"
            fill="currentColor"
          />
          <path
            d="M19.55 22.66C19.12 21.69 17.98 21.25 17.01 21.68L8.35997 25.53C7.66997 25.84 7.21997 26.53 7.21997 27.29C7.21997 28.05 7.66997 28.74 8.35997 29.05L17.01 32.9C17.26 33.01 17.53 33.07 17.79 33.07C18.53 33.07 19.23 32.64 19.55 31.93C19.98 30.96 19.54 29.82 18.57 29.39L13.87 27.3L18.57 25.21C19.54 24.77 19.98 23.63 19.55 22.66Z"
            fill="currentColor"
          />
          <path
            d="M40.69 25.53L32.04 21.68C31.07 21.25 29.93 21.69 29.5 22.66C29.07 23.63 29.51 24.77 30.48 25.2L35.18 27.29L30.48 29.38C29.51 29.81 29.07 30.95 29.5 31.92C29.82 32.64 30.52 33.06 31.26 33.06C31.52 33.06 31.79 33.01 32.04 32.89L40.69 29.04C41.38 28.73 41.83 28.04 41.83 27.28C41.83 26.53 41.38 25.84 40.69 25.53Z"
            fill="currentColor"
          />
          <path
            d="M27.02 16.7999C26.01 16.4799 24.93 17.0499 24.61 18.0599L19.8 33.4499C19.48 34.4599 20.05 35.5399 21.06 35.8599C21.25 35.9199 21.44 35.9499 21.63 35.9499C22.45 35.9499 23.21 35.4199 23.46 34.5999L28.27 19.2199C28.59 18.1899 28.03 17.1199 27.02 16.7999Z"
            fill="currentColor"
          />
        </svg>
      ),
      label: "Développement d’applications Web",
      description: `Incontournable pour les sites vitrines et Boutiques en ligne`,
    },
    {
      icon: ({ className = "" }) => (
        <svg
          width="32"
          height="50"
          className={className}
          viewBox="0 0 32 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.69 0H5.31C2.72 0 0.619995 2.1 0.619995 4.69V45.31C0.619995 47.9 2.72 50 5.31 50H26.69C29.28 50 31.38 47.9 31.38 45.31V4.69C31.38 2.1 29.28 0 26.69 0ZM5.31 2.97H26.69C27.64 2.97 28.41 3.74 28.41 4.69V35.27H3.59V4.69C3.59 3.74 4.36 2.97 5.31 2.97ZM26.69 47.03H5.31C4.36 47.03 3.59 46.26 3.59 45.31V38.24H28.41V45.31C28.41 46.26 27.64 47.03 26.69 47.03Z"
            fill="currentColor"
          />
          <path
            d="M16.53 45.31C18.0046 45.31 19.2 44.1146 19.2 42.64C19.2 41.1654 18.0046 39.97 16.53 39.97C15.0554 39.97 13.86 41.1654 13.86 42.64C13.86 44.1146 15.0554 45.31 16.53 45.31Z"
            fill="currentColor"
          />
          <path
            d="M14.4 7.35997H17.61C18.2 7.35997 18.68 6.87997 18.68 6.28997C18.68 5.69997 18.2 5.21997 17.61 5.21997H14.4C13.81 5.21997 13.33 5.69997 13.33 6.28997C13.33 6.87997 13.81 7.35997 14.4 7.35997Z"
            fill="currentColor"
          />
        </svg>
      ),
      label: "Développement d’applications mobile",
      description: `Incontournable pour les sites vitrines et Boutiques en ligne`,
    },
    {
      icon: ({ className = "" }) => (
        <svg
          width="50"
          height="50"
          className={className}
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M48.5 0H42.5C41.67 0 41 0.67 41 1.5V3H28.86C28.41 1.28 26.86 0 25 0C23.14 0 21.59 1.28 21.14 3H9V1.5C9 0.67 8.33 0 7.5 0H1.5C0.67 0 0 0.67 0 1.5V7.5C0 8.33 0.67 9 1.5 9H7.5C8.33 9 9 8.33 9 7.5V6H14.84C13.62 6.79 12.46 7.7 11.42 8.78C8.12 12.17 6.25 16.51 6.04 21.13C4.29 21.57 3 23.13 3 25C3 27.21 4.79 29 7 29C9.21 29 11 27.21 11 25C11 23.53 10.2 22.26 9.02 21.57C9.13 17.57 10.72 13.8 13.56 10.87C15.84 8.53 18.68 6.98 21.76 6.33C22.49 7.34 23.66 8 25 8C26.34 8 27.51 7.34 28.24 6.33C31.33 6.97 34.16 8.53 36.44 10.87C39.29 13.8 40.87 17.57 40.98 21.57C39.8 22.26 39 23.53 39 25C39 27.21 40.79 29 43 29C45.21 29 47 27.21 47 25C47 23.13 45.71 21.57 43.97 21.13C43.76 16.51 41.89 12.16 38.59 8.78C37.54 7.7 36.39 6.79 35.16 6H41V7.5C41 8.33 41.67 9 42.5 9H48.5C49.33 9 50 8.33 50 7.5V1.5C50 0.67 49.33 0 48.5 0Z"
            fill="currentColor"
          />
          <path
            d="M37.35 28.59L26 12V26.61C28.01 27.06 29.5 28.85 29.5 31C29.5 31.34 29.46 31.68 29.39 32C29.01 33.69 27.69 35.01 26 35.39C25.68 35.46 25.34 35.5 25 35.5C24.66 35.5 24.34 35.46 24.02 35.39C22.32 35.02 20.99 33.69 20.61 32C20.54 31.68 20.5 31.34 20.5 31C20.5 28.85 22 27.05 24.02 26.61V12L12.67 28.59C12.43 29.1 12.11 29.93 12.02 31C11.95 31.89 12.07 32.63 12.19 33.13L17.02 42H33L37.84 33.13C37.96 32.63 38.07 31.89 38 31C37.91 29.93 37.6 29.1 37.35 28.59Z"
            fill="currentColor"
          />
          <path
            d="M25 33C26.1046 33 27 32.1046 27 31C27 29.8954 26.1046 29 25 29C23.8954 29 23 29.8954 23 31C23 32.1046 23.8954 33 25 33Z"
            fill="currentColor"
          />
          <path
            d="M25.17 44C22.92 43.98 16.85 43.93 14 48C13.47 48.76 13.17 49.48 13 50H37C36.83 49.49 36.54 48.76 36 48C33.24 44.07 27.48 44.02 25.17 44Z"
            fill="currentColor"
          />
        </svg>
      ),
      label: "Infographie",
      description: `Incontournable pour les sites vitrines et Boutiques en ligne`,
    },
    {
      icon: ({ className = "" }) => (
        <svg
          width="52"
          height="42"
          className={className}
          viewBox="0 0 52 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39.5 19.755C39.5 12.295 33.46 6.255 26 6.255C18.54 6.255 12.5 12.295 12.5 19.755C12.5 23.185 13.77 26.305 15.87 28.685L15.33 32.455C15.3 32.995 15.56 33.495 16 33.755C16.45 34.015 16.91 33.915 17.02 33.885L20.86 32.245C22.45 32.895 24.18 33.255 26 33.255C33.46 33.255 39.5 27.215 39.5 19.755ZM33 17.255C34.38 17.255 35.5 18.375 35.5 19.755C35.5 21.135 34.38 22.255 33 22.255C31.62 22.255 30.5 21.135 30.5 19.755C30.5 18.375 31.62 17.255 33 17.255ZM19 22.255C17.62 22.255 16.5 21.135 16.5 19.755C16.5 18.375 17.62 17.255 19 17.255C20.38 17.255 21.5 18.375 21.5 19.755C21.5 21.135 20.38 22.255 19 22.255ZM23.5 19.755C23.5 18.375 24.62 17.255 26 17.255C27.38 17.255 28.5 18.375 28.5 19.755C28.5 21.135 27.38 22.255 26 22.255C24.62 22.255 23.5 21.135 23.5 19.755Z"
            fill="currentColor"
          />
          <path
            d="M44.71 14.295C42.34 6.19501 34.86 0.255005 26 0.255005C17.07 0.255005 9.61997 6.12501 7.28997 14.295C3.38997 15.865 0.899975 19.315 0.999975 22.755C1.14997 27.635 6.47997 31.205 7.99997 30.755C8.03997 30.745 8.09997 30.725 9.37997 30.295C9.79997 30.155 10.6 29.885 11 29.755C10.56 27.745 10.19 25.385 9.99997 22.755C9.81997 20.145 9.85997 17.795 9.99997 15.755C9.99997 15.755 9.99997 15.745 9.98997 15.745C11.76 8.51501 18.21 3.255 25.99 3.255C33.72 3.255 40.21 8.60501 41.99 15.795C42.13 17.825 42.17 20.165 41.99 22.755C41.95 23.265 41.9 23.755 41.86 24.245C40.24 29.955 35.62 34.405 29.82 35.785C29.72 35.765 29.61 35.745 29.5 35.745H22.5C21.67 35.745 21 36.415 21 37.245V40.245C21 41.075 21.67 41.745 22.5 41.745H29.5C30.33 41.745 31 41.075 31 40.245V38.575C35.77 37.305 39.82 34.285 42.42 30.225C42.49 30.245 42.56 30.275 42.62 30.295C43.89 30.725 43.96 30.745 44 30.755C45.52 31.205 50.85 27.635 51 22.755C51.1 19.315 48.61 15.865 44.71 14.295Z"
            fill="currentColor"
          />
        </svg>
      ),
      label: "Support technique",
      description: `Incontournable pour les sites vitrines et Boutiques en ligne`,
    },
  ],
  articles: [
    {
      photo: "/images/articles-1.webp",
      link: "#",
      title: `Comment apprendre rapidement`,
      description: `Utilisez la logique et votre imagination. L'état d'esprit est important dans la réussite. Soyez positif et détendu en ayant visualisé et préparé cette journée. Préparez vos cartes mentales avec vos mots, structurez vos idées, vous allez retenir les 20 % de connaissances qui résument 80 % du contenu à apprendre.`,
    },
    {
      photo: "/images/articles-2.webp",
      link: "#",
      title: `Maîtrisez ChatGPT l’outil IA incontournable`,
      description: `Il suffit d'écrire un premier message pour lancer une discussion avec le chatbot. Si, par défaut, tout est écrit en anglais, il est tout à fait possible de poser une question ou de soumettre une requête à ChatGPT en français, il vous répondra alors dans cette même langue.`,
    },
    {
      photo: "/images/articles-2.webp",
      link: "#",
      title: `Maîtrisez ChatGPT l’outil IA incontournable`,
      description: `Il suffit d'écrire un premier message pour lancer une discussion avec le chatbot. Si, par défaut, tout est écrit en anglais, il est tout à fait possible de poser une question ou de soumettre une requête à ChatGPT en français, il vous répondra alors dans cette même langue.`,
    },
  ],
};

const params = {
  link: "/",
  title: process.env.NEXT_PUBLIC_COMPANY_NAME!,
  description:
    "Ondolo System IT est une entreprise spécialisée dans le développement de solutions web et mobile sur mesure. Nous offrons des services de qualité pour répondre aux besoins de nos clients en matière de développement de logiciels. Contactez-nous dès maintenant pour en savoir plus !",
};

const HomePage: NextPageWithLayout = () => {
  const solutions = data.solutions.map((solution, i) => (
    <SolutionBlock key={"solution-" + i} {...solution} index={i} />
  ));

  const articles = data.articles.map((article, i) => (
    <ArticleBlock key={"article-" + i} {...article} />
  ));

  return (
    <>
      <Head {...params} />
      <main>
        <HomeHeader />
        <HomeSolutionsSection solutions={solutions} />
        <PortfolioSection />
        <ActionSection />
        <HomeServicesSection />
        <HomeArticlesSection articles={articles} />
        <ContactSection />
      </main>
    </>
  );
};

HomePage.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default HomePage;
