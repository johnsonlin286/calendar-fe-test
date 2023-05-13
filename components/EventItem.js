import { useMemo } from "react";

const EventItem = ({ data, color }) => {
  const backgroundColor = useMemo(() => {
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
  }, [color]);
  // if (!data) return null;
  return (
    <div
      className={`event-item flex justify-between items-center rounded-md ${backgroundColor} text-white py-2 px-4 mb-2`}
    >
      <div>title</div>
      <div>time</div>
      <div>edit | delete</div>
    </div>
  );
};

export default EventItem;
