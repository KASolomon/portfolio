"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { appContext } from "./AppContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
  const { path, setPath } = useContext(appContext);
  useEffect(() => {
    setPath(window.location.hash || "#home");
  }, []);

  return (
    <div className=" bg-white/20 pt-8 backdrop-blur-sm sticky top-0 z-50 ">
      <div className="w-full  bg-primary h-[60px] lg:h-[100px] ">
        <div className="w-full hidden mb-8 text-white text-2xl  font-bold   lg:flex items-center justify-between gap-6 py-4 px-14">
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
        <div className="lg:hidden flex items-center justify-between px-3 h-full">
          <span className="text-white text-xl font-dancing">Solomon Kusi-Appiah</span>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <RxHamburgerMenu style={{ width: "1.5rem", height: "1.5rem", color:'white' }} />
            </DropdownMenuTrigger>
            <DropdownMenuContent >
              {navLinks.map((link) => (
                <React.Fragment key={link.link}>
                  <DropdownMenuItem>
                    <Link href={link.link}>{link.title}</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                </React.Fragment>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
