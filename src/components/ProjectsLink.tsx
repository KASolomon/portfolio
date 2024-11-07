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
      className="bg-gradient-to-r from-fuchsia-600 via-purple-800 to-violet-900  rounded-xl  text-3xl px-6 py-5 text-slate-200 font-semibold"
    >
      See Examples
    </Link>
  );
};

export default ProjectsLink;
