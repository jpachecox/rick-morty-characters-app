const STORAGE_KEY = "recent_characters";

export interface RecentCharacter {
  id: number;
  name: string;
  image: string;
}

export function getRecentCharacters(): RecentCharacter[] {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? (JSON.parse(stored) as RecentCharacter[]) : [];
}

export function addRecentCharacter(newCharacter: RecentCharacter): void {
  // Evitar ejecutar en entornos donde no existe localStorage (SSR, tests, etc.)
  if (typeof window === "undefined") return;

  // Recuperar la lista actual de personajes visitados
  let recentCharacters: RecentCharacter[] = getRecentCharacters();

  // Quitar cualquier aparición previa del personaje para evitar duplicados
  recentCharacters = recentCharacters.filter(
    (storedCharacter) => storedCharacter.id !== newCharacter.id
  );

  // Colocar el nuevo personaje al inicio (es el más reciente)
  recentCharacters.unshift(newCharacter);

  // Conservar solo los últimos 5 personajes visitados
  if (recentCharacters.length > 5) {
    recentCharacters = recentCharacters.slice(0, 5);
  }

  // Guardar la lista actualizada en localStorage
  localStorage.setItem(STORAGE_KEY, JSON.stringify(recentCharacters));
}

