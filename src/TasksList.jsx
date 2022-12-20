import React from "react"
import ProgressBar from "./ProgressBar"

export default function TasksList({ tasks, setTasks }) {

    function handleCheck(task, index) {
        const toUpdate = [...tasks]
        toUpdate.splice(index, 1, {content: task.content, finished: !task.finished})
        setTasks(toUpdate)
    }
    
    function handleDelete(e, task) {
        e.preventDefault()
        setTasks(tasks.filter(e => e !== task))
    }
    return(
        <>
            <h2>My Tasks</h2>
            <ProgressBar tasks={tasks} />
            <ul className="list-group">
                {tasks.map((task, index) => 
                <li 
                    className="d-flex justify-content-between align-items-center list-group-item pl-4" 
                    key={index} 
                >
                    <input 
                        className="form-check-input mb-1" 
                        type="checkbox" 
                        // name={index}
                        id={index}
                        onChange={() => {handleCheck(task, index)}}
                    />
                    <label className="my-2" htmlFor={index}>{task.content}
                    </label>
                    <button 
                        className="btn btn-danger"
                        onClick={(e) => handleDelete(e, task)}
                    >
                        X
                    </button>
                </li>)}
            </ul>
        </>
    )
}