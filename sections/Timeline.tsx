import { Node } from "components";
import React from "react";
import data from "../data.json";

const Timeline: React.FC = () => {
  return (
    <section id="timeline">
      <h1>How everything started</h1>
      {data.nodes
        ? data.nodes.map((node, idx) => {
            return (
              <Node
                key={idx}
                title={node.title}
                description={node.description}
                image={node.image}
                date={node.date}
              />
            );
          })
        : null}
    </section>
  );
};

export default Timeline;
