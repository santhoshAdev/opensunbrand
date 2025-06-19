
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Sample product data
const products = [
  {
    id: 1,
    name: "Black Gram",
    description: "Black gram (urad dal) is a protein-packed, versatile legume known for its rich flavor",
    // price: 120,
    image: "1.jpg",
    category: "Spice Blends"
  },
  {
    id: 2,
    name: "Black Gram",
    description: "Black gram (urad dal) is a protein-packed, versatile legume known for its rich flavor",
    // price: 75,
    image: "2.jpg",
    category: "Spice Powders"
  },
  {
    id: 3,
    name: "Chana Dal",
    description: "Chana dal is a protein-rich, flavorful legume that’s a staple in many dishes",
    // price: 110,
    image: "3.jpg",
    category: "Spice Blends"
  },
  {
    id: 4,
    name: "Idli Dosa Mix",
    description: "Instant mix for perfect breakfast",
    // price: 150,
    image: "4.jpg",
    category: "Ready Mixes"
  },
  {
    id: 5,
    name: "Chana Dal555",
    description: "Chana dal is a protein-rich, flavorful legume that’s a staple in many dishes",
    // price: 110,
    image: "5.jpg",
    category: "Spice Blends"
  },{
    id: 6,
    name: "Split Green Gram",
    description: "Split green gram (moong dal) is a nutrient-rich, quick-cooking legume perfect for healthy meals. It’s light, versatile, and easy to digest",
    // price: 120,
    image: "6.jpg",
    category: "Spice Blends"
  }, {
    id: 7,
    name: "Black Gram",
    description: "Black gram (urad dal) is a protein-packed, versatile legume known for its rich flavor",
    // price: 75,
    image: "7.jpg",
    category: "Spice Powders"
  },{
    id: 8,
    name: "Idli Dosa Mix",
    description: "Instant mix for perfect breakfast",
    // price: 150,
    image: "8.jpg",
    category: "Ready Mixes"
  },
  {
    id: 9,
    name: "Chana Dal",
    description: "Chana dal is a protein-rich, flavorful legume that’s a staple in many dishes",
    // price: 110,
    image: "9.jpg",
    category: "Spice Blends"
  },
  {
    id: 10,
    name: "Idli Dosa Mix",
    description: "Instant mix for perfect breakfast",
    // price: 150,
    image: "10.jpg",
    category: "Ready Mixes"
  },
  {
    id: 11,
    name: "Chana Dal555",
    description: "Chana dal is a protein-rich, flavorful legume that’s a staple in many dishes",
    // price: 110,
    image: "11.jpg",
    category: "Spice Blends"
  },{
    id: 12,
    name: "Split Green Gram",
    description: "Split green gram (moong dal) is a nutrient-rich, quick-cooking legume perfect for healthy meals. It’s light, versatile, and easy to digest",
    // price: 120,
    image: "12.jpg",
    category: "Spice Blends"
  }, {
    id: 13,
    name: "Black Gram",
    description: "Black gram (urad dal) is a protein-packed, versatile legume known for its rich flavor",
    // price: 75,
    image: "13.jpg",
    category: "Spice Powders"
  },{
    id: 14,
    name: "Idli Dosa Mix",
    description: "Instant mix for perfect breakfast",
    // price: 150,
    image: "14.jpg",
    category: "Ready Mixes"
  }
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-16 bg-sakthi-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sakthi-darkred mb-4">Our Premium Products</h2>
          <div className="w-24 h-1 bg-sakthi-gold mx-auto mb-4"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Discover our range of authentic South Indian spices and masalas, crafted with traditional recipes and finest ingredients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="product-card border border-gray-200 overflow-hidden bg-white">
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-4">
                <span className="text-xs font-medium text-sakthi-green bg-green-100 py-1 px-2 rounded">
                  {product.category}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="text-gray-600 text-sm mt-1">{product.description}</p>
                <div className="mt-3 flex items-center justify-between">
                  {/* <span className="font-bold text-sakthi-darkred">{product.price}</span> */}
                  {/* <Button size="sm" className="bg-sakthi-red hover:bg-sakthi-darkred">
                    Add to Cart
                  </Button> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-sakthi-red text-sakthi-red hover:bg-sakthi-red hover:text-white">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
