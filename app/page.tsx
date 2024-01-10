"use client";
import { Hero, Services, Timeline, Education, Skills } from "sections";
import data from "../data.json";
import React, { useEffect, useRef, useState } from "react";
import Portfolio from "sections/Portfolio";
import { Footer, Navbar } from "components";

const Home = () => {
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
    <>
      <Navbar />
      <main className="home" style={{ position: "relative" }}>
        <Hero
          title="Empowering IT projects to success"
          subtitle="Utilizing my skills in project management and programming to drive successful results by effective planning and executing projects, delivering on deadlines and goals, and developing customized solutions through programming."
          image="/images/office.webp"
        />
        <Timeline />
        <Services data={data?.services} />
        <Portfolio data={data?.projects} />
        <Education data={data?.education} />
        <div ref={targetRef}>{isVisible && <Skills />}</div>
      </main>
      <Footer />
    </>
  );
};
export default Home;
