
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
            <h1 className="text-4xl font-bold mb-4">About PopBite</h1>
            <p className="text-lg text-gray-700 max-w-3xl">
              Learn about our journey to create the world's first dosa chips and revolutionize healthy snacking.
            </p>
          </div>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-3 relative fancy-underline mt-5">Our Story</h2>
                <h1>Popbite Consumer Pvt. Ltd. – Revolutionizing Snacking, One Dosa Chip at a Time
                </h1>
                <p className="text-gray-700 mb-2">
                  The story of Popbite Consumer Pvt. Ltd. is not just about creating a snack — it's about building a movement.
                </p>
                <p className="text-gray-700 mb-2">
                  It all started in the heart of Gujarat, where food is not just eaten, but celebrated. In a small town in Gujarat called Chikhli, two brothers – Vishal Patel and Chirag Patel – set out to do something different. Not for the sake of being different, but to solve a real problem rooted in their childhood memories and family experiences. Like millions of Indian households, their family enjoyed snacking, but finding healthy, delicious options was always a challenge.
                </p>
                <p className="text-gray-700 mb-2">
                  Everything available was either deep-fried, full of preservatives, or lacking any real nutritional value.
                </p>
                <p className="text-gray-700 mb-2">
                  The seeds of Popbite were planted when Vishal, after starting his first food venture in 2016, introduced handmade <b>dosa khakhras</b> – an innovative twist on traditional snacking. But handmade production had its limits: inconsistent quality, high labor costs, and poor shelf life. Rather than give up, the brothers went back to the drawing board. With Chirag’s background in mechanical engineering and manufacturing, they spent five long years building and breaking machines – five failed attempts, to be precise – before creating the <b>sixth and final version</b> : a fully automatic machine capable of producing high-quality, crispy dosa chips at scale.
                </p>
                <p className="text-gray-700 mb-2">That’s how <b>Popbite Consumer Pvt. Ltd.</b> was born.
                </p>
                <p>Today, Popbite is <b>the world’s first and largest manufacturer of dosa chips, bringing South India’s beloved dosa to snack aisles across the globe – in a form that’s non fried, healtier choice to compared to traditional options, crispy, crunchy, and ready-to-eat.</b> We’re proud to be an Indian-origin brand taking our heritage global.
                </p>
                <p className="text-gray-700 mt-2">
                  Popbite's manufacturing facility in Chikhli utilizes fully automated, patented technology to produce these innovative snacks. The company's mission is to revolutionize the Indian Fast-Moving Consumer Goods (FMCG) market by delivering nutritious and tasty ready-to-eat and instant snacks made from high-quality ingredients.
                </p>
                <p className="text-gray-700 mt-2">
                  Our products are now enjoyed in <b>over eight plus countries</b>, and we’re just getting started.
                </p>
              </div>
              
              <div className="relative z-10 grid grid-cols-2 gap-6 mt-20">
                <img
                  src="/lovable-uploads/About_us/Banner1.jpg"
                  alt="Classic Salted Dosa Chips"
                  className="w-full h-auto shadow-lg rounded-lg transform hover:scale-100 transition-transform duration-300"
                />
                <img
                  src="/lovable-uploads/About_us/Banner2.jpg"
                  alt="Magic Masala Dosa Chips"
                  className="w-full h-auto shadow-lg rounded-lg transform hover:scale-100 transition-transform duration-300 mt-10"
                />
                <img
                  src="/lovable-uploads/About_us/Banner3.jpg"
                  alt="Classic Salted Dosa Chips"
                  className="w-full h-auto shadow-lg rounded-lg transform hover:scale-100 transition-transform duration-300"
                />
                <img
                  src="/lovable-uploads/About_us/Banner4.jpg"
                  alt="Magic Masala Dosa Chips"
                  className="w-full h-auto shadow-lg rounded-lg transform hover:scale-100 transition-transform duration-300 mt-10"
                />
              </div>
              {/* <div className="grid grid-cols-1 gap-4">
                <img
                  src="/lovable-uploads/vision.jpg"
                  alt="Popbite Classic Salted"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div> */}
            </div>
          </div>
        </section>
        <section className="bg-gradient-to-b from-yellow-50 to-white-50 py-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative z-10 grid grid-cols-2 gap-16">
                  <div className="rounded-lg overflow-hidden shadow-2g">
                    <img
                      src="/lovable-uploads/About_us/Misson1.jpg"
                      alt="Our Values"
                      className="w-full h-auto shadow-lg rounded-lg transform hover:scale-100 transition-transform duration-300"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-2g mt-6">
                    <img
                      src="/lovable-uploads/About_us/Misson2.jpg"
                      alt="Our Values"
                      className="w-full h-auto shadow-lg rounded-lg transform hover:scale-100 transition-transform duration-300 mt-10"
                    />
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-popbite-brown mb-3">Our Mission & Values</h2>
                <div className="space-y-2 text-gray-700">
                  <p>
                    At Popbite, we believe snacks can be <b>delicious and nutritious,</b> traditional yet modern, locally made yet globally loved. That’s why we focus on clean ingredients, smart manufacturing, and constant innovation – whether it’s the revolutionary dosa chips.
                  </p>
                  <p>We’ve been blessed with channel partners, and customers who believe in our dream. The journey hasn’t been easy – building in the food industry rarely is – but every distributor who comes onboard, and every milestone crossed keeps us going.
                  </p>
                  <p>So whether you’re a curious snacker, a global distributor, or just someone who believes in better choices – welcome to Popbite.
                  </p>
                  <p>We’re not just building a snack brand.</p>
                  <b>We’re creating a movement. One dosa chip at a time.</b>
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
