import React from 'react'
import Link from "next/link";
import Image from "next/image";

const EducationSection = () => {
  return (
    <div id="about">
      <h1 className="text-center text-[26px] my-4 tracking-wider">
        My Education
      </h1>

      <h3 className="bg-clip-text bg-gradient-to-r from-pink-700 via-purple-600 to-sky-600 text-transparent text-center text-5xl  font-semibold p-2">
        Continuous improvement.
      </h3>
      <div className="my-6  rounded-lg   ">
        <div className="overflow-hidden flex flex-col justify-center h-full shadow-md shadow-gray-200  rounded-lg ">
          <div className="w-full h-[200px] relative p-4 mb-4 dark:bg-white/20 ">
            <Image
              alt="knust logo"
              objectFit="contain"
              src="/knust_logo.png"
              fill
            />
          </div>
          <div className="p-6">
            <div className="flex gap-6 items-center">
              <p className="text-3xl font-semibold inline ">
                Bachelor of Science Degree - Computer Science
              </p>
              <ul className=" list-inside list-disc ">
                <li className="text-xl">2023</li>
              </ul>
            </div>

            <p className="my-6 text-xl">
              In November 2023, I graduated from the Kwame Nkrumah University of
              Science and Technology with a first class(Hons.) degree in
              Computer Science, a testament to my hardwork and perseverance.{" "}
            </p>
          </div>
        </div>
        <div className="  p-4  flex justify-around mt-6 gap-4 rounded-lg">
          <div className=" w-full min-h-full rounded  shadow-md shadow-gray-200 max-w-[600px]">
            <div className="w-full h-[200px] relative mb-4">
              <Image
                alt="microsoft logo"
                objectFit="cover"
                src="/microsoft.png"
                fill
              />
            </div>
            <div className="p-6">
              <div className="flex gap-6 items-center">
                <p className=" text-2xl  font-semibold">
                  Microsoft Technology Associate
                </p>
                <ul className=" list-inside list-disc ">
                  <li className="text-xl">2020</li>
                </ul>
              </div>
              <p className=" mt-6 text-xl">
                Software Development Fundamentals. Verify at{" "}
                <Link
                  className="text-fuchsia-600"
                  href="https://verify.certiport.com"
                  target="_blank"
                >
                  verify.certiport.com
                </Link>
                . Verification code : 29n4-XLJ2
              </p>
            </div>
          </div>
          <div className=" w-full rounded-lg text-xl shadow-md shadow-gray-200 max-w-[600px]">
            <div className="w-full h-[250px] relative mb-4">
              <Image
                alt="codewithmosh logo"
                src="/codewithmoshlogo.jpeg"
                objectFit="cover"
                fill
              />
            </div>
            <div className="p-6">
              <div className="flex gap-6 items-center">
                <p className=" text-2xl  font-semibold">Codewithmosh.com</p>
                <ul className=" list-inside list-disc ">
                  <li className="text-xl">Always</li>
                </ul>
              </div>
              <ul className="list-inside list-disc">
                <li className="my-2">Ultimate JavaScript Part 1</li>
                <li className="my-2">React for Beginners</li>
                <li className="my-2">React: Intermediate Topics</li>
                <li className="my-2">The Ultimate React Native Series</li>
                <li className="my-2">The Ultimate Redux Course</li>
              </ul>
              <p>and counting...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationSection