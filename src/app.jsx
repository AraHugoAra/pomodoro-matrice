import React, { useState } from "react";
import NewTask from "./NewTask";
import TasksList from "./TasksList";

export default function App() {
    const [taskList, setList] = useState(["Coucou petit perruche 🦜", "Le bébé 🐥"])

    function handleSubmit(e) {
        e.preventDefault()
        setList([...taskList, e.target.task.value])
        e.target.reset()
    }
    function handleDelete(e, task) {
        e.preventDefault()
        setList(taskList.filter(e => e !== task))
    }

  return (
    <>
        <h1 className="text-center">My Dashboard</h1>
        <TasksList taskList={taskList} handleDelete={handleDelete} />
        <NewTask handleSubmit={handleSubmit} />
    </>
  );
}
