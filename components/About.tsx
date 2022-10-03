import React from "react";
import { motion } from "framer-motion";
import avatarImage from "../assets/images/avatar4.jpg";
import Image from "next/image";

type Props = {};

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
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full overflow-hidden object-cover
        md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      >
        <Image src={avatarImage} alt="" />
      </motion.div>
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-3xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#f7ab0a]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          reprehenderit accusamus pariatur esse saepe perferendis inventore,
          neque harum praesentium, amet non cum consequatur! Ex nobis quibusdam
          consectetur temporibus illum deserunt officia adipisci! Corporis, ut
          repellat sunt voluptatum repellendus similique fuga nisi vel debitis
          quia laudantium in quibusdam, consequatur laboriosam laborum velit
          dicta, dolorum aspernatur? Quae minima nisi temporibus illum iure enim
          in, quam dolorum vel, amet libero ea debitis nemo.
        </p>
      </div>
    </motion.div>
  );
}
