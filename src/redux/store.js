import { configureStore } from "@reduxjs/toolkit";
import { jewelleryReducer } from "./jewellery/jewellerySlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const jewellerysConfig = {
  key: "jewellerysKey",
  storage,
  //   whitelist: [""], // blacklist: [""]
};

export const store = configureStore({
  reducer: {
    jewelleryReducer: persistReducer(jewellerysConfig, jewelleryReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
