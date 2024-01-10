"use client";
import Image from "next/image";
import Link from "next/link";
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
          src="/NM.webp"
          alt="Logo"
          width={60}
          height={60}
          style={{ margin: "1vh 0" }}
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
        <Link href="#hero" onClick={handleNavbar}>
          Home
        </Link>
        <Link onClick={handleNavbar} href="#about">
          About me
        </Link>
        <Link onClick={handleNavbar} href="#services">
          Services
        </Link>
        <Link onClick={handleNavbar} href="#portfolio">
          Portfolio
        </Link>
        <Link onClick={handleNavbar} href="#education">
          Education
        </Link>
        <Link onClick={handleNavbar} href="mailto:nikolamirilo.com">
          Contact me
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
