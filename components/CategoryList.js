import React from 'react';

import gas from '@/public/gas.png';
import Image from 'next/image';
import CafeCard from './CafeCard';
import GasStationCard from './GasStationCard';

const CategoryList = () => {
  return (
    <div className="p-4">
      <div className="mt-4 text-3xl font-bold">
        Select Your Favourite Category
      </div>
      <div className="py-4 flex gap-5">
        {/* Gas Station Card */}
        <GasStationCard/>
        {/* Cafe Card */}
        <CafeCard/>
      </div>
    </div>
  );
};

export default CategoryList;

