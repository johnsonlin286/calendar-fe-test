import { useMemo } from "react";

const Button = ({ children, color, outline, onClick, className }) => {
  const styles = useMemo(() => {
    switch (color) {
      case "red":
        return !outline
          ? "border-red-500 bg-red-500 text-white"
          : "border-red-500 text-red-500";
      case "yellow":
        return !outline
          ? "border-yellow-500 bg-yellow-500 text-white"
          : "border-yellow-500 text-yellow-500";
      case "green":
        return !outline
          ? "border-green-500 bg-green-500 text-white"
          : "border-green-500 text-green-500";
      case "blue":
        return !outline
          ? "border-blue-500 bg-blue-500 text-white"
          : "border-blue-500 text-blue-500";
      default:
        return !outline
          ? "border-black bg-black text-white"
          : "border-black text-black";
    }
  }, [color, outline]);
  return (
    <button
      onClick={onClick}
      className={`bg-white border rounded-md ${styles} hover:opacity-80 font-medium py-2 px-3 ${
        className || ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
