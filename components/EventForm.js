import { useMemo, useState } from "react";
import TextInput from "./TextInput";
import SelectOpt from "./SelectOpt";
import Button from "./Button";

const EventForm = () => {
  const [formState, setFormState] = useState({
    title: "",
    time: "",
    meridiem: "",
    email: "",
  });

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
  };
  return (
    <form
      className="bg-white border rounded-md shadow py-2 px-4 mb-2"
      onSubmit={formValidation.bind(this)}
    >
      <h5 className="text-lg font-semibold border-b pb-2 mb-3">Add an Event</h5>
      <TextInput
        id="title"
        name="title"
        label="Event Name"
        placeholder="Event Name"
        value={formState.title}
        onChange={updateFormState.bind(this, "title")}
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
          className="w-3/12 mr-2"
        />
        <SelectOpt
          id="meridiem"
          name="meridiem"
          label="Meridiem"
          options={["AM", "PM"]}
          selected={formState.meridiem}
          onChange={updateFormState.bind(this, "meridiem")}
          className="w-2/12 ml-2"
        />
      </div>
      <TextInput
        id="email"
        name="email"
        label="Invitee"
        placeholder="ex: john_doe@email.com, marry_jane@email.com, ..."
        value={formState.email}
        onChange={updateFormState.bind(this, "email")}
        className="w-8/12 mb-8"
      />
      <div className="flex justify-end w-8/12 mb-6">
        <Button color="blue" outline onClick={() => null} className="mr-6">
          Reset Form
        </Button>
        <Button color="blue" onClick={() => null}>
          Add Event
        </Button>
      </div>
    </form>
  );
};

export default EventForm;
