import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import BgColor from "./BgColor";

const DateItem = ({ data, onClick }) => {
  const { savedEvents } = useSelector((state) => state.events);
  const [events, setEvents] = useState();

  useEffect(() => {
    if (savedEvents) {
      const thisDate = savedEvents.find(
        (event) => event.date === `${data.year}/${data.month}/${data.date}`
      );
      if (thisDate) {
        setEvents(thisDate.events);
      }
    }
  }, [savedEvents, data, setEvents]);

  const clickHandler = () => {
    if (data.active) onClick(data);
  };
  if (!data.date) {
    return <div className="w-full h-40" />;
  }
  return (
    <div
      className={`relative w-full h-40 border p-2`}
      role={data.active ? "button" : "none"}
      onClick={clickHandler}
    >
      {events && events.length > 0 && (
        <div className="absolute flex flex-col w-full h-full top-0 left-0 -z-10">
          {events.map((event) => (
            <BgColor key={event.id} color={event.color} />
          ))}
        </div>
      )}
      <div className="flex justify-end">
        <strong
          className={`flex justify-center items-center w-8 h-8 ${
            data.day.toLowerCase() === "sunday" ? "text-red-400" : "text-black"
          } ${data.today ? "bg-red-900 text-white rounded-full" : ""} ${
            !data.active ? "text-opacity-20" : ""
          } p-2`}
        >
          {data.date || ""}
        </strong>
      </div>
    </div>
  );
};

export default DateItem;
