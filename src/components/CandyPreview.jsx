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
    red: 'text-red-400',
    blue: 'text-blue-400',
    yellow: 'text-yellow-400',
    purple: 'text-purple-400',
  };

  const renderShape = () => {
    switch (shape) {
      case 'round':
        return (
          <motion.div
            className={`w-32 h-32 rounded-full ${colorClass[color]}`}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        );
      case 'heart':
        return (
          <motion.div
            className={`w-32 h-32 ${colorClass[color]} heart-shape`}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        );
      case 'star':
        return (
          <motion.div
            className={`w-32 h-32 ${colorClass[color]} star-shape`}
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Candy Preview</h2>
        <div className="flex justify-center items-center h-64 bg-gray-100 rounded-lg">
          {renderShape()}
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