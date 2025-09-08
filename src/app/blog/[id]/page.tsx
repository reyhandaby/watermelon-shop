'use client';
import React from 'react';
import Navbar from '../../../components/navbar';
import Image from 'next/image';
import Link from 'next/link';
import blogPosts from '../../../data/blogPosts';

export default function BlogPost({ params }: { params: { id: string } }) {
  // Unwrap params using React.use() to avoid warning
  const unwrappedParams = React.use(params as any);
  const post = blogPosts.find(post => post.id === unwrappedParams.id);

  if (!post) {
    return (
      <main className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <div className="pt-24 px-4 md:px-8 lg:px-16">
          <div className="max-w-3xl mx-auto text-center py-12">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Blog Post Not Found</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
            <Link href="/blog" className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200">
              Back to Blog
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

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
                  <Link href="/blog" className="ml-1 text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 md:ml-2">
                    Blog
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-1 text-gray-500 dark:text-gray-400 md:ml-2">
                    {post.title}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Blog Post Content */}
      <article className="py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
              <span>{formatDate(post.date)}</span>
              <span className="mx-2">•</span>
              <span>{post.author}</span>
              <span className="mx-2">•</span>
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                {post.category}
              </span>
            </div>
          </div>

          <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
            <Image 
              src={post.image} 
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none dark:prose-invert mb-8">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {post.content}
            </p>
            {/* This would be expanded with the full blog content in a real implementation */}
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Watermelons are not only delicious but also incredibly nutritious. They're mostly water — about 92 percent — but this refreshing fruit is soaked with nutrients. Each juicy bite has significant levels of vitamins A, B6 and C, lots of lycopene, antioxidants and amino acids.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              There's even a modest amount of potassium. Plus, this quintessential summer snack is fat-free, very low in sodium and has only 40 calories per cup. They also provide a natural source of hydration, especially important during hot summer months.
            </p>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map(tag => (
                <span key={tag} className="text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full">
                  #{tag}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <Link 
                href="/blog" 
                className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-5 py-2 rounded-md font-medium transition-colors duration-200 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to Blog
              </Link>
              <button 
                className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-md font-medium transition-colors duration-200 flex items-center"
                onClick={() => window.print()}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clipRule="evenodd" />
                </svg>
                Print Article
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts
              .filter(relatedPost => relatedPost.id !== post.id && relatedPost.category === post.category)
              .slice(0, 3)
              .map(relatedPost => (
                <article key={relatedPost.id} className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="relative h-48">
                    <Image 
                      src={relatedPost.image} 
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <Link 
                      href={`/blog/${relatedPost.id}`} 
                      className="text-red-500 hover:text-red-600 font-medium flex items-center transition-colors duration-200"
                    >
                      Read More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
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
                <li><Link href="/" className="text-gray-400 hover:text-red-400 transition-colors duration-200">Home</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-red-400 transition-colors duration-200">About Us</Link></li>
                <li><Link href="/products" className="text-gray-400 hover:text-red-400 transition-colors duration-200">Products</Link></li>
                <li><Link href="/blog" className="text-gray-400 hover:text-red-400 transition-colors duration-200">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium text-white mb-4">Products</h4>
              <ul className="space-y-2">
                <li><Link href="/products/watermelon" className="text-gray-400 hover:text-red-400 transition-colors duration-200">Watermelon</Link></li>
                <li><span className="text-gray-600">More Coming Soon</span></li>
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
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">© {new Date().getFullYear()} Watermelon Shop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}