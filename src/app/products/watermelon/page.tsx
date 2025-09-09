'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Navbar from '../../../components/navbar';
import Image from 'next/image';
import Link from 'next/link';

function WatermelonProductClient() {
  const searchParams = useSearchParams();
  const varietyParam = searchParams.get('variety');
  
  const varieties = {
    seedless: {
      name: 'Seedless Watermelon',
      price: 15.99,
      description: 'Sweet and juicy seedless watermelon, perfect for easy eating.',
      features: ['No seeds', 'Extra sweet', 'Large size', 'Perfect for families']
    },
    mini: {
      name: 'Mini Watermelon',
      price: 8.99,
      description: 'Compact and convenient mini watermelon, ideal for small households.',
      features: ['Personal size', 'Sweet flavor', 'Easy to store', 'Quick to consume']
    },
    yellow: {
      name: 'Yellow Watermelon',
      price: 18.99,
      description: 'Unique yellow flesh watermelon with exceptional sweetness.',
      features: ['Yellow flesh', 'Exotic taste', 'High in vitamins', 'Conversation starter']
    },
    organic: {
      name: 'Organic Watermelon',
      price: 22.99,
      description: 'Certified organic watermelon grown without pesticides.',
      features: ['100% organic', 'Pesticide-free', 'Sustainable farming', 'Premium quality']
    }
  };

  const [selectedVariety, setSelectedVariety] = useState(varietyParam || 'seedless');
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    if (varietyParam && Object.keys(varieties).includes(varietyParam)) {
      setSelectedVariety(varietyParam);
    }
  }, [varietyParam]);

  const currentProduct = varieties[selectedVariety as keyof typeof varieties];
  const totalPrice = currentProduct ? currentProduct.price * quantity : 0;

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  if (!currentProduct) {
    return (
      <main className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <div className="pt-24 px-4 text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Product not found</h1>
          <Link href="/products" className="text-red-500 hover:text-red-600 mt-4 inline-block">
            Back to Products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      {/* Product Details */}
      <section className="pt-24 pb-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <li><Link href="/" className="hover:text-red-500">Home</Link></li>
              <li><span>/</span></li>
              <li><Link href="/products" className="hover:text-red-500">Products</Link></li>
              <li><span>/</span></li>
              <li className="text-gray-900 dark:text-white">Watermelon</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="flex justify-center">
              <div className="relative w-96 h-96">
                <Image
                  src="/assets/watermelon.png"
                  alt={currentProduct.name}
                  width={384}
                  height={384}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {currentProduct.name}
                </h1>
                <p className="text-2xl font-semibold text-red-500">
                  ${currentProduct.price.toFixed(2)}
                </p>
              </div>

              <p className="text-lg text-gray-600 dark:text-gray-300">
                {currentProduct.description}
              </p>

              {/* Features */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Features:</h3>
                <ul className="space-y-2">
                  {currentProduct.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Variety Selection */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Select Variety:</h3>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(varieties).map(([key, variety]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedVariety(key)}
                      className={`p-3 rounded-lg border-2 text-left transition-colors duration-200 ${
                        selectedVariety === key
                          ? 'border-red-500 bg-red-50 dark:bg-red-900'
                          : 'border-gray-200 dark:border-gray-700 hover:border-red-300'
                      }`}
                    >
                      <div className="font-medium text-gray-900 dark:text-white">{variety.name}</div>
                      <div className="text-sm text-red-500">${variety.price.toFixed(2)}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Quantity:</h3>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={decrementQuantity}
                      className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    </button>
                    <span className="text-xl font-semibold text-gray-900 dark:text-white w-8 text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={incrementQuantity}
                      className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">Total:</span>
                    <span className="text-2xl font-bold text-red-500">${totalPrice.toFixed(2)}</span>
                  </div>
                  
                  <button
                    onClick={handleAddToCart}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                      addedToCart
                        ? 'bg-green-500 text-white'
                        : 'bg-red-500 hover:bg-red-600 text-white'
                    }`}
                  >
                    {addedToCart ? 'Added to Cart!' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(varieties)
              .filter(([key]) => key !== selectedVariety)
              .slice(0, 3)
              .map(([key, variety]) => (
                <div key={key} className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/assets/watermelon.png"
                      alt={variety.name}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {variety.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {variety.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-red-500">
                        ${variety.price.toFixed(2)}
                      </span>
                      <button
                        onClick={() => setSelectedVariety(key)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors duration-200"
                      >
                        Select
                      </button>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </main>
  );
}

export default function WatermelonProductPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <div className="pt-24 px-4 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300">Loading product...</p>
        </div>
      </main>
    }>
      <WatermelonProductClient />
    </Suspense>
  );
}