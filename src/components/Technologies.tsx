"use client"
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
const Technologies = () => {
  const logos = [
    { src: "/react.png", href: "https://react.dev/" },
    { src: "/next.svg", href: "https://nextjs.org/" },
    { src: "/tailwind-css.svg", href: "https://tailwindcss.com/" },
    { src: "/framermotion.png", href: "https://motion.dev/" },
    { src: "/shadcn.svg", href: "https://ui.shadcn.com/" },
    { src: "/github-logo.webp", href: "https://github.com/" },
  ];
  return (
    <div>
      <h1 className="text-center text-[26px] my-8">This Portfolio</h1>

      <h3 className="bg-clip-text bg-gradient-to-r from-pink-700 via-purple-600 to-sky-600 text-transparent text-center text-5xl  font-semibold p-2 mb-6">
        Libraries | Frameworks | API Integrations
      </h3>
      <Carousel opts={{ loop: true }} plugins={[Autoplay({ delay: 2000 })]}>
        <CarouselContent>
          {logos.map((logo) => (
            <CarouselItem
              className="basis-[20%] mr-12 flex items-center"
              key={logo.src}
            >
              <Link href={logo.href}>
                <Image
                  width={140}
                  height={120}
                  alt="logo"
                  objectFit="contain"
                  src={logo.src}
                />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Technologies;
