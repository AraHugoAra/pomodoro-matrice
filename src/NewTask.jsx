import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function NewTask({ handleSubmit }) {
  //Dark theme
  let darktheme = useContext(ThemeContext);
  const newTaskStyle = {
    light: null,
    dark: {
      backgroundColor: "rgb(44, 44, 44)",
      color: "white",
      border: "none",
    },
  };

  return (
    <form onSubmit={handleSubmit} className="form-group my-4">
      <label htmlFor="task">
        <h4>New Task:</h4>
      </label>
      <input
        style={darktheme ? newTaskStyle.dark : newTaskStyle.light}
        name="task"
        id="task"
        className="form-control"
        type="text"
      />
    </form>
  );
}
