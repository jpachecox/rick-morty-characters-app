"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useCharacter } from "@/features/characters/hooks/useCharacter";
import { addRecentCharacter } from "@/shared/utils/recentCharacters";

export default function CharacterDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const { character, loading, error } = useCharacter(id);
  
  useEffect(() => {
    if (character) {
      addRecentCharacter({
        id: Number(character.id),
        name: character.name,
        image: character.image,
      });
    }
  }, [character]);

  if (loading) {
    return <div className="p-6 text-rick-blue-500">Cargando personaje...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-500">{error}</div>;
  }

  if (!character) {
    return <div className="p-6 text-gray-500">No se encontró el personaje.</div>;
  }

  return (
    <main className="container mx-auto py-8">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Imagen */}
        <Image
          src={character.image!}
          alt={character.name!}
          width={300}
          height={300}
          className="rounded-lg shadow-lg"
        />

        {/* Información */}
        <div>
          <h1 className="text-3xl font-bold text-rick-blue-600 mb-4">
            {character.name}
          </h1>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Estado:</strong> {character.status}</li>
            <li><strong>Especie:</strong> {character.species}</li>
            {character.type && <li><strong>Tipo:</strong> {character.type}</li>}
            <li><strong>Género:</strong> {character.gender}</li>
          </ul>

          {/* Origen */}
          {character.origin && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-rick-blue-500">Origen</h2>
              <p>{character.origin.name}</p>
            </div>
          )}

          {/* Ubicación */}
          {character.location && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-rick-blue-500">Ubicación</h2>
              <p>{character.location.name}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
