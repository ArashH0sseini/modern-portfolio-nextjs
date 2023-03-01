import React from "react";
import { motion } from "framer-motion";
import avatarImage from "../assets/images/avatar4.jpg";
import Image from "next/image";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left
  md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="-mb-32 md:mb-0 flex-shrink-0 w-44 h-44 rounded-full overflow-hidden object-cover
        md:rounded-lg md:w-80 md:h-96 xl:w-[400px] xl:h-[400px]"
        src={avatarImage.src}
      />
        {/* <Image src={urlFor(pageInfo?.profilePic).url()} width={224} height={224} alt="" />
      </motion.div> */}
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-3xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#FF821E]/80">little</span>{" "}
          background
        </h4>
        <p className="text-base text-justify">
        I have an active and challenge-oriented personality, I am always one of the most active during my studies I was a student, I love active environments and I like content in the work environment To learn new things, value creation is my work goal and always for my goals I worked as hard as I could.
        </p>
      </div>
    </motion.div>
  );
}
