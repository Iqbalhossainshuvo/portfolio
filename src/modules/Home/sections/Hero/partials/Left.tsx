import React from 'react'
import { motion } from 'framer-motion'
//
import Button from '@components/Button'
import { fadeUpSpring } from '@config/motion'
import AnimatedTextWord from '@components/motion/AnimatedTextWord'
import AnimatedTextCharacter from '@components/motion/AnimatedTextCherecter'


const Left = () => {
  return (
    <div  className='relative col-span-2 z-10 md:text-center lg:text-left !mt-[-20px]' >

        <img alt="" src="/images/glassify/blur-cyan-0.png" width="530" height="530" decoding="async" data-nimg="1" className="absolute bottom-full right-full -mr-72 -mb-56 opacity-50" />

        <div className='relative' >
            <AnimatedTextWord 
               text="Hi, my name is"
               className='text-lg text-slate-400'
            />
            
            <div>
               <AnimatedTextCharacter 
                  className='!font-medium !bg-clip-text !text-5xl !leading-normal md:!text-7xl md:!leading-[87px] !text-slate-300' 
                  text="Md.Iqbal Hossain." 
               />
               <AnimatedTextCharacter 
                  className='font-medium text-lg sm:text-lg tracking-normal md:text-lg text-slate-400 mt-1' 
                  text="Full stack developer | MERN Stack Developer | Software Developer" 
               />
               <AnimatedTextCharacter 
                  className='font-medium text-lg sm:text-lg tracking-normal md:text-lg text-slate-400 mt-1' 
                  text="SEO Expert | Digital Marketer | UI UX Designer | Graphic Designer | IT Specialist" 
               />
            </div>

            <div className='my-5 md:my-8 leading-7 text-slate-400 md:text-lg max-w-3xl' >
               <AnimatedTextWord 
                  text="Enthusiastic and detail-oriented web developer with 5 years of experience creating and implementing 
                  innovative web solutions. Proficient in front-end and back-end technologies, with a strong foundation in 
                  responsive design. Adept at collaborating with clients and cross-functional teams to drive project success.,"
               />
            </div>
        </div>

        <motion.div variants={fadeUpSpring}  initial="hidden" animate="visible" >
           <a  href='https://drive.google.com/file/d/1E9W4oXv0ARR1enRvRDHJ8c0Ifp1yVAM-/view?usp=sharing' target=" _blank" ><Button outlined > Dowanload My Resume</Button></a>
        </motion.div>
    
    </div>
  )
}

export default Left