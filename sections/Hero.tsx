import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section id="hero">
      <Image
        src="/images/office.webp"
        fill
        alt="office"
        className="hero-image"
      />
      <div className="hero-content">
        <h1>Empowering IT projects to success</h1>
        <h2>
          Utilizing my skills in project management and programming to drive
          successful results by effective planning and executing projects,
          delivering on deadlines and goals, and developing customized solutions
          through programming.
        </h2>
        <div className="hero-buttons">
          <Link href="#services">Services</Link>
          <Link href="#portfolio">Portfolio</Link>
        </div>
      </div>
    </section>
  );
};
export default Hero;
