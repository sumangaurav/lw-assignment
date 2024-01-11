import React from "react";
import { CommentDiscussionContextProvider } from "../context/CommentDiscussionContext";
import CreateComment from "./CreateComment";
import CommentList from "./CommentList";

const CommentDiscussion = () => {
  return (
    <CommentDiscussionContextProvider>
      <div className="text-center max-h-screen overflow-auto">
        <CreateComment />
        <CommentList />
      </div>
    </CommentDiscussionContextProvider>
  );
};

export default CommentDiscussion;
