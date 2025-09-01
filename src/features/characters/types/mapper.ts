/**
 * Función que mapea un personaje desde la estructura de la API a la estructura del dominio de la aplicación.
 */
import { Api } from "./api";
import { Domain } from "./domain";

export const mapApiToDomain = (api: Api): Domain => ({
  id: String(api.id),
  name: api.name,
  status: api.status,
  species: api.species,
  type: api.type,
  gender: api.gender,
  origin: {
    name: api.origin.name,
    url: api.origin.url,
  },
  location: {
    name: api.location.name,
    url: api.location.url,
  },
  image: api.image,
  episode: api.episode.map((e) => e),
  url: api.url,
  createdAt: new Date(api.created),
});
