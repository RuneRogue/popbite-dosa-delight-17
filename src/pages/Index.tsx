
import Hero from '../components/Hero';
import Features from '../components/Features';
import CTASection from '../components/CTASection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';
import { products } from '../data/products';

const Index = () => {
  // Get featured products (limit to 3)
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Features />
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our most popular flavors that customers love
              </p>
            </div>
            <ProductList products={featuredProducts} />
          </div>
        </section>
        
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
