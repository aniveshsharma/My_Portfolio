'use client';

import { assets, infoList, toolsData } from '@/assets/assets';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const About = () => {
  return (
    <motion.div
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-30"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      {/* Section Headings */}
      <motion.h4
        className="text-center mb-2 text-lg font-ovo"
        variants={fadeUp}
        custom={0}
      >
        Introduction
      </motion.h4>
      <motion.h2
        className="text-center text-5xl font-ovo"
        variants={fadeUp}
        custom={1}
      >
        About Me
      </motion.h2>

      {/* Main Section */}
      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        {/* Profile Image */}
        <motion.div
          className="flex-shrink-0"
          variants={fadeUp}
          custom={2}
        >
          <Image
            src={assets.user_image}
            alt="user"
            className="w-100 max-w-full rounded-3xl shadow-md"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div className="flex-1" variants={fadeUp} custom={3}>
          {/* Description */}
          <motion.p
            className="mb-10 max-w-2xl font-ovo"
            variants={fadeUp}
            custom={3.5}
          >
            Excited to begin my career journey as a Data Analyst, leveraging my analytical
            skills and knowledge gained through various institutions and self-learning.
            I am passionate about contributing to organizations by providing data-driven insights
            and innovative solutions. Eager to grow and develop in a dynamic environment,
            I am committed to supporting data-driven decision-making processes and delivering impactful results.
          </motion.p>

          {/* Info Cards (already animated individually) */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, title, description }, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="p-5 rounded-2xl border border-gray-100 shadow-sm 
                           hover:shadow-lg hover:shadow-gray-300 cursor-pointer 
                           hover:bg-gray-50 hover:-translate-y-1 hover:scale-105 
                           transition-all duration-500"
              >
                <Image src={icon} alt={title} className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
              </motion.li>
            ))}
          </ul>

          {/* Tools */}
          <motion.h4
            className="my-6 text-gray-700 font-Ovo"
            variants={fadeUp}
            custom={4.5}
          >
            Tools I use
          </motion.h4>
          <motion.ul
            className="flex items-center flex-wrap gap-3 sm:gap-5"
            variants={fadeUp}
            custom={5}
          >
            {toolsData.map((tool, index) => (
              <motion.li
                key={index}
                whileHover={{ y: -5, scale: 1.05 }}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer transition duration-500"
              >
                <Image src={tool} alt="tool" className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
