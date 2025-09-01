/**
 * Lista paginada de personajes con búsqueda y filtros.
 */
import React from "react";
import { Domain } from "@/features/characters/types";
import { PaginationProps } from "@/shared/types/pagination.types";
import { Card } from "./Card";

interface CharacterListProps {
  characters: Domain[];
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
