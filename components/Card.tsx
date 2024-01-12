"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CardProps } from "typescript/interfaces";

const Card: React.FC<CardProps> = ({ title, description, link, image }) => {
  return (
    <div className="portfolio-card">
      <Image src={image} alt={title} width={300} height={360} />
      <div className="info">
        <h1>{title}</h1>
        <p>{description}</p>
        <Link href={link}>Read more</Link>
      </div>
    </div>
  );
};
export default Card;
