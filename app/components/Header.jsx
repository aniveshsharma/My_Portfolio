'use client';

import { motion } from 'framer-motion';
import { assets } from '@/assets/assets';
import React from 'react';
import Image from 'next/image';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Header = () => {
  return (
    <motion.div
      className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      {/* Profile Image */}
      <motion.div variants={fadeInUp} custom={1}>
        <Image
          src={assets.profile_img}
          alt="Profile Image"
          className="flex rounded-full w-48 h-48 object-cover mx-auto mb-auto"
          width={192}
          height={192}
        />
      </motion.div>

      {/* Greeting */}
      <motion.h3
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo justify-center"
        variants={fadeInUp}
        custom={2}
      >
        Hi, I'm Anivesh Kumar Sharma
        <Image
          src={assets.hand_icon}
          alt="Hand Icon"
          className="w-8"
          width={32}
          height={32}
        />
      </motion.h3>

      {/* Title */}
      <motion.h1
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
        variants={fadeInUp}
        custom={3}
      >
        Data Analytics and BCA Student
      </motion.h1>

      {/* Skill Summary */}
      <motion.p
        className="max-w-2xl mx-auto font-Ovo mt-4 text-gray-500"
        variants={fadeInUp}
        custom={4}
      >
        Python | MySQL | Pandas | NumPy | Matplotlib | Seaborn | Web Scraping <br />
        Hypothesis Testing | EDA | Excel | Power BI | Statistics
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 w-full"
        variants={fadeInUp}
        custom={5}
      >
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          Contact me
          <Image src={assets.right_arrow} alt="" width={16} height={16} />
        </motion.a>

        <motion.a
          href="/sample-resume.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          My Resume
          <Image src={assets.download_icon} alt="" width={16} height={16} />
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Header;
