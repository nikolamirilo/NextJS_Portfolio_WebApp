"use client";
import { Hero, Services, Timeline, Education } from "sections";
import data from "../data.json";
import React from "react";
import Portfolio from "sections/Portfolio";

const Home: React.FC = () => {
  return (
    <main className="home">
      <Hero
        title="Empowering IT projects to success"
        subtitle="Utilizing my skills in project management and programming to drive successful results by effective planning and executing projects, delivering on deadlines and goals, and developing customized solutions through programming."
        image="/images/office.webp"
      />
      <Timeline />
      <Services data={data?.services} />
      <Portfolio data={data?.projects} />
      <Education data={data?.education} />
    </main>
  );
};
export default Home;
