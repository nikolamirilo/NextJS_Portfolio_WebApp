import { CardProps } from "@/types";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Card: React.FC<CardProps> = ({ id, title, subtitle, image }) => {
  const router = useRouter();
  return (
    <div
      className="card"
      onClick={() => {
        router.push(`/projects/${id}`);
      }}
    >
      <div className="card-image">
        <Image src={image} alt={title} width={350} height={200} />
      </div>
      <div className="card-text">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};
export default Card;
