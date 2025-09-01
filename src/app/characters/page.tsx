"use client";

import { CharacterList } from "@/features/characters/components/List";
import { useCharacters } from "@/features/characters/hooks";

export default function CharactersPage() {
  const { characters } = useCharacters();

  return (
    <main className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6 text-rick-blue-600">
        Personajes
      </h1>
      <CharacterList characters={characters} />
    </main>
  );
}
