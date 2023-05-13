import { createSlice } from "@reduxjs/toolkit";

// data contract
/*[
  {
    date: '2023/May/13',
    events: [
      {
        name: 'Bday Party',
        time: 1,
        meridiem: 'PM',
        email: 'john_doe@email.com, marry_jane@email.com'
        color: 'red',
      },
      ...
    ]
  },
  ...
]*/
// payload contract
/*
  {
    date: '2023/May/13',
    event: {
      name: 'Bday Party',
      time: 1,
      meridiem: 'PM',
      email: 'john_doe@email.com, marry_jane@email.com'
      color: 'red',
    }
  }
*/

const eventsInitState = {
  savedEvents: [],
};

const eventsSlice = createSlice({
  name: "events",
  initialState: eventsInitState,
  reducers: {
    addEvents(state, action) {
      if (action.payload) {
        const isExist = state.savedEvents.find(
          (event) => event.date === action.payload.date
        );
        if (isExist) {
          const eventIndex = state.savedEvents.indexOf(isExist);
          state.savedEvents[eventIndex].events.push(action.payload.event);
        } else {
          state.savedEvents.push({
            date: action.payload.date,
            events: [action.payload.event],
          });
        }
      }
    },
    clearEvents(state) {
      if (state.savedEvents.length > 0) {
        state.savedEvents = [];
      }
    },
    deleteEvent(state, action) {
      if (action.payload) {
        const { date, eventId } = action.payload;
        const isExist = state.savedEvents.find((event) => event.date === date);
        if (!isExist) return;
        const indexOfTarget = isExist.events.findIndex(
          (event) => event.id === eventId
        );
        isExist.events.splice(indexOfTarget, 1);
      }
    },
    editEvent(state, action) {
      if (action.payload) {
        const { date, eventId, editEvent } = action.payload;
        const isExist = state.savedEvents.find((event) => event.date === date);
        if (!isExist) return;
      }
    },
  },
});

export const eventsActions = eventsSlice.actions;

export default eventsSlice.reducer;
