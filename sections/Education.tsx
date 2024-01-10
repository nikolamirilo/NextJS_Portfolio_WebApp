import { Node } from "components";
import React from "react";
import { EducationProps } from "typescript/interfaces/sections";

const Education: React.FC<EducationProps> = ({ data }) => {
  return (
    <section id="education">
      <h1>Education</h1>
      <div className="cards-container">
        {data
          ? data.map((item: any, idx: any) => {
              return (
                <Node
                  key={idx}
                  date=""
                  title={item.title}
                  image={item.image}
                  description={item.description}
                />
              );
            })
          : null}
      </div>
    </section>
  );
};
export default Education;
