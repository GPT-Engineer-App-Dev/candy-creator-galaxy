import React from 'react';
import { Button } from '../components/ui/button';
import Navbar from '../components/Navbar';
import CandyCards from '../components/CandyCards';
import DealBanner from '../components/DealBanner';

const Index = () => {
  return (
    <div className="min-h-screen bg-yellow-300">
      <Navbar />
      <DealBanner />
      <div className="container mx-auto px-4 py-8">
        <CandyCards />
      </div>
    </div>
  );
};

export default Index;