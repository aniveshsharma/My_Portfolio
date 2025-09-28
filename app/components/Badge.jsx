import React from 'react';
import Image from 'next/image';
import { badges } from '@/assets/assets';

const Badge = () => {
  return (
    <div className="flex gap-6 justify-center flex-wrap px-10 py-10">
      {badges.map((badge) => (
        <a
          key={badge.id}
          href={badge.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center cursor-pointer mx-50 mb-10"
        >
          <Image
            src={badge.image}
            alt={badge.title}
            width={100}
            height={100}
            className="rounded-md"
          />
          {/*<p className="mt-2 text-center">{badge.title}</p>*/}
        </a>
      ))}
    </div>
  );
};

export default Badge;
