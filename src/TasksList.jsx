import React from "react"

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
            <ul className="list-group">
                {tasks.map((task, index) => 
                <li 
                    className="d-flex justify-content-between align-items-center list-group-item" 
                    key={index} 
                >
                    <input 
                        className="form-check-input" 
                        type="checkbox" 
                        onChange={() => {handleCheck(task, index)}}
                    />
                        {task.content}
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