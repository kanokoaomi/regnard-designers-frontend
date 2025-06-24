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
import { authReducer } from "./auth/authSlice";

const jewellerysConfig = {
  key: "jewellerysKey",
  storage,
  //   whitelist: [""], // blacklist: [""]
};

const authConfig = {
  key: "authKey",
  storage,
  whitelist: ["token"], // blacklist: [""]
};

export const store = configureStore({
  reducer: {
    jewellery: persistReducer(jewellerysConfig, jewelleryReducer),
    auth: persistReducer(authConfig, authReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
