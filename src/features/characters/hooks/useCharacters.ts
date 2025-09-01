"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { charactersService } from "../services";
import { RootState, AppDispatch } from "@/store";
import {
  setCharacters,
  setTotalPages,
  setLoading,
  setError,
} from "@/store/slices/character/slice.characters";

export const useCharacters = (page: number = 1, name?: string) => {
    const dispatch = useDispatch<AppDispatch>();
    const { characters, totalPages, loading, error } = useSelector(
        (state: RootState) => state.characters
    );

    useEffect(() => {
        const fetchCharacters = async () => {
            dispatch(setLoading(true));
            try {
                const data = await charactersService.getAll(page, name);

                dispatch(setCharacters(data.results));
                dispatch(setTotalPages(data.info.pages));
                dispatch(setError(null));
            } catch (err) {
                dispatch(setError(err instanceof Error ? err.message : "Error desconocido"));
            } finally {
                dispatch(setLoading(false));
            }
        };

        fetchCharacters();
    }, [dispatch, page, name]);

    return {
        characters,
        totalPages,
        loading,
        error,
    };
};
