import React from "react";
import Projects from "./Projects";
import Netflix from "../assets/images/netflix.png";
import Instagram from '../assets/images/Instagram.png'
import Spotify from '../assets/images/Spotify.png'
import Facebook from '../assets/images/Facebook.png'
import Medium from '../assets/images/Medium.png'
import Portfolio from '../assets/images/Portfolio.png'
import Homacloud from '../assets/images/homacloud.png'
import Shopping from '../assets/images/shoesshopping.png'
import Turbo from '../assets/images/turbofarm.png'
import Retina from '../assets/images/retina2.svg'



import { motion } from "framer-motion";

type Props = {};

export default function Project({}: Props) {
  const technologies = {
    html:'https://cdn.sanity.io/images/7avre8mo/production/01f29ee7a80aaccf8598c7e2c1772a0bdb4a0675-2183x2500.svg',
    css:'https://cdn.sanity.io/images/7avre8mo/production/69d40c41866a27a49ca53e9f53a87f7c831198c6-2183x2500.svg',
    js:'https://cdn.sanity.io/images/7avre8mo/production/45d194929c0c1703cb4759faca00cc3db2ed25ab-2183x2500.svg',
    react:'https://cdn.sanity.io/images/7avre8mo/production/ac9e7bfe893c827d96f3a6f8f500f4d1464811c7-23x20.svg',
    redux:'https://cdn.sanity.io/images/7avre8mo/production/430ebc1ab060cffd0c2bc008ca5000e8d1efd724-256x244.svg',
    nextjs:'https://cdn.sanity.io/images/7avre8mo/production/d837b12ad881e0c45152bd1d9eace3fc1ebd9f9c-207x124.svg',
    TypeScript:'https://cdn.sanity.io/images/7avre8mo/production/2383515adbcd280bd637a25dd9b955611a48a14c-512x512.svg',
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

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 top-10">
          <Projects title="Netflix Clone" image={Netflix} number={1} demo="https://netflix.arashhosseini.ir" github="https://github.com/ArashH0sseini/netflix-clone-react"
            technology={[technologies.html,technologies.css,technologies.js,technologies.react,technologies.redux,technologies.nextjs, technologies.TailwindCss,technologies.TypeScript,technologies.Wordpress]} 
          />
           <Projects title="Facebook Clone" image={Facebook} number={2} demo="https://facebook.arashhosseini.ir" github="https://github.com/ArashH0sseini/facebook-clone-react"
            technology={[technologies.html,technologies.css,technologies.js,technologies.react,technologies.redux,technologies.nextjs, technologies.TailwindCss,technologies.TypeScript,technologies.Wordpress]} 
          />
          <Projects title="Spotify Clone" image={Spotify} number={3} demo="https://spotify.arashhosseini.ir" github="https://github.com/ArashH0sseini/spotify-clone-react"
            technology={[technologies.html,technologies.css,technologies.js,technologies.react,technologies.redux,technologies.nextjs, technologies.TailwindCss,technologies.TypeScript,technologies.Wordpress]} 
          />
          <Projects title="Instagram Clone" image={Instagram} number={4} demo="https://instagram.arashhosseini.ir" github="https://github.com/ArashH0sseini/instagram-clone-react"
            technology={[technologies.html,technologies.css,technologies.js,technologies.react,technologies.redux,technologies.nextjs, technologies.TailwindCss,technologies.TypeScript,technologies.Wordpress]} 
          />
          <Projects title="Medium Clone" image={Medium} number={5} demo="https://medium.arashhosseini.ir" github="https://github.com/ArashH0sseini/modern-portfolio-nextjs"
            technology={[technologies.html,technologies.css,technologies.js,technologies.react,technologies.redux,technologies.nextjs, technologies.TailwindCss,technologies.TypeScript,technologies.Wordpress]} 
          />
          <Projects title="Portfolio" image={Portfolio} number={6} demo="https://portfolio.arashhosseini.ir" github="https://github.com/ArashH0sseini/personalweb"
            technology={[technologies.html,technologies.css,technologies.js,technologies.react,technologies.redux,technologies.nextjs, technologies.TailwindCss,technologies.TypeScript,technologies.Wordpress]} 
          />
          <Projects title="HomaCloud.ai" image={Homacloud} number={7} demo="https://homacloud.ai" github=""
            technology={[technologies.html,technologies.css,technologies.js,technologies.react,technologies.redux,technologies.nextjs, technologies.TailwindCss,technologies.TypeScript,technologies.Wordpress]} 
          />
          <Projects title="Shoes Shopping" image={Shopping} number={8} demo="https://shoes-shopping.arashhosseini.ir" github="https://github.com/ArashH0sseini/shoes-shopping"
            technology={[technologies.html,technologies.css,technologies.js,technologies.react,technologies.redux,technologies.nextjs, technologies.TailwindCss,technologies.TypeScript,technologies.Wordpress]} 
          />
          <Projects title="Turbo.Farm" image={Turbo} number={9} demo="https://turbo.farm" github=""
            technology={[technologies.html,technologies.css,technologies.js,technologies.react,technologies.redux,technologies.nextjs, technologies.TailwindCss,technologies.TypeScript,technologies.Wordpress]} 
          />
          <Projects title="RetinaTech" image={Retina} number={10} demo="Retina.tech" github=""
            technology={[technologies.html,technologies.css,technologies.js,technologies.Bootstrap]} 
          />

      </div>

      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}
