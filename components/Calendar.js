import { useEffect, useRef, useState } from "react";

import { numberOfDays, calendarData } from "@/utils/helpers";
import { DAYS } from "@/utils/constant";
import DateItem from "./DateItem";

const Calendar = () => {
  const isMounted = useRef(false);
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    const today = new Date();
    const dates = numberOfDays(
      today.getMonth(),
      today.getFullYear(),
      today.getDate()
    );
    setCalendar(() => calendarData(dates));
  }, [isMounted]);

  useEffect(() => {
    if (calendar.length === 0) return;
    // find and mark today
  }, [calendar]);

  return (
    <div className="calendar">
      <ul className="grid grid-cols-7 border border-black">
        {DAYS.map((day, i) => (
          <li
            key={i}
            className="text-center py-3 border-x border-black first:border-l-0 last:border-r-0"
          >
            {day}
          </li>
        ))}
      </ul>
      <div className="grid grid-cols-7">
        {calendar &&
          calendar.length > 0 &&
          calendar.map((date, i) => <DateItem key={i} data={date} />)}
      </div>
    </div>
  );
};

export default Calendar;
