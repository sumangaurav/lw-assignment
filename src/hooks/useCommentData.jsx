import React from "react";
import { useCommentDiscussionContext } from "../context/CommentDiscussionContext";

const useCommentData = (commentId) => {
  const { state } = useCommentDiscussionContext();

  /* 
    expected shape of commentData obj:
    { name, commentText, timestamp, replies, parentId }
    */
  return state?.commentData[commentId] ?? {};
};

export default useCommentData;
