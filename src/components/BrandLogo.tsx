import React from 'react';

interface BrandLogoProps {
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = 'w-8 h-8' }) => {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="apurboLogoGrad" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FF9A24" />
          <stop offset="100%" stopColor="#FF6B00" />
        </linearGradient>
      </defs>
      <path
        d="M20 4L36 34H28.2L20 17.8L11.8 34H4L20 4Z"
        fill="url(#apurboLogoGrad)"
      />
      <path
        d="M14.5 26.5H25.5L23.1 31.2H16.9L14.5 26.5Z"
        fill="#FFFFFF"
        fillOpacity="0.92"
      />
    </svg>
  );
};
