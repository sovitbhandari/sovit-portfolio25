import React from "react";

export const Progress: React.FC<{ value: number; className?: string }> = ({ value, className = "" }) => {
  const v = Math.max(0, Math.min(100, Math.round(value)));
  return (
    <div className={`h-2 w-full rounded-full bg-slate-200 ${className}`}>
      <div
        className="h-2 rounded-full bg-slate-900 transition-[width]"
        style={{ width: `${v}%` }}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={v}
        role="progressbar"
      />
    </div>
  );
};