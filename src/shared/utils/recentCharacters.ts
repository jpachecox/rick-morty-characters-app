import { Character } from "@/shared/types/domain";

const STORAGE_KEY = "recent_characters";
const MAX_RECENT = Number(process.env.NEXT_PUBLIC_MAX_RECENT_CHARACTERS) || 5;

export function getRecentCharacters(): Character[] {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? (JSON.parse(stored) as Character[]) : [];
}

export function addRecentCharacter(newCharacter: Character): void {
  // Evitar ejecutar en entornos donde no existe localStorage (SSR, tests, etc.)
  if (typeof window === "undefined") return;

  // Recuperar la lista actual de personajes visitados
  let recentCharacters: Character[] = getRecentCharacters();

  // Quitar cualquier aparición previa del personaje para evitar duplicados
  recentCharacters = recentCharacters.filter(
    (storedCharacter) => storedCharacter.id !== newCharacter.id
  );

  // Colocar el nuevo personaje al inicio (es el más reciente)
  recentCharacters.unshift(newCharacter);

  // Conservar solo los últimos #MAX_RECENT personajes visitados
  if (recentCharacters.length > MAX_RECENT) {
    recentCharacters = recentCharacters.slice(0, MAX_RECENT);
  }

  // Guardar la lista actualizada en localStorage
  localStorage.setItem(STORAGE_KEY, JSON.stringify(recentCharacters));
}

