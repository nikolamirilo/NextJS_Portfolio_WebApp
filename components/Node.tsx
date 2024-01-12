import Image from "next/image";
import React from "react";
import { NodeProps } from "typescript/interfaces";

const Node: React.FC<NodeProps> = ({ title, description, image, date }) => {
  return (
    <div className="node">
      <div className="node-image">
        <Image src={image} fill alt={title} />
      </div>

      <div className="node-content">
        <h2>{title}</h2>
        <span>{date}</span>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Node;
