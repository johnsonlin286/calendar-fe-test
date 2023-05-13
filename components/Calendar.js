import { useContext, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { numberOfDays, calendarData } from "@/utils/helpers";
import { DrawerContext } from "@/stores/context/drawer";
import { DAYS } from "@/utils/constant";
import { calendarActions } from "@/stores/redux/calendar";
import DateItem from "./DateItem";

const enviroment = process.env.ENVIROMENT;

const Calendar = () => {
  const { setDrawer } = useContext(DrawerContext);
  const dispatch = useDispatch();
  const isMounted = useRef(false);
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    // page mounted
    if (enviroment === "develop" && !isMounted.current) {
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
  }, [isMounted, setCalendar]);

  const dispatchPickedDate = (date) => {
    dispatch(calendarActions.setPickedDate(date));
    setDrawer();
  };

  return (
    <div className="calendar">
      <ul className="grid grid-cols-7 border border-black">
        {DAYS.map((day, i) => (
          <li
            key={i}
            className={`text-center font-semibold ${
              day.toLowerCase() === "sunday" ? "text-red-400" : ""
            } py-3 border-x border-black first:border-l-0 last:border-r-0`}
          >
            {day}
          </li>
        ))}
      </ul>
      <div className="grid grid-cols-7">
        {calendar &&
          calendar.length > 0 &&
          calendar.map((date, i) => (
            <DateItem
              key={i}
              data={date}
              onClick={dispatchPickedDate.bind(this)}
            />
          ))}
      </div>
    </div>
  );
};

export default Calendar;
