'use client';

import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Work = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCardsCount, setVisibleCardsCount] = useState(3);

  // Responsive card count
  useEffect(() => {
    const updateCardCount = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleCardsCount(1);
      else if (width < 1024) setVisibleCardsCount(2);
      else setVisibleCardsCount(3);
    };

    updateCardCount();
    window.addEventListener('resize', updateCardCount);
    return () => window.removeEventListener('resize', updateCardCount);
  }, []);

  // Auto slide every 6s
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) =>
        prev + visibleCardsCount >= workData.length ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [visibleCardsCount]);

  const prevSlide = () => {
    setStartIndex((prev) =>
      prev === 0 ? workData.length - visibleCardsCount : prev - 1
    );
  };

  const nextSlide = () => {
    setStartIndex((prev) =>
      prev + visibleCardsCount >= workData.length ? 0 : prev + 1
    );
  };

  const visibleCards = [];
  for (let i = 0; i < visibleCardsCount; i++) {
    visibleCards.push(workData[(startIndex + i) % workData.length]);
  }

  return (
    <div id="work" className="w-full px-[6%] sm:px-[8%] lg:px-[12%] py-16 scroll-mt-20 relative">
      {/* Headings */}
      <h4 className="text-center mb-2 text-lg font-ovo">My Portfolio</h4>
      <h2 className="text-center text-5xl font-ovo">My Latest Work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        A showcase of the projects I’ve built with passion and purpose.
      </p>

      {/* Arrows */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-3 z-10 hover:bg-gray-200">
        <FaChevronLeft size={20} />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-3 z-10 hover:bg-gray-200">
        <FaChevronRight size={20} />
      </button>

      {/* Cards */}
      <div className="flex justify-center gap-6 overflow-hidden min-h-[400px]">
        <AnimatePresence initial={false}>
          {visibleCards.map((project, index) => (
            <motion.div
              key={`${project.title}-${startIndex + index}`}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="w-full sm:min-w-[48%] lg:min-w-[30%] h-96 bg-cover bg-center rounded-xl overflow-hidden shadow-lg relative group cursor-pointer"
              style={{ backgroundImage: `url(${project.bgImage})` }}
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-all duration-300 flex flex-col justify-between p-5 text-white">
                <div>
                  <h2 className="text-xl font-bold">{project.title}</h2>
                  <p className="text-sm">{project.description}</p>
                  <p className="text-sm">{project.language}</p>
                </div>
                <div className="flex justify-end">
                  <a
                    href={project.link || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-block"
                  >
                    <Image
                      src={assets.send_icon}
                      alt="Send Icon"
                      width={20}
                      height={20}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Show More */}
      <motion.a
        target="_blank"
        href="https://github.com/aniveshsharma"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: workData.length * 0.1 }}
        className="h-14 w-48 rounded-2xl border border-gray-300 shadow hover:shadow-xl hover:bg-lightHover hover:-translate-y-1 hover:scale-105 transition-all duration-500 flex items-center justify-center gap-2 mx-auto my-20 cursor-pointer font-medium"
      >
        See all...
        <Image src={assets.right_arrow_bold} alt="Right arrow" className="w-4 h-4" />
      </motion.a>
    </div>
  );
};

export default Work;
