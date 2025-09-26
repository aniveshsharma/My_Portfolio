'use client';

import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Work = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Check scroll position to toggle arrows
  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    }
  };

  // Scroll handler
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -clientWidth : clientWidth,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) el.addEventListener('scroll', checkScroll);
    return () => el && el.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20 relative">
      {/* Section Headings */}
      <h4 className="text-center mb-2 text-lg font-ovo">My Portfolio</h4>
      <h2 className="text-center text-5xl font-ovo">My Latest Work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        A showcase of the projects I’ve built with passion and purpose.
      </p>

      {/* Arrow Buttons */}
      {canScrollLeft && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-3 z-10 hover:bg-gray-200"
        >
          <FaChevronLeft size={20} />
        </button>
      )}
      {canScrollRight && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-3 z-10 hover:bg-gray-200"
        >
          <FaChevronRight size={20} />
        </button>
      )}

      {/* Scrollable Projects (no vertical scroll) */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-scroll overflow-y-hidden scrollbar-hide snap-x snap-mandatory"
      >
        {workData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="snap-center min-w-[200px] sm:min-w-[400px] h-80 bg-cover bg-center rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:shadow-gray-300 flex-shrink-0 relative group cursor-pointer"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-all duration-300 flex flex-col justify-between p-5 text-white">
              <div>
                <h2 className="text-xl font-bold">{project.title}</h2>
                <p className="text-sm">{project.description}</p>
              </div>
              <div className="flex justify-end">
                <Image
                  src={assets.send_icon}
                  alt="Send Icon"
                  width={20}
                  height={20}
                  className="transition-transform group-hover:translate-x-1"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Show More Button */}
      <motion.a
        href="#"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: workData.length * 0.15 }}
        className="
          h-14 w-48
          rounded-2xl
          border-[0.5px] border-gray-700
          shadow-sm
          hover:shadow-xl
          hover:bg-lightHover
          hover:-translate-y-1 hover:scale-105
          transition-all duration-500
          flex items-center justify-center gap-2
          mx-auto my-20
          cursor-pointer
        "
      >
        Show more
        <Image
          src={assets.right_arrow_bold}
          alt="Right arrow"
          className="w-4 h-4"
        />
      </motion.a>
    </div>
  );
};

export default Work;
