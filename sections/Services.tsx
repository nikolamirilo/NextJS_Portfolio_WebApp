import React from "react";
import { Service } from "components";
import data from "../data.json";

const Services = () => {
  return (
    <section id="services">
      <h1 className="section-heading">Services</h1>
      <div className="row">
        {data.services.map((service, idx) => {
          return (
            <Service
              key={idx}
              idx={idx}
              title={service.title}
              description={service.description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Services;
