"use client";
import {
  Hero,
  Services,
  Timeline,
  Education,
  Skills,
  Portfolio,
  About,
} from "sections";
import React from "react";
import { Footer, Navbar } from "components";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="home" style={{ position: "relative" }}>
        <Hero />
        <About />
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
