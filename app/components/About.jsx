import { assets, infoList, toolsData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion'


const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-30'>
      <h4 className='text-center mb-2 text-lg font-ovo'>
        Introduction
      </h4>
      <h2 className='text-center text-5xl font-ovo'>About Me</h2>
      <div className='flex w-full flex-col lg:flex-row item-center gap-20 my-20'>
        <div><Image src={assets.user_image} alt='user' className='w-100 rounded-3xl'/></div>
        <div className='flex-1'>
          <p className='mb-10 max-w-2xl font-ovo'>
            Excited to begin my career journey as a Data Analyst, leveraging my analytical skills and
            knowledge gained through various institutions and self-learning. I am passionate about
            contributing to organizations by providing data-driven insights and innovative solutions.
            Eager to grow and develop in a dynamic environment, I am committed to supporting
            data-driven decision-making processes and delivering impactful results.
          </p>
          {/* Info Cards (motion only) */}
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
          <h4 className='my-6 text-gray-700 font-Ovo'>
            Tools I use
          </h4>
          <ul className='flex item-center gap-3 sm:gap-5'>
            {toolsData.map((tool, index)=>(
              <li className="flex items-center justify-center w-12 sm:w-14 
                 aspect-square border border-gray-400 rounded-lg cursor-pointer
                 hover:translate-y-3 transition duration-500 transform"
               key={index}>
                <Image src={tool} alt='tool' className='w-5 sm:w-7'/>
              </li>
            ))}
            </ul>
        </div>
      </div>
    </div>
  )
}

export default About