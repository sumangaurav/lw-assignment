import React from "react";
import { useCallback } from "react";
import { forwardRef } from "react";
import { useRef } from "react";
import useCommentData from "../hooks/useCommentData";

const NameField = forwardRef(({ value, disabled, autoFocus }, ref) => {
  return (
    <input
      ref={ref}
      className="w-full px-2 py-1 border border-lw-border rounded-sm disabled:text-gray-400 disabled:cursor-not-allowed"
      autoFocus={autoFocus}
      defaultValue={value}
      placeholder="Name"
      disabled={disabled}
    />
  );
});

const CommentField = forwardRef((props, ref) => {
  const { value, autoFocus } = props;
  return (
    <textarea
      ref={ref}
      defaultValue={value}
      autoFocus={autoFocus}
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
  onPostClick = async () => {},
}) => {
  const {
    name = "",
    commentText = "",
    parentId = null,
  } = useCommentData(commentId);

  const isCreateNewComment = commentId === null;
  /* if isReply is passed as true (for case of creating new reply ) use that else decide based on parentId */
  isReply = isReply || parentId !== null;

  const nameRef = useRef(null);
  const commentRef = useRef(null);

  const clearComment = useCallback(() => {
    if (nameRef?.current) nameRef.current.value = "";

    if (commentRef?.current) commentRef.current.value = "";
  }, []);

  const isInputValid = useCallback((name, commentText) => {
    let isValid = true;

    if (name.length > 0 && name.trim().length > 0) isValid = isValid && true;
    else isValid = false;

    if (commentText.length > 0 && commentText.trim().length > 0)
      isValid = isValid && true;
    else isValid = false;

    return isValid;
  }, []);

  const handlePost = useCallback(async () => {
    const nameText = nameRef?.current?.value;
    const commentText = commentRef?.current?.value;

    if (isInputValid(nameText, commentText)) {
      await onPostClick({
        commentId,
        name: nameText,
        commentText,
      });

      if (isCreateNewComment) clearComment();
    }

    /* do something here */
  }, []);

  return (
    <div className="px-4 py-2 bg-lw-offwhite flex flex-col gap-2 justify-stretch border border-lw-border rounded">
      <p className="text-left font-medium">{isReply ? "Reply" : "Comment"}</p>
      <NameField
        autoFocus={!isEditing}
        ref={nameRef}
        value={name}
        disabled={isEditing}
      />
      <CommentField
        autoFocus={isEditing}
        ref={commentRef}
        value={commentText}
      />
      <PostCommentAction onPostClick={handlePost} />
    </div>
  );
};

export default EditComment;
