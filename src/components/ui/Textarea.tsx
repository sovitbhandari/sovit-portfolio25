import React from "react";

export const Textarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = ({
  className = "",
  ...rest
}) => (
  <textarea
    className={`w-full rounded-md border border-slate-300 bg-white p-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none ${className}`}
    {...rest}
  />
);
