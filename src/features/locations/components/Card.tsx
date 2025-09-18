import React from "react";
import Link from "next/link";
import { Location } from "@/shared/types/domain";

/** Components */
import CardComponent from "@/shared/components/Card/Card";
import { Heading } from '@/shared/components';

/** Icons */
import LocationIcon from "@/shared/components/icons/LocationIcon";

interface CardProps {
  location: Location
  onClick?: () => void
  onEdit?: () => void
  onDelete?: () => void
}

export const Card: React.FC<CardProps> = ({ location }) => {
  return (
    <Link href={`/locations/${location.id}`}>
      <CardComponent hover={true} padding={true} className="flex items-center gap-2 px-3 py-2 rounded shadow-md bg-white max-w-sm mx-auto w-full cursor-pointer shadow-dark-50 transition-all duration-300 group hover:bg-[#202127]">
        <LocationIcon className="text-5xl h-12 w-12 text-sky-800 group-hover:text-sky-400" />
        <Heading level="h4" color="light" margin="none" className="group-hover:text-white">{location.name}</Heading>
      </CardComponent>
    </Link>
  );
};
