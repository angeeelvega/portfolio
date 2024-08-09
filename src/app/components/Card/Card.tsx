import React from "react";

interface CardProps {
  imgSrc: string;
  title: string;
  description: string;
  badges: string[];
}

const Card: React.FC<CardProps> = ({ imgSrc, title, description, badges }) => {
  return (
    <div className="card bg-base-100 w-full shadow-xl">
      <figure>
        <img src={imgSrc} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary h-fit">{title}</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          {badges.map((badge, index) => (
            <div key={index} className="badge badge-outline">
              {badge}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
