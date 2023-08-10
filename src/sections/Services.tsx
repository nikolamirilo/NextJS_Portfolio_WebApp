import { Card } from "@/components";
import { ServicesProps } from "@/typescript/interfaces/sections";
import React from "react";

const Services: React.FC<ServicesProps> = ({ data }) => {
  return (
    <section id="services">
      <h1>Services</h1>
      <div className="cards-container">
        {data
          ? data.map((service, idx) => {
              return (
                <Card
                  key={idx}
                  type="services"
                  title={service.title}
                  image={service.image}
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
