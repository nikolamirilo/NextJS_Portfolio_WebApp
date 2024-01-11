import { Node } from "components";
import React from "react";
import data from "../data.json";

const Education: React.FC = () => {
  return (
    <section id="education">
      <h1>Education</h1>
      <div className="cards-container">
        {data.education.map((item: any, idx: any) => {
          return (
            <Node
              key={idx}
              title={item.title}
              image={item.image}
              description={item.description}
            />
          );
        })}
      </div>
    </section>
  );
};
export default Education;
