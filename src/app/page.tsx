'use client';
import React from 'react';
import Navbar from '../components/navbar';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-green-50 to-white dark:from-green-900 dark:to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Welcome to <span className="text-red-500">Watermelon</span> <span className="text-green-600">Shop</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Fresh, Juicy, and Delicious Watermelons Year-Round
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-10">
                We are dedicated to providing the sweetest and most refreshing watermelons 
                sourced from sustainable farms across the country.
              </p>
              <Link href="/products" className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-medium transition-colors duration-200 flex items-center">
                <span>Explore Our Products</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <Image
                  src="/assets/watermelon.png"
                  alt="Watermelon"
                  width={320}
                  height={320}
                  className="rounded-full shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            About <span className="text-red-500">Watermelon</span> <span className="text-green-600">Shop</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Founded in 2010, Watermelon Shop has been the premier destination for watermelon lovers. 
                Our mission is to provide the juiciest, sweetest watermelons while promoting sustainable 
                farming practices.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                We work directly with farmers who share our passion for quality and sustainability. 
                Every watermelon in our shop is carefully selected to ensure the best taste and freshness.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                At Watermelon Shop, we believe that a perfect watermelon can brighten anyone's day. 
                That's why we're committed to delivering excellence in every slice.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-3">Our Vision</h3>
                <p className="text-gray-600 dark:text-gray-300">To be the most trusted source of premium watermelons nationwide.</p>
              </div>
              <div className="bg-red-50 dark:bg-red-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-red-700 dark:text-red-300 mb-3">Our Mission</h3>
                <p className="text-gray-600 dark:text-gray-300">To deliver joy through perfect watermelons while supporting sustainable farming.</p>
              </div>
              <div className="bg-pink-50 dark:bg-pink-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-pink-700 dark:text-pink-300 mb-3">Quality Promise</h3>
                <p className="text-gray-600 dark:text-gray-300">Every watermelon is hand-selected for sweetness, juiciness, and ripeness.</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-3">Sustainability</h3>
                <p className="text-gray-600 dark:text-gray-300">We support eco-friendly farming practices and minimal waste packaging.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-green-50 dark:bg-green-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Why Choose Our Watermelons?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-center">
              <div className="bg-red-100 dark:bg-red-800 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500 dark:text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Premium Quality</h3>
              <p className="text-gray-600 dark:text-gray-300">Our watermelons are sourced from the best farms and hand-selected for perfect ripeness.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-center">
              <div className="bg-green-100 dark:bg-green-800 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Variety</h3>
              <p className="text-gray-600 dark:text-gray-300">We offer multiple varieties of watermelons to suit every taste preference.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-center">
              <div className="bg-pink-100 dark:bg-pink-800 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500 dark:text-pink-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Sustainable</h3>
              <p className="text-gray-600 dark:text-gray-300">We partner with eco-friendly farms and use minimal packaging to reduce our environmental impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 dark:text-red-400 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Address</h4>
                    <p className="text-gray-600 dark:text-gray-300">Jl. Semangka No. 123, Jakarta, Indonesia</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 dark:text-red-400 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-300">(+62) 8123-4567-890</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 dark:text-red-400 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300">info@watermelonshop.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 dark:text-red-400 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Hours</h4>
                    <p className="text-gray-600 dark:text-gray-300">Monday - Friday: 9am - 6pm</p>
                    <p className="text-gray-600 dark:text-gray-300">Saturday: 10am - 4pm</p>
                    <p className="text-gray-600 dark:text-gray-300">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-green-50 dark:bg-green-900 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-red-500 focus:border-red-500 dark:bg-gray-800 dark:text-white" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-red-500 focus:border-red-500 dark:bg-gray-800 dark:text-white" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-red-500 focus:border-red-500 dark:bg-gray-800 dark:text-white"></textarea>
                </div>
                <button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black py-8 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Watermelon Shop</h3>
              <p className="text-gray-400">Providing the juiciest watermelons since 2025.</p>
            </div>
            <div>
              <h4 className="text-lg font-medium text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200">Products</a></li>
                <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium text-white mb-4">Products</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200">Seedless Watermelon</a></li>
                <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200">Mini Watermelon</a></li>
                <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200">Yellow Watermelon</a></li>
                <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200">Organic Watermelon</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-center">
              © 2025 Watermelon Shop. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}