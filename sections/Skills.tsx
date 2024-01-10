"use client";
import { Skill } from "components";
import React, { useEffect, useRef, useState } from "react";
import data from "../data.json";

const Skills = () => {
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersection = (entries: any) => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    const tRef = targetRef.current!;
    if (tRef) {
      observer.observe(tRef);
    }

    // Cleanup the observer on component unmount
    return () => {
      if (targetRef.current) {
        observer.unobserve(tRef);
      }
    };
  }, []);

  return (
    <section id="skills">
      {data?.skills?.map((skill, idx) => {
        return (
          <div key={idx} ref={targetRef}>
            {isVisible && (
              <Skill
                title={skill.title}
                progress={skill.progress}
                progressValue={skill.progress}
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Skills;
