/**
 * Lista paginada de personajes con búsqueda y filtros.
 */
import React from "react";
import { Result } from '@/shared/types/domain';
import { PaginationProps } from "@/shared/types/pagination";
import { Card } from "./Card";

interface CharacterListProps {
  characters: Result[];
  isLoading?: boolean
  pagination?: PaginationProps
}

export const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
  if (!characters || characters.length === 0) {
    return <div>No hay personajes disponibles.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {characters.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </div>
  );
};
