import React from "react";
import { useCallback } from "react";
import EditComment from "./EditComment";
import CommentDisplay from "./CommentDisplay";
import { useState } from "react";
import { useCommentDiscussionContext } from "../context/CommentDiscussionContext";
import ReplyThread from "./ReplyThread";
import CreateReply from "./CreateReply";

const EditDisplayComment = ({ commentId }) => {
  const { addReply, editComment } = useCommentDiscussionContext();

  const [isEditing, setIsEditing] = useState(false);
  const [isReplying, setIsReplying] = useState(false);

  const handleEditClick = useCallback(() => setIsEditing(true), []);

  const handleEditPostClick = useCallback(async ({ commentText }) => {
    editComment({
      commentText,
      id: commentId,
    });
    setIsEditing(false);
  }, []);

  const handleReplyClick = useCallback(() => setIsReplying(true), []);

  const handleReplyPostClick = useCallback(async ({ name, commentText }) => {
    addReply({
      name,
      commentText,
      timestamp: new Date().valueOf(),
      parentId: commentId,
    });
    setIsReplying(false);
  }, []);

  return (
    <>
      {isEditing ? (
        <EditComment
          isEditing={true}
          commentId={commentId}
          onPostClick={handleEditPostClick}
        />
      ) : (
        <CommentDisplay
          commentId={commentId}
          onEditClick={handleEditClick}
          onReplyClick={handleReplyClick}
        />
      )}

      <ReplyThread parentCommentId={commentId}>
        {isReplying ? <CreateReply onPostClick={handleReplyPostClick} /> : null}
      </ReplyThread>
    </>
  );
};

export default EditDisplayComment;
