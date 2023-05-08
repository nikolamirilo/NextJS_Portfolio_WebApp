import { NodeProps } from "@/typescript/interfaces/components";
import React from "react";

const Node: React.FC<NodeProps> = ({ title, description, image }) => {
  return (
    <div className="node">
      <div className="image" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Node;
