import React from 'react';
// images
import Image from '../assets/avatar.png'
// Icons
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
// Type animation
import { TypeAnimation } from 'react-type-animation'
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants'
// react-scroll
import { Link } from 'react-scroll';

const Banner = () => {
  return (
    <section id='home' className='min-h-[85vh] lg:min-h-[78vh] flex items-center'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
              Ajithar<span>A</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[36px] lg:text-[60px] font-semibold uppercase leading-[1]'>
              <span className='mr-4 text-white'>I am a</span>
              <TypeAnimation
                sequence={[' Software Engineer', 2000]}
                speed={50}
                className='text-accent'
                repeat={Infinity}
                wrapper='span'
              />
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-8 max-w-lg mx-auto lg:mx-0'>
              Crafting the Future with AI & ML Technology.
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <Link to="contact" smooth={true} duration={500}>
                <button className='btn btn-lg'>Contact me</button>
              </Link>
            </motion.div>
            {/* socials */}
            <motion.div
              variants={fadeIn('up', 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href="https://www.linkedin.com/in/ajithar-a-/">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Ajithar-09">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/a_j_i_t_h_a_r/">
                <FaInstagram />
              </a>
            </motion.div>
          </div>
          {/* Image */}
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial='hidden'
            whileInView={'show'}
            className='hidden lg:flex flex-1 max-w-[320px] lg:mx-w-[482px]'
            style={{ borderRadius: '70px', overflow: 'hidden' }}>
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
