
import React from 'react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-sunbrand-darkred mb-4">
              Our Heritage & Tradition
            </h2>
            <div className="w-24 h-1 bg-sunbrand-gold mb-6"></div>
            <p className="text-gray-700 mb-4">
              Since 1975, shabansunbrand has been bringing authentic South Indian flavors to 
              households across the country. What started as a small family business has grown 
              into one of India's most trusted spice brands.
            </p>
            <p className="text-gray-700 mb-6">
              Our secret lies in our adherence to traditional recipes passed down through generations,
              combined with modern production techniques to ensure consistent quality and flavor.
              We hand-pick the finest ingredients and process them under strict quality control to
              deliver the authentic taste of South India to your kitchen.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-sunbrand-red font-bold text-4xl mb-2">45+</div>
                <p className="text-gray-600">Years of Excellence</p>
              </div>
              <div className="text-center">
                <div className="text-sunbrand-red font-bold text-4xl mb-2">100+</div>
                <p className="text-gray-600">Products Range</p>
              </div>
              <div className="text-center">
                <div className="text-sunbrand-red font-bold text-4xl mb-2">50+</div>
                <p className="text-gray-600">Countries Reached</p>
              </div>
              <div className="text-center">
                <div className="text-sunbrand-red font-bold text-4xl mb-2">1M+</div>
                <p className="text-gray-600">Happy Customers</p>
              </div>
            </div>
            
            <Button className="bg-sunbrand-red hover:bg-sunbrand-darkred">
              Learn More About Us
            </Button>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <img 
                src="public/flat-lay-food-wooden-background.jpg" 
                alt="shabansunbrand Heritage"
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-sunbrand-cream rounded-lg -z-10"></div>
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-sunbrand-gold opacity-20 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
