import Image from "next/image";
import React from "react";
import Retina from "../assets/images/retina.jpg";
import { motion } from "framer-motion";
import jsLogo from "../assets/images/javascript.svg";
import cssLogo from "../assets/images/css.svg";
import htmlLogo from "../assets/images/html.svg";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience:Experience
};

export default function ExperienceCard({experience}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 w-[500px]
     md:w-[400px] xl:w-[600px] snap-center bg-[#292929] py-5 opacity-40 hover:opacity-100
    cursor-pointer transition-opacity duration-200 overflow-hidden xl:mt-28"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-28 h-28 overflow-hidden xl:w-[150px] xl:h-[150px] object-contain object-center"
        src={urlFor(experience?.companyImage).url()}
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light">{experience?.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience?.company}</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <Image
            key={technology._id}
            src={urlFor(technology.image).url()}
            alt=""
            width={40}
            height={40}
          />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(experience.dateStarted).toDateString()} - {" "}
          {experience.isCurrentlyWorkingHere?'peresent':new Date(experience.dateEnded).toDateString()}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg max-h-40 pr-5 overflow-y-scroll">
          {experience.points.map((point,i)=>(<li className="break-words w-60" key={i}>{point}</li>))}
        </ul>
      </div>
    </article>
  );
}
