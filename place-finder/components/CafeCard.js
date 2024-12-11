import React from "react";
import Image from "next/image";
import cafe from '@/public/cafe.png';
const CafeCard = () => {
  return (
    <div className="bg-gray-700 rounded-2xl flex flex-col items-center justify-center p-2 w-40 h-40 hover:scale-105 hover:shadow-lg transition-transform duration-300">
      <div className="w-20 h-20">
        <Image src={cafe} alt="Cafe" className="object-contain" />
      </div>
      <div className="mt-2 text-white text-center">Cafes</div>
    </div>
  );
};

export default CafeCard;
