import { Location } from "@/shared/types/domain";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LocationState {
    location: Location | null;
    loading: boolean;
    error: string | null;
}

const initialState: LocationState = {
    location: null,
    loading: false,
    error: null,
};

const locationSlice = createSlice({
    name: "location",
    initialState,
    reducers: {
        setLocation(state, action: PayloadAction<Location | null>) {
            state.location = action.payload;
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
        setError(state, action: PayloadAction<string | null>) {
            state.error = action.payload;
        },
    },
});

export const { 
    setLocation, 
    setLoading, 
    setError 
} = locationSlice.actions;

export default locationSlice.reducer;
