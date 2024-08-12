import React from 'react';
import { Card, CardContent } from './ui/card';
import { motion } from 'framer-motion';

const CandyPreview = ({ shape, flavor, color }) => {
  const colorClass = {
    red: 'from-red-300 to-red-500',
    blue: 'from-blue-300 to-blue-500',
    yellow: 'from-yellow-300 to-yellow-500',
    purple: 'from-purple-300 to-purple-500',
  };

  const renderShape = () => {
    const baseClasses = `w-32 h-32 bg-gradient-to-br ${colorClass[color]} shadow-lg`;
    const shineClasses = "after:content-[''] after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-gradient-to-br after:from-white after:to-transparent after:opacity-30 after:rounded-full";

    switch (shape) {
      case 'round':
        return (
          <motion.div
            className={`${baseClasses} rounded-full relative overflow-hidden ${shineClasses}`}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        );
      case 'heart':
        return (
          <motion.div
            className={`${baseClasses} heart-shape relative overflow-hidden ${shineClasses}`}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        );
      case 'star':
        return (
          <motion.div
            className={`${baseClasses} star-shape relative overflow-hidden ${shineClasses}`}
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Card className="bg-white/50 backdrop-blur-sm">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Candy Preview</h2>
        <div className="flex justify-center items-center h-64 bg-gray-100/50 rounded-lg backdrop-blur-sm">
          {renderShape()}
        </div>
        <div className="mt-4 text-center">
          <p className="text-lg text-gray-700">
            A {color} {flavor}-flavored {shape} candy
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CandyPreview;