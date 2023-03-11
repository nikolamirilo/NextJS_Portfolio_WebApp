import React from "react";
import { Card } from "@/components";
import { ServicesProps } from "@/typescript/interfaces/sections";

const Services: React.FC<ServicesProps> = ({ data }) => {
  const images = [
    "/images/projects/swapabee.webp",
    "/images/projects/webuyindubai.webp",
    "/images/projects/ariosoinvestment.webp",
    "/images/projects/reactifysolutions.webp",
  ];
  return (
    <section id="services">
      <h1>Services</h1>
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

export default Services;
