import { Card } from "components";
import React from "react";
import data from "../data.json";

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio">
      <h1>Portfolio</h1>
      <div className="cards-container">
        {data.projects.map((project, idx) => {
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
        })}
      </div>
    </section>
  );
};
export default Portfolio;
