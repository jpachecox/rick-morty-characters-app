"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { locationsService } from "../services";
import { RootState, AppDispatch } from "@/store";
import {
  setLocations,
  setTotalPages,
  setLoading,
  setError,
} from "@/store/slices/location/slice.locations";

export const useLocations = (page: number = 1, name?: string) => {
    const dispatch = useDispatch<AppDispatch>();
    const { locations, totalPages, loading, error } = useSelector(
        (state: RootState) => state.locations
    );

    useEffect(() => {
        const fetchLocations = async () => {
            dispatch(setLoading(true));
            try {
                const data = await locationsService.getAll(page, name);

                dispatch(setLocations(data.results));
                dispatch(setTotalPages(data.info.pages));
                dispatch(setError(null));
            } catch (err) {
                dispatch(setError(err instanceof Error ? err.message : "Error desconocido"));
            } finally {
                dispatch(setLoading(false));
            }
        };

        fetchLocations();
    }, [dispatch, page, name]);

    return {
        locations,
        totalPages,
        loading,
        error,
    };
};
