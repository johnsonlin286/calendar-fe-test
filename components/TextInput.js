const TextInput = ({
  id,
  name,
  label,
  type,
  placeholder,
  value,
  onChange,
  isInvalid,
  className,
}) => {
  return (
    <div className={`text-input ${className || ""}`}>
      <label htmlFor={id} className="block text-sm mb-1 pl-2">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type || "text"}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
        className="border-b border-black w-full p-2 focus:outline-none placeholder:text-sm"
      />
      {isInvalid && <span className="text-xs text-red-500">{isInvalid}</span>}
    </div>
  );
};

export default TextInput;
