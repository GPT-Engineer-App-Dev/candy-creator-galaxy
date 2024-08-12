import React from 'react';
import CandyDesigner from '../components/CandyDesigner';
import { Button } from '../components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-300 via-green-400 to-green-500 p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-white drop-shadow-lg">Design Your Dream Candy</h1>
        <CandyDesigner />
        <div className="mt-8 text-center">
          <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            Save Your Candy
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;