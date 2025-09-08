
import React from 'react';
import Navbar from '../../components/navbar';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Reyhandra Abyonas',
    role: 'CEO & Founder',
    image: '/assets/reyhan.png',
    bio: 'Visionary leader with a passion for fresh produce and innovation.'
  },
  {
    name: 'Ayu Lestari',
    role: 'Chief Marketing Officer',
    image: '/assets/ayu.png',
    bio: 'Expert in branding and customer engagement.'
  },
  {
    name: 'Budi Santoso',
    role: 'Head of Operations',
    image: '/assets/budi.png',
    bio: 'Ensures smooth supply chain and top quality products.'
  },
];

export default function Team() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <section className="pt-24 pb-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-green-50 to-white dark:from-green-900 dark:to-gray-900">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Watermelon Team</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">A team of professionals dedicated to providing you with the best watermelons.</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col items-center transition-transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="w-32 h-32 mb-4 relative rounded-full overflow-hidden border-4 border-green-200 dark:border-green-700">
                <Image src={member.image} alt={member.name} fill style={{objectFit:'cover'}} sizes="128px" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{member.name}</h3>
              <p className="text-green-600 dark:text-green-300 font-medium mb-2">{member.role}</p>
              <p className="text-gray-500 dark:text-gray-300 text-sm text-center">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
