import React from "react";
import { formatDate } from "../utils";
import { useCallback } from "react";
import useCommentData from "../hooks/useCommentData";
import DeleteButton from "./DeleteButton";
import { useCommentDiscussionContext } from "../context/CommentDiscussionContext";

const CommentDisplay = ({
  commentId,
  onEditClick = () => {},
  onReplyClick = () => {},
}) => {
  const { name, commentText, timestamp, parentId } = useCommentData(commentId);

  const { deleteComment } = useCommentDiscussionContext();

  return (
    <div className="px-6 py-2 bg-lw-offwhite rounded border border-lw-border relative">
      <CommentHeader>
        <CommentUser name={name} />
        <CommentDate timestamp={timestamp} />
      </CommentHeader>
      <CommentText text={commentText} />
      <CommentActions
        onEditClick={onEditClick}
        onReplyClick={onReplyClick}
        showReply={parentId === null}
      />
      <DeleteButton onClick={() => deleteComment(commentId)} />
    </div>
  );
};

const CommentText = ({ text }) => {
  return <p className="text-left py-2 whitespace-pre-line">{text}</p>;
};

const CommentHeader = ({ children }) => {
  return <div className="flex justify-between p-0">{children}</div>;
};

const CommentUser = ({ name = "" }) => {
  return <p className="font-bold">{name}</p>;
};

const CommentDate = ({ timestamp }) => {
  const date = new Date(timestamp);
  return <p>{formatDate(date)}</p>;
};

const CommentActions = ({ onEditClick, onReplyClick, showReply = true }) => {
  return (
    <div className="text-left">
      {showReply ? (
        <button
          className="font-semibold  text-lw-blue mr-2"
          onClick={onReplyClick}
        >
          Reply
        </button>
      ) : null}
      <button className="font-semibold text-lw-blue" onClick={onEditClick}>
        Edit
      </button>
    </div>
  );
};

export default CommentDisplay;
