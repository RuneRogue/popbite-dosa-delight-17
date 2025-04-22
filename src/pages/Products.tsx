
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';
import { products } from '../data/products';

const Products = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section className="bg-gradient-to-b from-orange-50 to-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Our Products</h1>
            <p className="text-lg text-gray-700 max-w-3xl">
              Discover our range of delicious and healthy dosa chips in multiple flavors.
              All our products are made from natural ingredients with no artificial preservatives.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <ProductList products={products} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
