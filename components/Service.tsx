import React from "react";
import { ServiceProps } from "typescript/interfaces";
import { FaBusinessTime, FaLaptopCode, FaProjectDiagram } from "react-icons/fa";
import { SiWebpack } from "react-icons/si";
import { MdManageAccounts } from "react-icons/md";
import { FaSearchengin } from "react-icons/fa";

const Service: React.FC<ServiceProps> = ({ idx, title, description }) => {
  const icons = [
    <FaProjectDiagram size={40} />,
    <SiWebpack size={40} />,
    <FaBusinessTime size={40} />,
    <MdManageAccounts size={40} />,
    <FaLaptopCode size={40} />,
    <FaSearchengin size={40} />,
  ];
  return (
    <div className="column" id="service">
      <div className="card">
        <div className="icon-wrapper">{icons[idx]}</div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Service;
