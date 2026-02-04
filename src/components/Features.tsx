import { Zap, Shield, Layers, Smartphone, Cloud, Lock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance ensures your site loads in milliseconds, providing the best user experience.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Shield,
      title: 'Secure by Default',
      description: 'Built-in security features protect your data and users with industry-standard encryption.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Layers,
      title: 'Modular Design',
      description: 'Component-based architecture makes it easy to build, maintain, and scale your application.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Smartphone,
      title: 'Fully Responsive',
      description: 'Beautiful on all devices. From mobile phones to ultra-wide monitors, it just works.',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Cloud,
      title: 'Cloud Ready',
      description: 'Deploy anywhere with zero configuration. Works seamlessly with modern cloud platforms.',
      color: 'from-violet-500 to-purple-500',
    },
    {
      icon: Lock,
      title: 'Privacy First',
      description: 'Your data stays yours. We prioritize user privacy and comply with global data regulations.',
      color: 'from-slate-500 to-gray-600',
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to build modern web applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                ></div>

                <div
                  className={`relative w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                <div className="mt-6 flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium">Learn more</span>
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
