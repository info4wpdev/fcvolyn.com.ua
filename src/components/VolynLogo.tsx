import React from 'react';

interface VolynLogoProps {
  className?: string;
  size?: number | string;
  alt?: string;
}

export const VolynLogo: React.FC<VolynLogoProps> = ({
  className = 'w-12 h-12',
  size,
  alt = 'Офіційна емблема ФК Волинь Луцьк',
}) => {
  return (
    <img
      src="/logo-FcVolyn.png"
      alt={alt}
      className={`object-contain select-none shrink-0 ${className}`}
      style={size ? { width: size, height: size } : undefined}
      loading="eager"
      decoding="async"
    />
  );
};
