import Image from "next/image";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import avatarImage from "../assets/images/avatar3.jpg";
import Link from "next/link";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
};

export default function Hero({  }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, The Name's Arash Hosseini`,
      "Guy-who-love-Coffee.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
        <Image
          className="relative rounded-full mx-auto"
          src={avatarImage.src}
          alt=""
          width={128}
          height={128}
          objectFit="cover"
        />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
        software engineer
        </h2>
        <h1 className="text-2xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#FF821E" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
