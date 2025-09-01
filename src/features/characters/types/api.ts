/**
 * Representa la estructura de un personaje tal como se recibe de la API de Rick and Morty
 */
import { Status } from "./status";

export interface Api {
    id: number;
    name: string;
    status: Status;
    species: string;
    type: string;
    gender: string;
    origin: { name: string; url: string };
    location: { name: string; url: string };
    image: string;
    episode: string[];
    url: string;
    created: string;
}
