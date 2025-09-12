"use client";

import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch } from "@/store";
import { locationsService } from "../services";
import { setLocation, setLoading, setError } from "@/store/slices/location/slice.detail.location";
import { locationSelector } from "@/store/slices/location/location.selector";

export const useLocation = (id: string) => {
    const dispatch = useDispatch<AppDispatch>();
    const { location, loading, error } = useSelector(locationSelector);

    const fetchLocation = useCallback(async () => {
        if (!id) return;

        dispatch(setLoading(true));
        try {
            const data = await locationsService.getById(id);
            dispatch(setLocation(data));
            dispatch(setError(null));
        } catch (err) {
            dispatch(setError(err instanceof Error ? err.message : "Error desconocido"));
        } finally {
            dispatch(setLoading(false));
        }
    }, [dispatch, id]);

    useEffect(() => {
        fetchLocation();
    }, [fetchLocation]);

    return {
        location,
        loading,
        error,
        refreshLocation: fetchLocation,
    };
};
