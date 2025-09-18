import React from "react";

type StatProps = {
  number?: number;
  label?: string;
  icon?: React.ReactNode;
};

export const Stat: React.FC<StatProps> = ({ number, label, icon }) => {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-xl text-center shadow-sm hover:shadow-md transition">
      <div className="flex justify-center items-center text-3xl text-sky-600">
        {icon}
      </div>
      <div className="text-3xl font-extrabold text-gray-800">{number}</div>
      <div className="text-sm font-medium text-gray-500 mt-1">{label}</div>
    </div>
  );
};
