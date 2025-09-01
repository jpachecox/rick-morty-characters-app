import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Result } from "@/shared/types/domain";

interface CharactersState {
  characters: Result[];
  totalPages: number;
  page: number;
  search: string;
  recentCharacters: Result[];
  loading: boolean;
  error: string | null;
}

const initialState: CharactersState = {
  characters: [],
  totalPages: 1,
  page: 1,
  search: "",
  recentCharacters: [],
  loading: false,
  error: null,
};

const charactersSlice = createSlice({
    name: "characters",
    initialState,
    reducers: {
        setCharacters(state, action: PayloadAction<Result[]>) {
            state.characters = action.payload;
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
        setRecentCharacters(state, action: PayloadAction<Result[]>) {
            state.recentCharacters = action.payload;
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
  setCharacters,
  setTotalPages,
  setPage,
  setSearch,
  setRecentCharacters,
  setLoading,
  setError,
} = charactersSlice.actions;

export default charactersSlice.reducer;
