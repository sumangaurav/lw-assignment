import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import { generateUniqId } from "../utils";
import Comment from "./Comment";

const CommentDiscussion = () => {
  const [comments, setComments] = useState();

  const addComment = useCallback(({ commentText, name, timestamp }) => {
    setComments((prev) => [
      { commentText, name, timestamp, id: generateUniqId() },
      ...prev,
    ]);
  }, []);

  const deleteComment = useCallback((id) => {
    setComments((comments) => comments.filter((comment) => comment.id !== id));
  }, []);

  const editComment = useCallback(({ commentText, id }) => {
    setComments((comments) =>
      comments.map((comment) =>
        comment.id === id
          ? {
              commentText,
              name: comment.name,
              timestamp: comment.timestamp,
              id,
            }
          : comment
      )
    );
  }, []);

  return (
    <div className="text-center bg-pink-50 max-h-screen overflow-auto">
      <Comment />
    </div>
  );
};

export default CommentDiscussion;
