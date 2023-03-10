import { HeroProps } from "@/typescript/interfaces/sections";
import Link from "next/link";
import React from "react";

const Hero: React.FC<HeroProps> = ({ title, subtitle, image }) => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${image})` }}>
      <div className="hero-content">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <div className="hero-buttons">
          <Link href="#portfolio">Portfolio</Link>
          <Link href="#timeline">Timeline</Link>
        </div>
      </div>
    </section>
  );
};
export default Hero;
