import React from "react";
import { NodeProps } from "typescript/interfaces";

const Node: React.FC<NodeProps> = ({ title, description, image, date }) => {
  return (
    <div className="node">
      <div className="image" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="content">
        <h2>{title}</h2>
        <span>{date}</span>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Node;
