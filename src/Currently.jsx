import React, { useState } from "react"
import Timer from "./Timer"

export default function Currently({ tasks, setTasks }) {
  const [countdown, setCountdown] = useState(false)
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(25)

  let focused = ""
  tasks.map(t => (t.focus & !t.finished) && (focused = t.content))

  function handleDone(e){
    e.preventDefault()
    const focusedTask = tasks.filter(task => task.focus)[0]
    const taskIndex = tasks.indexOf(focusedTask)
    const toUpdate = [...tasks]
    if(taskIndex !== -1) {
      toUpdate.splice(taskIndex, 1, {...focusedTask, focus: false, finished: true})
      setTasks(toUpdate)
    }
    if(countdown) setCountdown(false)
  }

  return (
    <div className="bg-transparent col d-flex flex-column justify-content-center align-items-center">
        <h2 className="mb-5">Currently doing</h2>
        <p className="mb-5">
          {focused ? `${focused}` : "Not currently doing anything."}
        </p>
        <div className="mb-4">
          <button 
            className="btn btn-outline-secondary mx-2"
            onClick={(e) => handleDone(e)}
          >
            I'm done <span role='img' aria-label="I'm done emoji">🧻</span>
          </button>
          <button 
            onClick={() => setCountdown(cd => !cd)}
            className="btn btn-warning mx-2"
          >
            Start 25' timer
          </button>
        </div>
        <Timer 
          countdown={countdown} 
          minutes={minutes} setMinutes={setMinutes}
          seconds={seconds} setSeconds={setSeconds}
        />
    </div>
  )
}