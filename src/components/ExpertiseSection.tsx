import React from "react";
import Image from "next/image";
import * as motion from "framer-motion/client";
import CatchPhrase from "./CatchPhrase";
import PreCatch from "./PreCatch";
interface Expertise {
  title: string;
  description: string;
  image: string;
}

const ExpertiseSection = () => {
  const expertise: Expertise[] = [
    {
      title: "Frontend Web Development",
      description:
        "Crafting visually engaging and responsive web interfaces with React, HTML, CSS and Javascript. Every design is brought to life with intuitive components and seamless user experiences robustly typed with Typescript.",
      image: "/frontend.jpg",
    },
    {
      title: "Fullstack Web Dev with Next.js",
      description:
        "Delivering powerful fullstack applications using Next.js. From API integrations to dynamic routing, I leverage modern Next.js features to build solutions that perform and scale.",
      image: "/nextjs.png",
    },
    {
      title: "Mobile App Dev with React Native",
      description:
        "Creating cross-platform mobile apps with React Native and Expo that prioritize performance and usability. Each app is designed to provide a seamless, native-like experience for users on any device.",
      image: "/reactjs.jpg",
    },
  ];

  return (
    <div className="mt-16" id="skills" style={{ scrollMarginTop: "200px" }}>
      <div className="   mb-8">
        <PreCatch message="My Expertise" />

        <CatchPhrase phrase=" Cutting Edge Technology." />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        viewport={{ once: true }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{ ease: "backInOut", duration: "1" }}
        className="my-10 grid gap-6 lg:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]"
      >
        {expertise.map(({ title, description, image }) => (
          <div
            key={title}
            className="group rounded-xl overflow-hidden shadow-md shadow-gray-300 translate-transform transform hover:scale-105 duration-500  h-full"
          >
            <div className="  mb-6 w-full  h-[40vh] md:h-[30vh] relative">
              <Image
                alt="reactjs image"
                className=" object-cover"
                src={image}
                fill
              />
            </div>
            <div className="p-6 text-center">
              <div className="text-xl font-semibold group-hover:bg-gradient-to-r from-orange-500 via-pink-600 to-fuchsia-600 group-hover:bg-clip-text group-hover:text-transparent ">
                {title}
              </div>
              <div className="text-lg leading-loose mt-6">{description}</div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ExpertiseSection;
