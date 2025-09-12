import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Location } from "@/shared/types/domain";

interface LocationsState {
  locations: Location[];
  totalPages: number;
  page: number;
  search: string;
  recentLocations: Location[];
  loading: boolean;
  error: string | null;
}

const initialState: LocationsState = {
  locations: [],
  totalPages: 1,
  page: 1,
  search: "",
  recentLocations: [],
  loading: false,
  error: null,
};

const locationsSlice = createSlice({
    name: "locations",
    initialState,
    reducers: {
        setLocations(state, action: PayloadAction<Location[]>) {
            state.locations = action.payload;
        },
        setTotalPages(state, action: PayloadAction<number>) {
            state.totalPages = action.payload;
        },
        setPage(state, action: PayloadAction<number>) {
            state.page = action.payload;
        },
        setSearch(state, action: PayloadAction<string>) {
            state.search = action.payload;
        },
        setRecentLocations(state, action: PayloadAction<Location[]>) {
            state.recentLocations= action.payload;
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
  setLocations,
  setTotalPages,
  setPage,
  setSearch,
  setRecentLocations,
  setLoading,
  setError,
} = locationsSlice.actions;

export default locationsSlice.reducer;
