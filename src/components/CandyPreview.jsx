import React from 'react';
import { Card, CardContent } from './ui/card';
import { motion } from 'framer-motion';

const CandyPreview = ({ shape, flavor, color }) => {
  const shapeClass = {
    round: 'rounded-full',
    heart: 'heart-shape',
    star: 'star-shape',
  };

  const colorClass = {
    red: 'bg-red-400',
    blue: 'bg-blue-400',
    yellow: 'bg-yellow-400',
    purple: 'bg-purple-400',
  };

  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Candy Preview</h2>
        <div className="flex justify-center items-center h-64 bg-gray-100 rounded-lg">
          <motion.div
            className={`w-32 h-32 ${shapeClass[shape]} ${colorClass[color]}`}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <div className="mt-4 text-center">
          <p className="text-lg">
            A {color} {flavor}-flavored {shape} candy
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CandyPreview;