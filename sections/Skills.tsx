import { Skill } from "components";
import React from "react";

const Skills = () => {
  const skillsData = [
    { title: "PM", progress: 80 },
    { title: "React.js", progress: 75 },
    { title: "Node.js", progress: 80 },
    { title: "MongoDB", progress: 65 },
    { title: "Lean", progress: 60 },
    { title: "Scrum", progress: 80 },
    { title: "Six Sigma", progress: 60 },
    { title: "Organization", progress: 95 },
    { title: "Jira", progress: 100 },
    { title: "Excel", progress: 90 },
    { title: "Python", progress: 60 },
    { title: "Java", progress: 30 },
  ];

  return (
    <section id="skills">
      {skillsData.map((skill, idx) => (
        <Skill
          key={idx}
          title={skill.title}
          progress={skill.progress}
          progressValue={skill.progress}
        />
      ))}
    </section>
  );
};

export default Skills;
