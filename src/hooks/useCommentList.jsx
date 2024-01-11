import React from "react";
import { useCommentDiscussionContext } from "../context/CommentDiscussionContext";

const useCommentList = (commentId) => {
  const { state } = useCommentDiscussionContext();

  /* 
    expected shape of commentData obj:
    { name, commentText, timestamp, replies, parentCommentId }
    */
  return commentId ? state?.commentData[commentId]?.replies : state?.commentIds;
};

export default useCommentList;
