import React from "react";
import { useCommentDiscussionContext } from "../context/CommentDiscussionContext";
import EditDisplayComment from "./EditDisplayComment";
import { useCallback } from "react";
import useCommentList from "../hooks/useCommentList";

const CommentList = () => {
  const commentIds = useCommentList();
  const handleSort = useCallback(() => {}, []);
  return (
    <div className="mt-2">
      <p className="text-right mb-1">
        <button className="" onClick={handleSort}>
          Sort By: Date and Time{" "}
        </button>
      </p>
      <div className="grid gap-2">
        {commentIds.map((commentId) => {
          return <EditDisplayComment commentId={commentId} key={commentId} />;
        })}
      </div>
    </div>
  );
};

export default CommentList;
