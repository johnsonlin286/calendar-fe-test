import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

import eventSliceReducer from "./event";
import calendarSliceReducer from "./calendar";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["calendar"],
};

const rootReducer = combineReducers({
  event: eventSliceReducer,
  calendar: calendarSliceReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
