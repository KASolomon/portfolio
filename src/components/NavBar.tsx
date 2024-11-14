"use client";

import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { appContext } from "./AppContext";

const NavBar = () => {
  const navLinks = [
    {
      title: "Home",
      link: "#home",
    },

    {
      title: "Skills",
      link: "#skills",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "About",
      link: "#about",
    },
  ];
  const{path, setPath} = useContext(appContext)
  useEffect(()=>{
    setPath(window.location.hash || '#home')
  },[])

  
  return (
    <div className="bg-white/20 pt-8 backdrop-blur-sm sticky top-0 z-50 ">
     
      <div className="w-full mb-8 text-white text-2xl flex items-center justify-between font-bold gap-6 bg-primary h-[100px] py-4 px-14 ">
        {navLinks.map(({ title, link }, index) => {
          if (index == 2)
            return (
              <div key={title} className="contents">
                <div className="inline bg-white rounded-[100px] text-cyan-800 p-3">
                  <span>KA</span>
                </div>
                <Link
                  href={link}
                  onClick={() => setPath(link)}
                  className={`py-3 px-12 rounded-[60px] ${
                    path == link ? "bg-white  text-black" : ""
                  } `}
                >
                  {title}
                </Link>
              </div>
            );
          return (
            <Link
              key={title}
              onClick={() => setPath(link)}
              href={link}
              className={`py-3 px-12 rounded-[60px] ${
                path == link ? " bg-white text-black" : ""
              } `}
            >
              {title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
