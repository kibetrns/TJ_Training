import React from "react";

function NoTask() {
  return (
    <div
      className="default-message-when-todos-is-empty-container"
      id="default-message-when-todos-is-empty-container"
    >
      <hr />
      <h3>No tasks</h3>
      <hr />
    </div>
  );
}

export default NoTask;
