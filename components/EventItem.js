import { useEffect, useMemo, useState } from "react";
import IconButton from "./IconButton";
import EventForm from "./EventForm";

const EventItem = ({ date, data, onDelete }) => {
  const [openEditForm, setOpenEditForm] = useState(false);
  const backgroundColor = () => {
    switch (data.color) {
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

  return (
    <div className={`event-item rounded-md ${backgroundColor()}`}>
      <div className="flex justify-between items-center text-white py-2 px-4 mb-2">
        <div className="flex-1">{data.title}</div>
        <div className="flex-1">{`${data.time} ${data.meridiem}`}</div>
        <div className="flex justify-end flex-1">
          <IconButton
            name="Edit"
            icon="bi:pencil-square"
            onClick={() => setOpenEditForm(true)}
          />
          <IconButton
            name="Delete"
            icon="bi:trash3"
            onClick={() => onDelete(data.id)}
          />
        </div>
      </div>
      {openEditForm && (
        <EventForm
          date={date}
          data={data}
          isEdit
          onDismiss={() => setOpenEditForm(false)}
        />
      )}
    </div>
  );
};

export default EventItem;
