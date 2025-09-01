import { Status } from "@/features/characters/types/status";

/**
 * Utilidades para trabajar con el status de personajes
 */
export const StatusUtils = {
    /**
     * Verifica si un personaje está vivo
     */
    isAlive: (status: Status): boolean => status === "Alive",
    
    /**
     * Verifica si un personaje está muerto
     */
    isDead: (status: Status): boolean => status === "Dead",
    
    /**
     * Verifica si el status es desconocido
     */
    isUnknown: (status: Status): boolean => status === "Unknown",

    /**
     * Filtra personajes por status
     */
    filterByStatus: <T extends { status: Status }>(
        characters: T[], 
        status: Status
    ): T[] => {
        return characters.filter(character => character.status === status)
    },
    
    /**
     * Cuenta personajes por status
     */
    countByStatus: <T extends { status: Status }>(
        characters: T[]
    ): Record<Status, number> => {
        return characters.reduce((acc, character) => {
        acc[character.status] = (acc[character.status] || 0) + 1
        return acc
        }, {} as Record<Status, number>)
    }
}
