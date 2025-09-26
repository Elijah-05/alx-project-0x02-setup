
import React from "react";
import { type ButtonProps } from "../../interfaces";

export default function Button({
  label,
  size = "medium",
  shape = "rounded-md",
  onClick,
}: ButtonProps) {
  const sizeClasses = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const baseClasses =
    "bg-blue-600 text-white font-semibold hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses[size]} ${shape}`}
    >
      {label}
    </button>
  );
}
