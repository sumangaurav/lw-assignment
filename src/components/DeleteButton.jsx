import React from "react";
import { MdDelete } from "react-icons/md";

const DeleteButton = ({ onClick }) => {
  return (
    <button
      className="h-6 w-6 bg-gray-700 inline-grid items-center justify-center rounded-full hover:bg-opacity-80 absolute right-[-12px] -translate-y-1/2 top-1/2"
      onClick={onClick}
    >
      <MdDelete color="white" size={14} />
    </button>
  );
};

export default DeleteButton;
