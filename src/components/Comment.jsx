import React from "react";

const NameField = ({ value }) => {
  return (
    <input
      className="w-full px-2 py-1 border border-lw-border rounded-sm"
      defaultValue={value}
      placeholder="Name"
      onChange={() => {}}
    />
  );
};

const CommentField = () => {
  return (
    <textarea
      className="w-full resize-none px-2 py-1 border border-lw-border rounded-sm"
      placeholder="Comment"
      onChange={() => {}}
    ></textarea>
  );
};

const PostCommentAction = () => {
  return (
    <button className="self-end p-1 bg-lw-blue font-bold text-white w-24 rounded">
      POST
    </button>
  );
};

const Comment = ({ isEditing = false, isReply = false }) => {
  return (
    <div className="px-4 py-2 bg-lw-offwhite flex flex-col gap-2 justify-stretch">
      <p className="text-left font-medium">{isReply ? "Reply" : "Comment"}</p>
      <NameField value={""} disabled={isEditing} />
      <CommentField value={""} />
      <PostCommentAction />
    </div>
  );
};

export default Comment;
