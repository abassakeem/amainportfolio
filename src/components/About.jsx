import React from "react";
// Importing a named export from the module
import { Tilt } from '/node_modules/.vite/deps/react-tilt.js';
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { services } from "../constants";

const ServiceCard = ({index, title, icon}) => {
  return(
  <Tilt className='xs:w-[250px] w-full'>
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className='w-full  p-[1px] rounded-[20px] technologies-card'
  >
    <div
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className=' rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
    >
      <img
        src={icon}
        alt='web-development'
        className='w-16 h-16 object-contain'
      />

      <h3 className='text-black text-[20px] font-bold text-center'>
        {title}
      </h3>
    </div>
  </motion.div>
</Tilt>
  )
}
const About=()=> {
  return (
    <><motion.div variants={textVariant()}>
      
    <p className={styles.sectionSubText}>Introduction</p>
    <h2 className={styles.sectionHeadText}>Overview.</h2>
  </motion.div>
  <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

       <div className='mt-20 flex flex-wrap justify-center items-center gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
  
  </>

  )
}
export default SectionWrapper(About, "about");