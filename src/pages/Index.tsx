
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
    description: "Experience the perfect harmony of taste and nutrition with our Multi Grain Dosa Chips. We've combined traditional dosa making techniques with a blend of nutritious grains to create a snack that's as good for your body as it is for your taste buds.",
    features: [
      "Made with a blend of 5+ nutritious grains",
      "High in fiber and protein",
      "No artificial preservatives or flavors",
      "Perfect for on-the-go snacking",
      "Ideal complement for dips and spreads"
    ],
    ingredients: [
      "Rice flour", "Wheat flour", "Ragi flour", "Jowar flour", "Bajra flour",
      "Cold-pressed oils"
    ],
    nutritionalInfo: {
      calories: "120 kcal",
      protein: "4g",
      carbs: "18g",
      fat: "4g",
      fiber: "3g"
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
    description: "Our Two Grain Dosa Chips offer a lighter yet equally satisfying snacking experience. Made with a simplified recipe focusing on two key grains, these chips deliver a clean, wholesome taste profile with the perfect crunch.",
    features: [
      "Made with two carefully selected grains",
      "Light and perfectly crispy texture",
      "No artificial preservatives or flavors",
      "Versatile for any snacking occasion",
      "Lower calorie option"
    ],
    ingredients: [
      "Rice flour", "Urad dal flour", "Cold-pressed oils", "Rock salt", "Selected spices"
    ],
    nutritionalInfo: {
      calories: "110 kcal",
      protein: "3g",
      carbs: "16g",
      fat: "4g",
      fiber: "2g"
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
                Discover the perfect blend of taste and nutrition with our range of dosa chips,
                created to satisfy your cravings while keeping your health goals on track.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-26 container mx-auto px-4">
              {/* Multi Grain Product */}
              <div className="bg-orange-50 from-popbite-orange/10 to-popbite-cream rounded-2xl p-8 card-hover">
                <img
                  src="/lovable-uploads/Cat1.jpg"
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
                  <h3 className="text-xl font-semibold mb-3 text-popbite-brown mt-3">Ingredients:</h3>
                  <p className="text-gray-700 mb-3">{multiGrainProduct.ingredients.join(", ")}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-popbite-brown">Nutritional Information</h3>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      <div className="text-center">
                        <p className="text-gray-600 text-sm">Calories</p>
                        <p className="font-bold text-popbite-brown">{multiGrainProduct.nutritionalInfo.calories}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-600 text-sm">Protein</p>
                        <p className="font-bold text-popbite-brown">{multiGrainProduct.nutritionalInfo.protein}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-600 text-sm">Carbs</p>
                        <p className="font-bold text-popbite-brown">{multiGrainProduct.nutritionalInfo.carbs}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-600 text-sm">Fat</p>
                        <p className="font-bold text-popbite-brown">{multiGrainProduct.nutritionalInfo.fat}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-600 text-sm">Fiber</p>
                        <p className="font-bold text-popbite-brown">{multiGrainProduct.nutritionalInfo.fiber}</p>
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
                  src="/lovable-uploads/Cat2.png"
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
                  <h3 className="text-xl font-semibold mb-3 text-popbite-brown mt-3">Ingredients:</h3>
                  <p className="text-gray-700 mb-3">{twoGrainProduct.ingredients.join(", ")}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-popbite-brown">Nutritional Information</h3>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      <div className="text-center">
                        <p className="text-gray-600 text-sm">Calories</p>
                        <p className="font-bold text-popbite-brown">{twoGrainProduct.nutritionalInfo.calories}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-600 text-sm">Protein</p>
                        <p className="font-bold text-popbite-brown">{twoGrainProduct.nutritionalInfo.protein}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-600 text-sm">Carbs</p>
                        <p className="font-bold text-popbite-brown">{twoGrainProduct.nutritionalInfo.carbs}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-600 text-sm">Fat</p>
                        <p className="font-bold text-popbite-brown">{twoGrainProduct.nutritionalInfo.fat}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-600 text-sm">Fiber</p>
                        <p className="font-bold text-popbite-brown">{twoGrainProduct.nutritionalInfo.fiber}</p>
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
