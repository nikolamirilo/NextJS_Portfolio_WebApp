import React from "react";
import { FaBusinessTime, FaLaptopCode, FaProjectDiagram } from "react-icons/fa";
import { SiWebpack } from "react-icons/si";
import data from "../data.json";
import { MdManageAccounts } from "react-icons/md";
import { FaSearchengin } from "react-icons/fa";

const Services = () => {
  const icons = [
    <FaProjectDiagram size={40} />,
    <SiWebpack size={40} />,
    <FaBusinessTime size={40} />,
    <MdManageAccounts size={40} />,
    <FaLaptopCode size={40} />,
    <FaSearchengin size={40} />,
  ];
  return (
    <section id="services">
      <h1 className="section-heading">Services</h1>
      <div className="row">
        {data.services.map((service, idx) => {
          return (
            <div className="column" key={idx}>
              <div className="card">
                <div className="icon-wrapper">{icons[idx]}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
