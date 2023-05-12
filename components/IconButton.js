import { Icon } from "@iconify/react";

const IconButton = ({ icon, outline, size, color, style, onClick }) => {
  return (
    <button
      className={`flex justify-center items-center w-fit ${
        outline ? "border rounded-md" : ""
      } p-2 ${style || ""}`}
      onClick={onClick}
    >
      <Icon icon={icon} color={color} width={size} height={size} />
    </button>
  );
};

export default IconButton;
