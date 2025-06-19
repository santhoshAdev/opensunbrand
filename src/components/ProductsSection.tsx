
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Sample product data
const products = [
  {
    id: 1,
    name: "Black urad split dal",
    description: "Black urad split dal, also known as split black gram, is a nutritious lentil that is a good source of protein, fiber, and various vitamins and minerals. Specifically, it contains iron, folic acid, calcium, magnesium, potassium, and B vitamins",
    // price: 120,
    image: "1.jpg",
    category: "Pulses"
  },
  {
    id: 2,
    name: "Black-eyed beans",
    description: "Black-eyed beans, also known as cowpeas, are a nutrient-rich legume. They are a good source of protein, fiber, and various vitamins and minerals, including folate, iron, potassium, magnesium, and zinc. Additionally, they are low in fat and calories.",
    // price: 75,
    image: "2.jpg",
    category: "Pulses"
  },
  {
    id: 3,
    name: "Black chana",
    description: "Black chana, also known as kala chana, is a nutritious legume packed with protein, fiber, and various vitamins and minerals. A 100-gram serving of black chana contains approximately 20g of protein, 63g of carbohydrates, 12g of dietary fiber, and 6g of fat. It also provides essential minerals like calcium, iron, potassium, and manganese, along with vitamins such as B6, C, folate, niacin, thiamin, and riboflavin.",
    // price: 110,
    image: "3.jpg",
    category: "Pulses"
  },
  {
    id: 4,
    name: "Black urad dal (black gram)",
    description: "Black urad dal (black gram) is a good source of plant-based protein, dietary fiber, and essential minerals like iron, magnesium, and potassium. It also contains vitamins, including B vitamins and folate, as well as antioxidants like polyphenols and flavonoids.",
    // price: 150,
    image: "4.jpg",
    category: "Ready Mixes"
  },
  {
    id: 5,
    name: "Broad beans",
    description: "Broad beans, also known as Mochai or fava beans, are a nutritious legume packed with protein, fiber, and various vitamins and minerals. They are a good source of molybdenum, copper, manganese, folate, phosphorus, potassium, vitamin B1, iron, magnesium, and vitamin B6",
    // price: 110,
    image: "5.jpg",
    category: "Pulses"
  },{
    id: 6,
    name: "Chana dal",
    description: "Chana dal (split Bengal gram or chickpeas) is a highly nutritious legume that is a good source of protein, fiber, and several essential minerals and vitamins. It's particularly rich in iron, calcium, potassium, magnesium, and B vitamins, according to multiple sources.",
    // price: 120,
    image: "6.jpg",
    category: "Pulses"
  }, {
    id: 7,
    name: "Chickpeas",
    description: "Chickpeas are a nutrient-rich food that contains a variety of essential nutrients, including protein, fiber, and complex carbohydrates. They are also a good source of vitamins and minerals, such as folate, manganese, and iron",
    // price: 75,
    image: "7.jpg",
    category: "Pulses"
  },{
    id: 8,
    name: "Green bean split dal",
    description: "Green bean split dal, also known as moong dal, is a good source of protein, fiber, iron, and various vitamins and minerals. It's a nutritious food that can be easily incorporated into various dishes like soup, salads, and curries.",
    // price: 150,
    image: "8.jpg",
    category: "Pulses"
  },
  {
    id: 9,
    name: "Green bean dal",
    description: "Green bean dal, also known as moong dal, is a nutritional powerhouse. It is rich in protein, fiber, and various vitamins and minerals, including folate, vitamin B6, vitamin C, iron, potassium, and magnesium. Additionally, it contains antioxidants and can be a good source of manganese and zinc.",
    // price: 110,
    image: "9.jpg",
    category: "Pulses"
  },
  {
    id: 10,
    name: "Masoor split dal",
    description: "Masoor split dal, also known as red lentils, is a split lentil that is orange or red in color. It's a popular ingredient in Indian cuisine and is known for its high nutritional value and relatively quick cooking time.",
    // price: 150,
    image: "10.jpg",
    category: "Ready Mixes"
  },
  {
    id: 11,
    name: "Moong dal",
    description: "Moong dal, also known as mung bean, is a nutrient-rich legume packed with protein, fiber, vitamins (like B vitamins, vitamin C, and vitamin A), and minerals (including iron, potassium, and magnesium). It's also a good source of antioxidants and is known for its easy digestibility and potential health benefits",
    // price: 110,
    image: "11.jpg",
    category: "Spice Blends"
  },{
    id: 12,
    name: "Urad dal (without skin)",
    description: "Urad dal (without skin), also known as white urad dal or split urad dal, is a good source of protein, dietary fiber, and various essential minerals. It also contains iron, calcium, magnesium, potassium, and B vitamins.",
    // price: 120,
    image: "12.jpg",
    category: "Spice Blends"
  }, {
    id: 13,
    name: "Red beans",
    description: "Red beans, also known as rajma in India, are a nutritious legume rich in protein, carbohydrates, and fiber. They are a good source of various vitamins and minerals, including thiamine, riboflavin, zinc, potassium, iron, magnesium, and phosphorus. Rajma also contains antioxidants and can be a valuable addition to a balanced diet, potentially aiding in blood sugar control, anti-aging, and weight loss management.",
    // price: 75,
    image: "13.jpg",
    category: "Spice Powders"
  },{
    id: 14,
    name: "Toor dal",
    description: "Toor dal, also known as pigeon pea, is a good source of protein, complex carbohydrates, and dietary fiber. It also contains essential vitamins and minerals, including folate, iron, magnesium, and potassium. Toor dal is low in fat and cholesterol and is a good source of complex carbohydrates.",
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
