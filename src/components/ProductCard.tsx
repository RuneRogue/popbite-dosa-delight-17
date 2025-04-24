
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ShoppingBag } from 'lucide-react';

export interface ProductProps {
  id: string;
  name: string;
  flavor: string;
  description: string;
  price: number;
  image: string;
  bgColor: string;
}

const ProductCard = ({ id, name, flavor, description, image, bgColor }: ProductProps) => {
  return (
    <div className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group ${bgColor}`}>
      <div className="relative">
        <img 
          src={image} 
          alt={`${flavor} - ${name}`} 
          className="w-full h-62 object-contain p-6 transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="bg-white p-6">
        <h3 className="text-xl font-bold mb-1">{flavor}</h3>
        <p className="text-gray-600 mb-4 line-clamp-4">{description}</p>
        {/* <div className="flex justify-between items-center">
          {/* <span className="text-lg font-bold">₹{price}</span> */}
          {/* <Button className="bg-popbite-orange hover:bg-popbite-red text-white">
            <ShoppingBag className="h-4 w-4 mr-2" />
            Add to Cart
          </Button> 
        </div> */}
      </div>
    </div>
  );
};

export default ProductCard;
