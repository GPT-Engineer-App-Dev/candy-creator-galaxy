import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import CandyPreview from './CandyPreview';

const CandyDesigner = () => {
  const [candyShape, setCandyShape] = useState('round');
  const [candyFlavor, setCandyFlavor] = useState('strawberry');
  const [candyColor, setCandyColor] = useState('red');

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Customize Your Candy</h2>
          
          <div className="space-y-6">
            <div>
              <Label className="text-lg mb-2">Shape</Label>
              <RadioGroup value={candyShape} onValueChange={setCandyShape} className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="round" id="round" />
                  <Label htmlFor="round">Round</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="heart" id="heart" />
                  <Label htmlFor="heart">Heart</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="star" id="star" />
                  <Label htmlFor="star">Star</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label htmlFor="flavor" className="text-lg mb-2">Flavor</Label>
              <Select value={candyFlavor} onValueChange={setCandyFlavor}>
                <SelectTrigger id="flavor">
                  <SelectValue placeholder="Select a flavor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="strawberry">Strawberry</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="lemon">Lemon</SelectItem>
                  <SelectItem value="grape">Grape</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="color" className="text-lg mb-2">Color</Label>
              <Select value={candyColor} onValueChange={setCandyColor}>
                <SelectTrigger id="color">
                  <SelectValue placeholder="Select a color" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="red">Red</SelectItem>
                  <SelectItem value="blue">Blue</SelectItem>
                  <SelectItem value="yellow">Yellow</SelectItem>
                  <SelectItem value="purple">Purple</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <CandyPreview shape={candyShape} flavor={candyFlavor} color={candyColor} />
    </div>
  );
};

export default CandyDesigner;