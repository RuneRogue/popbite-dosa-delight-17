import {
  ShieldCheck,
  Leaf,
  HeartPulse,
  BadgeCheck,
  Smile,
  Sandwich
} from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="inline-flex items-center justify-center p-3 bg-orange-100 text-popbite-orange rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <ShieldCheck size={24} />, // Represents safety/health
      title: "No Trans Fat",
      description: "Zero trans fats making them a heart-friendly snacking option."
    },
    {
      icon: <Leaf size={24} />, // Represents natural/clean ingredients
      title: "No Added Protein",
      description: "Clean-label ingredients, just the good stuff."
    },
    {
      icon: <HeartPulse size={24} />, // Healthier choice
      title: "Healthier Choice",
      description: "Lower in fat than traditional chips, making them a smarter snacking option."
    },
    {
      icon: <BadgeCheck size={24} />, // Premium or certified quality
      title: "Premium Quality",
      description: "Crafted with the finest ingredients for unmatched flavor and crunch."
    },
    {
      icon: <Smile size={24} />, // Happiness/guilt-free
      title: "Guilt-Free Indulgence",
      description: "Snack without the guilt – indulge in a healthier, crunchy treat with all the flavor, none of the excess."
    },
    {
      icon: <Sandwich size={24} />, // Represents ready-to-eat/food
      title: "Ready-to-Eat Convenience",
      description: "Anytime, anywhere snacking – no prep needed."
    }
  ];
  

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-popbite-orange">Popbite</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our dosa chips are a healthier choice compared to traditional options.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
