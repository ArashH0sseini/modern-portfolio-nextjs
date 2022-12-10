import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../typings";

type Props = {
};

export default function Skills({  }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row 
  max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0  mx-auto items-center"
    >
      <h3 className="absolute top-24 md:top-12 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 md:top-24 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for currennt profieciency
      </h3>

      <div className="grid grid-cols-4 md:grid-cols-6 gap-5 mt-20">
      <Skill title="Html5" progress={100} image="https://cdn.sanity.io/images/7avre8mo/production/01f29ee7a80aaccf8598c7e2c1772a0bdb4a0675-2183x2500.svg" />
      <Skill title="Css3" progress={100} image="https://cdn.sanity.io/images/7avre8mo/production/69d40c41866a27a49ca53e9f53a87f7c831198c6-2183x2500.svg" />
      <Skill title="Js" progress={85} image="https://cdn.sanity.io/images/7avre8mo/production/45d194929c0c1703cb4759faca00cc3db2ed25ab-2183x2500.svg" />
      <Skill title="React" progress={85} image="https://cdn.sanity.io/images/7avre8mo/production/ac9e7bfe893c827d96f3a6f8f500f4d1464811c7-23x20.svg" />
      <Skill title="Redux" progress={75} image="https://cdn.sanity.io/images/7avre8mo/production/430ebc1ab060cffd0c2bc008ca5000e8d1efd724-256x244.svg" />
      <Skill title="Nextjs" progress={65} image="https://cdn.sanity.io/images/7avre8mo/production/d837b12ad881e0c45152bd1d9eace3fc1ebd9f9c-207x124.svg" />
      <Skill title="TypeScript" progress={45} image="https://cdn.sanity.io/images/7avre8mo/production/2383515adbcd280bd637a25dd9b955611a48a14c-512x512.svg" />
      <Skill title="Tailwind Css" progress={100} image="https://cdn.sanity.io/images/7avre8mo/production/40eae5fc193aede15ac989f2e27cbda281684cdd-1000x1000.svg" />
      <Skill title="Bootstrap" progress={85} image="https://cdn.sanity.io/images/7avre8mo/production/bc804f31c56aaa93b2215a7980061adac375dc6e-512x408.svg" />
      <Skill title="Sass" progress={60} image="https://cdn.sanity.io/images/7avre8mo/production/8b02e1feaa7335f4899752cface1181aa7e0d1fe-548x411.svg" />
      <Skill title="Vuejs" progress={85} image="https://cdn.sanity.io/images/7avre8mo/production/296ebb961c996f6921a6b77908dd0066645384ce-262x227.svg" />
      <Skill title="ReactNative" progress={65} image="https://cdn.sanity.io/images/7avre8mo/production/5e99869304068000ce7f7f2f759e5a28b349b49f-798x854.png" />
      <Skill title="Flutter" progress={25} image="https://cdn.sanity.io/images/7avre8mo/production/73710e851cb637f8cf31469d286fe2f920dcba03-2014x2500.svg" />
      <Skill title="Dart" progress={40} image="https://cdn.sanity.io/images/7avre8mo/production/8b2bc314a7b13df80807ad147ea0c0a9fee61bdf-111x111.svg" />
      <Skill title="Nodejs" progress={45} image="https://cdn.sanity.io/images/7avre8mo/production/14fb2ee58e4afbc58fc7123e5228db7e3622555e-256x289.svg" />
      <Skill title="Wordpress" progress={65} image="https://cdn.sanity.io/images/7avre8mo/production/937ad31ff996f2f50340fb328942108ebf7af058-1185x1175.png" />
      {/* <Skill title="MongoDb" progress={35} image="https://cdn.sanity.io/images/7avre8mo/production/6e62b8aba28909db9e155f04fca0277300f6b9fd-532x584.png" /> */}
      {/* <Skill title="Firebase" progress={65} image="https://cdn.sanity.io/images/7avre8mo/production/ffb0e385df05be34398926a82ca85951815436e6-256x351.svg" /> */}
      {/* <Skill title="Sanity" progress={65} image="https://cdn.sanity.io/images/7avre8mo/production/ce26b35567d415c6c2364cd8ffa6ea7a60d1e402-512x512.png" /> */}

        {/* {skills?.slice(0, skills.length / 2).map((skill,index) => (
          <Skill key={index} skill={skill} />
        ))}

        {skills.slice(skills.length / 2, skills.length).map((skill,index) => (
          <Skill key={index} skill={skill} directionLeft />
        ))} */}
      </div>
    </motion.div>
  );
}
