import React from "react";

const TodoItem = ({ content, onDelete }) => {
  return (
    <li>
      {content}
      <span onClick={onDelete}>
        <button>Delete</button>
      </span>
    </li>
  );
};
export default TodoItem;
