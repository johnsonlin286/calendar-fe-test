import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { uuid } from "uuidv4";

import { eventsActions } from "@/stores/redux/event";
import { randomColor } from "@/utils/helpers";
import TextInput from "./TextInput";
import SelectOpt from "./SelectOpt";
import Button from "./Button";
import IconButton from "./IconButton";

const EventForm = ({ date, data, isEdit, onDismiss }) => {
  const [formState, setFormState] = useState({
    title: "",
    time: "1",
    meridiem: "AM",
    email: "",
  });
  const [errMsg, setErrMsg] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      setFormState(() => ({ ...data }));
    }
  }, [data]);

  const timeOptions = useMemo(() => {
    const options = [];
    for (let i = 1; i <= 12; i++) {
      options.push(i);
    }
    return options;
  }, []);

  const updateFormState = (key, value) => {
    setFormState((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const formValidation = (e) => {
    e.preventDefault();
    const err = {};
    if (formState.title.trim().length === 0) {
      err.title = "required!";
    } else delete err.title;
    if (!formState.time) {
      err.time = "required!";
    } else delete err.time;
    if (!formState.meridiem) {
      err.meridiem = "required!";
    } else delete err.meridiem;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formState.email.trim().length === 0) {
      err.email = "required!";
    } else if (
      formState.email
        .split(",")
        .map((email) => regex.test(email.trim()))
        .includes(false)
    ) {
      err.email = "please check Invitee emails";
    } else delete err.email;
    setErrMsg(err);
    if (Object.keys(err).length > 0) {
      return;
    }
    dispatchSubmitEvent();
  };

  const dispatchSubmitEvent = () => {
    if (!isEdit) {
      const payload = {
        date: date,
        event: {
          id: uuid(),
          ...formState,
        },
      };
      payload.event.color = randomColor();
      dispatch(eventsActions.addEvents(payload));
    } else {
      const payload = {
        date: date,
        editedEvent: {
          ...formState,
        },
      };
      dispatch(eventsActions.editEvent(payload));
      onDismiss();
    }
    resetFormState();
  };

  const resetFormState = () => {
    setFormState({
      title: "",
      time: "1",
      meridiem: "AM",
      email: "",
    });
  };

  return (
    <form
      className="bg-white border rounded-md shadow py-2 px-4 mb-2"
      onSubmit={formValidation.bind(this)}
    >
      <div className="flex justify-between border-b pb-2 mb-3">
        <h5 className="text-lg font-semibold">
          {!isEdit ? "Add" : "Edit"} Event
        </h5>
        {isEdit && <IconButton icon="bi:x-circle" onClick={onDismiss} />}
      </div>
      <TextInput
        id="title"
        name="title"
        label="Event Name"
        placeholder="Event Name"
        value={formState.title}
        onChange={updateFormState.bind(this, "title")}
        isInvalid={errMsg.title}
        className="w-8/12 mb-3"
      />
      <div className="flex flex-row items-center mb-3">
        <SelectOpt
          id="time"
          name="time"
          label="Time"
          options={timeOptions}
          selected={formState.time}
          onChange={updateFormState.bind(this, "time")}
          isInvalid={errMsg.time}
          className="w-3/12 mr-2"
        />
        <SelectOpt
          id="meridiem"
          name="meridiem"
          label="Meridiem"
          options={["AM", "PM"]}
          selected={formState.meridiem}
          onChange={updateFormState.bind(this, "meridiem")}
          isInvalid={errMsg.meridiem}
          className="w-2/12 ml-2"
        />
      </div>
      <TextInput
        id="email"
        name="email"
        label="Guests"
        placeholder="ex: john_doe@email.com, marry_jane@email.com, ..."
        value={formState.email}
        onChange={updateFormState.bind(this, "email")}
        isInvalid={errMsg.email}
        className="w-8/12 mb-8"
      />
      <div className="flex justify-end w-8/12 mb-6">
        {!isEdit && (
          <Button
            type="button"
            color="blue"
            outline
            onClick={resetFormState}
            className="mr-6"
          >
            Reset Form
          </Button>
        )}
        <Button type="submit" color="blue">
          {!isEdit ? "Add" : "Edit"} Event
        </Button>
      </div>
    </form>
  );
};

export default EventForm;
