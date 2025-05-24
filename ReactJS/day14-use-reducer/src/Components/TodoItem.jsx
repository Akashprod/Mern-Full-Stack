import React from "react";

const TodoItem = ({ item, handleDelete, handleUpdate }) => {
  return (
    <li>
      <div style={{ display: "flex", gap: "5px", margin: "10px" }}>
        <h3>{item.title}</h3>
        <h4>- {item.status ? "Done" : "Not Done"} -</h4>
        <button onClick={() => handleUpdate(item.id)}>
          {item.status ? "Mark as Incomplete" : "Mark as Complete"}
        </button>
        <button
          onClick={() => {
            handleDelete(item.id);
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
