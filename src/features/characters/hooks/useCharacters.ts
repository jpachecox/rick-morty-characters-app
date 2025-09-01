"use client";

import { useState, useEffect, useCallback } from "react";
import { Domain } from "../types";
import { charactersService } from "../services";

export const useCharacters = (page: number = 1, name?: string) => {
    const [characters, setCharacters] = useState<Domain[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchCharacters = useCallback(async () => {
        try {
            setLoading(true);
            const data = await charactersService.getAll(page, name);
            setCharacters(data);
            setError(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Error desconocido");
        } finally {
            setLoading(false);
        }
    }, [page, name]);

    useEffect(() => {
        fetchCharacters();
    }, [fetchCharacters]);

    return {
        characters,
        loading,
        error,
        refreshCharacters: fetchCharacters,
    };
};
