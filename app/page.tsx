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
import React, { useEffect, useState } from "react";
import { Footer, Loader, Navbar } from "components";

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(false);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  if (loading) return <Loader />;
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
