"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { appContext } from "./AppContext";

const NavBar = () => {
  const navLinks = [
    {
      title: "Home",
      link: "#home",
    },

    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Skills",
      link: "#skills",
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
  console.log(path);
  return (
    <div className="w-full my-8 text-white text-2xl flex items-center justify-between font-bold gap-6 bg-primary rounded-[60px] h-[100px] py-4 px-14">
      {navLinks.map(({ title, link }, index) => {
        if (index == 2)
          return (
            <div key={title} className="contents">
              <div className="inline bg-white rounded-[100px] text-cyan-800 p-3">
                <span>KA</span>
              </div>
              <Link
                href={link}
                onClick={()=>setPath(link)}
                className={`py-3 px-12 rounded-[60px] ${path == link ? 'bg-white  text-black' : '' } `}
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
  );
};

export default NavBar;