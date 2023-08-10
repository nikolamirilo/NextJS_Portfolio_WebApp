import { CardProps } from "@/typescript/interfaces/components";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Card: React.FC<CardProps> = ({
  id,
  title,
  subtitle,
  link,
  image,
  type,
}) => {
  const router = useRouter();
  return (
    <div
      className="card"
      onClick={() => {
        router.replace(link ? link : "");
      }}
    >
      <div className="card-image">
        <Image
          src={image}
          alt={title}
          fill
          objectFit="cover"
          sizes="(max-width: 768px) 90vw, 350px"
        />
      </div>
      <div className="card-text">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};
export default Card;
