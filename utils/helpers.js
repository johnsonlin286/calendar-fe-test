import { DAYS, MONTHS, COLORS } from "./constant";

export const numberOfDays = (month, year, today) => {
  const dates = [];

  const date = new Date(year, month, 1);

  while (date.getMonth() === month) {
    const item = new Date(date);
    dates.push({
      date: item.getDate(),
      day: DAYS[item.getDay()],
      month: MONTHS[item.getMonth()],
      year: item.getFullYear(),
      today: today === item.getDate() ? true : false,
      active: item.getDate() < today ? false : true,
    });
    date.setDate(date.getDate() + 1);
  }
  return dates;
};

export const calendarData = (dates) => {
  if (!dates || dates.length === 0) return [];

  const firstDay = dates[0].day;
  const indexOfFDay = DAYS.indexOf(firstDay);
  const daysBefore = DAYS.filter((day, i) => i < indexOfFDay).map((day) => {
    return {
      name: day,
      active: false,
    };
  });

  const calendar = [...daysBefore, ...dates];

  return calendar;
};

export const randomColor = () => {
  const random = Math.floor(Math.random() * COLORS.length);
  return COLORS[random];
};
