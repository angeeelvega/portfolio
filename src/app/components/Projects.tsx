import React from "react";
import Card from "./Card";
import Section from "./Section";

export default function Projects() {
  const cardsData = [
    {
      imgSrc:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Lorem Ipsumsssssss",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis tortor eu fringilla imperdiet. Aenean iaculis dictum eros in pulvinar.",
      badges: ["Fashion", "Products"],
    },
    {
      imgSrc:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis tortor eu fringilla imperdiet. Aenean iaculis dictum eros in pulvinar.",
      badges: ["Fashion", "Products"],
    },
    {
      imgSrc:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis tortor eu fringilla imperdiet. Aenean iaculis dictum eros in pulvinar.",
      badges: ["Fashion", "Products"],
    },
  ];

  return (
    <section id="projects" className="p-8">
      <h4 className="mb-8 text-2xl font-bold text-center">Projects I&#39;ve worked on</h4>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            imgSrc={card.imgSrc}
            title={card.title}
            description={card.description}
            badges={card.badges}
          />
        ))}
      </div>
    </section>
  );
}