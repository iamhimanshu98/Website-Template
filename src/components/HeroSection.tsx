import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fadeInElements = () => {
      setTimeout(() => {
        if (headingRef.current) {
          headingRef.current.classList.add('opacity-100', 'translate-y-0');
        }
      }, 100);

      setTimeout(() => {
        if (subtitleRef.current) {
          subtitleRef.current.classList.add('opacity-100', 'translate-y-0');
        }
      }, 300);

      setTimeout(() => {
        if (ctaRef.current) {
          ctaRef.current.classList.add('opacity-100', 'translate-y-0');
        }
      }, 500);
    };

    fadeInElements();
  }, []);

  return (
    <section className="relative pt-16 md:pt-24 lg:pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-teal-50 dark:from-slate-900 dark:to-slate-800 z-0"></div>
      <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-800 z-0 opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 
            ref={headingRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white opacity-0 -translate-y-4 transition-all duration-700 ease-out"
          >
            Modern, Responsive <span className="text-indigo-600 dark:text-indigo-400">UI Design</span>
          </h1>
          <p 
            ref={subtitleRef}
            className="mt-6 text-xl text-slate-600 dark:text-slate-300 opacity-0 -translate-y-4 transition-all duration-700 ease-out delay-100"
          >
            Create beautiful, responsive interfaces that delight users and drive engagement, all with a clean and modern aesthetic.
          </p>
          <div 
            ref={ctaRef}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 -translate-y-4 transition-all duration-700 ease-out delay-200"
          >
            <a 
              href="#features" 
              className="px-6 py-3 text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-md hover:shadow-lg transition-all"
            >
              Explore Features
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 text-base font-medium rounded-lg text-indigo-600 dark:text-indigo-400 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-md hover:shadow-lg transition-all flex items-center"
            >
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 dark:from-slate-900 to-transparent z-10"></div>
    </section>
  );
};

export default HeroSection;