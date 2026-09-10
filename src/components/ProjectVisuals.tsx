import React from "react";

type ShotProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function ScreenshotFrame({ src, alt, className = "", priority = false }: ShotProps) {
  return (
    <div className={`shot-frame ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
    </div>
  );
}
