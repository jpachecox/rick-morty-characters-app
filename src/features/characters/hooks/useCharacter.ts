"use client";

import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch } from "@/store";
import { charactersService } from "../services";
import { setCharacter, setLoading, setError } from "@/store/slices/character/slice.detail.character";
import { characterSelector } from "@/store/slices/character/character.selector";

export const useCharacter = (id: string) => {
    const dispatch = useDispatch<AppDispatch>();
    const { character, loading, error } = useSelector(characterSelector);

    const fetchCharacter = useCallback(async () => {
        if (!id) return;

        dispatch(setLoading(true));
        try {
            const data = await charactersService.getById(id);
            dispatch(setCharacter(data));
            dispatch(setError(null));
        } catch (err) {
            dispatch(setError(err instanceof Error ? err.message : "Error desconocido"));
        } finally {
            dispatch(setLoading(false));
        }
    }, [dispatch, id]);

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
