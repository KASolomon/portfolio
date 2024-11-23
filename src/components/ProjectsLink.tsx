"use client";
import Link from "next/link";
import React, { useContext } from "react";
import { appContext } from "./AppContext";

const ProjectsLink = () => {
  const { setPath } = useContext(appContext);
  return (
    <Link
      href="#projects"
      onClick={() => setPath("#projects")}
      className="bg-gradient-to-r text-center from-fuchsia-600 via-purple-800 to-violet-900  rounded-xl text-lg lg:text-2xl px-3 py-3 lg:px-6 lg:py-5 text-slate-200 font-semibold"
    >
      See Examples
    </Link>
  );
};

export default ProjectsLink;
