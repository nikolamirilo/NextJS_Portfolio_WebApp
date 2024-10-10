import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Hero: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <section id="hero">
      <Image
        src="/images/office.webp"
        fill
        priority={true}
        alt="office"
        className="hero-image"
      />
      <div className="hero-content">
        <h1>Empowering IT projects and professionals to success</h1>
        <h2>
          Utilizing my skills in project management and programming to drive
          successful results by effective planning and executing projects,
          delivering on deadlines and goals, and developing customized solutions
          through programming.
        </h2>
        <div className="hero-buttons">
          <Link href="#services" className={!isHovered ? "bg-secondary" : ""} onMouseOver={()=>{
            setIsHovered(!isHovered)
          }}>Services</Link>
          <Link href="#portfolio" className={isHovered ? "bg-secondary" : ""} onMouseOver={()=>{
            setIsHovered(!isHovered)
          }}>Portfolio</Link>
        </div>
      </div>
    </section>
  );
};
export default Hero;
