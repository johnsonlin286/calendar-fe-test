import { createSlice } from "@reduxjs/toolkit";

const eventInitState = {
  event: [],
};

const eventSlice = createSlice({
  name: "event",
  initialState: eventInitState,
  reducers: {
    storeEvent(state, action) {
      if (action.payload) {
        state.event.push(action.payload);
      }
    },
    clearStore(state) {
      state.event = [];
    },
  },
});

export const eventActons = eventSlice.actions;

export default eventSlice.reducer;
