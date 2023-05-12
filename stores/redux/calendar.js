import { createSlice } from "@reduxjs/toolkit";

const calendarInitState = {
  pickedDate: null,
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState: calendarInitState,
  reducers: {
    setPickedDate(state, action) {
      if (action.payload) {
        state.pickedDate = action.payload;
      }
    },
    clearPickedDate(state) {
      state.pickedDate = null;
    },
  },
});

export const calendarActions = calendarSlice.actions;

export default calendarSlice.reducer;
