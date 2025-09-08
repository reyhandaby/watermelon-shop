'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Remove scrollToSection, use Link navigation instead

  return (
<nav className="bg-white/10 backdrop-blur-md shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/assets/logo_semangka.png"
              alt="Logo"
              width={30}
              height={30}
              className="w-12 h-12 cursor-pointer"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              <Link href="/." className="text-white hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Home</Link>
              <Link href="/about" className="text-white hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">About</Link>
              <Link href="/products/watermelon" className="text-white hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Products</Link>
              <Link href="/team" className="text-white hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Team</Link>
              <Link href="/blog" className="text-white hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Blog List</Link>
            </div>
            {/* Contact Button */}
            <Link href="/contact" className="bg-red-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-600 transition-colors duration-200 flex items-center space-x-2">
              <span>Contact Us</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-md mt-2">
              <Link href="/." onClick={closeMenu} className="block w-full text-left text-gray-700 hover:text-red-500 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">Home</Link>
              <Link href="/about" onClick={closeMenu} className="block w-full text-left text-gray-700 hover:text-red-500 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">About</Link>
              <Link href="/products/watermelon" onClick={closeMenu} className="block w-full text-left text-gray-700 hover:text-red-500 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">Watermelon</Link>
              <Link href="/blog" onClick={closeMenu} className="block w-full text-left text-gray-700 hover:text-red-500 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">Blog</Link>
              <Link href="/team" onClick={closeMenu} className="block w-full text-left text-gray-700 hover:text-red-500 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">Team</Link>
              <Link href="/contact" onClick={closeMenu} className="block w-full text-left bg-red-500 text-white hover:bg-red-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 flex items-center justify-between">
                <span>Contact</span>
                <Image
                  src="/assets/arrow-icon.png"
                  alt="Arrow Icon"
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
