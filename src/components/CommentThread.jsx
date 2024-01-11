import React from "react";
import { useCommentDiscussionContext } from "../context/CommentDiscussionContext";
import EditDisplayComment from "./EditDisplayComment";
import { useCallback } from "react";

const CommentThread = () => {
  const { comments } = useCommentDiscussionContext();
  const handleSort = useCallback(() => {}, []);
  return (
    <div className="mt-2">
      <p className="text-right mb-1">
        <button className="" onClick={handleSort}>
          Sort By: Date and Time{" "}
        </button>
      </p>
      <div className="grid gap-2">
        {comments.map((comment) => {
          return <EditDisplayComment {...comment} key={comment.id} />;
        })}
      </div>
    </div>
  );
};

export default CommentThread;
