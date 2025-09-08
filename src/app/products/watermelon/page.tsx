'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '../../../components/navbar';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function WatermelonProduct() {
  const [quantity, setQuantity] = useState(1);
  const [selectedVariety, setSelectedVariety] = useState('seedless');
  const searchParams = useSearchParams();
  
  useEffect(() => {
    const varietyParam = searchParams.get('variety');
    if (varietyParam && Object.keys(varieties).includes(varietyParam)) {
      setSelectedVariety(varietyParam);
    }
  }, [searchParams]);
  
  const varieties = {
    seedless: {
      name: 'Seedless Watermelon',
      price: 8.99,
      description: 'Sweet and juicy seedless watermelon, perfect for easy eating.',
      features: ['No seeds', 'Sweet flavor', 'Crisp texture', 'Average weight: 15-20 lbs']
    },
    mini: {
      name: 'Mini Watermelon',
      price: 5.99,
      description: 'Perfectly sized personal watermelon with the same great taste.',
      features: ['Personal size', 'Sweet flavor', 'Convenient', 'Average weight: 3-5 lbs']
    },
    yellow: {
      name: 'Yellow Watermelon',
      price: 10.99,
      description: 'Unique yellow-fleshed watermelon with a honey-sweet flavor.',
      features: ['Yellow flesh', 'Honey-sweet taste', 'Conversation starter', 'Average weight: 12-18 lbs']
    },
    organic: {
      name: 'Organic Watermelon',
      price: 12.99,
      description: 'Certified organic watermelon grown without synthetic pesticides or fertilizers.',
      features: ['Certified organic', 'Environmentally friendly', 'No synthetic chemicals', 'Average weight: 15-22 lbs']
    }
  };
  
  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleVarietyChange = (variety) => {
    setSelectedVariety(variety);
  };

  const currentVariety = varieties[selectedVariety];
  const totalPrice = (currentVariety.price * quantity).toFixed(2);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-100 dark:bg-gray-800 py-2 px-4 md:px-8 lg:px-16 mt-20">
        <div className="max-w-6xl mx-auto">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <Link href="/products" className="ml-1 text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 md:ml-2">
                    Products
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-1 text-red-500 md:ml-2 font-medium">
                    Watermelon
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>


      {/* Product Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="flex justify-center items-center bg-green-50 dark:bg-green-900 rounded-lg p-8">
              <div className="relative w-full max-w-md aspect-square">
                <Image
                  src={`/assets/${selectedVariety}-watermelon.jpeg`}
                  alt={currentVariety.name}
                  width={500}
                  height={500}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Product Details */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {currentVariety.name}
              </h1>
              <div className="flex items-center mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <span className="text-gray-600 dark:text-gray-300 ml-3">(42 reviews)</span>
              </div>
              <p className="text-2xl font-bold text-red-500 dark:text-red-400 mb-4">
                ${currentVariety.price.toFixed(2)}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {currentVariety.description}
              </p>

              {/* Variety Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Variety</h3>
                <div className="grid grid-cols-2 gap-3">
                  {Object.keys(varieties).map((variety) => (
                    <button
                      key={variety}
                      onClick={() => handleVarietyChange(variety)}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${selectedVariety === variety ? 'bg-red-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}`}
                    >
                      {varieties[variety].name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Features</h3>
                <ul className="space-y-2">
                  {currentVariety.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Quantity</h3>
                <div className="flex items-center">
                  <button
                    onClick={decrementQuantity}
                    className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 px-3 py-1 rounded-l-md"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path>
                    </svg>
                  </button>
                  <span className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-1 w-12 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={incrementQuantity}
                    className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 px-3 py-1 rounded-r-md"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Total Price */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Total</h3>
                <p className="text-2xl font-bold text-red-500 dark:text-red-400">
                  ${totalPrice}
                </p>
              </div>

              {/* Add to Cart Button */}
              <button className="w-full bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200 flex items-center justify-center space-x-2 mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                <span>Add to Cart</span>
              </button>

              {/* Buy Now Button */}
              <button className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Description */}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-green-50 dark:bg-green-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Product Description</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Our {currentVariety.name.toLowerCase()} is carefully selected from the best farms to ensure optimal ripeness, juiciness, and sweetness. Each watermelon is hand-picked at the peak of its flavor profile to deliver the refreshing experience you expect from Watermelon Shop.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Watermelons are not only delicious but also packed with nutrients. They are an excellent source of vitamins A and C, and contain lycopene, an antioxidant that gives watermelon its red color and offers various health benefits.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Our watermelons are perfect for summer picnics, family gatherings, or as a refreshing snack on hot days. They can be enjoyed on their own, in fruit salads, or even in creative recipes like watermelon salsa or refreshing drinks.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Store your watermelon at room temperature until cut. Once cut, wrap tightly in plastic and refrigerate for up to 3-4 days for optimal freshness.
            </p>
          </div>
        </div>
      </section>

      {/* Nutritional Information */}
      <section className="py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Nutritional Information</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Nutrition Facts (per 100g)</h3>
                <table className="w-full">
                  <tbody>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2 text-gray-600 dark:text-gray-300">Calories</td>
                      <td className="py-2 text-gray-900 dark:text-white font-medium">30 kcal</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2 text-gray-600 dark:text-gray-300">Carbohydrates</td>
                      <td className="py-2 text-gray-900 dark:text-white font-medium">7.6 g</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2 text-gray-600 dark:text-gray-300">Sugars</td>
                      <td className="py-2 text-gray-900 dark:text-white font-medium">6.2 g</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2 text-gray-600 dark:text-gray-300">Dietary Fiber</td>
                      <td className="py-2 text-gray-900 dark:text-white font-medium">0.4 g</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2 text-gray-600 dark:text-gray-300">Fat</td>
                      <td className="py-2 text-gray-900 dark:text-white font-medium">0.2 g</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2 text-gray-600 dark:text-gray-300">Protein</td>
                      <td className="py-2 text-gray-900 dark:text-white font-medium">0.6 g</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-gray-600 dark:text-gray-300">Water</td>
                      <td className="py-2 text-gray-900 dark:text-white font-medium">91.5 g</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Vitamins & Minerals</h3>
                <table className="w-full">
                  <tbody>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2 text-gray-600 dark:text-gray-300">Vitamin A</td>
                      <td className="py-2 text-gray-900 dark:text-white font-medium">569 IU</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2 text-gray-600 dark:text-gray-300">Vitamin C</td>
                      <td className="py-2 text-gray-900 dark:text-white font-medium">8.1 mg</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2 text-gray-600 dark:text-gray-300">Potassium</td>
                      <td className="py-2 text-gray-900 dark:text-white font-medium">112 mg</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2 text-gray-600 dark:text-gray-300">Magnesium</td>
                      <td className="py-2 text-gray-900 dark:text-white font-medium">10 mg</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2 text-gray-600 dark:text-gray-300">Phosphorus</td>
                      <td className="py-2 text-gray-900 dark:text-white font-medium">11 mg</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2 text-gray-600 dark:text-gray-300">Calcium</td>
                      <td className="py-2 text-gray-900 dark:text-white font-medium">7 mg</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-gray-600 dark:text-gray-300">Iron</td>
                      <td className="py-2 text-gray-900 dark:text-white font-medium">0.2 mg</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                * Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on your calorie needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-green-50 dark:bg-green-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.keys(varieties)
              .filter(variety => variety !== selectedVariety)
              .map(variety => (
                <div key={variety} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                  <div className="p-4 bg-green-50 dark:bg-green-900">
                    <div className="relative w-full aspect-square">
                      <Image
                        src={`/assets/${variety}-watermelon.jpeg`}
                        alt={varieties[variety].name}
                        width={200}
                        height={200}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{varieties[variety].name}</h3>
                    <p className="text-red-500 dark:text-red-400 font-bold mb-3">${varieties[variety].price.toFixed(2)}</p>
                    <button 
                      onClick={() => handleVarietyChange(variety)}
                      className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200 text-sm"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black py-8 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Watermelon Shop</h3>
              <p className="text-gray-400">Providing the juiciest watermelons since 2010.</p>
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
              © 2023 Watermelon Shop. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}