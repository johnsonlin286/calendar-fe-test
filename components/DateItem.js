const DateItem = ({ data, onClick }) => {
  const clickHandler = () => {
    if (data.active) onClick(data);
  };
  if (!data.date) {
    return <div className="w-full h-40" />;
  }
  return (
    <div
      className="w-full h-40 border p-2"
      role={data.active ? "button" : "none"}
      onClick={clickHandler}
    >
      <div className="flex justify-end">
        <strong
          className={`flex justify-center items-center w-8 h-8 ${
            data.today ? "bg-red-400 rounded-full" : ""
          } ${!data.active ? "text-gray-300" : ""} p-2`}
        >
          {data.date || ""}
        </strong>
      </div>
    </div>
  );
};

export default DateItem;
