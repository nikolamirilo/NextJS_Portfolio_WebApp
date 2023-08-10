import { Card } from "@/components";
import React from "react";
import { PortfolioProps } from "../typescript/interfaces/sections";

const Portfolio: React.FC<PortfolioProps> = ({ data }) => {
  return (
    <section id="portfolio">
      <h1>Portfolio</h1>
      <div className="cards-container">
        {data
          ? data.map((project, idx) => {
              return (
                <Card
                  key={idx}
                  type="portfolio"
                  link={project.link}
                  title={project.title}
                  image={project.image}
                  subtitle={project.description}
                />
              );
            })
          : null}
      </div>
    </section>
  );
};
export default Portfolio;
