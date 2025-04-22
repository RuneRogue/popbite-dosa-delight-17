
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-popbite-orange to-popbite-red text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience the Dosa Chips Revolution?</h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Join thousands of happy snackers who have discovered the perfect guilt-free crunch.
        </p>
        <Button 
          asChild 
          variant="outline" 
          size="lg" 
          className="border-white text-white hover:bg-white hover:text-popbite-orange"
        >
          <Link to="/products">
            Shop Now <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
