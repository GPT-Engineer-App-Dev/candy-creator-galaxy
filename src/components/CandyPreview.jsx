import React from 'react';
import { Card, CardContent } from './ui/card';
import CandyPreview3D from './CandyPreview3D';

const CandyPreview = ({ shape, flavor, color }) => {
  return (
    <Card className="bg-white/50 backdrop-blur-sm">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Candy Preview</h2>
        <CandyPreview3D shape={shape} color={color} />
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