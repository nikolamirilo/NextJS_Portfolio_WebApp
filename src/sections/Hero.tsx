import { HeroProps } from "@/typescript/interfaces/sections";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero: React.FC<HeroProps> = ({ title, subtitle, image }) => {
  return (
    <section id="hero">
      <Image src={image} alt="Office" fill object-fit="cover" priority />
      <div className="hero-content">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <div className="hero-buttons">
          <Link href="#services">Services</Link>
          <Link href="#portfolio">Portfolio</Link>
        </div>
      </div>
    </section>
  );
};
export default Hero;
