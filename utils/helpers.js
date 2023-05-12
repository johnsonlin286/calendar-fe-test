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

export const backgroundColor = (color) => {
  switch (color) {
    case "red":
      return "bg-red-500";
    case "orange":
      return "bg-orange-500";
    case "ember":
      return "bg-amber-500";
    case "yellow":
      return "bg-yellow-500";
    case "lime":
      return "bg-lime-500";
    case "green":
      return "bg-green-500";
    case "emerald":
      return "bg-emerald-500";
    case "teal":
      return "bg-teal-500";
    case "cyan":
      return "bg-cyan-500";
    case "sky":
      return "bg-sky-500";
    case "blue":
      return "bg-blue-500";
    case "indigo":
      return "bg-indigo-500";
    case "violet":
      return "bg-violet-500";
    case "purple":
      return "bg-purple-500";
    case "fuchsia":
      return "bg-fuchsia-500";
    case "pink":
      return "bg-pink-500";
    case "rose":
      return "bg-rose-500";
    default:
      return "bg-black";
  }
};
