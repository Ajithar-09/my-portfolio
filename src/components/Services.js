import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { BsArrowUpRight } from "react-icons/bs";
import services from '../assets/services.png';

const Services = () => {
  // Updated services array with actual links
  const services = [
    {
      name: 'iNTRODUCTION TO NoSQL DATABASES',
      description: 'Infosys',
      link: 'https://drive.google.com/file/d/1GzVS73gupjZvsrzWwJsIFcPuPw85mT6o/view?usp=drive_link',
      linkText: 'Learn more'
    },
    {
      name: 'PROGRAMMING USING JAVA',
      description: 'Infosys',
      link: 'https://drive.google.com/file/d/1lFIRNLYhZwJRi41ijVAHmjjm9F7WhM4y/view?usp=drive_link',
      linkText: 'Learn more'
    },
    {
      name: 'OBJECT ORIENTED PROGRAMMING USING PYTHON',
      description: 'Infosys',
      link: 'https://drive.google.com/file/d/1dfo44-D3XIjz49UKmkfSwbDostkpQ0Vr/view?usp=drive_link',
      linkText: 'Learn more'
    },
    {
      name: 'PROGRAMMING FUNDAMENTALS USING PYTHON',
      description: 'Infosys',
      link: 'https://drive.google.com/file/d/1Na2_KPsdE9P8-K99dQ16og6AFPIBNbfk/view?usp=drive_link',
      linkText: 'Learn more'
    },
    {
      name: 'INTRODUCTION TO MACHNE LEARNING',
      description: 'National Programme on Technology Enhanced Learning -IIT',
      link: 'https://drive.google.com/file/d/1OsFuQNnh0qTh6eHTQMekTNg8g-hLb9Q6/view?usp=drive_link',
      linkText: 'Learn more'
    },
    {
      name: 'DATA SCIENCE FOR ENGINEERS',
      description: 'National Programme on Technology Enhanced Learning -IIT',
      link: 'https://drive.google.com/file/d/1j67uF8pKiQsh3gT0yzvvyP_BacY2sRol/view?usp=drive_link',
      linkText: 'Learn more'
    },
    {
      name: 'Smart India Hackathon-2023',
      description: 'College level Winner.',
      link: '',
      linkText: 'Learn more'
    },
    {
      name: 'Machine Learning',
      description: 'Kaggle',
      link: 'https://drive.google.com/file/d/1Ze1SDBIAxevT76AGkSQkhtrB-aVyOo2D/view?usp=drive_link',
      linkText: 'Learn more'
    }
  ];

  return (
    <section id='services' className='py-10'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text & img */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 bg-no-repeat mix-blend-lighten mb-12 lg:bg-services lg:bg-bottom lg:mb-0'
          >
            <h2 className='h2 text-accent'>My Certifications</h2>
            
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            {/* service list */}
            <div>
              {
                services.map((service, idx) => {
                  const { name, description, link, linkText } = service;
                  return (
                    <div key={idx} className='border-b border-white/20 h-[120px] mb-[36px] flex'>
                      <div className='max-w-[476px]'>
                        <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                        <p className='font-secondary leading-tight'>{description}</p>
                      </div>
                      <div className='flex flex-col flex-1 items-end'>
                        <a className='btn w-9 h-9 mb-[42px] flex justify-center items-center' href={link} target="_blank" rel="noopener noreferrer">
                          <BsArrowUpRight />
                        </a>
                        <a href={link} className='text-gradient text-sm' target="_blank" rel="noopener noreferrer">
                          {linkText}
                        </a>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
