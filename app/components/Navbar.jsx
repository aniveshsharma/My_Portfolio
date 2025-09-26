import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false)
  const sideMenuRef = useRef(null)

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(0)'
    }
  }

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(100%)'
    }
  }

  useEffect(() => {
    const onScroll = () => {
      setIsScroll(window.scrollY > 50)
    }

    window.addEventListener('scroll', onScroll)

    // Cleanup event listener on unmount
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Background image behind navbar */}
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
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "": "bg-white shadow-sm bg-opacity-50"}`}>
          <li>
            <a className='font-ovo' href='#top'>
              Home
            </a>
          </li>
          <li>
            <a className='font-ovo' href='#about'>
              About me
            </a>
          </li>
          <li>
            <a className='font-ovo' href='#services'>
              Services
            </a>
          </li>
          <li>
            <a className='font-ovo' href='#work'>
              My Work
            </a>
          </li>
          <li>
            <a className='font-ovo' href='#contact'>
              Contact me
            </a>
          </li>
        </ul>

        {/* Right controls */}
        <div className='flex items-center gap-4'>
          {/*<button>
            <Image src={assets.moon_icon} alt='' className='w-6' />
          </button>*/}

          <a
            href='#contact'
            className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4'
          >
            Contact
            <Image src={assets.arrow_icon} alt='' className='w-3 mt-1' />
          </a>

          <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image src={assets.menu_black} alt='' className='w-6' />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className='flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 right-0 w-64 z-50 h-screen bg-rose-50 transition-transform duration-500 transform translate-x-full'
        >
          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image src={assets.close_black} alt='' className='w-5 cursor-pointer' />
          </div>
          <li>
            <a className='font-ovo' onClick={closeMenu} href='#top'>
              Home
            </a>
          </li>
          <li>
            <a className='font-ovo' onClick={closeMenu} href='#about'>
              About me
            </a>
          </li>
          <li>
            <a className='font-ovo' onClick={closeMenu} href='#services'>
              Services
            </a>
          </li>
          <li>
            <a className='font-ovo' onClick={closeMenu} href='#work'>
              My Work
            </a>
          </li>
          <li>
            <a className='font-ovo' onClick={closeMenu} href='#contact'>
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
