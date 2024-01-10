"use client";
import React, { useEffect } from "react";
import { SkillProps } from "typescript/interfaces/components";

const Skill: React.FC<SkillProps> = ({ title, progress, progressValue }) => {
  function progressBarAndCountNumber() {
    const progress = document.querySelectorAll(".progress");
    let count = 0;
    // You must put the maximum number in the MAX variable.
    let MAX = 80;
    let run = setInterval(() => {
      count++;
      progress.forEach((element: any) => {
        if (element.parentElement)
          if (count <= element.dataset.progress) {
            element.parentElement.style.background = `conic-gradient(#f4a950 ${count}%, #ffff 0)`;
            element.firstElementChild.textContent = `${count}%`;
          }
        if (count == MAX) {
          clearInterval(run);
        }
      });
    }, 20);
  }
  useEffect(() => {
    progressBarAndCountNumber();
  }, []);

  return (
    <div className="parent-skill">
      <div className="skill">
        <div className="progress" data-progress={progress}>
          <span className="progress-number">0%</span>
        </div>
      </div>
      <span className="title">{title}</span>
    </div>
  );
};

export default Skill;
