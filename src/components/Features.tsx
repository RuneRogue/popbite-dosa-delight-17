
import {
  ShieldCheck,
  Leaf,
  Award,
  Snail,
  TimerOff,
  Wheat
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
      icon: <ShieldCheck size={24} />,
      title: "All Natural",
      description: "Made with 100% natural ingredients with no artificial preservatives or additives."
    },
    {
      icon: <Leaf size={24} />,
      title: "Healthier Choice",
      description: "Lower in fat than traditional chips, making them a smarter snacking option."
    },
    {
      icon: <Award size={24} />,
      title: "Premium Quality",
      description: "Crafted with the finest ingredients for unmatched flavor and crunch."
    },
    {
      icon: <Snail size={24} />,
      title: "Low Sodium",
      description: "Less salt than regular chips, better for your health without compromising on taste."
    },
    {
      icon: <TimerOff size={24} />,
      title: "No Trans Fat",
      description: "Zero trans fats making them a heart-friendly snacking option."
    },
    {
      icon: <Wheat size={24} />,
      title: "Gluten Free",
      description: "Naturally gluten-free, perfect for those with dietary restrictions."
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
            Our dosa chips aren't just delicious, they're made with your health and satisfaction in mind.
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
