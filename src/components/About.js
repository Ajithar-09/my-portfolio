import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })
  return <section id='about' className='' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center
      lg:gap-x-20 lg:gap-y-0 h-screen'>
        {/* img */}
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top rounded-lg'>
        </motion.div>
        {/* text */}
        <motion.div
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1'>
          <h2 className='h2 text-accent'>About me.</h2>
          <h3 className='h3 mb-4'>Software Engineer (AI & ML) skilled in Python, Machine Learning, Deep Learning, NLP, Computer Vision, Data Science, Full Stack Development, Cloud Deployment, and AI Model Optimization.</h3>
           <p className='mb-6'>AI & Data Science enthusiast passionate about solving real-world problems with cutting-edge technology. Skilled in Python, Deep Learning, and Full Stack Development. Focused on building intelligent, scalable solutions. A competitive cricketer who thrives on learning and innovation.</p>
          {/* stats */}
          
          <div className='flex gap-x-8 items-center'>
            <button className='btn btn-lg'>
            <a href="https://drive.google.com/file/d/1tpjqK6Lb1YbKnDtBgWXYRbKlFWpJFZ9k/view?usp=drive_link" className='text-gradient btn-link text-white additional-class'>Resume</a>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default About;
