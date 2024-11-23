"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import CatchPhrase from "./CatchPhrase";
import PreCatch from './PreCatch';
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
     
    <PreCatch message="This Portfolio"/>
        
      <CatchPhrase phrase="Libraries | Frameworks | API Integrations"/>
      <Carousel
        className=" dark:backdrop-brightness-150 rounded-md mt-10 lg:pt-4 py-10"
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 2000 })]}
      >
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
