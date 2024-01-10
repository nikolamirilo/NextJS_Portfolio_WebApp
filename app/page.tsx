"use client";
import { Hero, Services, Timeline, Education, Skills } from "sections";
import React from "react";
import Portfolio from "sections/Portfolio";
import { Footer, Navbar } from "components";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="home" style={{ position: "relative" }}>
        <Hero
          title="Empowering IT projects to success"
          subtitle="Utilizing my skills in project management and programming to drive successful results by effective planning and executing projects, delivering on deadlines and goals, and developing customized solutions through programming."
          image="/images/office.webp"
        />

        <Timeline />
        <Services />
        <Portfolio />
        <Education />
        <Skills />
      </main>
      <Footer />
    </>
  );
};
export default Home;
