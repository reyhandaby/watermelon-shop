import React from 'react';
import Navbar from '../../components/navbar';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-green-50 to-white dark:from-green-900 dark:to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-6">
            About <span className="text-red-500">Watermelon</span> <span className="text-green-600">Shop</span>
          </h1>
          <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Your premier destination for the freshest and juiciest watermelons
          </p>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-red-500 rounded-full opacity-20 animate-pulse"></div>
                <Image
                  src="/assets/watermelon.png"
                  alt="Watermelon"
                  width={320}
                  height={320}
                  className="rounded-full shadow-xl"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                Founded in 2025, Watermelon Shop began with a simple mission: to provide the sweetest, juiciest watermelons to our community.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                What started as a small family business has grown into a beloved destination for watermelon enthusiasts across the country.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                We partner with sustainable farms to ensure our watermelons are not only delicious but also grown with care for the environment.
              </p>
              <Link href="/products" className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-medium transition-colors duration-200 inline-flex items-center">
                <span>Explore Our Products</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-green-50 dark:bg-green-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-center">
              <div className="bg-red-100 dark:bg-red-800 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500 dark:text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Quality</h3>
              <p className="text-gray-600 dark:text-gray-300">We never compromise on the quality of our watermelons, ensuring each one meets our high standards.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-center">
              <div className="bg-green-100 dark:bg-green-800 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Sustainability</h3>
              <p className="text-gray-600 dark:text-gray-300">We&apos;re committed to sustainable farming practices that protect our environment for future generations.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-center">
              <div className="bg-pink-100 dark:bg-pink-800 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500 dark:text-pink-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Community</h3>
              <p className="text-gray-600 dark:text-gray-300">We believe in building strong relationships with our customers, suppliers, and the communities we serve.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-green-100 dark:bg-green-800 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-green-500 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Reyhandra Abyonas</h3>
                <p className="text-red-500 font-medium mb-4">Founder & CEO</p>
                <p className="text-gray-600 dark:text-gray-300">With over 20 years of experience in the watermelon industry, John leads our company with passion and expertise.</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-red-100 dark:bg-red-800 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-red-500 dark:text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Ayu Lestari</h3>
                <p className="text-green-500 font-medium mb-4">Chief Marketing Officer</p>
                <p className="text-gray-600 dark:text-gray-300">Ayu Lestari is an expert in branding and customer engagement.</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-pink-100 dark:bg-pink-800 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-pink-500 dark:text-pink-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Budi Santoso</h3>
                <p className="text-pink-500 font-medium mb-4">Head of Operations</p>
                <p className="text-gray-600 dark:text-gray-300">Budi ensures smooth supply chain and top quality products.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
