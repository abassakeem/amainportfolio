import React from 'react'
import Tech from './Tech';
import Contact from './Contact';
import { motion } from 'framer-motion';
import About from './About';
import ComputersCanvas from './canvas/Computers';


const Section = (props) => {
  const {children} = props;
  return (
  <motion.section className={`h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-column items-start justify-center`}
  initial={{
    opacity:0,
    y:50,

  }}
  whileInView={{
    opacity:1,
    y:0,
    transition:{
      duration:1,
      delay:0.6

    }
  }}
  
  >
    {children}
  </motion.section>)

}

export default function Interface() {
  return (
    <div className='flex flex-col items-center w-screen'>
    
    <IntroSection/>
    <SubIntroSection/>
    <SkillsSection/>
    <Section>
        <h1>Projects</h1>
      </Section>
      <ContactSection />
        
    </div>
  )
}


const IntroSection = () => {
  return(
  <Section>
    <div class="flex">
    <div class="w-1/2 p-4">
    <h1 className='text-6xl font-extrabold leading-snug'>Hi, I'm
    <br />
    <span className="bg-white px-1 italic">Lanre-Abass Akeem</span>
    </h1>
    <motion.p className='text-lg text-gray-600 mt-4'
     initial={{
      opacity:0,
      y:25,
    
    }}
    whileInView={{
      opacity:1,
      delay:1.5,
    }}
    transition={{
      duration:1,
    delay:1.5
  }}
    
    > I develop sexy webpages using react 
    <br/>
    ...sometimes i use three js ;)
    </motion.p>
    <motion.button
     initial={{
      opacity:0,
      y:25,
    
    }}
    whileInView={{
      opacity:1,
      y:0,
    }}
    transition={{
      duration:1,
    delay:2
  }}
    className={`bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16`}> Contact me </motion.button>
     </div>
     <div class="w-1/2">
    <ComputersCanvas/>
    </div>
</div>
  </Section>
  )
}



const SubIntroSection = () => {
  return(
  <Section>
   <About/>
  </Section>
  )
}
const SkillsSection = () => {
  return(
  <Section>
   <Tech/>
  </Section>
  )
}
const ProjectsSection = () => {
  return(
  <Section>
   <Tech/>
  </Section>
  )
}



const ContactSection = () => {
  return(
  <Section>
   <Contact/>
  </Section>
  )
}



