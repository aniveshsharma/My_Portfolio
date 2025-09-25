import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      {/* Section Headings */}
      <h4 className="text-center mb-2 text-lg font-ovo">What I Offer</h4>
      <h2 className="text-center text-5xl font-ovo">My Services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        I am a Data Analyst Student
      </p>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
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
            <Image src={icon} alt={`${title} icon`} className="w-10" />
            <h3 className="text-lg my-4 text-gray-700 font-semibold">
              {title}
            </h3>
            <p className="text-sm text-gray-600 leading-5">{description}</p>
            <Link
              href={link}
              className="flex items-center gap-2 text-sm mt-5 text-blue-600 hover:underline"
              aria-label={`Read more about ${title}`}
            >
              Read more
              <Image
                src={assets.right_arrow}
                alt="Right arrow"
                className="w-4"
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Services
