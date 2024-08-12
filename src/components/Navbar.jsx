import React from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { ShoppingCart, Heart, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-yellow-400 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-900">KLIPPKUNGEN.SE</div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost">Kategorier</Button>
          <Button variant="ghost">Nyheter</Button>
          <Button variant="ghost">Kampanjer</Button>
          <div className="relative">
            <Input 
              type="text" 
              placeholder="Hej! Vad letar du efter?" 
              className="pl-10 pr-4 py-2 rounded-full bg-yellow-200"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
              🔍
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost"><User /></Button>
          <Button variant="ghost"><Heart /></Button>
          <Button variant="ghost"><ShoppingCart /></Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;