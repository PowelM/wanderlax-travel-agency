import React from 'react';

interface AdminHeaderProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function AdminHeader({ title, description, children }: AdminHeaderProps) {
  return (
    <header className="flex items-center justify-between px-6 lg:px-8 py-5 border-b border-border-dark bg-background-dark/95 backdrop-blur z-10 shrink-0">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-white tracking-tight">{title}</h1>
        {description && (
          <p className="text-slate-400 text-sm mt-1">{description}</p>
        )}
      </div>
      <div className="flex items-center gap-4">
        {children}
      </div>
    </header>
  );
}
