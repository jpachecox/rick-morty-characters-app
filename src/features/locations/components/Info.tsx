import React from "react";

interface InfoProps {
  icon: React.ReactNode;
  label: string;
  value: string | number | React.ReactNode;
}

export const Info: React.FC<InfoProps> = ({ icon, label, value }) => {
  return (
    <div className="flex items-center space-x-3 p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
      <span className="text-2xl">{icon}</span>
      <div className="flex flex-col">
        <p className="text-sm text-gray-500 font-medium">{label}</p>
        <p className="text-gray-800 font-semibold">{value}</p>
      </div>
    </div>
  );
};
