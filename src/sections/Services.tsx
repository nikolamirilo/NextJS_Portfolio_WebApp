import { Card } from "@/components";
import { ServicesProps } from "@/typescript/interfaces/sections";
import React from "react";

const Services: React.FC<ServicesProps> = ({ data }) => {
  const images = [
    "/images/services/pm.jpg",
    "/images/services/wd.jpg",
    "/images/services/cs.jpg",
    "/images/services/as.jpg",
  ];
  console.log(images);
  return (
    <section id="services">
      <h1>Services</h1>
      <div className="cards-container">
        {data
          ? data.map((service, idx) => {
              console.log(images[idx]);
              return (
                <Card
                  key={idx}
                  id={service.id}
                  title={service.title}
                  image={images[idx]}
                  subtitle={service.description}
                />
              );
            })
          : null}
      </div>
    </section>
  );
};

export default Services;
