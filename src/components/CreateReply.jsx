import React from "react";

const CreateReply = ({ parentCommentId }) => {
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

export default CreateReply;
