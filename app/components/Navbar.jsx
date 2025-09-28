import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsScroll(window.scrollY > 50)
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Background image */}
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <Image src={assets.header_bg_color} alt='' className='w-full' />
      </div>

      <nav
        className={`fixed top-0 left-0 w-full px-5 lg:px-8 xl:px-[8%] py-4
        flex items-center justify-between z-50 transition-colors duration-300
        ${
          isScroll
            ? 'bg-white bg-opacity-30 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <a href='#top'>
          <Image src={assets.logo} alt='Logo' className='w-28 cursor-pointer mr-14' />
        </a>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll ? '' : 'bg-white shadow-sm bg-opacity-50'
          }`}
        >
          <li><a className='font-ovo' href='#top'>Home</a></li>
          <li><a className='font-ovo' href='#about'>About me</a></li>
          <li><a className='font-ovo' href='#services'>My Certification</a></li>
          <li><a className='font-ovo' href='#work'>My Work</a></li>
          <li><a className='font-ovo' href='#contact'>Contact me</a></li>
        </ul>

        {/* Right controls */}
        <div className='flex items-center gap-4'>
          <a
            href='#contact'
            className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4'
          >
            Contact
            <Image src={assets.arrow_icon} alt='' className='w-3 mt-1' />
          </a>

          <button className='block md:hidden ml-3' onClick={() => setMenuOpen(true)}>
            <Image src={assets.menu_black} alt='Open Menu' className='w-6' />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`fixed md:hidden flex-col gap-4 py-20 px-10 right-0 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-transform duration-500 transform ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className='absolute right-6 top-6' onClick={() => setMenuOpen(false)}>
            <Image src={assets.close_black} alt='Close Menu' className='w-5 cursor-pointer' />
          </div>
          <li><a className='font-ovo' href='#top' onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a className='font-ovo' href='#about' onClick={() => setMenuOpen(false)}>About me</a></li>
          <li><a className='font-ovo' href='#services' onClick={() => setMenuOpen(false)}>My Certification</a></li>
          <li><a className='font-ovo' href='#work' onClick={() => setMenuOpen(false)}>My Work</a></li>
          <li><a className='font-ovo' href='#contact' onClick={() => setMenuOpen(false)}>Contact me</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
