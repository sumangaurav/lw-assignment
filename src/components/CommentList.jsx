import React from "react";
import { useCommentDiscussionContext } from "../context/CommentDiscussionContext";
import EditDisplayComment from "./EditDisplayComment";
import { useCallback } from "react";
import useCommentList from "../hooks/useCommentList";
import { MdOutlineArrowUpward, MdOutlineArrowDownward } from "react-icons/md";

const CommentList = () => {
  const commentIds = useCommentList();
  const {
    state: { sortOrder },
    sortComments,
  } = useCommentDiscussionContext();

  const handleSort = () => {
    sortComments(sortOrder === "DESC" ? "ASC" : "DESC");
  };

  const SortIconComp =
    sortOrder !== "DESC" ? MdOutlineArrowDownward : MdOutlineArrowUpward;
  return (
    <div className="mt-2">
      <button
        className="flex justify-end items-center ml-auto"
        onClick={handleSort}
      >
        Sort By: Date and Time <SortIconComp size={20} />
      </button>
      <div className="grid gap-0">
        {commentIds.map((commentId) => {
          return <EditDisplayComment commentId={commentId} key={commentId} />;
        })}
      </div>
    </div>
  );
};

export default CommentList;
