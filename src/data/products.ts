
export interface Product {
  id: string;
  name: string;
  flavor: string;
  description: string;
  price: number;
  image: string;
  bgColor: string;
  ingredients: string[];
  nutritionalInfo: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    fiber: number;
  };
  isVegetarian: boolean;
  isGlutenFree: boolean;
}

export const products: Product[] = [
  {
    id: "classic-salted",
    name: "Dosa Chips",
    flavor: "Classic Salted",
    description: "Our original dosa chips with just the right amount of salt for a perfect crunch and flavor in every bite.",
    price: 40,
    image: "/lovable-uploads/b3855931-7643-4bc5-9f14-01bcd745a161.png",
    bgColor: "bg-orange-50",
    ingredients: ["Rice flour", "Urad dal flour", "Salt", "Vegetable oil"],
    nutritionalInfo: {
      calories: 120,
      protein: 2,
      carbs: 18,
      fat: 5,
      fiber: 1,
    },
    isVegetarian: true,
    isGlutenFree: true,
  },
  {
    id: "magic-masala",
    name: "Dosa Chips",
    flavor: "Magic Masala",
    description: "A blend of aromatic Indian spices that create a magical flavor explosion with every crispy bite.",
    price: 40,
    image: "/lovable-uploads/f5b5a745-ce69-487f-8d38-2b5ac2a7a878.png",
    bgColor: "bg-blue-50",
    ingredients: ["Rice flour", "Urad dal flour", "Mixed spices", "Salt", "Vegetable oil"],
    nutritionalInfo: {
      calories: 130,
      protein: 2,
      carbs: 19,
      fat: 5,
      fiber: 1,
    },
    isVegetarian: true,
    isGlutenFree: true,
  },
  {
    id: "tomato-twist",
    name: "Dosa Chips",
    flavor: "Tomato Twist",
    description: "Tangy tomato flavor with a hint of spice that makes these chips irresistibly delicious.",
    price: 40,
    image: "/lovable-uploads/e7c04734-0d05-452b-acb3-8c4c7a86ed7e.png",
    bgColor: "bg-red-50",
    ingredients: ["Rice flour", "Urad dal flour", "Tomato powder", "Spices", "Salt", "Vegetable oil"],
    nutritionalInfo: {
      calories: 125,
      protein: 2,
      carbs: 18,
      fat: 5,
      fiber: 1,
    },
    isVegetarian: true,
    isGlutenFree: true,
  },
  {
    id: "pani-puri",
    name: "Dosa Chips",
    flavor: "Pani Puri",
    description: "Inspired by the popular street food, these chips bring the tangy and spicy flavors of pani puri.",
    price: 40,
    image: "/lovable-uploads/fb876ea2-7103-4faa-aee4-90324c6b58ea.png",
    bgColor: "bg-green-50",
    ingredients: ["Rice flour", "Urad dal flour", "Mint", "Tamarind", "Spices", "Salt", "Vegetable oil"],
    nutritionalInfo: {
      calories: 130,
      protein: 2,
      carbs: 19,
      fat: 5,
      fiber: 1,
    },
    isVegetarian: true,
    isGlutenFree: true,
  },
  {
    id: "cheese-chilli",
    name: "Dosa Chips",
    flavor: "Cheese Chilli",
    description: "The perfect balance of cheesy goodness with a spicy chili kick in every crunchy bite.",
    price: 40,
    image: "/lovable-uploads/7fa62b9f-cef4-4a31-a39c-2a235150df16.png",
    bgColor: "bg-yellow-50",
    ingredients: ["Rice flour", "Urad dal flour", "Cheese powder", "Chilli powder", "Salt", "Vegetable oil"],
    nutritionalInfo: {
      calories: 140,
      protein: 3,
      carbs: 18,
      fat: 6,
      fiber: 1,
    },
    isVegetarian: true,
    isGlutenFree: true,
  },
  {
    id: "cream-onion",
    name: "Dosa Chips",
    flavor: "Cream & Onion",
    description: "Creamy, tangy, and with a hint of onion flavor that makes these chips a crowd favorite.",
    price: 40,
    image: "/lovable-uploads/2a61b74e-e328-4631-9f27-94d40b92cb6e.png",
    bgColor: "bg-emerald-50",
    ingredients: ["Rice flour", "Urad dal flour", "Onion powder", "Cream powder", "Salt", "Vegetable oil"],
    nutritionalInfo: {
      calories: 135,
      protein: 2,
      carbs: 18,
      fat: 6,
      fiber: 1,
    },
    isVegetarian: true,
    isGlutenFree: true,
  },
];
