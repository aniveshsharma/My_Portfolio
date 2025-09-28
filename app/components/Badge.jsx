import React from 'react';
import Image from 'next/image';
import { badges } from '@/assets/assets';

const Badge = () => {
  return (
    <div className="flex flex-wrap justify-center gap-x-10 gap-y-8 px-4 sm:px-10 py-10">
      {badges.map((badge) => (
        <a
          key={badge.id}
          href={badge.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center cursor-pointer"
        >
          <Image
            src={badge.image}
            alt={badge.title}
            width={100}
            height={100}
            className="w-16 sm:w-20 md:w-24 lg:w-28 h-auto rounded-md"
          />
          {/* <p className="mt-2 text-center text-sm">{badge.title}</p> */}
        </a>
      ))}
    </div>
  );
};

export default Badge;
