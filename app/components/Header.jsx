import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        {/* Profile Image */}
        <Image
          src={assets.profile_img}
          alt="Profile Image"
          className="rounded-full w-32 mx-auto mb-4"
        />

        {/* Heading */}
        <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo justify-center">
          Hi, I'm Anivesh Kumar Sharma
          <Image
            src={assets.hand_icon}
            alt="Hand Icon"
            className="w-8"   // ✅ reduced size for better balance
          />
        </h3>

        {/* Title */}
        <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
          Data Analytics and BCA Student
        </h1>

        {/* Intro Paragraph */}
        <p className="max-w-2xl mx-auto font-Ovo mt-4 text-gray-500">
          Excited to begin my career journey as a Data Analyst, leveraging my analytical skills and
          knowledge gained through various institutions and self-learning. I am passionate about
          contributing to organizations by providing data-driven insights and innovative solutions.
          Eager to grow and develop in a dynamic environment, I am committed to supporting
          data-driven decision-making processes and delivering impactful results.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 w-full">
        <a
            href="#contact"
            className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
            Contact me
            <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </a>

        <a
            href="/sample-resume.pdf"
            download
            className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
            My Resume
            <Image src={assets.download_icon} alt="" className="w-4" />
        </a>
        </div>

      </div>
    </div>
  )
}

export default Header
