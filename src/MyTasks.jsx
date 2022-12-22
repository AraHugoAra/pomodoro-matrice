import React, { useContext } from "react"
import NewTask from "./NewTask"
import TasksList from "./TasksList"
import { ThemeContext } from "./ThemeContext"

export default function MyTasks({ tasks, setTasks }) {

    function handleSubmit(e) {
        e.preventDefault()
        e.target.task.value && setTasks([...tasks, {content: e.target.task.value, finished: false, focus: false}])
        e.target.reset()
    }

    //Dark theme
    let darktheme = useContext(ThemeContext)
    const myTasksStyle = {
      light: {
          backgroundColor: "white",
          color: "black"
      },
      dark: {
          backgroundColor: "rgb(21, 21, 21)",
          color: "white"
      }
  }

  return (
    <div style={darktheme ? myTasksStyle.dark : myTasksStyle.light} className="col" >
        <TasksList tasks={tasks} setTasks={setTasks} />
        <NewTask handleSubmit={handleSubmit} />
    </div>
  );
}
