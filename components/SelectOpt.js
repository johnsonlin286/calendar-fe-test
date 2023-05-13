const SelectOpt = ({
  id,
  name,
  label,
  options,
  selected,
  onChange,
  isInvalid,
  className,
}) => {
  return (
    <div className={`select-option ${className || ""}`}>
      <label htmlFor={id} className="block text-sm mb-1 pl-2">
        {label || " "}
      </label>
      {options ? (
        <select
          id={id}
          name={name}
          value={selected}
          onChange={(e) => onChange(e.currentTarget.value)}
          className="border-b border-black w-full p-2 focus:outline-none"
        >
          {options.map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <p>no options given</p>
      )}
      {isInvalid && <span>{isInvalid}</span>}
    </div>
  );
};

export default SelectOpt;
