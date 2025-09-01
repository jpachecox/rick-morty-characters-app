if (!process.env.NEXT_PUBLIC_API_URL) {
  throw new Error("Falta configurar NEXT_PUBLIC_API_URL en .env.local");
}

/**
 * URL base del API
 */
export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

/**
 * Endpoints principales de la API de Rick & Morty
 */
export const ENDPOINTS = {
  CHARACTERS: `${BASE_URL}/character`,
  LOCATIONS: `${BASE_URL}/location`,
  EPISODES: `${BASE_URL}/episode`,
} as const;
