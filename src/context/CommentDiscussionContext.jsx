import React from "react";

import { useCallback, useState, useContext, createContext } from "react";

import { useReducer } from "react";
import commentDiscussionReducer, {
  COMMENT_DISCUSSION_ACTIONS,
} from "../reducers/commentDiscussionReducer";
import { useEffect } from "react";
import { CommentPersistenceService } from "../services/CommentPersistenceService";
import { useRef } from "react";

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
  const isPersistedStateLoaded = useRef(false);

  const [state, reducerDispatch] = useReducer(
    commentDiscussionReducer,
    defaultCommentDiscussionState
  );

  const initialize = useCallback((state) => {
    reducerDispatch({
      type: COMMENT_DISCUSSION_ACTIONS.INITIALIZE,
      payload: state,
    });
  }, []);

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
      payload: { sortOrder },
    });
  }, []);

  useEffect(() => {
    if (isPersistedStateLoaded.current)
      CommentPersistenceService.set("comments", JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    const getPersistedState = async () => {
      const serializedState = await CommentPersistenceService.get("comments");

      try {
        const parsedState = JSON.parse(serializedState);
        initialize(parsedState);
      } catch (err) {
        console.error(err);
      }

      isPersistedStateLoaded.current = true;
    };

    getPersistedState();
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
