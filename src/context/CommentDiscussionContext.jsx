import React from "react";

import { useCallback, useState, useContext, createContext } from "react";

import { useReducer } from "react";
import commentDiscussionReducer, {
  COMMENT_DISCUSSION_ACTIONS,
} from "../reducers/commentDiscussionReducer";

const defaultCommentDiscussionState = {
  sortOrder: "DESC",
  commentIds: [],
  commentData: {},
};

export const CommentDiscussionContext = createContext(
  defaultCommentDiscussionState
);

export const useCommentDiscussionContext = () =>
  useContext(CommentDiscussionContext);

export const CommentDiscussionContextProvider = ({ children }) => {
  const [state, reducerDispatch] = useReducer(
    commentDiscussionReducer,
    defaultCommentDiscussionState
  );

  const addComment = useCallback(({ commentText, name, timestamp }) => {
    reducerDispatch({
      type: COMMENT_DISCUSSION_ACTIONS.ADD_COMMENT,
      payload: { commentText, name, timestamp },
    });
  }, []);

  const addReply = useCallback(({ parentId, commentText, name, timestamp }) => {
    reducerDispatch({
      type: COMMENT_DISCUSSION_ACTIONS.ADD_REPLY,
      payload: { commentText, name, timestamp, parentId },
    });
  }, []);

  const editComment = useCallback(({ commentText, id }) => {
    reducerDispatch({
      type: COMMENT_DISCUSSION_ACTIONS.EDIT_COMMENT,
      payload: { id, commentText },
    });
  }, []);

  const deleteComment = useCallback((id) => {
    reducerDispatch({
      type: COMMENT_DISCUSSION_ACTIONS.DELETE_COMMENT,
      payload: { id },
    });
  }, []);

  const sortComments = useCallback((sortOrder = "DESC") => {
    reducerDispatch({
      type: COMMENT_DISCUSSION_ACTIONS.SORT_COMMENTS,
      payload: sortOrder,
    });
  }, []);

  return (
    <CommentDiscussionContext.Provider
      value={{
        state,
        addComment,
        addReply,
        deleteComment,
        editComment,
        sortComments,
      }}
    >
      {children}
    </CommentDiscussionContext.Provider>
  );
};
