import React from 'react';
import { Palette, Smartphone, Zap, Lock, Eye, Smile } from 'lucide-react';

const features = [
  {
    title: 'Modern Design',
    description: 'Clean, intuitive interfaces that follow the latest design trends and best practices.',
    icon: <Palette className="h-6 w-6 text-indigo-500" />,
  },
  {
    title: 'Fully Responsive',
    description: 'Layouts that adapt seamlessly to any device size, from mobile to desktop.',
    icon: <Smartphone className="h-6 w-6 text-indigo-500" />,
  },
  {
    title: 'Lightning Fast',
    description: 'Optimized performance for quick loading times and smooth interactions.',
    icon: <Zap className="h-6 w-6 text-indigo-500" />,
  },
  {
    title: 'Secure by Design',
    description: 'Built with security best practices to protect your data and users.',
    icon: <Lock className="h-6 w-6 text-indigo-500" />,
  },
  {
    title: 'Accessibility First',
    description: 'Designed to be usable by everyone, including people with disabilities.',
    icon: <Eye className="h-6 w-6 text-indigo-500" />,
  },
  {
    title: 'Delightful Interactions',
    description: 'Subtle animations and transitions that enhance the user experience.',
    icon: <Smile className="h-6 w-6 text-indigo-500" />,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Powerful Features
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Everything you need to create beautiful, responsive interfaces that your users will love.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, index }) => {
  return (
    <div 
      className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
      style={{ 
        animationDelay: `${index * 100}ms`,
        animation: 'fadeInUp 0.5s ease-out forwards',
        opacity: 0,
        transform: 'translateY(20px)'
      }}
    >
      <div className="rounded-lg p-3 inline-block bg-slate-100 dark:bg-slate-600 mb-4 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/30 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{title}</h3>
      <p className="text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  );
};

export default FeaturesSection;