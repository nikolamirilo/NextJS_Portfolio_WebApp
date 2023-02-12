import { HeroProps } from "@/types/components";
import React from "react";

const Hero: React.FC<HeroProps> = ({ title, subtitle, image }) => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${image})` }}>
      <div className="hero-content">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <div className="hero-buttons">
          <button>Click</button>
          <button>Pass</button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
