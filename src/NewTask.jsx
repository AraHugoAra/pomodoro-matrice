import React from "react";

export default function NewTask({ handleSubmit }) {
  return (
      <form onSubmit={handleSubmit} className="form-group my-4">
        <label htmlFor="task"><h4>New Task:</h4></label>
        <input name="task" id="task" className="form-control" type="text"/>
      </form>
  );
}
