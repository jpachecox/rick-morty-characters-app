"use client";

import { useState, useEffect, useCallback } from "react";
import { Domain } from "../types";
import { charactersService } from "../services";

export const useCharacter = (id: string) => {
    const [character, setCharacter] = useState<Domain | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchCharacter = useCallback(async () => {
        if (!id) return;

        try {
            setLoading(true);
            const data = await charactersService.getById(id);
            setCharacter(data);
            setError(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Error desconocido");
        } finally {
            setLoading(false);
        }
    }, [id]);

    useEffect(() => {
        fetchCharacter();
    }, [fetchCharacter]);

    return {
        character,
        loading,
        error,
        refreshCharacter: fetchCharacter,
    };
};
