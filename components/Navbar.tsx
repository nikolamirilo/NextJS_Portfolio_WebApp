"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
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
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <div className="links">
        <Link href="/">Home</Link>
        <Link href="#about">About me</Link>
        <Link href="#services">Services</Link>
        <Link href="#portfolio">Portfolio</Link>
        <Link href="#education">Education</Link>
        <Link href="mailto:nikolamirilo.com">Contact me</Link>
      </div>
    </nav>
  );
};

export default Navbar;