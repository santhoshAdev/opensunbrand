import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const slides = [
  {
    id: 1,
    title: 'Experience Authentic South Indian Flavors',
    description: 'Premium quality spices and masalas, crafted with tradition',
    image: 'indian-condiments-with-copy-space-view.jpg',
    bgColor: 'bg-sakthi-red',
    link: '#products',
  },
  {
    id: 2,
    title: 'Discover Our Product Range',
    description:
      'From spice powders to instant mixes, find everything for your kitchen',
    image:
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop',
    bgColor: 'bg-sakthi-green',
    link: '#products',
  },
  {
    id: 3,
    title: 'Family Recipes Passed Down Generations',
    description: 'Traditional blends with authentic taste and aroma',
    image:'delicious-cooked-beans-bowl.jpg',
    bgColor: 'bg-sakthi-orange',
    link: '#about',
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="w-full h-[500px] md:h-[600px] relative">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full hero-slide ${
              index === currentSlide ? 'active' : ''
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="max-w-xl text-white">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-6">{slide.description}</p>
                {/* <Button
                  asChild
                  size="lg"
                  className={`${slide.bgColor} hover:bg-opacity-90`}
                >
                  <a href={slide.link}>Explore Now</a>
                </Button> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
