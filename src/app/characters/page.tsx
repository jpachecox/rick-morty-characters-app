"use client";

import { useState } from "react";
import { CharacterList } from "@/features/characters/components/List";
import { useCharacters } from "@/features/characters/hooks";
import { Pagination } from "@/shared/components/Pagination";

export default function CharactersPage() {
  const [page, setPage] = useState(1);
  const { characters, totalPages, loading } = useCharacters(page);

  return (
    <main className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6 text-rick-blue-600">
        Personajes
      </h1>
      <CharacterList characters={characters} />

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
        disabled={loading}
        size="sm"
        variant="secondary"
        totalItems={characters?.length ?? 0}
        itemsPerPage={20}
      />
    </main>
  );
}
