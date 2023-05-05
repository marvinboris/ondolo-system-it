import React from "react";

const steps = [
  {
    title: `Planification`,
    children: `Nous travaillons
      avec vous pour définir les objectifs de votre site web, votre public
      cible et les fonctionnalités souhaitées. Nous nous assurons
      également que le contenu est adapté à vos besoins.`,
  },
  {
    title: `Conception`,
    children: `Nous créons une
      maquette du site web en utilisant les dernières tendances de design
      et en prenant en compte votre image de marque. Nous vous présentons
      des options pour la disposition des pages, les couleurs, les polices
      et les images.`,
  },
  {
    title: `Développement`,
    children: `Nous utilisons des langages de programmation tels que HTML, CSS et
      JavaScript pour code votre site web. Nous intégrons également toutes
      les fonctionnalités nécessaires, telles que des formulaires de
      contact, galeries d’images et des boutons de partage sur les réseaux
      sociaux.`,
  },
  {
    title: `Tests`,
    children: `Avant la mise en ligne,
      nous testons votre site web pour nous assurer qu’il fonctionne
      correctement sur les différents navigateurs et appareils. Nous
      corrigeons également toutes les erreurs et bugs pouvant apparaître.`,
  },
  {
    title: `Mise en ligne`,
    children: `Une fois que
      votre site web est prêt, nous l’hébergeons sur un serveur et le
      mettons en ligne pour que le public puisse y accéder.`,
  },
  {
    title: `Maintenance`,
    children: `Nous assurons la
      maintenance de votre site web en effectuant des mises à jour
      régulières pour garantir sa sécurité et son bon fonctionnement. Nous
      sommes également disponibles pour répondre à toutes vos questions et
      pour effectuer des modifications de contenu ou de fonctionnalités.`,
  },
];

const Step = ({ title, tabIndex, children }: React.ComponentProps<"div">) => (
  <div className="flex w-[375px] flex-none items-start">
    <div className="w-5 flex-none">{tabIndex}.</div>

    <div className="flex-1">
      <span className="font-bold">{title}</span> : {children}
    </div>
  </div>
);

export default function ServicesProcessSection() {
  const blocks = steps.map((step, i) => (
    <Step key={"processus-" + i} tabIndex={i + 1} {...step} />
  ));

  return (
    <section className="container space-y-[60px] py-[60px]">
      <h2 className="section-title">{`Processus`}</h2>

      <div className="flex flex-wrap justify-between gap-y-[30px] text-sm">
        {blocks}
      </div>
    </section>
  );
}
