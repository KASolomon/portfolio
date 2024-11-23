import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import React from "react";
import Link from 'next/link'
import PreCatch from './PreCatch';

const SocialSection = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-800 via-purple-800 to-pink-900 rounded-md mt-36 pt-6 text-white px-8">
     <PreCatch message="Contact me"/>

      <h3 className="bg-clip-text bg-gradient-to-r from-pink-700 via-purple-600 to-sky-600 text-transparent text-center text-3xl lg:text-5xl  font-semibold p-2">
        Open to all work.
      </h3>
<div className="flex justify-center">

      <div className="flex gap-12 justify-around my-16 max-w-[600px]">
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

      <p className="text-center mt-10 text-md lg:text-xl pb-4">
        Copyright &copy; 2024. All Rights Reserved.{"  "}|{"  "}Connected to the
        GitHub API
      </p>
    </div>
  );
};

export default SocialSection;
