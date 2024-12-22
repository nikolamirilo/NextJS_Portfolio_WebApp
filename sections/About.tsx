import Link from "next/link";
import React from "react";
import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-wrapper">
        <div className="about-left">
          <div className="about-left-content">
            <div className="info">
              <div className="shadow">
                <div className="about-img">
                  <img src="/images/Me.jpg" alt="Nikola Mirilo" />
                </div>
              </div>
              <h2>Nikola Mirilo</h2>
              <h3>IT Project Manager</h3> <br />
              <h3>Full Stack Developer</h3>
            </div>
            <div className="icons">
              <li>
                <Link href="https://www.instagram.com/mirilo.nikola/">
                  <AiOutlineInstagram />
                </Link>
              </li>
              <li>
                <Link href="https://www.facebook.com/nikola.mirilo.5/">
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/nikola-mirilo/">
                  <FaLinkedinIn />
                </Link>
              </li>
              <li>
                <Link href="https://github.com/nikolamirilo">
                  <AiOutlineGithub />
                </Link>
              </li>
            </div>
          </div>
        </div>

        <div className="about-right">
          <h1>
            Hello<span>!</span>
          </h1>
          <h2>I am Nikola,</h2>

          <div className="about-text">
            <p>
              IT Project Manager specialized in implementing Agile and Lean methodologies in software development projects, ensuring on-time delivery within budget and agreed scope.
            </p>
            <p>
              Passionate Full-Stack Developer dedicated to building systems with exceptional design and seamless functionality. Driven by a commitment to staying ahead of technological advancements, I strive to deliver innovative and impactful solutions that make a difference.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
