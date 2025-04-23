
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
        <section className="bg-gradient-to-b from-yellow-50 to-white-50 py-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img
                      src="/lovable-uploads/About_us/Misson1.jpg"
                      alt="Our Values"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img
                      src="/lovable-uploads/About_us/Misson2.jpg"
                      alt="Our Values"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-popbite-brown mb-6">Our Mission & Values</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    At Popbite, our mission is to revolutionize snacking by creating products that are both nutritious and delicious. We believe you shouldn't have to choose between health and taste.
                  </p>
                  <h3 className="text-xl font-semibold text-popbite-brown mt-6 mb-3">Our Core Values</h3>
                  <ul className="space-y-3">
                    <li className="flex">
                      <div className="w-6 h-6 rounded-full bg-popbite-orange mr-3 flex-shrink-0 flex items-center justify-center text-white text-sm">✓</div>
                      <div><span className="font-medium">Quality First:</span> We never compromise on the quality of our ingredients or processes.</div>
                    </li>
                    <li className="flex">
                      <div className="w-6 h-6 rounded-full bg-popbite-orange mr-3 flex-shrink-0 flex items-center justify-center text-white text-sm">✓</div>
                      <div><span className="font-medium">Health Focused:</span> Every product we create must contribute positively to a healthy lifestyle.</div>
                    </li>
                    <li className="flex">
                      <div className="w-6 h-6 rounded-full bg-popbite-orange mr-3 flex-shrink-0 flex items-center justify-center text-white text-sm">✓</div>
                      <div><span className="font-medium">Taste Matters:</span> We believe healthy food should be a joy to eat, not a compromise.</div>
                    </li>
                    <li className="flex">
                      <div className="w-6 h-6 rounded-full bg-popbite-orange mr-3 flex-shrink-0 flex items-center justify-center text-white text-sm">✓</div>
                      <div><span className="font-medium">Sustainability:</span> We're committed to environmentally responsible practices throughout our production.</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Our Process */}
        <section className="bg-gradient-to-b from-orange-50 to-white py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-popbite-brown mb-4">How We Make Popbite</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Every bag of Popbite dosa chips is crafted with care, following our perfected process that ensures consistent quality and taste.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-popbite-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-popbite-orange">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-popbite-brown">Selection</h3>
                <p className="text-gray-700">
                  We carefully source the finest grains and ingredients, ensuring they meet our strict quality standards before they enter our facility.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-popbite-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-popbite-orange">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-popbite-brown">Preparation</h3>
                <p className="text-gray-700">
                  Our grains are combined in precise proportions following our proprietary recipes, then fermented naturally to enhance flavor and digestibility.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-popbite-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-popbite-orange">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-popbite-brown">Crafting</h3>
                <p className="text-gray-700">
                  The batter is spread into thin sheets, carefully seasoned with our special spice blend, and cooked to achieve the perfect crispness.
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
