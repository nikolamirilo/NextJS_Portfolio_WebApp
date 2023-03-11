import { Card } from "@/components";
import React from "react";
import { PortfolioProps } from "../typescript/interfaces/sections";

const Portfolio: React.FC<PortfolioProps> = ({ data }) => {
  const images = [
    "/images/projects/swapabee.webp",
    "/images/projects/webuyindubai.webp",
    "/images/projects/ariosoinvestment.webp",
    "/images/projects/reactifysolutions.webp",
  ];
  return (
    <section id="portfolio">
      <h1>Portfolio</h1>
      <div className="cards-container">
        {data
          ? data.map((project, idx) => {
              return (
                <Card
                  key={idx}
                  id={project.id}
                  title={project.title}
                  image={images[idx]}
                  subtitle="This is my project, I worked on this project"
                />
              );
            })
          : null}
      </div>
    </section>
  );
};
export default Portfolio;
