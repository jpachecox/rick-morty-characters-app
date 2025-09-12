import { configureStore } from "@reduxjs/toolkit";

import charactersReducer from "./slices/character/slice.characters";
import characterDetailReducer from "./slices/character/slice.detail.character";
import locationsReducer from "./slices/location/slice.locations";
import locationDetailReducer from "./slices/location/slice.detail.location";

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    characterDetail: characterDetailReducer,
    locations: locationsReducer,
    locationDetail: locationDetailReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
