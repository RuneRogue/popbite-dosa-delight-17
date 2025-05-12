
import Hero from '../components/Hero';
import Features from '../components/Features';
import CTASection from '../components/CTASection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';
import { products } from '../data/products';
import { Link } from "react-router-dom";
import { ArrowRight } from 'lucide-react';

const Index = () => {
  // Get featured products (limit to 3)
  const featuredProducts = products.slice(0, 3);
  const multiGrainProduct = {
    id: "multigrain",
    name: "Multi Grain Dosa Chips",
    description: "Experience the perfect harmony of flavor and tradition with our Multi Grain Dosa Chips. Crafted using time-honored dosa techniques and a unique blend of grains for a bold, unforgettable crunch.",
    features: [
      "Made with a blend of 5 nutritious grains",
      "High in fiber and protein",
      "Perfect for on-the-go snacking",
      "Bold, savory flavors you'll crave"
    ],
    ingredients: [
      "Rice flour", "Wheat flour", "Ragi flour", "Jowar flour", "Bajra flour",
      "Cold-pressed oils"
    ],
    nutritionalInfo: {
      protein: "10g*",
      fibers: "8g*",
      fat: "0g",
      cholesterol: "0.0mg"
      
    },
    bgColor: "bg-popbite-orange/10",
    images: [
      "https://i.imghippo.com/files/HUdt3119vK.jpg",
      "https://i.imghippo.com/files/KAj7685.jpg",
      "https://i.imghippo.com/files/rE9797hrg.jpg"
    ]
  };

  const twoGrainProduct = {
    id: "twograin",
    name: "Two Grain Dosa Chips",
    description: "Our Two Grain Dosa Chips bring simplicity and flavor together in every bite. With just two carefully chosen grains, they offer a crisp, satisfying snack that lets the ingredients shine.",
    features: [
      "Made with two carefully selected grains",
      "Light and perfectly crispy texture",
      "Versatile for any snacking occasion",
      "Snack that stands out, yet keeps it simple"
    ],
    ingredients: [
      "Rice flour", "Urad dal flour", "Cold-pressed oils", "Rock salt", "Selected spices"
    ],
    nutritionalInfo: {
      protein: "10g*",
      fibers: "5g*",
      fat: "0g",
      cholesterol: "0.0mg"
    },
    bgColor: "bg-popbite-green/10",
    images: [
      "https://i.imghippo.com/files/fOK6173Hc.png",
      "https://i.imghippo.com/files/Rjy2212w.png",
      "https://i.imghippo.com/files/eLen8409cw.png"
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Features />

        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12 mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-popbite-brown mb-4">
                Our Delicious Range
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover the perfect blend of tradition and crunch with our one-of-a-kind dosa chips — bold, addictive, and unlike anything you’ve tasted before.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-26 container mx-auto px-4">
              {/* Multi Grain Product */}
              <div className="bg-orange-50 from-popbite-orange/10 to-popbite-cream rounded-2xl p-8 card-hover">
                <img
                  src="/compressed/Cat3.webp"
                  alt="Multi Grain Dosa Chips"
                  className="rounded-lg h-64 object-cover object-center mx-auto mb-6"
                />
                <h3 className="text-2xl font-bold mb-3 text-popbite-brown">Multi Grain Dosa Chips</h3>
                <p className="text-lg text-gray-700 mb-3">{multiGrainProduct.description}</p>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-popbite-brown">Features:</h3>
                  <ul className="space-y-2">
                    {multiGrainProduct.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <div className="w-6 h-6 rounded-full bg-popbite-orange mr-3 flex-shrink-0 flex items-center justify-center text-white text-sm">✓</div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-popbite-brown mt-3">Nutritional Information(Approx)*</h3>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <p className="text-gray-600 text-sm">Protein</p>
                        <p className="font-bold text-popbite-brown">{multiGrainProduct.nutritionalInfo.protein}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-600 text-sm">Dietary Fiber</p>
                        <p className="font-bold text-popbite-brown">{multiGrainProduct.nutritionalInfo.fibers}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-600 text-sm">Trans Fat</p>
                        <p className="font-bold text-popbite-brown">{multiGrainProduct.nutritionalInfo.fat}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-600 text-sm">Cholesterol</p>
                        <p className="font-bold text-popbite-brown">{multiGrainProduct.nutritionalInfo.cholesterol}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-3">
                  <Link
                    to="/products?type=Multi Grain"
                    className="inline-flex mt-3  items-center text-popbite-orange font-medium hover:underline"
                  >
                    Discover More <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>

              {/* Two Grain Product */}
              <div className="bg-orange-50 from-popbite-orange/10 to-popbite-cream rounded-2xl p-8 card-hover">
                <img
                  src="/compressed/Cat2.webp"
                  alt="Multi Grain Dosa Chips"
                  className="rounded-lg h-64 object-cover object-center mx-auto mb-6"
                />
                <h3 className="text-2xl font-bold mb-3 text-popbite-brown">Two Grain Dosa Chips</h3>
                <p className="text-lg text-gray-700 mb-3">{twoGrainProduct.description}</p>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-popbite-brown">Features:</h3>
                  <ul className="space-y-2">
                    {twoGrainProduct.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <div className="w-6 h-6 rounded-full bg-popbite-orange mr-3 flex-shrink-0 flex items-center justify-center text-white text-sm">✓</div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-popbite-brown mt-3">Nutritional Information(Approx)*</h3>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                        <p className="text-gray-600 text-sm">Protein</p>
                        <p className="font-bold text-popbite-brown">{twoGrainProduct.nutritionalInfo.protein}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-600 text-sm">Dietary Fiber</p>
                        <p className="font-bold text-popbite-brown">{twoGrainProduct.nutritionalInfo.fibers}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-600 text-sm">Trans Fat</p>
                        <p className="font-bold text-popbite-brown">{twoGrainProduct.nutritionalInfo.fat}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-600 text-sm">Cholesterol</p>
                        <p className="font-bold text-popbite-brown">{twoGrainProduct.nutritionalInfo.cholesterol}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-3">
                  <Link
                    to="/products?type=Two Grain"
                    className="inline-flex mt-3  items-center text-popbite-orange font-medium hover:underline"
                  >
                    Discover More <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our most popular flavors that customers love
              </p>
            </div>
            <ProductList products={featuredProducts} />
          </div> */}
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
