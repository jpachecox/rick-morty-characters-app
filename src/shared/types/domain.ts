/**
 * API response wrapper 
 * @template T - The type of the results array
 * @property {Info} info - Information about the API response
 * @property {T[]} results - Array of results of type T 
 * @example
 * Uso:
 * Api<Character> cuando consultas personajes
 * Api<Location> cuando consultas locaciones  
 * Api<Episode> cuando consultas episodios
 * 
 */
export type Api<T = unknown> = {
  info: Info;
  results: T[];
}

/**
 * Info about the API response
 */
export type Info = {
  count: number;
  pages: number;
  next:  string | null;
  prev:  string | null;
}

/**
 * Character from the API
 */
export type Character = {
  id?:       number;
  name?:     string;
  status?:   Status;
  species?:  Species;
  type?:     string;
  gender?:   Gender;
  origin?:   Location;
  location?: Location;
  image?:    string;
  episode?:  string[];
  url?:      string;
  created?:  string;
}

/**
 * Gender from the API
 */
export enum Gender {
  Female = "Female",
  Male = "Male",
  Unknown = "unknown",
}

/**
 * Location from the API
 */
export type Location = {
  id?:        number;
  name?:      string;
  type?:      Type;
  dimension?: string;
  residents?: string[];
  url?:       string;
  created?:   string;
}

/**
 *  Species from the API
 */
export enum Species {
  Alien = "Alien",
  Human = "Human",
}

/**
 * Status from the API
 */
export enum Status {
  Alive = "Alive",
  Dead = "Dead",
  Unknown = "unknown",
}

/**
 * Type from the API
 */
export enum Type {
  Planet = "Planet",
  Cluster = "Cluster",
  Space = "Space station",
  Microverse = "Microverse",
  Tv = "TV",
  Resort = "Resort",
  Fantasy = "Fantasy town",
  Dream = "Dream"
}

export type CharacterResponse = Api<Character>;
export type LocationResponse = Api<Location>;
