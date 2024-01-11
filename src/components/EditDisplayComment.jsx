import React from "react";
import { useCallback } from "react";
import EditComment from "./EditComment";
import CommentDisplay from "./CommentDisplay";
import { useState } from "react";
import { useCommentDiscussionContext } from "../context/CommentDiscussionContext";

const EditDisplayComment = (props) => {
  const { editComment } = useCommentDiscussionContext();

  const [isEditing, setIsEditing] = useState();

  const handleEditClick = useCallback(() => setIsEditing(true), []);

  const handleEditPostClick = useCallback(async ({ commentText }) => {
    editComment({
      commentText,
      id: props.id,
    });
    setIsEditing(false);
  }, []);

  if (isEditing)
    return (
      <EditComment
        isEditing={true}
        onPostClick={handleEditPostClick}
        {...props}
      />
    );

  return <CommentDisplay {...props} onEditClick={handleEditClick} />;
};

export default EditDisplayComment;
