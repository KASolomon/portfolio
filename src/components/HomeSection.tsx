import Image from "next/image";
import React from "react";
import * as motion from 'framer-motion/client'
import ProjectsLink from "./ProjectsLink";

const HomeSection = () => {
   
  return (

      <motion.div
      id="home"
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: "0", opacity: 1 }}
        transition={{ duration: "0.6", stiffness: 300 }}
        className="grid w-full h-[80vh] grid-cols-[0.6fr_0.4fr] "
      >
        <div className=" p-4 flex flex-col justify-center items-center h-full">
          <p className="text-8xl">👋</p>
          <h1 className=" bg-gradient-to-r from-fuchsia-400 via-purple-700 to-violet-900 text-transparent bg-clip-text text-6xl font-bold">
            I'm Solomon Kusi-Appiah.
          </h1>
          <p className="text-slate-300 text-3xl tracking-wider my-8 text-center italic">
            I build beautiful, user-friendly web & mobile experiences with
            Next.js and React Native
          </p>
          <div className=" w-full flex justify-center gap-10 ">
            <ProjectsLink />
            <a
              className=" rounded-xl text-3xl px-6 py-5 bg-teal-900 font-semibold"
              href="/KUSI-APPIAH_SOLOMON_FRONTEND.pdf"
              download
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className=" relative rounded-2xl overflow-hidden">
          <Image
            src="/Me.jpg"
            alt="Solomon Kusi-Appiah"
            fill
            objectFit="cover"
          />
        </div>
      </motion.div>

  );
};

export default HomeSection;
