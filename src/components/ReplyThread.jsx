import React from "react";
import EditDisplayComment from "./EditDisplayComment";
import useCommentList from "../hooks/useCommentList";

const ReplyThread = ({ children, parentCommentId }) => {
  const commentIds = useCommentList(parentCommentId);
  return (
    <div className="pl-16">
      <div className="grid gap-2">
        {commentIds.map((commentId) => {
          return <EditDisplayComment commentId={commentId} key={commentId} />;
        })}
        {children}
      </div>
    </div>
  );
};

export default ReplyThread;
