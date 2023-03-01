/* eslint-disable @next/next/no-img-element */
import Image, { StaticImageData } from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  title: string;
  image: StaticImageData;
  number: number;
  demo: string;
  github: string;
  technology: string[];
};

export default function Projects({
  title,
  image,
  number,
  demo,
  github,
  technology,
}: Props) {
  return (
    <div
      className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
    items-center justify-center p-20 md:p-44 h-screen"
    >
      <motion.img
        initial={{ y: -300, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src={image.src}
        alt=""
        className="w-[700px] object-cover"
      />
      <div className="px-0 md:px-10 max-w-6xl space-x-4">
        <h4 className="text-2xl font-semibold text-center">
          <span className="underline decoration-[#FF821E]/50 tracking-[3px]">
            Case Study {number} of 10:
          </span>{" "}
          <span className="tracking-[3px]">{title}</span>
        </h4>

        <div className="flex gap-1 md:gap-2 my-6 justify-center items-center">
          {technology.map((tech, index) => (
            <Image key={index} src={tech} alt="" width={40} height={40} />
          ))}
        </div>

        <Link href={demo}>
          <a target="_blank">
            <button className="w-[45%] border-2 px-6 py-4 rounded-full border-[#FF821E]/40 hover:bg-[#FF821E]/80 hover:border-0">
              Demo
            </button>
          </a>
        </Link>
        <Link href={github}>
          <a target="_blank">
            <button className="w-[45%] border-2 px-6 py-4 rounded-full border-[#FF821E]/40 hover:bg-[#FF821E]/80 hover:border-0">
              Github
            </button>
          </a>
        </Link>

        <p className="text-lg text-justify md:text-left"></p>
      </div>
    </div>
  );
}
