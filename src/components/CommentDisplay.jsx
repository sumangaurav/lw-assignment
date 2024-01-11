import React from "react";
import { formatDate } from "../utils";

const CommentDisplay = ({ name = "", commentText = "", date }) => {
  return (
    <div className="px-6 py-2 bg-lw-offwhite rounded">
      <CommentHeader>
        <CommentUser name={name} />
        <CommentDate date={date} />
      </CommentHeader>
      <CommentText text={commentText} />
      <CommentActions />
    </div>
  );
};

const CommentText = ({ text }) => {
  return <p className="text-left py-2">{text}</p>;
};

const CommentHeader = ({ children }) => {
  return <div className="flex justify-between p-0">{children}</div>;
};

const CommentUser = ({ name = "" }) => {
  return <p className="font-bold">{name}</p>;
};

const CommentDate = ({ date }) => {
  return <p>{formatDate(date)}</p>;
};

const CommentActions = ({}) => {
  return (
    <div className="text-left">
      <button className="font-semibold  text-lw-blue mr-2"> Reply </button>
      <button className="font-semibold text-lw-blue"> Edit </button>
    </div>
  );
};

export default CommentDisplay;
