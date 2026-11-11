import React from 'react';

const SIZE_CLASSES = {
  sm: 'h-8 sm:h-9',
  md: 'h-9 sm:h-10 lg:h-[42px]',
  lg: 'h-12 sm:h-14',
};

export default function BrandLogo({
  variant = 'dark',
  size = 'md',
  className = '',
}) {
  const isLight = variant === 'light';
  const src = isLight ? '/logo-light.png' : '/logo.png';
  const heightClass = SIZE_CLASSES[size] || SIZE_CLASSES.md;

  return (
    <img
      src={src}
      alt="Rajvadiya Associates"
      className={`${heightClass} w-auto max-w-full object-contain select-none ${className}`}
      draggable={false}
    />
  );
}
