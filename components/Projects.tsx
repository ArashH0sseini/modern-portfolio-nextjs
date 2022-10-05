import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full
  justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
          items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.div
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Image
                src="https://qph.cf2.quoracdn.net/main-qimg-5283cad0ab7b31213c9cce145b1081f1"
                width={602}
                height={353}
                alt=""
                objectFit="cover"
              />
            </motion.div>

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl font-semibold text-center">
                <span className="underline decoration-[#f7ab0a]/50">
                  Case Study {index + 1} of {projects.length}:
                </span>{" "}
                UPS clone
              </h4>

              <p className="text-lg text-justify md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                facilis nihil quibusdam explicabo perspiciatis alias eos
                distinctio nobis fugit sequi asperiores dignissimos molestias
                veritatis doloremque earum sed qui corrupti, reprehenderit
                quisquam magnam adipisci eveniet voluptate. Quam, sequi!
                Tenetur, doloremque. Nam sit, fugiat excepturi quia aspernatur
                debitis! Eum cupiditate perspiciatis cum?
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}
