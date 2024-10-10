"use client";
import Image from "next/image";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      <div className="logo">
        <Image
          src="/logo-transparent.png"
          alt="Logo"
          width={80}
          height={60}
          style={{  width: "auto", marginTop: "2px" }}
        />
      </div>
      <input
        id="menu-toggle"
        type="checkbox"
        checked={isOpen}
        onChange={handleNavbar}
      />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <div className="links">
        <a onClick={handleNavbar} href="#about">
          About
        </a>
        <a onClick={handleNavbar} href="#services">
          Services
        </a>
        <a onClick={handleNavbar} href="#portfolio">
          Portfolio
        </a>
        <a onClick={handleNavbar} href="#education">
          Education
        </a>
        <a onClick={handleNavbar} href="mailto:nikolamirilo@gmail.com">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
