
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-popbite-orange to-popbite-red">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Experience the Dosa Chips Revolution?</h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-white">
          Join thousands of happy snackers who have discovered the perfect guilt-free crunch.
        </p>
        <Button 
          asChild 
          variant="outline" 
          size="lg" 
          //className="text-popbite-orange hover:bg-popbite-orange hover:text-popbite-white"
          className="text-popbite-orange hover:bg-orange-50 hover:text-popbite-white"
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
