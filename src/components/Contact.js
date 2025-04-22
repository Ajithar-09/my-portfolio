import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {
  return (
    <section id='contact' className='py-16 lg:section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
              <h2 className='text-[45px] lg:text-[70px] leading-none mb-12'>
                Let's work
                <br />
                together
              </h2>
            </div>
          </motion.div>
          {/* details */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
            <p className='text-white'>
              <strong>Name:</strong> Ajithar A
            </p>
            <p className='text-white'>
              <strong>Address:</strong> 1/1 Sivaram Street Chinnamanur Theni
            </p>
            <p className='text-white'>
              <strong>Phone:</strong> 9944456535
            </p>
            <p className='text-white'>
              <strong>Age:</strong> 26
            </p>
            <p className='text-white'>
              <strong>Qualification:</strong> B.Tech in Artificial Intelligence 
            </p>
            <p className='text-white'>
              <strong>Email:</strong> ajitharmahes@gmail.com
            </p>
            <a href="mailto:ajitharmahes@gmail.com">
              <button className='btn btn-lg'>Connect with me</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
