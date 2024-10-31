"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const NavBar = () => {
  const navLinks = [
    {
      title: "Home",
      link: "#home",
    },
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Skills",
      link: "#skills",
    },
    {
      title: "Projects",
      link: "#projects",
    },
  ];
  useEffect(()=>{
    setPath(window.location.hash || '#home')
  },[])
  const [path, setPath] = useState('');
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
