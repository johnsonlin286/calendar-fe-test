import { useDispatch } from "react-redux";

import { eventsActions } from "@/stores/redux/event";
import EventItem from "./EventItem";
import EventForm from "./EventForm";

const EventList = ({ date, events }) => {
  const dispatch = useDispatch();

  const deleteEventHandler = (eventId) => {
    dispatch(eventsActions.deleteEvent({ date: date, eventId: eventId }));
  };

  if (!events) return null;

  return (
    <div className="h-[calc(100%_-_60px)] overflow-auto pt-3">
      <h3 className="text-3xl font-bold mb-6">Events:</h3>
      {events &&
        events.length > 0 &&
        events.map((item, i) => (
          <EventItem
            key={i}
            data={item}
            onDelete={deleteEventHandler.bind(this)}
          />
        ))}
      {events && events.length < 3 && <EventForm date={date} />}
    </div>
  );
};

export default EventList;
