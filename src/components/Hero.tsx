import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-600">
              Welcome to Modern UI
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fade-in-up animation-delay-100">
            Build Beautiful
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Digital Experiences
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Create stunning, responsive websites with modern design principles.
            Fast, accessible, and built for the future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-300">
            <button
              onClick={scrollToFeatures}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={scrollToFeatures}
              className="px-8 py-4 bg-white text-gray-700 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 border-2 border-gray-200"
            >
              Learn More
            </button>
          </div>
        </div>

        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl"></div>
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 animate-fade-in-up animation-delay-400">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">100+</div>
                <div className="text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">50K+</div>
                <div className="text-gray-600">Users</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">99%</div>
                <div className="text-gray-600">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
