import React from "react";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

export const Card = ({ className = "", ...rest }: DivProps) => (
  <div className={`rounded-2xl border bg-white ${className}`} {...rest} />
);

export const CardHeader: React.FC<DivProps> = ({ className = "", ...rest }) => (
  <div className={`p-5 ${className}`} {...rest} />
);

export const CardTitle: React.FC<DivProps> = ({ className = "", ...rest }) => (
  <h3 className={`text-lg font-semibold ${className}`} {...rest} />
);

export const CardDescription: React.FC<DivProps> = ({ className = "", ...rest }) => (
  <p className={`text-sm text-slate-600 ${className}`} {...rest} />
);

export const CardContent: React.FC<DivProps> = ({ className = "", ...rest }) => (
  <div className={`p-5 pt-0 ${className}`} {...rest} />
);
