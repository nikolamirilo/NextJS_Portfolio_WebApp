import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Image src="/images/logo.png" alt="Logo" width={160} height={60} />
      </div>
      <div className="links">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/NikolaMirilo.pdf">CV</Link>
      </div>
    </nav>
  );
};

export default Navbar;
