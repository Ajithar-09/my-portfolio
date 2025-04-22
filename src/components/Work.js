import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import img1 from '../assets/portfolio-img1.png'
import img2 from '../assets/portfolio-img2.png'
import img3 from '../assets/portfolio-img3.png'

const Work = () => {
  return (
    <section id='work' className='py-10'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/* text */}
            <h2 className='h2 leading-tight text-accent'>My Latest <br /> Projects</h2>
            <p className='max-w-sm mb-16 lg:mb-0'>"Programming isn't about what you know; it's about what you can figure out." — Chris Pine</p>
            <div><button className='btn btn-sm'><a href='https://github.com/Ajithar-09?tab=repositories' >View all projects</a></button></div>
          </motion.div>
          {/* image */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-10'>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
              </div>
              {/* img */}
              <img src={img1} alt="" className='group-hover:scale-125 transition-all duration-500' />
              {/* pre-title */}
              <div className='absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Python</span>
              </div>
              {/* title */}
              <div className='absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'><a href="https://github.com/Ajithar-09/Medicinal_plant_identification.git">Medcinal Plant Identificaton </a></span>
              </div>
            </div>
          </motion.div>
          {/* image */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-10'>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
              </div>
              {/* img */}
              <img src={img2} alt="" className='group-hover:scale-125 transition-all duration-500' />
              {/* pre-title */}
              <div className='absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Python</span>
              </div>
              {/* title */}
              <div className='absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'><a href="https://github.com/Ajithar-09/Voice-Map-Navigation.git">Voice Map Navigation</a></span>
              </div>
            </div>
          </motion.div>
          {/* image */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-10'>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
              </div>
              {/* img */}
              <img src={img3} alt="" className='group-hover:scale-125 transition-all duration-500' />
              {/* pre-title */}
              <div className='absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Python/Yolo5</span>
              </div>
              {/* title */}
              <div className='absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'><a href="https://github.com/Ajithar-09/face-yolov5.git">Face Recognition Using YOLO5</a></span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-10'>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
              </div>
              {/* img */}
              <img src={img1} alt="" className='group-hover:scale-125 transition-all duration-500' />
              {/* pre-title */}
              <div className='absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Python</span>
              </div>
              {/* title */}
              <div className='absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'><a href="https://github.com/Ajithar-09/Movie_Recommended-System.git">Movie Recommended System</a></span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-10'>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
              </div>
              {/* img */}
              <img src={img2} alt="" className='group-hover:scale-125 transition-all duration-500' />
              {/* pre-title */}
              <div className='absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Python</span>
              </div>
              {/* title */}
              <div className='absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'><a href="https://github.com/Ajithar-09/Automatic-Time-Table-Generator-Project.git">Automatic Time Table Generator</a></span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section >);
};

export default Work;
