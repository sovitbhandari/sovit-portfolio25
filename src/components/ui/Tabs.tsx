import React from "react";

type TabsCtx = {
  value: string;
  setValue: (v: string) => void;
};
const Ctx = React.createContext<TabsCtx | null>(null);

export const Tabs: React.FC<{ defaultValue: string; className?: string }> = ({
  defaultValue,
  className = "",
  children,
}) => {
  const [value, setValue] = React.useState(defaultValue);
  return (
    <Ctx.Provider value={{ value, setValue }}>
      <div className={className}>{children}</div>
    </Ctx.Provider>
  );
};

export const TabsList: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = "", ...rest }) => (
  <div className={`inline-flex flex-wrap gap-2 rounded-lg border bg-white p-1 ${className}`} {...rest} />
);

export const TabsTrigger: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { value: string }> = ({
  value,
  className = "",
  children,
  ...rest
}) => {
  const ctx = React.useContext(Ctx)!;
  const active = ctx.value === value;
  return (
    <button
      onClick={() => ctx.setValue(value)}
      className={`h-9 rounded-md px-3 text-sm transition ${
        active ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100"
      } ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export const TabsContent: React.FC<React.HTMLAttributes<HTMLDivElement> & { value: string }> = ({
  value,
  className = "",
  children,
  ...rest
}) => {
  const ctx = React.useContext(Ctx)!;
  if (ctx.value !== value) return null;
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
};