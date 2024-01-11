import React from "react";
import { useCommentDiscussionContext } from "../context/CommentDiscussionContext";

const useCommentData = (commentId) => {
  const { commentData } = useCommentDiscussionContext();

  /* 
    expected shape of commentData obj:
    { name, commentText, timestamp, replies, parentCommentId }
    */
  return commentData[commentId] ?? {};
};

export default useCommentData;
