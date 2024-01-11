import React from "react";

import { useCallback, useState, useContext, createContext } from "react";
import { generateUniqId } from "../utils";

const defaultCommentDiscussionState = {
  commentIds: [],
  commentData: {},
};

export const CommentDiscussionContext = createContext(
  defaultCommentDiscussionState
);

export const useCommentDiscussionContext = () =>
  useContext(CommentDiscussionContext);

export const CommentDiscussionContextProvider = ({ children }) => {
  const [comments, setComments] = useState([]);

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

  console.log(comments);

  return (
    <CommentDiscussionContext.Provider
      value={{ comments, addComment, deleteComment, editComment }}
    >
      {children}
    </CommentDiscussionContext.Provider>
  );
};
