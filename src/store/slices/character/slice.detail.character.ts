import { Character } from "@/shared/types/domain";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CharacterState {
    character: Character | null;
    loading: boolean;
    error: string | null;
}

const initialState: CharacterState = {
    character: null,
    loading: false,
    error: null,
};

const characterSlice = createSlice({
    name: "character",
    initialState,
    reducers: {
        setCharacter(state, action: PayloadAction<Character | null>) {
            state.character = action.payload;
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
    setCharacter, 
    setLoading, 
    setError 
} = characterSlice.actions;

export default characterSlice.reducer;
