import React from "react";
import data from "../data.json";
import { Card } from "components";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <h1>Portfolio</h1>
      <div className="cards-container">
        {data.projects.map((project, idx) => {
          return (
            <Card
              key={idx}
              title={project.title}
              link={project.link}
              description={project.description}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Portfolio;
