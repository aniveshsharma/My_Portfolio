import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-20">
      {/* Top section with logo + email */}
      <div className="text-center">
        <Image src={assets.logo} alt="Logo" className="w-36 mx-auto mb-2" />
        <div className="w-max flex items-center gap-2 m-auto">
          <Image src={assets.mail_icon} alt="Mail" className="w-6" />
          akksharma12345@gmail.com
        </div>
      </div>

      {/* Bottom section with copyright + social links */}
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© Anivesh Kumar Sharma</p>

        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a
              target="_blank"
              href="https://github.com/aniveshsharma"
              className="flex items-center gap-2 hover:text-gray-600"
              rel="noopener noreferrer"
            >
              <FaGithub size={20} /> Github
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/anivesh-kumar-sharma?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="flex items-center gap-2 hover:text-blue-600"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={20} /> LinkedIn
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.instagram.com/itz_anivesh?igsh=eHkza2Ztczk5dnJh"
              className="flex items-center gap-2 hover:text-pink-600"
              rel="noopener noreferrer"
            >
              <FaInstagram size={20} /> Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
