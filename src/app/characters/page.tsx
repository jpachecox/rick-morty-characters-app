"use client";

import { useState } from "react";
import { CharacterList } from "@/features/characters/components/List";
import { useCharacters } from "@/features/characters/hooks/useCharacters";
import { Pagination } from "@/shared/components/Pagination";
import Input from "@/components/Input/Input";

export default function CharactersPage() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const { characters, totalPages, loading, error } = useCharacters(page, search);

  return (
    <main className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6 text-rick-blue-600">Personajes</h1>

      {loading && (
        <p className="text-blue-500 mt-4">Cargando personajes...</p>
      )}

      <div className="width-full mb-6">
        <Input
          label="Buscar personaje"
          placeholder="Escribe un nombre..."
          fullWidth
          value={search}
          onChange={(e) => {
            setPage(1);
            setSearch(e.target.value);
          }}
        />
      </div>

      <CharacterList characters={characters} />

      {!loading && characters.length === 0 && !error && (
        <p className="text-gray-500 mt-4">
          No se encontraron personajes.
        </p>
      )}

      {error && (
        <p className="text-red-600 font-medium mt-4">
          {error}
        </p>
      )}

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
        disabled={loading}
        size="md"
        variant="secondary"
        totalItems={characters?.length ?? 0}
        itemsPerPage={20}
      />
    </main>
  );
}
