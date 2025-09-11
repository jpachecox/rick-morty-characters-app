import { Type } from "@/shared/types/domain";

/**
 * Utilidades para manejar tipos de locaciones
 */
export const TypeLocationsUtils = {

    /**
     * 
     * @param type Tipo de locación
     * @returns Verifica si una locación es un planeta
     */
    isPlanet: (type: Type): boolean => type === "Planet",
    
    /**
     * 
     * @param type Tipo de locación
     * @returns Verifica si una locación es un cúmulo
     */
    isCluster: (type: Type): boolean => type === "Cluster",
    
    /**
     * 
     * @param type Tipo de locación
     * @returns Verifica si una locación es una estación espacial
     */
    isSpace: (type: Type): boolean => type === "Space station",

    /**
     * 
     * @param type Tipo de locación
     * @returns Verifica si una locación es un Microverso
     */
    isMicroverse: (type: Type): boolean => type === "Microverse",

    /**
     * 
     * @param type Tipo de locación
     * @returns Verifica si una locación es una TV
     */
    isTv: (type: Type): boolean => type === "TV",

    /**
     * 
     * @param type Tipo de locación
     * @returns Verifica si una locación es un Resort
     */
    isResort: (type: Type): boolean => type === "Resort",

    /**
     * 
     * @param type Tipo de locación
     * @returns Verifica si una locación es un Pueblo Fantasioso
     */
    isFantasy: (type: Type): boolean => type === "Fantasy town",

    /**
     * 
     * @param type Tipo de locación
     * @returns Verifica si una locación es un Sueño
     */
    isDream: (type: Type): boolean => type === "Dream",

    /**
     * Filtra locaciones por tipo
     */
    filterByType: <T extends { type: Type }>(
        locations: T[], 
        type: Type
    ): T[] => {
        return locations.filter(location => location.type === type)
    },
    
    /**
     * Cuenta locaciones por tipo
     */
    countByStatus: <T extends { type: Type }>(
        locations: T[]
    ): Record<Type, number> => {
        return locations.reduce((accumulator, location) => {
        accumulator[location.type] = (accumulator[location.type] || 0) + 1
        return accumulator
        }, {} as Record<Type, number>)
    }
}
