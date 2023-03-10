import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="left-content">
        <Image src="/NM.webp" alt="Logo" width={80} height={80} />
      </div>
      <div className="middle-content">
        <div className="email">
          <label htmlFor="email">Email:</label>
          <Link href="mailto:nikolamirilo@gmail.com" id="email">
            nikolamirilo@gmail.com
          </Link>
        </div>
        <div className="phone">
          <label htmlFor="phone">Phone:</label>
          <Link href="tel:+381 60 42 78 175" id="phone">
            +381 60 427 8175
          </Link>
        </div>
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
