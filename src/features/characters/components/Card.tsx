import React from "react";
import CardComponent from "@/components/Card/Card";
import Image from "next/image";
import { Domain } from "@/features/characters/types";

interface CardProps {
  character: Domain
  onClick?: () => void
  onEdit?: () => void
  onDelete?: () => void
}

export const Card: React.FC<CardProps> = ({ character }) => {
  return (
    <CardComponent hover={true} padding={true} className="max-w-sm mx-auto w-full">
      {character.image && (
        <Image
          src={character.image}
          alt={character.name}
          width={300}
          height={192}
          className="w-full h-48 object-cover rounded-md mb-3"
        />
      )}
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        {character.name}
      </h3>
      <p className="text-gray-600 text-sm">{character.species}</p>

      {/* footer con acciones */}
      <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
        <a
          className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
          href={`/characters/${character.id}`}
        >
          View details
        </a>
      </div>
    </CardComponent>
  );
};
