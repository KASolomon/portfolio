"use client";
import React, { Suspense, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import * as motion from "framer-motion/client";
import Autoplay from "embla-carousel-autoplay";
import { getPortfolioRepos, RepoData } from "@/lib/actions";
import { Skeleton } from "./ui/skeleton";

const ProjectsSection = () => {
  const [repoData, setRepoData] = useState<RepoData[]>();
  const [iframeReady, setIframeReady] = useState(false)
  const [dataReady, setDataReady] = useState(false)

  useEffect(() => {
    const fetchProjects = async () => {
      setRepoData(await getPortfolioRepos());
    };
    fetchProjects();
    setDataReady(true)
  }, []);
  const sampleArray = [1,2,3,4,5,6]
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <div id="projects" className="my-16" style={{ scrollMarginTop: "200px" }}>
      <h1 className="text-center text-[26px] my-4 tracking-wider">
        My Projects
      </h1>

      <h3 className="bg-clip-text bg-gradient-to-r from-pink-700 via-purple-600 to-sky-600 text-transparent text-center text-5xl  font-semibold p-2 mb-8">
        Seamless digital experiences.
      </h3>
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className="mx-4"
      >
        <CarouselContent>
          {dataReady
            ? repoData?.map((repo) => (
                <CarouselItem
                  className="  md:min-w-[500px] lg:min-w-[600px]  shadow-md shadow-gray-200 overflow-hidden my-4 ml-4   rounded-lg min-h-full flex-1"
                  key={repo.id}
                >
                  <div className="w-full h-[30vh] relative">
                    {repo.homepage ? (
                      <>
                        <Skeleton
                          className={`w-full h-[30vh] rounded-xl ${
                            iframeReady ? "hidden" : ""
                          }`}
                        />
                        <iframe
                          src={repo.homepage}
                          title="Website Preview"
                          className={`${
                            iframeReady ? "block" : ""
                          } translate-transform transform ease-in-out duration-300 `}
                          width="100%"
                          height="100%"
                          onLoad={() => {
                            setIframeReady(true);
                          }}
                        />
                      </>
                    ) : (
                      <Image
                        alt="reactjs image"
                        className=" object-cover"
                        src={"/frontend.jpg"}
                        fill
                      />
                    )}
                  </div>
                  <motion.div
                    className="p-6  min-h-full text-center dark:bg-darkBg"
                    initial={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -70 }}
                    transition={{
                      ease: "easeInOut",
                      duration: "0.3",
                      stiffness: 300,
                    }}
                  >
                    <div className="text-2xl font-semibold group-hover:bg-gradient-to-r from-orange-500 via-pink-600 to-fuchsia-600 group-hover:bg-clip-text group-hover:text-transparent ">
                      {repo.name}
                    </div>
                    <div className="text-xl leading-loose mt-6">
                      {repo.description}
                    </div>
                  </motion.div>
                </CarouselItem>
              ))
            : sampleArray.map((item) => (
                <div
                  className="md:min-w-[500px] lg:min-w-[600px] my-4 ml-4  shadow-sm shadow-gray-200 rounded-lg"
                  key={item}
                >
                  <Skeleton className="w-full h-[30vh] rounded-xl" />
                  <div className="flex flex-col items-center">
                    <Skeleton className="h-4 w-5/6 my-4" />
                    <Skeleton className="h-4 w-5/6 mb-4 mt-2" />
                  </div>
                </div>
              ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ProjectsSection;
