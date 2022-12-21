import React from "react";

export default function Currently({ tasks, setTasks }) {

  let focused = ""
  tasks.map(t => (t.focus & !t.finished) && (focused = t.content))

  function handleDone(e){
    e.preventDefault()
    const focusedTask = tasks.filter(task => task.focus)[0]
    const taskIndex = tasks.indexOf(focusedTask)
    const toUpdate = [...tasks]
    toUpdate.splice(taskIndex, 1, {...focusedTask, focus: false, finished: true})
    setTasks(toUpdate)
  }

  return (
    <div className="col d-flex flex-column justify-content-center align-items-center">
        <h2 className="mb-5">Currently doing</h2>
        <p className="mb-5">
          {focused ? `${focused}` : "Not currently doing anything."}
        </p>
        <button 
          className="btn btn-outline-secondary"
          onClick={(e) => handleDone(e)}
        >
          I'm done <span role='img' aria-label="I'm done emoji">🧻</span>
        </button>
    </div>
  )
}