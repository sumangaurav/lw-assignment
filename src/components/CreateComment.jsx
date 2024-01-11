import React from "react";
import { useCallback } from "react";
import { useCommentDiscussionContext } from "../context/CommentDiscussionContext";
import EditComment from "./EditComment";

const CreateComment = () => {
  const { addComment } = useCommentDiscussionContext();
  const handlePostClick = useCallback(async ({ name, commentText }) => {
    addComment({
      commentText,
      name,
      timestamp: new Date().valueOf(),
    });
  }, []);

  return (
    <EditComment
      isEditing={false}
      isReply={false}
      commentId={null}
      onPostClick={handlePostClick}
    />
  );
};

export default CreateComment;
