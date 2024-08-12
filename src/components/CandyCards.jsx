import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const CandyCards = () => {
  const candies = [
    { title: "BÄNGER", subtitle: "BY LILLA AL-FADJI", image: "path_to_image1.jpg", price: "189:-" },
    { title: "ESTRELLA", subtitle: "OLIKA SMAKER", image: "path_to_image2.jpg", price: "39:-" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {candies.map((candy, index) => (
        <Card key={index} className="overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-yellow-400 to-yellow-300 p-6">
            <CardTitle className="text-4xl font-bold text-white">{candy.title}</CardTitle>
            <p className="text-xl text-white">{candy.subtitle}</p>
          </CardHeader>
          <CardContent className="p-0">
            <img src={candy.image} alt={candy.title} className="w-full h-64 object-cover" />
            <div className="p-6 bg-white">
              <p className="text-3xl font-bold text-red-500">{candy.price}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CandyCards;