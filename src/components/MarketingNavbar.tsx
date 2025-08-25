'use client'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import Search from './Search'

export default function MarketingNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="flex flex-col">
      <nav className="flex h-[80px] items-center justify-between bg-white px-44 py-4 shadow">
        <h1 className="text-xl font-bold">
          <Image src="/images/logo.png" alt="Logo" width={109} height={53} />
        </h1>

        {/* Mobile Hamburger Menu */}
        <div className="flex items-center md:hidden">
          <button onClick={toggleMobileMenu}>
            <span className="text-2xl">&#9776;</span> {/* Hamburger icon */}
          </button>
        </div>

        {/* Desktop Search */}
        <div className="hidden space-x-4 md:flex">
          <Search />
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} bg-black px-44 py-4 md:hidden`}>
        <a href="#features" className="block py-2 text-white">
          Our Services
        </a>
        <a href="#contact" className="block py-2 text-white">
          Jobs
        </a>
        <a href="#contact" className="block py-2 text-white">
          Training
        </a>
        <a href="#contact" className="block py-2 text-white">
          Projects
        </a>
        <a href="#contact" className="block py-2 text-white">
          Contact Us
        </a>
        <a href="#contact" className="block py-2 text-white">
          About Us
        </a>
      </div>

      <nav className="flex h-[65px] items-center justify-between bg-black px-44 py-0 shadow">
        {/* Desktop Menu */}
        <div className="hidden space-x-4 md:flex">
          <a href="#features" className="text-white hover:text-gray-900">
            Our Services
          </a>
          <a href="#contact" className="text-white hover:text-gray-900">
            Jobs
          </a>
          <a href="#contact" className="text-white hover:text-gray-900">
            Training
          </a>
          <a href="#contact" className="text-white hover:text-gray-900">
            Projects
          </a>
          <a href="#contact" className="text-white hover:text-gray-900">
            Contact Us
          </a>
          <a href="#contact" className="text-white hover:text-gray-900">
            About Us
          </a>
        </div>

        {/* Button with Chevron */}
        <button className="flex h-[65px] flex-row items-center justify-center space-x-4 border-b-4 border-b-[#E48E33] hover:cursor-pointer">
          <p className="text-white">Get a Free Quote</p>
          <ChevronRight color="#E48E33" />
        </button>
      </nav>
    </div>
  )
}
