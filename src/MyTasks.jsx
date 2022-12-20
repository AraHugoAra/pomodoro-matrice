import React from "react";
import NewTask from "./NewTask";
import TasksList from "./TasksList";

export default function MyTasks({ tasks, setTasks }) {

    function handleSubmit(e) {
        e.preventDefault()
        setTasks([...tasks, {content: e.target.task.value, finished: false}])
        e.target.reset()
    }

  return (
    <div className="col" >
        <TasksList tasks={tasks} setTasks={setTasks} />
        <NewTask handleSubmit={handleSubmit} />
    </div>
  );
}
