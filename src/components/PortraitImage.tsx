import React, { useState } from 'react';
import { User } from 'lucide-react';
import { ABOUT_PORTRAIT_ASSET, HERO_PORTRAIT_ASSET } from '../config/assets';

interface PortraitImageProps {
  variant: 'hero' | 'about';
  src?: string;
  alt?: string;
  className?: string;
}

export const PortraitImage: React.FC<PortraitImageProps> = ({
  variant,
  src,
  alt,
  className = '',
}) => {
  const [hasError, setHasError] = useState(false);

  const defaultAsset = variant === 'hero' ? HERO_PORTRAIT_ASSET : ABOUT_PORTRAIT_ASSET;
  const resolvedSrc = src ?? defaultAsset.src;
  const resolvedAlt = alt ?? defaultAsset.alt;

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#161616] via-[#111111] to-[#0A0A0A] text-center p-8 ${className}`}
        role="img"
        aria-label={resolvedAlt}
      >
        <div className="w-16 h-16 rounded-full bg-[#FF7A00]/10 border border-[#FF7A00]/30 flex items-center justify-center mb-4">
          <User className="w-8 h-8 text-[#FF7A00]" />
        </div>
        <p className="font-display font-semibold text-white text-base">Apurbo Sarker</p>
      </div>
    );
  }

  return (
    <img
      src={resolvedSrc}
      alt={resolvedAlt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      loading={variant === 'hero' ? 'eager' : 'lazy'}
      decoding="async"
      className={`w-full h-full object-cover select-none ${
        className || (variant === 'hero' ? 'object-[50%_42%]' : 'object-[50%_20%]')
      }`}
    />
  );
};
