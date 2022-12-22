import React from "react";
import NewTask from "./NewTask";
import TasksList from "./TasksList";

export default function MyTasks({ tasks, setTasks }) {

    function handleSubmit(e) {
        e.preventDefault()
        e.target.task.value && setTasks([...tasks, {content: e.target.task.value, finished: false, focus: false}])
        e.target.reset()
    }

  return (
    <div className="col bg-white" >
        <TasksList tasks={tasks} setTasks={setTasks} />
        <NewTask handleSubmit={handleSubmit} />
    </div>
  );
}
