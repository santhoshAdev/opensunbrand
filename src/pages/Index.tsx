
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductsSection from '@/components/ProductsSection';
import AboutSection from '@/components/AboutSection';
import FeaturesSection from '@/components/FeaturesSection';
import Footer from '@/components/Footer';

// const Index = () => {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header />
//       <main>
//         <HeroSection />
//         <ProductsSection />
//         <AboutSection />
//         <FeaturesSection />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Index;


const App = () => {
  return (
    <div className="flex flex-col min-h-screen scroll-smooth">
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <AboutSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;