import { Card } from "@/components";
import React from "react";
import { CardsContainerProps } from "../typescript/interfaces/sections";

const CardsContainer: React.FC<CardsContainerProps> = ({ data }) => {
  return (
    <section className="cards-container">
      {data
        ? data.map((project, idx) => {
            return (
              <Card
                key={idx}
                id={project.id}
                title={project.title}
                image={project.image}
                subtitle="This is my project, I worked on this project"
              />
            );
          })
        : null}
    </section>
  );
};
export default CardsContainer;
