
import { useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from '../data/products';

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  const [filter, setFilter] = useState<string | null>(null);
  
  const filteredProducts = filter
    ? products.filter(product => product.flavor === filter)
    : products;

  const uniqueFlavors = Array.from(new Set(products.map(product => product.flavor)));
  
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2 justify-center">
        <button
          onClick={() => setFilter(null)}
          className={`px-4 py-2 rounded-full ${
            filter === null 
              ? 'bg-popbite-orange text-white' 
              : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
          } transition-colors`}
        >
          All
        </button>
        {uniqueFlavors.map(flavor => (
          <button
            key={flavor}
            onClick={() => setFilter(flavor)}
            className={`px-4 py-2 rounded-full ${
              filter === flavor 
                ? 'bg-popbite-orange text-white' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            } transition-colors`}
          >
            {flavor}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
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
