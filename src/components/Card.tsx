import { CardProps } from "@/types";
import Image from "next/image";
import React from "react";

const Card: React.FC<CardProps> = ({ title, subtitle, image }) => {
  return (
    <div className="card">
      <div className="card-image">
        <Image src={image} alt={title} width={300} height={150} />
      </div>
      <div className="card-text">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};
export default Card;
