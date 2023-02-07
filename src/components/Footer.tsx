import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="left-content">
        <Image src="/images/logo.png" alt="Logo" width={140} height={60} />
      </div>
      <div className="middle-content">
        <label htmlFor="email">Email:</label>
        <Link href="mailto:nikolamirilo@gmail.com" id="email">
          nikolamirilo@gmail.com
        </Link>
        <label htmlFor="phone">Phone:</label>
        <Link href="tel:+381 60 42 78 175" id="phone">
          +381 60 427 8175
        </Link>
      </div>
      <div className="right-content">
        <div className="social-media">
          <button>
            <AiOutlineInstagram />
          </button>
          <button>
            <FaFacebookF />
          </button>
          <button>
            <FaLinkedinIn />
          </button>
          <button>
            <AiOutlineGithub />
          </button>
        </div>
        <p>Copyright @ 2023 Nikola Mirilo</p>
      </div>
    </footer>
  );
};

export default Footer;
