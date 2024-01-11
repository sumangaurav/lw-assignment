import { generateUniqId } from "../utils";

export const COMMENT_DISCUSSION_ACTIONS = {
  INITIALIZE: "INITIALIZE",
  ADD_COMMENT: "ADD_COMMENT",
  ADD_REPLY: "ADD_REPLY",
  EDIT_COMMENT: "EDIT_COMMENT",
  DELETE_COMMENT: "DELETE_COMMENT",
  SORT_COMMENTS: "SORT_COMMENTS",
};

export default function commentDiscussionReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case COMMENT_DISCUSSION_ACTIONS.INITIALIZE: {
      return payload;
    }
    case COMMENT_DISCUSSION_ACTIONS.ADD_COMMENT: {
      const id = generateUniqId();
      const { name, commentText, timestamp } = payload;
      return {
        ...state,
        commentIds:
          state?.sortOrder === "DESC"
            ? [id, ...state.commentIds]
            : [...state.commentIds, id],
        commentData: {
          ...state.commentData,
          [id]: {
            name,
            commentText,
            timestamp,
            replies: [],
            parentId: null,
          },
        },
      };
    }

    case COMMENT_DISCUSSION_ACTIONS.ADD_REPLY: {
      const id = generateUniqId();
      const { name, commentText, timestamp, parentId } = payload;
      return {
        ...state,
        commentData: {
          ...state.commentData,
          [id]: {
            name,
            commentText,
            timestamp,
            replies: [],
            parentId,
          },
          [parentId]: {
            ...state.commentData[parentId],
            replies: [...state.commentData[parentId].replies, id],
          },
        },
      };
    }

    case COMMENT_DISCUSSION_ACTIONS.EDIT_COMMENT: {
      const { commentText, id } = payload;
      return {
        ...state,
        commentData: {
          ...state.commentData,
          [id]: {
            ...state.commentData[id],
            commentText,
          },
        },
      };
    }

    case COMMENT_DISCUSSION_ACTIONS.DELETE_COMMENT: {
      const { id } = payload;
      const isTopLevelComment = state.commentIds.some(
        (commentId) => commentId === id
      );

      if (isTopLevelComment) {
        return {
          ...state,
          commentIds: state.commentIds.filter((commentId) => commentId !== id),
          commentData: {
            ...state.commentData,
            [id]: null,
          },
        };
      }

      const parentCommentId = state.commentData[id].parentId;

      return {
        ...state,
        commentData: {
          ...state.commentData,
          [parentCommentId]: {
            ...state.commentData[parentCommentId],
            replies: state.commentData[parentCommentId].replies.filter(
              (commentId) => commentId !== id
            ),
          },
          [id]: null,
        },
      };
    }

    case COMMENT_DISCUSSION_ACTIONS.SORT_COMMENTS: {
      const { sortOrder } = payload;

      return {
        ...state,
        sortOrder,
        commentIds: [...state.commentIds].sort((id1, id2) =>
          sortOrder === "DESC"
            ? state.commentData[id2].timestamp -
              state.commentData[id1].timestamp
            : state.commentData[id1].timestamp -
              state.commentData[id2].timestamp
        ),
      };
    }

    default:
      return state;
  }
}
