import Image from "next/image";
import React from "react";

const Node: React.FC = () => {
  return (
    <div className="node">
      <div
        className="image"
        style={{ backgroundImage: `url(https://patterns.dev/img/reactjs/react-logo@3x.svg)` }}
      ></div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur quae in, obcaecati saepe dolores tenetur
        rerum reprehenderit nam veniam ullam asperiores doloribus quasi! Magni libero repellendus deserunt a velit.
        Adipisci.
      </p>
    </div>
  );
};

export default Node;
