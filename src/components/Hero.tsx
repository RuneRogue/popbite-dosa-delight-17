
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-16 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-popbite-black leading-tight">
              World's First <span className="text-popbite-orange">Dosa Chips</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
            The world’s first and largest manufacturer of innovative, ready-to-eat dosa chips. We blend tradition with technology to offer a crispy, crunchy snack loved across the globe.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                asChild
                className="bg-popbite-orange hover:bg-popbite-red text-white px-6 py-6 text-lg"
              >
                <Link to="/products">
                  Explore Flavors <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline"
                asChild
                className="border-popbite-orange text-popbite-orange hover:bg-popbite-orange hover:text-white px-6 py-6 text-lg"
              >
                <Link to="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-popbite-yellow rounded-full opacity-60 blur-lg"></div>
            <div className="absolute -bottom-8 -right-4 w-32 h-32 bg-popbite-orange rounded-full opacity-60 blur-xl"></div>
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <img 
                src="/compressed/banner1.webp" 
                alt="Classic Salted Dosa Chips" 
                className="w-full h-auto shadow-lg rounded-lg transform hover:scale-100 transition-transform duration-300"
              />
              <img 
                src="/compressed/banner2.webp" 
                alt="Magic Masala Dosa Chips" 
                className="w-full h-auto shadow-lg rounded-lg transform hover:scale-100 transition-transform duration-300 mt-6"
              />
              <img 
                src="/compressed/banner3.webp" 
                alt="Tomato Twist Dosa Chips" 
                className="w-full h-auto shadow-lg rounded-lg transform hover:scale-100 transition-transform duration-300"
              />
              <img 
                src="/compressed/banner4.webp" 
                alt="Pani Puri Dosa Chips" 
                className="w-full h-auto shadow-lg rounded-lg transform hover:scale-100 transition-transform duration-300 mt-6"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
