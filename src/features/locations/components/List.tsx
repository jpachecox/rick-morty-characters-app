import React from "react";
import { Location } from '@/shared/types/domain';
import { PaginationProps } from "@/shared/types/pagination";
import { Card } from "./Card";

interface LocationListProps {
  locations: Location[];
  isLoading?: boolean
  pagination?: PaginationProps
}

export const LocationList: React.FC<LocationListProps> = ({ locations }) => {
  if (!locations || locations.length === 0) {
    return <div>No hay locaciones disponibles.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {locations.map((location) => (
        <Card key={location.url} location={location} />
      ))}
    </div>
  );
};
