import { backgroundColor } from "@/utils/helpers";
import { useMemo } from "react";

const EventItem = ({ data, color }) => {
  const bgColor = backgroundColor(color);
  // if (!data) return null;
  return (
    <div
      className={`event-item flex justify-between items-center rounded-md ${bgColor} text-white py-2 px-4 mb-2`}
    >
      <div>title</div>
      <div>time</div>
      <div>delete</div>
    </div>
  );
};

export default EventItem;
