import React from "react";

type FieldProps = {
  label: string;
  children: React.ReactNode;
};

export const Field: React.FC<FieldProps> = ({ label, children }) => (
  <div>
    <label className="block text-sm font-semibold text-text-secondary mb-1.5 uppercase tracking-wide">
      {label}
    </label>
    {children}
  </div>
);
