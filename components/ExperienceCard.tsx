import Image from "next/image";
import React from "react";
import Retina from "../assets/images/retina.jpg";
import { motion } from "framer-motion";
import jsLogo from "../assets/images/javascript.svg";
import cssLogo from "../assets/images/css.svg";
import htmlLogo from "../assets/images/html.svg";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px]
     md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100
    cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full overflow-hidden xl:w-[200px] xl:h-[200px] object-cover object-center"
      >
        <Image src={Retina} alt="" />
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light">Frontend Developer at Retina</h4>
        <p className="font-bold text-2xl mt-1">RetinaTech</p>
        <div className="flex space-x-2 my-2">
          <Image
            className="rounded-full"
            src={jsLogo}
            alt=""
            width={40}
            height={40}
          />
          <Image
            className="rounded-full"
            src={cssLogo}
            alt=""
            width={40}
            height={40}
          />
          <Image
            className="rounded-full"
            src={htmlLogo}
            alt=""
            width={40}
            height={40}
          />
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started work... - Ended...
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summery points</li>
          <li>Summery points</li>
          <li>Summery points</li>
          <li>Summery points</li>
        </ul>
      </div>
    </article>
  );
}
