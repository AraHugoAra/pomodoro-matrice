import React from "react";

export default function NewTask({ handleSubmit }) {
  return (
      <form onSubmit={handleSubmit} className="form-group">
        <input name="task" className="form-control" type="text"/>
      </form>
  );
}
