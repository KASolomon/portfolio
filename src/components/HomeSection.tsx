import Image from "next/image";
import React from "react";
import * as motion from 'framer-motion/client'
import ProjectsLink from "./ProjectsLink";

const HomeSection = () => {
   
  return (
    <motion.div
      id="home"
      style={{ scrollMarginTop: "200px" }}
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: "0", opacity: 1 }}
      transition={{ duration: "0.6", stiffness: 300 }}
      className=" grid gap-6 lg:gap-0 w-full lg:h-[80vh] lg:grid-cols-[0.6fr_0.4fr] lg:my-16"
    >
      <div className=" lg:p-4 flex flex-col justify-center items-center h-full">
        <p className=" text-6xl lg:text-8xl">👋</p>
        <h1 className=" bg-gradient-to-r from-fuchsia-400 via-purple-700 to-violet-900 text-transparent bg-clip-text text-4xl lg:text-6xl font-bold">
          I&apos;m Solomon Kusi-Appiah.
        </h1>
        <p className=" text-slate-500 dark:text-slate-300 text-xl lg:text-3xl tracking-wider my-8 text-center italic">
          I build beautiful, user-friendly web & mobile experiences with Next.js
          and React Native
        </p>
        <div className=" w-[60%] flex flex-col lg:flex-row gap-6 justify-center lg:gap-10 ">
          <ProjectsLink />
          <a
            className=" rounded-xl text-center text-lg lg:text-3xl px-3 py-3 lg:px-6 lg:py-5 bg-teal-900 font-semibold text-slate-200"
            href="/KUSI-APPIAH_SOLOMON_FRONTEND.pdf"
            download
          >
            Get Resume
          </a>
        </div>
      </div>
      <div className=" relative rounded-2xl overflow-hidden w-[full] min-h-[500px]">
        <Image src="/Me.jpg" alt="Solomon Kusi-Appiah" fill objectFit="cover" />
      </div>
    </motion.div>
  );
};

export default HomeSection;
