
import React from 'react';
import { CheckCircle } from 'lucide-react';

const features = [
  {
    id: 1,
    title: "Premium Quality Ingredients",
    description: "We source only the finest ingredients from trusted farmers and suppliers.",
    icon: CheckCircle
  },
  {
    id: 2,
    title: "Traditional Recipes",
    description: "Our blends are based on traditional family recipes passed down through generations.",
    icon: CheckCircle
  },
  {
    id: 3,
    title: "Modern Processing",
    description: "State-of-the-art facilities ensure consistent quality while preserving flavor.",
    icon: CheckCircle
  },
  {
    id: 4,
    title: "No Artificial Additives",
    description: "100% natural products with no artificial colors, flavors or preservatives.",
    icon: CheckCircle
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sunbrand-darkred mb-4">Why Choose sunbrand Masala</h2>
          <div className="w-24 h-1 bg-sunbrand-gold mx-auto mb-4"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Quality and flavor in every pack - that's our commitment to you
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-sunbrand-red mb-4">
                <feature.icon size={36} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-sunbrand-cream p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-6">
              <h3 className="text-2xl font-bold text-sunbrand-darkred mb-2">
                Ready to experience authentic flavors?
              </h3>
              <p className="text-gray-700">
                Try sunbrand Masala's premium products for your next meal.
              </p>
            </div>
            <div className="flex-shrink-0">
              <button className="bg-sunbrand-red hover:bg-sunbrand-darkred text-white px-8 py-3 rounded-md font-medium">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
