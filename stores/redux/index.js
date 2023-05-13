import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import storage from "redux-persist/lib/storage";
import storage from "redux-persist/lib/storage/session";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

import calendarSliceReducer from "./calendar";
import eventsSliceReducer from "./event";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["calendar"],
};

const rootReducer = combineReducers({
  calendar: calendarSliceReducer,
  events: eventsSliceReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);

export default store;
