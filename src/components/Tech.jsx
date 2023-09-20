import React from "react";
import { motion } from 'framer-motion';
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <motion.div
    initial={{
      opacity:0,
    }}
    whileInView={{
      opacity:1,
    }}
    transition={{
      duration:1,
      delay:0.7
    }}
    className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28 text-center' key={technology.name}>
          <img src={technology.icon} />
          <span>{technology.name}</span>
        </div>
      ))}
    </motion.div>
  );
};

export default SectionWrapper(Tech, "");
