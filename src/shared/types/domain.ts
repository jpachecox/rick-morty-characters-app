export type Api = {
  info:    Info;
  results: Result[];
}

export type Info = {
  count: number;
  pages: number;
  next:  string;
  prev:  null;
}

export type Result = {
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

export enum Gender {
  Female = "Female",
  Male = "Male",
  Unknown = "unknown",
}

export type Location = {
  id?:        number;
  name?:      string;
  type?:      Type;
  dimension?: string;
  residents?: string[];
  url?:       string;
  created?:   string;
}

export enum Species {
  Alien = "Alien",
  Human = "Human",
}

export enum Status {
  Alive = "Alive",
  Dead = "Dead",
  Unknown = "unknown",
}

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
