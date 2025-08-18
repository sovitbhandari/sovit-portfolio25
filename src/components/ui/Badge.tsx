import React from "react";

export const Badge: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({
  className = "",
  ...rest
}) => (
  <span
    className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs bg-white text-slate-800 ${className}`}
    {...rest}
  />
);
