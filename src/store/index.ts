import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./slices/character/slice.characters";
import characterDetailReducer from "./slices/character/slice.detail.character";

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    characterDetail: characterDetailReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
