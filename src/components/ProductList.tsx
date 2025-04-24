import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from '../data/products';
import { useLocation, useNavigate } from 'react-router-dom';
import { set } from 'date-fns';

interface ProductListProps {
  products: Product[];
}
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const ProductList = ({ products }: ProductListProps) => {
  const [filter, setFilter] = useState<string | null>(null);
  const query = useQuery();
  const typeFromUrl = query.get('type');
  const navigate = useNavigate(); // e.g., "Multi Grain" or "Two Grain"

  useEffect(() => {
    if (typeFromUrl) {
      setFilter(typeFromUrl);
    } 
  }, [typeFromUrl]);

  // Clean URL (remove query param) if type is null or invalid
  useEffect(() => {
    if (typeFromUrl) {
      navigate(window.location.pathname, { replace: true });
    }
  }, [typeFromUrl, navigate]);

  // Filter based on product type (id), not flavor
  const filteredProducts = filter
    ? products.filter(product => product.id === filter)
    : products;

  // Unique product types (id values)
  const uniqueTypes = Array.from(new Set(products.map(product => product.id)));

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2 justify-center">
        <button
          onClick={() => setFilter(null)}
          className={`px-4 py-2 rounded-full ${filter === null
              ? 'bg-popbite-orange text-white'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            } transition-colors`}
        >
          All
        </button>

        {uniqueTypes.map(type => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-2 rounded-full ${filter === type
                ? 'bg-popbite-orange text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              } transition-colors`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id + product.flavor} // Use flavor in key to ensure uniqueness
            id={product.id}
            name={product.name}
            flavor={product.flavor}
            description={product.description}
            price={product.price}
            image={product.image}
            bgColor={product.bgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
