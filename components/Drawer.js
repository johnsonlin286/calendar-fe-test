import { useContext, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { DrawerContext } from "@/stores/context/drawer";
import { calendarActions } from "@/stores/redux/calendar";
import IconButton from "./IconButton";
import EventItem from "./EventItem";
import EventForm from "./EventForm";

const Drawer = () => {
  const { visible, hideDrawer } = useContext(DrawerContext);
  const { pickedDate } = useSelector((state) => state.calendar);
  const dispatch = useDispatch();
  const backdropElm = useRef(null);
  const drawerElm = useRef(null);

  const onDismissDrawer = () => {
    if (backdropElm.current && drawerElm.current) {
      backdropElm.current.classList.add("hide");
      drawerElm.current.classList.add("hide");
      backdropElm.current.addEventListener("animationend", () => {
        hideDrawer();
        dispatch(calendarActions.clearPickedDate());
      });
    }
  };

  if (!visible) return null;

  return (
    <>
      <div
        ref={backdropElm}
        className="backdrop fixed w-full h-full top-0 left-0 bg-black/50"
        onClick={onDismissDrawer}
      />
      <div
        ref={drawerElm}
        className="drawer fixed top-0 left-0 w-1/2 h-full bg-white rounded-r-lg shadow-xl py-6 px-8"
      >
        {pickedDate && (
          <>
            <div className="flex justify-between items-center border-b pb-6">
              <h2 className="text-4xl font-extrabold">
                {`${pickedDate.day}, ${pickedDate.date}-${pickedDate.month}-${pickedDate.year}`}
              </h2>
              <IconButton
                icon={"bi:x-circle"}
                size={22}
                onClick={onDismissDrawer}
              />
            </div>
            <div className="h-[calc(100%_-_60px)] overflow-auto pt-3">
              <h3 className="text-3xl font-bold mb-6">Events:</h3>
              <EventItem color={"red"} />
              <EventItem color={"green"} />
              <EventItem color={"blue"} />
              <EventForm />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Drawer;
