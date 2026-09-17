/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductRange from './components/ProductRange';
import BagConfigurator from './components/BagConfigurator';
import CustomManufacturing from './components/CustomManufacturing';
import Industries from './components/Industries';
import ManufacturingProcess from './components/ManufacturingProcess';
import QualitySection from './components/QualitySection';
import ProductGallery from './components/ProductGallery';
import QuoteSection from './components/QuoteSection';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

export default function App() {
  return (
    <div className="relative min-h-screen bg-brand-bg selection:bg-brand-accent selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <ProductRange />
        <BagConfigurator />
        <CustomManufacturing />
        <Industries />
        <ManufacturingProcess />
        <QualitySection />
        <ProductGallery />
        <QuoteSection />
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
}

