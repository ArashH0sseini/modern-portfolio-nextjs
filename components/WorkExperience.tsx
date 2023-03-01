import React, { useRef } from "react";
import {motion} from 'framer-motion'
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../typings";
import { useDraggable } from "react-use-draggable-scroll";


type Props = {
};

export default function WorkExperience({}: Props) {
  const ref: any = useRef();
  const { events } = useDraggable(ref);

  const technologies = {
      html:'https://cdn.sanity.io/images/7avre8mo/production/01f29ee7a80aaccf8598c7e2c1772a0bdb4a0675-2183x2500.svg',
      css:'https://cdn.sanity.io/images/7avre8mo/production/69d40c41866a27a49ca53e9f53a87f7c831198c6-2183x2500.svg',
      js:'https://cdn.sanity.io/images/7avre8mo/production/45d194929c0c1703cb4759faca00cc3db2ed25ab-2183x2500.svg',
      react:'https://cdn.sanity.io/images/7avre8mo/production/ac9e7bfe893c827d96f3a6f8f500f4d1464811c7-23x20.svg',
      redux:'https://cdn.sanity.io/images/7avre8mo/production/430ebc1ab060cffd0c2bc008ca5000e8d1efd724-256x244.svg',
      nextjs:'https://cdn.sanity.io/images/7avre8mo/production/d837b12ad881e0c45152bd1d9eace3fc1ebd9f9c-207x124.svg',
      TypeScript:'https://cdn.sanity.io/images/7avre8mo/production/fd29d6f8b67afb457d22b9632474bf04c68a7d14-512x512.png',
      TailwindCss:'https://cdn.sanity.io/images/7avre8mo/production/40eae5fc193aede15ac989f2e27cbda281684cdd-1000x1000.svg',
      Bootstrap:'https://cdn.sanity.io/images/7avre8mo/production/bc804f31c56aaa93b2215a7980061adac375dc6e-512x408.svg',
      Sass:'https://cdn.sanity.io/images/7avre8mo/production/8b02e1feaa7335f4899752cface1181aa7e0d1fe-548x411.svg',
      Vuejs:'https://cdn.sanity.io/images/7avre8mo/production/296ebb961c996f6921a6b77908dd0066645384ce-262x227.svg',
      ReactNative:'"https://cdn.sanity.io/images/7avre8mo/production/5e99869304068000ce7f7f2f759e5a28b349b49f-798x854.png',
      Flutter:"https://cdn.sanity.io/images/7avre8mo/production/73710e851cb637f8cf31469d286fe2f920dcba03-2014x2500.svg" ,
      Dart:"https://cdn.sanity.io/images/7avre8mo/production/8b2bc314a7b13df80807ad147ea0c0a9fee61bdf-111x111.svg",
      Nodejs:"https://cdn.sanity.io/images/7avre8mo/production/14fb2ee58e4afbc58fc7123e5228db7e3622555e-256x289.svg",
      Wordpress:"https://cdn.sanity.io/images/7avre8mo/production/937ad31ff996f2f50340fb328942108ebf7af058-1185x1175.png",
      camtasia:'https://cdn.sanity.io/images/7avre8mo/production/6c5a55fc0fd57072c294e7fa769ae6f72a9ecf60-512x512.png',
      adobeconnect:'https://cdn.sanity.io/images/7avre8mo/production/d33a7f71c5741f6af2686fcbaa12c1f4936a98e0-513x500.svg',
      photoshop:'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg',
      aftereffects:'https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg',
      illustrator:'https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg',
      premiere:'https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg'
    }

    const points = {
      Teamwork:'Teamwork',
      Responsibility:'Responsibility',
      Market :'Familiarity with the labor market',
      Work:'Work commitment'
    }
  
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row 
      max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="mt-5 w-full flex space-x-5 overflow-x-scroll p-10"
        {...events}
        ref={ref}
      >
        <ExperienceCard title="Frontend Developer at HadidTech" 
        company="Hadidtech.inotex.com" 
        technology={[technologies.html,technologies.css,technologies.js,technologies.react,technologies.redux,technologies.nextjs, technologies.TailwindCss,technologies.TypeScript,technologies.Wordpress]} 
        date="2022-07-02 - PRESENT" 
        image="https://cdn.sanity.io/images/7avre8mo/production/7282deb58a216b4694aa754e2662e4ffb38fc2f1-679x509.png"
        points={[points.Teamwork,points.Work]}
        />

        <ExperienceCard title="Fronted Developer at RetinaTech" 
          company="Retina.tech" 
          technology={[technologies.html,technologies.css,technologies.js,technologies.Bootstrap]} 
          date="2022-07-02 - PRESENT" 
          image="https://cdn.sanity.io/images/7avre8mo/production/d2159df84c56016ebb47cf032543fb62c60c31e2-200x200.png"
          points={[points.Teamwork]}
         />

        <ExperienceCard title="Frontend Developer at Homacloud" 
        company="Homacloud.ai" 
        technology={[technologies.html,technologies.css,technologies.js,technologies.react,technologies.nextjs,technologies.TailwindCss,technologies.TypeScript,technologies.Wordpress]} 
        date="2022-07-02 - PRESENT" 
        image="https://cdn.sanity.io/images/7avre8mo/production/4dc5148056720837e2eb9448b2456ebb2c30ff8f-423x244.png"
        points={[points.Teamwork]}
         />
        
        <ExperienceCard title="Software support & Media Expert" 
        company="Eseminar.tv" 
        technology={[technologies.adobeconnect,technologies.camtasia,technologies.aftereffects]} 
        date="2019-03-25 - 2022-02-14" 
        image="https://cdn.sanity.io/images/7avre8mo/production/97d46b72cacb8d670af7c3468a7dac10711de829-512x512.png"
        points={[points.Teamwork]}
         />

        <ExperienceCard title="Wordpress Developer & Designer" 
        company="Freelancer" 
        technology={[technologies.html,technologies.css,technologies.js,technologies.TailwindCss,technologies.Wordpress,technologies.photoshop,technologies.illustrator,technologies.aftereffects,technologies.premiere]} 
        date="2019-03-25 - PRESENT" 
        image="https://cdn.sanity.io/images/7avre8mo/production/123fb8c21a8b3d8b939f04813250d3f2568b746a-300x223.png"
        points={[points.Responsibility,points.Market,points.Work]}
         />
      </div>
    </motion.div>
  );
}
