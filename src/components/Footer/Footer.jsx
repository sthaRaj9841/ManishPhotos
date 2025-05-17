import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4">
      <div className="flex flex-col gap-4 items-start md:items-center md:flex-row justify-between max-w-4xl mx-auto">
        <a
          href="https://www.instagram.com/manishphotos_/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-pink-400 transition"
        >
          <AiFillInstagram size={24} />
          <span>@manishphotos_</span>
        </a>

        <a
          href="mailto:manisharphotos@gmail.com"
          className="flex items-center gap-2 hover:text-blue-400 transition"
        >
          <IoIosMail size={24} />
          <span>manisharphotos@gmail.com</span>
        </a>

        <a
          href="https://wa.me/9779847068567"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-green-400 transition"
        >
          <IoLogoWhatsapp size={24} />
          <span>+977 9847068567</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
