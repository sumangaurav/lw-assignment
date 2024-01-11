import React from "react";
import EditComment from "./EditComment";
import { useRef } from "react";
import { useEffect } from "react";

const CreateReply = ({ onPostClick }) => {
  const ref = useRef();

  useEffect(() => {
    ref?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, []);

  return (
    <div ref={ref}>
      <EditComment
        isEditing={false}
        isReply={true}
        commentId={null}
        onPostClick={onPostClick}
      />
    </div>
  );
};

export default CreateReply;
