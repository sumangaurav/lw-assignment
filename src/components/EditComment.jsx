import React from "react";
import { useCallback } from "react";
import { forwardRef } from "react";
import { useRef } from "react";

const NameField = forwardRef(({ value, disabled }, ref) => {
  return (
    <input
      ref={ref}
      className="w-full px-2 py-1 border border-lw-border rounded-sm disabled:text-gray-400 disabled:cursor-not-allowed"
      defaultValue={value}
      placeholder="Name"
      disabled={disabled}
    />
  );
});

const CommentField = forwardRef((props, ref) => {
  const { value } = props;
  return (
    <textarea
      ref={ref}
      defaultValue={value}
      className="w-full resize-none px-2 py-1 border border-lw-border rounded-sm"
      placeholder="Comment"
    ></textarea>
  );
});

const PostCommentAction = ({ onPostClick }) => {
  return (
    <button
      className="self-end p-1 bg-lw-blue font-bold text-white w-24 rounded"
      onClick={onPostClick}
    >
      POST
    </button>
  );
};

const EditComment = ({
  isEditing = false,
  isReply = false,
  commentId,
  name = "",
  commentText = "",
  onPostClick = async () => {},
}) => {
  const nameRef = useRef(null);
  const commentRef = useRef(null);

  const clearComment = useCallback(() => {
    nameRef.current.value = "";
    commentRef.current.value = "";
  }, []);

  const handlePost = useCallback(async () => {
    const nameText = nameRef?.current?.value;
    const commentText = commentRef?.current?.value;

    await onPostClick({
      commentId,
      name: nameText,
      commentText,
    });

    if (commentId === null) clearComment();

    /* do something here */
  }, []);

  return (
    <div className="px-4 py-2 bg-lw-offwhite flex flex-col gap-2 justify-stretch border border-lw-border rounded">
      <p className="text-left font-medium">{isReply ? "Reply" : "Comment"}</p>
      <NameField ref={nameRef} value={name} disabled={isEditing} />
      <CommentField ref={commentRef} value={commentText} />
      <PostCommentAction onPostClick={handlePost} />
    </div>
  );
};

export default EditComment;
