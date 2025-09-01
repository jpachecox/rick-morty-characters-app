/** 
 * Representa la estructura de un personaje en el dominio de la aplicación
 * y se utiliza internamente en la applicación.
 */
import { Status } from "./status";

export interface Domain {
  id: string;
  name: string;
  status: Status;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[]; 
  url: string;
  createdAt: Date; 
}
