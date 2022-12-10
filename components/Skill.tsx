/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import sanityLogo from "../assets/images/sanity.png";
import { Skill as SkillType } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  directionLeft?: boolean;
};

export default function Skill({ directionLeft }: Props) {
  return (
    <motion.div
    initial={{
      x: directionLeft ? -200 : 200,
    }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, x: 0 }}
    className="group relative flex cursor-pointer rounded-full border border-gray-500">
      {/* <img
        className="object-fill p-6 w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 
        filter group-hover:grayscale transition
        duration-300 ease-in-out"
        src={}
        alt=""
      /> */}
        {/* <Image src={urlFor(skill.image).url()} alt="" className="" /> */}
      {/* </motion.div> */}
      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 
      md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0"
      >
        <div className="flex justify-center items-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">50%</p>
        </div>
      </div>
    </motion.div>
  );
}
