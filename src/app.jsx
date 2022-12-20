import React, { useState } from "react";
import NewTask from "./NewTask";
import TasksList from "./TasksList";

export default function App() {
    const [tasks, setTasks] = useState([
        {content: "Coucou petit perruche 🦜", finished: false}, 
        {content: "Le bébé 🐥", finished: false}
    ])

    function handleSubmit(e) {
        e.preventDefault()
        setTasks([...tasks, {content: e.target.task.value, finished: false}])
        e.target.reset()
    }

  return (
    <>
        <h1 className="text-center">My Dashboard</h1>
        <TasksList tasks={tasks} setTasks={setTasks} />
        <NewTask handleSubmit={handleSubmit} />
    </>
  );
}
