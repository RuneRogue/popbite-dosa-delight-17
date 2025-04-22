
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section className="bg-gradient-to-b from-orange-50 to-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">About Popbite</h1>
            <p className="text-lg text-gray-700 max-w-3xl">
              Learn about our journey to create the world's first dosa chips and revolutionize healthy snacking.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 relative fancy-underline">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  Popbite was born from a simple idea: What if we could transform the beloved South Indian dosa into a convenient, 
                  crunchy snack that maintains its authentic taste while being healthier than regular chips?
                </p>
                <p className="text-gray-700 mb-4">
                  After months of experimentation in our kitchen, we perfected the recipe and technique to create 
                  the world's first dosa chips. We launched with our Classic Salted flavor and were overwhelmed by the positive response.
                </p>
                <p className="text-gray-700 mb-4">
                  Today, we've expanded our range to include six delicious flavors, each offering the perfect balance of 
                  tradition and innovation. Our commitment to quality ingredients and authentic flavors remains at the heart of everything we do.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/lovable-uploads/b3855931-7643-4bc5-9f14-01bcd745a161.png" 
                  alt="Popbite Classic Salted" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <img 
                  src="/lovable-uploads/f5b5a745-ce69-487f-8d38-2b5ac2a7a878.png" 
                  alt="Popbite Magic Masala" 
                  className="rounded-lg shadow-lg w-full h-auto mt-10"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                To provide delicious, healthy snack alternatives that don't compromise on taste or nutrition.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-popbite-orange">Health First</h3>
                <p className="text-gray-600">
                  We prioritize your wellbeing by using natural ingredients and healthier cooking methods.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-popbite-orange">Tradition Meets Innovation</h3>
                <p className="text-gray-600">
                  We honor traditional recipes while reimagining them for modern snacking needs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-popbite-orange">Sustainability</h3>
                <p className="text-gray-600">
                  We're committed to environmentally friendly practices throughout our production process.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Try Popbite?</h2>
            <Button 
              asChild
              className="bg-popbite-orange hover:bg-popbite-red text-white px-6 py-6 text-lg"
            >
              <Link to="/products">
                Explore Our Products
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
