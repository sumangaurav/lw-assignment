import React from "react";
import { CommentDiscussionContextProvider } from "../context/CommentDiscussionContext";
import CreateComment from "./CreateComment";
import CommentThread from "./CommentThread";

const CommentDiscussion = () => {
  return (
    <CommentDiscussionContextProvider>
      <div className="text-center max-h-screen overflow-auto">
        <CreateComment />
        <CommentThread />
      </div>
    </CommentDiscussionContextProvider>
  );
};

export default CommentDiscussion;
