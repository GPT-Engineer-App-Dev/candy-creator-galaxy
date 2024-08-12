import React from 'react';
import CandyDesigner from '../components/CandyDesigner';
import { Button } from '../components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">Design Your Dream Candy</h1>
        <CandyDesigner />
        <div className="mt-8 text-center">
          <Button className="bg-green-500 hover:bg-green-600 text-white">Save Your Candy</Button>
        </div>
      </div>
    </div>
  );
};

export default Index;