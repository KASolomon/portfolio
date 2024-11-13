import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import React from "react";
import Link from 'next/link'

const SocialSection = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-800 via-purple-800 to-pink-900 rounded-md mt-10">
      <div className="flex items-center justify-around my-6 ">
        <p className="inline  text-3xl">Let's connect: </p>
        <div className="flex gap-12">
          <Link
            href="https://linkedin.com/in/solomon-kusi-appiah-077b2818a"
            target="_blank"
          >
            <FaLinkedin className="w-[30px] h-[30px]" />
          </Link>
          <Link href="https://github.com/KASolomon" target="_blank">
            <FaGithub className="w-[30px] h-[30px]" />
          </Link>
          <Link href="https://wa.me/233578582011" target="_blank">
            <IoLogoWhatsapp className="w-[30px] h-[30px]" />
          </Link>
          <Link href="mailto:kusiappiahsolomon10@gmail.com" target="_blank">
            <BiLogoGmail className="w-[30px] h-[30px]" />
          </Link>
        </div>
      </div>

      <p className="text-center mt-10 text-xl">
        Copyright &copy; 2024. All Rights Reserved.
      </p>
    </div>
  );
};

export default SocialSection;
