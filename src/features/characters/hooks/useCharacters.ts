"use client";

import { useState, useEffect } from "react";
import { Domain } from "../types";
import { charactersService } from "../services";
import { ApiResponse } from "@/shared/types/pagination.types";

export const useCharacters = (page: number = 1, name?: string) => {
    const [characters, setCharacters] = useState<Domain[]>([]);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                setLoading(true);
                const data: ApiResponse<Domain> = await charactersService.getAll(page, name);

                setCharacters(data.results);
                setTotalPages(data.info.pages);
                setError(null);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Error desconocido");
            } finally {
                setLoading(false);
            }
        };

        fetchCharacters();
    }, [page, name]);

    return {
        characters,
        totalPages,
        loading,
        error,
    };
};
